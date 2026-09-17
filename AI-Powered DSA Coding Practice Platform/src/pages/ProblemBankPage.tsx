import React, { useState } from 'react';
import { useProblem } from '../context/ProblemContext';
import { useAuth } from '../context/AuthContext';
import { 
  Search, 
  CheckCircle2, 
  Clock, 
  ChevronRight, 
  Layers, 
  BookOpen, 
  CloudUpload, 
  Cloud,
  Boxes,
  Loader2, 
  Check,
  Shapes,
  Repeat,
  Variable,
  Binary,
  Keyboard,
  Zap,
  Calculator,
  Type,
  Copy,
  AlertCircle,
  ExternalLink,
  X,
  FileText,
  Star,
  Filter
} from 'lucide-react';
import { Difficulty, Problem, ProblemBook } from '../types/problem';
import { getProblemBook, bookmarkService } from '../lib/supabase';

interface ProblemBankPageProps {
  onSelectProblem: (problem: Problem) => void;
  onOpenWeeklyReport?: () => void;
}

export const ProblemBankPage: React.FC<ProblemBankPageProps> = ({
  onSelectProblem,
  onOpenWeeklyReport,
}) => {
  const { problems, syncAllToSupabase } = useProblem();
  const { user } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const deferredSearch = React.useDeferredValue(searchTerm);
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('All');
  const [selectedStatus, setSelectedStatus] = useState<'All' | 'Solved' | 'Unsolved' | 'Bookmarked'>('All');
  const [selectedBook, setSelectedBook] = useState<'All' | ProblemBook>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [isSyncing, setIsSyncing] = useState(false);
  const [syncDone, setSyncDone] = useState(false);
  const [currentPageNum, setCurrentPageNum] = useState(1);
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(() => bookmarkService.getBookmarks(user?.id));
  const [pageSize, setPageSize] = useState<number>(100);
  
  // Sync Modal State
  const [showSyncModal, setShowSyncModal] = useState(false);
  const [syncStatus, setSyncStatus] = useState<{ success: boolean; message: string; count?: number } | null>(null);
  const [copiedSql, setCopiedSql] = useState(false);

  // Refresh bookmarks on user change
  React.useEffect(() => {
    setBookmarkedIds(bookmarkService.getBookmarks(user?.id));
  }, [user?.id]);

  const toggleBookmark = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    bookmarkService.toggleBookmark(id, user?.id);
    setBookmarkedIds(bookmarkService.getBookmarks(user?.id));
  };

  // Reset to page 1 on filter changes
  React.useEffect(() => {
    setCurrentPageNum(1);
  }, [deferredSearch, selectedDifficulty, selectedStatus, selectedBook, selectedCategory]);

  const bookCounts = React.useMemo(() => {
    const counts: Record<string, number> = {};
    for (let i = 0; i < problems.length; i++) {
      const b = getProblemBook(problems[i]);
      counts[b] = (counts[b] || 0) + 1;
    }
    return counts;
  }, [problems]);

  const relevantProblems = React.useMemo(() => {
    if (selectedBook === 'All') return problems;
    return problems.filter((p) => getProblemBook(p) === selectedBook);
  }, [problems, selectedBook]);

  const categories: string[] = React.useMemo(() => {
    return ['All', ...Array.from(new Set(relevantProblems.map((p) => p.category || 'General')))];
  }, [relevantProblems]);

  const filteredProblems = React.useMemo(() => {
    const s = deferredSearch.trim().toLowerCase();
    const bookmarkSet = new Set(bookmarkedIds);

    return problems.filter((p: Problem) => {
      const book = getProblemBook(p);
      const matchesBook = selectedBook === 'All' || book === selectedBook;
      if (!matchesBook) return false;

      const matchesDifficulty =
        selectedDifficulty === 'All' || p.difficulty === selectedDifficulty;
      if (!matchesDifficulty) return false;

      if (selectedStatus === 'Solved' && p.status !== 'solved') return false;
      if (selectedStatus === 'Unsolved' && p.status === 'solved') return false;
      if (selectedStatus === 'Bookmarked' && !bookmarkSet.has(p.id)) return false;

      const matchesCategory =
        selectedCategory === 'All' || (p.category || 'General') === selectedCategory;
      if (!matchesCategory) return false;

      if (!s) return true;

      return (
        p.title.toLowerCase().includes(s) ||
        p.tags?.some((t: string) => t.toLowerCase().includes(s)) ||
        (p.category && p.category.toLowerCase().includes(s))
      );
    });
  }, [problems, selectedBook, deferredSearch, selectedDifficulty, selectedStatus, selectedCategory, bookmarkedIds]);

  const totalPages = Math.max(1, Math.ceil(filteredProblems.length / pageSize));
  const paginatedProblems = React.useMemo(() => {
    const start = (currentPageNum - 1) * pageSize;
    return filteredProblems.slice(start, start + pageSize);
  }, [filteredProblems, currentPageNum, pageSize]);

  const getDifficultyBadge = (diff: Difficulty) => {
    switch (diff) {
      case 'Easy':
        return 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30';
      case 'Medium':
        return 'text-amber-400 bg-amber-500/10 border-amber-500/30';
      case 'Hard':
        return 'text-rose-400 bg-rose-500/10 border-rose-500/30';
    }
  };

  const getBookBadge = (book?: ProblemBook) => {
    switch (book) {
      case 'patterns':
        return { label: 'Pattern', color: 'bg-teal-500/15 text-teal-300 border-teal-500/30' };
      case 'loops':
        return { label: 'Loop', color: 'bg-indigo-500/15 text-indigo-300 border-indigo-500/30' };
      case 'variables':
        return { label: 'Variable', color: 'bg-amber-500/15 text-amber-300 border-amber-500/30' };
      case 'datatypes':
        return { label: 'Data Type', color: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30' };
      case 'userinput':
        return { label: 'User Input', color: 'bg-pink-500/15 text-pink-300 border-pink-500/30' };
      case 'operators':
        return { label: 'Operator', color: 'bg-amber-500/15 text-amber-300 border-amber-500/30' };
      case 'strings':
        return { label: 'String', color: 'bg-violet-500/15 text-violet-300 border-violet-500/30' };
      case 'math':
        return { label: 'Math & cmath', color: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30' };
      case 'booleans':
        return { label: 'Boolean', color: 'bg-lime-500/15 text-lime-300 border-lime-500/30' };
      case 'ifelse':
        return { label: 'If...Else', color: 'bg-sky-500/15 text-sky-300 border-sky-500/30' };
      case 'switch':
        return { label: 'Switch', color: 'bg-purple-500/15 text-purple-300 border-purple-500/30' };
      case 'whileloop':
        return { label: 'While Loop', color: 'bg-rose-500/15 text-rose-300 border-rose-500/30' };
      case 'forloop':
        return { label: 'For Loop', color: 'bg-blue-500/15 text-blue-300 border-blue-500/30' };
      case 'breakcontinue':
        return { label: 'Break/Cont.', color: 'bg-orange-500/15 text-orange-300 border-orange-500/30' };
      case 'arrays':
        return { label: 'Array', color: 'bg-teal-500/15 text-teal-300 border-teal-500/30' };
      case 'structures':
        return { label: 'Structure', color: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30' };
      case 'enums':
        return { label: 'Enum', color: 'bg-amber-500/15 text-amber-300 border-amber-500/30' };
      case 'references':
        return { label: 'Reference', color: 'bg-indigo-500/15 text-indigo-300 border-indigo-500/30' };
      case 'pointers':
        return { label: 'Pointer', color: 'bg-fuchsia-500/15 text-fuchsia-300 border-fuchsia-500/30' };
      case 'memorymgmt':
        return { label: 'Memory Mgmt', color: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30' };
      case 'functions':
        return { label: 'Function', color: 'bg-violet-500/15 text-violet-300 border-violet-500/30' };
      case 'funcparams':
        return { label: 'Func Params', color: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30' };
      case 'funcoverloading':
        return { label: 'Overloading', color: 'bg-amber-500/15 text-amber-300 border-amber-500/30' };
      case 'scope':
        return { label: 'Scope', color: 'bg-blue-500/15 text-blue-300 border-blue-500/30' };
      case 'recursion':
        return { label: 'Recursion', color: 'bg-rose-500/15 text-rose-300 border-rose-500/30' };
      case 'lambda':
        return { label: 'Lambda', color: 'bg-purple-500/15 text-purple-300 border-purple-500/30' };
      case 'cppoop':
        return { label: 'OOP', color: 'bg-teal-500/15 text-teal-300 border-teal-500/30' };
      case 'classesobjects':
        return { label: 'Class/Obj', color: 'bg-indigo-500/15 text-indigo-300 border-indigo-500/30' };
      case 'classmethods':
        return { label: 'Method', color: 'bg-violet-500/15 text-violet-300 border-violet-500/30' };
      case 'constructors':
        return { label: 'Constructor', color: 'bg-amber-500/15 text-amber-300 border-amber-500/30' };
      case 'accessspecifiers':
        return { label: 'Access Spec', color: 'bg-sky-500/15 text-sky-300 border-sky-500/30' };
      case 'encapsulation':
        return { label: 'Encap', color: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30' };
      case 'friendfunctions':
        return { label: 'Friend', color: 'bg-pink-500/15 text-pink-300 border-pink-500/30' };
      case 'inheritance':
        return { label: 'Inheritance', color: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30' };
      case 'polymorphism':
        return { label: 'Polymorphism', color: 'bg-fuchsia-500/15 text-fuchsia-300 border-fuchsia-500/30' };
      case 'templates':
        return { label: 'Template', color: 'bg-orange-500/15 text-orange-300 border-orange-500/30' };
      case 'files':
        return { label: 'File I/O', color: 'bg-lime-500/15 text-lime-300 border-lime-500/30' };
      case 'cppdate':
        return { label: 'Date/Time', color: 'bg-purple-500/15 text-purple-300 border-purple-500/30' };
      case 'cpperrors':
        return { label: 'C++ Errors', color: 'bg-rose-500/15 text-rose-300 border-rose-500/30' };
      case 'cppdebugging':
        return { label: 'Debugging', color: 'bg-amber-500/15 text-amber-300 border-amber-500/30' };
      case 'cppexceptions':
        return { label: 'Exceptions', color: 'bg-red-500/15 text-red-300 border-red-500/30' };
      case 'inputvalidation':
        return { label: 'Validation', color: 'bg-yellow-500/15 text-yellow-300 border-yellow-500/30' };
      case 'datastructuresstl':
        return { label: 'DS & STL', color: 'bg-indigo-500/15 text-indigo-300 border-indigo-500/30' };
      case 'vectors':
        return { label: 'Vectors', color: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30' };
      case 'cpplist':
        return { label: 'List', color: 'bg-teal-500/15 text-teal-300 border-teal-500/30' };
      case 'stacks':
        return { label: 'Stacks', color: 'bg-violet-500/15 text-violet-300 border-violet-500/30' };
      case 'queues':
        return { label: 'Queues', color: 'bg-sky-500/15 text-sky-300 border-sky-500/30' };
      case 'cppdeque':
        return { label: 'Deque', color: 'bg-blue-500/15 text-blue-300 border-blue-500/30' };
      case 'sets':
        return { label: 'Sets', color: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30' };
      case 'maps':
        return { label: 'Maps', color: 'bg-fuchsia-500/15 text-fuchsia-300 border-fuchsia-500/30' };
      case 'iterators':
        return { label: 'Iterators', color: 'bg-purple-500/15 text-purple-300 border-purple-500/30' };
      case 'algorithms':
        return { label: 'Algorithms', color: 'bg-lime-500/15 text-lime-300 border-lime-500/30' };
      default:
        return { label: 'DSA', color: 'bg-slate-500/15 text-slate-300 border-slate-500/30' };
    }
  };

  const [syncProgress, setSyncProgress] = useState<{ current: number; total: number }>({ current: 0, total: 5200 });

  const handleSyncToCloud = async () => {
    setIsSyncing(true);
    setShowSyncModal(true);
    setSyncStatus(null);
    setSyncProgress({ current: 0, total: problems.length || 5200 });

    try {
      const res = await syncAllToSupabase((synced, total) => {
        setSyncProgress({ current: synced, total });
      });
      if (res.count > 0) {
        setSyncDone(true);
        setSyncStatus({
          success: true,
          count: res.count,
          message: `Successfully synced all ${res.count.toLocaleString()} problems directly into your Supabase Cloud Database across all 52 modules!`
        });
        setTimeout(() => setSyncDone(false), 4000);
      } else {
        setSyncStatus({
          success: false,
          message: res.error || 'Database permission locked by Supabase RLS policies. Run the 1-click SQL unlock script below in your Supabase SQL Editor.'
        });
      }
    } catch (e: any) {
      setSyncStatus({
        success: false,
        message: e?.message || 'Network or connection error.'
      });
    } finally {
      setIsSyncing(false);
    }
  };

  const copySqlToClipboard = () => {
    const sqlCommand = `-- 1-Click Supabase Table Setup & RLS Policy for all 5,200 Problems
create table if not exists public.problems (
  id text primary key,
  book text,
  order_index integer,
  user_id uuid,
  title text,
  slug text,
  description text,
  difficulty text,
  category text,
  tags jsonb,
  source text,
  sample_test_cases jsonb,
  starter_templates jsonb,
  status text,
  created_at timestamp with time zone default timezone('utc'::text, now()),
  updated_at timestamp with time zone default timezone('utc'::text, now())
);
alter table public.problems enable row level security;
drop policy if exists "allow_all_problems" on public.problems;
create policy "allow_all_problems" on public.problems for all using (true) with check (true);
grant all on table public.problems to anon, authenticated, service_role;`;

    navigator.clipboard.writeText(sqlCommand);
    setCopiedSql(true);
    setTimeout(() => setCopiedSql(false), 3000);
  };

  return (
    <div className="max-w-7xl mx-auto p-3 sm:p-6 lg:p-8 space-y-4 sm:space-y-6">
      {/* Top Banner */}
      <div className="p-4 sm:p-6 rounded-2xl bg-gradient-to-r from-emerald-950/40 via-slate-900 to-indigo-950/40 border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-xl">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
            <Layers className="w-3.5 h-3.5 shrink-0" />
            <span>Problem Bank Repository • 5,200 Curated Questions</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex flex-wrap items-center gap-2">
            <span>Algorithm & DSA Problem Bank</span>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-mono">
              52 Modules
            </span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-400">
            Explore 5,200 mastery practice questions across 52 modules (OOP, STL Vectors, Lists, Stacks, Queues, Deque, Sets, Maps, Iterators, STL Algorithms, Errors, Debugging & more).
          </p>
        </div>

        <div className="flex items-center gap-2.5 w-full sm:w-auto">
          {onOpenWeeklyReport && (
            <button
              onClick={onOpenWeeklyReport}
              className="flex-1 sm:flex-none px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 transition cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>Weekly Report</span>
            </button>
          )}

          <button
            onClick={handleSyncToCloud}
            disabled={isSyncing}
            className="flex-1 sm:flex-none px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center justify-center gap-2 border border-slate-700 transition shadow-sm cursor-pointer disabled:opacity-50"
            title="Sync all 5,200 questions to Supabase cloud database"
          >
            <Cloud className={`w-4 h-4 text-emerald-400 ${isSyncing ? 'animate-spin' : ''}`} />
            <span>{isSyncing ? 'Syncing...' : syncDone ? 'Synced ✓' : 'Cloud Sync'}</span>
          </button>
        </div>
      </div>

      {/* Module Selector Navigation Bar (52 Books + All) */}
      <div className="flex overflow-x-auto sm:flex-wrap gap-1.5 p-2 rounded-2xl bg-slate-900 border border-slate-800 text-xs no-scrollbar scroll-smooth touch-scroll shrink-0">
        <button
          onClick={() => { setSelectedBook('All'); setSelectedCategory('All'); }}
          className={`py-1.5 px-3 rounded-xl font-bold transition flex items-center justify-center gap-1.5 cursor-pointer shrink-0 border ${
            selectedBook === 'All'
              ? 'bg-slate-800 text-white border-slate-700 shadow-md'
              : 'border-transparent text-slate-400 hover:text-white hover:bg-slate-800/40'
          }`}
        >
          <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
          <span>All ({problems.length})</span>
        </button>

        {[
          { id: 'patterns', label: 'Patterns', icon: Shapes, color: 'text-teal-400', active: 'bg-teal-500/20 text-teal-300 border-teal-500/40' },
          { id: 'loops', label: 'Loops', icon: Repeat, color: 'text-indigo-400', active: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40' },
          { id: 'variables', label: 'Variables', icon: Variable, color: 'text-amber-400', active: 'bg-amber-500/20 text-amber-300 border-amber-500/40' },
          { id: 'datatypes', label: 'Data Types', icon: Binary, color: 'text-cyan-400', active: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40' },
          { id: 'userinput', label: 'User Input', icon: Keyboard, color: 'text-pink-400', active: 'bg-pink-500/20 text-pink-300 border-pink-500/40' },
          { id: 'operators', label: 'Operators', icon: Zap, color: 'text-yellow-400', active: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/40' },
          { id: 'strings', label: 'Strings', icon: Type, color: 'text-violet-400', active: 'bg-violet-500/20 text-violet-300 border-violet-500/40' },
          { id: 'math', label: 'Math (<cmath>)', icon: Calculator, color: 'text-emerald-400', active: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40' },
          { id: 'booleans', label: 'Booleans', icon: CheckCircle2, color: 'text-lime-400', active: 'bg-lime-500/20 text-lime-300 border-lime-500/40' },
          { id: 'ifelse', label: 'If...Else', icon: Layers, color: 'text-sky-400', active: 'bg-sky-500/20 text-sky-300 border-sky-500/40' },
          { id: 'switch', label: 'Switch', icon: Filter, color: 'text-purple-400', active: 'bg-purple-500/20 text-purple-300 border-purple-500/40' },
          { id: 'whileloop', label: 'While Loop', icon: Repeat, color: 'text-rose-400', active: 'bg-rose-500/20 text-rose-300 border-rose-500/40' },
          { id: 'forloop', label: 'For Loop', icon: Clock, color: 'text-blue-400', active: 'bg-blue-500/20 text-blue-300 border-blue-500/40' },
          { id: 'breakcontinue', label: 'Break/Cont.', icon: Star, color: 'text-orange-400', active: 'bg-orange-500/20 text-orange-300 border-orange-500/40' },
          { id: 'arrays', label: 'Arrays', icon: Boxes, color: 'text-teal-400', active: 'bg-teal-500/20 text-teal-300 border-teal-500/40' },
          { id: 'structures', label: 'Structures', icon: Shapes, color: 'text-emerald-400', active: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40' },
          { id: 'enums', label: 'Enums', icon: Binary, color: 'text-amber-400', active: 'bg-amber-500/20 text-amber-300 border-amber-500/40' },
          { id: 'references', label: 'References', icon: ExternalLink, color: 'text-indigo-400', active: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40' },
          { id: 'pointers', label: 'Pointers', icon: Zap, color: 'text-fuchsia-400', active: 'bg-fuchsia-500/20 text-fuchsia-300 border-fuchsia-500/40' },
          { id: 'memorymgmt', label: 'Memory Mgmt', icon: Boxes, color: 'text-cyan-400', active: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40' },
          { id: 'functions', label: 'Functions', icon: Layers, color: 'text-violet-400', active: 'bg-violet-500/20 text-violet-300 border-violet-500/40' },
          { id: 'funcparams', label: 'Func Params', icon: ExternalLink, color: 'text-emerald-400', active: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40' },
          { id: 'funcoverloading', label: 'Overloading', icon: Shapes, color: 'text-amber-400', active: 'bg-amber-500/20 text-amber-300 border-amber-500/40' },
          { id: 'scope', label: 'Scope', icon: Star, color: 'text-blue-400', active: 'bg-blue-500/20 text-blue-300 border-blue-500/40' },
          { id: 'recursion', label: 'Recursion', icon: Repeat, color: 'text-rose-400', active: 'bg-rose-500/20 text-rose-300 border-rose-500/40' },
          { id: 'lambda', label: 'Lambda', icon: Zap, color: 'text-purple-400', active: 'bg-purple-500/20 text-purple-300 border-purple-500/40' },
          { id: 'cppoop', label: 'C++ OOP', icon: Shapes, color: 'text-teal-400', active: 'bg-teal-500/20 text-teal-300 border-teal-500/40' },
          { id: 'classesobjects', label: 'Classes/Objects', icon: Boxes, color: 'text-indigo-400', active: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40' },
          { id: 'classmethods', label: 'Class Methods', icon: Layers, color: 'text-violet-400', active: 'bg-violet-500/20 text-violet-300 border-violet-500/40' },
          { id: 'constructors', label: 'Constructors', icon: Star, color: 'text-amber-400', active: 'bg-amber-500/20 text-amber-300 border-amber-500/40' },
          { id: 'accessspecifiers', label: 'Access Specifiers', icon: Filter, color: 'text-sky-400', active: 'bg-sky-500/20 text-sky-300 border-sky-500/40' },
          { id: 'encapsulation', label: 'Encapsulation', icon: CheckCircle2, color: 'text-emerald-400', active: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40' },
          { id: 'friendfunctions', label: 'Friend Functions', icon: ExternalLink, color: 'text-pink-400', active: 'bg-pink-500/20 text-pink-300 border-pink-500/40' },
          { id: 'inheritance', label: 'Inheritance', icon: Layers, color: 'text-cyan-400', active: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40' },
          { id: 'polymorphism', label: 'Polymorphism', icon: Zap, color: 'text-fuchsia-400', active: 'bg-fuchsia-500/20 text-fuchsia-300 border-fuchsia-500/40' },
          { id: 'templates', label: 'Templates', icon: Shapes, color: 'text-orange-400', active: 'bg-orange-500/20 text-orange-300 border-orange-500/40' },
          { id: 'files', label: 'Files & I/O', icon: FileText, color: 'text-lime-400', active: 'bg-lime-500/20 text-lime-300 border-lime-500/40' },
          { id: 'cppdate', label: 'Date & Time', icon: Clock, color: 'text-purple-400', active: 'bg-purple-500/20 text-purple-300 border-purple-500/40' },
          { id: 'cpperrors', label: 'C++ Errors', icon: AlertCircle, color: 'text-rose-400', active: 'bg-rose-500/20 text-rose-300 border-rose-500/40' },
          { id: 'cppdebugging', label: 'Debugging', icon: Zap, color: 'text-amber-400', active: 'bg-amber-500/20 text-amber-300 border-amber-500/40' },
          { id: 'cppexceptions', label: 'Exceptions', icon: AlertCircle, color: 'text-red-400', active: 'bg-red-500/20 text-red-300 border-red-500/40' },
          { id: 'inputvalidation', label: 'Validation', icon: CheckCircle2, color: 'text-yellow-400', active: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/40' },
          { id: 'datastructuresstl', label: 'DS & STL', icon: Layers, color: 'text-indigo-400', active: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40' },
          { id: 'vectors', label: 'Vectors', icon: Boxes, color: 'text-cyan-400', active: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40' },
          { id: 'cpplist', label: 'List', icon: Layers, color: 'text-teal-400', active: 'bg-teal-500/20 text-teal-300 border-teal-500/40' },
          { id: 'stacks', label: 'Stacks', icon: Layers, color: 'text-violet-400', active: 'bg-violet-500/20 text-violet-300 border-violet-500/40' },
          { id: 'queues', label: 'Queues', icon: Clock, color: 'text-sky-400', active: 'bg-sky-500/20 text-sky-300 border-sky-500/40' },
          { id: 'cppdeque', label: 'Deque', icon: Boxes, color: 'text-blue-400', active: 'bg-blue-500/20 text-blue-300 border-blue-500/40' },
          { id: 'sets', label: 'Sets', icon: Shapes, color: 'text-emerald-400', active: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40' },
          { id: 'maps', label: 'Maps', icon: Binary, color: 'text-fuchsia-400', active: 'bg-fuchsia-500/20 text-fuchsia-300 border-fuchsia-500/40' },
          { id: 'iterators', label: 'Iterators', icon: ExternalLink, color: 'text-purple-400', active: 'bg-purple-500/20 text-purple-300 border-purple-500/40' },
          { id: 'algorithms', label: 'Algorithms', icon: Zap, color: 'text-lime-400', active: 'bg-lime-500/20 text-lime-300 border-lime-500/40' },
        ].map((book) => {
          const Icon = book.icon;
          const count = bookCounts[book.id] || 0;
          const isSelected = selectedBook === book.id;
          return (
            <button
              key={book.id}
              onClick={() => { setSelectedBook(book.id as ProblemBook); setSelectedCategory('All'); }}
              className={`py-1.5 px-2.5 rounded-xl font-bold transition flex items-center justify-center gap-1.5 cursor-pointer shrink-0 border ${
                isSelected
                  ? `${book.active} shadow-md`
                  : 'border-transparent text-slate-400 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              <Icon className={`w-3.5 h-3.5 ${book.color}`} />
              <span>{book.label} ({count})</span>
            </button>
          );
        })}
      </div>

      {/* Filters & Search Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {/* Search */}
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3 top-3 text-slate-500" />
          <input
            type="text"
            placeholder="Search #001, title, or tag..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-emerald-500"
          />
        </div>

        {/* Status Filter (All / Solved / Unsolved / Bookmarked) */}
        <div className="flex items-center gap-1 p-1 rounded-xl bg-slate-900 border border-slate-800 text-xs overflow-x-auto">
          {(['All', 'Solved', 'Unsolved', 'Bookmarked'] as const).map((st) => (
            <button
              key={st}
              onClick={() => setSelectedStatus(st)}
              className={`flex-1 py-1.5 px-2 rounded-lg font-medium transition whitespace-nowrap text-center ${
                selectedStatus === st
                  ? 'bg-slate-800 text-emerald-400 shadow-sm border border-slate-700 font-semibold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {st === 'Bookmarked' ? '⭐ Starred' : st}
            </button>
          ))}
        </div>

        {/* Difficulty Filter */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-900 border border-slate-800 text-xs overflow-x-auto">
          {['All', 'Easy', 'Medium', 'Hard'].map((diff) => (
            <button
              key={diff}
              onClick={() => setSelectedDifficulty(diff)}
              className={`flex-1 py-1.5 px-2 rounded-lg font-medium transition whitespace-nowrap ${
                selectedDifficulty === diff
                  ? 'bg-slate-800 text-emerald-400 shadow-sm border border-slate-700'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {diff}
            </button>
          ))}
        </div>

        {/* Category Dropdown */}
        <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 rounded-xl px-3 py-1">
          <Layers className="w-4 h-4 text-slate-500 shrink-0" />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full bg-transparent text-xs text-slate-200 py-1.5 focus:outline-none cursor-pointer"
          >
            {categories.map((cat: string) => (
              <option key={cat} value={cat} className="bg-slate-900 text-slate-200">
                {cat === 'All' ? 'All Categories' : cat}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Problem Table */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
        <div className="p-3 bg-slate-950/60 border-b border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <div className="font-semibold text-slate-300">
            Showing {filteredProblems.length === 0 ? 0 : (currentPageNum - 1) * pageSize + 1}–{Math.min(currentPageNum * pageSize, filteredProblems.length)} of {filteredProblems.length} questions
          </div>
          {totalPages > 1 && (
            <div className="flex items-center gap-1.5">
              <button
                disabled={currentPageNum === 1}
                onClick={() => setCurrentPageNum((p) => Math.max(1, p - 1))}
                className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-40 disabled:hover:bg-slate-800 text-slate-300 font-semibold transition"
              >
                Previous
              </button>
              <span className="px-2 font-mono text-emerald-400">
                {currentPageNum} / {totalPages}
              </span>
              <button
                disabled={currentPageNum === totalPages}
                onClick={() => setCurrentPageNum((p) => Math.min(totalPages, p + 1))}
                className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-40 disabled:hover:bg-slate-800 text-slate-300 font-semibold transition"
              >
                Next
              </button>
            </div>
          )}
        </div>

        <div className="divide-y divide-slate-800/80">
          {paginatedProblems.length === 0 ? (
            <div className="p-12 text-center text-slate-500 space-y-3">
              <Layers className="w-10 h-10 mx-auto opacity-30 text-emerald-400" />
              <div className="text-sm font-semibold text-slate-300">No Questions Found</div>
              <p className="text-xs text-slate-400 max-w-sm mx-auto">
                Try selecting a different module tab or clearing your filter.
              </p>
            </div>
          ) : (
            paginatedProblems.map((problem: Problem) => {
              const isSolved = problem.status === 'solved';
              const isBookmarked = bookmarkedIds.includes(problem.id);
              const book = getProblemBook(problem);
              const badge = getBookBadge(book);
              return (
                <div
                  key={problem.id}
                  onClick={() => onSelectProblem(problem)}
                  className={`p-3.5 sm:p-4 transition cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 group border-b border-slate-800/80 ${
                    isSolved
                      ? 'bg-emerald-950/20 hover:bg-emerald-950/40 border-l-4 border-l-emerald-500'
                      : 'hover:bg-slate-800/60'
                  }`}
                >
                  <div className="flex items-start sm:items-center gap-3 min-w-0 flex-1">
                    <div className="shrink-0 mt-0.5 sm:mt-0">
                      {isSolved ? (
                        <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center">
                          <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400" />
                        </div>
                      ) : problem.status === 'in_progress' ? (
                        <Clock className="w-5 h-5 text-amber-400" />
                      ) : (
                        <div className="w-5 h-5 rounded-full border border-slate-700 group-hover:border-slate-500" />
                      )}
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className={`font-semibold text-sm truncate ${
                          isSolved ? 'text-emerald-300 font-bold group-hover:text-emerald-200' : 'text-slate-200 group-hover:text-white'
                        }`}>
                          {problem.title}
                        </span>
                        <span className={`text-[10px] px-2 py-0.5 rounded-full border font-mono ${badge.color}`}>
                          {badge.label}
                        </span>
                        {isSolved && (
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                            ✓ Solved
                          </span>
                        )}
                      </div>

                      <div className="flex flex-wrap items-center gap-2 mt-1 text-xs text-slate-500">
                        <span>{problem.category}</span>
                        <span>•</span>
                        {problem.tags?.slice(0, 3).map((tag: string) => (
                          <span key={tag} className="text-[11px] text-slate-400">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-2.5 sm:gap-3 shrink-0 w-full sm:w-auto pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-800/60">
                    <div className="flex items-center gap-2">
                      {/* Star / Bookmark Toggle Button */}
                      <button
                        onClick={(e) => toggleBookmark(e, problem.id)}
                        title={isBookmarked ? 'Remove Bookmark' : 'Bookmark Question'}
                        className={`p-1.5 rounded-lg transition ${
                          isBookmarked
                            ? 'text-yellow-400 bg-yellow-400/10 hover:bg-yellow-400/20'
                            : 'text-slate-500 hover:text-yellow-400 hover:bg-slate-800'
                        }`}
                      >
                        <Star className={`w-4 h-4 ${isBookmarked ? 'fill-yellow-400' : ''}`} />
                      </button>

                      <span
                        className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${
                          isSolved 
                            ? 'text-emerald-300 bg-emerald-500/15 border-emerald-500/40' 
                            : getDifficultyBadge(problem.difficulty)
                        }`}
                      >
                        {isSolved ? '✓ Solved' : problem.difficulty}
                      </span>
                    </div>

                    <button
                      className="p-1.5 sm:p-2 rounded-lg text-slate-400 group-hover:text-emerald-400 group-hover:bg-slate-800 transition flex items-center gap-1 text-xs"
                      title="Solve in Workspace"
                    >
                      <span className="sm:hidden text-emerald-400 font-semibold text-[11px]">Solve</span>
                      <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {filteredProblems.length > 0 && (
          <div className="p-3 sm:p-3.5 bg-slate-950/60 border-t border-slate-800 flex flex-wrap items-center justify-between text-xs gap-3">
            {/* Page Size Switcher */}
            <div className="flex items-center gap-1.5 text-slate-400 font-mono text-[11px]">
              <span>Per page:</span>
              {[25, 50, 100].map((size) => (
                <button
                  key={size}
                  onClick={() => {
                    setPageSize(size);
                    setCurrentPageNum(1);
                  }}
                  className={`px-2 py-0.5 rounded-md transition ${
                    pageSize === size
                      ? 'bg-emerald-500 text-slate-950 font-bold'
                      : 'bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-750'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex items-center gap-2">
                <button
                  disabled={currentPageNum === 1}
                  onClick={() => setCurrentPageNum((p) => Math.max(1, p - 1))}
                  className="px-2.5 py-1 sm:px-3 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-40 disabled:hover:bg-slate-800 text-slate-300 font-semibold transition shrink-0"
                >
                  ← <span className="hidden sm:inline">Previous</span>
                </button>

                {/* Mobile simplified page indicator */}
                <div className="sm:hidden font-mono text-xs text-emerald-400 font-bold">
                  {currentPageNum} / {totalPages}
                </div>

                {/* Desktop numerical pagination */}
                <div className="hidden sm:flex items-center gap-1">
                  {Array.from({ length: Math.min(7, totalPages) }, (_, i) => {
                    let pNum: number;
                    if (totalPages <= 7) {
                      pNum = i + 1;
                    } else if (currentPageNum <= 4) {
                      pNum = i + 1;
                    } else if (currentPageNum >= totalPages - 3) {
                      pNum = totalPages - 6 + i;
                    } else {
                      pNum = currentPageNum - 3 + i;
                    }
                    return (
                      <button
                        key={pNum}
                        onClick={() => setCurrentPageNum(pNum)}
                        className={`w-7 h-7 rounded-lg text-xs font-mono font-semibold transition ${
                          currentPageNum === pNum
                            ? 'bg-emerald-500 text-slate-950 font-bold'
                            : 'bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700'
                        }`}
                      >
                        {pNum}
                      </button>
                    );
                  })}
                </div>

                <button
                  disabled={currentPageNum === totalPages}
                  onClick={() => setCurrentPageNum((p) => Math.min(totalPages, p + 1))}
                  className="px-2.5 py-1 sm:px-3 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 disabled:opacity-40 disabled:hover:bg-emerald-500/20 text-emerald-300 font-semibold transition border border-emerald-500/30 shrink-0"
                >
                  <span className="hidden sm:inline">Next</span> →
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Interactive Supabase Cloud Sync Modal */}
      {showSyncModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#0f172a] border border-slate-800 rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl space-y-4">
            <div className="p-5 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <CloudUpload className="w-5 h-5 text-teal-400" />
                <h3 className="font-bold text-white text-base">Supabase Cloud Sync Status</h3>
              </div>
              <button
                onClick={() => setShowSyncModal(false)}
                className="p-1 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-5 space-y-4 text-xs">
              {isSyncing ? (
                <div className="py-6 text-center space-y-4">
                  <Loader2 className="w-10 h-10 mx-auto text-emerald-400 animate-spin" />
                  <div className="space-y-1">
                    <p className="font-bold text-slate-100 text-sm">
                      Syncing {syncProgress.total.toLocaleString()} Questions with Supabase Cloud...
                    </p>
                    <p className="text-slate-400 text-xs">
                      Uploading all 52 modules in fast batches ({syncProgress.current.toLocaleString()} / {syncProgress.total.toLocaleString()})
                    </p>
                  </div>

                  {/* Animated Progress Bar */}
                  <div className="w-full bg-slate-950 rounded-full h-3 overflow-hidden border border-slate-800 p-0.5">
                    <div 
                      className="bg-gradient-to-r from-emerald-500 to-teal-400 h-full rounded-full transition-all duration-300 shadow-sm shadow-emerald-500/30"
                      style={{ width: `${Math.min(100, Math.round((syncProgress.current / (syncProgress.total || 1)) * 100))}%` }}
                    />
                  </div>
                  <div className="text-[11px] font-mono text-emerald-400 font-bold">
                    {Math.min(100, Math.round((syncProgress.current / (syncProgress.total || 1)) * 100))}% Completed
                  </div>
                </div>
              ) : syncStatus?.success ? (
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-sm text-emerald-400">
                    <CheckCircle2 className="w-5 h-5" />
                    <span>Database Synced Successfully!</span>
                  </div>
                  <p className="text-slate-300">{syncStatus.message}</p>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 flex items-start gap-2.5">
                    <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <span className="font-bold">Supabase Row-Level Security (RLS) Notice:</span>
                      <p className="text-slate-300">{syncStatus?.message || 'Database security policy requires authorization or table creation.'}</p>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-slate-200">1-Click SQL Unlock Command:</span>
                      <button
                        onClick={copySqlToClipboard}
                        className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-teal-300 border border-slate-700 flex items-center gap-1 font-semibold text-[11px] transition cursor-pointer"
                      >
                        {copiedSql ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copiedSql ? 'Copied!' : 'Copy SQL'}</span>
                      </button>
                    </div>
                    <pre className="p-2.5 rounded bg-slate-950 text-emerald-300 font-mono text-[10px] overflow-x-auto border border-slate-800 max-h-36">
{`-- Run in Supabase SQL Editor:
create table if not exists public.problems (
  id text primary key,
  book text,
  order_index integer,
  user_id uuid,
  title text,
  slug text,
  description text,
  difficulty text,
  category text,
  tags jsonb,
  source text,
  sample_test_cases jsonb,
  starter_templates jsonb,
  status text,
  created_at timestamp with time zone default timezone('utc'::text, now()),
  updated_at timestamp with time zone default timezone('utc'::text, now())
);
alter table public.problems enable row level security;
drop policy if exists "allow_all_problems" on public.problems;
create policy "allow_all_problems" on public.problems for all using (true) with check (true);
grant all on table public.problems to anon, authenticated, service_role;`}
                    </pre>
                  </div>

                  <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-slate-300 space-y-1">
                    <span className="font-semibold text-indigo-300">💡 1-Click Database Setup:</span>
                    <p className="text-[11px]">
                      Copy the SQL command above, open your <strong>Supabase Dashboard &gt; SQL Editor</strong>, paste it, and click <strong>Run</strong>. Then click <strong>Cloud Sync</strong> again to push all 5,200 questions across all 52 modules directly into your Supabase cloud database!
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div className="p-4 bg-slate-950/80 border-t border-slate-800 flex items-center justify-between">
              <a
                href="https://supabase.com/dashboard"
                target="_blank"
                rel="noreferrer"
                className="text-xs text-teal-400 hover:underline flex items-center gap-1"
              >
                <span>Open Supabase Dashboard</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={() => setShowSyncModal(false)}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
