'use client';

import React from 'react';
import { Cpu, Terminal, Layers, ShieldCheck, Database, Cloud } from 'lucide-react';
import { SKILL_GROUPS } from '../data/portfolioData';

export const SkillsMatrix: React.FC = () => {
  return (
    <section id="skills" className="py-20 sm:py-28 relative border-b border-[#161824]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-2 mb-10 text-left">
          <div className="flex items-center gap-2 font-mono text-xs text-[#ff6b00]">
            <Cpu className="w-3.5 h-3.5" />
            <span>// 05. TECHNICAL_CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-mono text-[#f4f4f6] tracking-tight">
            ENGINEERING SKILL MATRIX
          </h2>
          <p className="text-sm sm:text-base text-[#9ba1b6] max-w-3xl">
            Proficiencies across system languages, quantitative machine learning pipelines, modern web frameworks, and cloud deployment runtimes.
          </p>
        </div>

        {/* Skill Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILL_GROUPS.map((group, gIdx) => (
            <div
              key={group.category}
              className="rounded-xl bg-[#090a12] border border-[#1b1f30] hover:border-[#ff6b00]/60 transition-all p-6 space-y-4 shadow-lg"
            >
              <div className="flex items-center justify-between border-b border-[#161928] pb-3">
                <div>
                  <span className="text-[10px] font-mono tracking-wider text-[#ff6b00] uppercase block">
                    // MATRIX_0{gIdx + 1}
                  </span>
                  <h3 className="text-lg font-bold font-mono text-[#f4f4f6]">
                    {group.category}
                  </h3>
                </div>
                <span className="text-xs font-mono text-[#71768c]">
                  [{group.terminalLabel}]
                </span>
              </div>

              <p className="text-xs text-[#71768c]">{group.description}</p>

              {/* Skills List with Proficiency Bars */}
              <div className="space-y-3 pt-1">
                {group.skills.map((skill) => (
                  <div key={skill.name} className="space-y-1">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-[#d4d4d8] font-medium">{skill.name}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] text-[#71768c] uppercase">
                          {skill.level}
                        </span>
                        <span className="text-[#ff6b00] font-bold text-xs">
                          {skill.percentage}%
                        </span>
                      </div>
                    </div>
                    {/* Meter bar */}
                    <div className="w-full h-1.5 rounded-full bg-[#121422] overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[#ff6b00] to-[#ffaa40] transition-all duration-500"
                        style={{ width: `${skill.percentage}%` }}
                      ></div>
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
