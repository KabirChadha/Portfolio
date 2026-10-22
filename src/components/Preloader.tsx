'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('BOOTING KERNEL SUBSYSTEMS...');
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Total duration ~1.4 seconds before dissolve
    const duration = 1400;
    const intervalTime = 20;
    const step = 100 / (duration / intervalTime);

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + step;
        if (next >= 100) {
          clearInterval(interval);
          setStatusText('SYS_ONLINE // ACCESS GRANTED');
          setTimeout(() => {
            setIsFinished(true);
            setTimeout(() => {
              onComplete();
            }, 500);
          }, 200);
          return 100;
        }

        if (next < 25) {
          setStatusText('INITIALIZING KERNEL TELEMETRY...');
        } else if (next < 50) {
          setStatusText('CALIBRATING ZERO-LEAKAGE INVARIANCE [DELTA: 0.00e+00]...');
        } else if (next < 75) {
          setStatusText('SYNCHRONIZING DISTRIBUTED WEBSOCKET CHANNELS...');
        } else if (next < 95) {
          setStatusText('AUDITING DEMOGRAPHIC PARITY & FAIRNESS TAXONOMY...');
        } else {
          setStatusText('FINALIZING HIGH-FIDELITY PERSPECTIVE ENGINE...');
        }

        return next;
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, [onComplete]);

  // Handle keyboard bypass
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === 'Enter') {
        setProgress(100);
        setIsFinished(true);
        onComplete();
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: -30,
            filter: 'blur(10px)',
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
          }}
          className="fixed inset-0 z-50 bg-[#0A0A0C] text-[#F8F8F8] flex flex-col items-center justify-center p-6 select-none cursor-pointer"
          onClick={() => {
            setProgress(100);
            setIsFinished(true);
            onComplete();
          }}
          title="Click to skip preloader"
        >
          {/* Subtle dark editorial grid */}
          <div className="absolute inset-0 dark-editorial-grid opacity-20 pointer-events-none"></div>

          {/* Minimalist Logo Wireframe Morph in Pure Monochrome White */}
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 mb-8 flex items-center justify-center">
            {/* Morphing Outer Hexagonal Wireframe */}
            <motion.svg
              viewBox="0 0 100 100"
              className="w-full h-full text-white"
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
            >
              <polygon
                points="50 5, 89 27, 89 73, 50 95, 11 73, 11 27"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeDasharray="18 6"
                className="opacity-30"
              />
            </motion.svg>

            {/* Inner Morphing Diamond */}
            <motion.svg
              viewBox="0 0 100 100"
              className="absolute inset-0 w-full h-full text-white"
              initial={{ scale: 0.85, rotate: 0 }}
              animate={{
                scale: [0.85, 1.05, 0.85],
                rotate: [0, -180, -360],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <polygon
                points="50 15, 82 50, 50 85, 18 50"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeDasharray="36 10"
                className="opacity-80"
              />
            </motion.svg>

            {/* Center Monogram Typography: KSC */}
            <div className="absolute inset-0 flex items-center justify-center flex-col">
              <span className="font-mono text-sm tracking-widest font-extrabold text-white">
                KSC
              </span>
              <span className="text-[10px] font-mono text-[#8E8E93] tracking-tighter">
                v2.6.4
              </span>
            </div>
          </div>

          {/* Progress Percentage & Status */}
          <div className="w-full max-w-xs space-y-3 text-center">
            {/* Numerical Percentage */}
            <div className="flex items-baseline justify-center gap-1 font-mono">
              <span className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight tabular-nums">
                {Math.round(progress).toString().padStart(2, '0')}
              </span>
              <span className="text-lg font-bold text-[#8E8E93]">%</span>
            </div>

            {/* Micro Progress Bar */}
            <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden border border-white/15">
              <motion.div
                className="h-full bg-white rounded-full"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'easeOut', duration: 0.1 }}
              />
            </div>

            {/* Status Message */}
            <div className="flex items-center justify-center gap-2 text-[11px] font-mono text-[#8E8E93] tracking-wider uppercase h-5">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping shrink-0"></span>
              <span className="truncate">{statusText}</span>
            </div>

            {/* Skip Prompt */}
            <div className="pt-4 text-[10px] font-mono text-white/30 tracking-widest">
              [ PRESS ESC / CLICK TO ENTER ]
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
