import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useProblem } from '../context/ProblemContext';
import { Problem } from '../types/problem';
import { StoreCategory, StoreItem, UserInventory } from '../types/battle';
import { 
  getDailyProblem, 
  isPOTDSolvedToday, 
  rewardsStoreService 
} from '../lib/storeService';
import { userStatsService, UserStats } from '../lib/supabase';
import { 
  Sparkles, 
  Flame, 
  Trophy, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  Lock, 
  ShoppingBag, 
  Palette, 
  Award, 
  Zap, 
  ShieldCheck, 
  Check, 
  Coins,
  Calendar,
  Layers,
  ChevronRight
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface POTDStorePageProps {
  onSelectProblem: (problem: Problem) => void;
  onOpenAuthModal?: () => void;
}

export const POTDStorePage: React.FC<POTDStorePageProps> = ({ onSelectProblem, onOpenAuthModal }) => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState<'potd' | 'store'>('potd');
  const [storeFilter, setStoreFilter] = useState<StoreCategory | 'all'>('all');
  
  const [dailyProblem, setDailyProblem] = useState<Problem>(getDailyProblem());
  const [isSolvedToday, setIsSolvedToday] = useState(false);
  const [stats, setStats] = useState<UserStats | null>(null);
  const [inventory, setInventory] = useState<UserInventory>(rewardsStoreService.getUserInventory());
  const [timeUntilNext, setTimeUntilNext] = useState<string>('');
  const [purchaseError, setPurchaseError] = useState<string | null>(null);
  const [purchaseSuccess, setPurchaseSuccess] = useState<string | null>(null);

  useEffect(() => {
    const updateData = () => {
      setDailyProblem(getDailyProblem());
      if (user) {
        setIsSolvedToday(isPOTDSolvedToday(user.id));
        userStatsService.getStats(user.id).then(setStats);
        setInventory(rewardsStoreService.getUserInventory(user.id));
      }
    };
    updateData();
    window.addEventListener('codetutor_status_synced', updateData);
    return () => window.removeEventListener('codetutor_status_synced', updateData);
  }, [user]);

  // Live countdown to midnight UTC
  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
      const diffMs = tomorrow.getTime() - now.getTime();
      
      const hours = Math.floor(diffMs / (1000 * 60 * 60)).toString().padStart(2, '0');
      const mins = Math.floor((diffMs / (1000 * 60)) % 60).toString().padStart(2, '0');
      const secs = Math.floor((diffMs / 1000) % 60).toString().padStart(2, '0');
      setTimeUntilNext(`${hours}h ${mins}m ${secs}s`);
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const handlePurchase = async (item: StoreItem) => {
    if (!user) {
      onOpenAuthModal?.();
      return;
    }

    setPurchaseError(null);
    setPurchaseSuccess(null);

    const result = await rewardsStoreService.purchaseStoreItem(user.id, item.id);
    if (!result.success) {
      setPurchaseError(result.error || 'Purchase failed.');
      setTimeout(() => setPurchaseError(null), 4000);
    } else if (result.newInventory) {
      setInventory(result.newInventory);
      setPurchaseSuccess(`Unlocked ${item.name}! 🎉`);
      setTimeout(() => setPurchaseSuccess(null), 3500);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };

  const handleEquip = (category: StoreCategory, itemId: string) => {
    if (!user) return;
    const updated = rewardsStoreService.equipStoreItem(user.id, category, itemId);
    setInventory(updated);
  };

  const catalog = rewardsStoreService.getStoreCatalog();
  const filteredCatalog = storeFilter === 'all' 
    ? catalog 
    : catalog.filter((i) => i.category === storeFilter);

  const totalXP = stats?.total_xp || 0;

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8 space-y-8 animate-fadeIn">
      {/* Top Banner Header */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#0d1322] via-[#16233d] to-[#0f172a] border border-amber-500/20 shadow-2xl relative overflow-hidden">
        <div className="absolute -top-16 -right-16 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono text-xs font-semibold">
              <Trophy className="w-3.5 h-3.5 fill-amber-400" />
              <span>Daily Challenge & Virtual Rewards</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight flex items-center gap-2">
              Problem of the Day & Store
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Solve the daily challenge for a 2x XP boost, earn coins, and unlock custom editor themes, badges, and avatar aura effects!
            </p>
          </div>

          {/* User XP & Coins Balance Card */}
          <div className="bg-slate-900/90 border border-amber-500/30 p-4 rounded-2xl flex items-center gap-4 shadow-xl">
            <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shadow-inner">
              <Coins className="w-6 h-6" />
            </div>
            <div>
              <div className="text-[11px] text-amber-400/90 font-semibold uppercase tracking-wider">Your Balance</div>
              <div className="text-2xl font-black text-white flex items-baseline gap-1 font-mono">
                <span>{totalXP}</span>
                <span className="text-xs font-semibold text-amber-400">XP</span>
              </div>
              <div className="text-[11px] text-slate-400">Earn +10 to +50 XP per solve</div>
            </div>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-2 mt-6 pt-6 border-t border-slate-800/80">
          <button
            onClick={() => setActiveTab('potd')}
            className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition cursor-pointer ${
              activeTab === 'potd'
                ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
                : 'bg-slate-850 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800'
            }`}
          >
            <Calendar className="w-4 h-4" />
            <span>Problem of the Day (POTD)</span>
            {isSolvedToday && (
              <span className="px-1.5 py-0.2 rounded bg-slate-950/40 text-[10px] font-mono">Solved</span>
            )}
          </button>

          <button
            onClick={() => setActiveTab('store')}
            className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition cursor-pointer ${
              activeTab === 'store'
                ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
                : 'bg-slate-850 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800'
            }`}
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Rewards Shop 💎</span>
            <span className="px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300 text-[10px] font-mono border border-amber-500/30">
              {catalog.length} Items
            </span>
          </button>
        </div>
      </div>

      {/* Notifications */}
      {purchaseSuccess && (
        <div className="p-4 rounded-xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 text-xs font-bold flex items-center gap-2 animate-fadeIn">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{purchaseSuccess}</span>
        </div>
      )}

      {purchaseError && (
        <div className="p-4 rounded-xl bg-rose-500/15 border border-rose-500/40 text-rose-300 text-xs font-bold flex items-center gap-2 animate-fadeIn">
          <Zap className="w-4 h-4 text-rose-400 shrink-0" />
          <span>{purchaseError}</span>
        </div>
      )}

      {/* TAB 1: DAILY PROBLEM OF THE DAY */}
      {activeTab === 'potd' && (
        <div className="space-y-6">
          {/* Main POTD Showcase Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-6 relative overflow-hidden">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500 to-orange-500 flex items-center justify-center text-slate-950 shadow-lg shadow-amber-500/20">
                  <Flame className="w-6 h-6 fill-slate-950" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-amber-400">TODAY'S GLOBAL CHALLENGE</span>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-mono text-[10px] font-bold border border-emerald-500/30 flex items-center gap-1">
                      <Sparkles className="w-2.5 h-2.5" /> 2X XP BONUS
                    </span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white mt-0.5">
                    {dailyProblem.title}
                  </h2>
                </div>
              </div>

              {/* Countdown Timer */}
              <div className="flex items-center gap-2 bg-slate-950 px-3.5 py-2 rounded-xl border border-slate-800 text-xs font-mono text-slate-300">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                <span>Next in: <strong className="text-white">{timeUntilNext}</strong></span>
              </div>
            </div>

            {/* Tags & Difficulty Bar */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className={`px-2.5 py-1 rounded-lg text-xs font-bold border ${
                dailyProblem.difficulty === 'Easy' 
                  ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30' 
                  : dailyProblem.difficulty === 'Medium'
                  ? 'bg-amber-500/10 text-amber-400 border-amber-500/30'
                  : 'bg-rose-500/10 text-rose-400 border-rose-500/30'
              }`}>
                {dailyProblem.difficulty}
              </span>

              <span className="px-2.5 py-1 rounded-lg bg-slate-800/80 text-slate-300 text-xs font-medium border border-slate-700/60">
                {dailyProblem.category || 'General Algorithms'}
              </span>

              {dailyProblem.tags?.map((t) => (
                <span key={t} className="px-2 py-1 rounded-lg bg-slate-850 text-slate-400 text-xs border border-slate-800">
                  #{t}
                </span>
              ))}
            </div>

            {/* Problem Description Preview */}
            <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 text-xs text-slate-300 leading-relaxed font-mono whitespace-pre-wrap max-h-48 overflow-y-auto">
              {dailyProblem.description}
            </div>

            {/* Sample Test Case */}
            {dailyProblem.sample_test_cases && dailyProblem.sample_test_cases.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
                  <div className="text-[11px] font-mono text-slate-400 font-bold mb-1">SAMPLE INPUT</div>
                  <pre className="text-xs text-emerald-400 font-mono">{dailyProblem.sample_test_cases[0].input || '(No input)'}</pre>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
                  <div className="text-[11px] font-mono text-slate-400 font-bold mb-1">SAMPLE OUTPUT</div>
                  <pre className="text-xs text-teal-300 font-mono">{dailyProblem.sample_test_cases[0].output}</pre>
                </div>
              </div>
            )}

            {/* Action Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-800">
              <div className="text-xs text-slate-400 flex items-center gap-2">
                {isSolvedToday ? (
                  <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    You solved today's problem! +50 Bonus XP added.
                  </span>
                ) : (
                  <span>Submit an accepted solution before midnight to claim 2x XP!</span>
                )}
              </div>

              <button
                onClick={() => onSelectProblem(dailyProblem)}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 text-xs font-extrabold flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 active:scale-95 transition cursor-pointer"
              >
                <span>{isSolvedToday ? 'Solve Again in Workspace' : 'Solve POTD in Workspace'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: REWARDS SHOP */}
      {activeTab === 'store' && (
        <div className="space-y-6">
          {/* Filter Categories */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            {[
              { id: 'all', label: 'All Rewards' },
              { id: 'theme', label: 'Monaco Themes 🎨' },
              { id: 'badge', label: 'Profile Badges ⚔️' },
              { id: 'glow', label: 'Avatar Aura Glows 💫' },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setStoreFilter(f.id as any)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition cursor-pointer ${
                  storeFilter === f.id
                    ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                    : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Grid of Store Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredCatalog.map((item) => {
              const isUnlocked = inventory.unlockedItemIds.includes(item.id);
              const isActive = 
                (item.category === 'theme' && inventory.activeThemeId === item.id) ||
                (item.category === 'badge' && inventory.activeBadgeId === item.id) ||
                (item.category === 'glow' && inventory.activeAvatarGlowId === item.id);
              const canAfford = totalXP >= item.cost;

              return (
                <div
                  key={item.id}
                  className={`p-5 rounded-2xl bg-slate-900/90 border transition flex flex-col justify-between space-y-4 ${
                    isActive
                      ? 'border-amber-500/60 shadow-lg shadow-amber-500/10'
                      : isUnlocked
                      ? 'border-emerald-500/30 hover:border-emerald-500/60'
                      : 'border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-start justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center text-2xl shadow-inner">
                        {item.icon}
                      </div>

                      <div className="flex items-center gap-1.5 font-mono text-xs font-bold text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded-lg">
                        <Coins className="w-3.5 h-3.5" />
                        <span>{item.cost} XP</span>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-sm font-bold text-white flex items-center gap-1.5">
                        <span>{item.name}</span>
                        {isActive && (
                          <span className="text-[10px] px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300 font-mono border border-amber-500/30">
                            EQUIPPED
                          </span>
                        )}
                      </h3>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* Preview box if theme or glow */}
                    {item.preview && (
                      <div 
                        className="h-10 rounded-lg flex items-center justify-center text-xs font-mono font-bold border"
                        style={{
                          backgroundColor: item.preview.bg || '#0f172a',
                          borderColor: item.preview.border || '#334155',
                          color: item.preview.text || '#f8fafc'
                        }}
                      >
                        Sample Code Preview
                      </div>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="pt-2 border-t border-slate-800/80">
                    {isUnlocked ? (
                      isActive ? (
                        <button
                          disabled
                          className="w-full py-2 rounded-xl bg-slate-800 text-amber-400 text-xs font-bold flex items-center justify-center gap-1.5 opacity-80 cursor-default"
                        >
                          <Check className="w-3.5 h-3.5" />
                          <span>Currently Active</span>
                        </button>
                      ) : (
                        <button
                          onClick={() => handleEquip(item.category, item.id)}
                          className="w-full py-2 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/40 text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer active:scale-95"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>Equip Item</span>
                        </button>
                      )
                    ) : (
                      <button
                        onClick={() => handlePurchase(item)}
                        disabled={!canAfford}
                        className={`w-full py-2 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 ${
                          canAfford
                            ? 'bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 shadow-md shadow-amber-500/20 active:scale-95 cursor-pointer'
                            : 'bg-slate-800 text-slate-500 border border-slate-700/50 cursor-not-allowed'
                        }`}
                      >
                        <Lock className="w-3.5 h-3.5" />
                        <span>{canAfford ? 'Unlock Item' : `Need ${item.cost - totalXP} More XP`}</span>
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
