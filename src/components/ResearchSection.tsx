'use client';

import React, { useState } from 'react';
import { BookOpen, Copy, Check, ExternalLink, ArrowUpRight } from 'lucide-react';
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
    <section id="research" className="py-20 sm:py-28 relative border-b border-black/8 bg-[#F4F4F0] text-[#0E0E10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-2 mb-10 text-left">
          <div className="flex items-center gap-2 font-mono text-xs text-[#0E0E10] font-bold">
            <BookOpen className="w-3.5 h-3.5" />
            <span>// 02. PEER_REVIEWED_RESEARCH</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-mono text-[#0E0E10] tracking-tight">
            ALGORITHMIC FAIRNESS & AI BIAS
          </h2>
          <p className="text-sm sm:text-base text-[#4A4A50] max-w-3xl leading-relaxed">
            Published academic research investigating structural origins of bias in machine learning, mathematical fairness formalisms, and lifecycle mitigation techniques.
          </p>
        </div>

        {/* Main Research Card (Crisp Pure White with Soft Shadow) */}
        <div className="rounded-2xl bg-white border border-black/10 p-6 sm:p-10 space-y-8 shadow-editorial">
          {/* Paper Title & Metadata */}
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 border-b border-black/8 pb-6">
            <div className="space-y-3 max-w-4xl">
              <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
                <span className="px-3 py-0.5 rounded-full bg-[#0E0E10] text-white font-bold">
                  PUBLISHED ARTICLE
                </span>
                <span className="text-black/30">•</span>
                <span className="text-[#4A4A50]">Author: <strong className="text-[#0E0E10]">{RESEARCH_PAPER.authors[0]}</strong></span>
                <span className="text-black/30">•</span>
                <span className="text-[#0E0E10] font-bold">Year: 2024</span>
              </div>

              <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold font-mono text-[#0E0E10] leading-tight">
                {RESEARCH_PAPER.title}
              </h3>

              <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#4A4A50]">
                <span>Venue: <strong className="text-[#0E0E10]">{RESEARCH_PAPER.venue}</strong></span>
                <span className="text-black/20">|</span>
                <span>Indexed: {RESEARCH_PAPER.indexedIn.join(', ')}</span>
              </div>
            </div>

            {/* Action Buttons in Monochrome */}
            <div className="flex flex-wrap items-center gap-2.5 shrink-0">
              <a
                href={RESEARCH_PAPER.journalUrl || "https://jrps.shodhsagar.com/index.php/j/article/view/1425"}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#0E0E10] hover:bg-black text-white font-mono text-xs font-bold transition-all shadow-md"
              >
                <span>Read Article (Journal)</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </a>

              <a
                href={RESEARCH_PAPER.doiUrl || "https://doi.org/10.36676/jrps.v15.i3.1425"}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-white hover:bg-[#F9F9F7] text-[#0E0E10] font-mono text-xs font-bold border border-black/15 transition-all shadow-sm"
              >
                <span>DOI Record</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={handleCopyBibtex}
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-[#F4F4F0] hover:bg-black hover:text-white text-[#0E0E10] font-mono text-xs font-bold border border-black/10 transition-all cursor-pointer"
              >
                {copiedBibtex ? <Check className="w-3.5 h-3.5 text-black" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedBibtex ? 'CITATION COPIED' : 'Copy BibTeX'}</span>
              </button>
            </div>
          </div>

          {/* Abstract */}
          <div className="space-y-2">
            <span className="text-[11px] font-mono font-bold tracking-wider text-[#8E8E93] uppercase block">
              // EXECUTIVE ABSTRACT
            </span>
            <p className="text-sm text-[#2A2A2E] leading-relaxed">
              {expandedAbstract ? RESEARCH_PAPER.abstract : `${RESEARCH_PAPER.abstract.slice(0, 360)}...`}
            </p>
            <button
              onClick={() => setExpandedAbstract(!expandedAbstract)}
              className="text-xs font-mono font-bold text-[#0E0E10] underline cursor-pointer"
            >
              {expandedAbstract ? '[ Show Less ]' : '[ Read Full Abstract ]'}
            </button>
          </div>

          {/* Mathematical Fairness Formalization Matrix */}
          <div className="space-y-4 pt-2 border-t border-black/8">
            <span className="text-xs font-mono font-bold text-[#0E0E10] uppercase tracking-wider block">
              // MATHEMATICAL FORMALISMS & FAIRNESS DEFINITIONS
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {RESEARCH_PAPER.fairnessCriteria.map((fc, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#F7F7F4] border border-black/6 space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold font-mono text-[#0E0E10]">
                      {fc.name}
                    </span>
                    <span className="text-[10px] font-mono text-[#8E8E93]">CRITERIA_0{idx + 1}</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white border border-black/8 font-mono text-xs text-[#0E0E10] font-bold overflow-x-auto">
                    <code>{fc.math}</code>
                  </div>
                  <p className="text-xs text-[#4A4A50] leading-relaxed">{fc.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Lifecycle Mitigation Framework */}
          <div className="space-y-4 pt-2 border-t border-black/8">
            <span className="text-xs font-mono font-bold text-[#0E0E10] uppercase tracking-wider block">
              // THREE-STAGE LIFECYCLE MITIGATION FRAMEWORK
            </span>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {RESEARCH_PAPER.mitigationFramework.map((stage, sIdx) => (
                <div
                  key={sIdx}
                  className="p-5 rounded-xl bg-[#F7F7F4] border border-black/6 space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between border-b border-black/8 pb-2">
                      <span className="text-xs font-bold font-mono text-[#0E0E10]">
                        STAGE 0{sIdx + 1}
                      </span>
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#0E0E10] text-white">
                        {stage.stage}
                      </span>
                    </div>
                    <p className="text-xs text-[#4A4A50] leading-relaxed">{stage.goal}</p>
                  </div>

                  <div className="space-y-1.5 pt-2">
                    <span className="text-[10px] font-mono text-[#8E8E93] uppercase tracking-wider block">
                      CORE TECHNIQUES:
                    </span>
                    <ul className="space-y-1 text-xs text-[#0E0E10] font-medium">
                      {stage.techniques.map((tech, tIdx) => (
                        <li key={tIdx} className="flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-[#0E0E10]"></span>
                          <span>{tech}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
