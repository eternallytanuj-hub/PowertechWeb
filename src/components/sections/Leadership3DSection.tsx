"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { leadershipData, EnhancedLeader } from "@/data/leadership";
import {
  Award,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
  Sparkles,
  X,
  ArrowRight,
  Briefcase,
} from "lucide-react";

// Interactive 3D Tilt Card Component
function Director3DCard({
  leader,
  onOpenDetails,
}: {
  leader: EnhancedLeader;
  onOpenDetails: (leader: EnhancedLeader) => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = -((y - centerY) / centerY) * 12; // tilt max 12 deg
    const rotY = ((x - centerX) / centerX) * 12;

    setRotateX(rotX);
    setRotateY(rotY);
    setGlarePos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
    });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setIsHovered(false);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={() => onOpenDetails(leader)}
      className="relative flex h-full flex-col cursor-pointer transition-transform duration-200 ease-out select-none"
      style={{
        perspective: "1000px",
      }}
    >
      <div
        className="relative flex h-full flex-1 flex-col justify-between overflow-hidden rounded-2xl border border-white/20 bg-[#0b1328] p-6 shadow-2xl transition-all duration-300"
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) ${isHovered ? "scale(1.02)" : "scale(1)"}`,
          transformStyle: "preserve-3d",
          minHeight: "510px",
        }}
      >
        {/* Dynamic Glare effect */}
        {isHovered && (
          <div
            className="pointer-events-none absolute inset-0 z-20 rounded-2xl opacity-40 transition-opacity duration-300"
            style={{
              background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 60%)`,
            }}
          />
        )}

        {/* Ambient Top Glow */}
        <div className="pointer-events-none absolute top-0 right-0 h-40 w-40 rounded-full bg-radial from-[#EA580C]/20 to-transparent blur-2xl" />

        {/* Card Header & Avatar Representation */}
        <div className="relative z-10 flex flex-1 flex-col space-y-4">
          <div className="flex items-start justify-between gap-2 min-h-[32px]">
            <span className="rounded-full border border-[#EA580C]/30 bg-[#EA580C]/20 px-3 py-1 text-[10px] font-bold tracking-wider text-[#f08020] uppercase">
              {leader.roleBadge}
            </span>
            <span className="font-mono text-xs font-bold text-emerald-400 shrink-0">
              {leader.experienceYears}+ Yrs Exp
            </span>
          </div>

          {/* Director Monogram & Visual Depth Frame */}
          <div className="flex items-center space-x-4 pt-1 min-h-[96px]">
            <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border-2 border-white/20 bg-gradient-to-tr from-[#111650] to-[#0066FF] text-2xl font-black text-white shadow-xl sm:h-20 sm:w-20">
              <span className="drop-shadow-md">{leader.name.split(" ").slice(-1)[0][0]}</span>
              <div className="absolute -right-1 -bottom-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#EA580C] text-[10px] font-bold text-white shadow-xs">
                ⚡
              </div>
            </div>

            <div className="min-w-0 flex-1">
              <h3 className="text-lg leading-snug font-bold text-white group-hover:text-[#f08020] sm:text-xl truncate">
                {leader.name}
              </h3>
              <p className="text-xs font-semibold text-[#f08020] line-clamp-1">{leader.designation}</p>
              <p className="mt-0.5 font-mono text-[11px] text-slate-400 line-clamp-2">{leader.education}</p>
            </div>
          </div>

          {/* Leadership Quote Statement */}
          <div className="relative flex flex-1 items-center rounded-xl border border-white/10 bg-white/5 p-4 text-xs leading-relaxed text-slate-300 italic min-h-[110px]">
            <span className="absolute -top-1 left-2 font-serif text-2xl leading-none text-[#f08020] opacity-50">
              &ldquo;
            </span>
            <p className="pl-3">{leader.statement}</p>
          </div>
        </div>

        {/* Card Footer: Responsibilities & CTA */}
        <div className="relative z-10 space-y-3 border-t border-white/10 pt-4 mt-4">
          <div className="text-[11px] text-slate-400 min-h-[44px] flex items-center">
            <p className="line-clamp-2">
              <strong className="text-slate-200">Key Expertise:</strong>{" "}
              {leader.responsibilities.slice(0, 2).join(" • ")}
            </p>
          </div>

          <button
            type="button"
            className="flex w-full cursor-pointer items-center justify-between rounded-xl bg-white/10 px-4 py-2.5 text-xs font-bold text-white shadow-xs transition hover:bg-[#EA580C]"
          >
            <span>View Executive Profile</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

// Executive Details Modal
function LeaderDetailModal({
  leader,
  isOpen,
  onClose,
}: {
  leader: EnhancedLeader | null;
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!isOpen || !leader) return null;

  return (
    <div
      className="animate-in fade-in fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-3 backdrop-blur-md sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-white/20 bg-[#080d1a] text-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 bg-[#0c1427] px-6 py-4">
          <div>
            <span className="text-[10px] font-bold tracking-wider text-[#EA580C] uppercase">
              {leader.roleBadge}
            </span>
            <h3 className="text-lg font-bold text-white">{leader.name}</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg bg-white/10 text-slate-300 transition hover:bg-white/20 hover:text-white"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Body */}
        <div className="space-y-6 overflow-y-auto p-6">
          <div className="flex items-center space-x-4 border-b border-white/10 pb-5">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-gradient-to-tr from-[#111650] to-[#0066FF] text-2xl font-black text-white shadow-lg">
              {leader.name.split(" ").slice(-1)[0][0]}
            </div>
            <div>
              <h4 className="text-base font-bold text-white">{leader.name}</h4>
              <p className="text-xs font-semibold text-[#f08020]">{leader.designation}</p>
              <p className="mt-0.5 text-xs text-slate-400">{leader.education}</p>
              <span className="mt-1 inline-block font-mono text-[11px] font-semibold text-emerald-400">
                {leader.experienceYears}+ Years Engineering Leadership
              </span>
            </div>
          </div>

          {/* Statement */}
          <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-xs text-slate-200 italic">
            &ldquo;{leader.statement}&rdquo;
          </div>

          {/* Biography */}
          <div>
            <h4 className="mb-2 text-xs font-bold tracking-wider text-slate-300 uppercase">
              Professional Journey & Governance
            </h4>
            <p className="text-xs leading-relaxed text-slate-300 sm:text-sm">{leader.biography}</p>
          </div>

          {/* Areas of Responsibility */}
          <div>
            <h4 className="mb-2 text-xs font-bold tracking-wider text-slate-300 uppercase">
              Areas of Responsibility
            </h4>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {leader.responsibilities.map((resp, i) => (
                <div key={i} className="flex items-center space-x-2 text-xs text-slate-300">
                  <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-[#EA580C]" />
                  <span>{resp}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Contributions */}
          <div>
            <h4 className="mb-2 text-xs font-bold tracking-wider text-slate-300 uppercase">
              Key Contributions to Powertech
            </h4>
            <div className="space-y-2">
              {leader.contributions.map((con, i) => (
                <div
                  key={i}
                  className="flex items-start space-x-2 rounded-lg border border-white/5 bg-white/5 p-3 text-xs text-slate-300"
                >
                  <Award className="mt-0.5 h-4 w-4 shrink-0 text-[#38bdf8]" />
                  <span>{con}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-white/10 bg-[#0c1427] px-6 py-4">
          <span className="text-[11px] text-slate-400">Powertech Technocrat Leadership</span>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg bg-[#EA580C] px-5 py-2 text-xs font-bold text-white transition hover:bg-orange-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export function Leadership3DSection() {
  const [selectedLeader, setSelectedLeader] = useState<EnhancedLeader | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenDetails = (leader: EnhancedLeader) => {
    setSelectedLeader(leader);
    setModalOpen(true);
  };

  return (
    <section
      id="leadership"
      className="relative overflow-hidden border-b border-white/10 bg-[#070b19] py-20 text-white sm:py-24"
    >
      {/* Background Subtle Gradient Grid */}
      <div className="hero-circuit-grid pointer-events-none absolute inset-0 opacity-15" />

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-xs font-bold tracking-wider text-[#f08020] uppercase backdrop-blur-md">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#EA580C]" />
              <span>Section 09 &bull; Leadership & Meet the Directors</span>
            </div>
            <h2 className="text-2xl leading-tight font-black tracking-tight text-white sm:text-4xl lg:text-[42px]">
              3D Technocrat Leadership Presentation
            </h2>
          </div>
          <p className="max-w-md text-xs leading-relaxed font-normal text-slate-300 sm:text-sm">
            Hover over the profile cards below to experience interactive 3D perspective depth, or
            click any director to view their full professional dossier.
          </p>
        </div>

        {/* 3D Interactive Director Cards Grid */}
        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-4">
          {leadershipData.map((leader) => (
            <Director3DCard key={leader.id} leader={leader} onOpenDetails={handleOpenDetails} />
          ))}
        </div>

        {/* Leadership Philosophy Callout */}
        <div className="mt-14 flex flex-col items-center justify-between gap-6 rounded-2xl border border-white/15 bg-[#0b1428] p-6 text-center sm:p-8 md:flex-row md:text-left">
          <div className="flex items-center space-x-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#EA580C]/40 bg-[#EA580C]/20 text-[#EA580C]">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white sm:text-lg">
                Technocrat Led Since April 2004
              </h3>
              <p className="mt-0.5 text-xs text-slate-400">
                Every executive leader at Powertech is a qualified electrical or structural engineer
                with decades of on-site grid execution experience.
              </p>
            </div>
          </div>

          <Link
            href="/leadership"
            className="shrink-0 rounded-full bg-[#EA580C] px-6 py-2.5 text-xs font-bold text-white shadow-md transition hover:bg-orange-600"
          >
            Explore Leadership & Our Team &rarr;
          </Link>
        </div>
      </Container>

      {/* Director Modal */}
      <LeaderDetailModal
        leader={selectedLeader}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </section>
  );
}
