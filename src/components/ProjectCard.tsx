'use client';

import React from 'react';
import { ExternalLink, ChevronRight, Layers, Terminal, Activity } from 'lucide-react';
import { GithubIcon } from './Icons';
import { Project } from '../types/portfolio';

interface ProjectCardProps {
  project: Project;
  onInspect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onInspect }) => {
  return (
    <article className="group relative rounded-2xl bg-white border border-black/10 hover:border-black/30 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-editorial shadow-editorial-hover text-[#0E0E10] w-full">
      {/* Top Terminal Status Header */}
      <div className="px-5 py-3 bg-[#F4F4F0] border-b border-black/8 flex items-center justify-between text-xs font-mono">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#0E0E10]"></span>
          <span className="text-[#0E0E10] font-bold">{project.code}</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-[10px] text-[#8E8E93] hidden sm:inline font-medium">
            git:main
          </span>
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider bg-[#0E0E10] text-white">
            {project.status}
          </span>
        </div>
      </div>

      {/* Main Content (100% Solid White Background - Zero Ghosting) */}
      <div className="p-5 sm:p-6 space-y-4 flex-1 bg-white">
        {/* Title & Tagline */}
        <div>
          <h3 className="text-xl sm:text-2xl font-bold font-mono text-[#0E0E10] group-hover:text-black transition-colors leading-snug">
            {project.title}
          </h3>
          <p className="mt-1.5 text-xs sm:text-sm text-[#4A4A50] leading-relaxed">
            {project.tagline}
          </p>
        </div>

        {/* Problem Statement Card */}
        <div className="p-4 rounded-xl bg-[#F7F7F4] border border-black/6 space-y-1">
          <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold tracking-wider text-[#0E0E10] uppercase">
            <Activity className="w-3.5 h-3.5 text-[#0E0E10]" />
            <span>THE CHALLENGE & BOTTLENECK</span>
          </div>
          <p className="text-xs text-[#2A2A2E] leading-relaxed">
            {project.problemStatement}
          </p>
        </div>

        {/* Architectural Highlights */}
        <div className="space-y-2">
          <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold tracking-wider text-[#8E8E93] uppercase">
            <Layers className="w-3.5 h-3.5 text-[#0E0E10]" />
            <span>ARCHITECTURAL HIGHLIGHTS & INNOVATION</span>
          </div>
          <ul className="space-y-1.5 text-xs text-[#2A2A2E]">
            {project.architecturalHighlights.map((highlight, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <ChevronRight className="w-3.5 h-3.5 text-[#0E0E10] shrink-0 mt-0.5" />
                <span className="leading-snug">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Key Metrics Grid */}
        <div className="pt-2">
          <div className="text-[10px] font-mono font-bold tracking-wider text-[#8E8E93] uppercase mb-2">
            // KEY BENCHMARK METRICS
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {project.keyMetrics.map((metric, idx) => (
              <div
                key={idx}
                className="p-2.5 rounded-lg bg-[#F7F7F4] border border-black/6 text-left"
              >
                <div className="text-sm sm:text-base font-extrabold font-mono text-[#0E0E10]">
                  {metric.value}
                </div>
                <div className="text-[10px] font-bold text-[#2A2A2E] mt-0.5 leading-tight">
                  {metric.label}
                </div>
                {metric.detail && (
                  <div className="text-[9px] font-mono text-[#8E8E93] mt-0.5 truncate">
                    {metric.detail}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Exact Tech Stack Badges */}
        <div className="pt-2">
          <div className="text-[10px] font-mono font-bold tracking-wider text-[#8E8E93] uppercase mb-2">
            // EXACT TECH STACK
          </div>
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <span
                key={tech.name}
                className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-[#EFEFEA] text-[#2A2A2E] border border-black/6 font-medium"
              >
                <span className="text-black/40 mr-1 text-[10px]">#</span>
                {tech.name}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="px-5 py-3.5 bg-[#F4F4F0] border-t border-black/8 flex flex-wrap items-center justify-between gap-3">
        <button
          onClick={() => onInspect(project)}
          className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#0E0E10] hover:bg-black text-white font-mono text-xs font-bold transition-all cursor-pointer shadow-sm"
        >
          <Terminal className="w-3.5 h-3.5 text-white" />
          <span>INSPECT ARCHITECTURE</span>
        </button>

        <div className="flex items-center gap-2">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 text-xs font-mono text-[#0E0E10] hover:bg-black/10 px-3 py-1.5 rounded-full bg-white border border-black/10 transition-colors font-semibold"
            >
              <span>DEMO</span>
              <ExternalLink className="w-3 h-3 text-[#0E0E10]" />
            </a>
          )}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-xs font-mono text-[#0E0E10] hover:bg-black/10 px-3 py-1.5 rounded-full bg-white border border-black/10 transition-colors font-semibold"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>GITHUB</span>
          </a>
        </div>
      </div>
    </article>
  );
};
