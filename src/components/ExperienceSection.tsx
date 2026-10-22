'use client';

import React from 'react';
import { Briefcase, Calendar, MapPin, ChevronRight, Terminal, Cpu } from 'lucide-react';
import { INTERNSHIP_EXPERIENCES } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 sm:py-28 relative border-b border-[#161824] bg-[#07080e]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-2 mb-10 text-left">
          <div className="flex items-center gap-2 font-mono text-xs text-[#ff6b00]">
            <Briefcase className="w-3.5 h-3.5" />
            <span>// 04. ENGINEERING_EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-mono text-[#f4f4f6] tracking-tight">
            INDUSTRY INTERNSHIPS & ROLES
          </h2>
          <p className="text-sm sm:text-base text-[#9ba1b6] max-w-3xl">
            Applied software engineering and machine learning roles focused on high-throughput model optimization, zero-leakage training pipelines, and real-time distributed web systems.
          </p>
        </div>

        {/* Timeline Stack */}
        <div className="space-y-6">
          {INTERNSHIP_EXPERIENCES.map((exp, idx) => (
            <div
              key={exp.id}
              className="rounded-xl bg-[#090a12] border border-[#1b1f30] hover:border-[#ff6b00]/70 transition-all p-6 sm:p-8 space-y-4 shadow-lg"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#161928] pb-4">
                <div>
                  <div className="flex items-center gap-2 font-mono text-xs text-[#ff6b00]">
                    <span className="w-2 h-2 rounded-full bg-[#ff6b00]"></span>
                    <span>EXP_0{idx + 1} // {exp.type.toUpperCase()}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold font-mono text-[#f4f4f6] mt-1">
                    {exp.role}
                  </h3>
                  <div className="text-sm font-mono text-[#ff7a00] font-semibold">
                    {exp.organization}
                  </div>
                </div>

                <div className="flex flex-wrap sm:flex-col items-start sm:items-end gap-2 text-xs font-mono text-[#71768c]">
                  <span className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#0e101a] border border-[#1c2134] text-[#d4d4d8]">
                    <Calendar className="w-3.5 h-3.5 text-[#ff6b00]" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#0e101a] border border-[#1c2134]">
                    <MapPin className="w-3.5 h-3.5 text-[#71768c]" />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Summary */}
              <p className="text-xs sm:text-sm text-[#9ba1b6] leading-relaxed">
                {exp.summary}
              </p>

              {/* Key Deliverables Bullet Points */}
              <div className="space-y-2 pt-1">
                <span className="text-[10px] font-mono font-bold tracking-wider text-[#71768c] uppercase block">
                  // QUANTIFIABLE CONTRIBUTIONS & SYSTEM DELIVERABLES
                </span>
                <ul className="space-y-2 text-xs text-[#c4c7d4]">
                  {exp.keyAchievements.map((item, aIdx) => (
                    <li key={aIdx} className="flex items-start gap-2">
                      <ChevronRight className="w-3.5 h-3.5 text-[#ff6b00] shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Pills */}
              <div className="pt-2 flex flex-wrap gap-1.5">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded text-[11px] font-mono bg-[#0e101b] border border-[#1c2136] text-[#d4d4d8]"
                  >
                    <span className="text-[#ff6b00] mr-1">#</span>
                    {tech}
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
