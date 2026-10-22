'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Calendar,
  MapPin,
  ChevronRight,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

type MilestoneTab = 'all' | 'internships' | 'hackathons';

export const MilestonesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<MilestoneTab>('all');
  const [activeMilestoneId, setActiveMilestoneId] = useState<string>('ansnicore-solutions-intern');
  const [isGlitching, setIsGlitching] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);

  // Trigger subtle monochrome chromatic displacement
  const triggerGlitch = () => {
    setIsGlitching(true);
    setTimeout(() => setIsGlitching(false), 550);
  };

  // Setup GSAP ScrollTrigger for pinned animations, heading glitch & progress
  useEffect(() => {
    if (typeof window === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    if (!section) return;

    const stGlitch = ScrollTrigger.create({
      trigger: section,
      start: 'top 75%',
      end: 'bottom 25%',
      onEnter: () => triggerGlitch(),
      onEnterBack: () => triggerGlitch(),
      onUpdate: (self) => {
        setScrollProgress(Math.round(self.progress * 100));
      },
    });

    return () => {
      stGlitch.kill();
    };
  }, []);

  // Combined milestone sequence with verified resume and publication data
  const combinedMilestones = [
    {
      id: 'ansnicore-solutions-intern',
      kind: 'internship' as const,
      badge: 'EXP_01 // SOFTWARE & AI INTERN',
      title: 'Ansnicore Solutions Pvt. Ltd.',
      subtitle: 'Software Engineering / AI Intern',
      period: 'September 10, 2026 – Present',
      location: 'Online',
      tag: 'CURRENT INTERNSHIP',
      summary:
        'Contributing to the development and implementation of intelligent AI solutions and software systems, collaborating with engineering teams to analyze requirements and build scalable features.',
      deliverables: [
        'Contributing to the development and implementation of intelligent AI solutions and software systems.',
        'Collaborating with engineering teams to analyze project requirements and build scalable technical features.',
        'Applying core computer science and AI/ML principles to solve real-world engineering problems.',
      ],
      techStack: ['AI Solutions', 'Software Engineering', 'System Design', 'Python', 'Full-Stack Development'],
    },
    {
      id: 'shodh-sagar-research',
      kind: 'internship' as const,
      badge: 'RESEARCH_01 // PEER-REVIEWED AUTHOR',
      title: 'Journal of Research & Pedagogical Studies / Shodh Sagar',
      subtitle: 'Published Research Author (DOI: 10.36676/jrps.v15.i3.1425)',
      period: '2024',
      location: 'Shodh Sagar / Crossref Indexed',
      tag: 'PUBLISHED RESEARCH',
      summary:
        'First-author research investigating structural origins of prejudice in machine learning, mathematical formalisms for demographic parity and equalized odds, and lifecycle mitigation pipelines.',
      deliverables: [
        'Published in Journal of Research & Pedagogical Studies (JRPS) / Shodh Sagar.',
        'Formalized trade-off bounds between Demographic Parity, Equalized Odds, and Predictive Rate Parity.',
        'Engineered an actionable lifecycle mitigation framework spanning pre-, in-, and post-processing interventions.',
      ],
      techStack: ['Algorithmic Fairness', 'Demographic Parity', 'Equalized Odds', 'Machine Learning', 'Ethics in AI'],
    },
    {
      id: 'h-nahata-power-intern',
      kind: 'internship' as const,
      badge: 'EXP_02 // ENGINEERING INTERN',
      title: 'H Nahata Power Private Limited',
      subtitle: 'Engineering Intern',
      period: 'June 11, 2024 – June 21, 2024',
      location: 'New Delhi (Offline)',
      tag: 'OFFLINE INTERNSHIP',
      summary:
        'Worked on projects related to solar power generation and energy management solutions, contributing to system optimization using control management strategies.',
      deliverables: [
        'Worked on projects related to solar power generation and energy management solutions.',
        'Contributed to optimizing solar energy systems using control management strategies.',
        'Assisted in developing algorithms to enhance system efficiency and proposed improvements through Big Data and AI integration.',
      ],
      techStack: ['Solar Energy Systems', 'Control Strategies', 'Energy Optimization', 'Big Data', 'AI Integration'],
    },
    {
      id: 'gee-kay-industrial-intern',
      kind: 'internship' as const,
      badge: 'EXP_03 // INDUSTRIAL TRAINING',
      title: 'Gee Kay',
      subtitle: 'Industrial Trainee / Intern',
      period: '2024',
      location: 'New Delhi (Offline)',
      tag: 'INDUSTRIAL TRAINING',
      summary:
        'Gained practical exposure to real-world industrial working environments, developing professional discipline, teamwork skills, and an understanding of organizational operations.',
      deliverables: [
        'Gained practical exposure to real-world industrial working environments and operations.',
        'Developed professional discipline, teamwork skills, and an understanding of organizational operations.',
        'Strengthened analytical and technical fundamentals through hands-on learning.',
      ],
      techStack: ['Industrial Operations', 'Professional Discipline', 'Engineering Fundamentals', 'Analytical Problem-Solving'],
    },
    {
      id: 'hack-and-beyond',
      kind: 'hackathon' as const,
      badge: 'WINNER_01 // 1ST PLACE CHAMPION',
      title: 'Hack and Beyond – AI Applications',
      subtitle: 'Awarded 1st Place in AI Innovation',
      period: 'August 2026',
      location: 'SRMIST KTR x Ansnicore Solutions',
      tag: '1ST PLACE WINNER',
      summary:
        'Awarded 1st place in AI innovation for developing intelligent AI applications under rapid prototyping constraints. Recognized for outstanding performance and innovative technical execution.',
      deliverables: [
        'Awarded 1st Place in AI innovation by SRMIST ECE Dept & Ansnicore Solutions.',
        'Engineered full intelligent AI application prototype under high-velocity sprint constraints.',
        'Recognized for outstanding technical performance, zero-leakage architecture, and execution.',
      ],
      techStack: ['Python', 'Machine Learning', 'Streamlit', 'Scikit-Learn', 'Ollama LLaMA'],
    },
    {
      id: 'adobe-hackathon',
      kind: 'hackathon' as const,
      badge: 'QUALIFIER_02 // ROUND 2 NATIONAL',
      title: 'Adobe Hackathon Track',
      subtitle: 'Round 2 Qualifier',
      period: '2026',
      location: 'Adobe National Arena',
      tag: 'ROUND 2 QUALIFIED',
      summary:
        'Successfully cleared Round 1 screening and qualified for Round 2 in Adobe’s competitive hackathon track.',
      deliverables: [
        'Successfully cleared competitive Round 1 technical screening.',
        'Qualified for Round 2 in Adobe’s national hackathon challenge track.',
        'Demonstrated robust algorithmic efficiency, clean software architecture, and problem-solving.',
      ],
      techStack: ['Algorithms', 'Data Structures', 'System Design', 'TypeScript', 'Python'],
    },
    {
      id: 'hack4health-hackathon',
      kind: 'hackathon' as const,
      badge: 'CHALLENGE_03 // HEALTHCARE PROTOTYPE',
      title: 'Hack4Health Hackathon',
      subtitle: 'Healthcare Delivery & Logistics Solution',
      period: '2026',
      location: 'Health Innovations Consortium',
      tag: 'AWAITING FINAL ROUND',
      summary:
        'Developed an innovative software solution addressing healthcare delivery challenges; currently awaiting results.',
      deliverables: [
        'Built and deployed full-stack software prototype addressing healthcare logistics challenges.',
        'Integrated real-time resource tracking and responsive patient-facing workflows.',
        'Submitted solution for evaluation; currently awaiting final round results.',
      ],
      techStack: ['React', 'TypeScript', 'Node.js', 'Healthcare Tech', 'API Integration'],
    },
  ];

  const displayedMilestones = combinedMilestones.filter((m) => {
    if (activeTab === 'internships') return m.kind === 'internship';
    if (activeTab === 'hackathons') return m.kind === 'hackathon';
    return true;
  });

  const scrollToMilestone = (id: string) => {
    setActiveMilestoneId(id);
    const target = document.getElementById(`milestone-${id}`);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section
      id="milestones"
      ref={sectionRef}
      className="py-20 sm:py-28 relative border-b border-white/10 bg-[#0A0A0C] text-[#F8F8F8] overflow-hidden"
    >
      {/* Anchor compatibility */}
      <span id="hackathons" className="absolute -top-28"></span>
      <span id="experience" className="absolute -top-28"></span>

      {/* Subtle Dark Editorial Grid */}
      <div className="absolute inset-0 dark-editorial-grid opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Pinned Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* ─── LEFT COLUMN: PINNED / STICKY TITLE & TIMELINE NAV ─ */}
          <div
            ref={leftColRef}
            className="lg:col-span-5 lg:sticky lg:top-28 space-y-6 select-none"
          >
            {/* Section Tag */}
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#8E8E93] font-bold">
              <Sparkles className="w-3.5 h-3.5 text-white" />
              <span>// 03. CHRONOLOGY & MILESTONES</span>
            </div>

            {/* Monochrome Heading */}
            <div>
              <h2
                ref={headingRef}
                onMouseEnter={triggerGlitch}
                className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold font-mono tracking-tight text-white uppercase leading-none transition-all cursor-pointer ${
                  isGlitching ? 'glitch-text-active' : ''
                }`}
                title="Hover or scroll to trigger displacement"
              >
                WHERE I'VE <br />
                <span className="text-[#8E8E93]">BEEN</span>
              </h2>
              <div className="mt-2 text-xs font-mono text-[#8E8E93] tracking-widest uppercase">
                MILESTONES // INDUSTRY INTERNSHIPS & HACKATHONS
              </div>
            </div>

            <p className="text-sm text-[#8E8E93] leading-relaxed max-w-md">
              Software engineering internships, AI systems development, peer-reviewed research, and competitive hackathon victories — delivering production systems under both enterprise and sprint constraints.
            </p>

            {/* Filter Pills in Dark Translucent Frosted Style */}
            <div className="flex items-center gap-1.5 p-1 rounded-full bg-white/5 border border-white/10 font-mono text-xs">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-4 py-1.5 rounded-full transition-all cursor-pointer font-bold ${
                  activeTab === 'all'
                    ? 'bg-white text-black shadow-sm'
                    : 'text-[#8E8E93] hover:text-white'
                }`}
              >
                ALL ({combinedMilestones.length})
              </button>
              <button
                onClick={() => setActiveTab('internships')}
                className={`px-4 py-1.5 rounded-full transition-all cursor-pointer font-bold ${
                  activeTab === 'internships'
                    ? 'bg-white text-black shadow-sm'
                    : 'text-[#8E8E93] hover:text-white'
                }`}
              >
                EXPERIENCE
              </button>
              <button
                onClick={() => setActiveTab('hackathons')}
                className={`px-4 py-1.5 rounded-full transition-all cursor-pointer font-bold ${
                  activeTab === 'hackathons'
                    ? 'bg-white text-black shadow-sm'
                    : 'text-[#8E8E93] hover:text-white'
                }`}
              >
                HACKATHONS
              </button>
            </div>

            {/* Interactive Timeline Progress & Jump Rail */}
            <div className="hidden lg:block space-y-2 pt-2 border-t border-white/10">
              <div className="flex items-center justify-between text-[11px] font-mono text-[#8E8E93]">
                <span>TIMELINE PROGRESS</span>
                <span className="text-white font-bold">{scrollProgress}%</span>
              </div>
              <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-white transition-all duration-150 rounded-full"
                  style={{ width: `${scrollProgress}%` }}
                />
              </div>

              {/* Jump links */}
              <div className="space-y-1 pt-3">
                {displayedMilestones.map((m, idx) => (
                  <button
                    key={m.id}
                    onClick={() => scrollToMilestone(m.id)}
                    className={`w-full text-left px-3.5 py-2 rounded-lg font-mono text-xs flex items-center justify-between transition-all cursor-pointer ${
                      activeMilestoneId === m.id
                        ? 'bg-white/10 text-white border-l-2 border-white font-bold'
                        : 'text-[#8E8E93] hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span className="truncate pr-2">
                      0{idx + 1}. {m.title}
                    </span>
                    <span className="text-[10px] shrink-0 opacity-60">
                      {m.kind === 'hackathon' ? '🏆' : '💼'}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* ─── RIGHT COLUMN: FLOWING TIMELINE CARDS ─────────── */}
          <div className="lg:col-span-7 space-y-6">
            {displayedMilestones.map((m, idx) => {
              const isHackathon = m.kind === 'hackathon';
              return (
                <motion.div
                  id={`milestone-${m.id}`}
                  key={m.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  onViewportEnter={() => setActiveMilestoneId(m.id)}
                  className="hardware-accel rounded-2xl bg-[#121216] border border-white/10 hover:border-white/25 transition-all duration-300 p-6 sm:p-8 space-y-4 shadow-xl group"
                >
                  {/* Card Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-4">
                    <div>
                      <div className="flex items-center gap-2 font-mono text-xs text-white">
                        <span className="w-2 h-2 rounded-full bg-white"></span>
                        <span className="font-bold">{m.badge}</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold font-mono text-white mt-1 group-hover:text-white transition-colors">
                        {m.title}
                      </h3>
                      <div className="text-sm font-mono text-[#8E8E93] font-semibold mt-0.5">
                        {m.subtitle}
                      </div>
                    </div>

                    <div className="flex flex-wrap sm:flex-col items-start sm:items-end gap-2 text-xs font-mono text-[#8E8E93]">
                      <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white">
                        <Calendar className="w-3.5 h-3.5 text-white" />
                        {m.period}
                      </span>
                      <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                        <MapPin className="w-3.5 h-3.5 text-[#8E8E93]" />
                        {m.location}
                      </span>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-[#C4C4C8] leading-relaxed">
                    {m.summary}
                  </p>

                  {/* Quantifiable Deliverables */}
                  <div className="space-y-2 pt-1">
                    <span className="text-[10px] font-mono font-bold tracking-wider text-[#8E8E93] uppercase block">
                      // SYSTEM DELIVERABLES & QUANTIFIABLE HIGHLIGHTS
                    </span>
                    <ul className="space-y-2 text-xs text-[#C4C4C8]">
                      {m.deliverables.map((item, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2">
                          {isHackathon ? (
                            <CheckCircle2 className="w-3.5 h-3.5 text-white shrink-0 mt-0.5" />
                          ) : (
                            <ChevronRight className="w-3.5 h-3.5 text-[#8E8E93] shrink-0 mt-0.5" />
                          )}
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="pt-2 flex flex-wrap gap-1.5 border-t border-white/10">
                    {m.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-0.5 rounded-full text-[11px] font-mono bg-white/5 border border-white/10 text-[#C4C4C8]"
                      >
                        <span className="text-white/40 mr-1">#</span>
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
