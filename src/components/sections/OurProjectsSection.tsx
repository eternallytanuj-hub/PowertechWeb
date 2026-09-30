"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { projectsData, caseStudiesData } from "@/data/projects";
import { ProjectCaseStudyModal } from "@/components/ui/ProjectCaseStudyModal";
import {
  MapPin,
  Building,
  Zap,
  Calendar,
  ArrowRight,
  ExternalLink,
  Filter,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { CaseStudy } from "@/types";

const CATEGORIES = [
  "All Projects",
  "Substations",
  "Transmission",
  "Distribution",
  "Underground Cabling",
  "Industrial",
];

export function OurProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All Projects");
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const filteredProjects = projectsData.filter((p) => {
    if (activeCategory === "All Projects") return true;
    return p.category
      .toLowerCase()
      .includes(activeCategory.toLowerCase().replace("projects", "").trim());
  });

  const handleOpenCaseStudy = (projectId: string) => {
    const study = caseStudiesData[projectId] || caseStudiesData["ayodhya-220kv"];
    setSelectedCaseStudy(study);
    setModalOpen(true);
  };

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-slate-900 py-20 text-white sm:py-24"
    >
      {/* Background Grid Pattern */}
      <div className="hero-circuit-grid pointer-events-none absolute inset-0 opacity-15" />

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-xs font-bold tracking-wider text-[#f08020] uppercase backdrop-blur-md">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#EA580C]" />
              <span>Section 05 &bull; Our Projects</span>
            </div>
            <h2 className="text-2xl leading-tight font-black tracking-tight text-white sm:text-4xl lg:text-[44px]">
              PROJECTS THAT POWER PERFORMANCE.
            </h2>
          </div>
          <p className="max-w-md text-xs leading-relaxed text-slate-300 sm:text-sm">
            Verifiable extra-high-voltage substations, transmission corridors, and trenchless
            underground cabling executed for state transmission corporations.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="mb-10 flex flex-wrap items-center gap-2 border-b border-white/10 pb-4">
          <div className="mr-2 flex items-center gap-1.5 text-xs text-slate-400">
            <Filter className="h-3.5 w-3.5 text-[#f08020]" />
            <span className="text-[10px] font-semibold tracking-wider uppercase">
              Filter By Discipline:
            </span>
          </div>
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`cursor-pointer rounded-full px-4 py-1.5 text-xs font-bold transition-all ${
                  isActive
                    ? "scale-105 bg-[#EA580C] text-white shadow-md shadow-orange-600/30"
                    : "bg-white/10 text-slate-300 hover:bg-white/20 hover:text-white"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Cinematic Horizontal Project Cards */}
        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2">
          {filteredProjects.map((project, idx) => {
            const hasHeroImg = project.images && project.images.length > 0;
            const imgSrc = hasHeroImg ? project.images[0].src : "/hero-images/hero-substation.jpg";

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: (idx % 2) * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/15 bg-[#0d1424] shadow-xl transition-all duration-300 hover:border-[#EA580C] hover:shadow-2xl"
              >
                {/* Visual Image Header */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-800">
                  <Image
                    src={imgSrc}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1424] via-[#0d1424]/40 to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-4 right-4 left-4 flex items-center justify-between">
                    <span className="rounded-md bg-[#EA580C] px-3 py-1 text-[11px] font-bold tracking-wider text-white uppercase shadow-md">
                      {project.voltageClass || "EHV Infrastructure"}
                    </span>
                    <span className="flex items-center gap-1 rounded-md bg-emerald-600/90 px-2.5 py-0.5 text-[10px] font-bold tracking-wider text-white uppercase backdrop-blur-md">
                      <CheckCircle2 className="h-3 w-3" />
                      {project.status || "Completed"}
                    </span>
                  </div>

                  {/* Location & Year Overlay */}
                  <div className="absolute right-4 bottom-3 left-4 flex items-center justify-between text-xs text-white/90">
                    <div className="flex items-center space-x-1 font-medium">
                      <MapPin className="h-3.5 w-3.5 text-[#f08020]" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center space-x-1 font-mono text-[11px] text-slate-300">
                      <Calendar className="h-3.5 w-3.5 text-[#f08020]" />
                      <span>{project.completionYear || "Verified"}</span>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="flex flex-1 flex-col justify-between space-y-4 p-6">
                  <div>
                    <div className="mb-1 flex items-center space-x-1.5 text-xs font-semibold text-slate-400">
                      <Building className="h-3.5 w-3.5 text-[#f08020]" />
                      <span className="truncate">
                        {project.client || "State Power Transmission Utility"}
                      </span>
                    </div>

                    <h3 className="text-lg leading-snug font-bold text-white transition-colors group-hover:text-[#f08020] sm:text-xl">
                      {project.title}
                    </h3>

                    <p className="mt-2.5 line-clamp-3 text-xs leading-relaxed text-slate-300">
                      {project.scope}
                    </p>
                  </div>

                  {/* Card Action Buttons */}
                  <div className="flex items-center justify-between gap-3 border-t border-white/10 pt-4">
                    <button
                      type="button"
                      onClick={() => handleOpenCaseStudy(project.id)}
                      className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-[#EA580C] px-4 py-2.5 text-xs font-bold text-white shadow-md transition hover:bg-orange-600"
                    >
                      <span>View Project Case Study</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>

                    <Link
                      href="/projects"
                      className="flex items-center gap-1 text-xs font-medium text-slate-400 transition hover:text-white"
                    >
                      <span>Contract Specs &rarr;</span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* View All Projects Portfolio Banner */}
        <div className="mt-14 flex flex-col items-center justify-between gap-6 rounded-2xl border border-white/15 bg-[#0a1020] p-6 text-center sm:p-8 md:flex-row md:text-left">
          <div>
            <span className="font-mono text-xs font-bold tracking-widest text-[#f08020] uppercase">
              100+ Work Packages Across 10+ State Utilities
            </span>
            <h3 className="mt-1 text-xl font-bold text-white sm:text-2xl">
              Explore the Full Commercial Contract Ledger & Technical Dossiers
            </h3>
            <p className="mt-1 text-xs text-slate-400">
              Audit-ready records for UPPTCL, DVVNL, BSPTCL, HVPNL, J&K PDD, and industrial power
              projects.
            </p>
          </div>
          <Link
            href="/projects"
            className="shrink-0 rounded-full bg-white px-7 py-3 text-xs font-bold text-[#111650] shadow-lg transition hover:bg-[#EA580C] hover:text-white sm:text-sm"
          >
            Open Complete Project Portfolio
          </Link>
        </div>
      </Container>

      {/* Case Study Modal Injection */}
      <ProjectCaseStudyModal
        caseStudy={selectedCaseStudy}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </section>
  );
}
