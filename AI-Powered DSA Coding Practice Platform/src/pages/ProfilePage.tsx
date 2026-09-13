import React, { useState, useEffect } from 'react';
import { useProblem } from '../context/ProblemContext';
import { useAuth } from '../context/AuthContext';
import { userProfileService, userStatsService, submissionService, resetAllRegisteredUsersData, UserProfile, UserStats } from '../lib/supabase';
import { Problem, CodeSubmission } from '../types/problem';
import { 
  User, 
  Flame, 
  Trophy, 
  Award, 
  Target, 
  Calendar, 
  Edit3, 
  Check, 
  X, 
  CheckCircle2, 
  Clock, 
  TrendingUp, 
  Sparkles, 
  BookOpen, 
  Github, 
  School, 
  Zap, 
  RotateCcw
} from 'lucide-react';

interface ProfilePageProps {
  onSelectProblem: (problem: Problem) => void;
}

const AVATAR_OPTIONS = [
  { id: 'coder', emoji: '👨‍💻', label: 'Coder' },
  { id: 'ninja', emoji: '🥷', label: 'Ninja' },
  { id: 'wizard', emoji: '🧙‍♂️', label: 'Wizard' },
  { id: 'knight', emoji: '🛡️', label: 'Knight' },
  { id: 'hacker', emoji: '💻', label: 'Hacker' },
  { id: 'crown', emoji: '👑', label: 'Champion' },
  { id: 'fire', emoji: '🔥', label: 'Fire' },
  { id: 'lightning', emoji: '⚡', label: 'Bolt' },
  { id: 'robot', emoji: '🤖', label: 'Bot' },
];

