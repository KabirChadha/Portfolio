'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Terminal, FileText, Sparkles, Code2, ArrowDown } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenTerminal?: () => void;
  isReady?: boolean;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTerminal, isReady = true }) => {
  const [typedCommand, setTypedCommand] = useState('');
  const fullCommand = './sys_deploy --profile=production --inspect-all';

  // Interactive mouse tracking with dampened spring physics
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  const springConfig = { damping: 28, stiffness: 180, mass: 0.6 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
  }, [mouseX, mouseY]);

  // Terminal typewriter effect
  useEffect(() => {
    if (!isReady) return;
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullCommand.length) {
        setTypedCommand(fullCommand.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 40);

    return () => clearInterval(interval);
  }, [isReady]);

  // Mask reveal transition variants
  const maskContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const maskItemVariants = {
    hidden: { y: '115%', opacity: 0 },
    visible: {
      y: '0%',
      opacity: 1,
      transition: {
        duration: 0.85,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section
      ref={containerRef}
      className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden border-b border-black/8 bg-[#F4F4F0] select-none text-[#0E0E10]"
    >
      {/* ─── AMBIENT SPOTLIGHT FOLLOWING MOUSE ──────────── */}
      <motion.div
        className="ambient-spotlight hidden md:block"
        style={{
          background: `radial-gradient(650px circle at ${smoothX}px ${smoothY}px, rgba(255, 255, 255, 0.8), rgba(244, 244, 240, 0.2) 50%, transparent 80%)`,
        }}
      />

      {/* Subtle Editorial Grid Backdrop */}
      <div className="absolute inset-0 editorial-grid opacity-35 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Terminal Header Telemetry Card (Crisp White with Hairline Border) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto mb-10 bg-white border border-black/10 rounded-xl overflow-hidden shadow-editorial"
        >
          <div className="flex items-center justify-between px-4 py-2.5 bg-[#EAEAE5] border-b border-black/8">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-black/40 inline-block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-black/25 inline-block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-black/15 inline-block"></span>
              <span className="ml-2 text-[11px] font-mono text-[#4A4A50] font-medium">
                bash - kabir@kernel-os: ~/portfolio
              </span>
            </div>
            <div className="flex items-center gap-2 text-[11px] font-mono text-[#0E0E10] font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0E0E10] animate-ping"></span>
              ARCH: x86_64_NEXTJS
            </div>
          </div>

          <div className="p-4 sm:p-5 font-mono text-xs sm:text-sm space-y-2 bg-white">
            <div className="flex items-center gap-2 text-[#4A4A50]">
              <span className="text-[#0E0E10] font-bold">kabir@kernel</span>
              <span className="text-black/30">:</span>
              <span className="text-[#0E0E10] font-semibold">~</span>
              <span className="text-black/40">$</span>
              <span className="text-[#0E0E10] font-bold">{typedCommand}</span>
              <span className="inline-block w-2 h-4 bg-[#0E0E10] animate-blink align-middle"></span>
            </div>
            <div className="text-[#4A4A50] pl-4 border-l-2 border-black/15 space-y-1 text-xs">
              <p className="text-[#0E0E10] font-semibold">✔ Kernel telemetry initialized.</p>
              <p className="text-[#2A2A2E]">
                &gt; Loaded: 4 Production Systems (Student Risk Classifier, CampusDrop, Stock Predictor, PharmaNet)
              </p>
              <p className="text-[#2A2A2E]">
                &gt; Published Research: Bias & Fairness in Artificial Intelligence (Shodh Sagar / ICAIIT)
              </p>
              <p className="text-[#0E0E10] font-bold">
                &gt; Security: 100% Zero-Leakage Pipeline Tolerance Verified (Delta = 0.00e+00)
              </p>
            </div>
          </div>
        </motion.div>

        {/* Hero Title & Staggered Upward Mask Reveal */}
        <motion.div
          variants={maskContainerVariants}
          initial="hidden"
          animate={isReady ? 'visible' : 'hidden'}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Badge Reveal */}
          <div className="overflow-hidden inline-block mb-4">
            <motion.div
              variants={maskItemVariants}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-black/10 text-[#0E0E10] font-mono text-xs sm:text-sm font-semibold shadow-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#0E0E10]"></span>
              <span>2nd-Year CSE (AI/ML) Undergraduate @ SRMIST Kattankulathur</span>
            </motion.div>
          </div>

          {/* Giant Clean Ink-Black Kinetic Title: EXPLORE MY PORTFOLIO */}
          <div className="overflow-hidden py-1">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#0E0E10] font-mono uppercase leading-tight">
              <span className="overflow-hidden inline-block mr-3">
                <motion.span variants={maskItemVariants} className="inline-block">
                  EXPLORE
                </motion.span>
              </span>
              <span className="overflow-hidden inline-block mr-3">
                <motion.span variants={maskItemVariants} className="inline-block">
                  MY
                </motion.span>
              </span>
              <span className="overflow-hidden inline-block">
                <motion.span variants={maskItemVariants} className="inline-block text-[#0E0E10]">
                  PORTFOLIO
                </motion.span>
              </span>
            </h1>
          </div>

          {/* Subtitle in Sleek Charcoal */}
          <div className="overflow-hidden mt-4">
            <motion.div variants={maskItemVariants} className="space-y-2">
              <h2 className="text-base sm:text-lg lg:text-xl font-mono font-bold text-[#0E0E10] tracking-wide uppercase">
                KABIR SINGH CHADHA — 2nd-Year CSE (AI/ML) @ SRMIST
              </h2>
              <p className="text-sm sm:text-base text-[#4A4A50] max-w-3xl mx-auto leading-relaxed">
                Focused on building real-time full-stack applications, intelligent ML systems, and fair algorithmic architectures.{' '}
                <span className="text-[#0E0E10] font-bold underline decoration-black/30 underline-offset-4">
                  Published author
                </span>{' '}
                in peer-reviewed AI research (Shodh Sagar / JRPS).
              </p>
            </motion.div>
          </div>

          {/* Action CTAs Reveal */}
          <motion.div
            variants={maskItemVariants}
            className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4 font-mono text-xs sm:text-sm"
          >
            {onOpenTerminal && (
              <button
                onClick={onOpenTerminal}
                className="flex items-center gap-2 px-5 py-3 rounded-full bg-[#0E0E10] hover:bg-black text-white font-bold transition-all shadow-md hover:shadow-lg cursor-pointer"
              >
                <Terminal className="w-4 h-4 text-white" />
                <span>LAUNCH INTERACTIVE CLI</span>
              </button>
            )}

            <a
              href="#projects"
              className="flex items-center gap-2 px-5 py-3 rounded-full bg-white hover:bg-[#F9F9F7] text-[#0E0E10] border border-black/10 hover:border-black/30 transition-all shadow-sm font-semibold"
            >
              <Code2 className="w-4 h-4 text-[#0E0E10]" />
              <span>FEATURED PROJECTS (4)</span>
            </a>

            <a
              href="#research"
              className="flex items-center gap-2 px-5 py-3 rounded-full bg-white hover:bg-[#F9F9F7] text-[#0E0E10] border border-black/10 hover:border-black/30 transition-all shadow-sm font-semibold"
            >
              <FileText className="w-4 h-4 text-[#0E0E10]" />
              <span>AI BIAS PAPER</span>
            </a>

            <a
              href="#milestones"
              className="flex items-center gap-2 px-5 py-3 rounded-full bg-white hover:bg-[#F9F9F7] text-[#4A4A50] hover:text-[#0E0E10] border border-black/10 hover:border-black/30 transition-all shadow-sm font-semibold"
            >
              <span>WHERE I'VE BEEN</span>
            </a>
          </motion.div>

          {/* System Benchmark Cards in Crisp Pure White with Soft Shadows */}
          <motion.div
            variants={maskItemVariants}
            className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 text-left"
          >
            {PERSONAL_INFO.stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-white border border-black/8 shadow-editorial shadow-editorial-hover transition-all group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono tracking-wider text-[#8E8E93] uppercase font-bold">
                    SYS_METRIC_0{idx + 1}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0E0E10] group-hover:scale-125 transition-transform"></span>
                </div>
                <div className="mt-2 text-2xl sm:text-3xl font-extrabold font-mono text-[#0E0E10]">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs font-bold text-[#2A2A2E]">{stat.label}</div>
                <div className="mt-0.5 text-[11px] font-mono text-[#8E8E93]">{stat.detail}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
