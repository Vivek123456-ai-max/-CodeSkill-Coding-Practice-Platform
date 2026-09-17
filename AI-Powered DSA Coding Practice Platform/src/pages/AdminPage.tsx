import React, { useState, useEffect } from 'react';
import { 
  adminService, 
  AdminUserRecord, 
  ADMIN_CONFIG, 
  resolveCanonicalProblemId,
  problemService
} from '../lib/supabase';
import { ALL_PROBLEMS } from '../lib/allProblems';
import { Problem } from '../types/problem';
import { 
  ShieldAlert, 
  ShieldCheck, 
  Lock, 
  Key, 
  Users, 
  BookOpen, 
  Code2, 
  Swords, 
  Radio, 
  RefreshCw, 
  RotateCcw, 
  Trash2, 
  Edit3, 
  Search, 
  AlertTriangle, 
  CheckCircle2, 
  Flame, 
  Zap, 
  Award, 
  LogOut, 
  Send, 
  Eye, 
  X, 
  Plus, 
  Database,
  Terminal,
  Clock,
  Sparkles,
  Server,
  Crown,
  Calendar,
  ChevronRight,
  FolderOpen,
  FileCode,
  ExternalLink
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface AdminPageProps {
  onClose?: () => void;
}

export const AdminPage: React.FC<AdminPageProps> = ({ onClose }) => {
  // Authentication states (Blank inputs, credentials hidden)
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => adminService.isAdminSessionActive());
  const [emailInput, setEmailInput] = useState<string>('');
  const [passwordInput, setPasswordInput] = useState<string>('');
  const [authError, setAuthError] = useState<string | null>(null);
  const [isAuthenticating, setIsAuthenticating] = useState<boolean>(false);

  // Admin Navigation Tabs
  const [activeTab, setActiveTab] = useState<'overview' | 'users' | 'problems' | 'submissions' | 'broadcast'>('overview');

  // Data States
  const [users, setUsers] = useState<AdminUserRecord[]>([]);
  const [submissions, setSubmissions] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [searchUser, setSearchUser] = useState<string>('');
  const [searchProblem, setSearchProblem] = useState<string>('');
  const [problemTopicFilter, setProblemTopicFilter] = useState<string>('all');
  const [problemDiffFilter, setProblemDiffFilter] = useState<string>('all');

  // Edit User Modal States
  const [editingUser, setEditingUser] = useState<AdminUserRecord | null>(null);
  const [editForm, setEditForm] = useState({
    display_name: '',
    total_solved: 0,
    easy_solved: 0,
    medium_solved: 0,
    hard_solved: 0,
    current_streak: 0,
  });

  // User Solved Questions Inspector States
  const [inspectingUser, setInspectingUser] = useState<AdminUserRecord | null>(null);
  const [userSubmissions, setUserSubmissions] = useState<any[]>([]);
  const [loadingUserSubs, setLoadingUserSubs] = useState<boolean>(false);
  const [userSubSearch, setUserSubSearch] = useState<string>('');
  const [userViewMode, setUserViewMode] = useState<'grid' | 'table'>('grid');

  // Code Viewer Modal
  const [viewingSubmission, setViewingSubmission] = useState<any | null>(null);

  // Create Problem Modal State
  const [showCreateProblemModal, setShowCreateProblemModal] = useState<boolean>(false);
  const [newProblemForm, setNewProblemForm] = useState<{
    title: string;
    book: string;
    difficulty: 'Easy' | 'Medium' | 'Hard';
    category: string;
    description: string;
    starter_code: string;
    sample_input: string;
    sample_output: string;
  }>({
    title: '',
    book: 'variables',
    difficulty: 'Easy',
    category: 'Variables',
    description: '',
    starter_code: '#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your code here\n    return 0;\n}',
    sample_input: '',
    sample_output: ''
  });
  const [isCreatingProblem, setIsCreatingProblem] = useState<boolean>(false);

  // Broadcast Announcement States
  const [broadcastTitle, setBroadcastTitle] = useState<string>('System Announcement 🚀');
  const [broadcastMessage, setBroadcastMessage] = useState<string>('');
  const [broadcastType, setBroadcastType] = useState<'info' | 'success' | 'warning' | 'alert'>('info');
  const [broadcastSent, setBroadcastSent] = useState<boolean>(false);

  // Status Notification
  const [toastMessage, setToastMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);

  const showToast = (text: string, type: 'success' | 'error' = 'success') => {
    setToastMessage({ text, type });
    setTimeout(() => setToastMessage(null), 4000);
  };

  // Handle Login Authentication
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsAuthenticating(true);
    setAuthError(null);

    try {
      const isValid = await adminService.verifyAdmin(emailInput, passwordInput);
      if (isValid) {
        setIsAuthenticated(true);
        confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
        fetchAdminData();
      } else {
        setAuthError('Access Denied: Invalid Master Admin Email or Password.');
      }
    } catch {
      setAuthError('Authentication error occurred. Please verify your credentials.');
    } finally {
      setIsAuthenticating(false);
    }
  };

  // Handle Admin Logout
  const handleLogout = () => {
    adminService.logoutAdmin();
    setIsAuthenticated(false);
    setPasswordInput('');
  };

  // Fetch all admin data
  const fetchAdminData = async () => {
    if (!isAuthenticated) return;
    setLoading(true);
    try {
      const [usersList, subsList] = await Promise.all([
        adminService.getAllUsers(),
        adminService.getAllSubmissions(100),
      ]);
      setUsers(usersList);
      setSubmissions(subsList);
    } catch (e) {
      console.warn('Fetch admin data error:', e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchAdminData();

      // Subscribe to Realtime Updates
      const channel = adminService.subscribeToAdminFeed(() => {
        fetchAdminData();
      });

      return () => {
        channel.unsubscribe();
      };
    }
  }, [isAuthenticated]);

  // Handle Edit User
  const handleOpenEditUser = (user: AdminUserRecord) => {
    setEditingUser(user);
    setEditForm({
      display_name: user.display_name,
      total_solved: user.total_solved,
      easy_solved: user.easy_solved,
      medium_solved: user.medium_solved,
      hard_solved: user.hard_solved,
      current_streak: user.current_streak,
    });
  };

  const handleSaveUserStats = async () => {
    if (!editingUser) return;
    const success = await adminService.updateUserStats(editingUser.id, editForm);
    if (success) {
      showToast(`Successfully updated stats for ${editingUser.display_name}`, 'success');
      setEditingUser(null);
      fetchAdminData();
    } else {
      showToast('Failed to update user stats in database.', 'error');
    }
  };

  // Handle Reset Single User
  const handleResetUser = async (user: AdminUserRecord) => {
    if (window.confirm(`Are you sure you want to reset ALL stats and submissions for "${user.display_name}" (${user.email}) to 0?`)) {
      const success = await adminService.resetUserToZero(user.id);
      if (success) {
        showToast(`User ${user.display_name} has been reset to 0!`, 'success');
        fetchAdminData();
      } else {
        showToast('Failed to reset user.', 'error');
      }
    }
  };

  // Handle Global Reset (All Users)
  const handleGlobalResetAll = async () => {
    const confirmation = window.prompt('⚠️ CRITICAL ACTION: Type "RESET ALL" to wipe all user stats, submissions, and code across the entire database to 0:');
    if (confirmation === 'RESET ALL') {
      const res = await adminService.resetAllUsersToZero();
      if (res.success) {
        showToast('Global Database Purge Complete: All users have been reset to 0.', 'success');
        fetchAdminData();
      } else {
        showToast(`Reset error: ${res.message}`, 'error');
      }
    }
  };

  // Handle Inspect Specific User's Solved Questions
  const handleInspectUser = async (user: AdminUserRecord) => {
    setInspectingUser(user);
    setUserSubSearch('');
    setLoadingUserSubs(true);
    try {
      const subs = await adminService.getUserSubmissions(user.id);
      setUserSubmissions(subs);
    } catch (err) {
      console.warn('Fetch user submissions error:', err);
      setUserSubmissions([]);
    } finally {
      setLoadingUserSubs(false);
    }
  };

  // Handle Delete User's Specific Submission
  const handleDeleteUserSubmission = async (subId: string) => {
    if (window.confirm('Delete this solved question submission for this user?')) {
      const success = await adminService.deleteSubmission(subId);
      if (success) {
        showToast('Problem solve record removed.', 'success');
        if (inspectingUser) {
          const updatedSubs = await adminService.getUserSubmissions(inspectingUser.id);
          setUserSubmissions(updatedSubs);
        }
        fetchAdminData();
      } else {
        showToast('Failed to delete submission.', 'error');
      }
    }
  };

  // Handle Delete Submission
  const handleDeleteSubmission = async (subId: string) => {
    if (window.confirm('Delete this code submission permanently from database?')) {
      const success = await adminService.deleteSubmission(subId);
      if (success) {
        showToast('Submission deleted successfully.', 'success');
        fetchAdminData();
      } else {
        showToast('Failed to delete submission.', 'error');
      }
    }
  };

  // Handle Create New Custom Problem in Supabase
  const handleCreateNewProblem = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProblemForm.title.trim() || !newProblemForm.description.trim()) {
      showToast('Please provide a problem title and description.', 'error');
      return;
    }

    setIsCreatingProblem(true);
    try {
      const slug = newProblemForm.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      const created = await problemService.createProblem({
        title: newProblemForm.title,
        slug: slug,
        description: newProblemForm.description,
        difficulty: newProblemForm.difficulty,
        category: newProblemForm.category || newProblemForm.book,
        tags: [newProblemForm.book, newProblemForm.difficulty.toLowerCase()],
        source: 'manual',
        starter_templates: {
          cpp: newProblemForm.starter_code,
          python: '# Write Python solution here\n',
          javascript: '// Write JavaScript solution here\n',
          java: '// Write Java solution here\n'
        },
        status: 'not_started',
        sample_test_cases: [
          {
            input: newProblemForm.sample_input || '10',
            output: newProblemForm.sample_output || '10',
            explanation: 'Sample test case input and output'
          }
        ],
        book: newProblemForm.book as any,
        order_index: ALL_PROBLEMS.length + 1
      });

      if (created) {
        showToast(`Problem "${newProblemForm.title}" created & synced to all devices!`, 'success');
        setShowCreateProblemModal(false);
        setNewProblemForm({
          title: '',
          book: 'variables',
          difficulty: 'Easy',
          category: 'Variables',
          description: '',
          starter_code: '#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your code here\n    return 0;\n}',
          sample_input: '',
          sample_output: ''
        });
        fetchAdminData();
      } else {
        showToast('Failed to insert problem into database.', 'error');
      }
    } catch {
      showToast('Error occurred while creating problem.', 'error');
    } finally {
      setIsCreatingProblem(false);
    }
  };

  // Handle Push Broadcast
  const handleSendBroadcast = (e: React.FormEvent) => {
    e.preventDefault();
    if (!broadcastMessage.trim()) return;

    adminService.broadcastAnnouncement(broadcastTitle, broadcastMessage, broadcastType);
    setBroadcastSent(true);
    showToast('Broadcast sent live to all active devices!', 'success');
    setTimeout(() => setBroadcastSent(false), 3000);
  };

  // Calculate Overview Metrics
  const totalUsersCount = users.length;
  const totalSubmissionsCount = submissions.length;
  const totalSolvedCount = users.reduce((acc, u) => acc + (u.total_solved || 0), 0);
  const totalXPCount = users.reduce((acc, u) => acc + (u.total_xp || 0), 0);

  // Filtered Users
  const filteredUsers = users.filter((u) => {
    const q = searchUser.toLowerCase();
    return (
      u.email.toLowerCase().includes(q) ||
      u.display_name.toLowerCase().includes(q) ||
      u.id.toLowerCase().includes(q)
    );
  });

  // Filtered Problems (5,200 catalog)
  const filteredProblems = ALL_PROBLEMS.filter((p) => {
    const matchTopic = problemTopicFilter === 'all' || p.book === problemTopicFilter;
    const matchDiff = problemDiffFilter === 'all' || p.difficulty === problemDiffFilter;
    const q = searchProblem.toLowerCase();
    const matchSearch = p.title.toLowerCase().includes(q) || (p.slug && p.slug.toLowerCase().includes(q)) || p.id.toLowerCase().includes(q);
    return matchTopic && matchDiff && matchSearch;
  });

  // ─── LOGIN GATE SCREEN (When Not Authenticated) ───
  if (!isAuthenticated) {
    return (
      <div className="min-h-[calc(100dvh-3.5rem)] flex items-center justify-center p-4 bg-[#080d1a] relative overflow-hidden">
        {/* Cyber Neon Background Elements */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-md w-full p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-rose-500/30 shadow-2xl space-y-6 relative z-10 backdrop-blur-xl">
          {/* Header */}
          <div className="text-center space-y-2">
            <div className="w-16 h-16 rounded-2xl bg-rose-500/15 border border-rose-500/40 text-rose-400 flex items-center justify-center mx-auto text-2xl shadow-lg shadow-rose-500/20">
              <Lock className="w-8 h-8" />
            </div>
            <h1 className="text-2xl font-black text-white tracking-tight flex items-center justify-center gap-2">
              Master Admin Terminal 🛡️
            </h1>
            <p className="text-xs text-slate-400">
              Restricted Area. Authorized master credentials required to manage database, users, problems, and real-time broadcast.
            </p>
          </div>

          {authError && (
            <div className="p-3.5 rounded-xl bg-rose-500/15 border border-rose-500/40 text-rose-300 text-xs font-bold flex items-center gap-2 animate-fadeIn">
              <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0" />
              <span>{authError}</span>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-mono font-bold text-slate-300">ADMIN USERNAME / EMAIL</label>
              <div className="relative">
                <Users className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="Enter authorized admin email"
                  autoComplete="off"
                  className="w-full pl-9 pr-3 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-xs font-mono text-white focus:outline-none focus:border-rose-500 transition"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-mono font-bold text-slate-300">ADMIN PASSWORD</label>
              <div className="relative">
                <Key className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  required
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  placeholder="Enter authorized master password"
                  autoComplete="new-password"
                  className="w-full pl-9 pr-3 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-xs font-mono text-white focus:outline-none focus:border-rose-500 transition"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isAuthenticating}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-rose-600 via-red-600 to-rose-700 hover:from-rose-500 hover:to-rose-600 text-white font-extrabold text-xs flex items-center justify-center gap-2 shadow-lg shadow-rose-600/30 active:scale-95 transition disabled:opacity-50 cursor-pointer"
            >
              {isAuthenticating ? (
                <RefreshCw className="w-4 h-4 animate-spin" />
              ) : (
                <ShieldCheck className="w-4 h-4" />
              )}
              <span>Authenticate & Access Admin Panel</span>
            </button>
          </form>

          {onClose && (
            <div className="pt-1 text-center">
              <button
                type="button"
                onClick={onClose}
                className="text-xs text-slate-400 hover:text-white transition font-mono underline underline-offset-4 cursor-pointer"
              >
                ← Return to Coding Platform
              </button>
            </div>
          )}

          <div className="pt-2 text-center text-[11px] text-slate-500 font-mono">
            Protected by End-to-End Database Isolation & Real-Time Supabase Engine.
          </div>
        </div>
      </div>
    );
  }

  // ─── AUTHENTICATED ADMIN PANEL DASHBOARD ───
  return (
    <div className="min-h-[calc(100dvh-3.5rem)] bg-[#080d1a] flex flex-col overflow-hidden animate-fadeIn">
      {/* Toast Notification */}
      {toastMessage && (
        <div className={`fixed bottom-5 right-5 z-50 px-4 py-3 rounded-2xl border text-xs font-bold flex items-center gap-2.5 shadow-2xl animate-fadeIn ${
          toastMessage.type === 'success' ? 'bg-emerald-950/95 border-emerald-500/50 text-emerald-300' : 'bg-rose-950/95 border-rose-500/50 text-rose-300'
        }`}>
          {toastMessage.type === 'success' ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <AlertTriangle className="w-4 h-4 text-rose-400" />}
          <span>{toastMessage.text}</span>
        </div>
      )}

      {/* Top Admin Navigation Header */}
      <header className="border-b border-slate-800 bg-[#0c1222]/95 px-4 py-3 shrink-0 flex flex-wrap items-center justify-between gap-3 shadow-lg select-none">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-rose-500/20 border border-rose-500/40 flex items-center justify-center text-rose-400 font-bold shadow-sm">
            <Crown className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-sm sm:text-base text-white tracking-tight">CodeTutor Master Admin</span>
              <span className="px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30 text-[10px] font-mono font-bold">
                ROOT ACCESS
              </span>
            </div>
            <p className="text-[11px] text-emerald-400 font-mono hidden sm:block">
              Session Active • Real-Time Database Synced
            </p>
          </div>
        </div>

        {/* Global Action Buttons */}
        <div className="flex items-center gap-2">
          {onClose && (
            <button
              onClick={onClose}
              title="Return to User Platform"
              className="px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white text-xs font-semibold flex items-center gap-1.5 transition cursor-pointer"
            >
              <span>← Exit Admin</span>
            </button>
          )}

          <button
            onClick={() => fetchAdminData()}
            title="Refresh All Database Tables"
            className="px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white text-xs font-semibold flex items-center gap-1.5 transition cursor-pointer"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin text-emerald-400' : ''}`} />
            <span className="hidden sm:inline">Sync DB</span>
          </button>

          <button
            onClick={handleGlobalResetAll}
            title="Reset All Registered Users to 0"
            className="px-3 py-1.5 rounded-xl bg-rose-500/15 hover:bg-rose-500/25 border border-rose-500/40 text-rose-300 font-bold text-xs flex items-center gap-1.5 transition cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5 text-rose-400" />
            <span>Reset All (0)</span>
          </button>

          <button
            onClick={handleLogout}
            title="Lock Admin Session"
            className="p-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-400 hover:text-white transition cursor-pointer"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* Admin Tab Navigation Bar */}
      <div className="border-b border-slate-800/80 bg-[#090e1c] px-4 flex items-center gap-1 overflow-x-auto select-none shrink-0">
        <button
          onClick={() => setActiveTab('overview')}
          className={`px-3.5 py-2.5 text-xs font-bold border-b-2 flex items-center gap-2 transition whitespace-nowrap ${
            activeTab === 'overview'
              ? 'border-rose-500 text-rose-400 bg-rose-500/5'
              : 'border-transparent text-slate-400 hover:text-slate-200'
          }`}
        >
          <Server className="w-3.5 h-3.5" />
          <span>System Overview</span>
        </button>

        <button
          onClick={() => setActiveTab('users')}
          className={`px-3.5 py-2.5 text-xs font-bold border-b-2 flex items-center gap-2 transition whitespace-nowrap ${
            activeTab === 'users'
              ? 'border-rose-500 text-rose-400 bg-rose-500/5'
              : 'border-transparent text-slate-400 hover:text-slate-200'
          }`}
        >
          <Users className="w-3.5 h-3.5" />
          <span>User Database ({users.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('problems')}
          className={`px-3.5 py-2.5 text-xs font-bold border-b-2 flex items-center gap-2 transition whitespace-nowrap ${
            activeTab === 'problems'
              ? 'border-rose-500 text-rose-400 bg-rose-500/5'
              : 'border-transparent text-slate-400 hover:text-slate-200'
          }`}
        >
          <BookOpen className="w-3.5 h-3.5" />
          <span>Problem Bank ({ALL_PROBLEMS.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('submissions')}
          className={`px-3.5 py-2.5 text-xs font-bold border-b-2 flex items-center gap-2 transition whitespace-nowrap ${
            activeTab === 'submissions'
              ? 'border-rose-500 text-rose-400 bg-rose-500/5'
              : 'border-transparent text-slate-400 hover:text-slate-200'
          }`}
        >
          <Code2 className="w-3.5 h-3.5" />
          <span>Live Submissions ({submissions.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('broadcast')}
          className={`px-3.5 py-2.5 text-xs font-bold border-b-2 flex items-center gap-2 transition whitespace-nowrap ${
            activeTab === 'broadcast'
              ? 'border-rose-500 text-rose-400 bg-rose-500/5'
              : 'border-transparent text-slate-400 hover:text-slate-200'
          }`}
        >
          <Radio className="w-3.5 h-3.5 text-amber-400" />
          <span>Real-Time Broadcast 📢</span>
        </button>
      </div>

      {/* Main Tab Content */}
      <main className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
        {/* TAB 1: SYSTEM OVERVIEW */}
        {activeTab === 'overview' && (
          <div className="space-y-6 max-w-6xl mx-auto">
            {/* Metrics Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-2">
                <div className="flex items-center justify-between text-slate-400 text-xs">
                  <span>Registered Users</span>
                  <Users className="w-4 h-4 text-indigo-400" />
                </div>
                <div className="text-2xl sm:text-3xl font-black text-white">{totalUsersCount}</div>
                <div className="text-[11px] text-emerald-400 font-mono flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> Live Synced
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-2">
                <div className="flex items-center justify-between text-slate-400 text-xs">
                  <span>Database Submissions</span>
                  <Code2 className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="text-2xl sm:text-3xl font-black text-emerald-400">{totalSubmissionsCount}</div>
                <div className="text-[11px] text-slate-400 font-mono">Accepted Solutions</div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-2">
                <div className="flex items-center justify-between text-slate-400 text-xs">
                  <span>Problem Repository</span>
                  <BookOpen className="w-4 h-4 text-amber-400" />
                </div>
                <div className="text-2xl sm:text-3xl font-black text-amber-400">{ALL_PROBLEMS.length}</div>
                <div className="text-[11px] text-slate-400 font-mono">52 DSA Modules</div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-2">
                <div className="flex items-center justify-between text-slate-400 text-xs">
                  <span>Total XP Distributed</span>
                  <Award className="w-4 h-4 text-yellow-400" />
                </div>
                <div className="text-2xl sm:text-3xl font-black text-yellow-400">{totalXPCount} XP</div>
                <div className="text-[11px] text-slate-400 font-mono">Global Leaderboard</div>
              </div>
            </div>

            {/* Admin Quick Action Controls */}
            <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-4">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber-400" />
                <span>Admin Quick Actions</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  onClick={() => setActiveTab('broadcast')}
                  className="p-4 rounded-2xl bg-slate-950 border border-slate-800 hover:border-amber-500/50 text-left space-y-1 transition group cursor-pointer"
                >
                  <div className="font-bold text-xs text-white group-hover:text-amber-300 flex items-center gap-1.5">
                    <Radio className="w-4 h-4 text-amber-400" />
                    <span>Send Announcement</span>
                  </div>
                  <p className="text-[11px] text-slate-400">Broadcast live messages to all active user screens.</p>
                </button>

                <button
                  onClick={() => setActiveTab('users')}
                  className="p-4 rounded-2xl bg-slate-950 border border-slate-800 hover:border-indigo-500/50 text-left space-y-1 transition group cursor-pointer"
                >
                  <div className="font-bold text-xs text-white group-hover:text-indigo-300 flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-indigo-400" />
                    <span>Manage User Accounts</span>
                  </div>
                  <p className="text-[11px] text-slate-400">Edit streaks, solved counts, or reset specific users.</p>
                </button>

                <button
                  onClick={handleGlobalResetAll}
                  className="p-4 rounded-2xl bg-slate-950 border border-slate-800 hover:border-rose-500/50 text-left space-y-1 transition group cursor-pointer"
                >
                  <div className="font-bold text-xs text-rose-400 flex items-center gap-1.5">
                    <RotateCcw className="w-4 h-4 text-rose-500" />
                    <span>Purge / Zero-Reset Database</span>
                  </div>
                  <p className="text-[11px] text-slate-400">Reset all users back to 0 solved and 0 XP safely.</p>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: USER MANAGEMENT (Dedicated User Cards & Solved Questions Inspector) */}
        {activeTab === 'users' && (
          <div className="space-y-4 max-w-6xl mx-auto">
            {/* Search and View Mode Filter */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-4 rounded-2xl bg-slate-900 border border-slate-800">
              <div className="relative w-full sm:w-80">
                <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search user by name, email, or ID..."
                  value={searchUser}
                  onChange={(e) => setSearchUser(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-rose-500 font-mono"
                />
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
                <div className="flex items-center bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs">
                  <button
                    onClick={() => setUserViewMode('grid')}
                    className={`px-3 py-1 rounded-lg font-bold transition cursor-pointer ${
                      userViewMode === 'grid' ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    User Cards
                  </button>
                  <button
                    onClick={() => setUserViewMode('table')}
                    className={`px-3 py-1 rounded-lg font-bold transition cursor-pointer ${
                      userViewMode === 'table' ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Table View
                  </button>
                </div>

                <div className="text-xs font-mono text-slate-400">
                  {filteredUsers.length} of {users.length} Users
                </div>
              </div>
            </div>

            {/* 1. GRID CARDS VIEW */}
            {userViewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredUsers.map((u) => (
                  <div
                    key={u.id}
                    className="p-5 rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-all shadow-xl flex flex-col justify-between gap-4 group"
                  >
                    <div className="space-y-3">
                      {/* Card Top: Avatar & Name */}
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-center gap-3 min-w-0">
                          <div className="w-12 h-12 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center text-2xl shrink-0 shadow-inner">
                            {u.avatar_url === 'crown' ? '👑' : u.avatar_url === 'wizard' ? '🧙‍♂️' : u.avatar_url === 'ninja' ? '🥷' : '👨‍💻'}
                          </div>
                          <div className="min-w-0">
                            <h4 className="font-bold text-white text-sm truncate leading-tight group-hover:text-rose-300 transition">
                              {u.display_name}
                            </h4>
                            <p className="text-xs text-slate-400 truncate">{u.email}</p>
                            <span className="text-[10px] text-slate-600 font-mono block truncate">{u.id}</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-1 shrink-0">
                          <button
                            onClick={() => handleOpenEditUser(u)}
                            title="Edit Stats"
                            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition cursor-pointer"
                          >
                            <Edit3 className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => handleResetUser(u)}
                            title="Reset to 0"
                            className="p-1.5 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 transition cursor-pointer"
                          >
                            <RotateCcw className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                      {/* Solved Stats Summary Badges */}
                      <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono">
                        <div className="p-2 rounded-xl bg-slate-950 border border-slate-800">
                          <div className="text-emerald-400 font-bold">{u.total_solved}</div>
                          <div className="text-[10px] text-slate-500">Solved</div>
                        </div>
                        <div className="p-2 rounded-xl bg-slate-950 border border-slate-800">
                          <div className="text-amber-400 font-bold">🔥 {u.current_streak}d</div>
                          <div className="text-[10px] text-slate-500">Streak</div>
                        </div>
                        <div className="p-2 rounded-xl bg-slate-950 border border-slate-800">
                          <div className="text-yellow-400 font-bold">{u.total_xp}</div>
                          <div className="text-[10px] text-slate-500">XP</div>
                        </div>
                      </div>

                      {/* Solved Breakdown Pill */}
                      <div className="px-3 py-1.5 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-center justify-between text-[11px] font-mono">
                        <span className="text-slate-400 text-[10px]">Difficulty Solved:</span>
                        <div className="flex items-center gap-2">
                          <span className="text-emerald-400">Easy {u.easy_solved}</span>
                          <span className="text-slate-600">•</span>
                          <span className="text-amber-400">Med {u.medium_solved}</span>
                          <span className="text-slate-600">•</span>
                          <span className="text-rose-400">Hard {u.hard_solved}</span>
                        </div>
                      </div>
                    </div>

                    {/* Prominent Click Button: Inspect Solved Questions */}
                    <button
                      onClick={() => handleInspectUser(u)}
                      className="w-full py-2.5 px-3 rounded-2xl bg-gradient-to-r from-rose-500/20 via-indigo-500/20 to-teal-500/20 hover:from-rose-500/30 hover:to-teal-500/30 border border-rose-500/30 hover:border-rose-400/60 text-white font-bold text-xs flex items-center justify-center gap-2 transition group-hover:shadow-lg cursor-pointer"
                    >
                      <FolderOpen className="w-4 h-4 text-rose-400" />
                      <span>View Solved Questions ({u.total_solved})</span>
                      <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition" />
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              /* 2. TABLE VIEW */
              <div className="rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden shadow-xl">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-slate-950/80 border-b border-slate-800 text-slate-400 font-mono">
                      <tr>
                        <th className="py-3 px-4 font-semibold">User Profile</th>
                        <th className="py-3 px-4 font-semibold text-center">Total Solved</th>
                        <th className="py-3 px-4 font-semibold text-center">Breakdown (E/M/H)</th>
                        <th className="py-3 px-4 font-semibold text-center">Streak</th>
                        <th className="py-3 px-4 font-semibold text-right">XP Points</th>
                        <th className="py-3 px-4 font-semibold text-center">Questions History</th>
                        <th className="py-3 px-4 font-semibold text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60 font-mono">
                      {filteredUsers.map((u) => (
                        <tr key={u.id} className="hover:bg-slate-800/30 transition">
                          <td className="py-3.5 px-4 cursor-pointer" onClick={() => handleInspectUser(u)}>
                            <div className="font-bold text-white font-sans hover:text-rose-300 transition">{u.display_name}</div>
                            <div className="text-[11px] text-slate-400">{u.email}</div>
                            <div className="text-[9px] text-slate-600 font-mono">{u.id}</div>
                          </td>
                          <td className="py-3.5 px-4 text-center">
                            <span className="px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-300 font-bold">
                              {u.total_solved}
                            </span>
                          </td>
                          <td className="py-3.5 px-4 text-center text-slate-300 text-[11px]">
                            <span className="text-emerald-400">{u.easy_solved}</span> /{' '}
                            <span className="text-amber-400">{u.medium_solved}</span> /{' '}
                            <span className="text-rose-400">{u.hard_solved}</span>
                          </td>
                          <td className="py-3.5 px-4 text-center text-amber-400 font-semibold">
                            🔥 {u.current_streak}d
                          </td>
                          <td className="py-3.5 px-4 text-right text-yellow-400 font-bold font-sans">
                            {u.total_xp} XP
                          </td>
                          <td className="py-3.5 px-4 text-center">
                            <button
                              onClick={() => handleInspectUser(u)}
                              className="px-2.5 py-1 rounded-lg bg-indigo-500/15 hover:bg-indigo-500/25 border border-indigo-500/30 text-indigo-300 font-bold text-[11px] transition cursor-pointer flex items-center gap-1 mx-auto"
                            >
                              <FolderOpen className="w-3 h-3 text-indigo-400" />
                              <span>View ({u.total_solved})</span>
                            </button>
                          </td>
                          <td className="py-3.5 px-4 text-right">
                            <div className="flex items-center justify-end gap-1.5">
                              <button
                                onClick={() => handleOpenEditUser(u)}
                                title="Edit User Stats"
                                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition cursor-pointer"
                              >
                                <Edit3 className="w-3.5 h-3.5" />
                              </button>
                              <button
                                onClick={() => handleResetUser(u)}
                                title="Reset user to 0"
                                className="p-1.5 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 transition cursor-pointer"
                              >
                                <RotateCcw className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        )}

        {/* TAB 3: PROBLEMS REPOSITORY */}
        {activeTab === 'problems' && (
          <div className="space-y-4 max-w-6xl mx-auto">
            {/* Filter Bar */}
            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="relative flex-1 w-full sm:w-auto">
                <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search 5,200 problems by title, slug, or ID..."
                  value={searchProblem}
                  onChange={(e) => setSearchProblem(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-rose-500"
                />
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto flex-wrap">
                <select
                  value={problemTopicFilter}
                  onChange={(e) => setProblemTopicFilter(e.target.value)}
                  className="bg-slate-950 border border-slate-700 text-xs text-slate-200 px-3 py-2 rounded-xl focus:outline-none"
                >
                  <option value="all">All Topics (52 Modules)</option>
                  <option value="patterns">Patterns</option>
                  <option value="loops">Loops</option>
                  <option value="variables">Variables</option>
                  <option value="datatypes">Data Types</option>
                  <option value="functions">Functions</option>
                  <option value="cppoop">OOP</option>
                  <option value="stl">STL</option>
                  <option value="algorithms">Algorithms</option>
                </select>

                <select
                  value={problemDiffFilter}
                  onChange={(e) => setProblemDiffFilter(e.target.value)}
                  className="bg-slate-950 border border-slate-700 text-xs text-slate-200 px-3 py-2 rounded-xl focus:outline-none"
                >
                  <option value="all">All Diff</option>
                  <option value="Easy">Easy</option>
                  <option value="Medium">Medium</option>
                  <option value="Hard">Hard</option>
                </select>

                <button
                  onClick={() => setShowCreateProblemModal(true)}
                  className="px-3 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition cursor-pointer shadow-md shrink-0"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Problem to DB</span>
                </button>
              </div>
            </div>

            {/* Problems Grid List */}
            <div className="rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden shadow-xl">
              <div className="overflow-x-auto max-h-[600px] overflow-y-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-950/80 border-b border-slate-800 text-slate-400 font-mono sticky top-0 z-10">
                    <tr>
                      <th className="py-3 px-4 font-semibold w-16 text-center">#</th>
                      <th className="py-3 px-4 font-semibold">Title</th>
                      <th className="py-3 px-4 font-semibold">Topic / Module</th>
                      <th className="py-3 px-4 font-semibold text-center">Difficulty</th>
                      <th className="py-3 px-4 font-semibold text-center">Test Cases</th>
                      <th className="py-3 px-4 font-semibold text-right">UUID</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 font-mono">
                    {filteredProblems.slice(0, 100).map((p) => (
                      <tr key={p.id} className="hover:bg-slate-800/30 transition">
                        <td className="py-3 px-4 text-center text-slate-400">
                          #{String(p.order_index || 1).padStart(3, '0')}
                        </td>
                        <td className="py-3 px-4">
                          <div className="font-bold text-white font-sans">{p.title}</div>
                          <div className="text-[10px] text-slate-500 font-mono">{p.slug}</div>
                        </td>
                        <td className="py-3 px-4 text-slate-300 font-sans capitalize">
                          {p.book || p.category}
                        </td>
                        <td className="py-3 px-4 text-center">
                          <span
                            className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                              p.difficulty === 'Easy'
                                ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                                : p.difficulty === 'Medium'
                                ? 'bg-amber-500/10 text-amber-400 border border-amber-500/30'
                                : 'bg-rose-500/10 text-rose-400 border border-rose-500/30'
                            }`}
                          >
                            {p.difficulty}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-center text-slate-400">
                          {p.sample_test_cases?.length || 0} cases
                        </td>
                        <td className="py-3 px-4 text-right text-[10px] text-slate-600 truncate max-w-[120px]">
                          {p.id}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: LIVE SUBMISSIONS FEED */}
        {activeTab === 'submissions' && (
          <div className="space-y-4 max-w-6xl mx-auto">
            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <h3 className="text-sm font-bold text-white">Real-Time User Submissions Log</h3>
              </div>
              <span className="text-xs text-slate-400 font-mono">{submissions.length} Total</span>
            </div>

            {submissions.length === 0 ? (
              <div className="p-12 text-center text-slate-500 text-xs font-mono bg-slate-900/60 rounded-2xl border border-slate-800">
                No code submissions logged yet. When users submit solutions, they will appear here in real-time.
              </div>
            ) : (
              <div className="rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden shadow-xl">
                <div className="overflow-x-auto max-h-[600px] overflow-y-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-slate-950/80 border-b border-slate-800 text-slate-400 font-mono sticky top-0 z-10">
                      <tr>
                        <th className="py-3 px-4 font-semibold">User / ID</th>
                        <th className="py-3 px-4 font-semibold">Problem ID</th>
                        <th className="py-3 px-4 font-semibold text-center">Language</th>
                        <th className="py-3 px-4 font-semibold text-center">Status</th>
                        <th className="py-3 px-4 font-semibold text-center">Passed</th>
                        <th className="py-3 px-4 font-semibold text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60 font-mono">
                      {submissions.map((sub) => (
                        <tr key={sub.id} className="hover:bg-slate-800/30 transition">
                          <td className="py-3 px-4">
                            <span className="text-indigo-300 font-bold">{sub.user_id?.slice(0, 8)}...</span>
                          </td>
                          <td className="py-3 px-4 text-slate-300 truncate max-w-[140px]">
                            {sub.problem_id}
                          </td>
                          <td className="py-3 px-4 text-center uppercase text-slate-400 font-bold">
                            {sub.language}
                          </td>
                          <td className="py-3 px-4 text-center">
                            <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                              sub.status === 'accepted' ? 'bg-emerald-500/15 text-emerald-400' : 'bg-rose-500/15 text-rose-400'
                            }`}>
                              {sub.status}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-center text-slate-300">
                            {sub.test_cases_passed}/{sub.total_test_cases}
                          </td>
                          <td className="py-3 px-4 text-right">
                            <div className="flex items-center justify-end gap-1.5">
                              <button
                                onClick={() => setViewingSubmission(sub)}
                                title="View Code"
                                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition cursor-pointer"
                              >
                                <Eye className="w-3.5 h-3.5" />
                              </button>
                              <button
                                onClick={() => handleDeleteSubmission(sub.id)}
                                title="Delete submission"
                                className="p-1.5 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 transition cursor-pointer"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        )}

        {/* TAB 5: REAL-TIME BROADCAST */}
        {activeTab === 'broadcast' && (
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-amber-500/30 shadow-2xl space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-amber-500/20 border border-amber-500/40 text-amber-400 flex items-center justify-center">
                  <Radio className="w-5 h-5 animate-pulse" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Live System Broadcast</h3>
                  <p className="text-xs text-slate-400">Push instant notification banners to every connected device.</p>
                </div>
              </div>

              <form onSubmit={handleSendBroadcast} className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-bold text-slate-300">ANNOUNCEMENT TITLE</label>
                  <input
                    type="text"
                    required
                    value={broadcastTitle}
                    onChange={(e) => setBroadcastTitle(e.target.value)}
                    placeholder="e.g. Platform Maintenance / Special Challenge"
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-bold text-slate-300">NOTIFICATION TYPE</label>
                  <div className="grid grid-cols-4 gap-2">
                    {(['info', 'success', 'warning', 'alert'] as const).map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setBroadcastType(t)}
                        className={`py-2 rounded-xl text-xs font-bold uppercase transition cursor-pointer ${
                          broadcastType === t
                            ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                            : 'bg-slate-950 text-slate-400 border border-slate-800'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-bold text-slate-300">MESSAGE CONTENT</label>
                  <textarea
                    rows={4}
                    required
                    value={broadcastMessage}
                    onChange={(e) => setBroadcastMessage(e.target.value)}
                    placeholder="Type the message you want to broadcast live across all screens..."
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-amber-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-extrabold text-xs flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 active:scale-95 transition cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Push Real-Time Broadcast 🚀</span>
                </button>
              </form>
            </div>
          </div>
        )}
      </main>

      {/* USER SOLVED QUESTIONS INSPECTOR MODAL */}
      {inspectingUser && (
        <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-5 animate-fadeIn">
          <div className="max-w-4xl w-full max-h-[92vh] flex flex-col rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden">
            {/* Header: User Profile Info */}
            <div className="p-5 sm:p-6 border-b border-slate-800 bg-slate-950/80 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-2xl shadow-inner">
                  {inspectingUser.avatar_url === 'crown' ? '👑' : inspectingUser.avatar_url === 'wizard' ? '🧙‍♂️' : inspectingUser.avatar_url === 'ninja' ? '🥷' : '👨‍💻'}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-base sm:text-lg font-bold text-white">{inspectingUser.display_name}</h3>
                    <span className="px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-[10px] font-mono font-bold">
                      ID: {inspectingUser.id.slice(0, 8)}...
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 font-mono">{inspectingUser.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleOpenEditUser(inspectingUser)}
                  className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1.5 transition cursor-pointer"
                >
                  <Edit3 className="w-3.5 h-3.5" />
                  <span>Edit Stats</span>
                </button>
                <button
                  onClick={() => { handleResetUser(inspectingUser); setInspectingUser(null); }}
                  className="px-3 py-1.5 rounded-xl bg-rose-500/15 hover:bg-rose-500/25 border border-rose-500/40 text-rose-300 text-xs font-bold flex items-center gap-1.5 transition cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset (0)</span>
                </button>
                <button
                  onClick={() => setInspectingUser(null)}
                  className="p-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Solved Summary Metrics Grid */}
            <div className="p-4 bg-slate-900/50 border-b border-slate-800 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
              <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-slate-400 text-[11px] block">Total Solved</span>
                  <span className="text-lg font-black text-emerald-400">{inspectingUser.total_solved}</span>
                </div>
                <CheckCircle2 className="w-5 h-5 text-emerald-500/60" />
              </div>

              <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-slate-400 text-[11px] block">Current Streak</span>
                  <span className="text-lg font-black text-amber-400">{inspectingUser.current_streak} Days</span>
                </div>
                <Flame className="w-5 h-5 text-amber-500/60" />
              </div>

              <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-slate-400 text-[11px] block">XP Points</span>
                  <span className="text-lg font-black text-yellow-400">{inspectingUser.total_xp} XP</span>
                </div>
                <Award className="w-5 h-5 text-yellow-500/60" />
              </div>

              <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-slate-400 text-[11px] block">Breakdown</span>
                  <span className="text-xs font-bold">
                    <span className="text-emerald-400">{inspectingUser.easy_solved}E</span> /{' '}
                    <span className="text-amber-400">{inspectingUser.medium_solved}M</span> /{' '}
                    <span className="text-rose-400">{inspectingUser.hard_solved}H</span>
                  </span>
                </div>
                <Zap className="w-5 h-5 text-indigo-500/60" />
              </div>
            </div>

            {/* Solved Questions Section Header & Search */}
            <div className="p-4 border-b border-slate-800 bg-[#0c1220] flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <FolderOpen className="w-4 h-4 text-rose-400" />
                <h4 className="text-sm font-bold text-white">
                  Solved Questions Log ({userSubmissions.length} Submissions)
                </h4>
              </div>

              <div className="relative w-full sm:w-72">
                <Search className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Filter by question title or module..."
                  value={userSubSearch}
                  onChange={(e) => setUserSubSearch(e.target.value)}
                  className="w-full pl-8 pr-3 py-1.5 bg-slate-950 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-rose-500 font-mono"
                />
              </div>
            </div>

            {/* Solved Questions List Content */}
            <div className="flex-1 overflow-y-auto p-4 space-y-2">
              {loadingUserSubs ? (
                <div className="p-12 text-center text-slate-400 text-xs font-mono flex items-center justify-center gap-2">
                  <RefreshCw className="w-4 h-4 animate-spin text-rose-400" />
                  <span>Loading user code submissions from Supabase...</span>
                </div>
              ) : userSubmissions.length === 0 ? (
                <div className="p-12 text-center text-slate-500 text-xs font-mono bg-slate-950/60 rounded-2xl border border-slate-800">
                  No solved questions in database for this user yet. When {inspectingUser.display_name} solves problems, they will appear here in real-time.
                </div>
              ) : (
                <div className="space-y-2">
                  {userSubmissions
                    .filter((sub) => {
                      const q = userSubSearch.toLowerCase();
                      return (
                        sub.problem_title?.toLowerCase().includes(q) ||
                        sub.problem_book?.toLowerCase().includes(q) ||
                        sub.problem_id?.toLowerCase().includes(q)
                      );
                    })
                    .map((sub, idx) => (
                      <div
                        key={sub.id || idx}
                        className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 hover:border-slate-700 transition flex flex-col sm:flex-row sm:items-center justify-between gap-3 font-mono text-xs"
                      >
                        <div className="space-y-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="font-bold text-white font-sans text-xs">
                              {sub.problem_title || sub.problem_id}
                            </span>
                            <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[10px] text-slate-400 capitalize">
                              {sub.problem_book}
                            </span>
                            <span
                              className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                                sub.problem_difficulty === 'Easy'
                                  ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                                  : sub.problem_difficulty === 'Medium'
                                  ? 'bg-amber-500/10 text-amber-400 border border-amber-500/30'
                                  : 'bg-rose-500/10 text-rose-400 border border-rose-500/30'
                              }`}
                            >
                              {sub.problem_difficulty}
                            </span>
                          </div>

                          <div className="flex items-center gap-3 text-[11px] text-slate-500 flex-wrap">
                            <span className="text-emerald-400 font-bold">✓ {sub.status}</span>
                            <span>•</span>
                            <span>Passed: {sub.test_cases_passed}/{sub.total_test_cases}</span>
                            <span>•</span>
                            <span>{new Date(sub.created_at).toLocaleString()}</span>
                            <span>•</span>
                            <span className="uppercase text-slate-400 font-bold">{sub.language}</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                          <button
                            onClick={() => setViewingSubmission(sub)}
                            className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1.5 transition cursor-pointer"
                          >
                            <FileCode className="w-3.5 h-3.5 text-emerald-400" />
                            <span>View Code</span>
                          </button>
                          <button
                            onClick={() => handleDeleteUserSubmission(sub.id)}
                            title="Delete this submission"
                            className="p-1.5 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 transition cursor-pointer"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    ))}
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-slate-800 bg-slate-950/80 flex items-center justify-between text-xs">
              <span className="text-slate-400 font-mono">
                Real-time Database Live Inspection
              </span>
              <button
                onClick={() => setInspectingUser(null)}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold transition cursor-pointer"
              >
                Close Inspector
              </button>
            </div>
          </div>
        </div>
      )}

      {/* EDIT USER STATS MODAL */}
      {editingUser && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
          <div className="max-w-md w-full p-6 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl space-y-5">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-white">Edit User Stats in Database</h3>
              <button
                onClick={() => setEditingUser(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3 font-mono text-xs">
              <div>
                <label className="text-slate-400 block mb-1">Display Name</label>
                <input
                  type="text"
                  value={editForm.display_name}
                  onChange={(e) => setEditForm({ ...editForm, display_name: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-white focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-slate-400 block mb-1">Total Solved</label>
                  <input
                    type="number"
                    value={editForm.total_solved}
                    onChange={(e) => setEditForm({ ...editForm, total_solved: parseInt(e.target.value, 10) || 0 })}
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-white focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-slate-400 block mb-1">Streak (Days)</label>
                  <input
                    type="number"
                    value={editForm.current_streak}
                    onChange={(e) => setEditForm({ ...editForm, current_streak: parseInt(e.target.value, 10) || 0 })}
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-white focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 pt-1">
                <div>
                  <label className="text-emerald-400 block mb-1">Easy</label>
                  <input
                    type="number"
                    value={editForm.easy_solved}
                    onChange={(e) => setEditForm({ ...editForm, easy_solved: parseInt(e.target.value, 10) || 0 })}
                    className="w-full px-2.5 py-1.5 bg-slate-950 border border-slate-700 rounded-xl text-white focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-amber-400 block mb-1">Medium</label>
                  <input
                    type="number"
                    value={editForm.medium_solved}
                    onChange={(e) => setEditForm({ ...editForm, medium_solved: parseInt(e.target.value, 10) || 0 })}
                    className="w-full px-2.5 py-1.5 bg-slate-950 border border-slate-700 rounded-xl text-white focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-rose-400 block mb-1">Hard</label>
                  <input
                    type="number"
                    value={editForm.hard_solved}
                    onChange={(e) => setEditForm({ ...editForm, hard_solved: parseInt(e.target.value, 10) || 0 })}
                    className="w-full px-2.5 py-1.5 bg-slate-950 border border-slate-700 rounded-xl text-white focus:outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="flex gap-2 pt-2">
              <button
                onClick={() => setEditingUser(null)}
                className="flex-1 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveUserStats}
                className="flex-1 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs shadow-md"
              >
                Save Changes 💾
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CREATE NEW PROBLEM MODAL */}
      {showCreateProblemModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-5 animate-fadeIn">
          <div className="max-w-2xl w-full max-h-[92vh] flex flex-col rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden">
            <div className="p-5 border-b border-slate-800 bg-slate-950/80 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Plus className="w-5 h-5 text-emerald-400" />
                <h3 className="text-base font-bold text-white">Add New Problem to Supabase Database</h3>
              </div>
              <button
                onClick={() => setShowCreateProblemModal(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateNewProblem} className="flex-1 overflow-y-auto p-5 space-y-4 font-mono text-xs">
              <div className="space-y-1">
                <label className="text-slate-300 font-bold block">PROBLEM TITLE *</label>
                <input
                  type="text"
                  required
                  value={newProblemForm.title}
                  onChange={(e) => setNewProblemForm({ ...newProblemForm, title: e.target.value })}
                  placeholder="e.g. Find Max Element in Array"
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-emerald-500 font-sans text-xs"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-slate-300 font-bold block">TOPIC / MODULE</label>
                  <select
                    value={newProblemForm.book}
                    onChange={(e) => setNewProblemForm({ ...newProblemForm, book: e.target.value, category: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-emerald-500 text-xs capitalize"
                  >
                    <option value="variables">Variables</option>
                    <option value="datatypes">Data Types</option>
                    <option value="operators">Operators</option>
                    <option value="conditions">Conditionals</option>
                    <option value="loops">Loops</option>
                    <option value="patterns">Patterns</option>
                    <option value="functions">Functions</option>
                    <option value="arrays">Arrays</option>
                    <option value="strings">Strings</option>
                    <option value="pointers">Pointers</option>
                    <option value="cppoop">OOP</option>
                    <option value="stl">STL</option>
                    <option value="algorithms">Algorithms</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-slate-300 font-bold block">DIFFICULTY</label>
                  <select
                    value={newProblemForm.difficulty}
                    onChange={(e) => setNewProblemForm({ ...newProblemForm, difficulty: e.target.value as any })}
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-emerald-500 text-xs"
                  >
                    <option value="Easy">Easy (10 XP)</option>
                    <option value="Medium">Medium (25 XP)</option>
                    <option value="Hard">Hard (50 XP)</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-slate-300 font-bold block">PROBLEM STATEMENT / DESCRIPTION *</label>
                <textarea
                  rows={3}
                  required
                  value={newProblemForm.description}
                  onChange={(e) => setNewProblemForm({ ...newProblemForm, description: e.target.value })}
                  placeholder="Describe the task, input format, constraints, and expected output..."
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-emerald-500 font-sans text-xs"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-slate-300 font-bold block">SAMPLE INPUT</label>
                  <input
                    type="text"
                    value={newProblemForm.sample_input}
                    onChange={(e) => setNewProblemForm({ ...newProblemForm, sample_input: e.target.value })}
                    placeholder="e.g. 5 10"
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-emerald-500 text-xs"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-slate-300 font-bold block">SAMPLE OUTPUT</label>
                  <input
                    type="text"
                    value={newProblemForm.sample_output}
                    onChange={(e) => setNewProblemForm({ ...newProblemForm, sample_output: e.target.value })}
                    placeholder="e.g. 15"
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-emerald-500 text-xs"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-slate-300 font-bold block">STARTER C++ CODE</label>
                <textarea
                  rows={4}
                  value={newProblemForm.starter_code}
                  onChange={(e) => setNewProblemForm({ ...newProblemForm, starter_code: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-emerald-300 focus:outline-none focus:border-emerald-500 text-xs font-mono"
                />
              </div>

              <div className="flex gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowCreateProblemModal(false)}
                  className="flex-1 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isCreatingProblem}
                  className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold text-xs shadow-md flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-50"
                >
                  {isCreatingProblem ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Plus className="w-4 h-4" />}
                  <span>Save & Sync to DB 🚀</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* CODE VIEWER MODAL */}
      {viewingSubmission && (
        <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
          <div className="max-w-2xl w-full p-6 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Code2 className="w-4 h-4 text-emerald-400" />
                <span className="font-bold text-sm text-white">Submission Code Viewer</span>
                <span className="px-2 py-0.5 rounded bg-slate-800 text-[10px] font-mono text-slate-300 uppercase">
                  {viewingSubmission.language}
                </span>
              </div>
              <button
                onClick={() => setViewingSubmission(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <pre className="p-4 rounded-2xl bg-slate-950 border border-slate-800 font-mono text-xs text-emerald-300 max-h-96 overflow-y-auto whitespace-pre-wrap">
              {viewingSubmission.code || '// No code found'}
            </pre>

            <button
              onClick={() => setViewingSubmission(null)}
              className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs"
            >
              Close Code Viewer
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
