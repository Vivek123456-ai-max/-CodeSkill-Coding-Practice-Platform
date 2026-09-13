import React, { useState } from 'react';
import { useProblem } from '../../context/ProblemContext';
import { useAuth } from '../../context/AuthContext';
import { 
  CheckCircle2, 
  Clock, 
  Search, 
  Filter, 
  Layers, 
  ChevronRight,
  BookOpen,
  Star
} from 'lucide-react';
import { Difficulty, Problem, ProblemBook } from '../../types/problem';
import { getProblemBook, bookmarkService } from '../../lib/supabase';

const getDifficultyColor = (diff: Difficulty) => {
  switch (diff) {
    case 'Easy':
      return 'text-emerald-400 bg-emerald-400/10 border-emerald-500/20';
    case 'Medium':
      return 'text-amber-400 bg-amber-400/10 border-amber-500/20';
    case 'Hard':
      return 'text-rose-400 bg-rose-400/10 border-rose-500/20';
  }
};

const getBookBadge = (book?: ProblemBook) => {
  switch (book) {
    case 'patterns':
      return { label: 'Pattern', color: 'text-teal-400 bg-teal-500/10' };
    case 'loops':
      return { label: 'Loop', color: 'text-indigo-400 bg-indigo-500/10' };
    case 'variables':
      return { label: 'Variable', color: 'text-amber-400 bg-amber-500/10' };
    case 'datatypes':
      return { label: 'DataType', color: 'text-cyan-400 bg-cyan-500/10' };
    case 'userinput':
      return { label: 'Input', color: 'text-pink-400 bg-pink-500/10' };
    case 'operators':
      return { label: 'Operator', color: 'text-yellow-400 bg-yellow-500/10' };
    case 'strings':
      return { label: 'String', color: 'text-violet-400 bg-violet-500/10' };
    case 'math':
      return { label: 'Math', color: 'text-emerald-400 bg-emerald-500/10' };
    case 'booleans':
      return { label: 'Bool', color: 'text-lime-400 bg-lime-500/10' };
    case 'ifelse':
      return { label: 'IfElse', color: 'text-sky-400 bg-sky-500/10' };
    case 'switch':
      return { label: 'Switch', color: 'text-purple-400 bg-purple-500/10' };
    case 'whileloop':
      return { label: 'While', color: 'text-rose-400 bg-rose-500/10' };
    case 'forloop':
      return { label: 'For', color: 'text-blue-400 bg-blue-500/10' };
    case 'breakcontinue':
      return { label: 'Break', color: 'text-orange-400 bg-orange-500/10' };
    case 'arrays':
      return { label: 'Array', color: 'text-teal-400 bg-teal-500/10' };
    case 'structures':
      return { label: 'Struct', color: 'text-emerald-400 bg-emerald-500/10' };
    case 'enums':
      return { label: 'Enum', color: 'text-amber-400 bg-amber-500/10' };
    case 'references':
      return { label: 'Ref', color: 'text-indigo-400 bg-indigo-500/10' };
    case 'pointers':
      return { label: 'Pointer', color: 'text-fuchsia-400 bg-fuchsia-500/10' };
    case 'memorymgmt':
      return { label: 'MemMgmt', color: 'text-cyan-400 bg-cyan-500/10' };
    case 'functions':
      return { label: 'Func', color: 'text-violet-400 bg-violet-500/10' };
    case 'funcparams':
      return { label: 'Param', color: 'text-emerald-400 bg-emerald-500/10' };
    case 'funcoverloading':
      return { label: 'Overload', color: 'text-amber-400 bg-amber-500/10' };
    case 'scope':
      return { label: 'Scope', color: 'text-blue-400 bg-blue-500/10' };
    case 'recursion':
      return { label: 'Recursion', color: 'text-rose-400 bg-rose-500/10' };
    case 'lambda':
      return { label: 'Lambda', color: 'text-purple-400 bg-purple-500/10' };
    case 'cppoop':
      return { label: 'OOP', color: 'text-teal-400 bg-teal-500/10' };
    case 'classesobjects':
      return { label: 'Class/Obj', color: 'text-indigo-400 bg-indigo-500/10' };
    case 'classmethods':
      return { label: 'Method', color: 'text-violet-400 bg-violet-500/10' };
    case 'constructors':
      return { label: 'Ctor', color: 'text-amber-400 bg-amber-500/10' };
    case 'accessspecifiers':
      return { label: 'Access', color: 'text-sky-400 bg-sky-500/10' };
    case 'encapsulation':
      return { label: 'Encap', color: 'text-emerald-400 bg-emerald-500/10' };
    case 'friendfunctions':
      return { label: 'Friend', color: 'text-pink-400 bg-pink-500/10' };
    case 'inheritance':
      return { label: 'Inherit', color: 'text-cyan-400 bg-cyan-500/10' };
    case 'polymorphism':
      return { label: 'Poly', color: 'text-fuchsia-400 bg-fuchsia-500/10' };
    case 'templates':
      return { label: 'Template', color: 'text-orange-400 bg-orange-500/10' };
    case 'files':
      return { label: 'File', color: 'text-lime-400 bg-lime-500/10' };
    case 'cppdate':
      return { label: 'Date', color: 'text-purple-400 bg-purple-500/10' };
    case 'cpperrors':
      return { label: 'Errors', color: 'text-rose-400 bg-rose-500/10' };
    case 'cppdebugging':
      return { label: 'Debug', color: 'text-amber-400 bg-amber-500/10' };
    case 'cppexceptions':
      return { label: 'Except', color: 'text-red-400 bg-red-500/10' };
    case 'inputvalidation':
      return { label: 'Valid', color: 'text-yellow-400 bg-yellow-500/10' };
    case 'datastructuresstl':
      return { label: 'DS/STL', color: 'text-indigo-400 bg-indigo-500/10' };
    case 'vectors':
      return { label: 'Vector', color: 'text-cyan-400 bg-cyan-500/10' };
    case 'cpplist':
      return { label: 'List', color: 'text-teal-400 bg-teal-500/10' };
    case 'stacks':
      return { label: 'Stack', color: 'text-violet-400 bg-violet-500/10' };
    case 'queues':
      return { label: 'Queue', color: 'text-sky-400 bg-sky-500/10' };
    case 'cppdeque':
      return { label: 'Deque', color: 'text-blue-400 bg-blue-500/10' };
    case 'sets':
      return { label: 'Set', color: 'text-emerald-400 bg-emerald-500/10' };
    case 'maps':
      return { label: 'Map', color: 'text-fuchsia-400 bg-fuchsia-500/10' };
    case 'iterators':
      return { label: 'Iter', color: 'text-purple-400 bg-purple-500/10' };
    case 'algorithms':
      return { label: 'Algo', color: 'text-lime-400 bg-lime-500/10' };
    default:
      return { label: 'DSA', color: 'text-slate-400 bg-slate-500/10' };
  }
};

