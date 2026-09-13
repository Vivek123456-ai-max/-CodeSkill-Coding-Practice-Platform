import React, { useState, useEffect } from 'react';
import { Code2, Sparkles, Zap, Cpu, CheckCircle2, Terminal } from 'lucide-react';

interface IntroSplashLoaderProps {
  onComplete?: () => void;
}

const LOADING_STEPS = [
  { text: 'Initializing CodeTutor AI Engine...', progress: 25, icon: Cpu },
  { text: 'Loading 5,200+ Curated DSA Problems...', progress: 55, icon: Terminal },
  { text: 'Calibrating Real-Time Multi-Language Sandbox...', progress: 85, icon: Zap },
  { text: 'System Ready. Welcome to CodeTutor AI! 🚀', progress: 100, icon: Sparkles },
];

export const IntroSplashLoader: React.FC<IntroSplashLoaderProps> = ({ onComplete }) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Smooth progress ticker
    const startTime = Date.now();
    const duration = 1800; // 1.8 seconds total smooth cinematic intro

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const rawPct = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(rawPct);

      if (rawPct < 30) {
        setCurrentStepIndex(0);
      } else if (rawPct < 65) {
        setCurrentStepIndex(1);
      } else if (rawPct < 90) {
        setCurrentStepIndex(2);
      } else {
        setCurrentStepIndex(3);
      }

      if (elapsed >= duration) {
        clearInterval(interval);
        setProgress(100);
        // Start smooth exit transition
        setTimeout(() => {
          setIsFadingOut(true);
          setTimeout(() => {
            setIsFinished(true);
            onComplete?.();
          }, 600);
        }, 250);
      }
    }, 20);

    return () => clearInterval(interval);
  }, [onComplete]);

  const handleSkip = () => {
    setIsFadingOut(true);
    setTimeout(() => {
      setIsFinished(true);
      onComplete?.();
    }, 300);
  };

  if (isFinished) return null;

  const currentStep = LOADING_STEPS[currentStepIndex];
  const StepIcon = currentStep.icon;

  return (
    <div
      onClick={handleSkip}
      className={`fixed inset-0 z-[9999] bg-[#050811] flex flex-col items-center justify-center select-none cursor-pointer overflow-hidden transition-all duration-700 ease-out ${
        isFadingOut 
          ? 'opacity-0 scale-110 pointer-events-none' 
          : 'opacity-100 scale-100'
      }`}
    >
      {/* Background Animated Gradient Glow Orbs & Cyber Grid */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute top-1/3 right-1/3 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b12_1px,transparent_1px),linear-gradient(to_bottom,#1e293b12_1px,transparent_1px)] bg-[size:3rem_3rem]" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-md w-full space-y-8">
        {/* Hologram Orbit Center */}
        <div className="relative flex items-center justify-center">
          {/* Outer Pulsing Glow Ring */}
          <div className="absolute w-32 h-32 rounded-full border border-emerald-500/20 animate-ping opacity-30" />
          
          {/* Rotating Dashed Orbit Ring */}
          <div className="absolute w-28 h-28 rounded-full border-2 border-dashed border-emerald-400/40 animate-spin" style={{ animationDuration: '8s' }} />
          
          {/* Secondary Counter-Rotating Ring */}
          <div className="absolute w-24 h-24 rounded-full border border-indigo-400/30 border-t-teal-400 animate-spin" style={{ animationDuration: '4s', animationDirection: 'reverse' }} />

          {/* Central Core Icon Badge */}
          <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-tr from-emerald-500 via-teal-400 to-indigo-500 p-0.5 shadow-2xl shadow-emerald-500/30">
            <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
              <Code2 className="w-8 h-8 text-emerald-400 animate-pulse" />
            </div>
          </div>
        </div>

        {/* Brand Title & Sub-badge */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-center gap-2">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white font-sans">
              CodeTutor <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">AI</span>
            </h1>
          </div>
          <p className="text-xs font-mono text-slate-400 tracking-wider uppercase">
            5,200+ Master DSA Engine
          </p>
        </div>

        {/* Dynamic Progress Bar & Stepper */}
        <div className="w-full space-y-3">
          {/* Progress Percentage & Status */}
          <div className="flex items-center justify-between text-xs font-mono">
            <div className="flex items-center gap-1.5 text-emerald-400 truncate max-w-[280px]">
              <StepIcon className="w-3.5 h-3.5 shrink-0 animate-spin" style={{ animationDuration: '3s' }} />
              <span className="truncate">{currentStep.text}</span>
            </div>
            <span className="text-white font-bold ml-2">{progress}%</span>
          </div>

          {/* Glowing Progress Track */}
          <div className="w-full h-2 bg-slate-900/90 rounded-full border border-slate-800/90 overflow-hidden relative shadow-inner">
            <div
              className="h-full bg-gradient-to-r from-emerald-500 via-teal-400 to-indigo-500 rounded-full transition-all duration-75 relative shadow-[0_0_12px_rgba(52,211,153,0.5)]"
              style={{ width: `${progress}%` }}
            >
              {/* Glowing leading head light */}
              <div className="absolute right-0 top-0 bottom-0 w-2 bg-white rounded-full shadow-[0_0_8px_#ffffff]" />
            </div>
          </div>
        </div>

        {/* Skip Hint */}
        <div className="text-[11px] font-mono text-slate-600 hover:text-slate-400 transition cursor-pointer">
          Click anywhere or press any key to skip
        </div>
      </div>
    </div>
  );
};
