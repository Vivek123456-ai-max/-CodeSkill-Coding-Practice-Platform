import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { Problem, SupportedLanguage } from '../types/problem';
import { 
  problemService, 
  submissionService, 
  userStatsService, 
  normalizeProblem, 
  sortProblemsSerially, 
  getProblemBook, 
  getStoredStatusMap,
  savedCodeService,
  resolveCanonicalProblemId,
  safeLocalStorageSet,
  getUserScopedKey,
  LOCAL_STATUS_KEY
} from '../lib/supabase';
import { ALL_PROBLEMS } from '../lib/allProblems';
import { evaluateCodeAgainstTestCases, ExecutionResult } from '../lib/codeExecution';
import { generateAISolution } from '../lib/aiTutor';
import { AISolutionResponse } from '../types/ai';
import { useAuth } from './AuthContext';
import confetti from 'canvas-confetti';

interface ProblemContextType {
  problems: Problem[];
  activeProblem: Problem | null;
  setActiveProblem: (problem: Problem | null) => void;
  language: SupportedLanguage;
  setLanguage: (lang: SupportedLanguage) => void;
  code: string;
  setCode: (code: string, syncState?: boolean) => void;
  isSaving: boolean;
  hasUnsavedChanges: boolean;
  lastSavedAt: Date | null;
  realtimeStatus: 'connected' | 'synced' | 'connecting';
  executionResult: ExecutionResult | null;
  isRunning: boolean;
  isSubmitting: boolean;
  aiSolution: AISolutionResponse | null;
  isGeneratingAI: boolean;
  activeTab: 'problem' | 'ai_tutor' | 'submissions';
  setActiveTab: (tab: 'problem' | 'ai_tutor' | 'submissions') => void;
  isRevisionMode: boolean;
  setIsRevisionMode: (val: boolean) => void;
  saveCode: () => Promise<void>;
  runCode: (customInput?: string) => Promise<ExecutionResult>;
  submitCode: () => Promise<boolean>;
  askAITutor: () => Promise<void>;
  refreshProblems: () => Promise<void>;
  addProblem: (problem: Omit<Problem, 'id' | 'created_at' | 'updated_at'>) => Promise<Problem>;
  deleteProblem: (id: string) => Promise<void>;
  clearAllProblems: () => Promise<void>;
  syncAllToSupabase: (onProgress?: (syncedCount: number, totalCount: number) => void) => Promise<{ count: number; error?: string }>;
}

const ProblemContext = createContext<ProblemContextType | undefined>(undefined);

const initialProblemList: Problem[] = sortProblemsSerially(ALL_PROBLEMS);

function getHydratedInitialProblems(userId?: string | null): Problem[] {
  try {
    const statusMap = getStoredStatusMap(userId);
    return initialProblemList.map((p) => ({
      ...p,
      status: statusMap[p.id] || 'not_started',
    }));
  } catch {
    return initialProblemList;
  }
}

