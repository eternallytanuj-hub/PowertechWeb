"use client";

import React from "react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import {
  Award,
  ShieldCheck,
  Building,
  CheckCircle2,
  HardHat,
  FileCheck2,
  Zap,
  ArrowRight,
} from "lucide-react";

const REASONS = [
  {
    number: "01",
    title: "Verifiable Execution Experience",
    subtitle: "20+ Years & 100+ Work Packages",
    desc: "Actual utility references including 220 KV Substation Ayodhya, mountain distribution in J&K, and multi-state transmission corridors with zero defaults.",
    icon: Award,
    metric: "20+ Years",
    tag: "Established 2004",
  },
  {
    number: "02",
    title: "Deep State Utility Understanding",
    subtitle: "Mastery of Technical Specifications",
    desc: "Decades of liaisoning with UPPTCL, DVVNL, BSPTCL, HVPNL, and J&K PDD. We understand regional grid nuances, shutdown approvals, and CEIG clearances.",
    icon: Building,
    metric: "10+ Utilities",
    tag: "Pre-Qualified",
  },
  {
    number: "03",
    title: "End-to-End Technical Depth",
    subtitle: "Engineering + Civil + Testing",
    desc: "Integrated delivery combining in-house AutoCAD design, reinforced civil plinths, heavy equipment erection, and secondary relay injection testing.",
    icon: Zap,
    metric: "Up to 400 kV",
    tag: "Turnkey EPC",
  },
  {
    number: "04",
    title: "Uncompromising Safety Culture",
    subtitle: "Zero-Harm HSE Protocol",
    desc: "Over 1,000,000 continuous safe man-hours on live electrical substations. Strict permit-to-work (PTW) enforcement and certified dielectric PPE.",
    icon: HardHat,
    metric: "1,000,000+",
    tag: "Safe Man-Hours",
  },
  {
    number: "05",
    title: "Single-Point Turnkey Ownership",
    subtitle: "From Survey to Synchronization",
    desc: "No contractor handoff gaps. We take complete commercial, engineering, and statutory responsibility from soil test to energized grid delivery.",
    icon: ShieldCheck,
    metric: "Single-Point",
    tag: "Total Accountability",
  },
  {
    number: "06",
    title: "Audit-Grade Documentation",
    subtitle: "Transparent Handover Dossiers",
    desc: "Complete AutoCAD as-built drawings, NABL-traceable test certificates, and operation manuals delivered cleanly at commercial sign-off.",
    icon: FileCheck2,
    metric: "100%",
    tag: "Audit Traceable",
  },
];

export function WhyPowertechSection() {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-white py-20 sm:py-24">
      <div className="dynamic-section-field -z-10" />

      <Container>
        {/* Header */}
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1 text-xs font-bold tracking-wider text-[#111650] uppercase shadow-2xs">
              <span className="h-2 w-2 rounded-full bg-[#EA580C]" />
              <span>Section 15 &bull; Why Powertech Engineers</span>
            </div>
            <h2 className="text-2xl font-black tracking-tight text-[#111650] sm:text-4xl lg:text-[42px]">
              Visual Proof Over Generic Claims
            </h2>
          </div>
          <p className="max-w-md text-xs leading-relaxed text-slate-600 sm:text-sm">
            Why state utilities, DISCOMs, and industrial infrastructure developers choose Powertech
            Engineers for critical high-voltage mandates.
          </p>
        </div>

        {/* 6 Proof Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((reason) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.number}
                className="kinetic-card electric-lift flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50/70 p-6 transition-all hover:border-[#EA580C] hover:bg-white hover:shadow-xl"
              >
                <div>
                  <div className="mb-4 flex items-center justify-between">
                    <span className="font-mono text-xl font-black text-[#EA580C]">
                      {reason.number}
                    </span>
                    <span className="rounded border border-slate-200 bg-white px-2 py-0.5 text-[10px] font-bold tracking-wider text-slate-500 uppercase">
                      {reason.tag}
                    </span>
                  </div>

                  <div className="mb-3 flex items-center space-x-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#111650]/10 text-[#111650]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-base leading-snug font-bold text-[#111650]">
                        {reason.title}
                      </h3>
                      <p className="text-[11px] font-semibold text-[#EA580C]">{reason.subtitle}</p>
                    </div>
                  </div>

                  <p className="mt-3 text-xs leading-relaxed text-slate-600">{reason.desc}</p>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-slate-200/60 pt-4 text-xs">
                  <span className="font-medium text-slate-400">Proven Metric:</span>
                  <span className="font-bold text-[#111650]">{reason.metric}</span>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
