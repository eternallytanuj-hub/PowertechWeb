"use client";

import React from "react";
import { Container } from "@/components/layout/Container";
import { ClientsSection } from "@/components/sections/ClientsSection";
import { ContractLedger } from "@/components/sections/ContractLedger";
import { ContactB2BSection } from "@/components/sections/ContactB2BSection";
import { Building, ShieldCheck, Award } from "lucide-react";

export default function ClientsPage() {
  return (
    <div className="flex flex-col bg-[#f7f8fb] text-[#101447]">
      {/* Subpage Header Banner */}
      <div className="relative overflow-hidden border-b border-white/10 bg-[#070b19] py-20 text-white">
        <div className="hero-circuit-grid pointer-events-none absolute inset-0 opacity-20" />
        <Container className="relative z-10">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-xs font-bold tracking-wider text-[#f08020] uppercase backdrop-blur-md">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#EA580C]" />
              <span>Verified Client Clientele &bull; Trusted Partners</span>
            </div>
            <h1 className="text-3xl leading-tight font-black tracking-tight text-white sm:text-5xl">
              TRUSTED BY POWER & INDUSTRY LEADERS
            </h1>
            <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
              Serving India&apos;s premier state transmission corporations, power distribution
              utilities, and industrial conglomerates with verifiable turnkey execution.
            </p>
          </div>
        </Container>
      </div>

      {/* Main Clients Section with Interactive Project Reveal */}
      <ClientsSection />

      {/* Verifiable Contract Ledger Audit */}
      <ContractLedger />

      {/* Contact Section */}
      <ContactB2BSection />
    </div>
  );
}
