"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { WhatWeDoCards } from "@/components/sections/WhatWeDoCards";
import { EngineeringToEnergization } from "@/components/sections/EngineeringToEnergization";
import { ContactB2BSection } from "@/components/sections/ContactB2BSection";
import { ScrollReveal } from "@/components/ui/ScrollMotion";
import {
  Layers,
  Zap,
  CheckCircle2,
  ShieldCheck,
  Activity,
  Compass,
  ArrowRight,
  ChevronRight,
} from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="flex flex-col bg-[#f7f8fb] text-[#101447]">
      {/* Header Banner */}
      <div className="relative overflow-hidden border-b border-white/10 bg-[#070b19] py-20 text-white">
        <div className="hero-circuit-grid pointer-events-none absolute inset-0 opacity-20" />
        <Container className="relative z-10">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-xs font-bold tracking-wider text-[#f08020] uppercase backdrop-blur-md">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#EA580C]" />
              <span>Full EPC Portfolio &bull; Core Service Disciplines</span>
            </div>
            <h1 className="text-3xl leading-tight font-black tracking-tight text-white sm:text-5xl">
              Turnkey Electrical Infrastructure Solutions
            </h1>
            <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
              Execution of 400/220/132/33/11 kV substations, transmission lines, trenchless
              underground cabling (HDD), and industrial electrification with zero contractor handoff
              gaps.
            </p>
          </div>
        </Container>
      </div>

      {/* 6 Large Visual Expandable Cards */}
      <ScrollReveal direction="up" delay={0.05} distance={30}>
        <WhatWeDoCards />
      </ScrollReveal>

      {/* 8-Stage Engineering-to-Energization Pipeline */}
      <ScrollReveal direction="up" delay={0.08} distance={35}>
        <EngineeringToEnergization />
      </ScrollReveal>

      {/* Technical Specifications Summary Strip */}
      <ScrollReveal direction="up" delay={0.08} distance={35}>
        <section className="border-b border-slate-200 bg-white py-16">
        <Container>
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 sm:p-12">
            <div className="mb-8 max-w-2xl">
              <span className="font-mono text-xs font-bold tracking-widest text-[#EA580C] uppercase">
                Technical Rigor
              </span>
              <h2 className="mt-1 text-2xl font-bold text-[#111650] sm:text-3xl">
                Field-Tested Tools, Tackles & Calibrated Diagnostic Fleets
              </h2>
              <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
                We own and maintain specialized high-vacuum oil filtration units, secondary relay
                injection sets, micro-ohmmeters, and high-torque HDD trenchless rigs.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 text-xs text-slate-700 sm:grid-cols-3">
              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-2xs">
                <span className="mb-1 block text-lg font-black text-[#EA580C]">
                  01 &bull; Substations
                </span>
                <p className="leading-relaxed text-slate-600">
                  Civil foundations, structural gantry erection, power transformer erection, oil
                  filtration, and protection integration up to 400 kV.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-2xs">
                <span className="mb-1 block text-lg font-black text-[#0066FF]">
                  02 &bull; Transmission
                </span>
                <p className="leading-relaxed text-slate-600">
                  Route survey, stub setting, lattice tower assembly, tension conductor stringing,
                  and sagging up to 220 kV.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-2xs">
                <span className="mb-1 block text-lg font-black text-emerald-600">
                  03 &bull; Cabling (HDD)
                </span>
                <p className="leading-relaxed text-slate-600">
                  Horizontal Directional Drilling (HDD) trenchless cable laying, HT/EHV jointing,
                  and sheath fault location diagnostics.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200 pt-6">
              <span className="text-xs font-semibold text-slate-500">
                Ready for pre-qualification review and technical tender bidding.
              </span>
              <Link
                href="/contact#tender"
                className="inline-flex items-center gap-2 rounded-full bg-[#111650] px-6 py-2.5 text-xs font-bold text-white shadow-xs transition hover:bg-[#EA580C]"
              >
                <span>Submit Tender BOQ &rarr;</span>
              </Link>
            </div>
          </div>
        </Container>
      </section>
      </ScrollReveal>

      {/* Contact Section */}
      <ScrollReveal direction="up" delay={0.08} distance={35}>
        <ContactB2BSection />
      </ScrollReveal>
    </div>
  );
}
