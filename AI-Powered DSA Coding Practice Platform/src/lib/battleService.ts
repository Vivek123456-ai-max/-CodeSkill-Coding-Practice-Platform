import { BattleRoom, BattlePlayer, BattleStatus } from '../types/battle';
import { Problem, SupportedLanguage } from '../types/problem';
import { ALL_PROBLEMS } from './allProblems';
import { supabase, safeLocalStorageSet, getUserScopedKey } from './supabase';
import { RealtimeChannel } from '@supabase/supabase-js';

const LOCAL_ROOMS_KEY = 'ai_dsa_pvp_active_rooms_v1';
const SUPABASE_TABLE = 'battle_rooms';
const activeChannelsMap = new Map<string, RealtimeChannel>();
const broadcastChannel = typeof window !== 'undefined' && 'BroadcastChannel' in window 
  ? new BroadcastChannel('ai_dsa_pvp_channel') 
  : null;

// In-memory room cache
const inMemoryRooms = new Map<string, BattleRoom>();

// Lobby listeners for UI refresh
let lobbyListeners: Set<() => void> = new Set();
let lobbyChannel: RealtimeChannel | null = null;

function generateRoomCode(): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let code = '';
  for (let i = 0; i < 6; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
}

const LOCAL_BATTLE_PLAYED_KEY = 'ai_dsa_pvp_played_problem_ids_v1';

function getPlayedBattleIds(userId?: string | null): Set<string> {
  try {
    const key = getUserScopedKey(LOCAL_BATTLE_PLAYED_KEY, userId);
    const raw = localStorage.getItem(key);
    return raw ? new Set(JSON.parse(raw)) : new Set();
  } catch {
    return new Set();
  }
}

function recordPlayedBattleId(problemId: string, userId?: string | null) {
  try {
    const key = getUserScopedKey(LOCAL_BATTLE_PLAYED_KEY, userId);
    const played = getPlayedBattleIds(userId);
    played.add(problemId);
    safeLocalStorageSet(key, JSON.stringify(Array.from(played)));
  } catch {}
}

function clearPlayedBattleIds(problemIdsToRemove: string[], userId?: string | null) {
  try {
    const key = getUserScopedKey(LOCAL_BATTLE_PLAYED_KEY, userId);
    const played = getPlayedBattleIds(userId);
    problemIdsToRemove.forEach((id) => played.delete(id));
    safeLocalStorageSet(key, JSON.stringify(Array.from(played)));
  } catch {}
}

const TOPIC_BOOK_MAP: Record<string, string[]> = {
  patterns: ['patterns'],
  loops: ['loops', 'whileloop', 'forloop', 'breakcontinue'],
  variables: ['variables', 'datatypes', 'operators', 'booleans', 'userinput', 'switch', 'ifelse'],
  strings: ['strings'],
  math: ['math'],
  arrays: ['arrays', 'structures', 'enums', 'references', 'pointers'],
  functions: ['functions', 'funcparams', 'funcoverloading', 'scope', 'lambda', 'memorymgmt'],
  recursion: ['recursion'],
  cppoop: ['cppoop', 'classesobjects', 'classmethods', 'constructors', 'accessspecifiers', 'encapsulation', 'friendfunctions', 'inheritance', 'polymorphism', 'templates', 'files', 'cppdate'],
  classesobjects: ['classesobjects', 'classmethods'],
  constructors: ['constructors'],
  inheritance: ['inheritance', 'polymorphism'],
  encapsulation: ['encapsulation', 'accessspecifiers'],
  templates: ['templates'],
  stl: ['vectors', 'cpplist', 'stacks', 'queues', 'cppdeque', 'sets', 'maps', 'iterators', 'algorithms', 'datastructuresstl', 'cppexceptions', 'cpperrors', 'cppdebugging', 'inputvalidation'],
  vectors: ['vectors'],
  stacks: ['stacks'],
  queues: ['queues', 'cppdeque'],
  maps: ['maps'],
  sets: ['sets'],
  algorithms: ['algorithms'],
};