const SidebarProblemItem: React.FC<{
  problem: Problem;
  isActive: boolean;
  isBookmarked: boolean;
  onSelect: (problem: Problem) => void;
  onToggleBookmark: (e: React.MouseEvent, id: string) => void;
}> = React.memo(({ problem, isActive, isBookmarked, onSelect, onToggleBookmark }) => {
  const isSolved = problem.status === 'solved';
  const book = getProblemBook(problem);
  const badge = getBookBadge(book);
  const diffColor = getDifficultyColor(problem.difficulty);

  return (
    <div
      onClick={() => onSelect(problem)}
      className={`group p-2.5 rounded-lg text-left transition flex items-start justify-between gap-2 cursor-pointer border ${
        isActive
          ? isSolved
            ? 'bg-emerald-950/60 border-emerald-400 shadow-md shadow-emerald-950/40'
            : 'bg-slate-800/90 border-emerald-500/40 shadow-sm'
          : isSolved
          ? 'bg-emerald-950/20 border-emerald-500/30 hover:bg-emerald-950/40'
          : 'bg-transparent hover:bg-slate-800/40 border-transparent hover:border-slate-800'
      }`}
    >
      <div className="flex items-start gap-2.5 min-w-0">
        <div className="mt-0.5 shrink-0">
          {isSolved ? (
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          ) : problem.status === 'in_progress' ? (
            <Clock className="w-3.5 h-3.5 text-amber-400" />
          ) : (
            <div className="w-3.5 h-3.5 rounded-full border border-slate-700 group-hover:border-slate-500" />
          )}
        </div>
        <div className="min-w-0">
          <div className="flex items-center gap-1.5">
            <span className={`text-xs truncate ${
              isSolved 
                ? 'font-bold text-emerald-300 group-hover:text-emerald-200' 
                : 'font-semibold text-slate-200 group-hover:text-white'
            }`}>
              {problem.title}
            </span>
          </div>
          <div className="flex items-center gap-1 text-[10px] text-slate-500 truncate mt-0.5">
            <span className={`px-1 py-0.2 rounded font-mono ${badge.color}`}>
              {badge.label}
            </span>
            <span>•</span>
            <span className="truncate">{problem.category}</span>
            {isSolved && (
              <>
                <span>•</span>
                <span className="text-emerald-400 font-semibold font-mono">Solved</span>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-1.5 shrink-0">
        <button
          onClick={(e) => onToggleBookmark(e, problem.id)}
          title={isBookmarked ? 'Remove Bookmark' : 'Star Problem'}
          className={`p-1 transition rounded ${
            isBookmarked 
              ? 'text-yellow-400 opacity-100' 
              : 'opacity-0 group-hover:opacity-100 text-slate-500 hover:text-yellow-400'
          }`}
        >
          <Star className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-yellow-400' : ''}`} />
        </button>

        <span
          className={`text-[10px] font-semibold px-1.5 py-0.5 rounded border ${
            isSolved 
              ? 'text-emerald-300 bg-emerald-500/15 border-emerald-500/40' 
              : diffColor
          }`}
        >
          {isSolved ? '✓ Solved' : problem.difficulty}
        </span>
      </div>
    </div>
  );
});

export const Sidebar: React.FC<{ onSelectProblem?: (p: Problem) => void }> = React.memo(({ onSelectProblem }) => {
  const { problems, activeProblem, setActiveProblem } = useProblem();
  const { user } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const deferredSearch = React.useDeferredValue(searchTerm);
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('All');
  const [selectedStatus, setSelectedStatus] = useState<'All' | 'Solved' | 'Bookmarked'>('All');
  const [selectedBook, setSelectedBook] = useState<'All' | ProblemBook>('All');
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(() => bookmarkService.getBookmarks(user?.id));
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [visibleLimit, setVisibleLimit] = useState(100);

  // Refresh bookmarks
  React.useEffect(() => {
    setBookmarkedIds(bookmarkService.getBookmarks(user?.id));
  }, [user?.id]);

  const handleToggleBookmark = React.useCallback((e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    bookmarkService.toggleBookmark(id, user?.id);
    setBookmarkedIds(bookmarkService.getBookmarks(user?.id));
  }, [user?.id]);
  // Reset limit when filter changes
  React.useEffect(() => {
    setVisibleLimit(100);
  }, [deferredSearch, selectedDifficulty, selectedStatus, selectedBook]);

  const bookCounts = React.useMemo(() => {
    const counts: Record<string, number> = {};
    for (let i = 0; i < problems.length; i++) {
      const b = getProblemBook(problems[i]);
      counts[b] = (counts[b] || 0) + 1;
    }
    return counts;
  }, [problems]);

  const filteredProblems = React.useMemo(() => {
    const s = deferredSearch.trim().toLowerCase();
    const bookmarkSet = new Set(bookmarkedIds);

    return problems.filter((p) => {
      const book = getProblemBook(p);
      const matchesBook = selectedBook === 'All' || book === selectedBook;
      if (!matchesBook) return false;

      const matchesDifficulty = selectedDifficulty === 'All' || p.difficulty === selectedDifficulty;
      if (!matchesDifficulty) return false;

      if (selectedStatus === 'Solved' && p.status !== 'solved') return false;
      if (selectedStatus === 'Bookmarked' && !bookmarkSet.has(p.id)) return false;

      if (!s) return true;

      return (
        p.title.toLowerCase().includes(s) ||
        p.tags.some((t) => t.toLowerCase().includes(s)) ||
        (p.category && p.category.toLowerCase().includes(s))
      );
    });
  }, [problems, selectedBook, deferredSearch, selectedDifficulty, selectedStatus, bookmarkedIds]);

  const displayedProblems = React.useMemo(() => {
    return filteredProblems.slice(0, visibleLimit);
  }, [filteredProblems, visibleLimit]);

  const handleSelect = React.useCallback((p: Problem) => {
    setActiveProblem(p);
    onSelectProblem?.(p);
  }, [setActiveProblem, onSelectProblem]);

  const solvedCount = React.useMemo(() => problems.filter((p) => p.status === 'solved').length, [problems]);

  if (isCollapsed) {
    return (
      <div className="w-12 bg-[#0d1322] border-r border-slate-800 flex flex-col items-center py-3 gap-4 select-none">
        <button
          onClick={() => setIsCollapsed(false)}
          className="p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition"
          title="Expand Problems Sidebar"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
        <div className="h-px w-6 bg-slate-800" />
        <Layers className="w-5 h-5 text-emerald-400" />
      </div>
    );
  }

  const MODULE_ITEMS: { id: ProblemBook; label: string; icon: string }[] = [
    { id: 'patterns', label: 'Patterns', icon: '🎨' },
    { id: 'loops', label: 'Loops', icon: '🔄' },
    { id: 'variables', label: 'Variables', icon: '📦' },
    { id: 'datatypes', label: 'DataTypes', icon: '🔢' },
    { id: 'userinput', label: 'Input', icon: '⌨️' },
    { id: 'operators', label: 'Operators', icon: '⚡' },
    { id: 'strings', label: 'Strings', icon: '🧵' },
    { id: 'math', label: 'Math', icon: '📐' },
    { id: 'booleans', label: 'Booleans', icon: '✅' },
    { id: 'ifelse', label: 'If...Else', icon: '🔀' },
    { id: 'switch', label: 'Switch', icon: '🎛️' },
    { id: 'whileloop', label: 'While', icon: '🔁' },
    { id: 'forloop', label: 'For', icon: '⏳' },
    { id: 'breakcontinue', label: 'Break/Cont', icon: '🛑' },
    { id: 'arrays', label: 'Arrays', icon: '📊' },
    { id: 'structures', label: 'Structs', icon: '🏗️' },
    { id: 'enums', label: 'Enums', icon: '🏷️' },
    { id: 'references', label: 'References', icon: '🔗' },
    { id: 'pointers', label: 'Pointers', icon: '👉' },
    { id: 'memorymgmt', label: 'MemoryMgmt', icon: '💾' },
    { id: 'functions', label: 'Functions', icon: '⚙️' },
    { id: 'funcparams', label: 'Parameters', icon: '📥' },
    { id: 'funcoverloading', label: 'Overloading', icon: '🧩' },
    { id: 'scope', label: 'Scope', icon: '🎯' },
    { id: 'recursion', label: 'Recursion', icon: '🌀' },
    { id: 'lambda', label: 'Lambda', icon: 'λ' },
    { id: 'cppoop', label: 'C++ OOP', icon: '🏛️' },
    { id: 'classesobjects', label: 'Class/Obj', icon: '📦' },
    { id: 'classmethods', label: 'Methods', icon: '🛠️' },
    { id: 'constructors', label: 'Constructors', icon: '🏗️' },
    { id: 'accessspecifiers', label: 'Access', icon: '🔒' },
    { id: 'encapsulation', label: 'Encap', icon: '🛡️' },
    { id: 'friendfunctions', label: 'Friends', icon: '🤝' },
    { id: 'inheritance', label: 'Inheritance', icon: '🧬' },
    { id: 'polymorphism', label: 'Polymorphism', icon: '🎭' },
    { id: 'templates', label: 'Templates', icon: '📑' },
    { id: 'files', label: 'Files', icon: '📁' },
    { id: 'cppdate', label: 'Date/Time', icon: '📅' },
    { id: 'cpperrors', label: 'Errors', icon: '⚠️' },
    { id: 'cppdebugging', label: 'Debugging', icon: '🐞' },
    { id: 'cppexceptions', label: 'Exceptions', icon: '🚨' },
    { id: 'inputvalidation', label: 'Validation', icon: '🛡️' },
    { id: 'datastructuresstl', label: 'DS & STL', icon: '📦' },
    { id: 'vectors', label: 'Vectors', icon: '📐' },
    { id: 'cpplist', label: 'List', icon: '📜' },
    { id: 'stacks', label: 'Stacks', icon: '🥞' },
    { id: 'queues', label: 'Queues', icon: '🚶' },
    { id: 'cppdeque', label: 'Deque', icon: '🔄' },
    { id: 'sets', label: 'Sets', icon: '🎯' },
    { id: 'maps', label: 'Maps', icon: '🗺️' },
    { id: 'iterators', label: 'Iterators', icon: '🏹' },
    { id: 'algorithms', label: 'Algorithms', icon: '⚡' },
  ];

  return (
    <aside className="w-80 max-w-full bg-[#0d1322] border-r border-slate-800 flex flex-col h-[calc(100dvh-3.5rem)] select-none">
      {/* Top Header */}
      <div className="p-3 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-emerald-400" />
          <h2 className="font-bold text-xs text-white uppercase tracking-wider">
            Problems ({(problems.length || 5200).toLocaleString()})
          </h2>
        </div>
        <div className="flex items-center gap-1.5 text-[11px] text-emerald-400 font-mono bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
          <span>{solvedCount} Solved</span>
        </div>
      </div>

      {/* Module / Book Selector */}
      <div className="p-2 border-b border-slate-800 bg-slate-900/60 max-h-36 overflow-y-auto">
        <div className="flex flex-wrap gap-1 text-[11px] font-medium">
          <button
            onClick={() => setSelectedBook('All')}
            className={`py-0.5 px-2 rounded-md transition border ${
              selectedBook === 'All'
                ? 'bg-emerald-500/20 text-emerald-300 font-bold border-emerald-500/40'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            All ({problems.length})
          </button>
          {MODULE_ITEMS.map((mod) => (
            <button
              key={mod.id}
              onClick={() => setSelectedBook(mod.id)}
              className={`py-0.5 px-2 rounded-md transition border ${
                selectedBook === mod.id
                  ? 'bg-emerald-500/20 text-emerald-300 font-bold border-emerald-500/40'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <span>{mod.icon} {mod.label} ({bookCounts[mod.id] || 0})</span>
            </button>
          ))}
        </div>
      </div>

      {/* Search & Filter */}
      <div className="p-2.5 space-y-2 border-b border-slate-800/80 bg-slate-900/40">
        <div className="relative">
          <Search className="w-3.5 h-3.5 absolute left-2.5 top-2.5 text-slate-500" />
          <input
            type="text"
            placeholder="Search #001, title, or tag..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-8 pr-3 py-1.5 rounded-md bg-slate-900 border border-slate-800 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-emerald-500"
          />
        </div>

        {/* Quick Status / Difficulty Row */}
        <div className="flex items-center justify-between gap-1 text-[11px]">
          <div className="flex items-center gap-1">
            {(['All', 'Solved', 'Bookmarked'] as const).map((st) => (
              <button
                key={st}
                onClick={() => setSelectedStatus(st)}
                className={`px-1.5 py-0.5 rounded transition ${
                  selectedStatus === st
                    ? 'bg-slate-800 text-emerald-400 font-semibold border border-emerald-500/30'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {st === 'Bookmarked' ? '⭐ Starred' : st}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-1">
            {['All', 'Easy', 'Medium', 'Hard'].map((diff) => (
              <button
                key={diff}
                onClick={() => setSelectedDifficulty(diff)}
                className={`px-1.5 py-0.5 rounded transition ${
                  selectedDifficulty === diff
                    ? 'bg-slate-800 text-emerald-400 font-semibold border border-emerald-500/30'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {diff[0]}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Problems List */}
      <div className="flex-1 overflow-y-auto p-2 space-y-1">
        {filteredProblems.length === 0 ? (
          <div className="p-6 text-center text-slate-500 space-y-3">
            <Layers className="w-8 h-8 mx-auto opacity-30 text-emerald-400" />
            <div className="text-xs">No questions found in this module.</div>
          </div>
        ) : (
          <>
            {displayedProblems.map((problem: Problem) => (
              <SidebarProblemItem
                key={problem.id}
                problem={problem}
                isActive={activeProblem?.id === problem.id}
                isBookmarked={bookmarkedIds.includes(problem.id)}
                onSelect={handleSelect}
                onToggleBookmark={handleToggleBookmark}
              />
            ))}

            {visibleLimit < filteredProblems.length && (
              <button
                onClick={() => setVisibleLimit((v) => v + 60)}
                className="w-full py-2 mt-1 text-center text-xs font-semibold text-emerald-400 bg-slate-900/80 hover:bg-slate-800/80 border border-slate-800 rounded-lg transition"
              >
                Load More ({filteredProblems.length - visibleLimit} remaining)
              </button>
            )}
          </>
        )}
      </div>

      {/* Footer info bar */}
      <div className="p-2.5 border-t border-slate-800 bg-slate-950/70 flex items-center justify-between text-[11px] text-slate-400 font-mono">
        <span>{(problems.length || 5200).toLocaleString()} Problem Bank</span>
        <span className="text-emerald-400 font-semibold">{Math.round((solvedCount / (problems.length || 1)) * 100)}% Complete</span>
      </div>
    </aside>
  );
});
