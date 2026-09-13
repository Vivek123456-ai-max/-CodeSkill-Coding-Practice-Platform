import React, { useState, useEffect, useRef } from 'react';
import Editor, { OnMount } from '@monaco-editor/react';
import { useAuth } from '../context/AuthContext';
import { Problem, SupportedLanguage } from '../types/problem';
import { BattleRoom, BattlePlayer } from '../types/battle';
import { battleService } from '../lib/battleService';
import { userStatsService } from '../lib/supabase';
import { evaluateCodeAgainstTestCases, ExecutionResult } from '../lib/codeExecution';
import { 
  Swords, 
  Users, 
  Clock, 
  Trophy, 
  Zap, 
  Play, 
  Send, 
  Copy, 
  Check, 
  RotateCcw, 
  CheckCircle2, 
  XCircle, 
  AlertCircle, 
  Loader2, 
  Sparkles, 
  BookOpen, 
  Terminal, 
  Share2, 
  ArrowRight,
  Shield,
  Flame,
  Radio,
  X
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface BattleArenaPageProps {
  onOpenAuthModal?: () => void;
  initialRoomCode?: string | null;
}

export const BattleArenaPage: React.FC<BattleArenaPageProps> = ({ onOpenAuthModal, initialRoomCode }) => {
  const { user } = useAuth();
  
  // Lobby states
  const [roomCodeInput, setRoomCodeInput] = useState(initialRoomCode || '');
  const [selectedDifficulty, setSelectedDifficulty] = useState<'Easy' | 'Medium' | 'Hard'>('Easy');
  const [selectedTopic, setSelectedTopic] = useState<string>('all');
  const [openRooms, setOpenRooms] = useState<BattleRoom[]>([]);
  const [lobbyError, setLobbyError] = useState<string | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);

  // Active Battle states
  const [currentRoom, setCurrentRoom] = useState<BattleRoom | null>(null);
  const [language, setLanguage] = useState<SupportedLanguage>('cpp');
  const [code, setCode] = useState<string>('');
  const [timeLeft, setTimeLeft] = useState<number>(900); // 15 mins
  const [isRunning, setIsRunning] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [executionResult, setExecutionResult] = useState<ExecutionResult | null>(null);
  const [mobileTab, setMobileTab] = useState<'problem' | 'editor' | 'opponent' | 'console'>('editor');
  const [showResultModal, setShowResultModal] = useState(false);

  const editorRef = useRef<any>(null);

  // Load active open rooms in lobby with auto-refresh + cross-user Supabase DB
  useEffect(() => {
    if (!currentRoom) {
      const refreshRooms = async () => {
        const rooms = await battleService.listOpenRoomsAsync();
        setOpenRooms(rooms);
      };
      refreshRooms();

      // Poll every 3s from Supabase DB
      const interval = setInterval(refreshRooms, 3000);

      // Subscribe to lobby for instant cross-user updates
      const unsubLobby = battleService.subscribeLobby(() => {
        refreshRooms();
      });

      return () => {
        clearInterval(interval);
        unsubLobby();
      };
    }
  }, [currentRoom]);

  // If initialRoomCode provided in URL, auto-join
  useEffect(() => {
    if (initialRoomCode && user && !currentRoom) {
      handleJoinRoom(initialRoomCode);
    }
  }, [initialRoomCode, user]);

  // Active room heartbeat & cleanup on tab close / navigate away
  useEffect(() => {
    if (!currentRoom || currentRoom.status === 'finished' || currentRoom.status === 'abandoned') return;

    // Send instant heartbeat
    battleService.sendHeartbeat(currentRoom.id);

    // Heartbeat every 2 seconds
    const heartbeatTimer = setInterval(() => {
      battleService.sendHeartbeat(currentRoom.id);
    }, 2000);

    const handleBeforeUnload = () => {
      if (currentRoom.hostUserId === user?.id && currentRoom.status === 'waiting') {
        battleService.deleteRoom(currentRoom.id);
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      clearInterval(heartbeatTimer);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [currentRoom?.id, currentRoom?.status, currentRoom?.hostUserId, user?.id]);

  // Real-time battle subscription listener
  useEffect(() => {
    if (!currentRoom) return;

    const unsubscribe = battleService.subscribeToRoom(currentRoom.id, (updatedRoom) => {
      if (updatedRoom.status === 'abandoned') {
        setCurrentRoom(null);
        setLobbyError('The battle room was closed or the host left.');
        return;
      }

      setCurrentRoom(updatedRoom);

      // Check if finished
      if (updatedRoom.status === 'finished' && !showResultModal) {
        setShowResultModal(true);
        if (updatedRoom.winnerUserId === user?.id) {
          confetti({
            particleCount: 200,
            spread: 120,
            origin: { y: 0.6 }
          });
          // Award Winner XP
          if (user) {
            userStatsService.recordRevisionSolve(updatedRoom.problem.id, 'Hard', user.id);
          }
        }
      }
    });

    return () => unsubscribe();
  }, [currentRoom?.id, user?.id, showResultModal]);

  // Battle countdown timer
  useEffect(() => {
    if (currentRoom && currentRoom.status === 'in_progress') {
      const timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [currentRoom?.status]);

  // When room loads or changes, init template
  useEffect(() => {
    if (currentRoom?.problem) {
      const tpl = currentRoom.problem.starter_templates?.[language] || currentRoom.problem.starter_templates?.['cpp'] || '// Write solution\n';
      setCode(tpl);
      if (editorRef.current) {
        editorRef.current.setValue(tpl);
      }
    }
  }, [currentRoom?.id, language]);

  const handleCreateRoom = () => {
    if (!user) {
      onOpenAuthModal?.();
      return;
    }
    setLobbyError(null);
    const room = battleService.createRoom(
      { id: user.id, email: user.email, displayName: user.email?.split('@')[0] },
      selectedDifficulty,
      selectedTopic
    );
    setCurrentRoom(room);
    setTimeLeft(room.durationSeconds);
  };

  const handleJoinRoom = async (codeToJoin?: string) => {
    if (!user) {
      onOpenAuthModal?.();
      return;
    }
    const targetCode = (codeToJoin || roomCodeInput).trim().toUpperCase();
    if (!targetCode) {
      setLobbyError('Please enter a valid 6-character room code.');
      return;
    }
    setLobbyError(null);
    const res = await battleService.joinRoom(targetCode, {
      id: user.id,
      email: user.email,
      displayName: user.email?.split('@')[0]
    });

    if (res.success && res.room) {
      setCurrentRoom(res.room);
      setTimeLeft(res.room.durationSeconds);
    } else {
      setLobbyError(res.error || 'Failed to join room.');
    }
  };

  const handleQuickMatch = async () => {
    if (!user) {
      onOpenAuthModal?.();
      return;
    }
    const open = await battleService.listOpenRoomsAsync();
    const available = open.find((r) => r.hostUserId !== user.id);
    if (available) {
      await handleJoinRoom(available.id);
    } else {
      handleCreateRoom();
    }
  };

  const handleLeaveBattle = () => {
    if (currentRoom) {
      if (currentRoom.hostUserId === user?.id) {
        battleService.deleteRoom(currentRoom.id);
      }
      setCurrentRoom(null);
    }
  };

  const handleCopyInviteLink = () => {
    if (!currentRoom) return;
    navigator.clipboard.writeText(currentRoom.id);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  // Run test cases & sync progress to opponent
  const handleRunCode = async () => {
    if (!currentRoom || !user) return;
    const currentCode = editorRef.current ? editorRef.current.getValue() : code;
    setIsRunning(true);
    setMobileTab('console');

    try {
      const result = await evaluateCodeAgainstTestCases(
        language,
        currentCode,
        currentRoom.problem.sample_test_cases || []
      );
      setExecutionResult(result);

      // Broadcast progress to opponent in real-time
      const updated = battleService.updatePlayerProgress(
        currentRoom.id,
        user.id,
        result.passedCount,
        result.totalCount,
        'coding',
        language,
        result.timeMs
      );
      if (updated) setCurrentRoom(updated);
    } catch (e) {
      console.error('PvP Run error:', e);
    } finally {
      setIsRunning(false);
    }
  };

  // Submit code for grading & victory check
  const handleSubmitCode = async () => {
    if (!currentRoom || !user) return;
    const currentCode = editorRef.current ? editorRef.current.getValue() : code;
    setIsSubmitting(true);
    setMobileTab('console');

    try {
      const result = await evaluateCodeAgainstTestCases(
        language,
        currentCode,
        currentRoom.problem.sample_test_cases || []
      );
      setExecutionResult(result);

      const status = result.status === 'accepted' ? 'won' : 'submitted';
      const updated = battleService.updatePlayerProgress(
        currentRoom.id,
        user.id,
        result.passedCount,
        result.totalCount,
        status,
        language,
        result.timeMs
      );

      if (updated) {
        setCurrentRoom(updated);
        if (result.status === 'accepted') {
          setShowResultModal(true);
          confetti({
            particleCount: 200,
            spread: 120,
            origin: { y: 0.6 }
          });
          userStatsService.recordRevisionSolve(currentRoom.problem.id, 'Hard', user.id);
        }
      }
    } catch (e) {
      console.error('PvP Submit error:', e);
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatTimer = (secs: number) => {
    const mins = Math.floor(secs / 60).toString().padStart(2, '0');
    const remaining = (secs % 60).toString().padStart(2, '0');
    return `${mins}:${remaining}`;
  };

  const isHost = currentRoom?.hostUserId === user?.id;
  const myPlayer: BattlePlayer | undefined = isHost ? currentRoom?.host : currentRoom?.opponent || undefined;
  const opponentPlayer: BattlePlayer | undefined = isHost ? currentRoom?.opponent || undefined : currentRoom?.host;

  // LOBBY VIEW
  if (!currentRoom) {
    return (
      <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8 space-y-8 animate-fadeIn">
        {/* Banner Header */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#1a0f2e] via-[#161f38] to-[#0f172a] border border-fuchsia-500/20 shadow-2xl relative overflow-hidden">
          <div className="absolute -top-16 -right-16 w-80 h-80 bg-fuchsia-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/30 text-fuchsia-400 font-mono text-xs font-semibold">
                <Swords className="w-3.5 h-3.5" />
                <span>Real-Time 1v1 PvP Duel</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight flex items-center gap-2">
                Code Battle Arena ⚔️
              </h1>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                Challenge your friends or compete head-to-head with registered coders worldwide in real-time. Solve the problem fastest to take the crown!
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handleQuickMatch}
                className="px-6 py-3 rounded-2xl bg-gradient-to-r from-fuchsia-500 to-indigo-500 hover:from-fuchsia-400 hover:to-indigo-400 text-white text-xs font-extrabold flex items-center gap-2 shadow-lg shadow-fuchsia-500/20 active:scale-95 transition cursor-pointer"
              >
                <Zap className="w-4 h-4" />
                <span>Quick Matchmaking ⚡</span>
              </button>
            </div>
          </div>
        </div>

        {lobbyError && (
          <div className="p-4 rounded-xl bg-rose-500/15 border border-rose-500/40 text-rose-300 text-xs font-bold flex items-center gap-2 animate-fadeIn">
            <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
            <span>{lobbyError}</span>
          </div>
        )}

        {/* Lobby Actions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Create Room Card */}
          <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-5 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-fuchsia-500/10 border border-fuchsia-500/30 flex items-center justify-center text-fuchsia-400 shadow-inner">
                <Swords className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Create Custom Battle Room</h3>
                <p className="text-xs text-slate-400 mt-1">
                  Generate a private room code and invite your friend for a 1v1 coding battle.
                </p>
              </div>

              {/* Topic / Module selector */}
              <div className="space-y-1.5 pt-1">
                <label className="text-xs font-mono text-slate-400">SELECT TOPIC / MODULE</label>
                <select
                  value={selectedTopic}
                  onChange={(e) => setSelectedTopic(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-slate-200 focus:outline-none focus:border-fuchsia-500 transition"
                >
                  <option value="all">🌟 All 5,200 Problems (Random Challenge)</option>
                  <optgroup label="Core Fundamentals">
                    <option value="patterns">Patterns & Matrices</option>
                    <option value="loops">Loops & Iterations (While & For)</option>
                    <option value="variables">Variables, Operators & Datatypes</option>
                    <option value="strings">Strings & Text Analysis</option>
                    <option value="math">Math & &lt;cmath&gt; Algorithms</option>
                    <option value="arrays">Arrays, Pointers & References</option>
                  </optgroup>
                  <optgroup label="Functions & Recursion">
                    <option value="functions">Functions & Overloading</option>
                    <option value="recursion">Recursion & Backtracking</option>
                  </optgroup>
                  <optgroup label="Object-Oriented Programming (OOP)">
                    <option value="cppoop">All OOP Concepts</option>
                    <option value="classesobjects">Classes & Objects</option>
                    <option value="constructors">Constructors & Destructors</option>
                    <option value="inheritance">Inheritance & Polymorphism</option>
                    <option value="encapsulation">Encapsulation & Access Specifiers</option>
                    <option value="templates">Templates & Generics</option>
                  </optgroup>
                  <optgroup label="STL Data Structures & Algorithms">
                    <option value="stl">All STL Containers</option>
                    <option value="vectors">STL Vectors & Dynamic Arrays</option>
                    <option value="stacks">STL Stacks</option>
                    <option value="queues">STL Queues & Deque</option>
                    <option value="maps">STL Maps & Hash Tables</option>
                    <option value="sets">STL Sets & Unordered Sets</option>
                    <option value="algorithms">STL Algorithms, Sorting & Binary Search</option>
                  </optgroup>
                </select>
              </div>

              {/* Difficulty selector */}
              <div className="space-y-1.5 pt-1">
                <label className="text-xs font-mono text-slate-400">SELECT DIFFICULTY</label>
                <div className="grid grid-cols-3 gap-2">
                  {(['Easy', 'Medium', 'Hard'] as const).map((diff) => (
                    <button
                      key={diff}
                      onClick={() => setSelectedDifficulty(diff)}
                      className={`py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
                        selectedDifficulty === diff
                          ? 'bg-fuchsia-500 text-white shadow-md shadow-fuchsia-500/20'
                          : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                      }`}
                    >
                      {diff}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={handleCreateRoom}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-fuchsia-600 to-indigo-600 hover:from-fuchsia-500 hover:to-indigo-500 text-white text-xs font-extrabold flex items-center justify-center gap-2 shadow-lg shadow-fuchsia-500/20 active:scale-95 transition cursor-pointer"
            >
              <span>Create Battle Room</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Join Room Card */}
          <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-5 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shadow-inner">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Join Room by Code</h3>
                <p className="text-xs text-slate-400 mt-1">
                  Enter the 6-character room code shared by your friend.
                </p>
              </div>

              <div className="space-y-1.5 pt-2">
                <label className="text-xs font-mono text-slate-400">ENTER 6-DIGIT ROOM CODE</label>
                <input
                  type="text"
                  maxLength={6}
                  value={roomCodeInput}
                  onChange={(e) => setRoomCodeInput(e.target.value.toUpperCase())}
                  placeholder="e.g. DSA789"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white font-mono text-center tracking-widest text-lg font-bold focus:outline-none focus:border-indigo-500 transition uppercase placeholder:text-slate-600"
                />
              </div>
            </div>

            <button
              onClick={() => handleJoinRoom()}
              className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-extrabold flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/20 active:scale-95 transition cursor-pointer"
            >
              <span>Join Battle Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Live Open Rooms List */}
        <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Radio className="w-4 h-4 text-emerald-400 animate-pulse" />
              <h3 className="text-sm font-bold text-white">Active Open Lobbies</h3>
            </div>
            <span className="text-xs text-slate-400 font-mono">{openRooms.length} waiting</span>
          </div>

          {openRooms.length === 0 ? (
            <div className="p-8 text-center text-slate-500 text-xs font-mono">
              No open lobbies currently waiting. Click "Create Battle Room" or "Quick Matchmaking" to start one!
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {openRooms.map((room) => (
                <div
                  key={room.id}
                  className="p-4 rounded-2xl bg-slate-950 border border-slate-800/80 flex items-center justify-between gap-3 hover:border-fuchsia-500/40 transition"
                >
                  <div>
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="text-xs font-bold text-white">{room.host.displayName}</span>
                      <span className="px-1.5 py-0.2 rounded bg-fuchsia-500/20 text-fuchsia-300 font-mono text-[10px]">
                        {room.problem.difficulty}
                      </span>
                      {room.topicCategory && room.topicCategory !== 'all' && (
                        <span className="px-1.5 py-0.2 rounded bg-indigo-500/20 text-indigo-300 font-mono text-[10px] capitalize">
                          {room.topicCategory}
                        </span>
                      )}
                    </div>
                    <div className="text-[11px] text-slate-400 font-mono mt-0.5 truncate max-w-[150px]">
                      {room.problem.title}
                    </div>
                  </div>

                  <button
                    onClick={() => handleJoinRoom(room.id)}
                    className="px-3 py-1.5 rounded-xl bg-fuchsia-500 hover:bg-fuchsia-400 text-slate-950 text-xs font-bold transition cursor-pointer active:scale-95 shadow-md shadow-fuchsia-500/20"
                  >
                    Duel ⚔️
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }

  // LIVE 1V1 BATTLE ARENA VIEW
  return (
    <div className="flex flex-col h-[calc(100dvh-3.5rem)] overflow-hidden bg-[#0b0f19]">
      {/* Top Arena Header Bar */}
      <div className="h-14 px-4 bg-slate-950/95 border-b border-slate-800 flex items-center justify-between shrink-0 select-none z-10">
        {/* Left: Player & Opponent Matchup */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-sm font-bold text-emerald-300">
              {myPlayer?.displayName?.slice(0, 2).toUpperCase() || 'ME'}
            </div>
            <div className="hidden sm:block text-xs">
              <div className="font-bold text-white flex items-center gap-1">
                <span>{myPlayer?.displayName}</span>
                <span className="text-[10px] text-emerald-400 font-mono">(YOU)</span>
              </div>
              <div className="text-[10px] text-slate-400 font-mono">
                Passed: <strong className="text-emerald-400">{myPlayer?.passedTestCases || 0}</strong>/{myPlayer?.totalTestCases || 3}
              </div>
            </div>
          </div>

          <span className="text-slate-600 font-bold text-xs">VS</span>

          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-rose-500/20 border border-rose-500/40 flex items-center justify-center text-sm font-bold text-rose-300">
              {opponentPlayer ? opponentPlayer.displayName.slice(0, 2).toUpperCase() : '?'}
            </div>
            <div className="hidden sm:block text-xs">
              <div className="font-bold text-white flex items-center gap-1">
                <span>{opponentPlayer ? opponentPlayer.displayName : 'Waiting...'}</span>
              </div>
              <div className="text-[10px] text-slate-400 font-mono">
                Passed: <strong className="text-rose-400">{opponentPlayer?.passedTestCases || 0}</strong>/{opponentPlayer?.totalTestCases || 3}
              </div>
            </div>
          </div>
        </div>

        {/* Center: Live Timer */}
        <div className="flex items-center gap-2 bg-slate-900 px-3 py-1.5 rounded-xl border border-slate-800 text-xs font-mono">
          <Clock className="w-3.5 h-3.5 text-amber-400" />
          <span className={`font-bold ${timeLeft < 120 ? 'text-rose-400 animate-pulse' : 'text-white'}`}>
            {formatTimer(timeLeft)}
          </span>
        </div>

        {/* Right: Room Code & Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleCopyInviteLink}
            className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-850 text-slate-300 border border-slate-800 text-xs font-mono font-bold flex items-center gap-1.5 transition cursor-pointer"
            title="Copy Invite Link"
          >
            <Share2 className="w-3.5 h-3.5 text-fuchsia-400" />
            <span>Room: {currentRoom.id}</span>
            {copiedLink ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
          </button>

          <button
            onClick={handleLeaveBattle}
            className="p-1.5 rounded-lg bg-slate-900 hover:bg-rose-950/40 hover:text-rose-400 text-slate-400 border border-slate-800 transition cursor-pointer"
            title="Leave Battle"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Live Dual Progress Health Bar */}
      <div className="h-2 w-full bg-slate-900 flex select-none shrink-0 overflow-hidden">
        {/* Your Progress */}
        <div
          className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 transition-all duration-300"
          style={{
            width: `${((myPlayer?.passedTestCases || 0) / (myPlayer?.totalTestCases || 3)) * 50}%`
          }}
        />
        {/* Middle divider */}
        <div className="w-0.5 h-full bg-slate-950" />
        {/* Opponent Progress */}
        <div
          className="h-full bg-gradient-to-l from-rose-500 to-amber-500 ml-auto transition-all duration-300"
          style={{
            width: `${((opponentPlayer?.passedTestCases || 0) / (opponentPlayer?.totalTestCases || 3)) * 50}%`
          }}
        />
      </div>

      {/* Mobile Tab Switcher */}
      <div className="flex md:hidden h-10 border-b border-slate-800 bg-slate-950 px-2 items-center gap-1 shrink-0">
        <button
          onClick={() => setMobileTab('problem')}
          className={`flex-1 py-1.5 text-xs font-bold rounded-lg text-center ${
            mobileTab === 'problem' ? 'bg-slate-800 text-emerald-400' : 'text-slate-400'
          }`}
        >
          Problem
        </button>
        <button
          onClick={() => setMobileTab('editor')}
          className={`flex-1 py-1.5 text-xs font-bold rounded-lg text-center ${
            mobileTab === 'editor' ? 'bg-slate-800 text-emerald-400' : 'text-slate-400'
          }`}
        >
          My Code
        </button>
        <button
          onClick={() => setMobileTab('opponent')}
          className={`flex-1 py-1.5 text-xs font-bold rounded-lg text-center ${
            mobileTab === 'opponent' ? 'bg-slate-800 text-rose-400' : 'text-slate-400'
          }`}
        >
          Opponent
        </button>
        <button
          onClick={() => setMobileTab('console')}
          className={`flex-1 py-1.5 text-xs font-bold rounded-lg text-center ${
            mobileTab === 'console' ? 'bg-slate-800 text-amber-400' : 'text-slate-400'
          }`}
        >
          Console
        </button>
      </div>

      {/* Main Split Body */}
      <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
        {/* Left Side: Problem Statement */}
        <div className={`w-full md:w-[45%] flex-col border-r border-slate-800 bg-[#0e1424] overflow-y-auto p-4 sm:p-6 space-y-4 ${
          mobileTab === 'problem' ? 'flex' : 'hidden md:flex'
        }`}>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                {currentRoom.problem.difficulty}
              </span>
              <span className="text-xs text-slate-400 font-mono">
                {currentRoom.problem.category}
              </span>
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-white mt-1">
              {currentRoom.problem.title}
            </h2>
          </div>

          <div className="text-xs text-slate-300 leading-relaxed font-mono whitespace-pre-wrap bg-slate-950/60 p-4 rounded-xl border border-slate-800/80">
            {currentRoom.problem.description}
          </div>

          {currentRoom.problem.sample_test_cases && (
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-mono font-bold text-slate-400">TEST CASES ({currentRoom.problem.sample_test_cases.length})</h4>
              {currentRoom.problem.sample_test_cases.map((tc, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1.5">
                  <div className="text-[10px] font-mono font-bold text-slate-400">TEST CASE #{idx + 1}</div>
                  <div className="space-y-2 text-xs font-mono">
                    <div>
                      <span className="text-slate-500 block text-[10px] mb-0.5">INPUT:</span>
                      <pre className="text-emerald-400 whitespace-pre-wrap break-words bg-slate-900/50 rounded-lg p-2">{tc.input || '(empty)'}</pre>
                    </div>
                    <div>
                      <span className="text-slate-500 block text-[10px] mb-0.5">EXPECTED OUTPUT:</span>
                      <pre className="text-teal-300 whitespace-pre-wrap break-words bg-slate-900/50 rounded-lg p-2">{tc.output}</pre>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right Side: Monaco Code Editor + Battle Controls */}
        <div className={`w-full md:w-[55%] flex-col flex-1 overflow-hidden ${
          mobileTab === 'editor' || mobileTab === 'console' ? 'flex' : 'hidden md:flex'
        }`}>
          {/* Editor Header */}
          <div className="h-10 px-3 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between shrink-0 select-none">
            <div className="flex items-center gap-2">
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value as SupportedLanguage)}
                className="bg-slate-950 border border-slate-800 text-xs font-mono text-slate-200 px-2 py-1 rounded-lg focus:outline-none"
              >
                <option value="cpp">C++ (GCC 17)</option>
                <option value="python">Python 3.10</option>
                <option value="javascript">JavaScript (Node)</option>
                <option value="java">Java 15</option>
              </select>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleRunCode}
                disabled={isRunning || isSubmitting}
                className="px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold flex items-center gap-1.5 transition cursor-pointer disabled:opacity-50"
              >
                {isRunning ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Play className="w-3.5 h-3.5 fill-emerald-400 text-emerald-400" />}
                <span>Run</span>
              </button>

              <button
                onClick={handleSubmitCode}
                disabled={isRunning || isSubmitting}
                className="px-3.5 py-1 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 text-xs font-bold flex items-center gap-1.5 transition shadow-sm cursor-pointer disabled:opacity-50 active:scale-95"
              >
                {isSubmitting ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Send className="w-3.5 h-3.5" />}
                <span>Submit Solution</span>
              </button>
            </div>
          </div>

          {/* Monaco Editor Container */}
          <div className="flex-1 relative overflow-hidden">
            <Editor
              height="100%"
              language={language === 'cpp' ? 'cpp' : language === 'python' ? 'python' : language === 'javascript' ? 'javascript' : 'java'}
              value={code}
              onMount={(editor) => { editorRef.current = editor; }}
              onChange={(v) => setCode(v || '')}
              theme="vs-dark"
              options={{
                fontSize: 14,
                fontFamily: "'Fira Code', 'Cascadia Code', monospace",
                minimap: { enabled: false },
                automaticLayout: true,
                tabSize: 4,
                lineNumbers: 'on',
              }}
            />
          </div>

          {/* Execution Console */}
          <div className="h-44 border-t border-slate-800 bg-slate-950 p-3 overflow-y-auto font-mono text-xs space-y-2 shrink-0">
            <div className="flex items-center justify-between text-slate-400 text-[11px] pb-1 border-b border-slate-800/60">
              <span className="font-bold flex items-center gap-1 text-slate-300">
                <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                EXECUTION CONSOLE
              </span>
              {executionResult && (
                <span className={executionResult.status === 'accepted' ? 'text-emerald-400 font-bold' : 'text-rose-400 font-bold'}>
                  {executionResult.status === 'accepted' ? '✓ ALL TEST CASES PASSED!' : `Passed ${executionResult.passedCount}/${executionResult.totalCount}`}
                </span>
              )}
            </div>

            {executionResult ? (
              <div className="space-y-1.5 text-slate-300">
                <div className="text-[11px] text-slate-400">
                  Time: {executionResult.timeMs}ms {executionResult.memoryKb ? `| Memory: ${executionResult.memoryKb}KB` : ''}
                </div>
                {executionResult.compileError && (
                  <pre className="text-rose-400 text-xs bg-rose-950/40 p-2 rounded border border-rose-900">{executionResult.compileError}</pre>
                )}
                {executionResult.runtimeError && (
                  <pre className="text-amber-400 text-xs bg-amber-950/40 p-2 rounded border border-amber-900">{executionResult.runtimeError}</pre>
                )}
                {executionResult.stdout && (
                  <pre className="text-slate-300 text-xs bg-slate-900 p-2 rounded">{executionResult.stdout}</pre>
                )}
              </div>
            ) : (
              <div className="text-slate-600 text-xs">
                Click "Run" or "Submit Solution" to test your code against battle test cases.
              </div>
            )}
          </div>
        </div>
      </div>

      {/* VICTORY / DEFEAT MODAL */}
      {showResultModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
          <div className="max-w-md w-full p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl text-center space-y-6">
            {currentRoom.winnerUserId === user?.id ? (
              <div className="space-y-3">
                <div className="w-16 h-16 rounded-3xl bg-amber-500/20 border border-amber-500/40 text-amber-400 flex items-center justify-center mx-auto text-3xl shadow-lg shadow-amber-500/20 animate-bounce">
                  🏆
                </div>
                <h2 className="text-2xl font-black text-white">VICTORY! YOU WON!</h2>
                <p className="text-xs text-slate-400">
                  You solved the problem first and crushed all test cases!
                </p>
                <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono text-sm font-bold">
                  +100 XP & Coins Awarded ⚡
                </div>
              </div>
            ) : (
              <div className="space-y-3">
                <div className="w-16 h-16 rounded-3xl bg-rose-500/20 border border-rose-500/40 text-rose-400 flex items-center justify-center mx-auto text-3xl">
                  ⚔️
                </div>
                <h2 className="text-2xl font-black text-white">BATTLE FINISHED</h2>
                <p className="text-xs text-slate-400">
                  {currentRoom.winnerName || 'Opponent'} solved the problem first. Great effort!
                </p>
                <div className="p-3 rounded-xl bg-slate-800 border border-slate-700 text-slate-300 font-mono text-sm font-bold">
                  +20 Participation XP Awarded
                </div>
              </div>
            )}

            <div className="flex gap-3 pt-2">
              <button
                onClick={() => { setShowResultModal(false); handleLeaveBattle(); }}
                className="flex-1 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold transition cursor-pointer"
              >
                Return to Lobby
              </button>
              <button
                onClick={() => {
                  setShowResultModal(false);
                  handleCreateRoom();
                }}
                className="flex-1 py-3 rounded-xl bg-gradient-to-r from-fuchsia-600 to-indigo-600 hover:from-fuchsia-500 hover:to-indigo-500 text-white text-xs font-bold transition cursor-pointer shadow-lg shadow-fuchsia-500/20"
              >
                Rematch / New Battle ⚔️
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
