import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import Editor, { OnMount } from '@monaco-editor/react';
import { useProblem } from '../context/ProblemContext';
import { useAuth } from '../context/AuthContext';
import { Problem, SupportedLanguage } from '../types/problem';
import { userStatsService, UserStats } from '../lib/supabase';
import { evaluateCodeAgainstTestCases, ExecutionResult } from '../lib/codeExecution';
import { generateAISolution } from '../lib/aiTutor';
import { AISolutionResponse } from '../types/ai';
import confetti from 'canvas-confetti';
import { 
  Shuffle, 
  Sparkles, 
  Zap, 
  RotateCcw, 
  CheckCircle2, 
  ArrowRight, 
  Award, 
  Filter,
  CheckCircle,
  Code2,
  Play,
  Send,
  Loader2,
  Terminal,
  XCircle,
  AlertTriangle,
  Clock,
  ChevronUp,
  ChevronDown,
  Copy,
  Check,
  Split,
  Bug,
  BookOpen,
  AlignLeft,
  Settings2,
  Palette,
  Maximize2,
  Minimize2,
  Info,
  Lock
} from 'lucide-react';

interface RevisionPageProps {
  onSelectProblemForRevision?: (problem: Problem) => void;
  onOpenAuthModal?: () => void;
}

const THEMES = [
  { id: 'vs-dark', label: 'Dark (Default)' },
  { id: 'vs-light', label: 'Light' },
  { id: 'dracula', label: 'Dracula' },
  { id: 'monokai', label: 'Monokai' },
  { id: 'nord', label: 'Nord' },
];

