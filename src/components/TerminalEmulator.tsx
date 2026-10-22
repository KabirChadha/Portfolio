'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, CornerDownLeft, Sparkles } from 'lucide-react';
import { TERMINAL_COMMANDS, PROJECTS_DATA, RESEARCH_PAPER, HACKATHON_WINS, INTERNSHIP_EXPERIENCES, SKILL_GROUPS } from '../data/portfolioData';

interface TerminalEmulatorProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProject?: (projectId: string) => void;
}

interface CommandHistoryItem {
  command: string;
  output: React.ReactNode;
  timestamp: string;
}

export const TerminalEmulator: React.FC<TerminalEmulatorProps> = ({ isOpen, onClose, onSelectProject }) => {
  const [input, setInput] = useState('');
  const [isMaximized, setIsMaximized] = useState(false);
  const [history, setHistory] = useState<CommandHistoryItem[]>([
    {
      command: 'init',
      output: (
        <div className="space-y-1 text-xs">
          <p className="text-[#10b981]">KABIR_OS Command Line Interface [Version 2.6.4]</p>
          <p className="text-[#9ba1b6]">Type <span className="text-[#ff6b00] font-bold">help</span> to list available commands or click the shortcut buttons below.</p>
        </div>
      ),
      timestamp: '22:30:00',
    },
  ]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [pastCommands, setPastCommands] = useState<string[]>(['help']);

  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [isOpen, history]);

  if (!isOpen) return null;

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    setPastCommands((prev) => [...prev, cmd]);
    setHistoryIndex(-1);

    if (trimmed === 'clear') {
      setHistory([]);
      setInput('');
      return;
    }

    if (trimmed === 'exit' || trimmed === 'quit') {
      onClose();
      return;
    }

    let outputNode: React.ReactNode;

    switch (trimmed) {
      case 'help':
        outputNode = (
          <div className="space-y-1.5 text-xs text-[#d4d4d8]">
            <p className="text-[#ff6b00] font-bold">Available Commands:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 pl-2">
              <div><span className="text-[#10b981] font-mono">whoami</span> - Engineer summary & credentials</div>
              <div><span className="text-[#10b981] font-mono">projects</span> - Inspect 4 production systems</div>
              <div><span className="text-[#10b981] font-mono">paper</span> - Read AI Bias & Fairness research</div>
              <div><span className="text-[#10b981] font-mono">hackathons</span> - Hackathon podium finishes</div>
              <div><span className="text-[#10b981] font-mono">experience</span> - Engineering internships</div>
              <div><span className="text-[#10b981] font-mono">skills</span> - Full engineering technical matrix</div>
              <div><span className="text-[#10b981] font-mono">stack</span> - Core architecture overview</div>
              <div><span className="text-[#10b981] font-mono">contact</span> - Email, GitHub & LinkedIn</div>
              <div><span className="text-[#10b981] font-mono">sudo hire</span> - Direct hiring recommendation</div>
              <div><span className="text-[#10b981] font-mono">clear</span> - Clear terminal session</div>
            </div>
          </div>
        );
        break;

      case 'whoami':
        outputNode = (
          <div className="text-xs space-y-1 text-[#d4d4d8]">
            <p><span className="text-[#ff6b00] font-bold">Name:</span> Kabir Singh Chadha</p>
            <p><span className="text-[#ff6b00] font-bold">Role:</span> AI Systems Engineer & Full-Stack Architect</p>
            <p><span className="text-[#ff6b00] font-bold">Specialization:</span> Zero-leakage quantitative ML pipelines, real-time distributed platforms, and fair AI algorithms.</p>
            <p><span className="text-[#ff6b00] font-bold">Publication:</span> "Bias and Fairness in Artificial Intelligence: Methods and Mitigation Strategies" (Shodh Sagar / ICAIIT)</p>
            <p><span className="text-[#ff6b00] font-bold">Status:</span> [ONLINE] Open for High-Impact Software/ML Roles & Research Collaborations</p>
          </div>
        );
        break;

      case 'projects':
        outputNode = (
          <div className="space-y-2 text-xs">
            <p className="text-[#ff6b00] font-bold">Production Projects (4):</p>
            {PROJECTS_DATA.map((p) => (
              <div key={p.id} className="p-2 rounded bg-[#0e101b] border border-[#1e2338]">
                <div className="flex items-center justify-between">
                  <span className="text-[#f4f4f6] font-bold">{p.title}</span>
                  <span className="text-[10px] font-mono text-[#ff6b00]">{p.terminalBadge}</span>
                </div>
                <p className="text-[#9ba1b6] text-[11px] mt-0.5">{p.tagline}</p>
                <div className="mt-1 flex items-center gap-3 text-[10px] font-mono text-[#71768c]">
                  <span>Status: <span className="text-[#10b981]">{p.status}</span></span>
                  <a href={p.githubUrl} target="_blank" rel="noreferrer" className="text-[#ff6b00] underline">
                    GitHub Repo
                  </a>
                </div>
              </div>
            ))}
          </div>
        );
        break;

      case 'paper':
        outputNode = (
          <div className="space-y-2 text-xs text-[#d4d4d8]">
            <p className="text-[#ff6b00] font-bold">Published Academic Paper:</p>
            <p className="font-semibold text-[#f4f4f6]">{RESEARCH_PAPER.title}</p>
            <p className="text-[11px] text-[#9ba1b6]">Venue: {RESEARCH_PAPER.venue} | Indexed: {RESEARCH_PAPER.indexedIn.join(', ')}</p>
            <p className="text-[11px] leading-relaxed text-[#c4c7d4]">{RESEARCH_PAPER.abstract.slice(0, 240)}...</p>
            <div className="text-[10px] font-mono text-[#10b981]">
              [Mathematical Models Evaluated: Demographic Parity, Equalized Odds, Equal Opportunity]
            </div>
          </div>
        );
        break;

      case 'hackathons':
        outputNode = (
          <div className="space-y-2 text-xs">
            <p className="text-[#ff6b00] font-bold">Hackathon Wins & Achievements:</p>
            {HACKATHON_WINS.map((h) => (
              <div key={h.id} className="p-2 rounded bg-[#0e101b] border border-[#1e2338]">
                <div className="flex items-center justify-between">
                  <span className="text-[#f4f4f6] font-semibold">{h.award}</span>
                  <span className="text-[10px] text-[#ff6b00]">{h.hackathon}</span>
                </div>
                <p className="text-[#9ba1b6] text-[11px] mt-0.5">{h.projectTitle}: {h.description}</p>
              </div>
            ))}
          </div>
        );
        break;

      case 'experience':
        outputNode = (
          <div className="space-y-2 text-xs">
            <p className="text-[#ff6b00] font-bold">Internship & Engineering Experience:</p>
            {INTERNSHIP_EXPERIENCES.map((exp) => (
              <div key={exp.id} className="p-2 rounded bg-[#0e101b] border border-[#1e2338]">
                <div className="flex items-center justify-between">
                  <span className="text-[#f4f4f6] font-semibold">{exp.role}</span>
                  <span className="text-[10px] text-[#71768c]">{exp.period}</span>
                </div>
                <p className="text-[#ff6b00] text-[11px]">{exp.organization} ({exp.location})</p>
                <p className="text-[#9ba1b6] text-[11px] mt-0.5">{exp.summary}</p>
              </div>
            ))}
          </div>
        );
        break;

      case 'skills':
        outputNode = (
          <div className="space-y-2 text-xs">
            <p className="text-[#ff6b00] font-bold">Skill Matrix:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {SKILL_GROUPS.map((group) => (
                <div key={group.category} className="p-2 rounded bg-[#0e101b] border border-[#1e2338]">
                  <p className="text-[#ff6b00] font-mono text-[11px] font-bold">{group.category}</p>
                  <p className="text-[#9ba1b6] text-[11px] mt-1">
                    {group.skills.map((s) => s.name).join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </div>
        );
        break;

      case 'contact':
        outputNode = (
          <div className="space-y-1 text-xs text-[#d4d4d8]">
            <p className="text-[#ff6b00] font-bold">Direct Channels:</p>
            <p>Email: <span className="text-[#10b981] font-mono">kabir.chadha.dev@gmail.com</span></p>
            <p>GitHub: <a href="https://github.com/KabirChadha" target="_blank" rel="noreferrer" className="text-[#ff6b00] underline font-mono">https://github.com/KabirChadha</a></p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/kabir-singh-chadha/" target="_blank" rel="noreferrer" className="text-[#ff6b00] underline font-mono">https://www.linkedin.com/in/kabir-singh-chadha/</a></p>
            <p>ResearchGate: <a href="https://www.researchgate.net/profile/Kabir-Chadha" target="_blank" rel="noreferrer" className="text-[#ff6b00] underline font-mono">https://www.researchgate.net/profile/Kabir-Chadha</a></p>
          </div>
        );
        break;

      case 'sudo hire':
        outputNode = (
          <div className="p-3 rounded bg-[#1c0d00] border border-[#ff6b00] text-xs space-y-1">
            <p className="text-[#ff6b00] font-bold font-mono">★★★ SYSTEM AUTHORIZATION GRANTED ★★★</p>
            <p className="text-[#f4f4f6]">Candidate Kabir Singh Chadha has been classified as a TOP-TIER engineer.</p>
            <p className="text-[#9ba1b6]">Matches role criteria: Full-Stack Architect, AI Systems Engineer, Quantitative Machine Learning.</p>
            <p className="text-[#10b981] font-mono font-bold mt-2">Action: Send an email directly to kabir.chadha.dev@gmail.com to schedule an interview.</p>
          </div>
        );
        break;

      default:
        outputNode = (
          <div className="text-xs text-[#ef4444]">
            Command not recognized: <span className="font-mono text-[#f4f4f6]">{cmd}</span>. Type <span className="text-[#ff6b00] underline cursor-pointer" onClick={() => handleCommand('help')}>help</span> to see available commands.
          </div>
        );
        break;
    }

    setHistory((prev) => [
      ...prev,
      {
        command: cmd,
        output: outputNode,
        timestamp: new Date().toLocaleTimeString(),
      },
    ]);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(input);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (pastCommands.length > 0) {
        const nextIndex = historyIndex + 1;
        if (nextIndex < pastCommands.length) {
          setHistoryIndex(nextIndex);
          setInput(pastCommands[pastCommands.length - 1 - nextIndex]);
        }
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const nextIndex = historyIndex - 1;
        setHistoryIndex(nextIndex);
        setInput(pastCommands[pastCommands.length - 1 - nextIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput('');
      }
    }
  };

  const quickCommands = ['help', 'whoami', 'projects', 'paper', 'hackathons', 'experience', 'skills', 'contact', 'sudo hire', 'clear'];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div
        className={`w-full bg-[#07080e] border border-[#ff6b00]/60 rounded-lg shadow-[0_0_40px_rgba(255,107,0,0.25)] flex flex-col overflow-hidden transition-all duration-300 ${
          isMaximized ? 'h-[95vh] max-w-6xl' : 'h-[620px] max-w-3xl'
        }`}
      >
        {/* Terminal Title Bar */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-[#0e101a] border-b border-[#1b1e2e] select-none">
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="w-3 h-3 rounded-full bg-[#ef4444] hover:opacity-80 transition-opacity"
              aria-label="Close terminal"
            ></button>
            <button
              onClick={() => setIsMaximized(!isMaximized)}
              className="w-3 h-3 rounded-full bg-[#f59e0b] hover:opacity-80 transition-opacity"
              aria-label="Toggle full terminal"
            ></button>
            <button
              onClick={() => setHistory([])}
              className="w-3 h-3 rounded-full bg-[#10b981] hover:opacity-80 transition-opacity"
              aria-label="Clear session"
            ></button>
            <span className="ml-2 font-mono text-xs text-[#9ba1b6] flex items-center gap-1.5">
              <TerminalIcon className="w-3.5 h-3.5 text-[#ff6b00]" />
              kabir@systems:~ (interactive-cli)
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsMaximized(!isMaximized)}
              className="p-1 rounded text-[#71768c] hover:text-[#f4f4f6]"
            >
              {isMaximized ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>
            <button
              onClick={onClose}
              className="p-1 rounded text-[#71768c] hover:text-[#ef4444]"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Quick command buttons bar */}
        <div className="px-3 py-1.5 bg-[#0a0b12] border-b border-[#141622] flex items-center gap-1.5 overflow-x-auto text-[11px] font-mono">
          <span className="text-[#71768c] text-[10px] uppercase tracking-wider pl-1 pr-1">Shortcuts:</span>
          {quickCommands.map((cmd) => (
            <button
              key={cmd}
              onClick={() => handleCommand(cmd)}
              className="px-2 py-0.5 rounded bg-[#10121d] hover:bg-[#ff6b00] text-[#9ba1b6] hover:text-black border border-[#1e2338] hover:border-[#ff6b00] whitespace-nowrap transition-all"
            >
              {cmd}
            </button>
          ))}
        </div>

        {/* Terminal Output Body */}
        <div className="flex-1 p-4 font-mono overflow-y-auto space-y-3 bg-[#050508]/90">
          {history.map((item, index) => (
            <div key={index} className="space-y-1">
              <div className="flex items-center gap-2 text-xs">
                <span className="text-[#10b981]">kabir@kernel</span>
                <span className="text-[#3b4158]">:</span>
                <span className="text-[#ff6b00]">~</span>
                <span className="text-[#71768c]">$</span>
                <span className="text-[#f4f4f6] font-bold">{item.command}</span>
                <span className="text-[10px] text-[#3b4158] ml-auto">{item.timestamp}</span>
              </div>
              <div className="pl-4 border-l border-[#ff6b00]/20">{item.output}</div>
            </div>
          ))}
          <div ref={terminalEndRef} />
        </div>

        {/* Prompt Input */}
        <div className="p-3 bg-[#090a12] border-t border-[#1b1e2e] flex items-center gap-2 font-mono text-xs">
          <span className="text-[#10b981] hidden sm:inline">kabir@kernel</span>
          <span className="text-[#3b4158] hidden sm:inline">:</span>
          <span className="text-[#ff6b00]">~</span>
          <span className="text-[#71768c]">$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type 'help' or enter any command..."
            className="flex-1 bg-transparent text-[#f4f4f6] outline-none placeholder:text-[#3b4158]"
            autoFocus
          />
          <button
            onClick={() => handleCommand(input)}
            className="px-2.5 py-1 rounded bg-[#ff6b00] hover:bg-[#ff7a00] text-black font-bold text-xs flex items-center gap-1 transition-colors"
          >
            <CornerDownLeft className="w-3 h-3" />
            <span className="hidden sm:inline">RUN</span>
          </button>
        </div>
      </div>
    </div>
  );
};
