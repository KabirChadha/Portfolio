'use client';

import React, { useState } from 'react';
import { X, Check, Copy, ExternalLink, Layers, Cpu } from 'lucide-react';
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
      {/* 100% Solid Matte Charcoal/Black Container - Zero Ghosting */}
      <div className="w-full max-w-4xl max-h-[90vh] bg-[#111114] border border-white/15 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-[#F8F8F8]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#18181D] border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="px-3 py-0.5 rounded-full bg-white/10 text-white border border-white/20 font-mono text-xs font-bold">
              {project.code}
            </span>
            <span className="text-sm sm:text-base font-bold font-mono text-white">
              {project.title}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-[#8E8E93] hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6 bg-[#111114]">
          {/* Tagline & Problem */}
          <div className="p-5 rounded-xl bg-white/[0.04] border border-white/10">
            <span className="text-[10px] font-mono tracking-wider text-[#8E8E93] uppercase block mb-1 font-bold">
              // PROBLEM STATEMENT & SYSTEM OBJECTIVE
            </span>
            <p className="text-sm text-[#E2E2DC] leading-relaxed">{project.problemStatement}</p>
          </div>

          {/* Architectural Dataflow */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-white">
              <Layers className="w-4 h-4 text-white" />
              <span>END-TO-END ARCHITECTURAL PIPELINE</span>
            </div>
            <div className="p-5 rounded-xl bg-white/[0.03] border border-white/10 font-mono text-xs space-y-2.5">
              {project.architectureFlow.map((step, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-white text-black flex items-center justify-center text-[10px] font-extrabold shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="text-[#C4C4C8] leading-relaxed">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Core Code Snippet */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="flex items-center gap-2 text-white font-bold">
                <Cpu className="w-4 h-4 text-white" />
                <span>CORE IMPLEMENTATION: {project.coreCodeSnippet.title}</span>
              </span>
              <button
                onClick={handleCopyCode}
                className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 hover:bg-white text-white hover:text-black border border-white/20 transition-all cursor-pointer font-bold"
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'COPIED' : 'COPY CODE'}</span>
              </button>
            </div>
            <pre className="p-4 rounded-xl bg-[#0A0A0C] border border-white/10 overflow-x-auto text-xs font-mono text-[#E2E2DC] leading-relaxed">
              <code>{project.coreCodeSnippet.code}</code>
            </pre>
          </div>

          {/* Tech Stack Pills */}
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold text-[#8E8E93] uppercase tracking-wider block">
              // COMPLETE COMPONENT STACK
            </span>
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech) => (
                <span
                  key={tech.name}
                  className="px-3 py-1 rounded-full text-xs font-mono bg-white/10 text-white border border-white/15"
                >
                  <span className="text-white/40 mr-1">#</span>
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-[#18181D] border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-black font-mono text-xs font-bold hover:bg-white/90 transition-all shadow-md"
              >
                <span>OPEN LIVE DEMO</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/10 hover:bg-white text-white hover:text-black font-mono text-xs font-bold border border-white/20 transition-all"
            >
              <span>VIEW ON GITHUB</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-full text-xs font-mono text-[#8E8E93] hover:text-white transition-colors cursor-pointer"
          >
            DISMISS [ESC]
          </button>
        </div>
      </div>
    </div>
  );
};
