'use client';

import React, { useState, useEffect } from 'react';
import { Terminal, ArrowDown, FileText, Sparkles, Shield, Cpu, ExternalLink, Code2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenTerminal?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTerminal }) => {
  const [typedCommand, setTypedCommand] = useState('');
  const fullCommand = './sys_deploy --profile=production --inspect-all';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullCommand.length) {
        setTypedCommand(fullCommand.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 45);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden border-b border-[#161824]">
      {/* Background terminal grid pattern & radial orange glow */}
      <div className="absolute inset-0 terminal-grid opacity-30 pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#ff6b00]/10 blur-[130px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Terminal Header Bar */}
        <div className="max-w-4xl mx-auto mb-8 bg-[#0a0b12] border border-[#1f2438] rounded-t-lg overflow-hidden shadow-2xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-[#0e101a] border-b border-[#1b1e2e]">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#ef4444]/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-[#f59e0b]/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-[#10b981]/80 inline-block"></span>
              <span className="ml-2 text-[11px] font-mono text-[#71768c]">
                bash - kabir@kernel-os: ~/portfolio
              </span>
            </div>
            <div className="flex items-center gap-2 text-[11px] font-mono text-[#ff6b00]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b00] animate-ping"></span>
              ARCH: x86_64_NEXTJS
            </div>
          </div>

          <div className="p-4 sm:p-5 font-mono text-xs sm:text-sm space-y-2 bg-[#07080e]/95">
            <div className="flex items-center gap-2 text-[#71768c]">
              <span className="text-[#10b981]">kabir@kernel</span>
              <span className="text-[#3b4158]">:</span>
              <span className="text-[#ff6b00]">~</span>
              <span className="text-[#f4f4f6]">$</span>
              <span className="text-[#f4f4f6] font-semibold">{typedCommand}</span>
              <span className="inline-block w-2 h-4 bg-[#ff6b00] animate-blink align-middle"></span>
            </div>
            <div className="text-[#9ba1b6] pl-4 border-l-2 border-[#ff6b00]/30 space-y-1 text-xs">
              <p className="text-[#10b981]">✔ Kernel telemetry initialized.</p>
              <p className="text-[#d4d4d8]">
                &gt; Loaded: 4 Production Systems (Hack-Beyond, CampusDrop, Stock-Predictor, PharmaNet)
              </p>
              <p className="text-[#d4d4d8]">
                &gt; Published Research: Bias & Fairness in Artificial Intelligence (Shodh Sagar / ICAIIT)
              </p>
              <p className="text-[#ff7a00]">
                &gt; Security: 100% Zero-Leakage Pipeline Tolerance Verified (Delta = 0.00e+00)
              </p>
            </div>
          </div>
        </div>

        {/* Hero Title & Subtitle */}
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#11131e] border border-[#ff6b00]/30 text-[#ff6b00] font-mono text-xs mb-6 glow-orange-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>AI SYSTEMS ENGINEER & FULL-STACK ARCHITECT</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#f4f4f6] font-mono uppercase">
            Kabir Singh <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b00] via-[#ff851a] to-[#ffaa40]">Chadha</span>
          </h1>

          <p className="mt-5 text-base sm:text-xl text-[#9ba1b6] max-w-3xl mx-auto leading-relaxed">
            Engineering <span className="text-[#f4f4f6] font-semibold">zero-leakage quantitative ML pipelines</span>,{' '}
            <span className="text-[#f4f4f6] font-semibold">real-time distributed web systems</span>, and{' '}
            <span className="text-[#ff6b00] font-semibold">fair algorithmic architectures</span>. Author of published research on AI bias mitigation.
          </p>

          {/* Quick Action CTAs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4 font-mono text-xs sm:text-sm">
            {onOpenTerminal && (
              <button
                onClick={onOpenTerminal}
                className="flex items-center gap-2 px-5 py-3 rounded-lg bg-[#ff6b00] hover:bg-[#ff7a00] text-black font-bold border border-[#ff6b00] transition-all shadow-[0_0_20px_rgba(255,107,0,0.35)] hover:shadow-[0_0_30px_rgba(255,107,0,0.5)] cursor-pointer"
              >
                <Terminal className="w-4 h-4" />
                <span>LAUNCH INTERACTIVE CLI</span>
              </button>
            )}

            <a
              href="#projects"
              className="flex items-center gap-2 px-5 py-3 rounded-lg bg-[#0c0e17] hover:bg-[#141724] text-[#f4f4f6] hover:text-[#ff6b00] border border-[#1f2438] hover:border-[#ff6b00] transition-all"
            >
              <Code2 className="w-4 h-4 text-[#ff6b00]" />
              <span>INSPECT PROJECTS (4)</span>
            </a>

            <a
              href="#research"
              className="flex items-center gap-2 px-5 py-3 rounded-lg bg-[#0c0e17] hover:bg-[#141724] text-[#f4f4f6] hover:text-[#ff6b00] border border-[#1f2438] hover:border-[#ff6b00] transition-all"
            >
              <FileText className="w-4 h-4 text-[#ff6b00]" />
              <span>AI BIAS PAPER</span>
            </a>

            <a
              href="#contact"
              className="flex items-center gap-2 px-5 py-3 rounded-lg bg-[#0c0e17] hover:bg-[#141724] text-[#9ba1b6] hover:text-[#f4f4f6] border border-[#1b1e2e] hover:border-[#2b304a] transition-all"
            >
              <span>CONNECT // RESUME</span>
            </a>
          </div>

          {/* System Telemetry & Benchmark Cards */}
          <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 text-left">
            {PERSONAL_INFO.stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-4 rounded-lg bg-[#0a0b12] border border-[#1b1f30] hover:border-[#ff6b00]/60 transition-all group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono tracking-wider text-[#71768c] uppercase">
                    SYS_METRIC_0{idx + 1}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b00] group-hover:scale-125 transition-transform"></span>
                </div>
                <div className="mt-2 text-2xl sm:text-3xl font-extrabold font-mono text-[#ff6b00]">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs font-semibold text-[#f4f4f6]">{stat.label}</div>
                <div className="mt-0.5 text-[11px] font-mono text-[#71768c]">{stat.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
