import React, { useState, useEffect } from 'react';
import { useProblem } from '../../context/ProblemContext';
import { useAuth } from '../../context/AuthContext';
import { 
  Sparkles, 
  CheckCircle2, 
  Tag, 
  Layers, 
  Code2, 
  Info,
  Lightbulb,
  Star
} from 'lucide-react';
import { Difficulty } from '../../types/problem';
import { bookmarkService } from '../../lib/supabase';

export const ProblemStatement: React.FC = () => {
  const { activeProblem, askAITutor, isGeneratingAI } = useProblem();
  const { user } = useAuth();
  const [isBookmarked, setIsBookmarked] = useState<boolean>(false);

  useEffect(() => {
    if (activeProblem) {
      setIsBookmarked(bookmarkService.isBookmarked(activeProblem.id, user?.id));
    }
  }, [activeProblem?.id, user?.id]);

  const handleToggleBookmark = () => {
    if (!activeProblem) return;
    const next = bookmarkService.toggleBookmark(activeProblem.id, user?.id);
    setIsBookmarked(next);
  };

  if (!activeProblem) {
    return (
      <div className="p-8 h-full flex flex-col items-center justify-center text-center space-y-4 text-slate-400">
        <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
          <Layers className="w-7 h-7" />
        </div>
        <div className="max-w-xs space-y-1">
          <h3 className="text-sm font-bold text-white">No Question Selected</h3>
          <p className="text-xs text-slate-400">
            Please choose a question from the sidebar or Problem Bank to start coding.
          </p>
        </div>
      </div>
    );
  }

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

  return (
    <div className="p-5 overflow-y-auto h-full space-y-6 text-slate-300 select-text">
      {/* Title & Metadata Header */}
      <div className="space-y-3 pb-4 border-b border-slate-800">
        <div className="flex items-start justify-between gap-4">
          <h1 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
            <span>{activeProblem.title}</span>
            <button
              onClick={handleToggleBookmark}
              title={isBookmarked ? 'Remove Bookmark' : 'Star/Bookmark this question'}
              className={`p-1.5 rounded-lg transition ${
                isBookmarked 
                  ? 'text-yellow-400 bg-yellow-400/10' 
                  : 'text-slate-500 hover:text-yellow-400 hover:bg-slate-800'
              }`}
            >
              <Star className={`w-4 h-4 ${isBookmarked ? 'fill-yellow-400' : ''}`} />
            </button>
          </h1>
          <span
            className={`text-xs font-semibold px-2.5 py-1 rounded-full border shrink-0 ${getDifficultyBadge(
              activeProblem.difficulty
            )}`}
          >
            {activeProblem.difficulty}
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="flex items-center gap-1 text-slate-400 bg-slate-800/80 px-2 py-0.5 rounded border border-slate-700/60">
            <Layers className="w-3 h-3 text-emerald-400" />
            {activeProblem.category}
          </span>

          {activeProblem.tags?.map((tag) => (
            <span
              key={tag}
              className="flex items-center gap-1 text-slate-400 bg-slate-800/50 px-2 py-0.5 rounded border border-slate-800"
            >
              <Tag className="w-2.5 h-2.5 text-slate-500" />
              {tag}
            </span>
          ))}

          {activeProblem.status === 'solved' && (
            <span className="flex items-center gap-1 text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 font-medium">
              <CheckCircle2 className="w-3 h-3" />
              Solved
            </span>
          )}
        </div>
      </div>

      {/* Solved Status & Quick Code Loader Banner */}
      {activeProblem.status === 'solved' && (
        <div className="p-3.5 rounded-xl bg-emerald-950/30 border border-emerald-500/40 flex items-center justify-between gap-3 shadow-md">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            </div>
            <div>
              <div className="text-xs font-bold text-emerald-300">You have solved this question!</div>
              <div className="text-[11px] text-slate-400">Your accepted solution is loaded in the editor.</div>
            </div>
          </div>
          <button
            onClick={askAITutor}
            disabled={isGeneratingAI}
            className="px-3 py-1.5 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/40 font-bold text-xs flex items-center gap-1.5 transition shrink-0"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>AI Solution</span>
          </button>
        </div>
      )}

      {/* AI Tutor Callout Banner (when not solved) */}
      {activeProblem.status !== 'solved' && (
        <div className="p-3.5 rounded-xl bg-gradient-to-r from-emerald-950/40 via-slate-900 to-indigo-950/40 border border-emerald-500/30 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0">
              <Lightbulb className="w-4 h-4 text-emerald-400" />
            </div>
            <div>
              <div className="text-xs font-semibold text-white">Stuck on the intuition?</div>
              <div className="text-[11px] text-slate-400">Get a step-by-step interactive breakdown from AI.</div>
            </div>
          </div>
          <button
            onClick={askAITutor}
            disabled={isGeneratingAI}
            className="px-3 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition shadow-sm shrink-0 disabled:opacity-60"
          >
            <Sparkles className="w-3.5 h-3.5" />
            {isGeneratingAI ? 'Solving...' : 'Ask AI Tutor'}
          </button>
        </div>
      )}

      {/* Description Content */}
      <div className="prose prose-invert prose-sm max-w-none space-y-4 text-slate-300 leading-relaxed">
        <div className="whitespace-pre-wrap font-sans text-sm">{activeProblem.description}</div>
      </div>

      {/* Sample Test Cases */}
      {activeProblem.sample_test_cases && activeProblem.sample_test_cases.length > 0 && (
        <div className="space-y-3 pt-2">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-200 uppercase tracking-wider">
            <Code2 className="w-3.5 h-3.5 text-emerald-400" />
            Sample Test Cases
          </div>

          <div className="space-y-2.5">
            {activeProblem.sample_test_cases.map((tc, index) => (
              <div
                key={index}
                className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 space-y-1.5 text-xs font-mono"
              >
                <div className="text-slate-400 font-sans font-semibold text-[11px]">
                  Example {index + 1}:
                </div>
                <div className="text-slate-300">
                  <span className="text-slate-500 font-sans">Input: </span>
                  <span className="text-amber-300">{tc.input}</span>
                </div>
                <div className="text-slate-300">
                  <span className="text-slate-500 font-sans">Output: </span>
                  <span className="text-emerald-300">{tc.output}</span>
                </div>
                {tc.explanation && (
                  <div className="text-slate-400 text-[11px] font-sans pt-1 border-t border-slate-800/60">
                    <span className="text-slate-500">Explanation: </span>
                    {tc.explanation}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Constraints & Source Notes */}
      <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-500">
        <span className="flex items-center gap-1">
          <Info className="w-3 h-3" />
          Source: {activeProblem.source === 'pdf_upload' ? 'Extracted from PDF' : 'Custom Question'}
        </span>
        <span>ID: {activeProblem.id.slice(0, 8)}</span>
      </div>
    </div>
  );
};
