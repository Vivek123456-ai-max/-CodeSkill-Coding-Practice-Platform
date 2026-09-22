import React, { useState, useEffect } from 'react';
import { 
  Code2, 
  Flame, 
  CheckCircle2, 
  BookOpen, 
  BarChart3, 
  LogOut, 
  User as UserIcon,
  Cpu,
  Menu,
  X,
  Shuffle,
  Crown,
  FileText,
  Swords,
  ShoppingBag,
  Sparkles
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useProblem } from '../../context/ProblemContext';
import { userStatsService, userProfileService, UserProfile, UserStats } from '../../lib/supabase';

export type PageType = 'workspace' | 'problems' | 'dashboard' | 'revision' | 'leaderboard' | 'profile' | 'battle' | 'store' | 'admin';

interface NavbarProps {
  currentPage: PageType;
  setCurrentPage: (page: PageType) => void;
  onOpenWeeklyReport?: () => void;
  onOpenAuthModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  setCurrentPage,
  onOpenWeeklyReport,
  onOpenAuthModal,
}) => {
  const { user, isGuest, signOut } = useAuth();
  const { realtimeStatus } = useProblem();
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const updateData = () => {
      userStatsService.getStats(user?.id || null).then(setStats);
      setProfile(userProfileService.getProfile(user?.id || null));
    };
    updateData();
    window.addEventListener('codetutor_status_synced', updateData);
    return () => window.removeEventListener('codetutor_status_synced', updateData);
  }, [currentPage, user?.id]);

  const handleNavClick = (page: PageType) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
  };

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

  return (
    <header className="h-14 border-b border-slate-800 bg-[#0f172a]/95 backdrop-blur px-3 sm:px-4 flex items-center justify-between select-none sticky top-0 z-40">
      {/* Brand & Desktop Navigation */}
      <div className="flex items-center gap-3 lg:gap-5">
        <button
          onClick={() => handleNavClick('workspace')}
          className="flex items-center gap-2 group text-left focus:outline-none"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition">
            <Code2 className="w-5 h-5 text-slate-950 font-bold" />
          </div>
          <div>
            <span className="font-bold text-sm sm:text-base tracking-tight text-white flex items-center gap-1.5">
              CodeTutor <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">AI</span>
            </span>
          </div>
        </button>

        <nav className="hidden md:flex items-center gap-1">
          <button
            onClick={() => handleNavClick('workspace')}
            className={`px-2.5 py-1.5 rounded-md text-xs font-semibold transition flex items-center gap-1.5 ${
              currentPage === 'workspace'
                ? 'bg-slate-800 text-emerald-400 shadow-inner'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <Cpu className="w-4 h-4" />
            Workspace
          </button>

          <button
            onClick={() => handleNavClick('problems')}
            className={`px-2.5 py-1.5 rounded-md text-xs font-semibold transition flex items-center gap-1.5 ${
              currentPage === 'problems'
                ? 'bg-slate-800 text-emerald-400 shadow-inner'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            Problem Bank
          </button>

          <button
            onClick={() => handleNavClick('revision')}
            className={`px-2.5 py-1.5 rounded-md text-xs font-semibold transition flex items-center gap-1.5 relative ${
              currentPage === 'revision'
                ? 'bg-slate-800 text-amber-400 shadow-inner'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <Shuffle className="w-3.5 h-3.5 text-amber-400" />
            <span>Revision</span>
            <span className="text-[9px] px-1 py-0.2 rounded bg-amber-500/20 text-amber-300 font-mono font-bold">
              +50 XP
            </span>
          </button>

          <button
            onClick={() => handleNavClick('battle')}
            className={`px-2.5 py-1.5 rounded-md text-xs font-semibold transition flex items-center gap-1.5 ${
              currentPage === 'battle'
                ? 'bg-fuchsia-950/60 text-fuchsia-400 border border-fuchsia-500/40 shadow-inner'
                : 'text-slate-400 hover:text-fuchsia-300 hover:bg-slate-800/50'
            }`}
          >
            <Swords className="w-4 h-4 text-fuchsia-400" />
            <span>1v1 Battle ⚔️</span>
          </button>

          <button
            onClick={() => handleNavClick('store')}
            className={`px-2.5 py-1.5 rounded-md text-xs font-semibold transition flex items-center gap-1.5 ${
              currentPage === 'store'
                ? 'bg-amber-950/60 text-amber-400 border border-amber-500/40 shadow-inner'
                : 'text-slate-400 hover:text-amber-300 hover:bg-slate-800/50'
            }`}
          >
            <ShoppingBag className="w-4 h-4 text-amber-400" />
            <span>POTD & Store 💎</span>
          </button>

          <button
            onClick={() => handleNavClick('leaderboard')}
            className={`px-2.5 py-1.5 rounded-md text-xs font-semibold transition flex items-center gap-1.5 ${
              currentPage === 'leaderboard'
                ? 'bg-slate-800 text-yellow-400 shadow-inner'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <Crown className="w-4 h-4 text-yellow-400" />
            Leaderboard
          </button>

          <button
            onClick={() => handleNavClick('dashboard')}
            className={`px-2.5 py-1.5 rounded-md text-xs font-semibold transition flex items-center gap-1.5 ${
              currentPage === 'dashboard'
                ? 'bg-slate-800 text-emerald-400 shadow-inner'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <BarChart3 className="w-4 h-4" />
            Analytics
          </button>
        </nav>
      </div>

      {/* Center Realtime Sync Status */}
      <div className="hidden xl:flex items-center gap-3">
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-[11px] font-mono">
          <span className="relative flex h-2 w-2">
            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
              realtimeStatus === 'synced' ? 'bg-emerald-400' : 'bg-teal-400'
            }`}></span>
            <span className={`relative inline-flex rounded-full h-2 w-2 ${
              realtimeStatus === 'synced' ? 'bg-emerald-500' : 'bg-teal-500'
            }`}></span>
          </span>
          <span className="text-slate-400">
            {realtimeStatus === 'synced' ? (
              <span className="text-emerald-400 font-semibold">Live Synced</span>
            ) : (
              'Realtime DB'
            )}
          </span>
        </div>
      </div>

      {/* Right Controls & Hamburger on Mobile */}
      <div className="flex items-center gap-2 sm:gap-2.5">
        {/* Weekly Report Button */}
        {onOpenWeeklyReport && (
          <button
            onClick={onOpenWeeklyReport}
            title="Download Weekly Performance Report"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-emerald-500/15 via-teal-500/15 to-indigo-500/15 border border-emerald-500/30 hover:border-emerald-400/60 text-emerald-300 hover:text-emerald-200 font-semibold text-xs transition glow-emerald cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5 text-emerald-400" />
            <span className="hidden sm:inline">Weekly Report</span>
          </button>
        )}

        {/* Stats Badges */}
        <button
          onClick={() => handleNavClick('profile')}
          title="View Streak & Progress in Profile"
          className="flex items-center gap-1 bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-lg px-2 py-1 text-xs font-medium transition cursor-pointer"
        >
          <div className="flex items-center gap-1 text-amber-400 pr-1.5 border-r border-slate-800" title="Daily Streak">
            <Flame className="w-3.5 h-3.5 fill-amber-400/20 text-amber-400" />
            <span>{stats.current_streak || 0}d</span>
          </div>
          <div className="flex items-center gap-1 text-emerald-400 pl-1" title="Total Solved">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>{stats.total_solved}</span>
          </div>
        </button>

        {/* Dedicated Profile Button */}
        <button
          onClick={() => handleNavClick('profile')}
          title="My Profile"
          className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg border text-xs font-semibold transition ${
            currentPage === 'profile'
              ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300'
              : 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800'
          }`}
        >
          <span className="text-sm">{getAvatarEmoji(profile.avatar)}</span>
          <span className="hidden sm:inline truncate max-w-[80px]">{profile.display_name.split(' ')[0]}</span>
        </button>

        {/* Auth Sign Out or Sign In */}
        {user ? (
          <button
            onClick={signOut}
            title="Sign Out"
            className="p-1.5 rounded-md text-slate-400 hover:text-rose-400 transition"
          >
            <LogOut className="w-3.5 h-3.5" />
          </button>
        ) : (
          <button
            onClick={onOpenAuthModal}
            className="hidden sm:flex items-center gap-1 px-2.5 py-1.5 rounded-md bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition shadow-sm"
          >
            <UserIcon className="w-3.5 h-3.5" />
            <span>Sign In</span>
          </button>
        )}

        {/* Mobile Hamburger Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-14 z-50 md:hidden animate-fadeIn">
          {/* Backdrop blur */}
          <div 
            className="fixed inset-0 top-14 bg-black/70 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)} 
          />
          
          <div className="relative bg-[#0d1322] border-b border-slate-800 p-4 space-y-3 shadow-2xl max-h-[calc(100dvh-3.5rem)] overflow-y-auto">
            {/* Mobile User Profile Summary */}
            <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-xl shadow-inner">
                  {getAvatarEmoji(profile.avatar)}
                </div>
                <div>
                  <div className="text-xs font-bold text-white truncate max-w-[150px]">{profile.display_name}</div>
                  <div className="text-[11px] text-slate-400 font-mono">@{profile.username}</div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono">
                <span className="px-2 py-0.5 rounded bg-amber-500/15 text-amber-300 font-bold border border-amber-500/30">
                  🔥 {stats.current_streak}d
                </span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-300 font-bold border border-emerald-500/30">
                  ✓ {stats.total_solved}
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <button
                onClick={() => handleNavClick('workspace')}
                className={`p-2.5 rounded-xl text-left text-xs font-semibold flex items-center gap-2.5 transition ${
                  currentPage === 'workspace' ? 'bg-slate-800 text-emerald-400 font-bold shadow-sm' : 'text-slate-300 hover:bg-slate-800/50'
                }`}
              >
                <Cpu className="w-4 h-4 text-emerald-400" />
                <span>Interactive Workspace</span>
              </button>
              <button
                onClick={() => handleNavClick('problems')}
                className={`p-2.5 rounded-xl text-left text-xs font-semibold flex items-center gap-2.5 transition ${
                  currentPage === 'problems' ? 'bg-slate-800 text-emerald-400 font-bold shadow-sm' : 'text-slate-300 hover:bg-slate-800/50'
                }`}
              >
                <BookOpen className="w-4 h-4 text-teal-400" />
                <span>Problem Bank (5,200 Questions)</span>
              </button>
              <button
                onClick={() => handleNavClick('revision')}
                className={`p-2.5 rounded-xl text-left text-xs font-semibold flex items-center justify-between transition ${
                  currentPage === 'revision' ? 'bg-slate-800 text-amber-400 font-bold shadow-sm' : 'text-slate-300 hover:bg-slate-800/50'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Shuffle className="w-4 h-4 text-amber-400" />
                  <span>Revision Arena</span>
                </div>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 font-mono font-bold">
                  +50 XP Bonus
                </span>
              </button>
              <button
                onClick={() => handleNavClick('battle')}
                className={`p-2.5 rounded-xl text-left text-xs font-semibold flex items-center justify-between transition ${
                  currentPage === 'battle' ? 'bg-fuchsia-950/80 text-fuchsia-400 font-bold border border-fuchsia-500/30' : 'text-slate-300 hover:bg-slate-800/50'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Swords className="w-4 h-4 text-fuchsia-400" />
                  <span>1v1 Code Battle (PvP Arena)</span>
                </div>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-fuchsia-500/20 text-fuchsia-300 font-mono font-bold">
                  PvP Duel
                </span>
              </button>
              <button
                onClick={() => handleNavClick('store')}
                className={`p-2.5 rounded-xl text-left text-xs font-semibold flex items-center justify-between transition ${
                  currentPage === 'store' ? 'bg-amber-950/80 text-amber-400 font-bold border border-amber-500/30' : 'text-slate-300 hover:bg-slate-800/50'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <ShoppingBag className="w-4 h-4 text-amber-400" />
                  <span>POTD & Rewards Store</span>
                </div>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 font-mono font-bold">
                  2X XP
                </span>
              </button>
              <button
                onClick={() => handleNavClick('leaderboard')}
                className={`p-2.5 rounded-xl text-left text-xs font-semibold flex items-center gap-2.5 transition ${
                  currentPage === 'leaderboard' ? 'bg-slate-800 text-yellow-400 font-bold shadow-sm' : 'text-slate-300 hover:bg-slate-800/50'
                }`}
              >
                <Crown className="w-4 h-4 text-yellow-400" />
                <span>Global Leaderboard (Top 1)</span>
              </button>
              <button
                onClick={() => handleNavClick('profile')}
                className={`p-2.5 rounded-xl text-left text-xs font-semibold flex items-center gap-2.5 transition ${
                  currentPage === 'profile' ? 'bg-slate-800 text-emerald-400 font-bold shadow-sm' : 'text-slate-300 hover:bg-slate-800/50'
                }`}
              >
                <UserIcon className="w-4 h-4 text-indigo-400" />
                <span>My Profile & Streaks</span>
              </button>
              <button
                onClick={() => handleNavClick('dashboard')}
                className={`p-2.5 rounded-xl text-left text-xs font-semibold flex items-center gap-2.5 transition ${
                  currentPage === 'dashboard' ? 'bg-slate-800 text-emerald-400 font-bold shadow-sm' : 'text-slate-300 hover:bg-slate-800/50'
                }`}
              >
                <BarChart3 className="w-4 h-4 text-sky-400" />
                <span>Analytics & Mastery</span>
              </button>
            </div>

            {/* Weekly Report & Sign In / Out */}
            <div className="pt-2 border-t border-slate-800 space-y-2">
              {onOpenWeeklyReport && (
                <button
                  onClick={() => { onOpenWeeklyReport(); setMobileMenuOpen(false); }}
                  className="w-full p-2.5 rounded-xl bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/40 text-emerald-300 font-bold text-xs flex items-center justify-center gap-2 shadow-sm"
                >
                  <FileText className="w-4 h-4 text-emerald-400" />
                  <span>Download Weekly Report</span>
                </button>
              )}

              {user ? (
                <button
                  onClick={() => { signOut(); setMobileMenuOpen(false); }}
                  className="w-full p-2 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 border border-rose-500/30 text-xs font-semibold flex items-center justify-center gap-2"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Sign Out</span>
                </button>
              ) : (
                <button
                  onClick={() => { onOpenAuthModal(); setMobileMenuOpen(false); }}
                  className="w-full p-2.5 rounded-xl bg-emerald-500 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-md shadow-emerald-500/20"
                >
                  <UserIcon className="w-4 h-4" />
                  <span>Sign In / Create Account</span>
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