function isProblemInTopic(p: Problem, topicCategory?: string): boolean {
  if (!topicCategory || topicCategory === 'all') return true;
  const t = topicCategory.toLowerCase().trim();
  const book = (p.book || '').toLowerCase().trim();

  if (TOPIC_BOOK_MAP[t]) {
    return TOPIC_BOOK_MAP[t].includes(book);
  }
  if (book === t) return true;

  if (p.category) {
    const cat = p.category.toLowerCase();
    if (t === 'patterns' && cat.includes('pattern')) return true;
    if (t === 'loops' && cat.includes('loop')) return true;
    if (t === 'strings' && cat.includes('string')) return true;
    if (t === 'math' && cat.includes('math')) return true;
    if (t === 'arrays' && cat.includes('array')) return true;
    if (t === 'functions' && cat.includes('function')) return true;
    if (t === 'recursion' && cat.includes('recursion')) return true;
    if (t === 'cppoop' && (cat.includes('oop') || cat.includes('class'))) return true;
    if (t === 'stl' && (cat.includes('stl') || cat.includes('vector') || cat.includes('map') || cat.includes('set') || cat.includes('stack') || cat.includes('queue'))) return true;
  }

  return false;
}

function getRandomProblemForBattle(
  difficulty?: 'Easy' | 'Medium' | 'Hard', 
  topicCategory?: string,
  userId?: string | null
): Problem {
  const allValid = ALL_PROBLEMS.filter((p) => Array.isArray(p.sample_test_cases) && p.sample_test_cases.length > 0);
  
  let topicPool = allValid;
  if (topicCategory && topicCategory !== 'all') {
    const matched = allValid.filter((p) => isProblemInTopic(p, topicCategory));
    if (matched.length > 0) {
      topicPool = matched;
    }
  }

  let finalPool = topicPool;
  if (difficulty) {
    const diffMatched = topicPool.filter((p) => p.difficulty === difficulty);
    if (diffMatched.length > 0) {
      finalPool = diffMatched;
    }
  }

  const playedIds = getPlayedBattleIds(userId);
  const unplayedPool = finalPool.filter((p) => !playedIds.has(p.id));

  let chosen: Problem;
  if (unplayedPool.length > 0) {
    chosen = unplayedPool[Math.floor(Math.random() * unplayedPool.length)];
  } else {
    clearPlayedBattleIds(finalPool.map((p) => p.id), userId);
    chosen = finalPool[Math.floor(Math.random() * finalPool.length)];
  }

  recordPlayedBattleId(chosen.id, userId);
  return chosen;
}

// ─── Supabase DB helpers (battle_rooms table) ───
let tableReady = false;

async function ensureTable(): Promise<void> {
  if (tableReady) return;
  try {
    // Try a simple select first to see if the table exists
    const db: any = supabase;
    const { error } = await db.from(SUPABASE_TABLE).select('id').limit(1);
    if (!error) {
      tableReady = true;
      return;
    }
    // Table doesn't exist — create it via RPC or raw SQL isn't available in client
    // We'll use .rpc if available, otherwise we just need the user to create the table.
    // For now, try creating it with a workaround:
    console.warn('[BattleService] battle_rooms table not found. Attempting to create...');
    
    // Use REST API to run SQL (only works with service role, not anon)
    // Fallback: the table must be created manually. We'll log the SQL.
    console.warn(`
      Please create the table in Supabase SQL Editor:
      
      CREATE TABLE IF NOT EXISTS battle_rooms (
        id TEXT PRIMARY KEY,
        room_data JSONB NOT NULL,
        status TEXT DEFAULT 'waiting',
        created_at TIMESTAMPTZ DEFAULT now(),
        updated_at TIMESTAMPTZ DEFAULT now()
      );
      
      ALTER TABLE battle_rooms ENABLE ROW LEVEL SECURITY;
      CREATE POLICY "Allow all for anon" ON battle_rooms FOR ALL USING (true) WITH CHECK (true);
    `);
  } catch (err) {
    console.warn('[BattleService] ensureTable error:', err);
  }
}

async function saveRoomToSupabase(room: BattleRoom): Promise<void> {
  try {
    await ensureTable();
    const db: any = supabase;
    const { error } = await db
      .from(SUPABASE_TABLE)
      .upsert({
        id: room.id,
        room_data: room,
        status: room.status,
        updated_at: new Date().toISOString()
      }, { onConflict: 'id' });
    if (error) {
      console.warn('[BattleService] saveRoomToSupabase error:', error.message);
    }
  } catch (err) {
    console.warn('[BattleService] saveRoomToSupabase error:', err);
  }
}

async function fetchRoomFromSupabase(roomCode: string): Promise<BattleRoom | null> {
  try {
    await ensureTable();
    const db: any = supabase;
    const { data, error } = await db
      .from(SUPABASE_TABLE)
      .select('room_data')
      .eq('id', roomCode.toUpperCase().trim())
      .single();
    if (error || !data) return null;
    return data.room_data as BattleRoom;
  } catch {
    return null;
  }
}

async function deleteRoomFromSupabase(roomCode: string): Promise<void> {
  try {
    const db: any = supabase;
    await db.from(SUPABASE_TABLE).delete().eq('id', roomCode.toUpperCase().trim());
  } catch {}
}

