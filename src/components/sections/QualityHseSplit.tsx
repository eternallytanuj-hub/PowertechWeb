"use client";

import React from "react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import {
  ShieldCheck,
  CheckCircle2,
  HardHat,
  Award,
  FileCheck,
  Activity,
  AlertTriangle,
  ArrowRight,
} from "lucide-react";

export function QualityHseSplit() {
  return (
    <section
      id="quality-hse"
      className="relative overflow-hidden border-b border-white/10 bg-slate-900 py-20 text-white sm:py-24"
    >
      <div className="hero-circuit-grid pointer-events-none absolute inset-0 opacity-15" />

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-xs font-bold tracking-wider text-[#f08020] uppercase backdrop-blur-md">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#EA580C]" />
              <span>Section 12 &bull; Quality, Safety & HSE</span>
            </div>
            <h2 className="text-2xl leading-tight font-black tracking-tight text-white sm:text-4xl lg:text-[42px]">
              Quality Assurance & Zero-Harm Safety
            </h2>
          </div>
          <p className="max-w-md text-xs leading-relaxed font-normal text-slate-300 sm:text-sm">
            Institutional QA/QC standards paired with an uncompromising site safety culture on live
            extra-high-voltage switchyards.
          </p>
        </div>

        {/* Split Screen Visual Layout */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Left Column: Quality Management (QA/QC) */}
          <div className="flex flex-col justify-between space-y-6 rounded-2xl border border-sky-500/30 bg-[#09152b] p-6 shadow-xl sm:p-8">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center space-x-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-sky-500/30 bg-sky-500/20 text-sky-400">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] font-bold tracking-widest text-sky-400 uppercase">
                      ISO 9001:2015 CERTIFIED
                    </span>
                    <h3 className="text-xl font-bold text-white">Quality Management (QA / QC)</h3>
                  </div>
                </div>
                <span className="rounded bg-sky-500/20 px-2 py-0.5 text-[10px] font-bold text-sky-300">
                  Zero Tolerance
                </span>
              </div>

              <p className="text-xs leading-relaxed text-slate-300 sm:text-sm">
                Disciplined multi-stage quality controls ensuring all materials, foundation civil
                plinths, and electrical assemblies comply traceably with state utility design
                criteria.
              </p>

              {/* Quality Checklist */}
              <div className="space-y-3 pt-2">
                {[
                  {
                    title: "Rigorous QA / QC Procedures",
                    desc: "Standardized inspection protocols from incoming vendor dispatch through energized commissioning.",
                  },
                  {
                    title: "Factory & Site Testing (FAT / SAT)",
                    desc: "Witnessing of third-party type tests and rigorous pre-erection field diagnostic checks.",
                  },
                  {
                    title: "Calibrated Instrumentation Traceability",
                    desc: "All secondary injection and dielectric oil testing kits hold valid national NABL calibration certificates.",
                  },
                  {
                    title: "Comprehensive As-Built Documentation",
                    desc: "Delivery of audited single-line diagrams, cable schedules, and statutory dossiers for utility record.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-3 text-xs text-slate-200">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-sky-400" />
                    <div>
                      <strong className="text-white">{item.title}:</strong>{" "}
                      <span className="text-slate-300">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-white/10 pt-4 text-xs text-slate-400">
              <span>Standard: IS & IEC Specifications</span>
              <Link href="/quality-hse" className="font-bold text-sky-400 hover:underline">
                Review Quality Manual &rarr;
              </Link>
            </div>
          </div>

          {/* Right Column: HSE & Safety Management */}
          <div className="flex flex-col justify-between space-y-6 rounded-2xl border border-orange-500/30 bg-[#161214] p-6 shadow-xl sm:p-8">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center space-x-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-orange-500/30 bg-orange-500/20 text-[#EA580C]">
                    <HardHat className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] font-bold tracking-widest text-[#f08020] uppercase">
                      ISO 45001 / ISO 14001
                    </span>
                    <h3 className="text-xl font-bold text-white">
                      Health, Safety & Environment (HSE)
                    </h3>
                  </div>
                </div>
                <span className="rounded bg-orange-500/20 px-2 py-0.5 text-[10px] font-bold text-orange-300">
                  Zero Harm Protocol
                </span>
              </div>

              <p className="text-xs leading-relaxed text-slate-300 sm:text-sm">
                Field safety is non-negotiable. Over 1,000,000 safe man-hours achieved on live
                extra-high-voltage switchyards and difficult transmission corridor terrains.
              </p>

              {/* HSE Checklist */}
              <div className="space-y-3 pt-2">
                {[
                  {
                    title: "100% Mandatory Certified PPE",
                    desc: "Class-4 dielectric boots, voltage-rated gloves, fall-arrest harnesses, and anti-static clothing.",
                  },
                  {
                    title: "Daily Pre-Shift Toolbox Talks (TBT)",
                    desc: "Mandatory safety risk evaluations and situational briefings prior to commencing high-voltage works.",
                  },
                  {
                    title: "Permit-to-Work (PTW) System",
                    desc: "Strict lockout/tagout (LOTO) protocols and formal electrical clearance interlocks before touching conductors.",
                  },
                  {
                    title: "Spill Containment & Ecological Protection",
                    desc: "Dedicated transformer oil drainage pits and trenchless drilling (HDD) preserving surrounding ecosystems.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-3 text-xs text-slate-200">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#EA580C]" />
                    <div>
                      <strong className="text-white">{item.title}:</strong>{" "}
                      <span className="text-slate-300">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-white/10 pt-4 text-xs text-slate-400">
              <span>Metric: 1,000,000+ Safe Man-Hours</span>
              <Link href="/quality-hse" className="font-bold text-[#f08020] hover:underline">
                Explore HSE Policy &rarr;
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Compliance Framework Strip */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/5 p-5 text-xs text-slate-300 md:flex-row">
          <div className="flex items-center space-x-3">
            <FileCheck className="h-5 w-5 shrink-0 text-emerald-400" />
            <span>
              <strong>Statutory Compliance:</strong> Fully compliant with Central Electricity
              Authority (CEA) safety guidelines, Indian Electricity Rules (IER), and State
              Electricity Licensing Board statutes.
            </span>
          </div>
          <Link
            href="/certifications"
            className="shrink-0 rounded-lg bg-white/10 px-4 py-2 font-bold text-white transition hover:bg-white/20"
          >
            Inspect Statutory Licenses &rarr;
          </Link>
        </div>
      </Container>
    </section>
  );
}
