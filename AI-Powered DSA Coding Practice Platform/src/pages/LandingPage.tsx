import React, { useState } from 'react';
import { 
  Code2, 
  Sparkles, 
  Zap, 
  Layers, 
  CheckCircle2, 
  ArrowRight, 
  Cpu, 
  Terminal, 
  BookOpen, 
  Shuffle, 
  BarChart3, 
  Award, 
  Crown, 
  FileText, 
  Play, 
  Check, 
  Flame, 
  ShieldCheck, 
  ChevronRight, 
  Boxes
} from 'lucide-react';

interface LandingPageProps {
  onStartCoding: () => void;
  onExploreProblems: (topic?: string) => void;
  onOpenRevision: () => void;
  onOpenDashboard: () => void;
  onOpenLeaderboard: () => void;
  onOpenWeeklyReport?: () => void;
}

const FEATURED_MODULES = [
  { name: 'Pattern Printing', count: 100, color: 'from-teal-500/20 to-emerald-500/20 border-teal-500/30 text-teal-300' },
  { name: 'Loops & Iterations', count: 100, color: 'from-indigo-500/20 to-blue-500/20 border-indigo-500/30 text-indigo-300' },
  { name: 'Arrays & Matrices', count: 100, color: 'from-cyan-500/20 to-blue-500/20 border-cyan-500/30 text-cyan-300' },
  { name: 'Recursion & Backtracking', count: 100, color: 'from-rose-500/20 to-pink-500/20 border-rose-500/30 text-rose-300' },
  { name: 'Functions & Lambdas', count: 100, color: 'from-violet-500/20 to-purple-500/20 border-violet-500/30 text-violet-300' },
  { name: 'OOP & Classes', count: 100, color: 'from-amber-500/20 to-orange-500/20 border-amber-500/30 text-amber-300' },
  { name: 'C++ STL Containers', count: 100, color: 'from-emerald-500/20 to-teal-500/20 border-emerald-500/30 text-emerald-300' },
  { name: 'Pointers & Memory', count: 100, color: 'from-fuchsia-500/20 to-purple-500/20 border-fuchsia-500/30 text-fuchsia-300' },
  { name: 'Stacks & Queues', count: 100, color: 'from-sky-500/20 to-indigo-500/20 border-sky-500/30 text-sky-300' },
  { name: 'Bit Manipulation', count: 100, color: 'from-lime-500/20 to-emerald-500/20 border-lime-500/30 text-lime-300' },
  { name: 'Inheritance & Poly', count: 100, color: 'from-pink-500/20 to-rose-500/20 border-pink-500/30 text-pink-300' },
  { name: 'Algorithms & Sorting', count: 100, color: 'from-yellow-500/20 to-amber-500/20 border-yellow-500/30 text-yellow-300' },
];

const CODE_SAMPLE = `// Two Sum - Optimal Hash Table Approach
#include <iostream>
#include <vector>
#include <unordered_map>
using namespace std;

vector<int> twoSum(vector<int>& nums, int target) {
    unordered_map<int, int> seen;
    for (int i = 0; i < nums.size(); i++) {
        int complement = target - nums[i];
        if (seen.count(complement)) {
            return {seen[complement], i}; // O(1) Lookup
        }
        seen[nums[i]] = i;
    }
    return {};
}

int main() {
    vector<int> nums = {2, 7, 11, 15};
    int target = 9;
    vector<int> res = twoSum(nums, target);
    cout << "[" << res[0] << ", " << res[1] << "]" << endl;
    return 0;
}`;

