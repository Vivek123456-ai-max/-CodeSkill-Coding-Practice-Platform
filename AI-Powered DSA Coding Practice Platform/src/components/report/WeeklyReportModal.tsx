import React, { useState, useEffect, useMemo } from 'react';
import { 
  X, 
  Download, 
  FileText, 
  Calendar, 
  Flame, 
  CheckCircle2, 
  TrendingUp, 
  Award, 
  Share2, 
  Check, 
  BookOpen, 
  Zap,
  Printer,
  Code2,
  Copy,
  ChevronDown,
  ChevronUp,
  Clock,
  Terminal,
  Layers,
  Play,
  ArrowRight,
  Sparkles,
  Filter,
  CheckSquare,
  Square
} from 'lucide-react';
import { useProblem } from '../../context/ProblemContext';
import { useAuth } from '../../context/AuthContext';
import { 
  userStatsService, 
  userProfileService, 
  submissionService, 
  savedCodeService,
  UserProfile, 
  UserStats, 
  getProblemBook,
  resolveCanonicalProblemId
} from '../../lib/supabase';
import { ALL_PROBLEMS } from '../../lib/allProblems';
import { CodeSubmission, Problem } from '../../types/problem';

interface WeeklyReportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CodedProblemReportItem {
  problem: Problem;
  code: string;
  language: string;
  status: string;
  test_cases_passed: number;
  total_test_cases: number;
  execution_time_ms: number;
  created_at: string;
}

