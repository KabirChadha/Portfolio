'use client';

import React, { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { ProjectsSection } from '@/components/ProjectsSection';
import { ResearchSection } from '@/components/ResearchSection';
import { HackathonsSection } from '@/components/HackathonsSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { SkillsMatrix } from '@/components/SkillsMatrix';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { TerminalEmulator } from '@/components/TerminalEmulator';
import { Terminal, Command } from 'lucide-react';

export default function Home() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Toggle terminal on Ctrl+K or Cmd+K or Backquote `
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsTerminalOpen((prev) => !prev);
      } else if (e.key === '`' && !['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) {
        e.preventDefault();
        setIsTerminalOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-[#050508] text-[#f4f4f6] flex flex-col selection:bg-[#ff6b00] selection:text-black">
      {/* Top Header */}
      <Header onOpenTerminal={() => setIsTerminalOpen(true)} />

      {/* Main Content Flow */}
      <main className="flex-1">
        <Hero onOpenTerminal={() => setIsTerminalOpen(true)} />
        <ProjectsSection />
        <ResearchSection />
        <HackathonsSection />
        <ExperienceSection />
        <SkillsMatrix />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating CLI Mode Trigger */}
      <div className="fixed bottom-6 right-6 z-40 hidden sm:block">
        <button
          onClick={() => setIsTerminalOpen(true)}
          className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#0d0f1a]/95 hover:bg-[#ff6b00] text-[#ff6b00] hover:text-black font-mono text-xs font-bold border border-[#ff6b00]/60 hover:border-[#ff6b00] shadow-[0_0_20px_rgba(255,107,0,0.3)] transition-all cursor-pointer backdrop-blur-md group"
          title="Open Terminal (Shortcut: ⌘K or ~)"
        >
          <Terminal className="w-4 h-4 text-[#ff6b00] group-hover:text-black" />
          <span>TERMINAL CLI</span>
          <span className="px-1.5 py-0.5 rounded bg-[#161a29] group-hover:bg-black/20 text-[10px] text-[#9ba1b6] group-hover:text-black font-mono border border-[#2b3149] group-hover:border-transparent">
            ⌘K
          </span>
        </button>
      </div>

      {/* Interactive Command Terminal Modal */}
      <TerminalEmulator
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
      />
    </div>
  );
}