export const LandingPage: React.FC<LandingPageProps> = ({
  onStartCoding,
  onExploreProblems,
  onOpenRevision,
  onOpenDashboard,
  onOpenLeaderboard,
  onOpenWeeklyReport,
}) => {
  const [activeMockTab, setActiveMockTab] = useState<'code' | 'ai' | 'console'>('code');
  const [copiedCode, setCopiedCode] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(CODE_SAMPLE);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="relative min-h-[calc(100dvh-3.5rem)] bg-[#070a13] text-slate-100 selection:bg-emerald-500/30 selection:text-emerald-200 overflow-y-auto overflow-x-hidden animate-fadeIn">
      {/* Background Animated Gradient Glow Orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[650px] overflow-hidden pointer-events-none -z-10">
        <div className="absolute -top-32 left-1/4 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-20 right-1/4 w-[450px] h-[450px] bg-indigo-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-60 left-1/3 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }} />
        {/* Subtle Cyber Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b0f_1px,transparent_1px),linear-gradient(to_bottom,#1e293b0f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent100%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20 space-y-20">
        {/* ==================== HERO SECTION ==================== */}
        <section className="text-center space-y-6 max-w-4xl mx-auto pt-4 sm:pt-8">
          {/* Top Floating Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-emerald-500/15 via-teal-500/10 to-indigo-500/15 border border-emerald-500/30 text-xs font-semibold text-emerald-300 shadow-lg shadow-emerald-950/40">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span>NEXT-GEN AI DSA PRACTICE SUITE</span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-300 font-mono">5,200+ Problems</span>
          </div>

          {/* Main Hero Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
            Master DSA with{' '}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">
              Real-Time AI Tutoring
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base lg:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Practice 5,200+ algorithmic problems across 52 structured modules.
            Get instant zero-latency multi-language execution, step-by-step logic diagnosis, and gamified spaced repetition.
          </p>

          {/* Hero Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={onStartCoding}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:-translate-y-0.5 transition duration-200 cursor-pointer group"
            >
              <Zap className="w-5 h-5 fill-slate-950 group-hover:scale-110 transition" />
              <span>Start Coding Now (Free)</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </button>

            <button
              onClick={() => onExploreProblems()}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-sm sm:text-base flex items-center justify-center gap-2 border border-slate-700 hover:border-slate-600 shadow-md transition duration-200 cursor-pointer"
            >
              <BookOpen className="w-4 h-4 text-emerald-400" />
              <span>Browse 5,200 Problems</span>
            </button>

            <button
              onClick={onOpenRevision}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 hover:text-amber-200 font-semibold text-sm sm:text-base flex items-center justify-center gap-2 border border-amber-500/30 transition duration-200 cursor-pointer"
            >
              <Shuffle className="w-4 h-4 text-amber-400" />
              <span>Revision Deck (+50 XP)</span>
            </button>
          </div>

          {/* Quick Metrics Bar */}
          <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto border-t border-slate-800/80">
            <div className="text-center p-2">
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono">5,200+</div>
              <div className="text-xs text-slate-400 mt-0.5">Curated DSA Problems</div>
            </div>
            <div className="text-center p-2">
              <div className="text-2xl sm:text-3xl font-extrabold text-teal-400 font-mono">52</div>
              <div className="text-xs text-slate-400 mt-0.5">Core DSA Modules</div>
            </div>
            <div className="text-center p-2">
              <div className="text-2xl sm:text-3xl font-extrabold text-indigo-400 font-mono">4 Langs</div>
              <div className="text-xs text-slate-400 mt-0.5">C++, Python, JS, Java</div>
            </div>
            <div className="text-center p-2">
              <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-mono">0ms</div>
              <div className="text-xs text-slate-400 mt-0.5">Execution Latency</div>
            </div>
          </div>
        </section>

        {/* ==================== INTERACTIVE LIVE IDE DEMO ==================== */}
        <section className="space-y-4 max-w-5xl mx-auto">
          <div className="flex items-center justify-between px-2">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
              <Terminal className="w-4 h-4" />
              <span>LIVE INTERACTIVE ENVIRONMENT PREVIEW</span>
            </div>
            <button
              onClick={onStartCoding}
              className="text-xs text-slate-400 hover:text-emerald-400 flex items-center gap-1 transition cursor-pointer"
            >
              <span>Launch in Full IDE</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="rounded-2xl bg-gradient-to-b from-[#111827] to-[#0d1322] border border-slate-700/80 shadow-2xl shadow-emerald-950/20 overflow-hidden">
            {/* Top Mock Window Bar */}
            <div className="px-4 py-3 bg-[#0b0f19] border-b border-slate-800 flex items-center justify-between select-none">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                <span className="text-xs font-mono text-slate-400 ml-2">two_sum_optimal.cpp — C++17</span>
              </div>

              {/* Mock Tab Switcher */}
              <div className="flex items-center gap-1 bg-slate-900 p-0.5 rounded-lg border border-slate-800 text-xs">
                <button
                  onClick={() => setActiveMockTab('code')}
                  className={`px-3 py-1 rounded-md font-semibold transition ${
                    activeMockTab === 'code' ? 'bg-slate-800 text-emerald-400 shadow-sm' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Code Editor
                </button>
                <button
                  onClick={() => setActiveMockTab('ai')}
                  className={`px-3 py-1 rounded-md font-semibold transition flex items-center gap-1 ${
                    activeMockTab === 'ai' ? 'bg-slate-800 text-teal-300 shadow-sm' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Sparkles className="w-3 h-3 text-teal-400" />
                  AI Diagnosis
                </button>
                <button
                  onClick={() => setActiveMockTab('console')}
                  className={`px-3 py-1 rounded-md font-semibold transition ${
                    activeMockTab === 'console' ? 'bg-slate-800 text-emerald-400 shadow-sm' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Console Output
                </button>
              </div>
            </div>

            {/* Mock Body */}
            <div className="p-4 sm:p-6 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto">
              {activeMockTab === 'code' && (
                <div className="space-y-4">
                  <pre className="text-slate-300">
                    <code>{CODE_SAMPLE}</code>
                  </pre>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-800/80">
                    <div className="flex items-center gap-2 text-emerald-400 text-xs">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Passed all 5 Sample Test Cases • Memory: 10.4 MB • 4ms</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={handleCopy}
                        className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-sans font-semibold flex items-center gap-1.5 transition cursor-pointer"
                      >
                        {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : 'Copy Code'}
                      </button>
                      <button
                        onClick={onStartCoding}
                        className="px-4 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-sans font-bold flex items-center gap-1.5 shadow transition cursor-pointer"
                      >
                        <Play className="w-3.5 h-3.5 fill-slate-950" />
                        <span>Run in IDE</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {activeMockTab === 'ai' && (
                <div className="space-y-4 font-sans text-xs sm:text-sm">
                  <div className="p-3.5 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <div className="font-bold text-teal-300 text-sm">AI Algorithmic Evaluation: Optimal O(N) Hash Table</div>
                      <p className="text-slate-300 leading-relaxed">
                        Your solution utilizes a single-pass hash map which reduces time complexity from brute force <strong className="text-white">O(N²)</strong> down to <strong className="text-emerald-400">O(N)</strong> with <strong className="text-emerald-400">O(N)</strong> auxiliary space.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 space-y-1">
                      <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Time Complexity</div>
                      <div className="text-emerald-400 font-mono font-bold text-base">O(N) — Linear</div>
                      <p className="text-slate-400 text-xs">Each lookup and insertion in `unordered_map` operates in average O(1) time.</p>
                    </div>
                    <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 space-y-1">
                      <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Space Complexity</div>
                      <div className="text-indigo-400 font-mono font-bold text-base">O(N) — Auxiliary</div>
                      <p className="text-slate-400 text-xs">Stores at most N elements in hash map to keep track of previous indices.</p>
                    </div>
                  </div>
                </div>
              )}

              {activeMockTab === 'console' && (
                <div className="space-y-3 font-mono text-xs">
                  <div className="text-emerald-400 font-bold flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>VERDICT: ACCEPTED (100% Correct)</span>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 space-y-1 text-slate-300">
                    <div className="text-slate-500">// STDOUT Execution Logs</div>
                    <div>Input: nums = [2, 7, 11, 15], target = 9</div>
                    <div className="text-emerald-300">Output: [0, 1]</div>
                    <div className="text-slate-500">Expected: [0, 1]</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ==================== 4 CORE PILLARS / FEATURES ==================== */}
        <section className="space-y-8">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Engineered for Maximum DSA Mastery
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Everything you need to go from beginner patterns to cracking FAANG and high-growth tech coding rounds.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="p-6 rounded-2xl bg-slate-900/80 hover:bg-slate-900 border border-slate-800 hover:border-emerald-500/40 transition duration-300 group space-y-4 shadow-lg hover:shadow-emerald-950/30">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition">
                <Boxes className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition">
                5,200+ Curated Problems
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                52 structured topics covering Pattern Printing, Recursion, Object-Oriented Programming, and full C++ STL Containers.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-6 rounded-2xl bg-slate-900/80 hover:bg-slate-900 border border-slate-800 hover:border-teal-500/40 transition duration-300 group space-y-4 shadow-lg hover:shadow-teal-950/30">
              <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 group-hover:scale-110 transition">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-teal-300 transition">
                Step-by-Step AI Tutor
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                Instant code diagnosis, line-by-line breakdown, mathematical invariants, and interactive interview follow-up Q&A.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-6 rounded-2xl bg-slate-900/80 hover:bg-slate-900 border border-slate-800 hover:border-amber-500/40 transition duration-300 group space-y-4 shadow-lg hover:shadow-amber-950/30">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:scale-110 transition">
                <Flame className="w-6 h-6 fill-amber-400/20" />
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition">
                Spaced Revision & XP
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                Smart flashcard revision hub with practice streak multipliers and +50 XP rewards to keep problem-solving fresh.
              </p>
            </div>

            {/* Card 4 */}
            <div className="p-6 rounded-2xl bg-slate-900/80 hover:bg-slate-900 border border-slate-800 hover:border-indigo-500/40 transition duration-300 group space-y-4 shadow-lg hover:shadow-indigo-950/30">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition">
                Weekly PDF Reports
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                Export verifiable proof-of-work PDF reports with custom date filters and full solution codes for mentors or recruiters.
              </p>
            </div>
          </div>
        </section>

        {/* ==================== 52 MODULE TOPIC EXPLORER ==================== */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="space-y-1">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Explore All 52 Structured Modules
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm">
                Each module includes 100 progressive problems with starter templates and automated tests.
              </p>
            </div>

            <button
              onClick={() => onExploreProblems()}
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-semibold flex items-center gap-1.5 transition border border-slate-700 cursor-pointer shrink-0"
            >
              <span>View All 5,200 in Bank</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {FEATURED_MODULES.map((mod) => (
              <div
                key={mod.name}
                onClick={() => onExploreProblems(mod.name)}
                className={`p-4 rounded-xl bg-gradient-to-br ${mod.color} border hover:scale-[1.02] transition duration-200 cursor-pointer group flex flex-col justify-between`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-200 group-hover:text-white">
                    {mod.name}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-900/80 border border-slate-700/60 font-bold">
                    {mod.count} Qs
                  </span>
                </div>
                <div className="mt-3 flex items-center justify-between text-[11px] text-slate-400 group-hover:text-emerald-300">
                  <span>Explore Module</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ==================== BOTTOM CTA BANNER ==================== */}
        <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-emerald-950/80 via-slate-900 to-indigo-950/80 border border-emerald-500/30 text-center space-y-6 shadow-2xl relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Ready to Accelerate Your DSA Journey?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Join thousands of developers practicing algorithms, mastering data structures, and building interview confidence today.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onStartCoding}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-xl shadow-emerald-500/25 transition cursor-pointer"
            >
              <Zap className="w-4 h-4 fill-slate-950" />
              <span>Launch Workspace IDE</span>
            </button>

            <button
              onClick={onOpenLeaderboard}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-sm sm:text-base flex items-center justify-center gap-2 border border-slate-700 transition cursor-pointer"
            >
              <Crown className="w-4 h-4 text-yellow-400" />
              <span>Global Leaderboard</span>
            </button>
          </div>
        </section>

        {/* ==================== FOOTER ==================== */}
        <footer className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold">
              <Code2 className="w-3.5 h-3.5" />
            </div>
            <span className="font-semibold text-slate-400">CodeTutor AI</span>
            <span>• 5,200 Problem DSA Master Platform</span>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <button onClick={onStartCoding} className="hover:text-emerald-400 transition cursor-pointer">Workspace</button>
            <button onClick={() => onExploreProblems()} className="hover:text-emerald-400 transition cursor-pointer">Problem Bank</button>
            <button onClick={onOpenRevision} className="hover:text-emerald-400 transition cursor-pointer">Revision</button>
            <button onClick={onOpenDashboard} className="hover:text-emerald-400 transition cursor-pointer">Analytics</button>
            {onOpenWeeklyReport && (
              <button onClick={onOpenWeeklyReport} className="hover:text-emerald-400 transition cursor-pointer">Weekly Report</button>
            )}
          </div>
        </footer>
      </div>
    </div>
  );
};
