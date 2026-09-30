"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CaseStudy } from "@/types";
import {
  X,
  MapPin,
  Building,
  Zap,
  CheckCircle2,
  Calendar,
  Layers,
  ShieldCheck,
  ChevronRight,
  ArrowRight,
  Sparkles,
  ExternalLink,
} from "lucide-react";

interface ProjectCaseStudyModalProps {
  caseStudy: CaseStudy | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectCaseStudyModal({ caseStudy, isOpen, onClose }: ProjectCaseStudyModalProps) {
  const [activeTab, setActiveTab] = useState<"overview" | "phases" | "gallery" | "achievements">(
    "overview"
  );

  if (!isOpen || !caseStudy) return null;

  const phaseList = [
    { key: "engineering", label: "01 Engineering", data: caseStudy.phases.engineering },
    {
      key: "procurement",
      label: "02 Civil & Procurement",
      data: caseStudy.phases.procurementAndConstruction,
    },
    { key: "installation", label: "03 Erection & Cabling", data: caseStudy.phases.installation },
    { key: "testing", label: "04 Diagnostics & Testing", data: caseStudy.phases.testing },
    { key: "commissioning", label: "05 Statutory Sign-Off", data: caseStudy.phases.commissioning },
    {
      key: "energization",
      label: "06 Final Energization",
      data: caseStudy.phases.finalEnergization,
    },
  ];

  return (
    <div
      className="animate-in fade-in fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/85 p-2 backdrop-blur-md sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
    >
      <div
        className="relative flex max-h-[94vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-white/20 bg-[#080d1a] text-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header with Close button */}
        <div className="z-20 flex items-center justify-between border-b border-white/10 bg-[#0c1427] px-6 py-4">
          <div className="flex items-center space-x-3">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#EA580C] text-xs font-black text-white">
              ⚡
            </span>
            <div>
              <span className="text-[10px] font-bold tracking-widest text-[#EA580C] uppercase">
                Turnkey Execution Case Study
              </span>
              <h3
                id="case-study-title"
                className="text-base leading-tight font-bold text-white sm:text-lg"
              >
                {caseStudy.title}
              </h3>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg bg-white/10 text-slate-300 transition hover:bg-white/20 hover:text-white"
            aria-label="Close Case Study"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Scrollable Container */}
        <div className="overflow-y-auto">
          {/* 1. Project Hero Banner */}
          <div className="relative h-64 w-full overflow-hidden bg-slate-900 sm:h-80">
            <Image
              src={caseStudy.heroImage}
              alt={caseStudy.title}
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080d1a] via-[#080d1a]/50 to-transparent" />
            <div className="absolute right-6 bottom-6 left-6">
              <span className="inline-block rounded-md bg-[#EA580C] px-3 py-1 text-xs font-bold tracking-wider text-white uppercase">
                {caseStudy.voltageClass}
              </span>
              <h2 className="mt-2 text-2xl font-black text-white sm:text-3xl">{caseStudy.title}</h2>
              <p className="mt-1 text-xs font-medium text-slate-200 sm:text-sm">
                {caseStudy.subtitle}
              </p>
            </div>
          </div>

          {/* 2. Key Metadata Badges */}
          <div className="grid grid-cols-2 gap-2 border-b border-white/10 bg-[#0c1427] p-4 text-xs sm:grid-cols-4">
            <div className="p-2">
              <span className="block text-[10px] text-slate-400 uppercase">Client Utility</span>
              <span className="mt-0.5 flex items-center gap-1 font-semibold text-white">
                <Building className="h-3.5 w-3.5 text-[#EA580C]" />
                {caseStudy.client}
              </span>
            </div>
            <div className="p-2">
              <span className="block text-[10px] text-slate-400 uppercase">Location</span>
              <span className="mt-0.5 flex items-center gap-1 font-semibold text-white">
                <MapPin className="h-3.5 w-3.5 text-[#EA580C]" />
                {caseStudy.location}, {caseStudy.state}
              </span>
            </div>
            <div className="p-2">
              <span className="block text-[10px] text-slate-400 uppercase">Voltage Rating</span>
              <span className="mt-0.5 flex items-center gap-1 font-semibold text-emerald-400">
                <Zap className="h-3.5 w-3.5" />
                {caseStudy.voltageClass}
              </span>
            </div>
            <div className="p-2">
              <span className="block text-[10px] text-slate-400 uppercase">Commissioning Year</span>
              <span className="mt-0.5 flex items-center gap-1 font-semibold text-white">
                <Calendar className="h-3.5 w-3.5 text-[#EA580C]" />
                {caseStudy.completionYear}
              </span>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex border-b border-white/10 bg-[#080d1a] px-6 text-xs font-semibold">
            {[
              { id: "overview", label: "Executive Overview" },
              { id: "phases", label: "Engineering to Energization (6 Phases)" },
              { id: "gallery", label: "Site Gallery" },
              { id: "achievements", label: "Key Achievements" },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as any)}
                className={`cursor-pointer border-b-2 px-4 py-3.5 transition ${
                  activeTab === tab.id
                    ? "border-[#EA580C] text-[#EA580C]"
                    : "border-transparent text-slate-400 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="space-y-6 p-6">
            {activeTab === "overview" && (
              <div className="animate-in fade-in space-y-6">
                {/* Project Overview */}
                <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                  <h4 className="mb-2 flex items-center gap-1.5 text-xs font-bold tracking-wider text-[#38bdf8] uppercase">
                    <Sparkles className="h-4 w-4" />
                    Project Narrative & Context
                  </h4>
                  <p className="text-sm leading-relaxed text-slate-200">{caseStudy.overview}</p>
                </div>

                {/* Scope of Work */}
                <div className="rounded-xl border border-white/10 bg-[#0c1427] p-5">
                  <h4 className="mb-2 flex items-center gap-1.5 text-xs font-bold tracking-wider text-[#EA580C] uppercase">
                    <Layers className="h-4 w-4" />
                    Turnkey EPC Scope of Work
                  </h4>
                  <p className="text-xs leading-relaxed text-slate-300">{caseStudy.scopeOfWork}</p>
                </div>

                {/* Highlights Summary */}
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {caseStudy.keyAchievements.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start space-x-2.5 rounded-lg border border-white/5 bg-white/5 p-3 text-xs text-slate-300"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "phases" && (
              <div className="animate-in fade-in space-y-4">
                <p className="text-xs text-slate-400">
                  Full systematic sequence executed by Powertech Engineers from greenfield survey
                  through synchronized energization:
                </p>
                <div className="space-y-3">
                  {phaseList.map((phase) => (
                    <div
                      key={phase.key}
                      className="rounded-xl border border-white/10 bg-white/5 p-4 transition hover:border-[#EA580C]/40"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs font-bold text-[#EA580C] uppercase">
                          Phase {phase.data.phase} &bull; {phase.data.title}
                        </span>
                        <span className="rounded bg-emerald-500/20 px-2 py-0.5 text-[10px] font-bold text-emerald-400">
                          Completed & Signed Off
                        </span>
                      </div>
                      <p className="mt-2 text-xs leading-relaxed text-slate-300">
                        {phase.data.description}
                      </p>
                      <div className="mt-3 grid grid-cols-1 gap-2 border-t border-white/5 pt-2 sm:grid-cols-2">
                        {phase.data.checkpoints.map((cp, cIdx) => (
                          <div
                            key={cIdx}
                            className="flex items-center space-x-2 text-[11px] text-slate-400"
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-[#EA580C]" />
                            <span>{cp}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "gallery" && (
              <div className="animate-in fade-in grid grid-cols-1 gap-4 sm:grid-cols-2">
                {caseStudy.gallery.map((img, idx) => (
                  <div
                    key={idx}
                    className="overflow-hidden rounded-xl border border-white/10 bg-black/40"
                  >
                    <div className="relative aspect-[16/10] w-full">
                      <Image
                        src={img.src}
                        alt={img.caption}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="border-t border-white/5 bg-[#0c1427] p-3">
                      <p className="text-xs font-medium text-slate-200">{img.caption}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "achievements" && (
              <div className="animate-in fade-in space-y-4">
                <div className="rounded-xl border border-emerald-500/30 bg-emerald-950/20 p-5">
                  <h4 className="mb-3 flex items-center gap-2 text-sm font-bold text-emerald-400">
                    <ShieldCheck className="h-5 w-5" />
                    Verified Project Performance Metrics
                  </h4>
                  <div className="space-y-3">
                    {caseStudy.keyAchievements.map((ach, idx) => (
                      <div key={idx} className="flex items-start space-x-3 text-xs text-slate-200">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 font-bold text-emerald-400">
                          ✓
                        </span>
                        <span className="leading-relaxed">{ach}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/5 p-4 text-xs text-slate-400 sm:flex-row">
                  <div>
                    <strong className="text-white">Audited Utility Record:</strong> Single-line
                    diagrams, factory test certificates, and CEIG inspection clearances available
                    for authorized tender evaluation.
                  </div>
                  <a
                    href="#contact"
                    onClick={onClose}
                    className="inline-flex shrink-0 items-center gap-1.5 rounded-lg bg-[#EA580C] px-4 py-2 font-bold text-white transition hover:bg-orange-600"
                  >
                    <span>Request Technical Dossier</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between border-t border-white/10 bg-[#0c1427] px-6 py-4">
          <span className="hidden text-[11px] text-slate-400 sm:inline">
            Powertech Engineers EPC Landmark Series &bull; ISO 9001:2015
          </span>
          <div className="flex w-full items-center justify-end space-x-3 sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              className="cursor-pointer rounded-lg bg-white/10 px-4 py-2 text-xs font-semibold text-white transition hover:bg-white/20"
            >
              Close
            </button>
            <a
              href="#contact"
              onClick={onClose}
              className="inline-flex items-center gap-1.5 rounded-lg bg-[#EA580C] px-4 py-2 text-xs font-bold text-white shadow-sm transition hover:bg-orange-600"
            >
              <span>Inquire for Similar Project</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
