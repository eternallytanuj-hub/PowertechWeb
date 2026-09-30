"use client";

import React, { Suspense } from "react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { OurProjectsSection } from "@/components/sections/OurProjectsSection";
import { ContractLedger } from "@/components/sections/ContractLedger";
import { SiteGallery } from "@/components/sections/SiteGallery";
import { ContactB2BSection } from "@/components/sections/ContactB2BSection";
import { ScrollReveal } from "@/components/ui/ScrollMotion";
import { ShieldCheck, Award, MapPin, Building, Zap } from "lucide-react";

export default function ProjectsPage() {
  return (
    <div className="flex flex-col bg-[#f7f8fb] text-[#101447]">
      {/* Subpage Header Banner */}
      <div className="relative overflow-hidden border-b border-white/10 bg-[#070b19] py-20 text-white">
        <div className="hero-circuit-grid pointer-events-none absolute inset-0 opacity-20" />
        <Container className="relative z-10">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-xs font-bold tracking-wider text-[#f08020] uppercase backdrop-blur-md">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#EA580C]" />
              <span>Execution Proof &bull; Projects & Track Record</span>
            </div>
            <h1 className="text-3xl leading-tight font-black tracking-tight text-white sm:text-5xl">
              PROJECTS THAT POWER PERFORMANCE.
            </h1>
            <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
              Explore verifiable extra-high-voltage substations, transmission networks, and
              trenchless cabling packages executed across Uttar Pradesh, Jammu & Kashmir, Haryana,
              Bihar, and Jharkhand.
            </p>
          </div>
        </Container>
      </div>

      {/* Featured Projects with Interactive Case Study Modals */}
      <ScrollReveal direction="up" delay={0.05} distance={30}>
        <Suspense
          fallback={
            <div className="p-12 text-center text-slate-400">Loading project portfolio...</div>
          }
        >
          <OurProjectsSection />
        </Suspense>
      </ScrollReveal>

      {/* Complete Commercial Contract Ledger */}
      <ScrollReveal direction="up" delay={0.08} distance={35}>
        <ContractLedger />
      </ScrollReveal>

      {/* Field Site Photo Documentation */}
      <ScrollReveal direction="up" delay={0.08} distance={35}>
        <SiteGallery />
      </ScrollReveal>

      {/* Contact & Tender Terminal */}
      <ScrollReveal direction="up" delay={0.08} distance={35}>
        <ContactB2BSection />
      </ScrollReveal>
    </div>
  );
}
