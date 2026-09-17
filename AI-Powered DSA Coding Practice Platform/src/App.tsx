import React, { useState, useEffect } from 'react';
import { AuthProvider } from './context/AuthContext';
import { ProblemProvider, useProblem } from './context/ProblemContext';
import { Navbar, PageType } from './components/layout/Navbar';
import { WorkspacePage } from './pages/WorkspacePage';
import { ProblemBankPage } from './pages/ProblemBankPage';
import { DashboardPage } from './pages/DashboardPage';
import { RevisionPage } from './pages/RevisionPage';
import { LeaderboardPage } from './pages/LeaderboardPage';
import { ProfilePage } from './pages/ProfilePage';
import { BattleArenaPage } from './pages/BattleArenaPage';
import { POTDStorePage } from './pages/POTDStorePage';
import { AdminPage } from './pages/AdminPage';
import { WeeklyReportModal } from './components/report/WeeklyReportModal';
import { AuthModal } from './components/auth/AuthModal';
import { WelcomeIntroScreen } from './components/common/WelcomeIntroScreen';
import { Problem } from './types/problem';
import { adminService } from './lib/supabase';
import { Radio, AlertTriangle, CheckCircle2, Info, X } from 'lucide-react';

const AppContent: React.FC = () => {
  const urlParams = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : null;
  const initialBattleCode = urlParams?.get('battle');
  const initialIsAdmin = urlParams?.get('admin') === 'true' || urlParams?.get('admin') === '1' || (typeof window !== 'undefined' && window.location.hash === '#admin');

  const [currentPage, setCurrentPage] = useState<PageType>(
    initialIsAdmin ? 'admin' : (initialBattleCode ? 'battle' : 'workspace')
  );
  const [isWeeklyReportOpen, setIsWeeklyReportOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [broadcastBanner, setBroadcastBanner] = useState<{
    title: string;
    message: string;
    type: 'info' | 'success' | 'warning' | 'alert';
  } | null>(null);

  // Separate Admin Access: Hotkey (Ctrl+Shift+A / Cmd+Shift+A) and URL Hash (#admin)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'A' || e.key === 'a')) {
        e.preventDefault();
        setCurrentPage((prev) => (prev === 'admin' ? 'workspace' : 'admin'));
      }
    };

    const handleHashChange = () => {
      if (window.location.hash === '#admin') {
        setCurrentPage('admin');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  useEffect(() => {
    const unsub = adminService.subscribeToBroadcasts((announcement) => {
      setBroadcastBanner(announcement);
      const timer = setTimeout(() => {
        setBroadcastBanner(null);
      }, 12000);
      return () => clearTimeout(timer);
    });
    return () => {
      unsub();
    };
  }, []);

  const { setActiveProblem, setActiveTab, setIsRevisionMode } = useProblem();

  const handleSelectProblemFromList = (problem: Problem) => {
    setIsRevisionMode(false);
    setActiveProblem(problem);
    setActiveTab('problem');
    setCurrentPage('workspace');
  };

  const handleSelectProblemForRevision = (problem: Problem) => {
    setIsRevisionMode(true);
    setActiveProblem(problem);
    setActiveTab('problem');
    setCurrentPage('workspace');
  };

  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-100 flex flex-col font-sans">
      <Navbar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        onOpenWeeklyReport={() => setIsWeeklyReportOpen(true)}
        onOpenAuthModal={() => setIsAuthModalOpen(true)}
      />

      {/* Live Admin Real-Time Announcement Floating Banner */}
      {broadcastBanner && (
        <div className="fixed top-16 left-1/2 -translate-x-1/2 z-50 max-w-xl w-[92%] sm:w-full animate-bounce-short">
          <div className={`p-4 rounded-2xl border shadow-2xl backdrop-blur-xl flex items-start gap-3.5 transition-all ${
            broadcastBanner.type === 'alert'
              ? 'bg-rose-950/95 border-rose-500/60 text-rose-100 shadow-rose-500/20'
              : broadcastBanner.type === 'warning'
              ? 'bg-amber-950/95 border-amber-500/60 text-amber-100 shadow-amber-500/20'
              : broadcastBanner.type === 'success'
              ? 'bg-emerald-950/95 border-emerald-500/60 text-emerald-100 shadow-emerald-500/20'
              : 'bg-indigo-950/95 border-indigo-500/60 text-indigo-100 shadow-indigo-500/20'
          }`}>
            <div className="p-2 rounded-xl bg-white/10 shrink-0">
              {broadcastBanner.type === 'alert' && <AlertTriangle className="w-5 h-5 text-rose-400" />}
              {broadcastBanner.type === 'warning' && <Radio className="w-5 h-5 text-amber-400 animate-pulse" />}
              {broadcastBanner.type === 'success' && <CheckCircle2 className="w-5 h-5 text-emerald-400" />}
              {broadcastBanner.type === 'info' && <Info className="w-5 h-5 text-indigo-400" />}
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-300">ADMIN BROADCAST</span>
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
              </div>
              <h4 className="text-sm font-bold text-white leading-tight mt-0.5">{broadcastBanner.title}</h4>
              <p className="text-xs text-slate-200 mt-1 whitespace-pre-wrap leading-relaxed">{broadcastBanner.message}</p>
            </div>

            <button
              onClick={() => setBroadcastBanner(null)}
              className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition shrink-0 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      <main className="flex-1 overflow-hidden relative">
        {/* Workspace - Preserved always for instant code retention and zero lag */}
        <div
          className="h-full flex-1 flex-col"
          style={{ display: currentPage === 'workspace' ? 'flex' : 'none' }}
        >
          <WorkspacePage onOpenAuthModal={() => setIsAuthModalOpen(true)} />
        </div>

        {/* Problem Bank - Mounted on demand */}
        {currentPage === 'problems' && (
          <div className="h-full overflow-y-auto">
            <ProblemBankPage
              onSelectProblem={handleSelectProblemFromList}
              onOpenWeeklyReport={() => setIsWeeklyReportOpen(true)}
            />
          </div>
        )}

        {/* Revision Mode - Mounted on demand */}
        {currentPage === 'revision' && (
          <div className="h-full flex-1 flex-col">
            <RevisionPage 
              onSelectProblemForRevision={handleSelectProblemForRevision} 
              onOpenAuthModal={() => setIsAuthModalOpen(true)}
            />
          </div>
        )}

        {/* Leaderboard - Mounted on demand */}
        {currentPage === 'leaderboard' && (
          <div className="h-full overflow-y-auto">
            <LeaderboardPage />
          </div>
        )}

        {/* Profile - Mounted on demand */}
        {currentPage === 'profile' && (
          <div className="h-full overflow-y-auto">
            <ProfilePage onSelectProblem={handleSelectProblemFromList} />
          </div>
        )}

        {/* 1v1 Battle Arena - Mounted on demand */}
        {currentPage === 'battle' && (
          <div className="h-full flex-1 flex-col">
            <BattleArenaPage 
              onOpenAuthModal={() => setIsAuthModalOpen(true)}
              initialRoomCode={initialBattleCode}
            />
          </div>
        )}

        {/* Problem of the Day & Rewards Store - Mounted on demand */}
        {currentPage === 'store' && (
          <div className="h-full overflow-y-auto">
            <POTDStorePage 
              onSelectProblem={handleSelectProblemFromList}
              onOpenAuthModal={() => setIsAuthModalOpen(true)}
            />
          </div>
        )}

        {/* Master Admin Panel - Mounted on demand */}
        {currentPage === 'admin' && (
          <div className="h-full overflow-y-auto">
            <AdminPage onClose={() => setCurrentPage('workspace')} />
          </div>
        )}

        {/* Analytics & Dashboard - Mounted on demand */}
        {currentPage === 'dashboard' && (
          <div className="h-full overflow-y-auto">
            <DashboardPage
              onSelectProblem={handleSelectProblemFromList}
              onOpenWeeklyReport={() => setIsWeeklyReportOpen(true)}
            />
          </div>
        )}
      </main>

      {/* Modals - Rendered only when opened to avoid mounting overhead */}
      {isWeeklyReportOpen && (
        <WeeklyReportModal
          isOpen={isWeeklyReportOpen}
          onClose={() => setIsWeeklyReportOpen(false)}
        />
      )}
      {isAuthModalOpen && (
        <AuthModal
          isOpen={isAuthModalOpen}
          onClose={() => setIsAuthModalOpen(false)}
        />
      )}

      {/* 3D Kinetic Welcome Intro Screen on Reload/Launch */}
      {showIntro && (
        <WelcomeIntroScreen onComplete={() => setShowIntro(false)} />
      )}
    </div>
  );
};

export function App() {
  return (
    <AuthProvider>
      <ProblemProvider>
        <AppContent />
      </ProblemProvider>
    </AuthProvider>
  );
}

export default App;
