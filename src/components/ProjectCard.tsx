'use client';

import { ExternalLink, ChevronRight, Layers, ShieldCheck, Terminal, Activity, Zap } from 'lucide-react';
import { GithubIcon } from './Icons';
import { Project } from '../types/portfolio';

interface ProjectCardProps {
  project: Project;
  onInspect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onInspect }) => {
  return (
    <article className="group relative rounded-xl bg-[#090a12] border border-[#1b1f30] hover:border-[#ff6b00] transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-lg hover:shadow-[0_0_30px_rgba(255,107,0,0.18)]">
      {/* Top Terminal Status Header */}
      <div className="px-5 py-3 bg-[#0d0e18] border-b border-[#181b2a] flex items-center justify-between text-xs font-mono">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#ff6b00] animate-pulse"></span>
          <span className="text-[#ff6b00] font-bold">{project.code}</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-[10px] text-[#71768c] hidden sm:inline">
            git:main
          </span>
          <span className="px-2 py-0.5 rounded text-[10px] font-bold tracking-wider bg-[#131625] text-[#10b981] border border-[#1f263e]">
            {project.status}
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-5 sm:p-6 space-y-4 flex-1">
        {/* Title & Tagline */}
        <div>
          <h3 className="text-xl sm:text-2xl font-bold font-mono text-[#f4f4f6] group-hover:text-[#ff6b00] transition-colors">
            {project.title}
          </h3>
          <p className="mt-1.5 text-xs sm:text-sm text-[#9ba1b6] leading-relaxed">
            {project.tagline}
          </p>
        </div>

        {/* Problem Statement Card */}
        <div className="p-3.5 rounded-lg bg-[#07080e] border border-[#161824] space-y-1">
          <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold tracking-wider text-[#ff7a00] uppercase">
            <Activity className="w-3.5 h-3.5" />
            <span>THE CHALLENGE & BOTTLENECK</span>
          </div>
          <p className="text-xs text-[#c4c7d4] leading-relaxed">
            {project.problemStatement}
          </p>
        </div>

        {/* Architectural Highlights */}
        <div className="space-y-2">
          <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold tracking-wider text-[#71768c] uppercase">
            <Layers className="w-3.5 h-3.5 text-[#ff6b00]" />
            <span>ARCHITECTURAL HIGHLIGHTS & INNOVATION</span>
          </div>
          <ul className="space-y-1.5 text-xs text-[#9ba1b6]">
            {project.architecturalHighlights.map((highlight, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <ChevronRight className="w-3.5 h-3.5 text-[#ff6b00] shrink-0 mt-0.5" />
                <span className="leading-snug">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Key Metrics Grid */}
        <div className="pt-2">
          <div className="text-[10px] font-mono font-bold tracking-wider text-[#71768c] uppercase mb-2">
            // KEY BENCHMARK METRICS
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {project.keyMetrics.map((metric, idx) => (
              <div
                key={idx}
                className="p-2.5 rounded bg-[#0b0c16] border border-[#1a1e2f] text-left"
              >
                <div className="text-sm sm:text-base font-extrabold font-mono text-[#ff6b00]">
                  {metric.value}
                </div>
                <div className="text-[10px] font-bold text-[#f4f4f6] mt-0.5 leading-tight">
                  {metric.label}
                </div>
                {metric.detail && (
                  <div className="text-[9px] font-mono text-[#71768c] mt-0.5 truncate">
                    {metric.detail}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Exact Tech Stack Badges */}
        <div className="pt-2">
          <div className="text-[10px] font-mono font-bold tracking-wider text-[#71768c] uppercase mb-2">
            // EXACT TECH STACK
          </div>
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <span
                key={tech.name}
                className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#0f111c] text-[#d4d4d8] border border-[#1f2438]"
              >
                <span className="text-[#ff6b00] mr-1 text-[10px]">#</span>
                {tech.name}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="px-5 py-3.5 bg-[#0a0c16] border-t border-[#181b2a] flex flex-wrap items-center justify-between gap-3">
        <button
          onClick={() => onInspect(project)}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#131626] hover:bg-[#ff6b00] text-[#ff6b00] hover:text-black font-mono text-xs font-bold border border-[#ff6b00]/40 hover:border-[#ff6b00] transition-all cursor-pointer"
        >
          <Terminal className="w-3.5 h-3.5" />
          <span>INSPECT ARCHITECTURE</span>
        </button>

        <div className="flex items-center gap-2">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 text-xs font-mono text-[#10b981] hover:text-[#34d399] px-2.5 py-1 rounded bg-[#091512] border border-[#10b981]/30 transition-colors"
            >
              <span>DEMO</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-xs font-mono text-[#f4f4f6] hover:text-[#ff6b00] px-3 py-1.5 rounded bg-[#10121d] border border-[#1f2438] hover:border-[#ff6b00] transition-colors"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>GITHUB</span>
          </a>
        </div>
      </div>
    </article>
  );
};
