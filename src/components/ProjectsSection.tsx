'use client';

import React, { useState, useMemo } from 'react';
import { Project, ProjectCategory } from '../types/portfolio';
import { ProjectCard } from './ProjectCard';
import { CurvedProjectsCarousel } from './CurvedProjectsCarousel';
import { ArchitectureModal } from './ArchitectureModal';
import { PROJECTS_DATA } from '../data/portfolioData';
import { Search, Terminal, LayoutGrid, Rotate3d } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);
  const [viewMode, setViewMode] = useState<'3d' | 'grid'>('3d');

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
    <section id="projects" className="py-20 sm:py-28 relative border-b border-black/8 bg-[#F4F4F0] overflow-hidden text-[#0E0E10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 text-left">
          <div className="space-y-2">
            <div className="flex items-center gap-2 font-mono text-xs text-[#0E0E10] font-bold">
              <Terminal className="w-3.5 h-3.5" />
              <span>// 01. PRODUCTION_DEPLOYMENTS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-mono text-[#0E0E10] tracking-tight">
              FEATURED PROJECTS <span className="text-[#8E8E93] font-normal text-2xl sm:text-3xl font-sans ml-2">/ WORKS '26</span>
            </h2>
            <p className="text-sm sm:text-base text-[#4A4A50] max-w-3xl leading-relaxed">
              Extracted directly from production repositories, showcasing algorithmic rigor, zero-leakage mathematical guarantees, and real-time distributed performance.
            </p>
          </div>

          {/* View Mode Switcher: 3D Arc vs Grid Matrix */}
          <div className="flex items-center gap-1.5 p-1 rounded-full bg-white border border-black/10 shrink-0 font-mono text-xs shadow-sm">
            <button
              onClick={() => setViewMode('3d')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full transition-all cursor-pointer font-bold ${
                viewMode === '3d'
                  ? 'bg-[#0E0E10] text-white shadow-sm'
                  : 'text-[#4A4A50] hover:text-[#0E0E10]'
              }`}
            >
              <Rotate3d className="w-3.5 h-3.5" />
              <span>3D CURVED ARC</span>
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full transition-all cursor-pointer font-bold ${
                viewMode === 'grid'
                  ? 'bg-[#0E0E10] text-white shadow-sm'
                  : 'text-[#4A4A50] hover:text-[#0E0E10]'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>GRID VIEW</span>
            </button>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8 bg-white p-3 rounded-2xl border border-black/8 shadow-editorial">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto text-xs font-mono pb-1 md:pb-0">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`px-3.5 py-1.5 rounded-full transition-all whitespace-nowrap cursor-pointer font-medium ${
                  selectedCategory === cat.key
                    ? 'bg-[#0E0E10] text-white font-bold shadow-sm'
                    : 'bg-[#F4F4F0] text-[#4A4A50] hover:text-[#0E0E10] border border-black/5'
                }`}
              >
                {cat.label} ({cat.count})
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[240px]">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[#8E8E93]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search stack, ML model, or keyword..."
              className="w-full pl-9 pr-3 py-1.5 bg-[#F4F4F0] border border-black/8 focus:border-black rounded-full text-xs font-mono text-[#0E0E10] outline-none placeholder:text-[#8E8E93]"
            />
          </div>
        </div>

        {/* ─── 3D CAROUSEL OR GRID PRESENTATION ─────────── */}
        {viewMode === '3d' && filteredProjects.length > 0 ? (
          <CurvedProjectsCarousel
            projects={filteredProjects}
            onInspect={(p) => setActiveModalProject(p)}
            selectedCategory={selectedCategory}
          />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onInspect={(p) => setActiveModalProject(p)}
              />
            ))}
          </div>
        )}

        {filteredProjects.length === 0 && (
          <div className="p-8 text-center bg-white rounded-2xl border border-black/8 font-mono text-xs text-[#8E8E93]">
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
