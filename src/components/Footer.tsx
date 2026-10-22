'use client';

import React from 'react';
import { Terminal, ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A0A0C] border-t border-white/10 py-12 text-xs font-mono text-[#8E8E93]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-white/10 pb-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center text-white">
              <Terminal className="w-4 h-4" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">
                {PERSONAL_INFO.name}
              </div>
              <div className="text-[11px] text-[#8E8E93]">
                {PERSONAL_INFO.title}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-[#8E8E93]">
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#research" className="hover:text-white transition-colors">Research Paper</a>
            <a href="#milestones" className="hover:text-white transition-colors">Milestones</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/10 hover:bg-white text-white hover:text-black border border-white/20 transition-all cursor-pointer font-bold"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <div className="flex items-center gap-3 text-[#8E8E93]">
            <span className="flex items-center gap-1 text-white">
              <span className="w-1.5 h-1.5 rounded-full bg-white inline-block"></span>
              STATUS: DEPLOYED_ONLINE
            </span>
            <span className="text-white/20">|</span>
            <span>BUILD: SHA-256:7B91A0C</span>
            <span className="text-white/20 hidden sm:inline">|</span>
            <span className="hidden sm:inline">PALETTE: EDITORIAL_MONOCHROME</span>
          </div>

          <div className="text-center sm:text-right text-[#55555A]">
            © 2026 Kabir Singh Chadha. SRMIST Kattankulathur, Chennai.
          </div>
        </div>
      </div>
    </footer>
  );
};
