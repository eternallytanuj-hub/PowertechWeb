"use client";

import React from "react";
import { Container } from "@/components/layout/Container";
import { CapabilitiesSection } from "@/components/sections/CapabilitiesSection";
import { EngineeringToEnergization } from "@/components/sections/EngineeringToEnergization";
import { ContactB2BSection } from "@/components/sections/ContactB2BSection";
import { salientFeatures } from "@/data/company";
import { ShieldCheck, CheckCircle2, Award, Zap, Compass, Wrench } from "lucide-react";

export default function CapabilitiesPage() {
  return (
    <div className="flex flex-col bg-[#f7f8fb] text-[#101447]">
      {/* Subpage Header Banner */}
      <div className="relative overflow-hidden border-b border-white/10 bg-[#070b19] py-20 text-white">
        <div className="hero-circuit-grid pointer-events-none absolute inset-0 opacity-20" />
        <Container className="relative z-10">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-xs font-bold tracking-wider text-[#f08020] uppercase backdrop-blur-md">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#EA580C]" />
              <span>Technical Strengths &bull; Capabilities Matrix</span>
            </div>
            <h1 className="text-3xl leading-tight font-black tracking-tight text-white sm:text-5xl">
              Engineering Depth, EPC Ownership & Diagnostic Precision
            </h1>
            <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
              How Powertech executes complex electrical infrastructure mandates: in-house AutoCAD
              SLD coordination, turnkey field teams, and mobile oil filtration fleets.
            </p>
          </div>
        </Container>
      </div>

      {/* Main Capabilities Section */}
      <CapabilitiesSection />

      {/* 8-Stage Engineering-to-Energization Pipeline */}
      <EngineeringToEnergization />

      {/* Verified Salient Features & Cornerstones */}
      <section className="border-b border-slate-200 bg-white py-16">
        <Container>
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 sm:p-12">
            <h3 className="mb-6 flex items-center gap-2.5 text-xl font-bold text-[#111650] sm:text-2xl">
              <ShieldCheck className="h-6 w-6 text-emerald-600" />
              <span>8 Verified Technical Cornerstones (Company Profile Slide 3)</span>
            </h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {salientFeatures.map((feat, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 text-xs text-slate-700 shadow-2xs"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#EA580C]" />
                  <span className="leading-relaxed">{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Contact Section */}
      <ContactB2BSection />
    </div>
  );
}
