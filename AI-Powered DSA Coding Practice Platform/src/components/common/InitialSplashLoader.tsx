import React, { useState, useEffect, useRef } from 'react';
import { 
  Code2, 
  Sparkles, 
  Terminal, 
  Zap, 
  Layers, 
  Activity,
  Boxes,
  Cpu
} from 'lucide-react';

interface InitialSplashLoaderProps {
  onComplete: () => void;
}

const TERMINAL_LOGS = [
  { prefix: '[AI-DSA]', text: 'Initializing 3D Neural Engine v3.0...', status: 'OK', color: 'text-emerald-400' },
  { prefix: '[MODULES]', text: 'Syncing 52 Topic Modules (5,200 Problems)...', status: 'OK', color: 'text-cyan-400' },
  { prefix: '[COMPILER]', text: 'Binding Monaco 3D Workspace (C++, Python, JS, Java)...', status: 'OK', color: 'text-indigo-400' },
  { prefix: '[READY]', text: 'Entering Immersive Coding Environment 🚀', status: 'READY', color: 'text-amber-400' },
];

export const InitialSplashLoader: React.FC<InitialSplashLoaderProps> = ({ onComplete }) => {
  const [activeLogIndex, setActiveLogIndex] = useState(0);
  const [progress, setProgress] = useState(15);
  const [isWarpingOut, setIsWarpingOut] = useState(false);
  
  // 3D Parallax Tilt state
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // 1. 3D Warp-Speed Particle Starfield Canvas Animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Create 3D particles flying in Z depth
    const numParticles = 120;
    const particles = Array.from({ length: numParticles }, () => ({
      x: (Math.random() - 0.5) * width * 1.5,
      y: (Math.random() - 0.5) * height * 1.5,
      z: Math.random() * width,
      size: Math.random() * 2 + 1,
      color: Math.random() > 0.4 ? '#34d399' : Math.random() > 0.5 ? '#38bdf8' : '#818cf8',
    }));

    const render = () => {
      ctx.fillStyle = 'rgba(7, 10, 18, 0.25)';
      ctx.fillRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;

      for (let i = 0; i < numParticles; i++) {
        const p = particles[i];
        p.z -= isWarpingOut ? 18 : 3.5;

        if (p.z <= 0) {
          p.z = width;
          p.x = (Math.random() - 0.5) * width * 1.5;
          p.y = (Math.random() - 0.5) * height * 1.5;
        }

        const k = 250 / p.z;
        const px = p.x * k + cx;
        const py = p.y * k + cy;

        if (px >= 0 && px <= width && py >= 0 && py <= height) {
          const alpha = Math.min(1, (1 - p.z / width) * 1.2);
          const size = Math.max(0.5, (1 - p.z / width) * (isWarpingOut ? 5 : 3.5));
          ctx.beginPath();
          ctx.arc(px, py, size, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = alpha;
          ctx.shadowBlur = 8;
          ctx.shadowColor = p.color;
          ctx.fill();
          ctx.globalAlpha = 1;
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [isWarpingOut]);

  // 2. Interactive 3D Mouse Parallax Tilt
  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = ((clientX - innerWidth / 2) / (innerWidth / 2)) * 14;
    const y = -((clientY - innerHeight / 2) / (innerHeight / 2)) * 14;
    setTilt({ x, y });
  };

  // 3. Step Progress Sequencing
  useEffect(() => {
    const t1 = setTimeout(() => {
      setActiveLogIndex(1);
      setProgress(48);
    }, 380);

    const t2 = setTimeout(() => {
      setActiveLogIndex(2);
      setProgress(78);
    }, 780);

    const t3 = setTimeout(() => {
      setActiveLogIndex(3);
      setProgress(100);
    }, 1200);

    const t4 = setTimeout(() => {
      setIsWarpingOut(true);
    }, 1550);

    const t5 = setTimeout(() => {
      onComplete();
    }, 2000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
    };
  }, [onComplete]);

  return (
    <div
      onMouseMove={handleMouseMove}
      className={`fixed inset-0 z-[99999] bg-[#070a12] flex flex-col items-center justify-center select-none overflow-hidden p-4 sm:p-6 perspective-1500 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isWarpingOut
          ? 'opacity-0 scale-150 blur-lg pointer-events-none'
          : 'opacity-100 scale-100'
      }`}
    >
      {/* 3D Warp Speed Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0" />

      {/* Cyberpunk Neon Glow Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] bg-gradient-to-tr from-emerald-500/15 via-teal-500/10 to-indigo-500/15 rounded-full blur-[150px] pointer-events-none animate-pulse" />

      {/* Skip Button */}
      <button
        onClick={() => {
          setIsWarpingOut(true);
          setTimeout(onComplete, 200);
        }}
        className="absolute top-5 right-5 sm:top-8 sm:right-8 px-3.5 py-1.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-white text-xs font-mono border border-slate-700/80 transition flex items-center gap-1.5 cursor-pointer backdrop-blur-md shadow-xl z-30"
      >
        <span>Skip 3D Intro</span>
        <span>➔</span>
      </button>

      {/* 3D Holographic Parallax Card Container */}
      <div
        className="relative z-10 w-full max-w-xl transform-style-3d transition-transform duration-200 ease-out"
        style={{
          transform: `rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
        }}
      >
        {/* Layer 1: Glassmorphic Main Chassis */}
        <div className="relative bg-gradient-to-b from-slate-900/95 via-[#0c1322]/95 to-slate-950/98 border border-slate-700/80 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-emerald-950/60 backdrop-blur-2xl ring-1 ring-white/15 space-y-6 transform-style-3d">
          
          {/* Top 3D Hero Section */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left transform-style-3d">
            
            {/* 3D Interactive Rotating Hologram Cube */}
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 shrink-0 flex items-center justify-center perspective-1000">
              <div className="w-12 h-12 sm:w-14 sm:h-14 relative transform-style-3d animate-rotateCube3D">
                {/* Face 1: Front */}
                <div 
                  className="absolute inset-0 bg-emerald-500/25 border-2 border-emerald-400 rounded-xl flex items-center justify-center backdrop-blur-md shadow-[0_0_15px_rgba(52,211,153,0.5)]"
                  style={{ transform: 'translateZ(26px)' }}
                >
                  <Code2 className="w-6 h-6 text-emerald-300" />
                </div>
                {/* Face 2: Back */}
                <div 
                  className="absolute inset-0 bg-teal-500/25 border-2 border-teal-400 rounded-xl flex items-center justify-center backdrop-blur-md shadow-[0_0_15px_rgba(45,212,191,0.5)]"
                  style={{ transform: 'rotateY(180deg) translateZ(26px)' }}
                >
                  <Sparkles className="w-6 h-6 text-teal-300" />
                </div>
                {/* Face 3: Right */}
                <div 
                  className="absolute inset-0 bg-indigo-500/25 border-2 border-indigo-400 rounded-xl flex items-center justify-center backdrop-blur-md shadow-[0_0_15px_rgba(129,140,248,0.5)]"
                  style={{ transform: 'rotateY(90deg) translateZ(26px)' }}
                >
                  <span className="text-indigo-300 font-mono font-bold text-xs">O(1)</span>
                </div>
                {/* Face 4: Left */}
                <div 
                  className="absolute inset-0 bg-cyan-500/25 border-2 border-cyan-400 rounded-xl flex items-center justify-center backdrop-blur-md shadow-[0_0_15px_rgba(56,189,248,0.5)]"
                  style={{ transform: 'rotateY(-90deg) translateZ(26px)' }}
                >
                  <span className="text-cyan-300 font-mono font-bold text-xs">5.2K</span>
                </div>
                {/* Face 5: Top */}
                <div 
                  className="absolute inset-0 bg-amber-500/25 border-2 border-amber-400 rounded-xl flex items-center justify-center backdrop-blur-md"
                  style={{ transform: 'rotateX(90deg) translateZ(26px)' }}
                >
                  <Zap className="w-6 h-6 text-amber-300" />
                </div>
                {/* Face 6: Bottom */}
                <div 
                  className="absolute inset-0 bg-emerald-600/30 border-2 border-emerald-500 rounded-xl flex items-center justify-center backdrop-blur-md"
                  style={{ transform: 'rotateX(-90deg) translateZ(26px)' }}
                >
                  <Boxes className="w-6 h-6 text-emerald-400" />
                </div>
              </div>
            </div>

            {/* Title & Holographic Metadata */}
            <div className="space-y-1.5 flex-1 min-w-0" style={{ transform: 'translateZ(35px)' }}>
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-[10px] font-mono font-bold uppercase tracking-wider shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  3D IMMERSIVE PLATFORM
                </span>
                <span className="text-slate-600 text-xs hidden sm:inline">•</span>
                <span className="text-[11px] font-mono text-cyan-400 hidden sm:inline">WebGL Mode</span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white flex items-center justify-center sm:justify-start gap-2">
                <span>ALGO</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-indigo-300 drop-shadow-[0_0_20px_rgba(52,211,153,0.4)]">
                  CRAFT 3D
                </span>
              </h1>

              <p className="text-xs text-slate-400 font-medium">
                5,200 Problems • 52 Modules • Neural AI Tutor
              </p>
            </div>
          </div>

          {/* Layer 2: 3D Holographic Terminal Box */}
          <div 
            className="bg-[#080d18]/90 border border-slate-800 rounded-2xl overflow-hidden shadow-inner font-mono text-xs transform-style-3d"
            style={{ transform: 'translateZ(45px)' }}
          >
            {/* Terminal Header */}
            <div className="bg-slate-900/90 px-3.5 py-2 border-b border-slate-800/80 flex items-center justify-between text-slate-400 text-[11px]">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                <span className="ml-2 text-slate-400 font-semibold text-[10px]">3d-runtime-matrix</span>
              </div>
              <div className="flex items-center gap-1 text-[10px] text-emerald-400">
                <Activity className="w-3 h-3 animate-pulse" />
                <span>3D ACTIVE</span>
              </div>
            </div>

            {/* Terminal Live Stream */}
            <div className="p-3.5 sm:p-4 space-y-2 text-[11px] leading-relaxed">
              {TERMINAL_LOGS.map((log, idx) => {
                const isVisible = activeLogIndex >= idx;
                const isLatest = activeLogIndex === idx;

                if (!isVisible) return null;

                return (
                  <div
                    key={idx}
                    className="flex items-start justify-between gap-2 transition-all duration-300 animate-fadeIn"
                  >
                    <div className="flex items-start gap-2 min-w-0">
                      <span className={`font-bold shrink-0 ${log.color}`}>{log.prefix}</span>
                      <span className="text-slate-300 truncate">
                        {log.text}
                        {isLatest && progress < 100 && (
                          <span className="inline-block w-1.5 h-3.5 bg-emerald-400 ml-1 animate-pulse align-middle" />
                        )}
                      </span>
                    </div>

                    <span className={`shrink-0 font-bold text-[10px] px-1.5 py-0.2 rounded border ${
                      log.status === 'READY'
                        ? 'text-amber-300 bg-amber-500/20 border-amber-500/40 shadow-sm'
                        : 'text-emerald-300 bg-emerald-500/20 border-emerald-500/40'
                    }`}>
                      {log.status === 'READY' ? '✔ READY' : '✓ OK'}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Layer 3: 4 3D Specs Badges */}
          <div 
            className="grid grid-cols-2 sm:grid-cols-4 gap-2"
            style={{ transform: 'translateZ(55px)' }}
          >
            <div className="p-2.5 rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 flex items-center gap-2 shadow-sm">
              <Boxes className="w-4 h-4 shrink-0 text-emerald-400" />
              <div className="min-w-0">
                <div className="font-bold text-xs text-white truncate">5,200+</div>
                <div className="text-[10px] text-slate-400 truncate">Problems</div>
              </div>
            </div>

            <div className="p-2.5 rounded-xl border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 flex items-center gap-2 shadow-sm">
              <Layers className="w-4 h-4 shrink-0 text-cyan-400" />
              <div className="min-w-0">
                <div className="font-bold text-xs text-white truncate">52 Topics</div>
                <div className="text-[10px] text-slate-400 truncate">Modules</div>
              </div>
            </div>

            <div className="p-2.5 rounded-xl border border-amber-500/30 bg-amber-500/10 text-amber-300 flex items-center gap-2 shadow-sm">
              <Sparkles className="w-4 h-4 shrink-0 text-amber-400" />
              <div className="min-w-0">
                <div className="font-bold text-xs text-white truncate">AI Tutor</div>
                <div className="text-[10px] text-slate-400 truncate">Instant Hint</div>
              </div>
            </div>

            <div className="p-2.5 rounded-xl border border-violet-500/30 bg-violet-500/10 text-violet-300 flex items-center gap-2 shadow-sm">
              <Cpu className="w-4 h-4 shrink-0 text-violet-400" />
              <div className="min-w-0">
                <div className="font-bold text-xs text-white truncate">Compiler</div>
                <div className="text-[10px] text-slate-400 truncate">Multi-Lang</div>
              </div>
            </div>
          </div>

          {/* Layer 4: 3D Luminous Laser Progress Bar */}
          <div className="space-y-2 pt-1" style={{ transform: 'translateZ(65px)' }}>
            <div className="relative w-full h-2.5 bg-slate-950 rounded-full overflow-hidden border border-slate-800 shadow-inner">
              <div
                className="h-full bg-gradient-to-r from-emerald-500 via-teal-400 to-indigo-500 rounded-full transition-all duration-300 ease-out shadow-[0_0_20px_rgba(52,211,153,0.9)]"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="flex items-center justify-between text-xs font-mono text-slate-400 px-0.5">
              <div className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                <Zap className="w-3.5 h-3.5 fill-emerald-400 animate-pulse" />
                <span>{progress === 100 ? 'Entering 3D Workspace...' : 'Warping into Matrix...'}</span>
              </div>
              <span className="font-bold text-white font-mono">{progress}%</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
