"use client";

import React from "react";
import { Container } from "@/components/layout/Container";
import { CareersSection } from "@/components/sections/CareersSection";
import { WhyPowertechSection } from "@/components/sections/WhyPowertechSection";
import { ContactB2BSection } from "@/components/sections/ContactB2BSection";
import { Briefcase, Users, Award, ShieldCheck } from "lucide-react";

export default function CareersPage() {
  return (
    <div className="flex flex-col bg-[#f7f8fb] text-[#101447]">
      {/* Subpage Header Banner */}
      <div className="relative overflow-hidden border-b border-white/10 bg-[#070b19] py-20 text-white">
        <div className="hero-circuit-grid pointer-events-none absolute inset-0 opacity-20" />
        <Container className="relative z-10">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-xs font-bold tracking-wider text-[#f08020] uppercase backdrop-blur-md">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#EA580C]" />
              <span>Engineering Careers &bull; Powertech Talent Gateway</span>
            </div>
            <h1 className="text-3xl leading-tight font-black tracking-tight text-white sm:text-5xl">
              BUILD YOUR CAREER WHERE POWER INFRASTRUCTURE GETS BUILT.
            </h1>
            <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
              Explore opportunities for experienced electrical substation engineers, transmission
              line specialists, protection testing experts, and graduate engineering trainees.
            </p>
          </div>
        </Container>
      </div>

      {/* Main Careers Section with Open Positions & Application Form */}
      <CareersSection />

      {/* Why Powertech Proof Section */}
      <WhyPowertechSection />

      {/* Contact Section */}
      <ContactB2BSection />
    </div>
  );
}
