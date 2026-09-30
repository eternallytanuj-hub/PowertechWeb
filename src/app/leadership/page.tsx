"use client";

import React from "react";
import { Container } from "@/components/layout/Container";
import { Leadership3DSection } from "@/components/sections/Leadership3DSection";
import { TeamWall3DSection } from "@/components/sections/TeamWall3DSection";
import { ContactB2BSection } from "@/components/sections/ContactB2BSection";
import { ShieldCheck, Award, Users, CheckCircle2 } from "lucide-react";

export default function LeadershipPage() {
  return (
    <div className="flex flex-col bg-[#f7f8fb] text-[#101447]">
      {/* Subpage Header Banner */}
      <div className="relative overflow-hidden border-b border-white/10 bg-[#070b19] py-20 text-white">
        <div className="hero-circuit-grid pointer-events-none absolute inset-0 opacity-20" />
        <Container className="relative z-10">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-xs font-bold tracking-wider text-[#f08020] uppercase backdrop-blur-md">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#EA580C]" />
              <span>Technocrat Leadership &bull; Directors & Engineering Specialists</span>
            </div>
            <h1 className="text-3xl leading-tight font-black tracking-tight text-white sm:text-5xl">
              Leadership Driven by Engineering Discipline
            </h1>
            <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
              Powertech Engineers was founded in 2004 by engineering technocrats. Meet the directors
              and multidisciplinary teams leading turnkey EHV substations and transmission networks
              across India.
            </p>
          </div>
        </Container>
      </div>

      {/* Meet the Directors 3D Section */}
      <div id="directors">
        <Leadership3DSection />
      </div>

      {/* 3D Floating Engineering Team Wall */}
      <div id="team-wall">
        <TeamWall3DSection />
      </div>

      {/* Contact Section */}
      <ContactB2BSection />
    </div>
  );
}
