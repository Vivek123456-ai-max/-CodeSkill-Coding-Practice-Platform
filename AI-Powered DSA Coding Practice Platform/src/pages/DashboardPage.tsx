import React, { useState, useEffect } from 'react';
import { ProgressStats } from '../components/dashboard/ProgressStats';
import { TopicHeatmap } from '../components/dashboard/TopicHeatmap';
import { useProblem } from '../context/ProblemContext';
import { useAuth } from '../context/AuthContext';
import { 
  BarChart3, 
  History, 
  CheckCircle2, 
  XCircle, 
  Clock, 
  Sparkles, 
  Calendar, 
  Flame, 
  Code,
  FileText
} from 'lucide-react';
import { CodeSubmission, Problem } from '../types/problem';
import { submissionService } from '../lib/supabase';

interface DashboardPageProps {
  onSelectProblem: (problem: Problem) => void;
  onOpenWeeklyReport?: () => void;
}

export const DashboardPage: React.FC<DashboardPageProps> = ({ onSelectProblem, onOpenWeeklyReport }) => {
  const { problems } = useProblem();
  const { user, isGuest } = useAuth();
  const [recentSubmissions, setRecentSubmissions] = useState<CodeSubmission[]>([]);

  useEffect(() => {
    const subs = submissionService.getAllSubmissions(user?.id || null);
    setRecentSubmissions(subs);
  }, [user?.id]);

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 space-y-8">
      {/* Header Banner */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-[#0f172a] via-[#13233a] to-[#0f172a] border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-xl">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>AI-Powered DSA Learning Engine</span>
          </div>
          <h1 className="text-2xl font-bold text-white tracking-tight">
            Welcome, {user?.email?.split('@')[0] || (isGuest ? 'Guest Learner' : 'Developer')}
          </h1>
          <p className="text-xs sm:text-sm text-slate-400">
            Track your coding milestones, difficulty distribution, and algorithmic topic mastery.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {onOpenWeeklyReport && (
            <button
              onClick={onOpenWeeklyReport}
              className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 text-xs font-bold flex items-center gap-2 transition shadow-lg shadow-emerald-500/20 cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>Download Weekly Report</span>
            </button>
          )}

          <div className="flex items-center gap-3 bg-slate-900/90 border border-slate-800 p-3 rounded-xl">
            <Calendar className="w-4 h-4 text-slate-400" />
            <div className="text-xs text-slate-300">
              <div>Daily Goal</div>
              <div className="font-bold text-emerald-400">2 Problems / Day</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main KPI Stats */}
      <ProgressStats />

      {/* Topic Heatmap */}
      <TopicHeatmap />

      {/* Recent Submissions History */}
      <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <History className="w-4 h-4 text-emerald-400" />
            <h3 className="text-sm font-bold text-white">Recent Activity & Submissions</h3>
          </div>
          <span className="text-xs text-slate-400">{recentSubmissions.length} recorded</span>
        </div>

        {recentSubmissions.length === 0 ? (
          <div className="p-8 text-center text-slate-500 text-xs">
            No code submissions recorded yet. Run or submit a problem in the workspace!
          </div>
        ) : (
          <div className="divide-y divide-slate-800/80">
            {recentSubmissions.slice(0, 10).map((sub) => {
              const matchedProblem = problems.find((p) => p.id === sub.problem_id);
              const isAccepted = sub.status === 'accepted';

              return (
                <div
                  key={sub.id}
                  onClick={() => matchedProblem && onSelectProblem(matchedProblem)}
                  className="py-3 flex items-center justify-between gap-4 hover:bg-slate-800/40 px-2 rounded-lg transition cursor-pointer"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div>
                      {isAccepted ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <Clock className="w-4 h-4 text-amber-400" />
                      )}
                    </div>

                    <div className="min-w-0">
                      <div className="text-xs font-semibold text-slate-200 truncate">
                        {matchedProblem ? matchedProblem.title : 'Problem Submission'}
                      </div>
                      <div className="text-[11px] text-slate-500 flex items-center gap-2 mt-0.5">
                        <span className="uppercase font-mono text-indigo-300">{sub.language}</span>
                        <span>•</span>
                        <span>{new Date(sub.created_at).toLocaleTimeString()}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <span
                      className={`text-[11px] px-2 py-0.5 rounded font-mono ${
                        isAccepted
                          ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                          : 'bg-slate-800 text-slate-400 border border-slate-700'
                      }`}
                    >
                      {sub.status}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
