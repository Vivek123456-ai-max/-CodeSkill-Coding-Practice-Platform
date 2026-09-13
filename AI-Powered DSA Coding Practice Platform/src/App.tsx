import React, { useState } from 'react';
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
import { WeeklyReportModal } from './components/report/WeeklyReportModal';
import { AuthModal } from './components/auth/AuthModal';
import { WelcomeIntroScreen } from './components/common/WelcomeIntroScreen';
import { Problem } from './types/problem';

const AppContent: React.FC = () => {
  const urlParams = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : null;
  const initialBattleCode = urlParams?.get('battle');

  const [currentPage, setCurrentPage] = useState<PageType>(initialBattleCode ? 'battle' : 'workspace');
  const [isWeeklyReportOpen, setIsWeeklyReportOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [showIntro, setShowIntro] = useState(true);

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