async function fetchOpenRoomsFromSupabase(): Promise<BattleRoom[]> {
  try {
    await ensureTable();
    const db: any = supabase;
    const { data, error } = await db
      .from(SUPABASE_TABLE)
      .select('room_data')
      .eq('status', 'waiting')
      .order('created_at', { ascending: false })
      .limit(50);
    if (error || !data) return [];
    return (data as any[]).map((row: any) => row.room_data as BattleRoom);
  } catch {
    return [];
  }
}

// ─── Local cache helpers ───
function saveRoomLocally(room: BattleRoom) {
  room.lastActiveAt = room.lastActiveAt || Date.now();
  inMemoryRooms.set(room.id, room);
  try {
    const raw = localStorage.getItem(LOCAL_ROOMS_KEY);
    const rooms = raw ? JSON.parse(raw) : {};
    rooms[room.id] = room;
    safeLocalStorageSet(LOCAL_ROOMS_KEY, JSON.stringify(rooms));
  } catch {}
}

function deleteRoomLocally(roomCode: string) {
  const upper = roomCode.toUpperCase().trim();
  inMemoryRooms.delete(upper);
  try {
    const raw = localStorage.getItem(LOCAL_ROOMS_KEY);
    const rooms = raw ? JSON.parse(raw) : {};
    if (rooms[upper]) {
      delete rooms[upper];
      safeLocalStorageSet(LOCAL_ROOMS_KEY, JSON.stringify(rooms));
    }
  } catch {}
}

// ─── Lobby Channel (for instant UI updates) ───
function initLobbyChannel() {
  if (lobbyChannel) return;
  lobbyChannel = supabase.channel('pvp_lobby_v2', {
    config: { broadcast: { self: false } }
  });

  lobbyChannel
    .on('broadcast', { event: 'lobby_refresh' }, () => {
      notifyLobbyListeners();
    })
    .subscribe();
}

function notifyLobbyListeners() {
  lobbyListeners.forEach((fn) => fn());
}

function broadcastLobbyRefresh() {
  if (lobbyChannel) {
    lobbyChannel.send({ type: 'broadcast', event: 'lobby_refresh', payload: {} });
  }
}

