'use client';

import React from 'react';
import { Trophy, Award, Sparkles, CheckCircle2, Terminal, Code2 } from 'lucide-react';
import { HACKATHON_WINS } from '../data/portfolioData';

export const HackathonsSection: React.FC = () => {
  return (
    <section id="hackathons" className="py-20 sm:py-28 relative border-b border-[#161824]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-2 mb-10 text-left">
          <div className="flex items-center gap-2 font-mono text-xs text-[#ff6b00]">
            <Trophy className="w-3.5 h-3.5" />
            <span>// 03. COMPETITIVE_ACHIEVEMENTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-mono text-[#f4f4f6] tracking-tight">
            HACKATHON PODIUM FINISHES
          </h2>
          <p className="text-sm sm:text-base text-[#9ba1b6] max-w-3xl">
            High-velocity 24-48 hour engineering sprints delivering production-grade machine learning models, real-time distributed platforms, and societal impact prototypes under extreme constraints.
          </p>
        </div>

        {/* Hackathon Wins Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {HACKATHON_WINS.map((win) => (
            <div
              key={win.id}
              className="rounded-xl bg-[#090a12] border border-[#1b1f30] hover:border-[#ff6b00] transition-all duration-300 p-6 flex flex-col justify-between group shadow-lg hover:shadow-[0_0_25px_rgba(255,107,0,0.18)]"
            >
              <div className="space-y-4">
                {/* Award Badge */}
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1c0d00] border border-[#ff6b00] text-[#ff6b00] font-mono text-xs font-bold">
                    <Award className="w-3.5 h-3.5" />
                    <span>{win.award}</span>
                  </span>
                  <span className="font-mono text-xs text-[#71768c]">{win.date}</span>
                </div>

                {/* Hackathon Name & Project */}
                <div>
                  <h3 className="text-lg font-bold font-mono text-[#f4f4f6] group-hover:text-[#ff6b00] transition-colors">
                    {win.hackathon}
                  </h3>
                  <div className="text-xs font-mono text-[#ff7a00] mt-0.5">
                    Track: {win.track}
                  </div>
                  <div className="text-xs font-mono text-[#71768c] mt-0.5">
                    Project: <span className="text-[#d4d4d8] font-semibold">{win.projectTitle}</span>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-xs text-[#9ba1b6] leading-relaxed">
                  {win.description}
                </p>

                {/* Key Deliverables */}
                <div className="space-y-1.5 pt-2">
                  <span className="text-[10px] font-mono font-bold tracking-wider text-[#71768c] uppercase block">
                    // KEY SPRINT DELIVERABLES
                  </span>
                  <ul className="space-y-1 text-xs text-[#c4c7d4]">
                    {win.keyDeliverables.map((deliv, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#10b981] shrink-0 mt-0.5" />
                        <span className="leading-tight">{deliv}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Tech Stack Footer */}
              <div className="mt-6 pt-4 border-t border-[#181b2a] flex flex-wrap gap-1.5">
                {win.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#0e101b] border border-[#1d2236] text-[#9ba1b6]"
                  >
                    #{tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
