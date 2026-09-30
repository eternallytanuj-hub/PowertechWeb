"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { WhoWeAreSection } from "@/components/sections/WhoWeAreSection";
import { CorporateSnapshot } from "@/components/sections/CorporateSnapshot";
import { Leadership3DSection } from "@/components/sections/Leadership3DSection";
import { CertificationsSection } from "@/components/sections/CertificationsSection";
import { SlideViewerModal } from "@/components/ui/SlideViewerModal";
import { ScrollReveal } from "@/components/ui/ScrollMotion";
import { companyPillars, companyOverviewCards, salientFeatures } from "@/data/company";
import {
  ShieldCheck,
  Award,
  Building,
  Target,
  Users,
  Eye,
  CheckCircle2,
  Calendar,
  Landmark,
  ArrowRight,
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex flex-col bg-[#f7f8fb] text-[#101447]">
      {/* Subpage Header Banner */}
      <div className="relative overflow-hidden border-b border-white/10 bg-[#070b19] py-20 text-white">
        <div className="hero-circuit-grid pointer-events-none absolute inset-0 opacity-20" />
        <Container className="relative z-10">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-xs font-bold tracking-wider text-[#f08020] uppercase backdrop-blur-md">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#EA580C]" />
              <span>Corporate Overview &bull; About Powertech Engineers</span>
            </div>
            <h1 className="text-3xl leading-tight font-black tracking-tight text-white sm:text-5xl">
              Engineering Tomorrow&apos;s Energy Solutions Today.
            </h1>
            <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
              Established in April 2004 by qualified engineering technocrats, Powertech Engineers
              has delivered over two decades of uninterrupted turnkey electrical contracting for
              India’s premier power transmission and distribution utilities.
            </p>
          </div>
        </Container>
      </div>

      {/* Corporate Snapshot */}
      <ScrollReveal direction="up" delay={0.05} distance={30}>
        <CorporateSnapshot />
      </ScrollReveal>

      {/* Deep Narrative Section */}
      <ScrollReveal direction="up" delay={0.08} distance={35}>
        <WhoWeAreSection />
      </ScrollReveal>

      {/* Vision & Mission Deep Section */}
      <ScrollReveal direction="up" delay={0.08} distance={35}>
        <section
          id="vision"
          className="relative overflow-hidden border-b border-slate-200 bg-white py-20"
        >
        <Container>
          <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-2">
            {/* Vision Card */}
            <div className="flex flex-col justify-between rounded-3xl border border-slate-200 bg-slate-50/80 p-8 shadow-xs">
              <div>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100 text-[#EA580C]">
                  <Eye className="h-6 w-6" />
                </div>
                <span className="font-mono text-[11px] font-bold tracking-widest text-[#EA580C] uppercase">
                  Corporate Vision
                </span>
                <h3 className="mt-1 mb-4 text-2xl font-bold text-[#111650]">
                  Engineering Leadership Rooted in Integrity
                </h3>
                <p className="text-xs leading-relaxed text-slate-600 sm:text-sm">
                  To grow as a leading EPC organization driven by Humanity, Honesty, Safety, and
                  Commitment. We remain dedicated to building long-term national value through
                  engineering excellence, ethical execution, and unwavering alignment with our
                  utility partners&apos; goals.
                </p>
              </div>
              <div className="mt-6 flex items-center gap-1.5 border-t border-slate-200 pt-4 text-xs font-semibold text-[#111650]">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                <span>Anchored to Slide 2 of Official Company Profile</span>
              </div>
            </div>

            {/* Mission Card */}
            <div className="flex flex-col justify-between rounded-3xl border border-slate-200 bg-slate-50/80 p-8 shadow-xs">
              <div>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-[#0066FF]">
                  <Target className="h-6 w-6" />
                </div>
                <span className="font-mono text-[11px] font-bold tracking-widest text-[#0066FF] uppercase">
                  Operational Mission
                </span>
                <h3 className="mt-1 mb-4 text-2xl font-bold text-[#111650]">
                  Precision Delivery from Foundation to Energization
                </h3>
                <p className="text-xs leading-relaxed text-slate-600 sm:text-sm">
                  Every project is undertaken with utmost sincerity, precision, and safety. Backed
                  by state-of-the-art tools, calibrated test sets, and skilled high-voltage crews,
                  we guarantee quality and on-time completion under strict ISO 9001:2015 controls.
                </p>
              </div>
              <div className="mt-6 flex items-center gap-1.5 border-t border-slate-200 pt-4 text-xs font-semibold text-[#111650]">
                <ShieldCheck className="h-4 w-4 text-[#EA580C]" />
                <span>Zero Tolerance for Electrical Safety Deviations</span>
              </div>
            </div>
          </div>

          {/* Slide 2 Overview Cards Matrix */}
          <div className="mt-14">
            <div className="mb-6 flex flex-col justify-between gap-4 border-b border-slate-200 pb-3 sm:flex-row sm:items-center">
              <div>
                <span className="text-[11px] font-bold tracking-wider text-[#EA580C] uppercase">
                  Company Overview
                </span>
                <h3 className="text-xl font-bold text-[#111650]">
                  The 6 Institutional Pillars (Company Profile Slide 2)
                </h3>
              </div>
              <SlideViewerModal
                slideNumber={2}
                slideTitle="Company Overview"
                imageSrc="/images/slides/slide-2-overview.png"
              />
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {companyOverviewCards.map((card, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-2xs transition hover:border-[#EA580C]"
                >
                  <h4 className="mb-2 text-base font-bold text-[#111650]">{card.title}</h4>
                  <p className="text-xs leading-relaxed text-slate-600">{card.content}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
      </ScrollReveal>

      {/* Leadership 3D Section */}
      <ScrollReveal direction="up" delay={0.08} distance={35}>
        <Leadership3DSection />
      </ScrollReveal>

      {/* Certifications Section */}
      <ScrollReveal direction="up" delay={0.08} distance={35}>
        <CertificationsSection />
      </ScrollReveal>
    </div>
  );
}
