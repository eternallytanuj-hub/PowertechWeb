"use client";

import React from "react";
import { HeroExperience } from "@/components/sections/HeroExperience";
import { CorporateSnapshot } from "@/components/sections/CorporateSnapshot";
import { WhoWeAreSection } from "@/components/sections/WhoWeAreSection";
import { CoreBusinessCards } from "@/components/sections/CoreBusinessCards";
import { WhatWeDoCards } from "@/components/sections/WhatWeDoCards";
import { OurProjectsSection } from "@/components/sections/OurProjectsSection";
import { EngineeringToEnergization } from "@/components/sections/EngineeringToEnergization";
import { CapabilitiesSection } from "@/components/sections/CapabilitiesSection";
import { Leadership3DSection } from "@/components/sections/Leadership3DSection";
import { TeamWall3DSection } from "@/components/sections/TeamWall3DSection";
import { ClientsSection } from "@/components/sections/ClientsSection";
import { QualityHseSplit } from "@/components/sections/QualityHseSplit";
import { CertificationsSection } from "@/components/sections/CertificationsSection";
import { WhyPowertechSection } from "@/components/sections/WhyPowertechSection";
import { NewsSection } from "@/components/sections/NewsSection";
import { CareersSection } from "@/components/sections/CareersSection";
import { ContactB2BSection } from "@/components/sections/ContactB2BSection";
import { ContractLedger } from "@/components/sections/ContractLedger";
import { SiteGallery } from "@/components/sections/SiteGallery";
import { SlideViewerModal } from "@/components/ui/SlideViewerModal";
import { ScrollReveal } from "@/components/ui/ScrollMotion";
import { salientFeatures, companyPillars } from "@/data/company";
import { Container } from "@/components/layout/Container";
import { FileText, CheckCircle2, ShieldCheck } from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col bg-[#f7f8fb] text-[#101447]">
      {/* SECTION 01 — HERO EXPERIENCE */}
      <HeroExperience />

      {/* SECTION 02 — CORPORATE SNAPSHOT */}
      <ScrollReveal direction="up" delay={0.05} distance={30}>
        <CorporateSnapshot />
      </ScrollReveal>

      {/* CORE BUSINESS CARDS (01 Substations, 02 T&D, 03 Electrical EPC, 04 Testing) */}
      <ScrollReveal direction="up" delay={0.08} distance={35}>
        <CoreBusinessCards />
      </ScrollReveal>

      {/* SECTION 04 — WHAT WE DO (6 EXPANDABLE EPC CARDS) */}
      <ScrollReveal direction="up" delay={0.08} distance={35}>
        <WhatWeDoCards />
      </ScrollReveal>

      {/* SECTION 03 — WHO WE ARE */}
      <ScrollReveal direction="up" delay={0.08} distance={35}>
        <WhoWeAreSection />
      </ScrollReveal>

      {/* SECTION 05 — OUR PROJECTS (CINEMATIC CARDS + CASE STUDY MODAL) */}
      <ScrollReveal direction="up" delay={0.08} distance={35}>
        <OurProjectsSection />
      </ScrollReveal>

      {/* VERIFIABLE CONTRACT LEDGER AUDIT */}
      <ScrollReveal direction="up" delay={0.08} distance={35}>
        <ContractLedger />
      </ScrollReveal>

      {/* SECTION 07 — ENGINEERING TO ENERGIZATION (8-STEP BLUEPRINT PROCESS) */}
      <ScrollReveal direction="up" delay={0.08} distance={35}>
        <EngineeringToEnergization />
      </ScrollReveal>

      {/* SECTION 08 — CAPABILITIES (ENGINEERING, EPC, TESTING, RESOURCES) */}
      <ScrollReveal direction="up" delay={0.08} distance={35}>
        <CapabilitiesSection />
      </ScrollReveal>

      {/* SECTION 09 — LEADERSHIP / MEET THE DIRECTORS (3D PERSPECTIVE TILT) */}
      <ScrollReveal direction="up" delay={0.08} distance={35}>
        <Leadership3DSection />
      </ScrollReveal>

      {/* SECTION 10 — OUR TEAM (3D FLOATING TEAM WALL) */}
      <ScrollReveal direction="up" delay={0.08} distance={35}>
        <TeamWall3DSection />
      </ScrollReveal>

      {/* SECTION 11 — CLIENTS (TRUSTED BY POWER & INDUSTRY LEADERS) */}
      <ScrollReveal direction="up" delay={0.08} distance={35}>
        <ClientsSection />
      </ScrollReveal>

      {/* SECTION 12 — QUALITY, SAFETY & HSE (SPLIT-SCREEN QA/QC VS ZERO HARM) */}
      <ScrollReveal direction="up" delay={0.08} distance={35}>
        <QualityHseSplit />
      </ScrollReveal>

      {/* SECTION 13 & 14 — CERTIFICATIONS, CREDENTIALS & PUBLIC DOSSIERS */}
      <ScrollReveal direction="up" delay={0.08} distance={35}>
        <CertificationsSection />
      </ScrollReveal>

      {/* SECTION 15 — WHY POWERTECH (6 VISUAL PROOF CARDS) */}
      <ScrollReveal direction="up" delay={0.08} distance={35}>
        <WhyPowertechSection />
      </ScrollReveal>

      {/* FIELD PHOTO DOCUMENTATION GALLERY */}
      <ScrollReveal direction="up" delay={0.08} distance={35}>
        <SiteGallery />
      </ScrollReveal>

      {/* SECTION 17 — NEWS, UPDATES & MILESTONES */}
      <ScrollReveal direction="up" delay={0.08} distance={35}>
        <NewsSection />
      </ScrollReveal>

      {/* SECTION 16 — CAREERS & PUBLIC RECRUITMENT */}
      <ScrollReveal direction="up" delay={0.08} distance={35}>
        <CareersSection />
      </ScrollReveal>

      {/* OFFICIAL 5-SLIDE COMPANY PROFILE DOSSIER */}
      <ScrollReveal direction="up" delay={0.08} distance={35}>
        <section
          id="brochure"
          className="relative scroll-mt-28 overflow-hidden border-b border-slate-200 bg-slate-100/70 py-20"
        >
        <Container>
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1 text-xs font-bold tracking-wider text-[#111650] uppercase shadow-2xs">
              <FileText className="h-4 w-4 text-[#EA580C]" />
              <span>Official Company Profile Document</span>
            </div>
            <h2 className="text-2xl font-black tracking-tight text-[#111650] sm:text-4xl">
              The 5 Slides of Powertech Engineers
            </h2>
            <p className="mt-3 text-xs leading-relaxed text-slate-600 sm:text-sm">
              Every data point across this platform is traceably anchored to the official 5-slide
              corporate brochure. Click any slide below to inspect the original presentation scan in
              full resolution.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {[
              {
                num: 1,
                title: "Slide 1: Corporate Profile",
                desc: "Ayodhya 220 KV Substation Cover, Mission & Three Core Pillars.",
                img: "/images/slides/slide-1-profile.png",
              },
              {
                num: 2,
                title: "Slide 2: Company Overview",
                desc: "History, Vision, Punjab National Bank Partnership, ISO 9001:2015.",
                img: "/images/slides/slide-2-overview.png",
              },
              {
                num: 3,
                title: "Slide 3: Salient Features",
                desc: "8 technical cornerstones, tools & tackles, project management.",
                img: "/images/slides/slide-3-salient-features.png",
              },
              {
                num: 4,
                title: "Slide 4: Major Activities",
                desc: "6 core disciplines up to 400 kV substations, lines & cabling.",
                img: "/images/slides/slide-4-major-activities.png",
              },
              {
                num: 5,
                title: "Slide 5: General Information",
                desc: "Noida corporate coordinates, direct hotlines, and team.",
                img: "/images/slides/slide-5-general-info.png",
              },
            ].map((slide) => (
              <div
                key={slide.num}
                className="kinetic-card electric-lift flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-4 shadow-2xs transition hover:border-[#EA580C]"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#111650] text-xs font-bold text-white">
                      {slide.num}
                    </span>
                    <span className="text-[10px] font-bold text-[#EA580C]">Verified Scan</span>
                  </div>
                  <h4 className="mt-3 text-xs font-bold text-[#111650]">{slide.title}</h4>
                  <p className="mt-1 text-[11px] leading-relaxed text-slate-500">{slide.desc}</p>
                </div>
                <div className="mt-4 border-t border-slate-100 pt-3">
                  <SlideViewerModal
                    slideNumber={slide.num}
                    slideTitle={slide.title}
                    imageSrc={slide.img}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Salient Features Checklist */}
          <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-6 shadow-xs sm:p-8">
            <h3 className="mb-4 flex items-center gap-2 text-base font-bold text-[#111650] sm:text-lg">
              <ShieldCheck className="h-5 w-5 text-emerald-600" />
              <span>Verified Salient Features (Slide 3 Cornerstones)</span>
            </h3>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {salientFeatures.map((feat, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
      </ScrollReveal>

      {/* SECTION 18 — CONTACT & B2B INQUIRY TERMINAL */}
      <ScrollReveal direction="up" delay={0.08} distance={35}>
        <ContactB2BSection />
      </ScrollReveal>
    </div>
  );
}