export const ProfilePage: React.FC<ProfilePageProps> = ({ onSelectProblem }) => {
  const { problems } = useProblem();
  const { user, isGuest } = useAuth();

  const [profile, setProfile] = useState<UserProfile>(userProfileService.getProfile());
  const [stats, setStats] = useState<UserStats | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState<UserProfile>(profile);
  const [recentSubmissions, setRecentSubmissions] = useState<CodeSubmission[]>([]);
  const [savedSuccess, setSavedSuccess] = useState(false);

  useEffect(() => {
    const updateData = () => {
      userStatsService.getStats(user?.id || null).then(setStats);
      const p = userProfileService.getProfile(user?.id || null);
      setProfile(p);
      setEditForm(p);
      const subs = submissionService.getAllSubmissions(user?.id || null);
      setRecentSubmissions(subs);
    };
    updateData();
    window.addEventListener('codetutor_status_synced', updateData);
    return () => window.removeEventListener('codetutor_status_synced', updateData);
  }, [user?.id]);

  const [isResetting, setIsResetting] = useState(false);
  const [resetMessage, setResetMessage] = useState<string | null>(null);

  const handleResetAll = async () => {
    if (!window.confirm('Are you sure you want to reset all progress, solved questions, streaks, and XP to 0? This will start everything fresh from 0.')) {
      return;
    }
    setIsResetting(true);
    try {
      const res = await resetAllRegisteredUsersData();
      setResetMessage(res.message);
      setTimeout(() => setResetMessage(null), 4000);
      const s = await userStatsService.getStats(user?.id || null);
      setStats(s);
      setRecentSubmissions([]);
    } finally {
      setIsResetting(false);
    }
  };

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    const updated = userProfileService.saveProfile(editForm, user?.id || null);
    setProfile(updated);
    setIsEditing(false);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  const getAvatarEmoji = (avatarId: string) => {
    const found = AVATAR_OPTIONS.find((a) => a.id === avatarId);
    return found ? found.emoji : '👨‍💻';
  };

  const totalProblemsCount = problems.length || 500;
  const easyTotal = problems.filter((p) => p.difficulty === 'Easy').length || 1;
  const mediumTotal = problems.filter((p) => p.difficulty === 'Medium').length || 1;
  const hardTotal = problems.filter((p) => p.difficulty === 'Hard').length || 1;

  const easySolved = problems.filter((p) => p.difficulty === 'Easy' && p.status === 'solved').length;
  const mediumSolved = problems.filter((p) => p.difficulty === 'Medium' && p.status === 'solved').length;
  const hardSolved = problems.filter((p) => p.difficulty === 'Hard' && p.status === 'solved').length;
  const totalSolved = easySolved + mediumSolved + hardSolved;

  // Topic Breakdown counts (52 Modules)
  const books = [
    { key: 'patterns', label: 'Patterns & Matrices', count: problems.filter((p) => p.book === 'patterns').length || 1, solved: problems.filter((p) => p.book === 'patterns' && p.status === 'solved').length },
    { key: 'loops', label: 'Loops & Iterations', count: problems.filter((p) => p.book === 'loops').length || 1, solved: problems.filter((p) => p.book === 'loops' && p.status === 'solved').length },
    { key: 'variables', label: 'Variables & Logic', count: problems.filter((p) => p.book === 'variables').length || 1, solved: problems.filter((p) => p.book === 'variables' && p.status === 'solved').length },
    { key: 'datatypes', label: 'Data Types & Memory', count: problems.filter((p) => p.book === 'datatypes').length || 1, solved: problems.filter((p) => p.book === 'datatypes' && p.status === 'solved').length },
    { key: 'userinput', label: 'User Input & Streams', count: problems.filter((p) => p.book === 'userinput').length || 1, solved: problems.filter((p) => p.book === 'userinput' && p.status === 'solved').length },
    { key: 'operators', label: 'Operators & Expressions', count: problems.filter((p) => p.book === 'operators').length || 1, solved: problems.filter((p) => p.book === 'operators' && p.status === 'solved').length },
    { key: 'strings', label: 'Strings & Text Analysis', count: problems.filter((p) => p.book === 'strings').length || 1, solved: problems.filter((p) => p.book === 'strings' && p.status === 'solved').length },
    { key: 'math', label: 'Math & <cmath> Mastery', count: problems.filter((p) => p.book === 'math').length || 1, solved: problems.filter((p) => p.book === 'math' && p.status === 'solved').length },
    { key: 'booleans', label: 'Booleans & Logic Gates', count: problems.filter((p) => p.book === 'booleans').length || 1, solved: problems.filter((p) => p.book === 'booleans' && p.status === 'solved').length },
    { key: 'ifelse', label: 'If...Else Branching', count: problems.filter((p) => p.book === 'ifelse').length || 1, solved: problems.filter((p) => p.book === 'ifelse' && p.status === 'solved').length },
    { key: 'switch', label: 'Switch & Menu Systems', count: problems.filter((p) => p.book === 'switch').length || 1, solved: problems.filter((p) => p.book === 'switch' && p.status === 'solved').length },
    { key: 'whileloop', label: 'While Loop & Number Algorithms', count: problems.filter((p) => p.book === 'whileloop').length || 1, solved: problems.filter((p) => p.book === 'whileloop' && p.status === 'solved').length },
    { key: 'forloop', label: 'For Loop & Array Algorithms', count: problems.filter((p) => p.book === 'forloop').length || 1, solved: problems.filter((p) => p.book === 'forloop' && p.status === 'solved').length },
    { key: 'breakcontinue', label: 'Break, Continue & Flow', count: problems.filter((p) => p.book === 'breakcontinue').length || 1, solved: problems.filter((p) => p.book === 'breakcontinue' && p.status === 'solved').length },
    { key: 'arrays', label: 'Arrays & 2D Matrices', count: problems.filter((p) => p.book === 'arrays').length || 1, solved: problems.filter((p) => p.book === 'arrays' && p.status === 'solved').length },
    { key: 'structures', label: 'Structures & Data Models', count: problems.filter((p) => p.book === 'structures').length || 1, solved: problems.filter((p) => p.book === 'structures' && p.status === 'solved').length },
    { key: 'enums', label: 'Enums & Type Safety', count: problems.filter((p) => p.book === 'enums').length || 1, solved: problems.filter((p) => p.book === 'enums' && p.status === 'solved').length },
    { key: 'references', label: 'References & Aliasing', count: problems.filter((p) => p.book === 'references').length || 1, solved: problems.filter((p) => p.book === 'references' && p.status === 'solved').length },
    { key: 'pointers', label: 'Pointers & Dynamic Memory', count: problems.filter((p) => p.book === 'pointers').length || 1, solved: problems.filter((p) => p.book === 'pointers' && p.status === 'solved').length },
    { key: 'memorymgmt', label: 'Memory Mgmt (new/delete)', count: problems.filter((p) => p.book === 'memorymgmt').length || 1, solved: problems.filter((p) => p.book === 'memorymgmt' && p.status === 'solved').length },
    { key: 'functions', label: 'Functions & Modular Design', count: problems.filter((p) => p.book === 'functions').length || 1, solved: problems.filter((p) => p.book === 'functions' && p.status === 'solved').length },
    { key: 'funcparams', label: 'Function Parameters & Return', count: problems.filter((p) => p.book === 'funcparams').length || 1, solved: problems.filter((p) => p.book === 'funcparams' && p.status === 'solved').length },
    { key: 'funcoverloading', label: 'Function Overloading', count: problems.filter((p) => p.book === 'funcoverloading').length || 1, solved: problems.filter((p) => p.book === 'funcoverloading' && p.status === 'solved').length },
    { key: 'scope', label: 'Scope & Variable Lifetime', count: problems.filter((p) => p.book === 'scope').length || 1, solved: problems.filter((p) => p.book === 'scope' && p.status === 'solved').length },
    { key: 'recursion', label: 'Recursion & Call Stack', count: problems.filter((p) => p.book === 'recursion').length || 1, solved: problems.filter((p) => p.book === 'recursion' && p.status === 'solved').length },
    { key: 'lambda', label: 'Lambda Expressions & Closures', count: problems.filter((p) => p.book === 'lambda').length || 1, solved: problems.filter((p) => p.book === 'lambda' && p.status === 'solved').length },
    { key: 'cppoop', label: 'C++ OOP Principles & Modeling', count: problems.filter((p) => p.book === 'cppoop').length || 1, solved: problems.filter((p) => p.book === 'cppoop' && p.status === 'solved').length },
    { key: 'classesobjects', label: 'Classes & Objects Instantiation', count: problems.filter((p) => p.book === 'classesobjects').length || 1, solved: problems.filter((p) => p.book === 'classesobjects' && p.status === 'solved').length },
    { key: 'classmethods', label: 'Class Methods & Member Functions', count: problems.filter((p) => p.book === 'classmethods').length || 1, solved: problems.filter((p) => p.book === 'classmethods' && p.status === 'solved').length },
    { key: 'constructors', label: 'Constructors, RAII & Destructors', count: problems.filter((p) => p.book === 'constructors').length || 1, solved: problems.filter((p) => p.book === 'constructors' && p.status === 'solved').length },
    { key: 'accessspecifiers', label: 'Access Specifiers (public/private)', count: problems.filter((p) => p.book === 'accessspecifiers').length || 1, solved: problems.filter((p) => p.book === 'accessspecifiers' && p.status === 'solved').length },
    { key: 'encapsulation', label: 'Encapsulation & Data Invariants', count: problems.filter((p) => p.book === 'encapsulation').length || 1, solved: problems.filter((p) => p.book === 'encapsulation' && p.status === 'solved').length },
    { key: 'friendfunctions', label: 'Friend Functions & Friend Classes', count: problems.filter((p) => p.book === 'friendfunctions').length || 1, solved: problems.filter((p) => p.book === 'friendfunctions' && p.status === 'solved').length },
    { key: 'inheritance', label: 'Inheritance & Class Hierarchies', count: problems.filter((p) => p.book === 'inheritance').length || 1, solved: problems.filter((p) => p.book === 'inheritance' && p.status === 'solved').length },
    { key: 'polymorphism', label: 'Polymorphism & Operator Overload', count: problems.filter((p) => p.book === 'polymorphism').length || 1, solved: problems.filter((p) => p.book === 'polymorphism' && p.status === 'solved').length },
    { key: 'templates', label: 'Templates & Generic Programming', count: problems.filter((p) => p.book === 'templates').length || 1, solved: problems.filter((p) => p.book === 'templates' && p.status === 'solved').length },
    { key: 'files', label: 'File I/O Streams (<fstream>)', count: problems.filter((p) => p.book === 'files').length || 1, solved: problems.filter((p) => p.book === 'files' && p.status === 'solved').length },
    { key: 'cppdate', label: 'Date, Time & <chrono> Engine', count: problems.filter((p) => p.book === 'cppdate').length || 1, solved: problems.filter((p) => p.book === 'cppdate' && p.status === 'solved').length },
    { key: 'cpperrors', label: 'C++ Errors & Compilation', count: problems.filter((p) => p.book === 'cpperrors').length || 1, solved: problems.filter((p) => p.book === 'cpperrors' && p.status === 'solved').length },
    { key: 'cppdebugging', label: 'C++ Debugging & Diagnosis', count: problems.filter((p) => p.book === 'cppdebugging').length || 1, solved: problems.filter((p) => p.book === 'cppdebugging' && p.status === 'solved').length },
    { key: 'cppexceptions', label: 'C++ Exceptions & Error Handling', count: problems.filter((p) => p.book === 'cppexceptions').length || 1, solved: problems.filter((p) => p.book === 'cppexceptions' && p.status === 'solved').length },
    { key: 'inputvalidation', label: 'Input Validation & Guard Rails', count: problems.filter((p) => p.book === 'inputvalidation').length || 1, solved: problems.filter((p) => p.book === 'inputvalidation' && p.status === 'solved').length },
    { key: 'datastructuresstl', label: 'Data Structures & STL Basics', count: problems.filter((p) => p.book === 'datastructuresstl').length || 1, solved: problems.filter((p) => p.book === 'datastructuresstl' && p.status === 'solved').length },
    { key: 'vectors', label: 'C++ Vectors & Dynamic Arrays', count: problems.filter((p) => p.book === 'vectors').length || 1, solved: problems.filter((p) => p.book === 'vectors' && p.status === 'solved').length },
    { key: 'cpplist', label: 'C++ Doubly Linked Lists (std::list)', count: problems.filter((p) => p.book === 'cpplist').length || 1, solved: problems.filter((p) => p.book === 'cpplist' && p.status === 'solved').length },
    { key: 'stacks', label: 'C++ Stacks (std::stack / LIFO)', count: problems.filter((p) => p.book === 'stacks').length || 1, solved: problems.filter((p) => p.book === 'stacks' && p.status === 'solved').length },
    { key: 'queues', label: 'C++ Queues (std::queue / FIFO)', count: problems.filter((p) => p.book === 'queues').length || 1, solved: problems.filter((p) => p.book === 'queues' && p.status === 'solved').length },
    { key: 'cppdeque', label: 'C++ Double-Ended Queues (std::deque)', count: problems.filter((p) => p.book === 'cppdeque').length || 1, solved: problems.filter((p) => p.book === 'cppdeque' && p.status === 'solved').length },
    { key: 'sets', label: 'C++ Sets & Ordered/Unordered Sets', count: problems.filter((p) => p.book === 'sets').length || 1, solved: problems.filter((p) => p.book === 'sets' && p.status === 'solved').length },
    { key: 'maps', label: 'C++ Maps & Key-Value Lookup', count: problems.filter((p) => p.book === 'maps').length || 1, solved: problems.filter((p) => p.book === 'maps' && p.status === 'solved').length },
    { key: 'iterators', label: 'C++ Iterators & Pointer Traversal', count: problems.filter((p) => p.book === 'iterators').length || 1, solved: problems.filter((p) => p.book === 'iterators' && p.status === 'solved').length },
    { key: 'algorithms', label: 'C++ STL Algorithms (<algorithm>)', count: problems.filter((p) => p.book === 'algorithms').length || 1, solved: problems.filter((p) => p.book === 'algorithms' && p.status === 'solved').length },
  ];

  // Generate last 14 days activity list for streak calendar visualization
  const last14Days = Array.from({ length: 14 }).map((_, i) => {
    const d = new Date();
    d.setDate(d.getDate() - (13 - i));
    const dateStr = d.toISOString().split('T')[0];
    const dayName = d.toLocaleDateString('en-US', { weekday: 'narrow' });
    const isActive = stats?.active_dates?.includes(dateStr) || (i === 13 && (stats?.current_streak || 0) > 0);
    return { dateStr, dayName, isActive };
  });

  const masteryRank = (stats?.total_xp || 0) >= 5000 
    ? 'Grandmaster 🏆' 
    : (stats?.total_xp || 0) >= 2500 
    ? 'Knight 🛡️' 
    : (stats?.total_xp || 0) >= 1000 
    ? 'Expert 🌟' 
    : (stats?.total_xp || 0) >= 300 
    ? 'Aspirant 🚀' 
    : 'Novice 🌱';

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8 space-y-8 animate-fadeIn">
      {/* Profile Header Card */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#0d1322] via-[#142138] to-[#0f172a] border border-slate-800 shadow-2xl relative overflow-hidden">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
            {/* User Avatar */}
            <div className="relative group">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-gradient-to-tr from-emerald-500 via-teal-400 to-indigo-500 p-1 shadow-xl flex items-center justify-center">
                <div className="w-full h-full bg-[#0d1322] rounded-[22px] flex items-center justify-center text-4xl sm:text-5xl shadow-inner">
                  {getAvatarEmoji(profile.avatar)}
                </div>
              </div>
              <button
                onClick={() => setIsEditing(true)}
                title="Edit avatar & details"
                className="absolute -bottom-1 -right-1 p-1.5 rounded-full bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition shadow"
              >
                <Edit3 className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Name, Email, Rank Details */}
            <div className="space-y-1">
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  {profile.display_name}
                </h1>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-mono font-bold">
                  {masteryRank}
                </span>
                {isGuest && (
                  <span className="text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-400 font-mono">
                    Guest Mode
                  </span>
                )}
              </div>

              <div className="text-xs text-slate-400 font-mono flex flex-wrap items-center justify-center sm:justify-start gap-2">
                <span className="text-indigo-300 font-semibold">@{profile.username}</span>
                <span>•</span>
                <span>{user?.email || 'guest_learner@ai-dsa.local'}</span>
                <span>•</span>
                <span className="text-slate-500">Joined {profile.joined_date}</span>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 pt-1 max-w-xl italic">
                "{profile.bio}"
              </p>
            </div>
          </div>

          {/* Action Buttons: Reset All & Edit Profile */}
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            {savedSuccess && (
              <span className="text-xs text-emerald-400 font-medium flex items-center gap-1">
                <Check className="w-4 h-4" /> Profile Updated!
              </span>
            )}
            {resetMessage && (
              <span className="text-xs text-amber-400 font-medium flex items-center gap-1 animate-fadeIn">
                <Check className="w-4 h-4" /> {resetMessage}
              </span>
            )}
            
            <button
              onClick={handleResetAll}
              disabled={isResetting}
              title="Reset all progress and start fresh from 0"
              className="w-full sm:w-auto px-3.5 py-2.5 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 border border-rose-500/30 text-xs font-bold flex items-center justify-center gap-1.5 transition cursor-pointer"
            >
              <RotateCcw className={`w-3.5 h-3.5 text-rose-400 ${isResetting ? 'animate-spin' : ''}`} />
              <span>{isResetting ? 'Resetting...' : 'Reset All to 0'}</span>
            </button>

            <button
              onClick={() => {
                setEditForm(profile);
                setIsEditing(!isEditing);
              }}
              className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold flex items-center justify-center gap-2 border border-slate-700 transition cursor-pointer"
            >
              <Edit3 className="w-4 h-4 text-emerald-400" />
              <span>{isEditing ? 'Cancel Edit' : 'Edit Profile'}</span>
            </button>
          </div>
        </div>

        {/* Edit Modal / Form Collapse */}
        {isEditing && (
          <form onSubmit={handleSaveProfile} className="mt-6 pt-6 border-t border-slate-800/80 space-y-4 animate-fadeIn">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <User className="w-4 h-4 text-emerald-400" />
              Customize Profile & Target Goal
            </h3>

            {/* Avatar Selection Row */}
            <div>
              <label className="block text-xs font-medium text-slate-400 mb-2">Choose Avatar:</label>
              <div className="flex flex-wrap gap-2">
                {AVATAR_OPTIONS.map((av) => (
                  <button
                    key={av.id}
                    type="button"
                    onClick={() => setEditForm({ ...editForm, avatar: av.id })}
                    className={`px-3 py-2 rounded-xl flex items-center gap-2 text-sm border transition ${
                      editForm.avatar === av.id
                        ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300 scale-105 shadow-md'
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:bg-slate-800'
                    }`}
                  >
                    <span>{av.emoji}</span>
                    <span className="text-xs font-medium">{av.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Input Fields Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              <div>
                <label className="block text-xs text-slate-400 mb-1">Display Name</label>
                <input
                  type="text"
                  required
                  value={editForm.display_name}
                  onChange={(e) => setEditForm({ ...editForm, display_name: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block text-xs text-slate-400 mb-1">Username Handle</label>
                <input
                  type="text"
                  required
                  value={editForm.username}
                  onChange={(e) => setEditForm({ ...editForm, username: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-emerald-500 font-mono"
                />
              </div>

              <div>
                <label className="block text-xs text-slate-400 mb-1">College / Organization</label>
                <input
                  type="text"
                  value={editForm.institution}
                  onChange={(e) => setEditForm({ ...editForm, institution: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block text-xs text-slate-400 mb-1">Daily Goal (Problems / Day)</label>
                <input
                  type="number"
                  min={1}
                  max={50}
                  value={editForm.target_daily_problems}
                  onChange={(e) => setEditForm({ ...editForm, target_daily_problems: parseInt(e.target.value, 10) || 1 })}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-emerald-500 font-mono"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs text-slate-400 mb-1">Bio / Coding Philosophy</label>
                <input
                  type="text"
                  value={editForm.bio}
                  onChange={(e) => setEditForm({ ...editForm, bio: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-emerald-500"
                />
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 text-xs font-semibold hover:bg-slate-700"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold shadow-md shadow-emerald-500/20"
              >
                Save Changes
              </button>
            </div>
          </form>
        )}
      </div>

      {/* Core Key Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Practice Streak Card */}
        <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 flex items-center gap-4 shadow-lg">
          <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
            <Flame className="w-7 h-7 fill-amber-400/20 text-amber-400" />
          </div>
          <div>
            <div className="text-xs text-slate-400 font-medium">Practice Streak</div>
            <div className="text-2xl font-black text-white flex items-baseline gap-1">
              <span>{stats?.current_streak || 0}</span>
              <span className="text-xs font-bold text-amber-400">Days 🔥</span>
            </div>
            <div className="text-[10px] text-slate-500 font-mono mt-0.5">
              Best Streak: {stats?.best_streak || stats?.current_streak || 0} days
            </div>
          </div>
        </div>

        {/* Total XP / Points */}
        <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 flex items-center gap-4 shadow-lg">
          <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
            <Zap className="w-7 h-7" />
          </div>
          <div>
            <div className="text-xs text-slate-400 font-medium">Total XP Points</div>
            <div className="text-2xl font-black text-amber-400">
              {(stats?.total_xp || 0).toLocaleString()}
            </div>
            <div className="text-[10px] text-slate-500 font-mono mt-0.5">
              +{stats?.revision_bonus_xp || 0} Revision Bonus
            </div>
          </div>
        </div>

        {/* Solved Problems */}
        <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 flex items-center gap-4 shadow-lg">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
            <CheckCircle2 className="w-7 h-7" />
          </div>
          <div>
            <div className="text-xs text-slate-400 font-medium">Problems Solved</div>
            <div className="text-2xl font-black text-white flex items-baseline gap-1">
              <span>{totalSolved}</span>
              <span className="text-xs font-normal text-slate-500">/ {totalProblemsCount}</span>
            </div>
            <div className="text-[10px] text-emerald-400 font-mono mt-0.5">
              {Math.round((totalSolved / totalProblemsCount) * 100)}% completed
            </div>
          </div>
        </div>

        {/* Daily Goal Progress */}
        <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 flex items-center gap-4 shadow-lg">
          <div className="w-12 h-12 rounded-2xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 shrink-0">
            <Target className="w-7 h-7" />
          </div>
          <div>
            <div className="text-xs text-slate-400 font-medium">Daily Goal</div>
            <div className="text-2xl font-black text-teal-300">
              {profile.target_daily_problems} <span className="text-xs font-normal text-slate-400">/ day</span>
            </div>
            <div className="text-[10px] text-slate-500 font-mono mt-0.5">
              Keep solving daily to maintain streak!
            </div>
          </div>
        </div>
      </div>

      {/* Streak Calendar / Activity Momentum */}
      <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-4 shadow-xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-amber-400" />
            <h3 className="text-sm font-bold text-white">14-Day Streak Momentum Calendar</h3>
          </div>
          <span className="text-xs text-slate-400 font-mono">Last Active: {stats?.last_active_date || 'Today'}</span>
        </div>

        <div className="grid grid-cols-7 sm:grid-cols-14 gap-2 pt-2">
          {last14Days.map((d) => (
            <div
              key={d.dateStr}
              title={`${d.dateStr}: ${d.isActive ? 'Active Problem Solving Day 🔥' : 'Inactive'}`}
              className={`p-2.5 rounded-xl border flex flex-col items-center justify-center gap-1 transition ${
                d.isActive
                  ? 'bg-amber-500/15 border-amber-500/40 text-amber-300 shadow-sm'
                  : 'bg-slate-950/60 border-slate-800/80 text-slate-500'
              }`}
            >
              <span className="text-[10px] font-mono uppercase">{d.dayName}</span>
              <div className="w-5 h-5 rounded-full flex items-center justify-center">
                {d.isActive ? (
                  <Flame className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ) : (
                  <div className="w-2 h-2 rounded-full bg-slate-800" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Difficulty Breakdown & Topic Mastery Dual Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Difficulty Breakdown */}
        <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-5 shadow-xl">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-emerald-400" />
              Difficulty Mastery
            </h3>
            <span className="text-xs text-slate-400 font-mono">{totalSolved} Solved Total</span>
          </div>

          <div className="space-y-4">
            {/* Easy */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-emerald-400">Easy (10 XP)</span>
                <span className="font-mono text-slate-300">{easySolved} / {easyTotal}</span>
              </div>
              <div className="w-full h-2.5 bg-slate-950 rounded-full overflow-hidden border border-slate-800">
                <div
                  className="h-full bg-emerald-400 rounded-full transition-all duration-500"
                  style={{ width: `${Math.min(100, (easySolved / easyTotal) * 100)}%` }}
                />
              </div>
            </div>

            {/* Medium */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-amber-400">Medium (25 XP)</span>
                <span className="font-mono text-slate-300">{mediumSolved} / {mediumTotal}</span>
              </div>
              <div className="w-full h-2.5 bg-slate-950 rounded-full overflow-hidden border border-slate-800">
                <div
                  className="h-full bg-amber-400 rounded-full transition-all duration-500"
                  style={{ width: `${Math.min(100, (mediumSolved / mediumTotal) * 100)}%` }}
                />
              </div>
            </div>

            {/* Hard */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-rose-400">Hard (50 XP)</span>
                <span className="font-mono text-slate-300">{hardSolved} / {hardTotal}</span>
              </div>
              <div className="w-full h-2.5 bg-slate-950 rounded-full overflow-hidden border border-slate-800">
                <div
                  className="h-full bg-rose-400 rounded-full transition-all duration-500"
                  style={{ width: `${Math.min(100, (hardSolved / hardTotal) * 100)}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Topic / Book Mastery */}
        <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-4 shadow-xl">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-indigo-400" />
              Book & Topic Progress
            </h3>
            <span className="text-xs text-slate-400">5 Curated Books</span>
          </div>

          <div className="space-y-3">
            {books.map((b) => {
              const pct = Math.min(100, Math.round((b.solved / (b.count || 1)) * 100));
              return (
                <div key={b.key} className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-medium text-slate-300">{b.label}</span>
                    <span className="font-mono text-slate-400 text-[11px]">{b.solved} / {b.count} ({pct}%)</span>
                  </div>
                  <div className="w-full h-2 bg-slate-950 rounded-full overflow-hidden border border-slate-800/80">
                    <div
                      className="h-full bg-indigo-500 rounded-full transition-all duration-500"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Recent Submissions History Table */}
      <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-4 shadow-xl">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-white flex items-center gap-2">
            <Clock className="w-4 h-4 text-emerald-400" />
            Recent Problem Solves & Submissions
          </h3>
          <span className="text-xs text-slate-400 font-mono">{recentSubmissions.length} recorded</span>
        </div>

        {recentSubmissions.length === 0 ? (
          <div className="p-8 text-center text-slate-500 text-xs">
            No submissions recorded yet. Start solving problems in the Workspace!
          </div>
        ) : (
          <div className="divide-y divide-slate-800/80">
            {recentSubmissions.slice(0, 8).map((sub) => {
              const matchedProblem = problems.find((p) => p.id === sub.problem_id);
              const isAccepted = sub.status === 'accepted';

              return (
                <div
                  key={sub.id}
                  onClick={() => matchedProblem && onSelectProblem(matchedProblem)}
                  className="py-3.5 flex items-center justify-between gap-4 hover:bg-slate-800/40 px-2 rounded-xl transition cursor-pointer"
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
                        <span>{new Date(sub.created_at).toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                  <span
                    className={`text-[11px] px-2.5 py-0.5 rounded-full font-mono shrink-0 ${
                      isAccepted
                        ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-bold'
                        : 'bg-slate-800 text-slate-400 border border-slate-700'
                    }`}
                  >
                    {sub.status}
                  </span>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
