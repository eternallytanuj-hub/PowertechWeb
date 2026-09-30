"use client";

import React from "react";
import { Container } from "@/components/layout/Container";
import { CertificationsSection } from "@/components/sections/CertificationsSection";
import { ContactB2BSection } from "@/components/sections/ContactB2BSection";
import { ShieldCheck, Award, FileCheck2, CheckCircle2 } from "lucide-react";

export default function CertificationsPage() {
  return (
    <div className="flex flex-col bg-[#f7f8fb] text-[#101447]">
      {/* Subpage Header Banner */}
      <div className="relative overflow-hidden border-b border-white/10 bg-[#070b19] py-20 text-white">
        <div className="hero-circuit-grid pointer-events-none absolute inset-0 opacity-20" />
        <Container className="relative z-10">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-xs font-bold tracking-wider text-[#f08020] uppercase backdrop-blur-md">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#EA580C]" />
              <span>Statutory Compliance &bull; Accreditations</span>
            </div>
            <h1 className="text-3xl leading-tight font-black tracking-tight text-white sm:text-5xl">
              Certifications, Licenses & Public Credentials
            </h1>
            <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
              Audit-verified ISO 9001:2015, ISO 14001:2015, ISO 45001:2018, Class-A Extra High
              Voltage Electrical Contractor License, and State DISCOM empanelments.
            </p>
          </div>
        </Container>
      </div>

      {/* Main Certifications & Document Viewer Section */}
      <CertificationsSection />

      {/* Contact Section */}
      <ContactB2BSection />
    </div>
  );
}
