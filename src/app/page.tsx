'use client';

import React, { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { ProjectsSection } from '@/components/ProjectsSection';
import { ResearchSection } from '@/components/ResearchSection';
import { MilestonesSection } from '@/components/MilestonesSection';
import { SkillsMatrix } from '@/components/SkillsMatrix';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { TerminalEmulator } from '@/components/TerminalEmulator';
import { SmoothScroll } from '@/components/SmoothScroll';
import { Preloader } from '@/components/Preloader';
import { Terminal } from 'lucide-react';

export default function Home() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isPreloaded, setIsPreloaded] = useState(false);

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
    <SmoothScroll>
      {/* ─── SLEEK 1.5-SECOND PRELOADER ENTRANCE OVERLAY ──── */}
      <Preloader onComplete={() => setIsPreloaded(true)} />

      <div className="min-h-screen bg-[#F4F4F0] text-[#0E0E10] flex flex-col selection:bg-black selection:text-white">
        {/* Top Header */}
        <Header onOpenTerminal={() => setIsTerminalOpen(true)} />

        {/* Main Content Flow */}
        <main className="flex-1">
          {/* Hero with mouse-dampened spotlight & staggered upward mask reveals */}
          <Hero onOpenTerminal={() => setIsTerminalOpen(true)} isReady={isPreloaded} />

          {/* 3D Perspective Curved Arc Carousel for Projects */}
          <ProjectsSection />

          {/* Peer-Reviewed Algorithmic Fairness Research */}
          <ResearchSection />

          {/* Scroll-Pinned Milestone Transitions with Monochrome Displacement */}
          <MilestonesSection />

          {/* Technical Skills & Proficiency Matrix */}
          <SkillsMatrix />

          {/* Direct Communication & Contact */}
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />

        {/* Floating CLI Mode Trigger in Monochrome */}
        <div className="fixed bottom-6 right-6 z-40 hidden sm:block">
          <button
            onClick={() => setIsTerminalOpen(true)}
            className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#0E0E10]/95 hover:bg-black text-white font-mono text-xs font-bold border border-white/20 shadow-2xl transition-all cursor-pointer backdrop-blur-md group"
            title="Open Terminal (Shortcut: ⌘K or ~)"
          >
            <Terminal className="w-4 h-4 text-white" />
            <span>TERMINAL CLI</span>
            <span className="px-1.5 py-0.5 rounded-full bg-white/20 text-[10px] text-white font-mono">
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
    </SmoothScroll>
  );
}
