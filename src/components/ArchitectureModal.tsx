'use client';

import React, { useState } from 'react';
import { X, Check, Copy, ExternalLink, GitBranch, Layers, Cpu, ShieldCheck } from 'lucide-react';
import { Project } from '../types/portfolio';

interface ArchitectureModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ArchitectureModal: React.FC<ArchitectureModalProps> = ({ project, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!project) return null;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(project.coreCodeSnippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="w-full max-w-4xl max-h-[90vh] bg-[#080910] border border-[#ff6b00]/60 rounded-lg shadow-[0_0_45px_rgba(255,107,0,0.3)] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-[#0d0f1a] border-b border-[#1b1f30]">
          <div className="flex items-center gap-3">
            <span className="px-2 py-0.5 rounded bg-[#ff6b00]/15 text-[#ff6b00] border border-[#ff6b00]/40 font-mono text-xs font-bold">
              {project.code}
            </span>
            <span className="text-sm sm:text-base font-bold font-mono text-[#f4f4f6]">
              {project.title}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded text-[#71768c] hover:text-[#ef4444] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-6">
          {/* Tagline & Problem */}
          <div className="p-4 rounded-lg bg-[#0c0d17] border border-[#1b1e2e]">
            <span className="text-[10px] font-mono tracking-wider text-[#ff6b00] uppercase block mb-1">
              // PROBLEM STATEMENT & SYSTEM OBJECTIVE
            </span>
            <p className="text-sm text-[#d4d4d8] leading-relaxed">{project.problemStatement}</p>
          </div>

          {/* Architectural Dataflow */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#ff6b00]">
              <Layers className="w-4 h-4" />
              <span>END-TO-END ARCHITECTURAL PIPELINE</span>
            </div>
            <div className="p-4 rounded-lg bg-[#0a0b12] border border-[#191d2e] font-mono text-xs space-y-2">
              {project.architectureFlow.map((step, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded bg-[#131522] border border-[#ff6b00]/40 text-[#ff6b00] flex items-center justify-center text-[10px] font-bold shrink-0">
                    {idx + 1}
                  </span>
                  <span className="text-[#9ba1b6]">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Core Code Snippet */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="flex items-center gap-2 text-[#ff6b00] font-bold">
                <Cpu className="w-4 h-4" />
                <span>CORE IMPLEMENTATION: {project.coreCodeSnippet.title}</span>
              </span>
              <button
                onClick={handleCopyCode}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#131625] hover:bg-[#ff6b00] text-[#9ba1b6] hover:text-black border border-[#20253b] hover:border-[#ff6b00] transition-all"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-[#10b981]" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'COPIED' : 'COPY CODE'}</span>
              </button>
            </div>
            <pre className="p-4 rounded-lg bg-[#050508] border border-[#1b1f30] overflow-x-auto text-xs font-mono text-[#10b981] leading-relaxed">
              <code>{project.coreCodeSnippet.code}</code>
            </pre>
          </div>

          {/* Tech Stack Pills */}
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold text-[#71768c] uppercase tracking-wider block">
              // COMPLETE COMPONENT STACK
            </span>
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech) => (
                <span
                  key={tech.name}
                  className="px-2.5 py-1 rounded bg-[#0f111c] border border-[#22273d] text-xs font-mono text-[#d4d4d8]"
                >
                  <span className="text-[#ff6b00] mr-1.5">[{tech.category}]</span>
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between px-5 py-3 bg-[#0a0c16] border-t border-[#1b1e2e]">
          <div className="flex items-center gap-2 text-xs font-mono text-[#71768c]">
            <GitBranch className="w-3.5 h-3.5 text-[#ff6b00]" />
            <span>BRANCH: main</span>
          </div>
          <div className="flex items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#121422] hover:bg-[#ff6b00] text-[#ff6b00] hover:text-black font-mono text-xs font-semibold border border-[#ff6b00]/40 transition-all"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>LIVE PREVIEW</span>
              </a>
            )}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-4 py-1.5 rounded bg-[#ff6b00] hover:bg-[#ff7a00] text-black font-mono text-xs font-bold transition-all shadow-[0_0_15px_rgba(255,107,0,0.3)]"
            >
              <span>INSPECT GITHUB REPOSITORY</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
