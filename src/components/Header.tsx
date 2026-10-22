'use client';

import React, { useState, useEffect } from 'react';
import { Terminal, ExternalLink, Menu, X, Cpu, Activity } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeaderProps {
  onOpenTerminal?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenTerminal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    const updateClock = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString('en-US', {
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          timeZone: 'Asia/Kolkata',
        }) + ' IST'
      );
    };
    updateClock();
    const timer = setInterval(updateClock, 1000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(timer);
    };
  }, []);

  const navLinks = [
    { label: '// 01. PROJECTS', href: '#projects' },
    { label: '// 02. RESEARCH', href: '#research' },
    { label: '// 03. HACKATHONS', href: '#hackathons' },
    { label: '// 04. EXPERIENCE', href: '#experience' },
    { label: '// 05. SKILLS', href: '#skills' },
    { label: '// 06. CONTACT', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#050508]/90 backdrop-blur-md border-b border-[#1f2438] shadow-[0_4px_20px_rgba(0,0,0,0.6)]'
          : 'bg-transparent border-b border-[#161824]'
      }`}
    >
      {/* Top micro status bar */}
      <div className="hidden lg:flex items-center justify-between px-6 py-1 bg-[#08090f] border-b border-[#141622] text-[11px] font-mono text-[#71768c]">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-[#ff6b00]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b00] animate-pulse"></span>
            SYS_ONLINE
          </span>
          <span className="text-[#3b4158]">|</span>
          <span>KERNEL: {PERSONAL_INFO.kernelVersion}</span>
          <span className="text-[#3b4158]">|</span>
          <span className="flex items-center gap-1">
            <Activity className="w-3 h-3 text-[#ff6b00]" />
            LATENCY: 14ms
          </span>
          <span className="text-[#3b4158]">|</span>
          <span>ZERO_LEAKAGE: VERIFIED</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-[#9ba1b6]">{currentTime || '22:30:00 IST'}</span>
          <span className="text-[#3b4158]">|</span>
          <span className="text-[#ff7a00]">VERCEL_EDGE_READY</span>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo / Terminal prompt branding */}
          <a
            href="#"
            className="flex items-center gap-2 group text-left focus:outline-none"
            aria-label="Kabir Singh Chadha Portfolio"
          >
            <div className="w-8 h-8 rounded bg-[#0f111a] border border-[#ff6b00]/40 flex items-center justify-center text-[#ff6b00] group-hover:border-[#ff6b00] group-hover:shadow-[0_0_12px_rgba(255,107,0,0.4)] transition-all">
              <Terminal className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-1.5 font-mono text-sm font-bold tracking-tight text-[#f4f4f6]">
                <span>kabir</span>
                <span className="text-[#ff6b00]">@</span>
                <span className="text-[#9ba1b6]">systems</span>
                <span className="text-[#ff6b00] animate-blink font-black">:~#</span>
              </div>
              <div className="text-[10px] font-mono text-[#71768c] -mt-0.5 tracking-wider hidden sm:block">
                CSE_AIML_SRMIST_KTR
              </div>
            </div>
          </a>

          {/* Desktop Nav links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-2.5 py-1 text-xs font-mono text-[#9ba1b6] hover:text-[#ff6b00] hover:bg-[#121420] rounded border border-transparent hover:border-[#1f2438] transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions & Links */}
          <div className="flex items-center gap-2 sm:gap-3">
            {onOpenTerminal && (
              <button
                onClick={onOpenTerminal}
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#10121d] hover:bg-[#ff6b00] text-[#ff6b00] hover:text-black font-mono text-xs font-semibold border border-[#ff6b00]/50 hover:border-[#ff6b00] transition-all shadow-[0_0_10px_rgba(255,107,0,0.15)] cursor-pointer"
                title="Launch Interactive Terminal"
              >
                <Terminal className="w-3.5 h-3.5" />
                <span>CLI_MODE</span>
              </button>
            )}

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded bg-[#0e1018] border border-[#1f2438] hover:border-[#ff6b00] text-[#9ba1b6] hover:text-[#ff6b00] transition-all"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded bg-[#0e1018] border border-[#1f2438] hover:border-[#ff6b00] text-[#9ba1b6] hover:text-[#ff6b00] transition-all"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded bg-[#0e1018] border border-[#1f2438] text-[#9ba1b6] hover:text-[#ff6b00]"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#090a10] border-b border-[#1f2438] px-4 pt-3 pb-5 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-mono text-[#9ba1b6] hover:text-[#ff6b00] hover:bg-[#121420] rounded border border-transparent hover:border-[#1f2438]"
            >
              {link.label}
            </a>
          ))}
          {onOpenTerminal && (
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTerminal();
              }}
              className="w-full mt-3 flex items-center justify-center gap-2 py-2 rounded bg-[#ff6b00] text-black font-mono text-xs font-bold"
            >
              <Terminal className="w-4 h-4" />
              <span>LAUNCH TERMINAL CLI</span>
            </button>
          )}
        </div>
      )}
    </header>
  );
};
