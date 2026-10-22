'use client';

import { Terminal, ArrowUp, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#040407] border-t border-[#141624] py-12 text-xs font-mono text-[#71768c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-[#11131e] pb-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-[#0b0c15] border border-[#ff6b00]/40 flex items-center justify-center text-[#ff6b00]">
              <Terminal className="w-4 h-4" />
            </div>
            <div>
              <div className="text-sm font-bold text-[#f4f4f6]">
                {PERSONAL_INFO.name}
              </div>
              <div className="text-[11px] text-[#ff7a00]">
                {PERSONAL_INFO.title}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-[#9ba1b6]">
            <a href="#projects" className="hover:text-[#ff6b00] transition-colors">Projects</a>
            <a href="#research" className="hover:text-[#ff6b00] transition-colors">Research Paper</a>
            <a href="#hackathons" className="hover:text-[#ff6b00] transition-colors">Hackathons</a>
            <a href="#experience" className="hover:text-[#ff6b00] transition-colors">Experience</a>
            <a href="#skills" className="hover:text-[#ff6b00] transition-colors">Skills</a>
            <a href="#contact" className="hover:text-[#ff6b00] transition-colors">Contact</a>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#0b0c15] hover:bg-[#ff6b00] text-[#9ba1b6] hover:text-black border border-[#1b1e2f] hover:border-[#ff6b00] transition-all cursor-pointer"
          >
            <span>TOP_OF_BUFFER</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-[#10b981]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] inline-block"></span>
              DEPLOYMENT: VERCEL_EDGE
            </span>
            <span className="text-[#2c3144]">|</span>
            <span>BUILD: SHA-256:7B91A0C</span>
            <span className="text-[#2c3144] hidden sm:inline">|</span>
            <span className="hidden sm:inline">THEME: OBSIDIAN_ORANGE</span>
          </div>

          <div className="text-center sm:text-right text-[#52576d]">
            © 2025 Kabir Singh Chadha. Engineered with Next.js, TypeScript & Tailwind CSS.
          </div>
        </div>
      </div>
    </footer>
  );
};
