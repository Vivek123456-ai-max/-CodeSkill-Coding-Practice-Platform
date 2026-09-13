import { StoreItem, UserInventory, StoreCategory } from '../types/battle';
import { ALL_PROBLEMS } from './allProblems';
import { Problem } from '../types/problem';
import { userStatsService, getUserScopedKey, safeLocalStorageSet, UserStats } from './supabase';

export const STORE_CATALOG: StoreItem[] = [
  // Themes
  {
    id: 'theme-cyberpunk',
    name: 'Cyberpunk Neon',
    category: 'theme',
    cost: 100,
    description: 'High-contrast neon cyan and magenta theme designed for nocturnal coders.',
    icon: '⚡',
    monacoThemeId: 'dracula',
    preview: { bg: '#0d1117', border: '#06b6d4', accent: '#ec4899', text: '#38bdf8' }
  },
  {
    id: 'theme-tokyonight',
    name: 'Tokyo Night',
    category: 'theme',
    cost: 150,
    description: 'Calm and aesthetic dark blue theme inspired by downtown Tokyo lights.',
    icon: '🌃',
    monacoThemeId: 'vs-dark',
    preview: { bg: '#1a1b26', border: '#7aa2f7', accent: '#bb9af7', text: '#c0caf5' }
  },
  {
    id: 'theme-monokai-pro',
    name: 'Monokai Pro',
    category: 'theme',
    cost: 120,
    description: 'The legendary developer color palette with distinct syntax highlighting.',
    icon: '🟣',
    monacoThemeId: 'monokai',
    preview: { bg: '#2d2a2e', border: '#ffd866', accent: '#ff6188', text: '#a9dc76' }
  },
  {
    id: 'theme-matrix',
    name: 'Matrix Emerald',
    category: 'theme',
    cost: 200,
    description: 'The green digital rain phosphor console aesthetics from the 90s.',
    icon: '🟢',
    monacoThemeId: 'nord',
    preview: { bg: '#051b11', border: '#10b981', accent: '#34d399', text: '#6ee7b7' }
  },
  {
    id: 'theme-synthwave',
    name: 'Synthwave 84',
    category: 'theme',
    cost: 250,
    description: 'Retro 80s glowing sunset gradient with vibrant synthwave neon accents.',
    icon: '🌅',
    monacoThemeId: 'dracula',
    preview: { bg: '#262335', border: '#f92aad', accent: '#fe4450', text: '#ff7edb' }
  },

  // Badges
  {
    id: 'badge-pvp-master',
    name: 'PvP Gladiator ⚔️',
    category: 'badge',
    cost: 150,
    description: 'Conquer the 1v1 battle arena and prove your real-time coding reflexes.',
    icon: '⚔️'
  },
  {
    id: 'badge-speed-demon',
    name: 'Speed Demon ⚡',
    category: 'badge',
    cost: 200,
    description: 'Solving complex algorithms at blinding execution speeds.',
    icon: '⚡'
  },
  {
    id: 'badge-quantum',
    name: 'Quantum Coder ⚛️',
    category: 'badge',
    cost: 300,
    description: 'Master of optimal time and space complexity solutions.',
    icon: '⚛️'
  },
  {
    id: 'badge-grandmaster',
    name: 'Grandmaster 👑',
    category: 'badge',
    cost: 500,
    description: 'Elite tier DSA solver standing at the pinnacle of leaderboard excellence.',
    icon: '👑'
  },
  {
    id: 'badge-bug-hunter',
    name: 'Bug Slayer 🛡️',
    category: 'badge',
    cost: 100,
    description: 'Crushed all edge cases and debugged without mercy.',
    icon: '🛡️'
  },

  // Avatar Aura Glows
  {
    id: 'glow-emerald',
    name: 'Emerald Aura Glow',
    category: 'glow',
    cost: 100,
    description: 'A radiant pulsating emerald border surrounding your profile avatar.',
    icon: '💚',
    preview: { border: '#10b981' }
  },
  {
    id: 'glow-gold',
    name: 'Golden Radiance Glow',
    category: 'glow',
    cost: 250,
    description: 'A brilliant champion gold halo surrounding your avatar.',
    icon: '💛',
    preview: { border: '#f59e0b' }
  },
  {
    id: 'glow-neon-purple',
    name: 'Neon Violet Glow',
    category: 'glow',
    cost: 200,
    description: 'An ethereal cyber violet glow for your profile picture.',
    icon: '💜',
    preview: { border: '#8b5cf6' }
  },
  {
    id: 'glow-crimson',
    name: 'Inferno Crimson Glow',
    category: 'glow',
    cost: 350,
    description: 'A blazing fiery crimson border signifying relentless battle drive.',
    icon: '❤️',
    preview: { border: '#f43f5e' }
  }
];

const LOCAL_INVENTORY_KEY = 'ai_dsa_user_inventory_v1';
const LOCAL_POTD_KEY = 'ai_dsa_potd_completed_v1';

