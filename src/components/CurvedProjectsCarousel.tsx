'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Project } from '../types/portfolio';
import { ProjectCard } from './ProjectCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CurvedProjectsCarouselProps {
  projects: Project[];
  onInspect: (project: Project) => void;
  selectedCategory: string;
}

export const CurvedProjectsCarousel: React.FC<CurvedProjectsCarouselProps> = ({
  projects,
  onInspect,
  selectedCategory,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [dragStartX, setDragStartX] = useState<number | null>(null);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  // Check mobile & reduced motion
  useEffect(() => {
    const checkViewport = () => {
      setIsMobile(window.innerWidth < 768);
      const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setPrefersReducedMotion(motionQuery.matches);
    };

    checkViewport();
    window.addEventListener('resize', checkViewport);
    return () => window.removeEventListener('resize', checkViewport);
  }, []);

  // When category changes from external filter, auto-rotate to matching project
  useEffect(() => {
    if (selectedCategory && selectedCategory !== 'all') {
      const matchIdx = projects.findIndex((p) => p.category === selectedCategory);
      if (matchIdx !== -1) {
        setActiveIndex(matchIdx);
      }
    }
  }, [selectedCategory, projects]);

  const total = projects.length;

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : total - 1));
  }, [total]);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev < total - 1 ? prev + 1 : 0));
  }, [total]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) return;
      if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handlePrev, handleNext]);

  // Pointer drag gestures with inertia
  const handlePointerDown = (e: React.PointerEvent) => {
    setDragStartX(e.clientX);
    setIsDragging(true);
    setDragOffset(0);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging || dragStartX === null) return;
    const diff = e.clientX - dragStartX;
    setDragOffset(diff);
  };

  const handlePointerUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (dragOffset > 60) {
      handlePrev();
    } else if (dragOffset < -60) {
      handleNext();
    }
    setDragOffset(0);
    setDragStartX(null);
  };

  // Drag progress fraction between -1 and 1
  const dragProgress = isDragging ? dragOffset / 380 : 0;
  const virtualIndex = activeIndex - dragProgress;

  return (
    <div className="relative w-full py-8 select-none">
      {/* ─── 3D PERSPECTIVE CYLINDER STAGE ────────────────── */}
      <div
        ref={containerRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        className="perspective-container relative w-full h-[760px] sm:h-[700px] flex items-center justify-center overflow-visible cursor-grab active:cursor-grabbing touch-pan-y"
      >
        {/* Subtle Ambient Radial Halos in Soft Warm Cream / Gray */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-black/[0.02] blur-[100px] rounded-full pointer-events-none"></div>

        {/* 3D Arc Track */}
        <div className="preserve-3d relative w-full max-w-xl h-[620px] flex items-center justify-center">
          {projects.map((project, idx) => {
            // Calculate relative offset on cylinder
            const offset = idx - virtualIndex;
            const angleDeg = offset * 34; // 34 degrees per arc slot
            const angleRad = (angleDeg * Math.PI) / 180;
            const radius = 540; // cylinder radius in pixels

            // Arc positioning
            const x = Math.sin(angleRad) * radius;
            const z = (Math.cos(angleRad) - 1) * radius;
            const rotY = angleDeg;
            const scale = Math.max(0.76, 1 - Math.abs(offset) * 0.12);
            const blurAmount = prefersReducedMotion ? 0 : Math.min(6, Math.abs(offset) * 4);
            const opacity = Math.max(0.3, 1 - Math.abs(offset) * 0.42);
            const zIndex = Math.round(100 - Math.abs(offset) * 20);
            const isCurrentActive = idx === activeIndex;

            // Fallback for mobile or reduced motion: smooth side translation
            const transform = isMobile || prefersReducedMotion
              ? `translateX(${(idx - activeIndex) * 105}%) scale(${isCurrentActive ? 1 : 0.88})`
              : `translate3d(${x}px, 0px, ${z}px) rotateY(${rotY}deg) scale(${scale})`;

            return (
              <div
                key={project.id}
                onClick={(e) => {
                  // If background card clicked, rotate to front
                  if (!isCurrentActive) {
                    e.stopPropagation();
                    setActiveIndex(idx);
                  }
                }}
                style={{
                  transform,
                  filter: `blur(${blurAmount}px)`,
                  opacity: isMobile && Math.abs(idx - activeIndex) > 1 ? 0 : opacity,
                  zIndex,
                  transition: isDragging ? 'none' : 'transform 0.55s cubic-bezier(0.16, 1, 0.3, 1), filter 0.55s ease, opacity 0.55s ease',
                }}
                className={`hardware-accel absolute top-0 w-full max-w-[540px] px-2 sm:px-0 cursor-pointer ${
                  isCurrentActive ? 'cursor-default ring-1 ring-black/15 rounded-2xl shadow-2xl' : 'hover:opacity-75'
                }`}
              >
                {/* Active Indicator Floating Chip */}
                {isCurrentActive && (
                  <div className="absolute -top-3.5 left-6 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0E0E10] text-white font-mono text-[10px] font-bold shadow-md">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping"></span>
                    <span>ACTIVE_SYSTEM // [0{idx + 1} OF 0{total}]</span>
                  </div>
                )}

                {/* Project Card (100% Solid White Opaque) */}
                <ProjectCard
                  project={project}
                  onInspect={onInspect}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* ─── 3D CAROUSEL CONTROLS & TELEMETRY NAV ─────────── */}
      <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-xl mx-auto px-4">
        {/* Step Indicator Pills */}
        <div className="flex items-center gap-2">
          {projects.map((p, idx) => (
            <button
              key={p.id}
              onClick={() => setActiveIndex(idx)}
              className={`h-2 transition-all rounded-full cursor-pointer ${
                idx === activeIndex
                  ? 'w-8 bg-[#0E0E10] shadow-sm'
                  : 'w-2 bg-black/15 hover:bg-black/30'
              }`}
              title={`Switch to ${p.title}`}
            />
          ))}
          <span className="font-mono text-xs text-[#4A4A50] font-semibold ml-2">
            0{activeIndex + 1} / 0{total}
          </span>
        </div>

        {/* Carousel Action Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrev}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white hover:bg-[#0E0E10] text-[#0E0E10] hover:text-white border border-black/10 hover:border-black transition-all shadow-sm cursor-pointer group"
            title="Previous System (Arrow Left)"
          >
            <ChevronLeft className="w-5 h-5 transition-colors" />
          </button>

          <button
            onClick={handleNext}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white hover:bg-[#0E0E10] text-[#0E0E10] hover:text-white border border-black/10 hover:border-black transition-all shadow-sm cursor-pointer group"
            title="Next System (Arrow Right)"
          >
            <ChevronRight className="w-5 h-5 transition-colors" />
          </button>
        </div>
      </div>

      {/* Editorial Navigation Hint */}
      <div className="mt-3 text-center">
        <p className="text-[11px] font-mono text-[#8E8E93] tracking-wider uppercase font-medium">
          [ ↔ DRAG / SWIPE ARC TO ROTATE // ARROW KEYS NAVIGATE // CLICK ANY CARD TO FOCUS ]
        </p>
      </div>
    </div>
  );
};
