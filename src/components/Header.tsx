'use client';

import React, { useState, useEffect } from 'react';
import { Terminal, Menu, X, Activity } from 'lucide-react';
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
    { label: '// 03. MILESTONES', href: '#milestones' },
    { label: '// 04. SKILLS', href: '#skills' },
    { label: '// 05. CONTACT', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#F4F4F0]/90 backdrop-blur-md border-b border-black/8 shadow-sm'
          : 'bg-transparent border-b border-black/5'
      }`}
    >
      {/* Top micro status bar */}
      <div className="hidden lg:flex items-center justify-between px-6 py-1 bg-[#EBEBE6] border-b border-black/5 text-[11px] font-mono text-[#4A4A50]">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 font-bold text-[#0E0E10]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0E0E10] animate-pulse"></span>
            SYS_ONLINE
          </span>
          <span className="text-black/20">|</span>
          <span>KERNEL: {PERSONAL_INFO.kernelVersion}</span>
          <span className="text-black/20">|</span>
          <span className="flex items-center gap-1">
            <Activity className="w-3 h-3 text-[#0E0E10]" />
            LATENCY: 14ms
          </span>
          <span className="text-black/20">|</span>
          <span className="font-semibold text-[#0E0E10]">ZERO_LEAKAGE: 0.00e+00 VERIFIED</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-[#0E0E10] font-medium">{currentTime || '22:30:00 IST'}</span>
          <span className="text-black/20">|</span>
          <span className="text-[#4A4A50]">NEW DELHI / CHENNAI</span>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo / Terminal prompt branding */}
          <a
            href="#"
            className="flex items-center gap-2.5 group text-left focus:outline-none"
            aria-label="Kabir Singh Chadha Portfolio"
          >
            <div className="w-8 h-8 rounded-lg bg-white border border-black/10 flex items-center justify-center text-[#0E0E10] shadow-sm group-hover:border-black/30 transition-all">
              <Terminal className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-1 font-mono text-sm font-extrabold tracking-tight text-[#0E0E10]">
                <span>kabir</span>
                <span className="text-[#8E8E93]">@</span>
                <span>portfolio</span>
                <span className="text-[#0E0E10] animate-blink font-black">:~#</span>
              </div>
              <div className="text-[10px] font-mono text-[#8E8E93] -mt-0.5 tracking-wider hidden sm:block">
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
                className="px-3 py-1.5 text-xs font-mono text-[#4A4A50] hover:text-[#0E0E10] hover:bg-black/5 rounded-md transition-all font-medium"
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
                className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#0E0E10] hover:bg-black text-white font-mono text-xs font-bold transition-all shadow-sm cursor-pointer"
                title="Launch Interactive Terminal"
              >
                <Terminal className="w-3.5 h-3.5 text-white" />
                <span>CLI_MODE</span>
              </button>
            )}

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white border border-black/10 hover:border-black/30 text-[#0E0E10] transition-all shadow-sm"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white border border-black/10 hover:border-black/30 text-[#0E0E10] transition-all shadow-sm"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-white border border-black/10 text-[#0E0E10]"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F4F4F0] border-b border-black/10 px-4 pt-3 pb-5 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-mono text-[#2A2A2E] hover:text-[#0E0E10] hover:bg-black/5 rounded-md"
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
              className="w-full mt-3 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-[#0E0E10] text-white font-mono text-xs font-bold"
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
