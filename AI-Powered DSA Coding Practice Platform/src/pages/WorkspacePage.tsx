import React, { useState } from 'react';
import { useProblem } from '../context/ProblemContext';
import { Sidebar } from '../components/layout/Sidebar';
import { ProblemStatement } from '../components/problem/ProblemStatement';
import { AITutorPanel } from '../components/ai/AITutorPanel';
import { MonacoCodeEditor } from '../components/editor/MonacoCodeEditor';
import { ExecutionConsole } from '../components/editor/ExecutionConsole';
import { BookOpen, Sparkles, Code2, Terminal, ChevronRight, Layers, Shuffle, Zap, X } from 'lucide-react';
import { userStatsService } from '../lib/supabase';

interface WorkspacePageProps {
  onOpenAuthModal?: () => void;
}

export const WorkspacePage: React.FC<WorkspacePageProps> = ({ onOpenAuthModal }) => {
  const { 
    activeTab, 
    setActiveTab, 
    runCode, 
    submitCode, 
    activeProblem, 
    isRevisionMode, 
    setIsRevisionMode,
    problems,
    setActiveProblem 
  } = useProblem();

  const [mobileActiveView, setMobileActiveView] = useState<'problem' | 'ai_tutor' | 'editor' | 'console'>('editor');
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const handleRun = () => {
    runCode();
    setMobileActiveView('console');
  };

  const handleSubmit = () => {
    submitCode();
    setMobileActiveView('console');
  };

  const handleNextRandomRevision = async () => {
    const stats = await userStatsService.getStats();
    const completedSet = new Set(stats.revision_completed_ids || []);
    const uncompleted = problems.filter((p) => !completedSet.has(p.id) && p.id !== activeProblem?.id);
    const pool = uncompleted.length > 0 ? uncompleted : problems.filter((p) => p.id !== activeProblem?.id);
    
    if (pool.length > 0) {
      const randomP = pool[Math.floor(Math.random() * pool.length)];
      setActiveProblem(randomP);
      setActiveTab('problem');
    }
  };

  return (
    <div className="flex flex-col h-[calc(100dvh-3.5rem)] overflow-hidden bg-[#0b0f19]">
      {/* Revision Mode Floating Top Banner */}
      {isRevisionMode && (
        <div className="bg-gradient-to-r from-amber-500/15 via-indigo-500/15 to-emerald-500/15 border-b border-amber-500/30 px-3 py-1.5 flex items-center justify-between text-xs shrink-0 animate-fadeIn">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-mono font-bold flex items-center gap-1 border border-amber-500/30">
              <Zap className="w-3 h-3 fill-amber-300" />
              REVISION MODE
            </span>
            <span className="text-slate-300 hidden sm:inline">
              Solve this problem to claim <strong className="text-amber-400 font-bold">+50 Bonus XP</strong> & progress your revision deck!
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleNextRandomRevision}
              className="px-2.5 py-1 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-[11px] flex items-center gap-1 shadow-sm transition"
            >
              <Shuffle className="w-3 h-3" />
              <span>Next Random</span>
            </button>
            <button
              onClick={() => setIsRevisionMode(false)}
              title="Exit Revision Mode"
              className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      <div className="flex flex-col md:flex-row flex-1 overflow-hidden">
        {/* Desktop Sidebar */}
        <div className="hidden md:block">
          <Sidebar />
        </div>

        {/* Mobile Top View Switcher & Problem Drawer Trigger */}
        <div className="md:hidden flex items-center justify-between p-2 bg-slate-900/95 border-b border-slate-800 shrink-0 text-xs gap-2">
          <button
            onClick={() => setMobileSidebarOpen(true)}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-slate-800 text-slate-200 font-semibold border border-slate-700 truncate max-w-[130px] sm:max-w-[200px]"
            title="Browse all 5,200 problems"
          >
            <Layers className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span className="truncate">{activeProblem ? activeProblem.title : 'Choose Problem'}</span>
          </button>

          <div className="flex items-center gap-0.5 bg-slate-950 p-1 rounded-xl border border-slate-800 overflow-x-auto no-scrollbar">
            <button
              onClick={() => setMobileActiveView('problem')}
              className={`px-2.5 py-1 rounded-lg font-semibold transition flex items-center gap-1 text-[11px] ${
                mobileActiveView === 'problem' ? 'bg-slate-800 text-emerald-400 font-bold shadow-sm' : 'text-slate-400'
              }`}
            >
              <BookOpen className="w-3 h-3" />
              <span>Problem</span>
            </button>
            <button
              onClick={() => setMobileActiveView('ai_tutor')}
              className={`px-2.5 py-1 rounded-lg font-semibold transition flex items-center gap-1 text-[11px] ${
                mobileActiveView === 'ai_tutor' ? 'bg-slate-800 text-emerald-400 font-bold shadow-sm' : 'text-slate-400'
              }`}
            >
              <Sparkles className="w-3 h-3 text-emerald-400" />
              <span>AI</span>
            </button>
            <button
              onClick={() => setMobileActiveView('editor')}
              className={`px-2.5 py-1 rounded-lg font-semibold transition flex items-center gap-1 text-[11px] ${
                mobileActiveView === 'editor' ? 'bg-slate-800 text-emerald-400 font-bold shadow-sm' : 'text-slate-400'
              }`}
            >
              <Code2 className="w-3 h-3" />
              <span>Code</span>
            </button>
            <button
              onClick={() => setMobileActiveView('console')}
              className={`px-2.5 py-1 rounded-lg font-semibold transition flex items-center gap-1 text-[11px] ${
                mobileActiveView === 'console' ? 'bg-slate-800 text-emerald-400 font-bold shadow-sm' : 'text-slate-400'
              }`}
            >
              <Terminal className="w-3 h-3" />
              <span>Console</span>
            </button>
          </div>
        </div>

        {/* Mobile Sidebar Overlay Drawer */}
        {mobileSidebarOpen && (
          <div className="fixed inset-0 z-50 flex md:hidden bg-black/75 backdrop-blur-sm animate-fadeIn">
            <div className="w-80 max-w-[85vw] h-full bg-[#0d1322] shadow-2xl flex flex-col">
              <div className="p-3 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-emerald-400" />
                  <span className="font-bold text-xs text-white">Problem Repository</span>
                </div>
                <button
                  onClick={() => setMobileSidebarOpen(false)}
                  className="text-xs text-slate-400 hover:text-white px-2 py-1 rounded bg-slate-800"
                >
                  Close
                </button>
              </div>
              <div className="flex-1 overflow-y-auto">
                <Sidebar onSelectProblem={() => setMobileSidebarOpen(false)} />
              </div>
            </div>
            <div className="flex-1" onClick={() => setMobileSidebarOpen(false)} />
          </div>
        )}

        {/* Mobile Content View */}
        <div className="flex-1 flex flex-col md:hidden overflow-hidden">
          {mobileActiveView === 'problem' && (
            <div className="flex-1 overflow-y-auto">
              <ProblemStatement />
            </div>
          )}
          {mobileActiveView === 'ai_tutor' && (
            <div className="flex-1 overflow-hidden">
              <AITutorPanel />
            </div>
          )}
          {mobileActiveView === 'editor' && (
            <div className="flex-1 overflow-hidden">
              <MonacoCodeEditor 
                onRun={handleRun} 
                onSubmit={handleSubmit} 
                onOpenAuthModal={onOpenAuthModal}
              />
            </div>
          )}
          {mobileActiveView === 'console' && (
            <div className="flex-1 overflow-hidden flex flex-col">
              <ExecutionConsole />
            </div>
          )}
        </div>

        {/* Desktop Main Split Layout (45% Info & AI | 55% Code & Console) */}
        <div className="hidden md:flex flex-1 flex-row overflow-hidden">
          {/* Left Side: Problem Statement / AI Tutor */}
          <div className="w-[45%] flex flex-col border-r border-slate-800 bg-[#0e1424] h-full overflow-hidden">
            {/* Tab Selector */}
            <div className="h-11 border-b border-slate-800 bg-slate-900/90 px-3 flex items-center gap-1 select-none shrink-0">
              <button
                onClick={() => setActiveTab('problem')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition ${
                  activeTab === 'problem'
                    ? 'bg-slate-800 text-emerald-400 border border-slate-700/80 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                Description
              </button>

              <button
                onClick={() => setActiveTab('ai_tutor')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition ${
                  activeTab === 'ai_tutor'
                    ? 'bg-slate-800 text-emerald-400 border border-emerald-500/30 shadow-sm'
                    : 'text-slate-400 hover:text-emerald-300 hover:bg-slate-800/40'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                AI Step-by-Step Tutor
              </button>
            </div>

            {/* Tab Content */}
            <div className="flex-1 overflow-hidden">
              {activeTab === 'problem' ? (
                <ProblemStatement />
              ) : (
                <AITutorPanel />
              )}
            </div>
          </div>

          {/* Right Side: Monaco Code Editor + Test Execution Console */}
          <div className="w-[55%] flex flex-col h-full overflow-hidden">
            <div className="flex-1 overflow-hidden">
              <MonacoCodeEditor 
                onRun={handleRun} 
                onSubmit={handleSubmit} 
                onOpenAuthModal={onOpenAuthModal}
              />
            </div>
            <ExecutionConsole />
          </div>
        </div>
      </div>
    </div>
  );
};