export const RevisionPage: React.FC<RevisionPageProps> = ({ onOpenAuthModal }) => {
  const { problems } = useProblem();
  const { user } = useAuth();

  const [stats, setStats] = useState<UserStats | null>(null);
  const [selectedBook, setSelectedBook] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [currentRandomProblem, setCurrentRandomProblem] = useState<Problem | null>(null);
  const [isRolling, setIsRolling] = useState(false);

  // Coding & Execution States
  const [language, setLanguage] = useState<SupportedLanguage>('cpp');
  const [code, setCode] = useState<string>('');
  const [isRunning, setIsRunning] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [executionResult, setExecutionResult] = useState<ExecutionResult | null>(null);
  const [hasSolvedRevision, setHasSolvedRevision] = useState(false);

  // Console & Editor UI States
  const [mobileActiveView, setMobileActiveView] = useState<'problem' | 'hints' | 'code' | 'console'>('code');
  const [activeLeftTab, setActiveLeftTab] = useState<'problem' | 'hints'>('problem');
  const [activeConsoleTab, setActiveConsoleTab] = useState<'testcases' | 'custom' | 'output' | 'ai_debug'>('testcases');
  const [selectedCase, setSelectedCase] = useState<number>(0);
  const [customInput, setCustomInput] = useState<string>('');
  const [isConsoleExpanded, setIsConsoleExpanded] = useState(true);
  const [diffViewMode, setDiffViewMode] = useState<'split' | 'unified'>('split');
  const [fontSize, setFontSize] = useState<number>(14);
  const [theme, setTheme] = useState<string>('vs-dark');
  const [copied, setCopied] = useState<boolean>(false);
  const [copiedLog, setCopiedLog] = useState<boolean>(false);
  const [showSettingsDropdown, setShowSettingsDropdown] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  // AI Tutor in Revision
  const [isGeneratingAI, setIsGeneratingAI] = useState(false);
  const [aiSolution, setAiSolution] = useState<AISolutionResponse | null>(null);

  const editorRef = useRef<any>(null);
  const monacoRef = useRef<any>(null);

  const languages: { id: SupportedLanguage; label: string; version: string; monacoLang: string }[] = [
    { id: 'cpp', label: 'C++', version: 'GCC 10.2 / C++17', monacoLang: 'cpp' },
    { id: 'python', label: 'Python', version: 'Python 3.10', monacoLang: 'python' },
    { id: 'javascript', label: 'JavaScript', version: 'Node.js 18', monacoLang: 'javascript' },
    { id: 'java', label: 'Java', version: 'OpenJDK 15', monacoLang: 'java' },
  ];

  const currentMonacoLang = languages.find((l) => l.id === language)?.monacoLang || 'cpp';

  const fetchStats = async () => {
    const s = await userStatsService.getStats(user?.id || null);
    setStats(s);
  };

  useEffect(() => {
    fetchStats();
    const handleSync = () => fetchStats();
    window.addEventListener('codetutor_status_synced', handleSync);
    return () => window.removeEventListener('codetutor_status_synced', handleSync);
  }, [user?.id]);

  // Filter pool based on selected book and difficulty
  const filteredPool = useMemo(() => {
    return problems.filter((p) => {
      const matchBook = selectedBook === 'all' || p.book === selectedBook;
      const matchDiff = selectedDifficulty === 'all' || p.difficulty === selectedDifficulty;
      return matchBook && matchDiff;
    });
  }, [problems, selectedBook, selectedDifficulty]);

  // Unrepeated revision pool (questions not yet in revision_completed_ids)
  const uncompletedRevisionPool = useMemo(() => {
    const completedSet = new Set(stats?.revision_completed_ids || []);
    return filteredPool.filter((p) => !completedSet.has(p.id));
  }, [filteredPool, stats?.revision_completed_ids]);

  // Pick random problem from uncompleted pool
  const pickRandomProblem = useCallback(() => {
    setIsRolling(true);
    setHasSolvedRevision(false);
    setExecutionResult(null);
    setAiSolution(null);
    setActiveConsoleTab('testcases');
    setSelectedCase(0);

    const pool = uncompletedRevisionPool.length > 0 ? uncompletedRevisionPool : filteredPool;
    
    if (pool.length === 0) {
      setCurrentRandomProblem(null);
      setIsRolling(false);
      return;
    }

    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * pool.length);
      const chosen = pool[randomIndex];
      setCurrentRandomProblem(chosen);

      // Initialize code template
      const template = chosen.starter_templates?.[language] || chosen.starter_templates?.['cpp'] || '// Write your revision solution here\n';
      setCode(template);
      if (editorRef.current) {
        editorRef.current.setValue(template);
      }

      setIsRolling(false);
    }, 200);
  }, [uncompletedRevisionPool, filteredPool, language]);

  // Initial pick when pool or filter changes
  useEffect(() => {
    if (!currentRandomProblem && filteredPool.length > 0) {
      pickRandomProblem();
    }
  }, [filteredPool, currentRandomProblem, pickRandomProblem]);

  // Update starter template when language changes
  const handleLanguageChange = (newLang: SupportedLanguage) => {
    setLanguage(newLang);
    if (currentRandomProblem) {
      const template = currentRandomProblem.starter_templates?.[newLang] || currentRandomProblem.starter_templates?.['cpp'] || '// Write your solution here\n';
      setCode(template);
      if (editorRef.current) {
        editorRef.current.setValue(template);
      }
    }
  };

  // Reset deck
  const handleResetDeck = async () => {
    if (window.confirm('Reset your revision deck to practice all questions again from scratch?')) {
      await userStatsService.resetRevisionDeck(user?.id || null);
      await fetchStats();
      pickRandomProblem();
    }
  };

  // Monaco Editor Mount
  const handleEditorDidMount: OnMount = (editor, monaco) => {
    editorRef.current = editor;
    monacoRef.current = monaco;

    monaco.editor.defineTheme('dracula', {
      base: 'vs-dark',
      inherit: true,
      rules: [
        { token: 'comment', foreground: '6272a4', fontStyle: 'italic' },
        { token: 'keyword', foreground: 'ff79c6', fontStyle: 'bold' },
        { token: 'string', foreground: 'f1fa8c' },
        { token: 'number', foreground: 'bd93f9' },
      ],
      colors: {
        'editor.background': '#1e1f29',
        'editor.foreground': '#f8f8f2',
        'editorCursor.foreground': '#aeafad',
        'editor.lineHighlightBackground': '#282a36',
        'editorLineNumber.foreground': '#6272a4',
      },
    });

    monaco.editor.defineTheme('nord', {
      base: 'vs-dark',
      inherit: true,
      rules: [
        { token: 'comment', foreground: '616E88' },
        { token: 'keyword', foreground: '81A1C1', fontStyle: 'bold' },
        { token: 'string', foreground: 'A3BE8C' },
        { token: 'number', foreground: 'B48EAD' },
      ],
      colors: {
        'editor.background': '#2E3440',
        'editor.foreground': '#D8DEE9',
        'editor.lineHighlightBackground': '#3B4252',
        'editorLineNumber.foreground': '#4C566A',
      },
    });

    monaco.editor.defineTheme('monokai', {
      base: 'vs-dark',
      inherit: true,
      rules: [
        { token: 'comment', foreground: '75715e' },
        { token: 'keyword', foreground: 'f92672', fontStyle: 'bold' },
        { token: 'string', foreground: 'e6db74' },
        { token: 'number', foreground: 'ae81ff' },
      ],
      colors: {
        'editor.background': '#272822',
        'editor.foreground': '#f8f8f2',
        'editor.lineHighlightBackground': '#3e3d32',
        'editorLineNumber.foreground': '#90908a',
      },
    });
  };

  // Run code against test cases
  const handleRunCode = async () => {
    if (!user) {
      onOpenAuthModal?.();
      return;
    }
    if (!currentRandomProblem) return;
    const currentCode = editorRef.current ? editorRef.current.getValue() : code;
    setIsRunning(true);
    setMobileActiveView('console');
    try {
      const result = await evaluateCodeAgainstTestCases(
        language,
        currentCode,
        currentRandomProblem.sample_test_cases || [],
        activeConsoleTab === 'custom' ? customInput : undefined
      );
      setExecutionResult(result);
    } catch (err: any) {
      console.error('Run code error:', err);
    } finally {
      setIsRunning(false);
    }
  };

  // Submit revision code
  const handleSubmitRevision = async () => {
    if (!user) {
      onOpenAuthModal?.();
      return;
    }
    if (!currentRandomProblem) return;
    const currentCode = editorRef.current ? editorRef.current.getValue() : code;
    setIsSubmitting(true);
    setMobileActiveView('console');
    try {
      const result = await evaluateCodeAgainstTestCases(
        language,
        currentCode,
        currentRandomProblem.sample_test_cases || []
      );
      setExecutionResult(result);

      if (result.status === 'accepted') {
        // Award XP and record revision solve (NO database solve status update or count increase!)
        await userStatsService.recordRevisionSolve(
          currentRandomProblem.id,
          currentRandomProblem.difficulty,
          user?.id || null
        );
        await fetchStats();
        setHasSolvedRevision(true);

        confetti({
          particleCount: 180,
          spread: 100,
          origin: { y: 0.6 },
          colors: ['#f59e0b', '#ec4899', '#8b5cf6', '#10b981', '#3b82f6'],
        });
      }
    } catch (err: any) {
      console.error('Submit revision error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Ask AI Tutor for Hints or Debug
  const handleAskAITutor = async () => {
    if (!currentRandomProblem) return;
    const currentCode = editorRef.current ? editorRef.current.getValue() : code;
    setIsGeneratingAI(true);
    try {
      const solution = await generateAISolution(currentRandomProblem, language, currentCode);
      setAiSolution(solution);
    } catch (err) {
      console.error('AI hint generation failed:', err);
    } finally {
      setIsGeneratingAI(false);
    }
  };

  const handleResetCode = () => {
    if (!currentRandomProblem) return;
    if (confirm('Reset code to starter template?')) {
      const template = currentRandomProblem.starter_templates?.[language] || currentRandomProblem.starter_templates?.['cpp'] || '// Write your solution here\n';
      setCode(template);
      if (editorRef.current) {
        editorRef.current.setValue(template);
      }
    }
  };

  const handleCopyCode = () => {
    if (editorRef.current) {
      navigator.clipboard.writeText(editorRef.current.getValue());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleCopyLogs = () => {
    const text = `Status: ${executionResult?.status}\nStdout:\n${executionResult?.stdout || ''}\nStderr:\n${executionResult?.stderr || ''}`;
    navigator.clipboard.writeText(text);
    setCopiedLog(true);
    setTimeout(() => setCopiedLog(false), 2000);
  };

  const completedCount = stats?.revision_completed_ids?.length || 0;
  const totalCount = problems.length || 700;
  const progressPercent = Math.min(100, Math.round((completedCount / (totalCount || 1)) * 100));

  const isAccepted = executionResult?.status === 'accepted';
  const isWrongAnswer = executionResult?.status === 'wrong_answer';
  const isCompileError = executionResult?.status === 'compilation_error';
  const currentCase = currentRandomProblem?.sample_test_cases?.[selectedCase] || currentRandomProblem?.sample_test_cases?.[0];
  const currentCaseResult = executionResult?.testResults?.[selectedCase] || executionResult?.testResults?.[0];

  return (
    <div className={`flex flex-col h-[calc(100dvh-3.5rem)] bg-[#0b0f19] overflow-hidden ${isFullscreen ? 'fixed inset-0 z-50 bg-[#0b0f19]' : ''}`}>
      {/* Top Header Controls Bar */}
      <div className="border-b border-slate-800 bg-[#0f172a] px-3 sm:px-4 py-2 sm:py-2.5 shrink-0 flex flex-wrap items-center justify-between gap-2.5 shadow-md">
        {/* Left: Revision Title & Stats */}
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 shadow-sm shrink-0">
            <Zap className="w-4 h-4 fill-amber-400" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-xs sm:text-sm text-white tracking-tight">Revision Arena</span>
              <span className="px-1.5 sm:px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-mono text-[9px] sm:text-[10px] font-bold border border-amber-500/30">
                +50 XP
              </span>
            </div>
            <p className="text-[10px] sm:text-[11px] text-slate-400 hidden lg:block">
              Ephemeral coding practice • Instant +50 XP bonus reward
            </p>
          </div>
        </div>

        {/* Middle Stats Badges */}
        <div className="flex items-center gap-1.5 text-xs">
          <div className="px-2.5 py-1 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-1.5">
            <Award className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span className="font-bold text-amber-300 font-mono text-xs">+{stats?.revision_bonus_xp || 0} XP</span>
          </div>

          <div className="px-2.5 py-1 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span className="font-bold text-emerald-400 font-mono text-xs">{completedCount}/{totalCount}</span>
          </div>
        </div>

        {/* Right: Topic Filters & Shuffle */}
        <div className="flex items-center gap-1.5 flex-wrap w-full sm:w-auto justify-end">
          <select
            value={selectedBook}
            onChange={(e) => {
              setSelectedBook(e.target.value);
              setCurrentRandomProblem(null);
            }}
            className="bg-slate-950 border border-slate-700 rounded-lg px-2 py-1 text-xs text-slate-200 focus:outline-none focus:border-emerald-500 max-w-[130px] sm:max-w-[160px] truncate"
          >
            <option value="all">All Topics (52 Modules)</option>
            <option value="patterns">Patterns</option>
            <option value="loops">Loops & Iterations</option>
            <option value="variables">Variables & Logic</option>
            <option value="datatypes">Data Types</option>
            <option value="userinput">User Input</option>
            <option value="operators">Operators</option>
            <option value="strings">Strings</option>
            <option value="math">Math (&lt;cmath&gt;)</option>
            <option value="booleans">Booleans</option>
            <option value="ifelse">If...Else</option>
            <option value="switch">Switch</option>
            <option value="whileloop">While Loop</option>
            <option value="forloop">For Loop</option>
            <option value="breakcontinue">Break / Continue</option>
            <option value="arrays">Arrays</option>
            <option value="structures">Structures</option>
            <option value="enums">Enums</option>
            <option value="references">References</option>
            <option value="pointers">Pointers</option>
            <option value="memorymgmt">Memory Mgmt</option>
            <option value="functions">Functions</option>
            <option value="funcparams">Function Parameters</option>
            <option value="funcoverloading">Function Overloading</option>
            <option value="scope">Scope & Lifetime</option>
            <option value="recursion">Recursion</option>
            <option value="lambda">Lambda Expressions</option>
            <option value="cppoop">C++ OOP</option>
            <option value="classesobjects">Classes & Objects</option>
            <option value="classmethods">Class Methods</option>
            <option value="constructors">Constructors & Destructors</option>
            <option value="accessspecifiers">Access Specifiers</option>
            <option value="encapsulation">Encapsulation</option>
            <option value="friendfunctions">Friend Functions & Classes</option>
            <option value="inheritance">Inheritance</option>
            <option value="polymorphism">Polymorphism</option>
            <option value="templates">Templates</option>
            <option value="files">Files & Streams</option>
            <option value="cppdate">Date & Chrono</option>
            <option value="cpperrors">C++ Errors</option>
            <option value="cppdebugging">C++ Debugging</option>
            <option value="cppexceptions">C++ Exceptions</option>
            <option value="inputvalidation">Input Validation</option>
            <option value="datastructuresstl">Data Structures & STL</option>
            <option value="vectors">C++ Vectors</option>
            <option value="cpplist">C++ List</option>
            <option value="stacks">C++ Stacks</option>
            <option value="queues">C++ Queues</option>
            <option value="cppdeque">C++ Deque</option>
            <option value="sets">C++ Sets</option>
            <option value="maps">C++ Maps</option>
            <option value="iterators">C++ Iterators</option>
            <option value="algorithms">C++ Algorithms</option>
          </select>

          <select
            value={selectedDifficulty}
            onChange={(e) => {
              setSelectedDifficulty(e.target.value);
              setCurrentRandomProblem(null);
            }}
            className="bg-slate-950 border border-slate-700 rounded-lg px-2 py-1 text-xs text-slate-200 focus:outline-none focus:border-emerald-500"
          >
            <option value="all">All Diff</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>

          <button
            onClick={pickRandomProblem}
            disabled={isRolling}
            title="Draw another random question"
            className="px-2.5 py-1 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold flex items-center gap-1 transition shadow-sm disabled:opacity-50"
          >
            <Shuffle className={`w-3.5 h-3.5 ${isRolling ? 'animate-spin' : ''}`} />
            <span className="hidden sm:inline">Shuffle</span>
          </button>

          {completedCount > 0 && (
            <button
              onClick={handleResetDeck}
              title="Reset revision deck to practice all problems again"
              className="p-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-slate-200 text-xs transition"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Mobile Sub-Navigation Bar (< md) */}
      <div className="md:hidden flex items-center justify-between p-2 bg-slate-900 border-b border-slate-800 shrink-0 text-xs">
        <div className="text-slate-300 font-bold truncate max-w-[140px] text-xs">
          {currentRandomProblem ? currentRandomProblem.title : 'Revision Problem'}
        </div>
        <div className="flex items-center gap-0.5 bg-slate-950 p-1 rounded-xl border border-slate-800">
          <button
            onClick={() => setMobileActiveView('problem')}
            className={`px-2 py-1 rounded-lg text-[11px] font-semibold transition ${
              mobileActiveView === 'problem' ? 'bg-slate-800 text-emerald-400 font-bold' : 'text-slate-400'
            }`}
          >
            Problem
          </button>
          <button
            onClick={() => setMobileActiveView('hints')}
            className={`px-2 py-1 rounded-lg text-[11px] font-semibold transition ${
              mobileActiveView === 'hints' ? 'bg-slate-800 text-amber-400 font-bold' : 'text-slate-400'
            }`}
          >
            Hints
          </button>
          <button
            onClick={() => setMobileActiveView('code')}
            className={`px-2 py-1 rounded-lg text-[11px] font-semibold transition ${
              mobileActiveView === 'code' ? 'bg-slate-800 text-emerald-400 font-bold' : 'text-slate-400'
            }`}
          >
            Code
          </button>
          <button
            onClick={() => setMobileActiveView('console')}
            className={`px-2 py-1 rounded-lg text-[11px] font-semibold transition ${
              mobileActiveView === 'console' ? 'bg-slate-800 text-emerald-400 font-bold' : 'text-slate-400'
            }`}
          >
            Console
          </button>
        </div>
      </div>

      {/* Celebratory Accepted Notification Banner */}
      {hasSolvedRevision && (
        <div className="bg-gradient-to-r from-emerald-600/90 via-teal-600/90 to-emerald-600/90 text-white px-4 py-2 flex items-center justify-between shrink-0 animate-fadeIn shadow-lg">
          <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold">
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>Revision Accepted! 🎉 You earned <strong className="text-amber-300 font-extrabold">+50 Bonus XP</strong>!</span>
            <span className="text-emerald-100 text-xs font-normal hidden md:inline">(Database problem solved count remains unchanged)</span>
          </div>

          <button
            onClick={pickRandomProblem}
            className="px-3 py-1 rounded-lg bg-slate-950 hover:bg-slate-900 text-emerald-300 font-bold text-xs flex items-center gap-1.5 shadow-md transition group"
          >
            <span>Next Random Revision</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition" />
          </button>
        </div>
      )}

      {/* Main Split Coding Arena */}
      {currentRandomProblem ? (
        <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
          {/* Left Side: Problem Statement & AI Hints (45%) */}
          <div className="w-full md:w-[45%] flex flex-col border-r border-slate-800 bg-[#0e1424] h-full overflow-hidden">
            {/* Left Tabs */}
            <div className="h-10 border-b border-slate-800 bg-slate-900/90 px-3 flex items-center justify-between select-none shrink-0">
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setActiveLeftTab('problem')}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition ${
                    activeLeftTab === 'problem'
                      ? 'bg-slate-800 text-emerald-400 border border-slate-700 shadow-sm'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  Description
                </button>

                <button
                  onClick={() => {
                    setActiveLeftTab('hints');
                    if (!aiSolution) handleAskAITutor();
                  }}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition ${
                    activeLeftTab === 'hints'
                      ? 'bg-slate-800 text-amber-300 border border-amber-500/30 shadow-sm'
                      : 'text-slate-400 hover:text-amber-300'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  AI Hints
                </button>
              </div>

              <div className="flex items-center gap-1.5 text-xs">
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  #{String(currentRandomProblem.order_index || 1).padStart(3, '0')}
                </span>
                <span
                  className={`text-[11px] px-2 py-0.5 rounded font-semibold ${
                    currentRandomProblem.difficulty === 'Easy'
                      ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                      : currentRandomProblem.difficulty === 'Medium'
                      ? 'bg-amber-500/10 text-amber-400 border border-amber-500/30'
                      : 'bg-rose-500/10 text-rose-400 border border-rose-500/30'
                  }`}
                >
                  {currentRandomProblem.difficulty}
                </span>
              </div>
            </div>

            {/* Left Content Area */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
              {activeLeftTab === 'problem' ? (
                <>
                  {/* Title & Category */}
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-medium">
                        {currentRandomProblem.category}
                      </span>
                      <span className="text-xs px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20 font-bold flex items-center gap-1">
                        <Award className="w-3 h-3" /> +50 XP Reward
                      </span>
                    </div>
                    <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                      {currentRandomProblem.title}
                    </h2>
                  </div>

                  {/* Mode Info Callout */}
                  <div className="p-3 rounded-xl bg-amber-500/5 border border-amber-500/20 text-xs text-amber-300/90 flex items-start gap-2.5">
                    <Info className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-amber-300 block mb-0.5">Active Revision Mode:</span>
                      Code directly below. Submitting correct code here grants <strong className="text-white">+50 XP</strong> without touching your permanent problem records or storing in database.
                    </div>
                  </div>

                  {/* Description */}
                  <div className="text-slate-300 text-xs sm:text-sm leading-relaxed whitespace-pre-line space-y-2">
                    {currentRandomProblem.description}
                  </div>

                  {/* Sample Test Cases */}
                  {currentRandomProblem.sample_test_cases && currentRandomProblem.sample_test_cases.length > 0 && (
                    <div className="space-y-2.5 pt-2 border-t border-slate-800">
                      <div className="text-xs font-bold text-slate-300">Sample Test Cases:</div>
                      {currentRandomProblem.sample_test_cases.map((tc, idx) => (
                        <div key={idx} className="p-3 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs space-y-1.5">
                          <div className="text-slate-400 text-[11px] font-sans font-semibold">Example {idx + 1}:</div>
                          <div>
                            <span className="text-slate-500 block text-[10px]">Input:</span>
                            <pre className="text-amber-300 whitespace-pre-wrap">{tc.input}</pre>
                          </div>
                          <div>
                            <span className="text-slate-500 block text-[10px]">Expected Output:</span>
                            <pre className="text-emerald-400 whitespace-pre-wrap">{tc.output}</pre>
                          </div>
                          {tc.explanation && (
                            <div className="text-slate-400 font-sans text-[11px] italic pt-1 border-t border-slate-900">
                              {tc.explanation}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                /* AI Hints & Guidance */
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-amber-400 font-bold text-xs">
                      <Sparkles className="w-4 h-4" />
                      <span>AI Step-by-Step Guidance</span>
                    </div>
                    <button
                      onClick={handleAskAITutor}
                      disabled={isGeneratingAI}
                      className="px-2.5 py-1 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold flex items-center gap-1 shadow transition disabled:opacity-50"
                    >
                      <Sparkles className="w-3 h-3" />
                      {isGeneratingAI ? 'Thinking...' : 'Generate Hints'}
                    </button>
                  </div>

                  {isGeneratingAI ? (
                    <div className="py-12 text-center text-slate-400 space-y-2">
                      <Sparkles className="w-6 h-6 text-amber-400 animate-spin mx-auto" />
                      <p className="font-semibold text-slate-300 text-xs">AI Tutor is generating guidance for this problem...</p>
                    </div>
                  ) : aiSolution ? (
                    <div className="space-y-3 text-xs">
                      {aiSolution.optimal_approach && (
                        <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                          <div className="font-bold text-emerald-400">Recommended Approach:</div>
                          <p className="text-slate-300 leading-relaxed">{aiSolution.optimal_approach}</p>
                        </div>
                      )}

                      {aiSolution.step_by_step && aiSolution.step_by_step.length > 0 && (
                        <div className="space-y-2">
                          <div className="font-bold text-slate-200 text-xs">Step-by-Step Logic:</div>
                          {aiSolution.step_by_step.map((st, i) => (
                            <div key={i} className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 space-y-1">
                              <div className="text-amber-400 font-bold text-[11px]">Step {st.step}: {st.title}</div>
                              <p className="text-slate-300 text-[11px] leading-relaxed">{st.explanation}</p>
                            </div>
                          ))}
                        </div>
                      )}

                      {aiSolution.time_complexity && (
                        <div className="flex items-center gap-3 p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-[11px] font-mono">
                          <span className="text-slate-400">Time: <strong className="text-emerald-400">{aiSolution.time_complexity}</strong></span>
                          <span className="text-slate-400">Space: <strong className="text-emerald-400">{aiSolution.space_complexity}</strong></span>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="p-8 text-center bg-slate-950/60 rounded-xl border border-slate-800 space-y-3 text-slate-400 text-xs">
                      <Sparkles className="w-8 h-8 text-amber-400 mx-auto opacity-80" />
                      <p className="font-semibold text-slate-300">Stuck or need a memory refresher?</p>
                      <p className="text-[11px] text-slate-400 max-w-xs mx-auto">
                        Click below to get step-by-step guidance without giving away the full answer.
                      </p>
                      <button
                        onClick={handleAskAITutor}
                        className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs inline-flex items-center gap-1.5 shadow"
                      >
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Get AI Guidance</span>
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Right Side: Monaco Code Editor + Execution Console (55%) */}
          <div className="w-full md:w-[55%] flex flex-col h-full overflow-hidden bg-[#0d1322]">
            {/* Editor Toolbar */}
            <div className="h-10 px-3 border-b border-slate-800 bg-slate-900/95 flex items-center justify-between select-none shrink-0">
              {/* Language Selector */}
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5 bg-slate-800 rounded-lg px-2.5 py-1 border border-slate-700 shadow-sm">
                  <Code2 className="w-3.5 h-3.5 text-emerald-400" />
                  <select
                    value={language}
                    onChange={(e) => handleLanguageChange(e.target.value as SupportedLanguage)}
                    className="bg-transparent text-xs font-semibold text-slate-200 focus:outline-none cursor-pointer pr-1"
                  >
                    {languages.map((l) => (
                      <option key={l.id} value={l.id} className="bg-slate-900 text-slate-200">
                        {l.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Editor Actions */}
              <div className="flex items-center gap-1.5">
                <button
                  onClick={handleCopyCode}
                  title="Copy code"
                  className="p-1.5 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>

                <button
                  onClick={handleResetCode}
                  title="Reset code to starter template"
                  className="p-1.5 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>

                <div className="h-4 w-px bg-slate-700 mx-0.5" />

                {/* Run Code */}
                <button
                  onClick={handleRunCode}
                  disabled={isRunning || isSubmitting}
                  className="px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1.5 border border-slate-700 shadow-sm transition disabled:opacity-50 active:scale-95"
                >
                  {isRunning ? (
                    <Loader2 className="w-3.5 h-3.5 animate-spin text-amber-400" />
                  ) : (
                    <Play className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400" />
                  )}
                  <span>Run</span>
                </button>

                {/* Submit Revision */}
                <button
                  onClick={handleSubmitRevision}
                  disabled={isRunning || isSubmitting}
                  className="px-3.5 py-1 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 text-xs font-bold flex items-center gap-1.5 transition shadow-sm disabled:opacity-50 active:scale-95"
                >
                  {isSubmitting ? (
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  ) : (
                    <Send className="w-3.5 h-3.5" />
                  )}
                  <span>Submit Revision</span>
                </button>
              </div>
            </div>

            {/* Monaco Editor Container */}
            <div className="flex-1 relative overflow-hidden">
              <Editor
                height="100%"
                language={currentMonacoLang}
                value={code}
                onMount={handleEditorDidMount}
                onChange={(v) => setCode(v || '')}
                theme={theme}
                options={{
                  fontSize: fontSize,
                  fontFamily: "'Fira Code', 'Cascadia Code', 'JetBrains Mono', Menlo, Monaco, monospace",
                  fontLigatures: true,
                  minimap: { enabled: false },
                  scrollBeyondLastLine: false,
                  automaticLayout: true,
                  tabSize: 4,
                  lineNumbers: 'on',
                  renderLineHighlight: 'all',
                  padding: { top: 10, bottom: 10 },
                  bracketPairColorization: { enabled: true },
                  readOnly: !user,
                }}
              />

              {/* Lock Overlay for Unauthenticated Users */}
              {!user && (
                <div className="absolute inset-0 z-20 bg-slate-950/75 backdrop-blur-[3px] flex flex-col items-center justify-center p-6 text-center select-none animate-fadeIn">
                  <div className="max-w-md w-full p-6 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-emerald-500/30 shadow-2xl shadow-emerald-950/40 flex flex-col items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-inner">
                      <Lock className="w-7 h-7" />
                    </div>
                    
                    <div>
                      <h3 className="text-base font-bold text-white tracking-wide">
                        Sign in to Practice Revision Mode
                      </h3>
                      <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                        Revision progress, XP points, aur code submissions realtime Supabase database me sync karne ke liye please login ya sign up karein.
                      </p>
                    </div>

                    <button
                      onClick={() => onOpenAuthModal?.()}
                      className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 text-xs font-bold transition shadow-lg shadow-emerald-500/20 active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2"
                    >
                      <Sparkles className="w-4 h-4" />
                      <span>Sign In / Create Free Account</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Revision Execution Console */}
            <div className={`border-t border-slate-800 bg-[#0b0f19] flex flex-col transition-all duration-150 ${
              !isConsoleExpanded ? 'h-9' : 'h-64 sm:h-72'
            }`}>
              {/* Console Header */}
              <div className="h-9 px-3 bg-slate-900/95 border-b border-slate-800 flex items-center justify-between select-none shrink-0">
                <div className="flex items-center gap-2 overflow-hidden">
                  <button
                    onClick={() => setIsConsoleExpanded(!isConsoleExpanded)}
                    className="flex items-center gap-1.5 text-xs font-bold text-slate-200 hover:text-white transition"
                  >
                    <Terminal className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Console</span>
                    {isConsoleExpanded ? <ChevronDown className="w-3 h-3 text-slate-400" /> : <ChevronUp className="w-3 h-3 text-slate-400" />}
                  </button>

                  {/* Verdict Badges */}
                  {executionResult && (
                    <div className="flex items-center gap-1.5 text-[11px] truncate">
                      {isAccepted ? (
                        <span className="flex items-center gap-1 text-emerald-400 font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30">
                          <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                          Accepted ({executionResult.passedCount}/{executionResult.totalCount}) • {executionResult.timeMs}ms
                        </span>
                      ) : isWrongAnswer ? (
                        <span className="flex items-center gap-1 text-rose-400 font-bold px-2 py-0.5 rounded-full bg-rose-500/10 border border-rose-500/30">
                          <XCircle className="w-3 h-3 text-rose-400 shrink-0" />
                          Wrong Answer ({executionResult.passedCount}/{executionResult.totalCount} Passed)
                        </span>
                      ) : isCompileError ? (
                        <span className="flex items-center gap-1 text-amber-400 font-bold px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30">
                          <AlertTriangle className="w-3 h-3 text-amber-400 shrink-0" />
                          Compilation Error
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 text-rose-400 font-bold px-2 py-0.5 rounded-full bg-rose-500/10 border border-rose-500/30">
                          <XCircle className="w-3 h-3 text-rose-400 shrink-0" />
                          Runtime Error
                        </span>
                      )}
                    </div>
                  )}
                </div>

                {isConsoleExpanded && (
                  <div className="flex items-center gap-1 bg-slate-950 p-0.5 rounded-lg border border-slate-800 text-xs">
                    <button
                      onClick={() => setActiveConsoleTab('testcases')}
                      className={`px-2 py-0.5 rounded text-[11px] font-semibold transition ${
                        activeConsoleTab === 'testcases' ? 'bg-slate-800 text-emerald-400' : 'text-slate-400'
                      }`}
                    >
                      Test Cases
                    </button>
                    <button
                      onClick={() => setActiveConsoleTab('custom')}
                      className={`px-2 py-0.5 rounded text-[11px] font-semibold transition ${
                        activeConsoleTab === 'custom' ? 'bg-slate-800 text-emerald-400' : 'text-slate-400'
                      }`}
                    >
                      Custom Stdin
                    </button>
                    <button
                      onClick={() => setActiveConsoleTab('output')}
                      className={`px-2 py-0.5 rounded text-[11px] font-semibold transition ${
                        activeConsoleTab === 'output' ? 'bg-slate-800 text-emerald-400' : 'text-slate-400'
                      }`}
                    >
                      Raw Logs
                    </button>
                  </div>
                )}
              </div>

              {/* Console Body */}
              {isConsoleExpanded && (
                <div className="flex-1 p-3 overflow-y-auto font-mono text-xs text-slate-200 bg-[#0b0f19]">
                  {isRunning || isSubmitting ? (
                    <div className="h-full flex flex-col items-center justify-center text-slate-400 gap-2 font-sans py-4">
                      <Clock className="w-5 h-5 text-emerald-400 animate-spin" />
                      <div className="text-xs font-semibold text-slate-300">Compiling & Testing Code...</div>
                    </div>
                  ) : activeConsoleTab === 'testcases' ? (
                    <div className="space-y-2.5 font-sans">
                      {/* Compilation Error Banner */}
                      {isCompileError && executionResult?.compileError && (
                        <div className="p-2.5 rounded-xl bg-amber-950/30 border border-amber-500/40 text-xs space-y-1.5">
                          <div className="text-amber-400 font-bold flex items-center gap-1.5">
                            <AlertTriangle className="w-3.5 h-3.5" />
                            <span>Compilation Error</span>
                          </div>
                          <pre className="p-2 rounded-lg bg-slate-950/80 text-amber-200 font-mono text-[11px] whitespace-pre-wrap max-h-36 overflow-y-auto">
                            {executionResult.compileError}
                          </pre>
                        </div>
                      )}

                      {/* Test Case Buttons */}
                      <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
                        {currentRandomProblem?.sample_test_cases?.map((_, idx) => {
                          const result = executionResult?.testResults?.[idx];
                          return (
                            <button
                              key={idx}
                              onClick={() => setSelectedCase(idx)}
                              className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition flex items-center gap-1.5 shrink-0 ${
                                selectedCase === idx
                                  ? 'bg-slate-800 text-white border border-slate-700 shadow-md'
                                  : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800'
                              }`}
                            >
                              {result ? (
                                result.passed ? (
                                  <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
                                ) : (
                                  <span className="w-2 h-2 rounded-full bg-rose-400 inline-block" />
                                )
                              ) : (
                                <span className="w-1.5 h-1.5 rounded-full bg-slate-600 inline-block" />
                              )}
                              Case {idx + 1}
                              {result?.timeMs ? <span className="text-[10px] text-slate-500 font-mono">({result.timeMs}ms)</span> : null}
                            </button>
                          );
                        })}
                      </div>

                      {/* Test Case Details */}
                      {currentCase && (
                        <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2 font-mono text-xs">
                          <div>
                            <div className="text-slate-400 font-sans text-[11px] font-semibold mb-0.5">Input:</div>
                            <pre className="p-2 rounded bg-slate-950 border border-slate-800 text-amber-300 whitespace-pre-wrap">
                              {currentCase.input || '(empty stdin)'}
                            </pre>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            <div>
                              <div className="text-slate-400 font-sans text-[11px] font-semibold mb-0.5">Expected Output:</div>
                              <pre className="p-2 rounded bg-slate-950 border border-slate-800 text-emerald-300 whitespace-pre-wrap max-h-28 overflow-y-auto">
                                {currentCase.output}
                              </pre>
                            </div>

                            <div>
                              <div className="text-slate-400 font-sans text-[11px] font-semibold mb-0.5 flex items-center justify-between">
                                <span>Your Output:</span>
                                {currentCaseResult && (
                                  <span className={`text-[10px] font-bold px-1.5 py-0.2 rounded ${
                                    currentCaseResult.passed ? 'bg-emerald-500/10 text-emerald-400' : 'bg-rose-500/10 text-rose-400'
                                  }`}>
                                    {currentCaseResult.passed ? 'PASSED' : 'WRONG'}
                                  </span>
                                )}
                              </div>
                              <pre className={`p-2 rounded bg-slate-950 border whitespace-pre-wrap max-h-28 overflow-y-auto ${
                                currentCaseResult?.passed
                                  ? 'border-emerald-500/30 text-emerald-200'
                                  : currentCaseResult
                                  ? 'border-rose-500/40 text-rose-200'
                                  : 'border-slate-800 text-slate-500'
                              }`}>
                                {currentCaseResult?.actualOutput || (executionResult ? '(No output)' : 'Click Run or Submit to execute')}
                              </pre>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : activeConsoleTab === 'custom' ? (
                    <div className="space-y-2 font-sans">
                      <div className="text-xs font-semibold text-slate-300">Custom Standard Input:</div>
                      <textarea
                        value={customInput}
                        onChange={(e) => setCustomInput(e.target.value)}
                        placeholder="Enter standard input..."
                        rows={2}
                        className="w-full p-2 rounded-lg bg-slate-900 border border-slate-800 font-mono text-xs text-slate-200 focus:outline-none focus:border-emerald-500"
                      />
                      <button
                        onClick={handleRunCode}
                        disabled={isRunning}
                        className="px-3 py-1 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold flex items-center gap-1"
                      >
                        <Play className="w-3 h-3 fill-slate-950" />
                        Run Custom Stdin
                      </button>
                      {executionResult && (
                        <div className="pt-1">
                          <div className="text-slate-400 text-[11px] mb-0.5">Output:</div>
                          <pre className="p-2 rounded bg-slate-950 border border-slate-800 font-mono text-xs text-slate-200 whitespace-pre-wrap max-h-28 overflow-y-auto">
                            {executionResult.stdout || executionResult.stderr || '(No output)'}
                          </pre>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="space-y-2 font-mono text-xs">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400 font-sans text-xs">Compiler Logs:</span>
                        <button
                          onClick={handleCopyLogs}
                          className="flex items-center gap-1 text-[11px] text-slate-400 hover:text-white px-2 py-0.5 rounded bg-slate-900 border border-slate-800"
                        >
                          {copiedLog ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                          <span>{copiedLog ? 'Copied' : 'Copy'}</span>
                        </button>
                      </div>
                      <pre className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-200 whitespace-pre-wrap max-h-44 overflow-y-auto">
                        {executionResult ? (executionResult.stdout || executionResult.compileError || executionResult.stderr || '(No logs)') : 'Run code to view output.'}
                      </pre>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        /* Completed All Deck State */
        <div className="flex-1 flex flex-col items-center justify-center p-8 text-center space-y-4">
          <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto">
            <CheckCircle className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-white">All Selected Revision Questions Completed! 🎉</h3>
          <p className="text-xs text-slate-400 max-w-md mx-auto">
            You have revised all problems in this filter deck! Reset the deck to restart your revision streak and earn more bonus XP.
          </p>
          <button
            onClick={handleResetDeck}
            className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs inline-flex items-center gap-2 shadow-lg shadow-emerald-500/20 transition"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Reset Revision Deck</span>
          </button>
        </div>
      )}
    </div>
  );
};
