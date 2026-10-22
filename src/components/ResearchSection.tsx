'use client';

import React, { useState } from 'react';
import { BookOpen, Copy, Check, ExternalLink, ShieldCheck, Scale, Binary, GitFork, ArrowUpRight } from 'lucide-react';
import { RESEARCH_PAPER } from '../data/portfolioData';

export const ResearchSection: React.FC = () => {
  const [copiedBibtex, setCopiedBibtex] = useState(false);
  const [expandedAbstract, setExpandedAbstract] = useState(false);

  const handleCopyBibtex = () => {
    navigator.clipboard.writeText(RESEARCH_PAPER.bibtex);
    setCopiedBibtex(true);
    setTimeout(() => setCopiedBibtex(false), 2000);
  };

  return (
    <section id="research" className="py-20 sm:py-28 relative border-b border-[#161824] bg-[#07080e]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-2 mb-10 text-left">
          <div className="flex items-center gap-2 font-mono text-xs text-[#ff6b00]">
            <BookOpen className="w-3.5 h-3.5" />
            <span>// 02. PEER_REVIEWED_RESEARCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-mono text-[#f4f4f6] tracking-tight">
            ALGORITHMIC FAIRNESS & AI BIAS
          </h2>
          <p className="text-sm sm:text-base text-[#9ba1b6] max-w-3xl">
            Published academic research investigating structural origins of bias in machine learning, mathematical fairness formalisms, and lifecycle mitigation techniques.
          </p>
        </div>

        {/* Main Research Card */}
        <div className="rounded-xl bg-[#0a0b14] border border-[#1f2438] hover:border-[#ff6b00]/80 transition-all p-6 sm:p-8 space-y-8 shadow-xl">
          {/* Paper Title & Metadata */}
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 border-b border-[#181b2a] pb-6">
            <div className="space-y-2 max-w-4xl">
              <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
                <span className="px-2.5 py-0.5 rounded bg-[#ff6b00]/15 text-[#ff6b00] border border-[#ff6b00]/30 font-bold">
                  PUBLISHED ARTICLE
                </span>
                <span className="text-[#71768c]">•</span>
                <span className="text-[#9ba1b6]">Author: <strong className="text-[#f4f4f6]">{RESEARCH_PAPER.authors[0]}</strong></span>
                <span className="text-[#71768c]">•</span>
                <span className="text-[#10b981]">Year: 2024</span>
              </div>

              <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold font-mono text-[#f4f4f6] leading-tight">
                {RESEARCH_PAPER.title}
              </h3>

              <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#71768c]">
                <span>Venue: <strong className="text-[#c4c7d4]">{RESEARCH_PAPER.venue}</strong></span>
                <span>|</span>
                <span>Indexed: {RESEARCH_PAPER.indexedIn.join(', ')}</span>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-2.5 shrink-0">
              <a
                href={RESEARCH_PAPER.journalUrl || "https://jrps.shodhsagar.com/index.php/j/article/view/1425"}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 rounded bg-[#ff6b00] hover:bg-[#ff7a00] text-black font-mono text-xs font-bold transition-all shadow-[0_0_15px_rgba(255,107,0,0.3)]"
              >
                <span>Read Article (Journal)</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                href={RESEARCH_PAPER.doiUrl || "https://doi.org/10.36676/jrps.v15.i3.1425"}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-3.5 py-2 rounded bg-[#10121d] hover:bg-[#181b2c] text-[#f4f4f6] hover:text-[#ff6b00] font-mono text-xs font-semibold border border-[#23283e] hover:border-[#ff6b00]/60 transition-all"
              >
                <span>DOI Record</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#ff6b00]" />
              </a>

              <button
                onClick={handleCopyBibtex}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded bg-[#121524] hover:bg-[#ff6b00] text-[#ff6b00] hover:text-black font-mono text-xs font-semibold border border-[#ff6b00]/40 transition-all cursor-pointer"
              >
                {copiedBibtex ? <Check className="w-3.5 h-3.5 text-[#10b981]" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedBibtex ? 'CITATION COPIED' : 'Copy BibTeX Citation'}</span>
              </button>
            </div>
          </div>

          {/* Abstract */}
          <div className="space-y-2">
            <span className="text-[11px] font-mono font-bold tracking-wider text-[#ff6b00] uppercase block">
              // EXECUTIVE ABSTRACT
            </span>
            <p className="text-sm text-[#c4c7d4] leading-relaxed">
              {expandedAbstract ? RESEARCH_PAPER.abstract : `${RESEARCH_PAPER.abstract.slice(0, 360)}...`}
            </p>
            <button
              onClick={() => setExpandedAbstract(!expandedAbstract)}
              className="text-xs font-mono text-[#ff6b00] hover:underline cursor-pointer"
            >
              {expandedAbstract ? '[- Collapse Abstract]' : '[+ Read Full Abstract]'}
            </button>
          </div>

          {/* Mathematical Fairness Formulations */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#f4f4f6]">
              <Scale className="w-4 h-4 text-[#ff6b00]" />
              <span>MATHEMATICAL FAIRNESS FORMULATIONS EVALUATED</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
              {RESEARCH_PAPER.fairnessCriteria.map((criterion, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-lg bg-[#07080f] border border-[#1a1e2f] hover:border-[#ff6b00]/50 transition-all"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold font-mono text-[#ff6b00]">
                      {criterion.name}
                    </span>
                    <span className="text-[10px] font-mono text-[#71768c]">
                      CRITERION_0{idx + 1}
                    </span>
                  </div>
                  <div className="my-2.5 p-2 rounded bg-[#030305] border border-[#141624] font-mono text-xs text-[#10b981] overflow-x-auto">
                    <code>{criterion.math}</code>
                  </div>
                  <p className="text-xs text-[#9ba1b6] leading-snug">
                    {criterion.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 3-Stage Lifecycle Mitigation Framework */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#f4f4f6]">
              <Binary className="w-4 h-4 text-[#ff6b00]" />
              <span>END-TO-END LIFECYCLE MITIGATION TAXONOMY</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {RESEARCH_PAPER.mitigationFramework.map((stage, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-lg bg-[#07080f] border border-[#191d2e] space-y-3"
                >
                  <div className="flex items-center justify-between border-b border-[#161824] pb-2">
                    <span className="text-xs font-mono font-bold text-[#f4f4f6]">
                      {stage.stage}
                    </span>
                    <span className="text-[10px] font-mono text-[#ff6b00]">
                      STAGE_0{idx + 1}
                    </span>
                  </div>
                  <p className="text-xs text-[#71768c] leading-relaxed">
                    {stage.goal}
                  </p>
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-[#ff7a00] uppercase block">
                      Evaluated Algorithms:
                    </span>
                    <ul className="text-xs font-mono text-[#c4c7d4] space-y-1">
                      {stage.techniques.map((tech, tIdx) => (
                        <li key={tIdx} className="flex items-center gap-1.5">
                          <span className="w-1 h-1 rounded-full bg-[#ff6b00]"></span>
                          <span>{tech}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Core Contributions */}
          <div className="p-4 rounded-lg bg-[#07080f] border border-[#161824] space-y-2">
            <span className="text-[10px] font-mono font-bold tracking-wider text-[#ff6b00] uppercase block">
              // CORE SCIENTIFIC CONTRIBUTIONS
            </span>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-[#9ba1b6]">
              {RESEARCH_PAPER.coreContributions.map((contrib, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#ff6b00] font-mono font-bold text-xs">▸</span>
                  <span className="leading-snug">{contrib}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
