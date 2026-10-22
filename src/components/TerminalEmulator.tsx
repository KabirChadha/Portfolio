'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, CornerDownLeft } from 'lucide-react';
import { PROJECTS_DATA, RESEARCH_PAPER, HACKATHON_WINS, INTERNSHIP_EXPERIENCES, SKILL_GROUPS } from '../data/portfolioData';

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

export const TerminalEmulator: React.FC<TerminalEmulatorProps> = ({ isOpen, onClose }) => {
  const [input, setInput] = useState('');
  const [isMaximized, setIsMaximized] = useState(false);
  const [history, setHistory] = useState<CommandHistoryItem[]>([
    {
      command: 'init',
      output: (
        <div className="space-y-1 text-xs text-[#E2E2DC]">
          <p className="text-white font-bold">KABIR_OS Command Line Interface [Version 2.6.4]</p>
          <p className="text-[#8E8E93]">Type <span className="text-white font-bold underline">help</span> to list available commands or click the shortcut buttons below.</p>
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
          <div className="space-y-1.5 text-xs text-[#E2E2DC]">
            <p className="text-white font-bold">Available Commands:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 pl-2">
              <div><span className="text-white font-mono font-bold">whoami</span> - Engineer summary & credentials</div>
              <div><span className="text-white font-mono font-bold">projects</span> - Inspect 4 production systems</div>
              <div><span className="text-white font-mono font-bold">paper</span> - Read AI Bias & Fairness research</div>
              <div><span className="text-white font-mono font-bold">hackathons</span> - Hackathon podium finishes</div>
              <div><span className="text-white font-mono font-bold">experience</span> - Engineering internships</div>
              <div><span className="text-white font-mono font-bold">skills</span> - Full engineering technical matrix</div>
              <div><span className="text-white font-mono font-bold">stack</span> - Core architecture overview</div>
              <div><span className="text-white font-mono font-bold">contact</span> - Email, GitHub & LinkedIn</div>
              <div><span className="text-white font-mono font-bold">sudo hire</span> - Direct hiring recommendation</div>
              <div><span className="text-white font-mono font-bold">clear</span> - Clear terminal session</div>
            </div>
          </div>
        );
        break;

      case 'whoami':
        outputNode = (
          <div className="text-xs space-y-1 text-[#E2E2DC]">
            <p><span className="text-white font-bold">Name:</span> Kabir Singh Chadha</p>
            <p><span className="text-white font-bold">Role:</span> 2nd Year B.Tech CSE (AI/ML) @ SRMIST KTR, Chennai</p>
            <p><span className="text-white font-bold">Focus:</span> Intelligent Systems, Full-Stack Architecture, Ethical AI & Fairness</p>
            <p><span className="text-white font-bold">Publication:</span> "Bias and Fairness in Artificial Intelligence: Methods and Mitigation Strategies" (JRPS / Shodh Sagar)</p>
            <p><span className="text-white font-bold">Status:</span> [ONLINE] Open for High-Impact Software/ML Roles & Research Collaborations</p>
          </div>
        );
        break;

      case 'projects':
        outputNode = (
          <div className="space-y-2 text-xs">
            <p className="text-white font-bold">Production Projects (4):</p>
            {PROJECTS_DATA.map((p) => (
              <div key={p.id} className="p-2.5 rounded-lg bg-white/5 border border-white/10">
                <div className="flex items-center justify-between">
                  <span className="text-white font-bold">{p.title}</span>
                  <span className="text-[10px] font-mono text-[#8E8E93]">{p.terminalBadge}</span>
                </div>
                <p className="text-[#8E8E93] text-[11px] mt-0.5">{p.tagline}</p>
                <div className="mt-1 flex items-center gap-3 text-[10px] font-mono text-[#8E8E93]">
                  <span>Status: <span className="text-white font-semibold">{p.status}</span></span>
                  <a href={p.githubUrl} target="_blank" rel="noreferrer" className="text-white underline">
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
          <div className="space-y-2 text-xs text-[#E2E2DC]">
            <p className="text-white font-bold">Published Academic Paper:</p>
            <p className="font-semibold text-white">{RESEARCH_PAPER.title}</p>
            <p className="text-[11px] text-[#8E8E93]">Venue: {RESEARCH_PAPER.venue}</p>
            <p className="text-[11px] text-[#8E8E93]">DOI: <a href="https://doi.org/10.36676/jrps.v15.i3.1425" target="_blank" rel="noreferrer" className="text-white underline font-mono">10.36676/jrps.v15.i3.1425</a></p>
            <p className="text-[11px] leading-relaxed text-[#C4C4C8]">{RESEARCH_PAPER.abstract.slice(0, 240)}...</p>
            <div className="text-[10px] font-mono text-white/80">
              [Mathematical Models Evaluated: Demographic Parity, Equalized Odds, Equal Opportunity]
            </div>
          </div>
        );
        break;

      case 'hackathons':
        outputNode = (
          <div className="space-y-2 text-xs">
            <p className="text-white font-bold font-mono">COMPETITIVE HACKATHONS & ACHIEVEMENTS:</p>
            {HACKATHON_WINS.map((h) => (
              <div key={h.id} className="p-2.5 rounded-lg bg-white/5 border border-white/10 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-white font-bold">{h.hackathon}</span>
                  <span className="text-[10px] font-mono text-white font-bold">{h.award}</span>
                </div>
                <p className="text-[#8E8E93] text-[11px] font-mono">{h.organizer} ({h.date})</p>
                <p className="text-[#C4C4C8] text-[11px] leading-relaxed">{h.description}</p>
              </div>
            ))}
          </div>
        );
        break;

      case 'experience':
        outputNode = (
          <div className="space-y-2 text-xs">
            <p className="text-white font-bold font-mono">INDUSTRY INTERNSHIPS & ENGINEERING ROLES:</p>
            {INTERNSHIP_EXPERIENCES.map((exp) => (
              <div key={exp.id} className="p-2.5 rounded-lg bg-white/5 border border-white/10 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-white font-semibold">{exp.role}</span>
                  <span className="text-[10px] font-mono text-[#8E8E93]">{exp.period}</span>
                </div>
                <p className="text-[#8E8E93] text-[11px] font-mono">{exp.organization} — {exp.location}</p>
                <ul className="text-[#C4C4C8] text-[11px] space-y-0.5 pl-2 border-l border-white/20 mt-1">
                  {exp.keyAchievements.map((item, idx) => (
                    <li key={idx}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        );
        break;

      case 'skills':
        outputNode = (
          <div className="space-y-2 text-xs">
            <p className="text-white font-bold">Skill Matrix:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {SKILL_GROUPS.map((group) => (
                <div key={group.category} className="p-2.5 rounded-lg bg-white/5 border border-white/10">
                  <p className="text-white font-mono text-[11px] font-bold">{group.category}</p>
                  <p className="text-[#8E8E93] text-[11px] mt-1">
                    {group.skills.map((s) => s.name).join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </div>
        );
        break;

      case 'stack':
      case 'techstack':
        outputNode = (
          <div className="space-y-2 text-xs">
            <p className="text-white font-bold font-mono">TECHNICAL ARCHITECTURE STACK:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div className="p-2.5 rounded-lg bg-white/5 border border-white/10">
                <p className="text-white font-mono text-[11px] font-bold uppercase tracking-wider">Frontend & UI</p>
                <p className="text-[#C4C4C8] text-[11px] mt-1 font-mono">
                  Next.js (App Router), React 19, TypeScript, Tailwind CSS, Lucide Icons
                </p>
              </div>
              <div className="p-2.5 rounded-lg bg-white/5 border border-white/10">
                <p className="text-white font-mono text-[11px] font-bold uppercase tracking-wider">Backend & APIs</p>
                <p className="text-[#C4C4C8] text-[11px] mt-1 font-mono">
                  Python, FastAPI, Supabase (PostgreSQL, Realtime, RLS), Node.js, Streamlit
                </p>
              </div>
              <div className="p-2.5 rounded-lg bg-white/5 border border-white/10">
                <p className="text-white font-mono text-[11px] font-bold uppercase tracking-wider">Machine Learning & AI</p>
                <p className="text-[#C4C4C8] text-[11px] mt-1 font-mono">
                  Scikit-Learn, PyTorch, Ollama (LLaMA 3.2), Plotly, Pandas, NumPy
                </p>
              </div>
              <div className="p-2.5 rounded-lg bg-white/5 border border-white/10">
                <p className="text-white font-mono text-[11px] font-bold uppercase tracking-wider">Systems & Tools</p>
                <p className="text-[#C4C4C8] text-[11px] mt-1 font-mono">
                  Git, Docker, Linux, C/C++, Embedded Microcontrollers
                </p>
              </div>
            </div>
          </div>
        );
        break;

      case 'contact':
        outputNode = (
          <div className="space-y-1.5 text-xs text-[#E2E2DC]">
            <p className="text-white font-bold">Direct Channels:</p>
            <p>Email: <span className="text-white font-mono font-bold">chadhakabir77@gmail.com</span></p>
            <p>GitHub: <a href="https://github.com/KabirChadha" target="_blank" rel="noreferrer" className="text-white underline font-mono">github.com/KabirChadha</a></p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/kabir-singh-chadha-4b90a1363" target="_blank" rel="noreferrer" className="text-white underline font-mono">linkedin.com/in/kabir-singh-chadha</a></p>
            <p>Paper DOI: <a href="https://doi.org/10.36676/jrps.v15.i3.1425" target="_blank" rel="noreferrer" className="text-white underline font-mono">doi.org/10.36676/jrps.v15.i3.1425</a></p>
          </div>
        );
        break;

      case 'sudo hire':
        outputNode = (
          <div className="p-4 rounded-xl bg-white/10 border border-white/20 text-xs space-y-1">
            <p className="text-white font-bold font-mono">★★★ SYSTEM AUTHORIZATION GRANTED ★★★</p>
            <p className="text-white">Candidate Kabir Singh Chadha has been classified as a TOP-TIER engineer.</p>
            <p className="text-[#8E8E93]">Matches role criteria: Full-Stack Architect, AI Systems Engineer, Quantitative Machine Learning.</p>
            <p className="text-white font-mono font-bold mt-2">Action: Send an email directly to chadhakabir77@gmail.com to schedule an interview.</p>
          </div>
        );
        break;

      default:
        outputNode = (
          <div className="text-xs text-white/80">
            Command not recognized: <span className="font-mono text-white font-bold">{cmd}</span>. Type <span className="text-white underline cursor-pointer" onClick={() => handleCommand('help')}>help</span> to see available commands.
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

  const quickCommands = ['help', 'whoami', 'stack', 'projects', 'paper', 'hackathons', 'experience', 'skills', 'contact', 'sudo hire', 'clear'];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div
        className={`w-full bg-[#0A0A0C] border border-white/15 rounded-2xl shadow-2xl flex flex-col overflow-hidden transition-all duration-300 ${
          isMaximized ? 'h-[95vh] max-w-6xl' : 'h-[620px] max-w-3xl'
        }`}
      >
        {/* Terminal Title Bar */}
        <div className="flex items-center justify-between px-5 py-3 bg-[#121216] border-b border-white/10 select-none">
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="w-3 h-3 rounded-full bg-white/20 hover:bg-white transition-colors cursor-pointer"
              aria-label="Close terminal"
            ></button>
            <button
              onClick={() => setIsMaximized(!isMaximized)}
              className="w-3 h-3 rounded-full bg-white/20 hover:bg-white transition-colors cursor-pointer"
              aria-label="Toggle full terminal"
            ></button>
            <button
              onClick={() => setHistory([])}
              className="w-3 h-3 rounded-full bg-white/20 hover:bg-white transition-colors cursor-pointer"
              aria-label="Clear session"
            ></button>
            <span className="ml-2 font-mono text-xs text-white flex items-center gap-1.5 font-bold">
              <TerminalIcon className="w-3.5 h-3.5 text-white" />
              kabir@portfolio:~ (interactive-cli)
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsMaximized(!isMaximized)}
              className="p-1 rounded-md text-[#8E8E93] hover:text-white"
            >
              {isMaximized ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>
            <button
              onClick={onClose}
              className="p-1 rounded-md text-[#8E8E93] hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Quick command buttons bar */}
        <div className="px-4 py-2 bg-[#0E0E12] border-b border-white/10 flex items-center gap-1.5 overflow-x-auto text-[11px] font-mono">
          <span className="text-[#8E8E93] text-[10px] uppercase tracking-wider pl-1 pr-1 font-bold">Shortcuts:</span>
          {quickCommands.map((cmd) => (
            <button
              key={cmd}
              onClick={() => handleCommand(cmd)}
              className="px-2.5 py-0.5 rounded-full bg-white/10 hover:bg-white text-[#C4C4C8] hover:text-black border border-white/15 whitespace-nowrap transition-all font-semibold cursor-pointer"
            >
              {cmd}
            </button>
          ))}
        </div>

        {/* Terminal Output Body */}
        <div className="flex-1 p-5 font-mono overflow-y-auto space-y-3.5 bg-[#0A0A0C]">
          {history.map((item, index) => (
            <div key={index} className="space-y-1">
              <div className="flex items-center gap-2 text-xs">
                <span className="text-white font-bold">kabir@portfolio</span>
                <span className="text-white/40">:</span>
                <span className="text-white font-semibold">~</span>
                <span className="text-white/40">$</span>
                <span className="text-white font-bold">{item.command}</span>
                <span className="text-[10px] text-[#8E8E93] ml-auto">{item.timestamp}</span>
              </div>
              <div className="pl-4 border-l border-white/15">{item.output}</div>
            </div>
          ))}
          <div ref={terminalEndRef} />
        </div>

        {/* Prompt Input */}
        <div className="p-3.5 bg-[#121216] border-t border-white/10 flex items-center gap-2 font-mono text-xs">
          <span className="text-white font-bold hidden sm:inline">kabir@portfolio</span>
          <span className="text-white/40 hidden sm:inline">:</span>
          <span className="text-white font-semibold">~</span>
          <span className="text-white/40">$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type 'help' or enter any command..."
            className="flex-1 bg-transparent text-white outline-none placeholder:text-[#8E8E93]"
            autoFocus
          />
          <button
            onClick={() => handleCommand(input)}
            className="px-3 py-1.5 rounded-full bg-white hover:bg-white/90 text-black font-bold text-xs flex items-center gap-1.5 transition-all shadow-sm cursor-pointer"
          >
            <CornerDownLeft className="w-3 h-3" />
            <span className="hidden sm:inline">RUN</span>
          </button>
        </div>
      </div>
    </div>
  );
};
