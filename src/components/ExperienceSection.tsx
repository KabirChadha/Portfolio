'use client';

import React from 'react';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';
import { INTERNSHIP_EXPERIENCES } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 sm:py-28 relative border-b border-black/8 bg-[#F4F4F0] text-[#0E0E10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-2 mb-10 text-left">
          <div className="flex items-center gap-2 font-mono text-xs text-[#0E0E10] font-bold">
            <Briefcase className="w-3.5 h-3.5" />
            <span>// 04. ENGINEERING_EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-mono text-[#0E0E10] tracking-tight">
            ENGINEERING & INDUSTRY INTERNSHIPS
          </h2>
          <p className="text-sm sm:text-base text-[#4A4A50] max-w-3xl leading-relaxed">
            Software engineering, intelligent AI systems development, and industrial operations across online and on-site engineering roles.
          </p>
        </div>

        {/* Timeline Stack */}
        <div className="space-y-6">
          {INTERNSHIP_EXPERIENCES.map((exp, idx) => (
            <div
              key={exp.id}
              className="rounded-2xl bg-white border border-black/10 hover:border-black/30 transition-all p-6 sm:p-8 space-y-4 shadow-editorial shadow-editorial-hover"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-black/8 pb-4">
                <div>
                  <div className="flex items-center gap-2 font-mono text-xs text-[#0E0E10] font-bold">
                    <span className="w-2 h-2 rounded-full bg-[#0E0E10]"></span>
                    <span>EXP_0{idx + 1} // {exp.type.toUpperCase()}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold font-mono text-[#0E0E10] mt-1">
                    {exp.role}
                  </h3>
                  <div className="text-sm font-mono text-[#4A4A50] font-semibold">
                    {exp.organization}
                  </div>
                </div>

                <div className="flex flex-wrap sm:flex-col items-start sm:items-end gap-2 text-xs font-mono text-[#8E8E93]">
                  <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F4F4F0] border border-black/8 text-[#0E0E10] font-semibold">
                    <Calendar className="w-3.5 h-3.5 text-[#0E0E10]" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F4F4F0] border border-black/8">
                    <MapPin className="w-3.5 h-3.5 text-[#8E8E93]" />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Summary */}
              <p className="text-xs sm:text-sm text-[#4A4A50] leading-relaxed">
                {exp.summary}
              </p>

              {/* Key Deliverables Bullet Points */}
              <div className="space-y-2 pt-1">
                <span className="text-[10px] font-mono font-bold tracking-wider text-[#8E8E93] uppercase block">
                  // QUANTIFIABLE CONTRIBUTIONS & SYSTEM DELIVERABLES
                </span>
                <ul className="space-y-2 text-xs text-[#2A2A2E]">
                  {exp.keyAchievements.map((item, aIdx) => (
                    <li key={aIdx} className="flex items-start gap-2">
                      <ChevronRight className="w-3.5 h-3.5 text-[#0E0E10] shrink-0 mt-0.5" />
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
                    className="px-3 py-1 rounded-full text-[11px] font-mono bg-[#EFEFEA] border border-black/6 text-[#2A2A2E]"
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
