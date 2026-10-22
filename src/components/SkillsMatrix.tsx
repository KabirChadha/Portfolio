'use client';

import React from 'react';
import { Cpu } from 'lucide-react';
import { SKILL_GROUPS } from '../data/portfolioData';

export const SkillsMatrix: React.FC = () => {
  return (
    <section id="skills" className="py-20 sm:py-28 relative border-b border-black/8 bg-[#F4F4F0] text-[#0E0E10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-2 mb-10 text-left">
          <div className="flex items-center gap-2 font-mono text-xs text-[#0E0E10] font-bold">
            <Cpu className="w-3.5 h-3.5" />
            <span>// 04. TECHNICAL_CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-mono text-[#0E0E10] tracking-tight">
            ENGINEERING SKILL MATRIX
          </h2>
          <p className="text-sm sm:text-base text-[#4A4A50] max-w-3xl leading-relaxed">
            Proficiencies across system languages, quantitative machine learning pipelines, modern web frameworks, and cloud deployment runtimes.
          </p>
        </div>

        {/* Skill Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILL_GROUPS.map((group, gIdx) => (
            <div
              key={group.category}
              className="rounded-2xl bg-white border border-black/10 hover:border-black/30 transition-all p-6 sm:p-8 space-y-4 shadow-editorial"
            >
              <div className="flex items-center justify-between border-b border-black/8 pb-3">
                <div>
                  <span className="text-[10px] font-mono tracking-wider text-[#8E8E93] uppercase block font-bold">
                    // MATRIX_0{gIdx + 1}
                  </span>
                  <h3 className="text-xl font-bold font-mono text-[#0E0E10]">
                    {group.category}
                  </h3>
                </div>
                <span className="text-xs font-mono text-[#8E8E93]">
                  [{group.terminalLabel}]
                </span>
              </div>

              <p className="text-xs text-[#4A4A50]">{group.description}</p>

              {/* Skills List with Proficiency Bars */}
              <div className="space-y-3.5 pt-1">
                {group.skills.map((skill) => (
                  <div key={skill.name} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-[#0E0E10] font-semibold">{skill.name}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] text-[#8E8E93] uppercase">
                          {skill.level}
                        </span>
                        <span className="text-[#0E0E10] font-bold text-xs">
                          {skill.percentage}%
                        </span>
                      </div>
                    </div>
                    {/* Minimalist Monochrome Bar */}
                    <div className="w-full h-1.5 bg-[#EAEAE5] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#0E0E10] rounded-full transition-all duration-700"
                        style={{ width: `${skill.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