// ─── Exported Battle Service ───
export const battleService = {
  createRoom(
    hostUser: { id: string; email?: string; displayName?: string; avatar?: string },
    difficulty: 'Easy' | 'Medium' | 'Hard' = 'Easy',
    topicCategory: string = 'all',
    customProblem?: Problem
  ): BattleRoom {
    const roomCode = generateRoomCode();
    const problem = customProblem || getRandomProblemForBattle(difficulty, topicCategory, hostUser.id);

    const hostPlayer: BattlePlayer = {
      userId: hostUser.id,
      displayName: hostUser.displayName || hostUser.email?.split('@')[0] || 'Host Player',
      avatar: hostUser.avatar || 'coder',
      status: 'ready',
      passedTestCases: 0,
      totalTestCases: problem.sample_test_cases?.length || 3,
      language: 'cpp'
    };

    const newRoom: BattleRoom = {
      id: roomCode,
      hostUserId: hostUser.id,
      status: 'waiting',
      problem,
      host: hostPlayer,
      opponent: null,
      durationSeconds: 900,
      topicCategory,
      difficulty,
      lastActiveAt: Date.now(),
      createdAt: new Date().toISOString()
    };

    // Save locally + to Supabase DB
    saveRoomLocally(newRoom);
    saveRoomToSupabase(newRoom).then(() => broadcastLobbyRefresh());

    // Notify other tabs
    if (broadcastChannel) {
      broadcastChannel.postMessage({ type: 'ROOM_CREATED', room: newRoom });
    }

    return newRoom;
  },

  deleteRoom(roomCode: string) {
    const upper = roomCode.toUpperCase().trim();
    deleteRoomLocally(upper);

    // Delete from Supabase DB
    deleteRoomFromSupabase(upper).then(() => broadcastLobbyRefresh());

    if (broadcastChannel) {
      broadcastChannel.postMessage({ type: 'ROOM_DELETED', roomId: upper });
    }
    const channel = activeChannelsMap.get(upper);
    if (channel) {
      channel.send({
        type: 'broadcast',
        event: 'battle_state_sync',
        payload: { id: upper, status: 'abandoned' }
      });
    }
  },

  sendHeartbeat(roomCode: string) {
    const upper = roomCode.toUpperCase().trim();
    const room = this.getRoom(upper);
    if (room) {
      room.lastActiveAt = Date.now();
      saveRoomLocally(room);
      // Update Supabase too (less frequently, fire-and-forget)
      saveRoomToSupabase(room);
    }
  },

  getRoom(roomCode: string): BattleRoom | null {
    const upper = roomCode.toUpperCase().trim();
    if (inMemoryRooms.has(upper)) {
      return inMemoryRooms.get(upper)!;
    }
    try {
      const raw = localStorage.getItem(LOCAL_ROOMS_KEY);
      const rooms = raw ? JSON.parse(raw) : {};
      if (rooms[upper]) return rooms[upper];
    } catch {}
    return null;
  },

  /** Async version that checks Supabase DB if not found locally */
  async getRoomAsync(roomCode: string): Promise<BattleRoom | null> {
    const local = this.getRoom(roomCode);
    if (local) return local;
    
    // Not found locally — fetch from Supabase DB
    const remote = await fetchRoomFromSupabase(roomCode);
    if (remote) {
      saveRoomLocally(remote);
      return remote;
    }
    return null;
  },

  async joinRoom(
    roomCode: string,
    playerUser: { id: string; email?: string; displayName?: string; avatar?: string }
  ): Promise<{ success: boolean; room?: BattleRoom; error?: string }> {
    // Try local first, then Supabase DB
    const room = await this.getRoomAsync(roomCode);
    if (!room) {
      return { success: false, error: 'Battle Room not found. Please check the 6-letter Room Code.' };
    }

    if (room.status === 'finished') {
      return { success: false, error: 'This battle has already finished.' };
    }

    if (room.hostUserId === playerUser.id) {
      return { success: true, room };
    }

    if (room.opponent && room.opponent.userId !== playerUser.id) {
      return { success: false, error: 'Room is already full with 2 players. Only 1v1 allowed!' };
    }

    if (room.status === 'in_progress' && !room.opponent) {
      // Already started but no opponent — allow join
    } else if (room.status === 'in_progress' && room.opponent) {
      if (room.opponent.userId === playerUser.id) {
        return { success: true, room };
      }
      return { success: false, error: 'Room is already full with 2 players. Only 1v1 allowed!' };
    }

    const opponentPlayer: BattlePlayer = {
      userId: playerUser.id,
      displayName: playerUser.displayName || playerUser.email?.split('@')[0] || 'Challenger',
      avatar: playerUser.avatar || 'ninja',
      status: 'ready',
      passedTestCases: 0,
      totalTestCases: room.problem.sample_test_cases?.length || 3,
      language: 'cpp'
    };

    const updatedRoom: BattleRoom = {
      ...room,
      opponent: opponentPlayer,
      status: 'in_progress',
      lastActiveAt: Date.now(),
      startedAt: room.startedAt || new Date().toISOString()
    };

    saveRoomLocally(updatedRoom);
    
    // Update Supabase DB (mark as in_progress so no one else can join)
    await saveRoomToSupabase(updatedRoom);

    // Broadcast update
    this.broadcastRoomUpdate(updatedRoom);
    broadcastLobbyRefresh();

    return { success: true, room: updatedRoom };
  },

  updatePlayerProgress(
    roomCode: string,
    userId: string,
    passedTestCases: number,
    totalTestCases: number,
    status: 'coding' | 'submitted' | 'won' | 'lost' = 'coding',
    language: SupportedLanguage = 'cpp',
    executionTimeMs?: number
  ): BattleRoom | null {
    const room = this.getRoom(roomCode);
    if (!room) return null;

    let updatedHost = { ...room.host };
    let updatedOpponent = room.opponent ? { ...room.opponent } : null;

    if (room.hostUserId === userId) {
      updatedHost = {
        ...updatedHost,
        passedTestCases,
        totalTestCases,
        status,
        language,
        executionTimeMs
      };
    } else if (updatedOpponent && updatedOpponent.userId === userId) {
      updatedOpponent = {
        ...updatedOpponent,
        passedTestCases,
        totalTestCases,
        status,
        language,
        executionTimeMs
      };
    }

    let winnerId = room.winnerUserId;
    let winnerName = room.winnerName;
    let roomStatus = room.status;

    if (passedTestCases === totalTestCases && totalTestCases > 0 && !winnerId) {
      winnerId = userId;
      winnerName = userId === room.hostUserId ? updatedHost.displayName : updatedOpponent?.displayName || 'Winner';
      roomStatus = 'finished';

      if (userId === room.hostUserId) {
        updatedHost.status = 'won';
        if (updatedOpponent) updatedOpponent.status = 'lost';
      } else if (updatedOpponent) {
        updatedOpponent.status = 'won';
        updatedHost.status = 'lost';
      }
    }

    const updatedRoom: BattleRoom = {
      ...room,
      host: updatedHost,
      opponent: updatedOpponent,
      status: roomStatus,
      lastActiveAt: Date.now(),
      winnerUserId: winnerId,
      winnerName,
    };

    saveRoomLocally(updatedRoom);
    saveRoomToSupabase(updatedRoom); // fire-and-forget
    this.broadcastRoomUpdate(updatedRoom);

    return updatedRoom;
  },

  /** List open rooms — fetches from Supabase DB for cross-device */
  async listOpenRoomsAsync(): Promise<BattleRoom[]> {
    const remoteRooms = await fetchOpenRoomsFromSupabase();
    // Merge with local in-memory cache
    const seenIds = new Set<string>();
    const result: BattleRoom[] = [];

    // Remote rooms first (source of truth)
    for (const r of remoteRooms) {
      if (r.status === 'waiting') {
        seenIds.add(r.id);
        result.push(r);
      }
    }

    // Local rooms (for offline/fallback)
    try {
      const raw = localStorage.getItem(LOCAL_ROOMS_KEY);
      const localRooms = raw ? JSON.parse(raw) : {};
      for (const [id, r] of Object.entries(localRooms) as [string, BattleRoom][]) {
        if (!seenIds.has(id) && r.status === 'waiting') {
          result.push(r);
        }
      }
    } catch {}

    return result;
  },

  /** Sync list (non-async wrapper for backward compat) */
  listOpenRooms(): BattleRoom[] {
    // Returns local cache only (sync). Use listOpenRoomsAsync for full list.
    const result: BattleRoom[] = [];
    try {
      const raw = localStorage.getItem(LOCAL_ROOMS_KEY);
      const rooms = raw ? JSON.parse(raw) : {};
      const now = Date.now();
      for (const [id, r] of Object.entries(rooms) as [string, BattleRoom][]) {
        const roomActiveTime = r.lastActiveAt || new Date(r.createdAt).getTime();
        const isExpired = (now - roomActiveTime) > 30000;
        if (r.status === 'waiting' && !isExpired) {
          result.push(r);
        }
      }
    } catch {}
    return result;
  },

  broadcastRoomUpdate(room: BattleRoom) {
    if (broadcastChannel) {
      broadcastChannel.postMessage({ type: 'ROOM_UPDATE', room });
    }

    const channel = activeChannelsMap.get(room.id);
    if (channel) {
      channel.send({
        type: 'broadcast',
        event: 'battle_state_sync',
        payload: room
      });
    }
  },

  subscribeToRoom(roomCode: string, onUpdate: (room: BattleRoom) => void): () => void {
    const upper = roomCode.toUpperCase().trim();

    const handleBroadcastMessage = (e: MessageEvent) => {
      if (e.data && (e.data.type === 'ROOM_UPDATE' || e.data.type === 'ROOM_CREATED')) {
        if (e.data.room?.id === upper) {
          onUpdate(e.data.room);
        }
      } else if (e.data && e.data.type === 'ROOM_DELETED' && e.data.roomId === upper) {
        onUpdate({
          id: upper,
          hostUserId: '',
          status: 'abandoned',
          problem: {} as any,
          host: {} as any,
          durationSeconds: 0,
          createdAt: ''
        });
      }
    };

    if (broadcastChannel) {
      broadcastChannel.addEventListener('message', handleBroadcastMessage);
    }

    let supabaseChannel = activeChannelsMap.get(upper);
    if (!supabaseChannel) {
      supabaseChannel = supabase.channel(`battle_${upper}`, {
        config: { broadcast: { self: false } }
      });

      supabaseChannel
        .on('broadcast', { event: 'battle_state_sync' }, ({ payload }) => {
          if (payload && payload.id === upper) {
            saveRoomLocally(payload);
            onUpdate(payload);
          }
        })
        .subscribe();

      activeChannelsMap.set(upper, supabaseChannel);
    }

    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === LOCAL_ROOMS_KEY) {
        const room = this.getRoom(upper);
        if (room) onUpdate(room);
      }
    };
    window.addEventListener('storage', handleStorageChange);

    return () => {
      if (broadcastChannel) {
        broadcastChannel.removeEventListener('message', handleBroadcastMessage);
      }
      window.removeEventListener('storage', handleStorageChange);
    };
  },

  /** Subscribe to lobby for cross-user room refresh */
  subscribeLobby(onUpdate: () => void): () => void {
    initLobbyChannel();
    lobbyListeners.add(onUpdate);
    return () => {
      lobbyListeners.delete(onUpdate);
    };
  }
};
