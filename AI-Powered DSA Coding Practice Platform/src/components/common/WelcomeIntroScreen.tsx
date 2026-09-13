import React, { useState, useEffect, useRef } from "react";
import { Sparkles, Code2, Cpu, Layers, ArrowRight, Zap } from "lucide-react";

interface WelcomeIntroScreenProps {
  onComplete: () => void;
}

export const WelcomeIntroScreen: React.FC<WelcomeIntroScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("Initializing AI Execution Engine...");
  const [isExiting, setIsExiting] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let reqId: number;
    const handleMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(reqId);
      reqId = requestAnimationFrame(() => {
        if (cardRef.current) {
          const { innerWidth, innerHeight } = window;
          const rotY = ((e.clientX / innerWidth) - 0.5) * 16;
          const rotX = ((e.clientY / innerHeight) - 0.5) * -16;
          cardRef.current.style.transform = `rotateY(${rotY}deg) rotateX(${rotX}deg) translateZ(30px)`;
        }
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(reqId);
    };
  }, []);

  useEffect(() => {
    const startTime = Date.now();
    const duration = 1100; // 1.1s quick smooth intro

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(pct);

      if (pct < 30) {
        setStatusText("Pre-warming 5,200 DSA Problem Repository...");
      } else if (pct < 65) {
        setStatusText("Linking Monaco Execution Sandbox & Compilers...");
      } else if (pct < 90) {
        setStatusText("Syncing AI Tutor & Realtime Engine...");
      } else {
        setStatusText("System Ready • Welcome to CodeTutor!");
      }

      if (pct >= 100) {
        clearInterval(timer);
        setTimeout(() => {
          handleFinish();
        }, 150);
      }
    }, 20);

    return () => clearInterval(timer);
  }, []);

  const handleFinish = () => {
    setIsExiting(true);
    setTimeout(() => {
      onComplete();
    }, 450);
  };

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-[#070b14] flex flex-col items-center justify-center overflow-hidden select-none transition-all duration-450 ease-out ${
        isExiting
          ? "opacity-0 scale-105 blur-sm pointer-events-none"
          : "opacity-100 scale-100 blur-0"
      }`}
      style={{ perspective: "1000px" }}
    >
      {/* 3D Cyber Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98110_1px,transparent_1px),linear-gradient(to_bottom,#10b98110_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] animate-pulse opacity-40 pointer-events-none" />

      {/* Floating 3D Main Card with 0-re-render Direct Ref Transform */}
      <div
        ref={cardRef}
        className="relative z-10 flex flex-col items-center text-center px-6 max-w-2xl mx-auto will-change-transform"
        style={{
          transform: "rotateY(0deg) rotateX(0deg) translateZ(30px)",
          transformStyle: "preserve-3d",
          transition: "transform 0.15s ease-out",
        }}
      >
        {/* Top 3D Glowing Hologram Icon Badge */}
        <div className="relative mb-5 group cursor-pointer" onClick={handleFinish}>
          <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500 rounded-3xl blur-lg opacity-50 group-hover:opacity-100 transition duration-300" />
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-slate-900 via-[#0f172a] to-[#0b1329] border border-emerald-400/40 flex items-center justify-center shadow-xl shadow-emerald-500/20 transform group-hover:scale-105 transition duration-200">
            <Code2 className="w-10 h-10 sm:w-12 sm:h-12 text-emerald-400 drop-shadow-[0_0_12px_rgba(52,211,153,0.8)] animate-bounce" />
            <Sparkles className="w-4 h-4 text-cyan-300 absolute top-2 right-2 animate-spin" style={{ animationDuration: "6s" }} />
            <Zap className="w-3.5 h-3.5 text-amber-400 absolute bottom-2 left-2 animate-ping" style={{ animationDuration: "3s" }} />
          </div>
        </div>

        {/* 3D Kinetic Brand Typography */}
        <div className="space-y-1.5 mb-5">
          <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold tracking-[0.2em] uppercase shadow-sm">
            <Cpu className="w-3.5 h-3.5" />
            <span>Next-Gen Coding Practice</span>
          </div>

          <h2 className="text-xs sm:text-sm font-mono font-medium tracking-[0.3em] text-slate-400 uppercase pt-1">
            WELCOME TO
          </h2>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight font-mono text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-200 to-cyan-400 drop-shadow-[0_0_25px_rgba(16,185,129,0.5)]">
            CODETUTOR
          </h1>

          <p className="text-xs sm:text-sm text-slate-400 max-w-lg mx-auto font-sans leading-relaxed">
            AI-Powered DSA Learning Engine • <strong className="text-slate-200">5,200+ Problems</strong> • Realtime Live Cloud Sync
          </p>
        </div>

        {/* 3D Progress Bar & Status */}
        <div className="w-full max-w-md bg-slate-900/90 border border-slate-800 rounded-2xl p-4 shadow-xl backdrop-blur-md space-y-2.5">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-slate-300 flex items-center gap-1.5 truncate">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping shrink-0" />
              <span className="truncate">{statusText}</span>
            </span>
            <span className="text-emerald-400 font-bold ml-2">{progress}%</span>
          </div>

          <div className="w-full h-2 bg-slate-950 rounded-full overflow-hidden p-0.5 border border-slate-800">
            <div
              className="h-full bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 rounded-full transition-all duration-150 shadow-[0_0_10px_rgba(52,211,153,0.8)]"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="flex items-center justify-between pt-1 text-[11px] text-slate-500 font-mono">
            <span className="flex items-center gap-1">
              <Layers className="w-3 h-3 text-emerald-400" />
              52 Modules Active
            </span>
            <button
              onClick={handleFinish}
              className="text-slate-400 hover:text-emerald-400 transition flex items-center gap-1 cursor-pointer font-semibold"
            >
              Skip Intro <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