export const ProblemProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useAuth();
  
  // Synchronous guaranteed non-empty initialization with hydrated status
  const [problems, setProblems] = useState<Problem[]>(() => {
    return getHydratedInitialProblems(user?.id || null);
  });

  const [activeProblem, setActiveProblemState] = useState<Problem | null>(() => {
    return initialProblemList.length > 0 ? initialProblemList[0] : null;
  });

  const [language, setLanguageState] = useState<SupportedLanguage>('cpp');
  const codeRef = React.useRef<string>(
    initialProblemList[0]?.starter_templates?.['cpp'] || '// Write your C++ solution here\n'
  );
  const [code, setCodeState] = useState<string>(() => {
    return initialProblemList[0]?.starter_templates?.['cpp'] || '// Write your C++ solution here\n';
  });

  const [isSaving, setIsSaving] = useState(false);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const [lastSavedAt, setLastSavedAt] = useState<Date | null>(null);
  const [realtimeStatus, setRealtimeStatus] = useState<'connected' | 'synced' | 'connecting'>('connected');
  const [executionResult, setExecutionResult] = useState<ExecutionResult | null>(null);
  const [isRunning, setIsRunning] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [aiSolution, setAiSolution] = useState<AISolutionResponse | null>(null);
  const [isGeneratingAI, setIsGeneratingAI] = useState(false);
  const [activeTab, setActiveTab] = useState<'problem' | 'ai_tutor' | 'submissions'>('problem');
  const [isRevisionMode, setIsRevisionMode] = useState<boolean>(false);

  const refreshProblems = useCallback(async () => {
    try {
      const list = await problemService.getProblems(user?.id || null);
      if (list && list.length > 0) {
        setProblems(list);
        setActiveProblemState((curr) => {
          if (!curr || !list.some((p) => p.id === curr.id)) {
            return list[0];
          }
          const matched = list.find((p) => p.id === curr.id);
          return matched || curr;
        });
      }
    } catch (e) {
      console.warn('refreshProblems error:', e);
    }
  }, [user?.id]);

  useEffect(() => {
    refreshProblems();

    const handleWindowSync = () => {
      refreshProblems();
    };

    window.addEventListener('codetutor_status_synced', handleWindowSync);
    return () => {
      window.removeEventListener('codetutor_status_synced', handleWindowSync);
    };
  }, [refreshProblems, user?.id]);

  const activeProblemRef = React.useRef<Problem | null>(activeProblem);
  activeProblemRef.current = activeProblem;

  const hasUnsavedChangesRef = React.useRef<boolean>(hasUnsavedChanges);
  hasUnsavedChangesRef.current = hasUnsavedChanges;

  const languageRef = React.useRef<SupportedLanguage>(language);
  languageRef.current = language;

  // Real-time Supabase Database Subscription & Multi-Tab Broadcast Sync - Mounted ONCE
  useEffect(() => {
    setRealtimeStatus('connecting');

    // 1. Supabase Realtime Problems Channel (Problem statements/metadata updates)
    const problemsChannel = problemService.subscribeToProblems((payload) => {
      setRealtimeStatus('synced');
      setTimeout(() => setRealtimeStatus('connected'), 2000);

      const eventType = payload.eventType;
      const rawRecord = payload.new as Problem;
      const newRecord = rawRecord ? normalizeProblem(rawRecord) : null;
      const oldRecord = payload.old as { id: string };

      if (newRecord?.id) {
        setProblems((prev) => {
          if (eventType === 'INSERT') {
            return [{ ...newRecord, status: 'not_started' }, ...prev.filter((p) => p.id !== newRecord.id)];
          } else if (eventType === 'UPDATE') {
            // Preserve user's current solved status
            return prev.map((p) => (p.id === newRecord.id ? { ...p, ...newRecord, status: p.status } : p));
          }
          return prev;
        });

        if (activeProblemRef.current?.id === newRecord.id) {
          setActiveProblemState((prev) => (prev ? { ...prev, ...newRecord, status: prev.status } : newRecord));
        }
      } else if (eventType === 'DELETE' && oldRecord?.id) {
        setProblems((prev) => prev.filter((p) => p.id !== oldRecord.id));
        if (activeProblemRef.current?.id === oldRecord.id) {
          setActiveProblemState(null);
        }
      }
    });

    // 2. Supabase Realtime Submissions Channel (Live solves & code sync strictly for current user)
    const submissionsChannel = submissionService.subscribeToSubmissions((payload) => {
      setRealtimeStatus('synced');
      setTimeout(() => setRealtimeStatus('connected'), 2000);
      
      const newSub = payload.new;
      if (newSub && newSub.problem_id) {
        // CRITICAL ISOLATION: Only apply solve updates if the submission belongs to THIS logged-in user
        if (newSub.user_id && newSub.user_id !== user?.id) {
          return;
        }

        const canonicalId = resolveCanonicalProblemId(newSub.problem_id);
        const isAccepted = newSub.status === 'accepted' || 
          (typeof newSub.test_cases_passed === 'number' && typeof newSub.total_test_cases === 'number' && newSub.total_test_cases > 0 && newSub.test_cases_passed === newSub.total_test_cases);

        if (isAccepted) {
          const statusMap = getStoredStatusMap(user?.id);
          statusMap[canonicalId] = 'solved';
          safeLocalStorageSet(getUserScopedKey(LOCAL_STATUS_KEY, user?.id), JSON.stringify(statusMap));

          setProblems((prev) =>
            prev.map((p) => (p.id === canonicalId ? { ...p, status: 'solved' } : p))
          );

          if (activeProblemRef.current?.id === canonicalId) {
            setActiveProblemState((prev) => prev ? { ...prev, status: 'solved' } : prev);
          }
        }

        if (newSub.code && newSub.language) {
          savedCodeService.saveCodeSync(canonicalId, newSub.language, newSub.code, user?.id);
        }

        if (
          canonicalId === activeProblemRef.current?.id && 
          newSub.language === languageRef.current
        ) {
          if (!hasUnsavedChangesRef.current && newSub.code) {
            codeRef.current = newSub.code;
            setCodeState(newSub.code);
          }
        }
      }
    });

    // 3. Supabase Realtime User Stats Channel (Live cross-device streak & solved stats)
    const statsChannel = userStatsService.subscribeToStats(() => {
      setRealtimeStatus('synced');
      setTimeout(() => setRealtimeStatus('connected'), 2000);
    });

    // 4. Multi-Tab Instant BroadcastChannel & Storage Event Sync
    const liveBroadcast = typeof window !== 'undefined' && 'BroadcastChannel' in window
      ? new BroadcastChannel('codetutor_live_channel')
      : null;

    if (liveBroadcast) {
      liveBroadcast.onmessage = (event) => {
        const data = event.data;
        if (!data) return;

        // Verify that broadcast message is targeted to this user
        if (data.userId && data.userId !== user?.id) {
          return;
        }

        if (data.type === 'STATUS_SYNC') {
          refreshProblems();
        } else if (data.type === 'SOLVE_SYNC' && data.problemId) {
          const pId = resolveCanonicalProblemId(data.problemId);
          setProblems((prev) =>
            prev.map((p) => (p.id === pId ? { ...p, status: 'solved' } : p))
          );
          if (activeProblemRef.current?.id === pId) {
            setActiveProblemState((prev) => prev ? { ...prev, status: 'solved' } : prev);
          }
        } else if (data.type === 'CODE_SYNC' && data.problemId && data.code && data.language) {
          const pId = resolveCanonicalProblemId(data.problemId);
          savedCodeService.saveCodeSync(pId, data.language, data.code, user?.id);
          if (activeProblemRef.current?.id === pId && data.language === languageRef.current && !hasUnsavedChangesRef.current) {
            codeRef.current = data.code;
            setCodeState(data.code);
          }
        }
      };
    }

    setRealtimeStatus('connected');

    return () => {
      problemsChannel.unsubscribe();
      submissionsChannel.unsubscribe();
      statsChannel.unsubscribe();
      if (liveBroadcast) {
        liveBroadcast.close();
      }
    };
  }, [user?.id, refreshProblems]);

  // Handle active problem selection - 0ms instant single-click synchronous response
  const setActiveProblem = useCallback(
    (problem: Problem | null) => {
      if (!problem) {
        setActiveProblemState(null);
        codeRef.current = '';
        setCodeState('');
        setAiSolution(null);
        return;
      }

      const normalized = normalizeProblem(problem);
      setActiveProblemState(normalized);
      setExecutionResult(null);
      setAiSolution(null);
      hasUnsavedChangesRef.current = false;
      setHasUnsavedChanges(false);

      // Instant synchronous persistent cache check (0ms latency)
      const curLang = languageRef.current;
      const savedCode = submissionService.getLatestCodeSync(normalized.id, curLang, user?.id || null);
      if (savedCode) {
        codeRef.current = savedCode;
        setCodeState(savedCode);
      } else {
        const template =
          normalized.starter_templates[curLang] ||
          normalized.starter_templates['cpp'] ||
          '// Write your solution here\n';
        codeRef.current = template;
        setCodeState(template);
      }

      // Background async fallback check
      submissionService.getLatestCode(normalized.id, curLang, user?.id || null).then((asyncCode) => {
        if (asyncCode && activeProblemRef.current?.id === normalized.id && !hasUnsavedChangesRef.current) {
          codeRef.current = asyncCode;
          setCodeState(asyncCode);
        }
      }).catch(() => {});
    },
    [user?.id]
  );

  // Handle language switch - 0ms instant synchronous response
  const setLanguage = useCallback(
    (lang: SupportedLanguage) => {
      setLanguageState(lang);
      const curr = activeProblemRef.current;
      if (curr) {
        hasUnsavedChangesRef.current = false;
        setHasUnsavedChanges(false);
        const savedCode = submissionService.getLatestCodeSync(curr.id, lang, user?.id || null);
        if (savedCode) {
          codeRef.current = savedCode;
          setCodeState(savedCode);
        } else {
          const template =
            curr.starter_templates[lang] ||
            curr.starter_templates['cpp'] ||
            '// Write your solution here\n';
          codeRef.current = template;
          setCodeState(template);
        }

        // Background async fallback
        submissionService.getLatestCode(curr.id, lang, user?.id || null).then((asyncCode) => {
          if (asyncCode && activeProblemRef.current?.id === curr.id && !hasUnsavedChangesRef.current) {
            codeRef.current = asyncCode;
            setCodeState(asyncCode);
          }
        }).catch(() => {});
      }
    },
    [user?.id]
  );

  // Update code content with zero-lag O(1) ref updating & optional state syncing
  const setCode = useCallback((newCode: string, syncState = false) => {
    codeRef.current = newCode;
    hasUnsavedChangesRef.current = true;
    if (syncState) {
      setCodeState(newCode);
      setHasUnsavedChanges(true);
    }
  }, []);

  // Manual save code (local memory only, database writes happen exclusively on Submit)
  const saveCode = async () => {
    if (!activeProblem) return;
    setIsSaving(true);
    try {
      hasUnsavedChangesRef.current = false;
      setHasUnsavedChanges(false);
      setLastSavedAt(new Date());
    } finally {
      setIsSaving(false);
    }
  };

  const runCode = async (customInput?: string): Promise<ExecutionResult> => {
    if (!activeProblem) throw new Error('No active problem');
    setIsRunning(true);

    try {
      const currentCode = codeRef.current || code;
      const result = await evaluateCodeAgainstTestCases(
        language,
        currentCode,
        activeProblem.sample_test_cases || [],
        customInput
      );
      setExecutionResult(result);
      return result;
    } finally {
      setIsRunning(false);
    }
  };

  const submitCode = async (): Promise<boolean> => {
    if (!activeProblem) return false;
    setIsSubmitting(true);

    try {
      const currentCode = codeRef.current || code;
      const result = await evaluateCodeAgainstTestCases(
        language,
        currentCode,
        activeProblem.sample_test_cases || []
      );
      setExecutionResult(result);

      const isAccepted = result.status === 'accepted';
      const submissionStatus = isAccepted ? 'accepted' : result.status === 'wrong_answer' ? 'wrong_answer' : 'runtime_error';

      if (isRevisionMode) {
        // Revision Mode:
        // 1. DO NOT save submission to database code_submissions table
        // 2. DO NOT mark problem as 'solved'
        // 3. DO NOT increment total_solved / easy / medium / hard
        // 4. DO award +50 XP bonus and update streak!
        if (isAccepted) {
          await userStatsService.recordRevisionSolve(activeProblem.id, activeProblem.difficulty, user?.id || null);
          confetti({
            particleCount: 180,
            spread: 100,
            origin: { y: 0.6 },
            colors: ['#f59e0b', '#ec4899', '#8b5cf6', '#10b981', '#3b82f6'],
          });
        }
      } else {
        // Standard Mode:
        const currentStatusMap = getStoredStatusMap(user?.id);
        const wasAlreadySolved = activeProblem.status === 'solved' || currentStatusMap[activeProblem.id] === 'solved';

        // Always save latest code to local persistent cache
        savedCodeService.saveCodeSync(activeProblem.id, language, currentCode, user?.id || null);

        if (isAccepted) {
          if (!wasAlreadySolved) {
            // First time solving: save to Supabase code_submissions and update stats
            await submissionService.saveSubmission({
              problem_id: activeProblem.id,
              user_id: user?.id || null,
              language,
              code: currentCode,
              status: 'accepted',
              test_cases_passed: result.passedCount,
              total_test_cases: result.totalCount,
              execution_time_ms: result.timeMs,
              is_autosave: false,
            }, user?.id || null);

            await problemService.updateProblemStatus(activeProblem.id, 'solved', activeProblem, user?.id || null);
            await userStatsService.recordProblemSolved(activeProblem.difficulty, {
              isRevision: false,
              problemId: activeProblem.id,
              userId: user?.id || null,
              alreadySolved: false
            });
            
            setActiveProblemState((prev) => (prev ? { ...prev, status: 'solved' } : null));
            setProblems((prev) =>
              prev.map((p) => (p.id === activeProblem.id ? { ...p, status: 'solved' } : p))
            );

            confetti({
              particleCount: 120,
              spread: 80,
              origin: { y: 0.6 },
              colors: ['#22c55e', '#3b82f6', '#eab308', '#ec4899', '#a855f7'],
            });

            try {
              if (typeof window !== 'undefined' && 'BroadcastChannel' in window) {
                const bc = new BroadcastChannel('codetutor_live_channel');
                bc.postMessage({ type: 'SOLVE_SYNC', problemId: activeProblem.id, userId: user?.id || null });
                bc.close();
              }
            } catch {}
          } else {
            // Already solved: Do not insert into Supabase database, do not increment solve count or add XP
            setActiveProblemState((prev) => (prev ? { ...prev, status: 'solved' } : null));
          }
        }
      }

      return isAccepted;
    } catch {
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  const askAITutor = async () => {
    if (!activeProblem) return;
    setIsGeneratingAI(true);
    setActiveTab('ai_tutor');

    try {
      const currentCode = codeRef.current || code;
      const solution = await generateAISolution(activeProblem, language, currentCode);
      setAiSolution(solution);
    } catch (err) {
      console.error('Failed to generate AI solution:', err);
    } finally {
      setIsGeneratingAI(false);
    }
  };

  const addProblem = async (problemData: Omit<Problem, 'id' | 'created_at' | 'updated_at'>) => {
    const created = await problemService.createProblem(problemData, user?.id || null);
    await refreshProblems();
    setActiveProblem(created);
    return created;
  };

  const deleteProblem = async (id: string) => {
    await problemService.deleteProblem(id);
    await refreshProblems();
  };

  const clearAllProblems = async () => {
    localStorage.removeItem('ai_dsa_700_mastery_final_v1');
    localStorage.removeItem('ai_dsa_600_mastery_final_v1');
    localStorage.removeItem('ai_dsa_500_mastery_final_v1');
    setProblems(initialProblemList);
    setActiveProblem(initialProblemList[0] || null);
  };

  const syncAllToSupabase = async (onProgress?: (syncedCount: number, totalCount: number) => void) => {
    return await problemService.syncAllProblemsToSupabase(onProgress);
  };

  return (
    <ProblemContext.Provider
      value={{
        problems,
        activeProblem,
        setActiveProblem,
        language,
        setLanguage,
        code,
        setCode,
        isSaving,
        hasUnsavedChanges,
        lastSavedAt,
        realtimeStatus,
        executionResult,
        isRunning,
        isSubmitting,
        aiSolution,
        isGeneratingAI,
        activeTab,
        setActiveTab,
        isRevisionMode,
        setIsRevisionMode,
        saveCode,
        runCode,
        submitCode,
        askAITutor,
        refreshProblems,
        addProblem,
        deleteProblem,
        clearAllProblems,
        syncAllToSupabase,
      }}
    >
      {children}
    </ProblemContext.Provider>
  );
};

export const useProblem = () => {
  const context = useContext(ProblemContext);
  if (!context) {
    throw new Error('useProblem must be used within a ProblemProvider');
  }
  return context;
};
