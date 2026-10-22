'use client';

import React, { useState, useMemo } from 'react';
import { Project, ProjectCategory } from '../types/portfolio';
import { ProjectCard } from './ProjectCard';
import { ArchitectureModal } from './ArchitectureModal';
import { PROJECTS_DATA } from '../data/portfolioData';
import { Search, Filter, Terminal, Cpu } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories: { key: ProjectCategory; label: string; count: number }[] = [
    { key: 'all', label: 'ALL_SYSTEMS', count: PROJECTS_DATA.length },
    { key: 'ai-ml', label: 'ML_&_AI', count: PROJECTS_DATA.filter((p) => p.category === 'ai-ml').length },
    { key: 'quantitative', label: 'QUANT_FINANCE', count: PROJECTS_DATA.filter((p) => p.category === 'quantitative').length },
    { key: 'realtime-fullstack', label: 'REALTIME_DISTRIBUTED', count: PROJECTS_DATA.filter((p) => p.category === 'realtime-fullstack').length },
    { key: 'simulation', label: 'SIMULATION_LOGISTICS', count: PROJECTS_DATA.filter((p) => p.category === 'simulation').length },
  ];

  const filteredProjects = useMemo(() => {
    return PROJECTS_DATA.filter((p) => {
      const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.tagline.toLowerCase().includes(q) ||
        p.problemStatement.toLowerCase().includes(q) ||
        p.techStack.some((t) => t.name.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="projects" className="py-20 sm:py-28 relative border-b border-[#161824]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-2 mb-10 text-left">
          <div className="flex items-center gap-2 font-mono text-xs text-[#ff6b00]">
            <Terminal className="w-3.5 h-3.5" />
            <span>// 01. PRODUCTION_DEPLOYMENTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-mono text-[#f4f4f6] tracking-tight">
            ENGINEERED SYSTEMS & BENCHMARKS
          </h2>
          <p className="text-sm sm:text-base text-[#9ba1b6] max-w-3xl">
            Each system below is extracted directly from production repositories, showcasing architectural rigor, zero-leakage mathematical guarantees, and real-time distributed performance.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8 bg-[#0a0b12] p-3 rounded-lg border border-[#1b1f30]">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto text-xs font-mono pb-1 md:pb-0">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`px-3 py-1.5 rounded transition-all whitespace-nowrap ${
                  selectedCategory === cat.key
                    ? 'bg-[#ff6b00] text-black font-bold shadow-[0_0_12px_rgba(255,107,0,0.35)]'
                    : 'bg-[#10121d] text-[#9ba1b6] hover:text-[#f4f4f6] border border-[#1a1e2e]'
                }`}
              >
                {cat.label} ({cat.count})
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[240px]">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[#71768c]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search stack, ML model, or keyword..."
              className="w-full pl-9 pr-3 py-1.5 bg-[#07080e] border border-[#1d2133] focus:border-[#ff6b00] rounded text-xs font-mono text-[#f4f4f6] outline-none placeholder:text-[#52576d]"
            />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onInspect={(p) => setActiveModalProject(p)}
            />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="p-8 text-center bg-[#0a0b12] rounded-lg border border-[#1b1f30] font-mono text-xs text-[#71768c]">
            No deployments matching query "{searchQuery}". Try searching for 'Random Forest', 'Supabase', 'Vite', or 'Wilder'.
          </div>
        )}
      </div>

      {/* Deep Architecture Modal */}
      <ArchitectureModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