export const rewardsStoreService = {
  getStoreCatalog(): StoreItem[] {
    return STORE_CATALOG;
  },

  getUserInventory(userId?: string | null): UserInventory {
    const defaultInventory: UserInventory = {
      unlockedItemIds: ['theme-tokyonight'], // Default starter theme unlocked
      activeThemeId: 'theme-tokyonight',
      activeBadgeId: '',
      activeAvatarGlowId: ''
    };

    if (!userId) return defaultInventory;

    try {
      const storageKey = getUserScopedKey(LOCAL_INVENTORY_KEY, userId);
      const raw = localStorage.getItem(storageKey);
      if (raw) {
        const parsed = JSON.parse(raw);
        return {
          unlockedItemIds: Array.isArray(parsed.unlockedItemIds) ? parsed.unlockedItemIds : ['theme-tokyonight'],
          activeThemeId: parsed.activeThemeId || 'theme-tokyonight',
          activeBadgeId: parsed.activeBadgeId || '',
          activeAvatarGlowId: parsed.activeAvatarGlowId || ''
        };
      }
    } catch {}

    return defaultInventory;
  },

  async purchaseStoreItem(
    userId: string,
    itemId: string
  ): Promise<{ success: boolean; newInventory?: UserInventory; error?: string }> {
    if (!userId) {
      return { success: false, error: 'Please sign in to purchase store items.' };
    }

    const item = STORE_CATALOG.find((i) => i.id === itemId);
    if (!item) {
      return { success: false, error: 'Store item not found.' };
    }

    const inventory = this.getUserInventory(userId);
    if (inventory.unlockedItemIds.includes(itemId)) {
      return { success: true, newInventory: inventory };
    }

    const stats = await userStatsService.getStats(userId);
    if (stats.total_xp < item.cost) {
      return {
        success: false,
        error: `Insufficient XP! You need ${item.cost} XP (Current: ${stats.total_xp} XP). Solve more problems to earn XP!`
      };
    }

    // Unlock item and auto-equip
    const updatedUnlocked = [...inventory.unlockedItemIds, itemId];
    let updatedActiveTheme = inventory.activeThemeId;
    let updatedActiveBadge = inventory.activeBadgeId;
    let updatedActiveGlow = inventory.activeAvatarGlowId;

    if (item.category === 'theme') updatedActiveTheme = item.id;
    if (item.category === 'badge') updatedActiveBadge = item.id;
    if (item.category === 'glow') updatedActiveGlow = item.id;

    const newInventory: UserInventory = {
      unlockedItemIds: updatedUnlocked,
      activeThemeId: updatedActiveTheme,
      activeBadgeId: updatedActiveBadge,
      activeAvatarGlowId: updatedActiveGlow
    };

    const storageKey = getUserScopedKey(LOCAL_INVENTORY_KEY, userId);
    safeLocalStorageSet(storageKey, JSON.stringify(newInventory));

    return { success: true, newInventory };
  },

  equipStoreItem(userId: string, category: StoreCategory, itemId: string): UserInventory {
    const inventory = this.getUserInventory(userId);
    if (itemId && !inventory.unlockedItemIds.includes(itemId) && itemId !== '') {
      return inventory;
    }

    const newInventory = { ...inventory };
    if (category === 'theme') newInventory.activeThemeId = itemId;
    if (category === 'badge') newInventory.activeBadgeId = itemId;
    if (category === 'glow') newInventory.activeAvatarGlowId = itemId;

    if (userId) {
      const storageKey = getUserScopedKey(LOCAL_INVENTORY_KEY, userId);
      safeLocalStorageSet(storageKey, JSON.stringify(newInventory));
    }

    return newInventory;
  }
};

// Deterministic Daily Problem of the Day (POTD)
export function getDailyProblem(): Problem {
  const today = new Date();
  const dateSeed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
  
  // Pick an interesting non-trivial problem out of the 5,200 catalogue
  const problemIndex = Math.abs(dateSeed * 2654435761) % ALL_PROBLEMS.length;
  return ALL_PROBLEMS[problemIndex] || ALL_PROBLEMS[0];
}

export function isPOTDSolvedToday(userId?: string | null): boolean {
  if (!userId) return false;
  try {
    const today = new Date().toISOString().slice(0, 10);
    const key = getUserScopedKey(LOCAL_POTD_KEY, userId);
    const raw = localStorage.getItem(key);
    if (raw) {
      const data = JSON.parse(raw);
      return data.date === today && data.solved === true;
    }
  } catch {}
  return false;
}

export async function recordPOTDSolve(userId: string, problemId: string): Promise<UserStats> {
  const today = new Date().toISOString().slice(0, 10);
  const key = getUserScopedKey(LOCAL_POTD_KEY, userId);
  safeLocalStorageSet(key, JSON.stringify({ date: today, solved: true, problemId }));

  // Award double XP for POTD solve (+50 bonus XP)
  return await userStatsService.recordRevisionSolve(problemId, 'Hard', userId);
}
