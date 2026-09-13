import React, { useEffect, useState } from 'react';
import { useProblem } from '../../context/ProblemContext';
import { useAuth } from '../../context/AuthContext';
import { 
  Trophy, 
  Flame, 
  Target, 
  CheckCircle2, 
  Clock, 
  Code2, 
  TrendingUp, 
  Award
} from 'lucide-react';
import { userStatsService } from '../../lib/supabase';

export const ProgressStats: React.FC = () => {
  const { problems } = useProblem();
  const { user } = useAuth();
  const [stats, setStats] = useState({
    total_solved: 0,
    easy_solved: 0,
    medium_solved: 0,
    hard_solved: 0,
    current_streak: 0,
    last_active_date: ''
  });

  useEffect(() => {
    const updateData = () => {
      userStatsService.getStats(user?.id || null).then(setStats);
    };
    updateData();
    window.addEventListener('codetutor_status_synced', updateData);
    return () => window.removeEventListener('codetutor_status_synced', updateData);
  }, [user?.id]);

  const {
    totalProblems,
    easyTotal,
    mediumTotal,
    hardTotal,
    easySolved,
    mediumSolved,
    hardSolved,
    totalSolved,
  } = React.useMemo(() => {
    let easyT = 0;
    let medT = 0;
    let hardT = 0;
    let easyS = 0;
    let medS = 0;
    let hardS = 0;

    for (let i = 0; i < problems.length; i++) {
      const p = problems[i];
      const isSolved = p.status === 'solved';
      if (p.difficulty === 'Easy') {
        easyT++;
        if (isSolved) easyS++;
      } else if (p.difficulty === 'Medium') {
        medT++;
        if (isSolved) medS++;
      } else if (p.difficulty === 'Hard') {
        hardT++;
        if (isSolved) hardS++;
      }
    }

    return {
      totalProblems: problems.length || 1,
      easyTotal: easyT || 1,
      mediumTotal: medT || 1,
      hardTotal: hardT || 1,
      easySolved: easyS,
      mediumSolved: medS,
      hardSolved: hardS,
      totalSolved: easyS + medS + hardS,
    };
  }, [problems]);

  return (
    <div className="space-y-6">
      {/* Top Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Total Solved */}
        <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
            <Trophy className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xs text-slate-400 font-medium">Problems Solved</div>
            <div className="text-2xl font-bold text-white flex items-baseline gap-1.5">
              <span>{totalSolved}</span>
              <span className="text-xs font-normal text-slate-500">/ {totalProblems}</span>
            </div>
          </div>
        </div>

        {/* Current Streak */}
        <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
            <Flame className="w-6 h-6 fill-amber-400/20" />
          </div>
          <div>
            <div className="text-xs text-slate-400 font-medium">Practice Streak</div>
            <div className="text-2xl font-bold text-white flex items-baseline gap-1">
              <span>{stats.current_streak}</span>
              <span className="text-xs font-normal text-amber-400">Days 🔥</span>
            </div>
          </div>
        </div>

        {/* Completion Rate */}
        <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
            <Target className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xs text-slate-400 font-medium">Completion Rate</div>
            <div className="text-2xl font-bold text-white">
              {Math.round((totalSolved / totalProblems) * 100)}%
            </div>
          </div>
        </div>

        {/* Level Rank */}
        <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xs text-slate-400 font-medium">Mastery Rank</div>
            <div className="text-lg font-bold text-teal-300">
              {totalSolved >= 10 ? 'DSA Knight 🛡️' : totalSolved >= 3 ? 'Aspirant 🚀' : 'Novice Coder 🌱'}
            </div>
          </div>
        </div>
      </div>

      {/* Difficulty Breakdown Progress Bars */}
      <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-white flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-emerald-400" />
            Difficulty Breakdown
          </h3>
          <span className="text-xs text-slate-400">Progress across levels</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Easy */}
          <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-emerald-400">Easy</span>
              <span className="font-mono text-slate-300">{easySolved} / {easyTotal}</span>
            </div>
            <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-emerald-400 rounded-full transition-all duration-500"
                style={{ width: `${Math.min(100, (easySolved / easyTotal) * 100)}%` }}
              />
            </div>
          </div>

          {/* Medium */}
          <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-amber-400">Medium</span>
              <span className="font-mono text-slate-300">{mediumSolved} / {mediumTotal}</span>
            </div>
            <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-amber-400 rounded-full transition-all duration-500"
                style={{ width: `${Math.min(100, (mediumSolved / mediumTotal) * 100)}%` }}
              />
            </div>
          </div>

          {/* Hard */}
          <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-rose-400">Hard</span>
              <span className="font-mono text-slate-300">{hardSolved} / {hardTotal}</span>
            </div>
            <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-rose-400 rounded-full transition-all duration-500"
                style={{ width: `${Math.min(100, (hardSolved / hardTotal) * 100)}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
