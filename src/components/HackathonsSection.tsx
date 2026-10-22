'use client';

import React from 'react';
import { Trophy, Award, CheckCircle2 } from 'lucide-react';
import { HACKATHON_WINS } from '../data/portfolioData';

export const HackathonsSection: React.FC = () => {
  return (
    <section id="hackathons" className="py-20 sm:py-28 relative border-b border-black/8 bg-[#F4F4F0] text-[#0E0E10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-2 mb-10 text-left">
          <div className="flex items-center gap-2 font-mono text-xs text-[#0E0E10] font-bold">
            <Trophy className="w-3.5 h-3.5" />
            <span>// 03. COMPETITIVE_ACHIEVEMENTS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-mono text-[#0E0E10] tracking-tight">
            COMPETITIVE HACKATHONS
          </h2>
          <p className="text-sm sm:text-base text-[#4A4A50] max-w-3xl leading-relaxed">
            National hackathon wins, qualifications, and active engineering challenges delivering intelligent AI systems and healthcare prototypes under rapid prototyping constraints.
          </p>
        </div>

        {/* Hackathon Wins Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {HACKATHON_WINS.map((win) => (
            <div
              key={win.id}
              className="rounded-2xl bg-white border border-black/10 hover:border-black/30 transition-all duration-300 p-6 flex flex-col justify-between group shadow-editorial shadow-editorial-hover"
            >
              <div className="space-y-4">
                {/* Award Badge */}
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0E0E10] text-white font-mono text-xs font-bold">
                    <Award className="w-3.5 h-3.5" />
                    <span>{win.award}</span>
                  </span>
                  <span className="font-mono text-xs text-[#8E8E93]">{win.date}</span>
                </div>

                {/* Hackathon Name & Project */}
                <div>
                  <h3 className="text-lg font-bold font-mono text-[#0E0E10] leading-snug">
                    {win.hackathon}
                  </h3>
                  <div className="text-xs font-mono text-[#4A4A50] mt-1 font-semibold">
                    {win.organizer}
                  </div>
                  <div className="text-xs font-mono text-[#8E8E93] mt-0.5">
                    Focus: <span className="text-[#0E0E10] font-semibold">{win.track}</span>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-xs text-[#4A4A50] leading-relaxed">
                  {win.description}
                </p>

                {/* Key Deliverables */}
                <div className="space-y-1.5 pt-2">
                  <span className="text-[10px] font-mono font-bold tracking-wider text-[#8E8E93] uppercase block">
                    // KEY SPRINT DELIVERABLES
                  </span>
                  <ul className="space-y-1 text-xs text-[#2A2A2E]">
                    {win.keyDeliverables.map((deliv, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0E0E10] shrink-0 mt-0.5" />
                        <span className="leading-tight">{deliv}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Tech Stack Footer */}
              <div className="mt-6 pt-4 border-t border-black/8 flex flex-wrap gap-1.5">
                {win.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-[#EFEFEA] text-[#2A2A2E]"
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