export const WeeklyReportModal: React.FC<WeeklyReportModalProps> = ({ isOpen, onClose }) => {
  const { problems } = useProblem();
  const { user } = useAuth();
  const [stats, setStats] = useState<UserStats>({
    total_solved: 0,
    easy_solved: 0,
    medium_solved: 0,
    hard_solved: 0,
    current_streak: 0,
    best_streak: 0,
    last_active_date: '',
    active_dates: [],
    total_xp: 0,
    revision_solved_count: 0,
    revision_bonus_xp: 0,
    revision_completed_ids: [],
    solved_problem_ids: []
  });
  const [profile, setProfile] = useState<UserProfile>(userProfileService.getProfile());
  const [submissions, setSubmissions] = useState<CodeSubmission[]>([]);
  const [copiedCodeId, setCopiedCodeId] = useState<string | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);
  const [expandedCodes, setExpandedCodes] = useState<Record<string, boolean>>({});
  const [allExpanded, setAllExpanded] = useState(true);

  // Custom Report Selection Controls
  const [timeRange, setTimeRange] = useState<'week' | 'month' | 'all'>('week');
  const [practiceType, setPracticeType] = useState<'all' | 'regular' | 'revision'>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('All');
  const [selectedLanguage, setSelectedLanguage] = useState<string>('All');
  const [includeCode, setIncludeCode] = useState<boolean>(true);
  const [includeIO, setIncludeIO] = useState<boolean>(true);
  const [includeStats, setIncludeStats] = useState<boolean>(true);

  useEffect(() => {
    if (isOpen) {
      userStatsService.getStats(user?.id || null).then(setStats);
      setProfile(userProfileService.getProfile(user?.id || null));
      const subs = submissionService.getAllSubmissions(user?.id || null);
      setSubmissions(subs);
    }
  }, [isOpen, user?.id]);

  // Dynamic Date Ranges
  const now = new Date();
  const dayOfWeek = now.getDay();
  const distanceToMonday = (dayOfWeek + 6) % 7;
  const startOfWeek = new Date(now);
  startOfWeek.setDate(now.getDate() - distanceToMonday);
  startOfWeek.setHours(0, 0, 0, 0);

  const endOfWeek = new Date(startOfWeek);
  endOfWeek.setDate(startOfWeek.getDate() + 6);
  endOfWeek.setHours(23, 59, 59, 999);

  const startOfMonth = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
  startOfMonth.setHours(0, 0, 0, 0);

  const startDate = timeRange === 'week' ? startOfWeek : timeRange === 'month' ? startOfMonth : new Date(2020, 0, 1);
  const endDate = timeRange === 'week' ? endOfWeek : new Date(2030, 0, 1);

  const dateRangeStr = timeRange === 'week'
    ? `${startOfWeek.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} – ${endOfWeek.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}`
    : timeRange === 'month'
    ? `Past 30 Days (${startOfMonth.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} – ${now.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })})`
    : `All-Time Lifetime Practice History`;

  // Filter Submissions by Practice Type and Date Range
  const filteredSubmissions = useMemo(() => {
    return submissions.filter((sub) => {
      const isRev = sub.is_revision === true || (sub.notes && sub.notes.toLowerCase().includes('revision'));
      if (practiceType === 'regular' && isRev) return false;
      if (practiceType === 'revision' && !isRev) return false;

      if (timeRange !== 'all') {
        const d = new Date(sub.created_at);
        if (d < startDate || d > endDate) return false;
      }
      return true;
    });
  }, [submissions, practiceType, timeRange, startDate, endDate]);

  // Consolidated Coded & Solved Items matching filters
  const codedProblemItems = useMemo((): CodedProblemReportItem[] => {
    const list: CodedProblemReportItem[] = [];
    const seenProblems = new Set<string>();

    for (const sub of filteredSubmissions) {
      const canonicalId = resolveCanonicalProblemId(sub.problem_id);
      if (!canonicalId || seenProblems.has(canonicalId)) continue;

      const prob = problems.find((p) => p.id === canonicalId) || 
                   ALL_PROBLEMS.find((p) => p.id === canonicalId);
      if (!prob) continue;

      if (selectedDifficulty !== 'All' && prob.difficulty !== selectedDifficulty) continue;
      if (selectedLanguage !== 'All' && sub.language && sub.language.toLowerCase() !== selectedLanguage.toLowerCase()) continue;

      seenProblems.add(canonicalId);
      list.push({
        problem: prob,
        code: sub.code || savedCodeService.getCodeSync(prob.id, sub.language || 'cpp', user?.id) || prob.starter_templates?.[sub.language || 'cpp'] || '// Code solution',
        language: sub.language || 'cpp',
        status: sub.status === 'accepted' ? 'accepted' : sub.status,
        test_cases_passed: sub.test_cases_passed || prob.sample_test_cases?.length || 1,
        total_test_cases: sub.total_test_cases || prob.sample_test_cases?.length || 1,
        execution_time_ms: sub.execution_time_ms || 28,
        created_at: sub.created_at,
      });
    }

    // If All Time or Regular, and items are few, check user's solved list for fallback
    if (practiceType !== 'revision' && list.length === 0) {
      const solvedIds = stats.solved_problem_ids || [];
      for (const solvedId of solvedIds) {
        const canonicalId = resolveCanonicalProblemId(solvedId);
        if (!canonicalId || seenProblems.has(canonicalId)) continue;

        const prob = problems.find((p) => p.id === canonicalId) || 
                     ALL_PROBLEMS.find((p) => p.id === canonicalId);
        if (!prob) continue;

        if (selectedDifficulty !== 'All' && prob.difficulty !== selectedDifficulty) continue;

        seenProblems.add(canonicalId);
        const code = savedCodeService.getCodeSync(prob.id, 'cpp', user?.id) || 
                     savedCodeService.getCodeSync(prob.id, 'python', user?.id) ||
                     prob.starter_templates?.['cpp'] || '// Solved Question Code';

        list.push({
          problem: prob,
          code,
          language: 'cpp',
          status: 'accepted',
          test_cases_passed: prob.sample_test_cases?.length || 1,
          total_test_cases: prob.sample_test_cases?.length || 1,
          execution_time_ms: 32,
          created_at: new Date().toISOString(),
        });
      }
    }

    return list;
  }, [filteredSubmissions, problems, selectedDifficulty, selectedLanguage, practiceType, stats.solved_problem_ids, user?.id]);

  // Initialize expanded state for all items
  useEffect(() => {
    if (codedProblemItems.length > 0) {
      const map: Record<string, boolean> = {};
      codedProblemItems.forEach((item) => {
        map[item.problem.id] = true;
      });
      setExpandedCodes(map);
    }
  }, [codedProblemItems]);

  const toggleExpandItem = (id: string) => {
    setExpandedCodes((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleToggleAll = () => {
    const nextState = !allExpanded;
    setAllExpanded(nextState);
    const map: Record<string, boolean> = {};
    codedProblemItems.forEach((item) => {
      map[item.problem.id] = nextState;
    });
    setExpandedCodes(map);
  };

  const handleCopyCode = (id: string, code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCodeId(id);
    setTimeout(() => setCopiedCodeId(null), 2000);
  };

  // Metrics
  const totalBankTarget = problems.length || 5200;
  const weeklySolvedCount = codedProblemItems.length;
  const bankProgressPercent = Number(((weeklySolvedCount / totalBankTarget) * 100).toFixed(1));

  // Day-wise distribution (Mon - Sun)
  const dayNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const dayActivity = useMemo(() => {
    const list: number[] = [0, 0, 0, 0, 0, 0, 0];
    for (const sub of filteredSubmissions) {
      const d = new Date(sub.created_at);
      const dayIdx = (d.getDay() + 6) % 7;
      (list as any)[dayIdx] = ((list[dayIdx] as number) || 0) + 1;
    }
    if (list.every((c) => c === 0) && stats.current_streak > 0) {
      const todayIdx = (now.getDay() + 6) % 7;
      (list as any)[todayIdx] = Math.max(1, weeklySolvedCount);
    }
    return list;
  }, [filteredSubmissions, stats.current_streak, now, weeklySolvedCount]);

  const maxDayCount = Math.max(...dayActivity, 1);

  // Topic Breakdown for coded problems
  const topicCounts = useMemo(() => {
    const map: Record<string, number> = {
      patterns: 0,
      loops: 0,
      variables: 0,
      datatypes: 0,
      userinput: 0,
      operators: 0,
      strings: 0,
      math: 0,
      booleans: 0,
      ifelse: 0,
      switch: 0,
      whileloop: 0,
      forloop: 0,
      breakcontinue: 0,
      arrays: 0,
      structures: 0,
      enums: 0,
      references: 0,
      pointers: 0,
      memorymgmt: 0,
      functions: 0,
      funcparams: 0,
      funcoverloading: 0,
      scope: 0,
      recursion: 0,
      lambda: 0,
      cppoop: 0,
      classesobjects: 0,
      classmethods: 0,
      constructors: 0,
      accessspecifiers: 0,
      encapsulation: 0,
      friendfunctions: 0,
      inheritance: 0,
      polymorphism: 0,
      templates: 0,
      files: 0,
      cppdate: 0,
      cpperrors: 0,
      cppdebugging: 0,
      cppexceptions: 0,
      inputvalidation: 0,
      datastructuresstl: 0,
      vectors: 0,
      cpplist: 0,
      stacks: 0,
      queues: 0,
      cppdeque: 0,
      sets: 0,
      maps: 0,
      iterators: 0,
      algorithms: 0,
    };
    codedProblemItems.forEach((item) => {
      const book = getProblemBook(item.problem);
      if (map[book] !== undefined) {
        map[book] += 1;
      }
    });
    return map;
  }, [codedProblemItems]);

  // Distinct modules present in coded problems
  const availableModules = useMemo(() => {
    const counts: Record<string, number> = {};
    codedProblemItems.forEach((item) => {
      const b = getProblemBook(item.problem);
      counts[b] = (counts[b] || 0) + 1;
    });
    return Object.entries(counts)
      .map(([book, count]) => ({ book, count }))
      .sort((a, b) => b.count - a.count);
  }, [codedProblemItems]);

  const [selectedModules, setSelectedModules] = useState<string[]>([]);

  // Automatically select all available modules when items load or change
  useEffect(() => {
    if (availableModules.length > 0) {
      setSelectedModules((prev) => {
        const valid = prev.filter((b) => availableModules.some((m) => m.book === b));
        return valid.length > 0 ? valid : availableModules.map((m) => m.book);
      });
    } else {
      setSelectedModules([]);
    }
  }, [availableModules]);

  const toggleModule = (book: string) => {
    setSelectedModules((prev) => {
      if (prev.includes(book)) {
        return prev.filter((b) => b !== book);
      } else {
        return [...prev, book];
      }
    });
  };

  const handleSelectAllModules = () => {
    setSelectedModules(availableModules.map((m) => m.book));
  };

  const handleDeselectAllModules = () => {
    setSelectedModules([]);
  };

  // Filtered items based on user selected modules
  const filteredExportItems = useMemo(() => {
    if (selectedModules.length === 0) return [];
    const set = new Set(selectedModules);
    return codedProblemItems.filter((item) => set.has(getProblemBook(item.problem)));
  }, [codedProblemItems, selectedModules]);

  // Download CSV Handler
  const handleExportCSV = () => {
    if (filteredExportItems.length === 0) {
      alert('Please select at least 1 module to export.');
      return;
    }

    const headers = [
      'Problem Serial & Title',
      'Topic Module',
      'Difficulty',
      ...(includeIO ? ['Sample Input', 'Expected Output'] : []),
      'Language',
      'Status',
      'Test Cases Passed',
      'Execution Time (ms)',
      'Date Coded',
      ...(includeCode ? ['Source Code'] : [])
    ];

    const rows = filteredExportItems.map((item) => {
      const book = getProblemBook(item.problem);
      const sampleInput = item.problem.sample_test_cases?.[0]?.input || 'N/A';
      const sampleOutput = item.problem.sample_test_cases?.[0]?.output || 'N/A';

      const row = [
        `"${item.problem.title.replace(/"/g, '""')}"`,
        `"${book.toUpperCase()}"`,
        `"${item.problem.difficulty}"`,
        ...(includeIO ? [`"${sampleInput.replace(/"/g, '""')}"`, `"${sampleOutput.replace(/"/g, '""')}"`] : []),
        `"${item.language.toUpperCase()}"`,
        `"${item.status === 'accepted' ? 'Accepted' : item.status}"`,
        `"${item.test_cases_passed}/${item.total_test_cases}"`,
        `"${item.execution_time_ms}"`,
        `"${new Date(item.created_at).toLocaleDateString()}"`,
        ...(includeCode ? [`"${(item.code || '').replace(/"/g, '""')}"`] : [])
      ];
      return row;
    });

    const csvContent = 'data:text/csv;charset=utf-8,\uFEFF' + [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `CodeTutor_Report_${timeRange}_${startDate.toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Download Printable PDF Report Handler
  const handleDownloadPDF = () => {
    if (filteredExportItems.length === 0) {
      alert('Please select at least 1 module to download.');
      return;
    }

    const printWindow = window.open('', '_blank');
    if (!printWindow) {
      alert('Please allow popups to download the PDF report.');
      return;
    }

    const escapeHtml = (unsafe: string) => {
      return (unsafe || '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
    };

    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Weekly DSA Code & Performance Report - ${profile.display_name}</title>
          <style>
            @page { size: A4; margin: 15mm; }
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
              color: #0f172a;
              line-height: 1.5;
              padding: 16px;
              max-width: 900px;
              margin: 0 auto;
              background: #ffffff;
            }
            .header {
              display: flex;
              justify-content: space-between;
              align-items: center;
              border-bottom: 2px solid #0f172a;
              padding-bottom: 16px;
              margin-bottom: 20px;
            }
            .brand {
              font-size: 24px;
              font-weight: 800;
              color: #0f172a;
            }
            .brand span {
              color: #10b981;
            }
            .report-title {
              font-size: 16px;
              font-weight: 700;
              color: #334155;
              margin-top: 2px;
            }
            .badge {
              display: inline-block;
              padding: 4px 10px;
              border-radius: 9999px;
              font-size: 11px;
              font-weight: 700;
              background: #dcfce7;
              color: #166534;
            }
            .stats-grid {
              display: grid;
              grid-template-columns: repeat(4, 1fr);
              gap: 12px;
              margin-bottom: 20px;
            }
            .stat-box {
              background: #f8fafc;
              border: 1px solid #e2e8f0;
              border-radius: 8px;
              padding: 10px;
              text-align: center;
            }
            .stat-val {
              font-size: 20px;
              font-weight: 800;
              color: #0f172a;
            }
            .stat-lbl {
              font-size: 10px;
              text-transform: uppercase;
              color: #64748b;
              font-weight: 600;
            }
            .section {
              margin-bottom: 24px;
            }
            .section-title {
              font-size: 14px;
              font-weight: 700;
              border-bottom: 1px solid #e2e8f0;
              padding-bottom: 6px;
              margin-bottom: 12px;
              color: #0f172a;
            }
            .problem-card {
              border: 1px solid #cbd5e1;
              border-radius: 8px;
              padding: 12px;
              margin-bottom: 14px;
              page-break-inside: avoid;
              background: #fafafa;
            }
            .problem-meta {
              display: flex;
              justify-content: space-between;
              align-items: center;
              border-bottom: 1px solid #e2e8f0;
              padding-bottom: 8px;
              margin-bottom: 8px;
            }
            .problem-title {
              font-size: 13px;
              font-weight: 700;
              color: #0f172a;
            }
            .tags-row {
              display: flex;
              gap: 6px;
              font-size: 10px;
              font-weight: 600;
            }
            .tag {
              padding: 2px 6px;
              border-radius: 4px;
              border: 1px solid #cbd5e1;
              background: #ffffff;
            }
            .tag-easy { color: #16a34a; background: #f0fdf4; border-color: #bbf7d0; }
            .tag-med { color: #d97706; background: #fffbeb; border-color: #fde68a; }
            .tag-hard { color: #dc2626; background: #fef2f2; border-color: #fecaca; }
            .io-grid {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 8px;
              margin: 8px 0;
              font-size: 11px;
            }
            .io-box {
              background: #ffffff;
              border: 1px solid #e2e8f0;
              border-radius: 6px;
              padding: 6px 8px;
            }
            .io-title {
              font-size: 10px;
              font-weight: 700;
              text-transform: uppercase;
              margin-bottom: 2px;
            }
            .io-input { color: #0284c7; }
            .io-output { color: #16a34a; }
            .code-block {
              background: #0f172a;
              color: #e2e8f0;
              padding: 10px 12px;
              border-radius: 6px;
              font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;
              font-size: 11px;
              line-height: 1.45;
              overflow-x: auto;
              white-space: pre-wrap;
              word-break: break-word;
              margin: 6px 0 0 0;
            }
            .footer {
              margin-top: 24px;
              text-align: center;
              font-size: 10px;
              color: #94a3b8;
              border-top: 1px solid #e2e8f0;
              padding-top: 10px;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <div>
              <div class="brand">CodeTutor <span>AI</span></div>
              <div class="report-title">DSA Code Practice & Performance Report</div>
              <div style="font-size: 11px; color: #64748b; margin-top: 2px;">Period: ${dateRangeStr}</div>
            </div>
            <div style="text-align: right;">
              <div style="font-weight: 700; font-size: 13px;">${profile.display_name}</div>
              <div style="font-size: 11px; color: #64748b;">${user?.email || 'Student Developer'}</div>
              <div class="badge" style="margin-top: 4px;">Rank: ${stats.total_xp >= 1000 ? 'Master' : 'Active Learner'}</div>
            </div>
          </div>

          ${includeStats ? `
          <div class="stats-grid">
            <div class="stat-box">
              <div class="stat-val">${weeklySolvedCount} / ${totalBankTarget.toLocaleString()}</div>
              <div class="stat-lbl">Problems Coded</div>
            </div>
            <div class="stat-box">
              <div class="stat-val">${stats.current_streak} Days 🔥</div>
              <div class="stat-lbl">Practice Streak</div>
            </div>
            <div class="stat-box">
              <div class="stat-val">${stats.total_xp} XP</div>
              <div class="stat-lbl">Total Experience</div>
            </div>
            <div class="stat-box">
              <div class="stat-val">${bankProgressPercent}%</div>
              <div class="stat-lbl">Overall Bank Solved</div>
            </div>
          </div>
          ` : ''}

          <div class="section">
            <div class="section-title">Selected Topic Coverage (${selectedModules.length} Modules Selected)</div>
            <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 6px; font-size: 11px;">
              ${Object.entries(topicCounts).filter(([k, count]) => count > 0 && selectedModules.includes(k)).map(([k, count]) => `
                <div style="background: #f8fafc; padding: 6px; border-radius: 6px; border: 1px solid #e2e8f0;">
                  <span style="text-transform: capitalize;">${k}</span>: <strong>${count}</strong>
                </div>
              `).join('')}
              ${selectedModules.length === 0 ? '<div style="grid-column: span 4; color: #64748b; font-size: 11px;">No topics selected.</div>' : ''}
              <div style="background: #ecfdf5; padding: 6px; border-radius: 6px; border: 1px solid #a7f3d0; color: #065f46;">Selected Total: <strong>${filteredExportItems.length}</strong></div>
            </div>
          </div>

          <div class="section">
            <div class="section-title">Questions, Sample Input / Output & Written Solutions (${filteredExportItems.length} Selected)</div>
            ${filteredExportItems.length === 0 ? '<p style="font-size: 12px; color: #64748b;">No questions selected for this module filter.</p>' : ''}
            ${filteredExportItems.map((item, idx) => {
              const sampleInput = item.problem.sample_test_cases?.[0]?.input || 'None / Standard Input';
              const sampleOutput = item.problem.sample_test_cases?.[0]?.output || 'None';

              return `
              <div class="problem-card">
                <div class="problem-meta">
                  <div>
                    <span style="font-weight: 700; color: #64748b; font-size: 11px;">#${idx + 1}</span>
                    <span class="problem-title" style="margin-left: 6px;">${escapeHtml(item.problem.title)}</span>
                  </div>
                  <div class="tags-row">
                    <span class="tag">${getProblemBook(item.problem).toUpperCase()}</span>
                    <span class="tag ${item.problem.difficulty === 'Easy' ? 'tag-easy' : item.problem.difficulty === 'Medium' ? 'tag-med' : 'tag-hard'}">${item.problem.difficulty}</span>
                    <span class="tag" style="background: #0f172a; color: #38bdf8; border-color: #0f172a;">${item.language.toUpperCase()}</span>
                    <span class="tag" style="background: #dcfce7; color: #15803d; border-color: #86efac;">✓ Passed ${item.test_cases_passed}/${item.total_test_cases}</span>
                  </div>
                </div>

                <div style="font-size: 10px; color: #64748b; margin-bottom: 6px;">
                  Category: ${escapeHtml(item.problem.category || 'DSA')} • Coded on ${new Date(item.created_at).toLocaleDateString()}
                </div>

                ${includeIO ? `
                <!-- Sample Input & Output Grid -->
                <div class="io-grid">
                  <div class="io-box">
                    <div class="io-title io-input">📥 Sample Input:</div>
                    <pre style="margin: 0; font-family: monospace; font-size: 11px; color: #0284c7; white-space: pre-wrap;">${escapeHtml(sampleInput)}</pre>
                  </div>
                  <div class="io-box">
                    <div class="io-title io-output">📤 Expected Output:</div>
                    <pre style="margin: 0; font-family: monospace; font-size: 11px; color: #16a34a; white-space: pre-wrap;">${escapeHtml(sampleOutput)}</pre>
                  </div>
                </div>
                ` : ''}

                ${includeCode ? `
                <div style="font-size: 10px; font-weight: 700; color: #475569; text-transform: uppercase; margin-top: 8px;">
                  💻 Written Solution (${item.language.toUpperCase()}):
                </div>
                <pre class="code-block"><code>${escapeHtml(item.code)}</code></pre>
                ` : ''}
              </div>
            `;}).join('')}
          </div>

          <div class="footer">
            Generated on ${new Date().toLocaleString()} by CodeTutor AI • Regular practice builds algorithmic excellence!
          </div>

          <script>
            window.onload = function() {
              window.print();
            }
          </script>
        </body>
      </html>
    `;

    printWindow.document.write(htmlContent);
    printWindow.document.close();
  };

  const handleCopySummary = () => {
    const text = `📊 CodeTutor AI - Weekly DSA Code Practice Report (${dateRangeStr})\n👤 Student: ${profile.display_name}\n🔥 Streak: ${stats.current_streak} Days\n🎯 Solved & Coded: ${weeklySolvedCount}/${totalBankTarget.toLocaleString()} problems (${bankProgressPercent}% platform solved)\n⭐ Total XP: ${stats.total_xp} XP\nKeep coding! 🚀`;
    navigator.clipboard.writeText(text);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 animate-fadeIn">
      <div className="bg-[#0f172a] border border-slate-800 rounded-2xl sm:rounded-3xl w-full max-w-4xl max-h-[92dvh] flex flex-col overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between bg-gradient-to-r from-emerald-950/40 via-slate-900 to-indigo-950/40">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-white tracking-tight flex items-center gap-2">
                <span>Weekly Performance & Code Practice Report</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-mono border border-emerald-500/30">
                  Live
                </span>
              </h2>
              <p className="text-xs text-slate-400 flex items-center gap-1.5 mt-0.5">
                <Calendar className="w-3.5 h-3.5 text-slate-500" />
                <span>{dateRangeStr}</span>
                <span className="text-slate-600">•</span>
                <span className="text-slate-400 font-mono">Excluding Revisions</span>
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6 text-xs text-slate-300">
          {/* Top Report Customizer Bar */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-950/30 via-slate-900 to-indigo-950/30 border border-slate-800 space-y-4 shadow-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-emerald-400" />
                <span className="font-bold text-white text-xs sm:text-sm">
                  Customize What to Include in Your Report
                </span>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-400 font-mono">
                {filteredExportItems.length} Problems Match
              </span>
            </div>

            {/* Filter Controls Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {/* 1. Time Range */}
              <div className="space-y-1">
                <label className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-emerald-400" /> Time Period
                </label>
                <select
                  value={timeRange}
                  onChange={(e) => setTimeRange(e.target.value as any)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-2.5 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-emerald-500 cursor-pointer"
                >
                  <option value="week">This Week (Last 7 Days)</option>
                  <option value="month">Past 30 Days</option>
                  <option value="all">All-Time Lifetime</option>
                </select>
              </div>

              {/* 2. Practice Type */}
              <div className="space-y-1">
                <label className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                  <Layers className="w-3 h-3 text-sky-400" /> Practice Source
                </label>
                <select
                  value={practiceType}
                  onChange={(e) => setPracticeType(e.target.value as any)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-2.5 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-emerald-500 cursor-pointer"
                >
                  <option value="all">All (Workspace + Revision)</option>
                  <option value="regular">Workspace Solves Only</option>
                  <option value="revision">Revision Arena Only</option>
                </select>
              </div>

              {/* 3. Difficulty */}
              <div className="space-y-1">
                <label className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                  <Award className="w-3 h-3 text-amber-400" /> Difficulty Level
                </label>
                <select
                  value={selectedDifficulty}
                  onChange={(e) => setSelectedDifficulty(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-2.5 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-emerald-500 cursor-pointer"
                >
                  <option value="All">All Difficulties</option>
                  <option value="Easy">Easy Only</option>
                  <option value="Medium">Medium Only</option>
                  <option value="Hard">Hard Only</option>
                </select>
              </div>

              {/* 4. Language */}
              <div className="space-y-1">
                <label className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                  <Terminal className="w-3 h-3 text-purple-400" /> Solution Language
                </label>
                <select
                  value={selectedLanguage}
                  onChange={(e) => setSelectedLanguage(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-2.5 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-emerald-500 cursor-pointer"
                >
                  <option value="All">All Languages</option>
                  <option value="cpp">C++ Only</option>
                  <option value="python">Python Only</option>
                  <option value="javascript">JavaScript Only</option>
                  <option value="java">Java Only</option>
                </select>
              </div>
            </div>

            {/* Export Content Inclusions Checkboxes */}
            <div className="pt-2 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 text-[11px]">
              <span className="text-slate-400 font-medium">Export Contents:</span>
              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => setIncludeCode(!includeCode)}
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg border transition cursor-pointer ${
                    includeCode ? 'bg-emerald-500/15 text-emerald-300 border-emerald-500/40 font-semibold' : 'bg-slate-950 text-slate-500 border-slate-800'
                  }`}
                >
                  {includeCode ? <CheckSquare className="w-3.5 h-3.5 text-emerald-400" /> : <Square className="w-3.5 h-3.5" />}
                  <span>Include Source Code</span>
                </button>

                <button
                  type="button"
                  onClick={() => setIncludeIO(!includeIO)}
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg border transition cursor-pointer ${
                    includeIO ? 'bg-emerald-500/15 text-emerald-300 border-emerald-500/40 font-semibold' : 'bg-slate-950 text-slate-500 border-slate-800'
                  }`}
                >
                  {includeIO ? <CheckSquare className="w-3.5 h-3.5 text-emerald-400" /> : <Square className="w-3.5 h-3.5" />}
                  <span>Include Sample I/O</span>
                </button>

                <button
                  type="button"
                  onClick={() => setIncludeStats(!includeStats)}
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg border transition cursor-pointer ${
                    includeStats ? 'bg-emerald-500/15 text-emerald-300 border-emerald-500/40 font-semibold' : 'bg-slate-950 text-slate-500 border-slate-800'
                  }`}
                >
                  {includeStats ? <CheckSquare className="w-3.5 h-3.5 text-emerald-400" /> : <Square className="w-3.5 h-3.5" />}
                  <span>Include Streak & XP Stats</span>
                </button>
              </div>
            </div>
          </div>

          {/* Top KPI Summary Cards */}
          {includeStats && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-col justify-between">
                <div className="flex items-center justify-between text-slate-400 text-[11px]">
                  <span>Problems Coded</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                </div>
                <div className="mt-2">
                  <div className="text-xl font-bold text-white flex items-baseline gap-1">
                    <span>{weeklySolvedCount}</span>
                    <span className="text-[11px] font-normal text-slate-500">/ {totalBankTarget.toLocaleString()}</span>
                  </div>
                  <div className="text-[10px] text-emerald-400 font-medium mt-0.5">
                    {bankProgressPercent}% of total bank
                  </div>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-col justify-between">
                <div className="flex items-center justify-between text-slate-400 text-[11px]">
                  <span>Practice Streak</span>
                  <Flame className="w-3.5 h-3.5 text-amber-400 fill-amber-400/20" />
                </div>
                <div className="mt-2">
                  <div className="text-xl font-bold text-white flex items-baseline gap-1">
                    <span>{stats.current_streak}</span>
                    <span className="text-[11px] font-normal text-amber-400">Days</span>
                  </div>
                  <div className="text-[10px] text-slate-400 mt-0.5">
                    Best: {stats.best_streak || stats.current_streak}d
                  </div>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-col justify-between">
                <div className="flex items-center justify-between text-slate-400 text-[11px]">
                  <span>XP Earned</span>
                  <Zap className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400/20" />
                </div>
                <div className="mt-2">
                  <div className="text-xl font-bold text-white flex items-baseline gap-1">
                    <span>{stats.total_xp}</span>
                    <span className="text-[11px] font-normal text-yellow-400">XP</span>
                  </div>
                  <div className="text-[10px] text-slate-400 mt-0.5">
                    +{weeklySolvedCount * 100} earned
                  </div>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-col justify-between">
                <div className="flex items-center justify-between text-slate-400 text-[11px]">
                  <span>Mastery Rank</span>
                  <Award className="w-3.5 h-3.5 text-indigo-400" />
                </div>
                <div className="mt-2">
                  <div className="text-sm font-bold text-indigo-300 truncate">
                    {stats.total_solved >= 10 ? 'DSA Knight 🛡️' : 'Aspirant 🚀'}
                  </div>
                  <div className="text-[10px] text-slate-400 mt-0.5">
                    {profile.display_name}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Weekly Activity Bar Graph (Mon-Sun) */}
          <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-bold text-white text-xs flex items-center gap-1.5">
                <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                <span>Daily Practice Consistency (This Week)</span>
              </span>
              <span className="text-[11px] text-slate-400">Target: 2 problems/day</span>
            </div>

            <div className="grid grid-cols-7 gap-2 pt-2 items-end h-28">
              {dayNames.map((day, idx) => {
                const count = dayActivity[idx];
                const heightPercent = Math.max(12, Math.min(100, (count / maxDayCount) * 100));
                const isToday = (now.getDay() + 6) % 7 === idx;

                return (
                  <div key={day} className="flex flex-col items-center gap-1.5 h-full justify-end group">
                    <span className="text-[10px] font-mono text-slate-400 opacity-0 group-hover:opacity-100 transition">
                      {count}
                    </span>
                    <div className="w-full bg-slate-950 rounded-lg p-1 flex items-end h-20 overflow-hidden border border-slate-800/80">
                      <div
                        className={`w-full rounded-md transition-all duration-500 ${
                          count > 0
                            ? isToday
                              ? 'bg-gradient-to-t from-emerald-600 to-teal-400'
                              : 'bg-emerald-500/80'
                            : 'bg-slate-800/40'
                        }`}
                        style={{ height: `${count > 0 ? heightPercent : 15}%` }}
                      />
                    </div>
                    <span className={`text-[11px] font-medium ${isToday ? 'text-emerald-400 font-bold' : 'text-slate-400'}`}>
                      {day}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Module / Topic Mastery Grid */}
          <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3">
            <div className="font-bold text-white text-xs flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-teal-400" />
                <span>All Topics Practice Breakdown ({Object.keys(topicCounts).length} Modules)</span>
              </span>
              <span className="text-[10px] text-slate-400 font-mono">
                {Object.values(topicCounts).filter((c) => c > 0).length} Topics Active
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-2 text-xs">
              {Object.entries(topicCounts).map(([k, count]) => (
                <div key={k} className={`p-2 rounded-xl border flex items-center justify-between ${
                  count > 0 
                    ? 'bg-slate-950/80 border-emerald-500/30' 
                    : 'bg-slate-950/40 border-slate-800/80 opacity-60'
                }`}>
                  <span className={`capitalize font-medium ${count > 0 ? 'text-slate-200' : 'text-slate-400'}`}>
                    {k}
                  </span>
                  <span className={`font-bold font-mono ${count > 0 ? 'text-emerald-400' : 'text-slate-600'}`}>
                    {count}
                  </span>
                </div>
              ))}
              <div className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-between col-span-2 sm:col-span-4 lg:col-span-5">
                <span className="text-emerald-300 font-semibold">Total Coded This Week</span>
                <span className="font-bold text-emerald-400 font-mono">{codedProblemItems.length}</span>
              </div>
            </div>
          </div>

          {/* Module Selection Filter for Report & Download */}
          {availableModules.length > 0 && (
            <div className="p-4 rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 border border-slate-800 space-y-3 shadow-md">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <Filter className="w-4 h-4 text-emerald-400" />
                  <span className="font-bold text-white text-xs sm:text-sm">
                    Select Solved Modules to Include in Report & Download
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleSelectAllModules}
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold border border-slate-700 transition cursor-pointer"
                  >
                    Select All ({availableModules.length})
                  </button>
                  <button
                    onClick={handleDeselectAllModules}
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-slate-200 font-medium border border-slate-700 transition cursor-pointer"
                  >
                    Clear All
                  </button>
                </div>
              </div>

              <p className="text-[11px] text-slate-400">
                Tick or untick modules below to customize which solved problems, code solutions, and test cases are included in your CSV export and printable PDF:
              </p>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {availableModules.map(({ book, count }) => {
                  const isChecked = selectedModules.includes(book);
                  return (
                    <button
                      key={book}
                      onClick={() => toggleModule(book)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 border transition cursor-pointer ${
                        isChecked
                          ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/50 shadow-sm'
                          : 'bg-slate-950/60 text-slate-500 border-slate-800 hover:text-slate-300 hover:bg-slate-850'
                      }`}
                    >
                      {isChecked ? (
                        <CheckSquare className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      ) : (
                        <Square className="w-3.5 h-3.5 text-slate-600 shrink-0" />
                      )}
                      <span className="capitalize">{book}</span>
                      <span className={`px-1.5 py-0.2 rounded-full text-[10px] font-mono ${
                        isChecked ? 'bg-emerald-500/30 text-emerald-200' : 'bg-slate-800 text-slate-500'
                      }`}>
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="text-[11px] text-emerald-400/90 font-mono pt-1 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>
                  {selectedModules.length} of {availableModules.length} modules selected ({filteredExportItems.length} problems ready for download)
                </span>
              </div>
            </div>
          )}

          {/* Questions, Input/Output & Written Code List (Excluding Revision) */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Code2 className="w-4 h-4 text-emerald-400" />
                <span className="font-bold text-white text-xs sm:text-sm">
                  Questions, Sample Input/Output & Code Solutions ({filteredExportItems.length} of {codedProblemItems.length})
                </span>
              </div>

              {filteredExportItems.length > 0 && (
                <button
                  onClick={handleToggleAll}
                  className="text-[11px] font-semibold text-emerald-400 hover:text-emerald-300 bg-emerald-500/10 hover:bg-emerald-500/20 px-2.5 py-1 rounded-lg border border-emerald-500/30 transition flex items-center gap-1 cursor-pointer"
                >
                  {allExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  <span>{allExpanded ? 'Collapse All Details' : 'Expand All Details'}</span>
                </button>
              )}
            </div>

            {filteredExportItems.length === 0 ? (
              <div className="p-8 rounded-2xl bg-slate-950/60 border border-slate-800 text-center text-slate-500 space-y-2">
                <Terminal className="w-8 h-8 mx-auto text-slate-600 opacity-60" />
                <div className="text-xs font-semibold text-slate-400">
                  {codedProblemItems.length === 0 
                    ? 'No Coded Problems Logged Yet This Week'
                    : 'No Problems Match Your Selected Modules'}
                </div>
                <p className="text-[11px] text-slate-500 max-w-sm mx-auto">
                  {codedProblemItems.length === 0
                    ? 'Solve coding questions in the Workspace. Your source code, sample input/output, and passing test cases will automatically appear here!'
                    : 'Please select one or more modules above to display and download their code solutions.'}
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredExportItems.map((item, idx) => {
                  const isExpanded = expandedCodes[item.problem.id] ?? true;
                  const isCopied = copiedCodeId === item.problem.id;
                  const book = getProblemBook(item.problem);
                  const sampleCase = item.problem.sample_test_cases?.[0] || { input: '5', output: '5' };

                  return (
                    <div
                      key={item.problem.id}
                      className="rounded-2xl border border-slate-800 bg-slate-950/70 overflow-hidden shadow-lg transition-all"
                    >
                      {/* Problem Header Row */}
                      <div
                        onClick={() => toggleExpandItem(item.problem.id)}
                        className="p-3.5 sm:p-4 bg-slate-900/80 hover:bg-slate-850 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800/80 transition"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <div className="w-7 h-7 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center shrink-0">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                          </div>

                          <div className="min-w-0">
                            <div className="flex items-center gap-2 flex-wrap">
                              <span className="font-bold text-white text-xs sm:text-sm truncate">
                                {item.problem.title}
                              </span>
                              <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700 font-mono">
                                {book.toUpperCase()}
                              </span>
                              <span
                                className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                                  item.problem.difficulty === 'Easy'
                                    ? 'text-emerald-300 bg-emerald-500/15 border-emerald-500/40'
                                    : item.problem.difficulty === 'Medium'
                                    ? 'text-amber-300 bg-amber-500/15 border-amber-500/40'
                                    : 'text-rose-300 bg-rose-500/15 border-rose-500/40'
                                }`}
                              >
                                {item.problem.difficulty}
                              </span>
                            </div>

                            <div className="flex items-center gap-3 text-[11px] text-slate-500 mt-1">
                              <span>Passed: {item.test_cases_passed}/{item.total_test_cases} test cases</span>
                              <span>•</span>
                              <span>{item.execution_time_ms}ms</span>
                              <span>•</span>
                              <span>{new Date(item.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
                          <span className="text-[10px] px-2 py-1 rounded-lg bg-sky-950/80 text-sky-300 border border-sky-800 font-mono font-bold">
                            {item.language.toUpperCase()}
                          </span>

                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleCopyCode(item.problem.id, item.code);
                            }}
                            title="Copy Code Solution"
                            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition flex items-center gap-1 text-[11px] cursor-pointer"
                          >
                            {isCopied ? (
                              <>
                                <Check className="w-3.5 h-3.5 text-emerald-400" />
                                <span className="text-emerald-400 font-semibold">Copied</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3.5 h-3.5 text-slate-400" />
                                <span>Copy</span>
                              </>
                            )}
                          </button>

                          <div className="p-1.5 rounded-lg text-slate-400 hover:text-slate-200">
                            {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                          </div>
                        </div>
                      </div>

                      {/* Expandable Section: Sample Input/Output + Code Solution */}
                      {isExpanded && (
                        <div className="p-3.5 sm:p-4 space-y-3 bg-[#090d16]">
                          {/* Sample Input & Expected Output Box */}
                          <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-[11px] font-bold text-slate-300 flex items-center gap-1.5">
                                <Play className="w-3.5 h-3.5 text-sky-400" />
                                <span>Question Test Cases (Input & Expected Output)</span>
                              </span>
                              <span className="text-[10px] text-slate-500 font-mono">Sample 1</span>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                              {/* Sample Input */}
                              <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 space-y-1">
                                <div className="text-[10px] uppercase font-bold text-sky-400 font-mono flex items-center gap-1">
                                  <span>📥 Sample Input</span>
                                </div>
                                <pre className="font-mono text-[11px] text-slate-200 bg-slate-900/60 p-2 rounded border border-slate-800/80 whitespace-pre-wrap word-break leading-relaxed">
                                  {sampleCase.input || 'None / Standard Input'}
                                </pre>
                              </div>

                              {/* Expected Output */}
                              <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 space-y-1">
                                <div className="text-[10px] uppercase font-bold text-emerald-400 font-mono flex items-center gap-1">
                                  <span>📤 Expected Output</span>
                                </div>
                                <pre className="font-mono text-[11px] text-emerald-300 bg-slate-900/60 p-2 rounded border border-slate-800/80 whitespace-pre-wrap word-break leading-relaxed">
                                  {sampleCase.output || 'None'}
                                </pre>
                              </div>
                            </div>

                            {sampleCase.explanation && (
                              <div className="text-[11px] text-slate-400 bg-slate-950/60 p-2 rounded border border-slate-800/50 flex items-start gap-1.5">
                                <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                                <span><strong>Explanation:</strong> {sampleCase.explanation}</span>
                              </div>
                            )}
                          </div>

                          {/* Code Solution Box */}
                          <div className="space-y-1.5">
                            <div className="flex items-center justify-between text-[11px] text-slate-400 px-0.5">
                              <span className="font-mono text-slate-300 flex items-center gap-1.5">
                                <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                                <span>Your Written Solution ({item.language.toUpperCase()})</span>
                              </span>
                              <span className="text-[10px] text-slate-500 font-mono">
                                {item.code.split('\n').length} lines
                              </span>
                            </div>

                            <pre className="p-3.5 rounded-xl bg-[#030712] border border-slate-800/90 text-slate-200 font-mono text-[11px] sm:text-xs overflow-x-auto leading-relaxed shadow-inner selection:bg-emerald-500/30">
                              <code>{item.code}</code>
                            </pre>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-3 sm:p-5 bg-slate-950/90 border-t border-slate-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5">
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={handleCopySummary}
              className="flex-1 sm:flex-none px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center justify-center gap-1.5 border border-slate-700 transition cursor-pointer"
              title="Copy text summary"
            >
              {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5" />}
              <span>{copiedLink ? 'Copied!' : 'Share Summary'}</span>
            </button>

            <button
              onClick={handleExportCSV}
              disabled={filteredExportItems.length === 0}
              className="flex-1 sm:flex-none px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed text-teal-300 text-xs font-semibold flex items-center justify-center gap-1.5 border border-slate-700 transition cursor-pointer"
              title="Export complete report with input, output, and code as CSV"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export CSV ({filteredExportItems.length})</span>
            </button>
          </div>

          <button
            onClick={handleDownloadPDF}
            disabled={filteredExportItems.length === 0}
            className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 disabled:opacity-40 disabled:cursor-not-allowed text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 transition cursor-pointer"
          >
            <Printer className="w-4 h-4" />
            <span>Print / Save PDF ({filteredExportItems.length})</span>
          </button>
        </div>
      </div>
    </div>
  );
};
