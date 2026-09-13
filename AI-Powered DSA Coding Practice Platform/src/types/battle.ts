import { Problem, SupportedLanguage } from './problem';

export type BattleStatus = 'waiting' | 'in_progress' | 'finished' | 'abandoned';

export interface BattlePlayer {
  userId: string;
  displayName: string;
  avatar: string;
  rating?: number;
  status: 'ready' | 'coding' | 'submitted' | 'won' | 'lost';
  passedTestCases: number;
  totalTestCases: number;
  lastCode?: string;
  language: SupportedLanguage;
  executionTimeMs?: number;
  finishedAt?: string;
}

export interface BattleRoom {
  id: string; // 6-character room code (e.g. "DSA789")
  hostUserId: string;
  status: BattleStatus;
  problem: Problem;
  host: BattlePlayer;
  opponent?: BattlePlayer | null;
  startedAt?: string;
  durationSeconds: number; // default 900 (15 mins)
  topicCategory?: string;
  difficulty?: 'Easy' | 'Medium' | 'Hard';
  winnerUserId?: string | null;
  winnerName?: string | null;
  lastActiveAt?: number; // timestamp in ms for 10-second heartbeat expiry
  createdAt: string;
}

export type StoreCategory = 'theme' | 'badge' | 'avatar' | 'glow';

export interface StoreItem {
  id: string;
  name: string;
  category: StoreCategory;
  cost: number; // in XP/Coins
  description: string;
  icon: string;
  preview?: {
    bg?: string;
    text?: string;
    border?: string;
    accent?: string;
  };
  monacoThemeId?: string;
}

export interface UserInventory {
  unlockedItemIds: string[];
  activeThemeId: string;
  activeBadgeId: string;
  activeAvatarGlowId: string;
}
