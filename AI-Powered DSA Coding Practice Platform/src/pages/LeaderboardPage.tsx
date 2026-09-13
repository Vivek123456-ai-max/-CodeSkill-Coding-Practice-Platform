import React, { useState, useEffect } from 'react';
import { leaderboardService, LeaderboardEntry } from '../lib/supabase';
import { 
  Trophy, 
  Crown, 
  Flame, 
  Medal, 
  Sparkles, 
  Search, 
  TrendingUp, 
  ShieldCheck, 
  Zap, 
  Award,
  User,
  Users,
  RefreshCw,
  Radio
} from 'lucide-react';

export const LeaderboardPage: React.FC = () => {
  const [data, setData] = useState<{
    topOne: LeaderboardEntry | null;
    podium: LeaderboardEntry[];
    rankings: LeaderboardEntry[];
    currentUserRank: LeaderboardEntry | null;
  }>({
    topOne: null,
    podium: [],
    rankings: [],
    currentUserRank: null,
  });

  const [filterTab, setFilterTab] = useState<'all' | 'weekly' | 'streak'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const fetchLeaderboard = (silent = false) => {
    if (!silent) setIsRefreshing(true);
    leaderboardService.getLeaderboard().then((res) => {
      setData(res);
      setLoading(false);
      setIsRefreshing(false);
    }).catch(() => {
      setLoading(false);
      setIsRefreshing(false);
    });
  };

  useEffect(() => {
    fetchLeaderboard(false);

    // Real-time Database Subscription for all registered users
    const channel = leaderboardService.subscribeToLeaderboard(() => {
      fetchLeaderboard(true);
    });

    // Auto-poll every 6 seconds to ensure always synced across clients
    const interval = setInterval(() => {
      fetchLeaderboard(true);
    }, 6000);

    return () => {
      channel.unsubscribe();
      clearInterval(interval);
    };
  }, []);

  const getAvatarEmoji = (avatar: string) => {
    switch (avatar) {
      case 'crown': return '👑';
      case 'wizard': return '🧙‍♂️';
      case 'ninja': return '🥷';
      case 'knight': return '🛡️';
      case 'hacker': return '💻';
      case 'coder': return '👨‍💻';
      case 'fire': return '🔥';
      case 'lightning': return '⚡';
      case 'robot': return '🤖';
      default: return '👤';
    }
  };

  // Filter rankings according to tab & search
  const displayedRankings = data.rankings
    .slice()
    .sort((a, b) => {
      if (filterTab === 'streak') {
        return b.current_streak - a.current_streak || b.total_xp - a.total_xp;
      }
      if (filterTab === 'weekly') {
        return (b.total_solved * 1.2 + b.current_streak * 10) - (a.total_solved * 1.2 + a.current_streak * 10);
      }
      return b.total_xp - a.total_xp;
    })
    .filter((entry) => {
      const q = searchQuery.toLowerCase();
      return (
        entry.name.toLowerCase().includes(q) ||
        entry.username.toLowerCase().includes(q) ||
        entry.institution.toLowerCase().includes(q)
      );
    });

  const topOne = data.topOne;

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto p-12 text-center text-slate-400">
        <div className="animate-spin w-8 h-8 border-2 border-emerald-500 border-t-transparent rounded-full mx-auto mb-3" />
        <span>Loading Global Leaderboard Standings...</span>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8 space-y-8 animate-fadeIn">
      {/* Top Banner Header */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#0d1322] via-[#16233d] to-[#0f172a] border border-amber-500/20 shadow-2xl relative overflow-hidden">
        <div className="absolute -top-16 -right-16 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono text-xs font-semibold">
              <Trophy className="w-3.5 h-3.5 fill-amber-400" />
              <span>DSA Platform Hall of Fame</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight flex items-center gap-2">
              Global Leaderboard & Rankings
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Compare your algorithmic solving rate, practice streaks, and earned XP with top developers worldwide.
            </p>
          </div>

          {/* Current User Quick Rank Card */}
          {data.currentUserRank && (
            <div className="bg-slate-900/90 border border-emerald-500/30 p-4 rounded-2xl flex items-center gap-4 shadow-xl">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-xl font-bold text-emerald-300">
                #{data.currentUserRank.rank}
              </div>
              <div>
                <div className="text-[11px] text-emerald-400 font-semibold uppercase tracking-wider">Your Position</div>
                <div className="text-base font-bold text-white flex items-center gap-1.5">
                  <span>{data.currentUserRank.name}</span>
                  <span className="text-xs px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono">YOU</span>
                </div>
                <div className="text-xs text-slate-400 font-mono flex items-center gap-2 mt-0.5">
                  <span className="text-amber-400">{data.currentUserRank.total_xp} XP</span>
                  <span>•</span>
                  <span>{data.currentUserRank.total_solved} Solved</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* TOP 1 CHAMPION SPOTLIGHT CARD */}
      {topOne && (
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-amber-500/15 via-slate-900/90 to-slate-950 border-2 border-amber-500/40 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4 opacity-10 pointer-events-none">
            <Crown className="w-72 h-72 text-amber-400" />
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 relative z-10">
            <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
              {/* Avatar with Gold Crown */}
              <div className="relative">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-tr from-amber-500 via-yellow-400 to-amber-200 p-1 shadow-lg shadow-amber-500/30 flex items-center justify-center">
                  <div className="w-full h-full bg-slate-950 rounded-xl flex items-center justify-center text-4xl">
                    {getAvatarEmoji(topOne.avatar)}
                  </div>
                </div>
                <div className="absolute -top-3.5 -right-2 bg-amber-400 text-slate-950 p-1.5 rounded-full shadow-md animate-bounce">
                  <Crown className="w-4 h-4 fill-slate-950 font-bold" />
                </div>
              </div>

              {/* Champion Details */}
              <div className="space-y-1">
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/40 text-xs font-bold uppercase tracking-wider flex items-center gap-1">
                    <Crown className="w-3 h-3 fill-amber-300" />
                    Rank #1 Champion
                  </span>
                  <span className="text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono">
                    {topOne.badge}
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  {topOne.name}
                </h2>
                <div className="text-xs text-slate-400 font-mono flex flex-wrap items-center justify-center sm:justify-start gap-2">
                  <span className="text-indigo-300 font-semibold">@{topOne.username}</span>
                  <span>•</span>
                  <span className="text-slate-300">{topOne.institution}</span>
                </div>
              </div>
            </div>

            {/* Champion Key Stats */}
            <div className="grid grid-cols-3 gap-3 w-full lg:w-auto">
              <div className="p-3 sm:p-4 rounded-2xl bg-slate-950/80 border border-amber-500/20 text-center">
                <div className="text-[11px] text-slate-400 font-medium">Total XP</div>
                <div className="text-xl sm:text-2xl font-black text-amber-400">{topOne.total_xp}</div>
              </div>
              <div className="p-3 sm:p-4 rounded-2xl bg-slate-950/80 border border-amber-500/20 text-center">
                <div className="text-[11px] text-slate-400 font-medium">Problems</div>
                <div className="text-xl sm:text-2xl font-black text-emerald-400">{topOne.total_solved}</div>
              </div>
              <div className="p-3 sm:p-4 rounded-2xl bg-slate-950/80 border border-amber-500/20 text-center">
                <div className="text-[11px] text-slate-400 font-medium">Streak</div>
                <div className="text-xl sm:text-2xl font-black text-rose-400 flex items-center justify-center gap-0.5">
                  <Flame className="w-4 h-4 fill-rose-400" />
                  <span>{topOne.current_streak}d</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TOP 3 PODIUM CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {data.podium.map((user, idx) => {
          const isGold = idx === 0;
          const isSilver = idx === 1;
          const isBronze = idx === 2;

          const borderColor = isGold 
            ? 'border-amber-400/50 bg-gradient-to-b from-amber-500/10 to-slate-900' 
            : isSilver 
            ? 'border-slate-400/40 bg-gradient-to-b from-slate-400/10 to-slate-900' 
            : 'border-amber-700/40 bg-gradient-to-b from-amber-700/10 to-slate-900';

          const medalIcon = isGold ? '🥇' : isSilver ? '🥈' : '🥉';
          const medalLabel = isGold ? '1st Place' : isSilver ? '2nd Place' : '3rd Place';

          return (
            <div
              key={user.id}
              className={`p-5 rounded-2xl border ${borderColor} flex flex-col justify-between gap-4 shadow-xl relative overflow-hidden`}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-2xl shadow-inner">
                    {getAvatarEmoji(user.avatar)}
                  </div>
                  <div>
                    <div className="text-base font-bold text-white truncate max-w-[140px]">{user.name}</div>
                    <div className="text-[11px] text-slate-400 font-mono">@{user.username}</div>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-2xl">{medalIcon}</span>
                  <div className="text-[10px] uppercase font-bold text-slate-400">{medalLabel}</div>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
                <div>
                  <span className="text-slate-400 block text-[10px]">XP Points</span>
                  <span className="text-amber-400 font-bold text-sm">{user.total_xp}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px]">Solved</span>
                  <span className="text-emerald-400 font-bold text-sm">{user.total_solved}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px]">Streak</span>
                  <span className="text-rose-400 font-bold text-sm flex items-center gap-0.5">
                    <Flame className="w-3 h-3 fill-rose-400" />
                    {user.current_streak}d
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Filter and Search Bar */}
      <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Filter Tabs */}
        <div className="flex items-center gap-1.5 bg-slate-950 p-1 rounded-xl border border-slate-800 w-full sm:w-auto">
          <button
            onClick={() => setFilterTab('all')}
            className={`flex-1 sm:flex-none px-3.5 py-1.5 rounded-lg text-xs font-bold transition ${
              filterTab === 'all'
                ? 'bg-slate-800 text-emerald-400 shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            All-Time XP
          </button>
          <button
            onClick={() => setFilterTab('weekly')}
            className={`flex-1 sm:flex-none px-3.5 py-1.5 rounded-lg text-xs font-bold transition ${
              filterTab === 'weekly'
                ? 'bg-slate-800 text-emerald-400 shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Weekly Sprint
          </button>
          <button
            onClick={() => setFilterTab('streak')}
            className={`flex-1 sm:flex-none px-3.5 py-1.5 rounded-lg text-xs font-bold transition flex items-center justify-center gap-1 ${
              filterTab === 'streak'
                ? 'bg-slate-800 text-amber-400 shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Flame className="w-3.5 h-3.5 fill-amber-400/20 text-amber-400" />
            Streak Leaders
          </button>
        </div>

        {/* Search Box & Refresh */}
        <div className="flex items-center gap-2.5 w-full sm:w-auto">
          <div className="relative flex-1 sm:w-64">
            <Search className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search coder or university..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 bg-slate-950 border border-slate-700 rounded-xl text-xs text-slate-200 focus:outline-none focus:border-emerald-500 placeholder:text-slate-500"
            />
          </div>

          <button
            onClick={() => fetchLeaderboard(false)}
            title="Refresh Live Leaderboard"
            className="p-2 bg-slate-950 hover:bg-slate-800 border border-slate-700 hover:border-emerald-500/50 rounded-xl text-slate-300 hover:text-emerald-400 transition flex items-center justify-center shrink-0 group shadow-sm"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin text-emerald-400' : 'group-hover:rotate-180 transition-transform duration-500'}`} />
          </button>

          <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-[10px] text-emerald-400 font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Live DB</span>
          </div>
        </div>
      </div>

      {/* FULL LEADERBOARD TABLE */}
      <div className="rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-950/80 border-b border-slate-800 text-slate-400 font-mono">
              <tr>
                <th className="py-3.5 px-4 font-semibold w-16 text-center">Rank</th>
                <th className="py-3.5 px-4 font-semibold">Developer</th>
                <th className="py-3.5 px-4 font-semibold hidden sm:table-cell">Affiliation</th>
                <th className="py-3.5 px-4 font-semibold text-center">Tier</th>
                <th className="py-3.5 px-4 font-semibold text-center">Solved (E/M/H)</th>
                <th className="py-3.5 px-4 font-semibold text-center">Streak</th>
                <th className="py-3.5 px-4 font-semibold text-right">Total XP</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {displayedRankings.map((user) => {
                const isYou = user.isCurrentUser;
                const isTop1 = user.rank === 1;
                const isTop3 = user.rank <= 3;

                return (
                  <tr
                    key={user.id}
                    className={`transition ${
                      isYou
                        ? 'bg-emerald-500/10 hover:bg-emerald-500/15 border-l-4 border-l-emerald-400 font-medium'
                        : isTop1
                        ? 'bg-amber-500/5 hover:bg-slate-800/40'
                        : 'hover:bg-slate-800/30'
                    }`}
                  >
                    {/* Rank */}
                    <td className="py-3.5 px-4 text-center font-bold">
                      {isTop1 ? (
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-amber-400 text-slate-950 font-black text-xs">
                          1
                        </span>
                      ) : user.rank === 2 ? (
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-slate-300 text-slate-950 font-bold text-xs">
                          2
                        </span>
                      ) : user.rank === 3 ? (
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-amber-700 text-white font-bold text-xs">
                          3
                        </span>
                      ) : (
                        <span className="text-slate-400 font-mono">#{user.rank}</span>
                      )}
                    </td>

                    {/* Developer Name & Avatar */}
                    <td className="py-3.5 px-4">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center text-sm shrink-0">
                          {getAvatarEmoji(user.avatar)}
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-1.5 truncate">
                            <span className={`font-semibold truncate ${isYou ? 'text-emerald-300 font-bold' : 'text-slate-200'}`}>
                              {user.name}
                            </span>
                            {isYou && (
                              <span className="text-[10px] px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 font-mono font-bold">
                                YOU
                              </span>
                            )}
                          </div>
                          <div className="text-[10px] text-slate-500 font-mono truncate">@{user.username}</div>
                        </div>
                      </div>
                    </td>

                    {/* Affiliation */}
                    <td className="py-3.5 px-4 hidden sm:table-cell text-slate-400 truncate max-w-[160px]">
                      {user.institution}
                    </td>

                    {/* Tier Badge */}
                    <td className="py-3.5 px-4 text-center">
                      <span className="text-[11px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700 font-mono">
                        {user.badge}
                      </span>
                    </td>

                    {/* Solved Breakdown */}
                    <td className="py-3.5 px-4 text-center font-mono text-[11px]">
                      <span className="text-slate-200 font-bold">{user.total_solved}</span>{' '}
                      <span className="text-slate-500">
                        (<span className="text-emerald-400">{user.easy_solved}</span>/
                        <span className="text-amber-400">{user.medium_solved}</span>/
                        <span className="text-rose-400">{user.hard_solved}</span>)
                      </span>
                    </td>

                    {/* Streak */}
                    <td className="py-3.5 px-4 text-center">
                      <span className="inline-flex items-center gap-1 text-amber-400 font-mono font-semibold text-xs">
                        <Flame className="w-3.5 h-3.5 fill-amber-400/20" />
                        {user.current_streak}d
                      </span>
                    </td>

                    {/* Total XP */}
                    <td className="py-3.5 px-4 text-right font-mono font-bold text-amber-400 text-sm">
                      {user.total_xp.toLocaleString()} XP
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
