"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { FadeIn, FadeInStagger } from "@/components/ui/FadeIn";
import { PowertechLogo } from "@/components/ui/PowertechLogo";
import { SlideViewerModal } from "@/components/ui/SlideViewerModal";
import { ClientLogos } from "@/components/sections/ClientLogos";
import { SiteGallery } from "@/components/sections/SiteGallery";
import { ContractLedger } from "@/components/sections/ContractLedger";
import { ProcurementFAQ } from "@/components/sections/ProcurementFAQ";
import { B2BInquiryTerminal } from "@/components/sections/B2BInquiryTerminal";
import {
  companyData,
  companyPillars,
  companyOverviewCards,
  coreCapabilitiesSummary,
  salientFeatures,
  majorActivities,
  voltageCapabilities,
} from "@/data/company";
import {
  Shield,
  Users,
  Target,
  CheckCircle2,
  Award,
  Landmark,
  Handshake,
  Eye,
  MapPin,
  Phone,
  Mail,
  Zap,
  ArrowRight,
  ShieldCheck,
  Building2,
  Layers,
  ChevronRight,
  Sparkles,
  FileText,
  Clock,
  Briefcase,
  Sliders,
  Check,
} from "lucide-react";

const HERO_IMAGES = [
  {
    src: "/hero-images/corporate-office.png",
    caption: "Powertech Corporate Head Office, Noida",
    tag: "E-195 Sector-63 Noida",
  },
  {
    src: "/hero-images/hero-substation.jpg",
    caption: "Substation Execution & Busbars",
    tag: "Substations up to 400 kV",
  },
  {
    src: "/hero-images/hero-transmission.jpeg",
    caption: "Transmission Networks & Sagging",
    tag: "Lines up to 220 kV",
  },
  {
    src: "/hero-images/hero-tower.jpg",
    caption: "Lattice Transmission Towers",
    tag: "Extra High Voltage",
  },
  {
    src: "/hero-images/hero-gis.jpg",
    caption: "GIS Substation Installation",
    tag: "Advanced Substation GIS",
  },
  {
    src: "/hero-images/hero-tunnel.jpeg",
    caption: "Tunnel Wiring & Trenchless Cabling",
    tag: "Trenchless Drilling HDD",
  },
];

const OPERATIONAL_PILLARS = [
  {
    title: "Utility-grade governance",
    description: "Administrative coordination across registered and corporate hubs for formal project routing.",
    icon: Building2,
  },
  {
    title: "Class-A field execution",
    description: "Site teams configured for high-compliance electrical contracting and commissioning workflows.",
    icon: ShieldCheck,
  },
  {
    title: "Turnkey ownership",
    description: "Integrated engineering delivery from survey and installation through testing and energization.",
    icon: Zap,
  },
  {
    title: "Safety-first protocols",
    description: "Execution discipline for substations, transmission corridors, and heavy cabling environments.",
    icon: Shield,
  },
  {
    title: "Power quality focus",
    description: "Infrastructure designed around reliability, loss reduction, and operational continuity.",
    icon: Sliders,
  },
  {
    title: "Documentation readiness",
    description: "Structured records for utility review, compliance handover, and procurement-grade visibility.",
    icon: FileText,
  },
  {
    title: "Project controls",
    description: "Scope tracking for commercial values, client utilities, status, and field execution checkpoints.",
    icon: Target,
  },
  {
    title: "Two decades of presence",
    description: "Established in April 2004 by highly qualified engineering technocrat promoters.",
    icon: Clock,
  },
];

const EXECUTION_STEPS = [
  {
    num: "01",
    title: "Engineering Survey & Route Finalization",
    desc: "Rigorous field topological surveys, underground utility tracing, foundation profiling, and statutory clearance alignment.",
  },
  {
    num: "02",
    title: "Procurement Support & Compliant Erection",
    desc: "Procurement coordination of type-tested EHV switchgear, transformers, conductors, towers, and compliant site civil works.",
  },
  {
    num: "03",
    title: "Quality Inspection & Utility Coordination",
    desc: "Multi-stage QA/QC audits, insulation testing, relay testing, and direct liaison with state utility inspection engineers.",
  },
  {
    num: "04",
    title: "Testing, Energization & Formal Handover",
    desc: "Pre-commissioning tests, synchronized grid energization, as-built documentation, and full commercial asset handover.",
  },
];

export default function HomePage() {
  const [currentHeroIdx, setCurrentHeroIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroIdx((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col bg-[#f7f8fb] text-[#101447]">
      {/* ============================================================ */}
      {/* 1. HERO SECTION (High-Tech Institutional Design from Live Site)*/}
      {/* ============================================================ */}
      <section className="relative overflow-hidden bg-[#080a2c] py-16 text-white sm:py-24 lg:py-28">
        {/* Animated Circuit Grid & Radial Glows */}
        <div className="hero-circuit-grid absolute inset-0 opacity-30" />
        <div className="absolute top-0 right-1/4 h-96 w-96 rounded-full bg-radial from-[#f0802035] to-transparent opacity-60 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 h-96 w-96 rounded-full bg-radial from-[#17814a25] to-transparent opacity-40 blur-3xl pointer-events-none" />

        <Container className="relative z-10">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            {/* Left Content Column */}
            <div>
              {/* Floating Badge */}
              <div className="motion-float mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-[#f08020] animate-pulse" />
                <span>Established April 2004 • Class-A Electrical Contracting</span>
              </div>

              {/* Logo & Headline */}
              <div className="mb-4">
                <PowertechLogo variant="light" height={52} className="h-12 sm:h-14 w-auto mb-3" />
                <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                  Powertech Engineers
                </h1>
              </div>

              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base sm:leading-relaxed md:text-lg">
                Turnkey electrical engineering for substations up to 400 kV, Class-A contracting, heavy cabling,
                and power transmission infrastructure across demanding utility environments.
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
                <a
                  href="#contact"
                  className="magnetic-button inline-flex items-center gap-2 rounded-full bg-[#f08020] px-7 py-3 text-xs font-bold text-white shadow-lg transition hover:bg-orange-600 sm:text-sm"
                >
                  <span>Start Enterprise Inquiry</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-3 text-xs font-bold text-white backdrop-blur-md transition hover:bg-white/20 sm:text-sm"
                >
                  <span>View Contract Ledger</span>
                </a>
                <a
                  href="#brochure"
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-transparent px-5 py-3 text-xs font-semibold text-white/90 hover:bg-white/10"
                >
                  <FileText className="h-3.5 w-3.5 text-[#f08020]" />
                  <span>5-Slide Brochure</span>
                </a>
              </div>

              {/* 3 Metrics Cards from Live Site */}
              <div className="mt-10 grid grid-cols-3 gap-3 sm:gap-4">
                <div className="rounded-xl border border-white/15 bg-white/10 p-3.5 backdrop-blur-md sm:p-4">
                  <div className="text-xs font-bold text-[#f08020] uppercase">Class-A</div>
                  <div className="mt-0.5 text-xs text-white/80">Electrical Contracting</div>
                </div>
                <div className="rounded-xl border border-white/15 bg-white/10 p-3.5 backdrop-blur-md sm:p-4">
                  <div className="text-xs font-bold text-[#f08020] uppercase">Turnkey</div>
                  <div className="mt-0.5 text-xs text-white/80">Site-to-Handover EPC</div>
                </div>
                <div className="rounded-xl border border-white/15 bg-white/10 p-3.5 backdrop-blur-md sm:p-4">
                  <div className="text-xs font-bold text-[#f08020] uppercase">Utility T&D</div>
                  <div className="mt-0.5 text-xs text-white/80">Infrastructure up to 400 kV</div>
                </div>
              </div>

              {/* Quick Framework Badges */}
              <div className="mt-6 flex flex-wrap items-center gap-2 text-[11px] text-white/70">
                <span className="font-semibold text-white">Frameworks:</span>
                <span className="rounded bg-white/10 px-2 py-0.5">RAPDRP</span>
                <span className="rounded bg-white/10 px-2 py-0.5">IPDS</span>
                <span className="rounded bg-white/10 px-2 py-0.5">PMDP</span>
                <span className="rounded bg-white/10 px-2 py-0.5">ISO 9001:2015</span>
              </div>
            </div>

            {/* Right Side: Circular Glowing Interactive Showcase */}
            <div className="relative mx-auto block aspect-square w-full max-w-[280px] select-none sm:max-w-[380px] lg:max-w-[480px]">
              {/* Outer Ambient Glow */}
              <div className="pulse-glow absolute inset-0 rounded-full bg-gradient-to-tr from-[#f0802050] to-[#17814a40] opacity-70 blur-3xl" />

              {/* Main Circular Glass Frame */}
              <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-white/30 shadow-2xl glass">
                <Image
                  src={HERO_IMAGES[currentHeroIdx].src}
                  alt={HERO_IMAGES[currentHeroIdx].caption}
                  fill
                  sizes="(max-width: 640px) 280px, (max-width: 1024px) 380px, 480px"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Caption overlay & Slide Dots */}
                <div className="absolute right-4 bottom-5 left-4 text-center text-white">
                  <span className="inline-block rounded-md bg-[#f08020] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider">
                    {HERO_IMAGES[currentHeroIdx].tag}
                  </span>
                  <p className="mt-1 text-xs font-semibold text-white/95 sm:text-sm">
                    {HERO_IMAGES[currentHeroIdx].caption}
                  </p>

                  {/* Interactive slide indicators */}
                  <div className="mt-2.5 flex items-center justify-center gap-1.5">
                    {HERO_IMAGES.map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentHeroIdx(i);
                        }}
                        className={`h-1.5 rounded-full transition-all cursor-pointer ${
                          i === currentHeroIdx ? "w-5 bg-[#f08020]" : "w-1.5 bg-white/50 hover:bg-white/80"
                        }`}
                        aria-label={`Go to slide ${i + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Glass Badge: Top Right */}
              <div className="motion-float absolute -top-3 -right-2 hidden rounded-xl border border-white/20 bg-[#090b2f]/90 p-3 shadow-xl backdrop-blur-md sm:block z-20">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#f08020] text-white">
                    <ShieldCheck className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">RAPDRP / IPDS / PMDP</div>
                    <div className="text-[10px] text-white/70">Framework-Ready Execution</div>
                  </div>
                </div>
              </div>

              {/* Floating Glass Badge: Bottom Left */}
              <div className="motion-float absolute -bottom-3 -left-2 rounded-xl border border-white/20 bg-[#090b2f]/90 p-3 shadow-xl backdrop-blur-md z-20">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-600 text-white">
                    <Award className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">220 KV Ayodhya Substation</div>
                    <div className="text-[10px] text-emerald-400">Execution Landmark</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================ */}
      {/* 2. OUR MAIN CLIENTS (Live Utility Logos & Institutional Partners) */}
      {/* ============================================================ */}
      <ClientLogos />

      {/* ============================================================ */}
      {/* 3. OPERATIONAL CORE (Merged with Verified Brochure Pillars)   */}
      {/* ============================================================ */}
      <section id="features" className="relative scroll-mt-28 overflow-hidden bg-white py-20">
        <div className="dynamic-section-field -z-10" />

        <Container>
          {/* Header */}
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 shadow-2xs">
              <Shield className="h-4 w-4 text-[#EA580C]" />
              <span className="text-xs font-bold tracking-wider text-[#111650] uppercase">
                Operational Core
              </span>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-[#111650] sm:text-3xl md:text-4xl">
              Built for institutional electrical infrastructure mandates
            </h2>
            <p className="mt-3 text-xs leading-relaxed text-slate-600 sm:text-sm">
              The platform reflects Powertech Engineers as a B2B execution partner: precise, accountable,
              and ready for utility-scale project evaluation.
            </p>
          </div>

          {/* 4 Corporate Snapshot Counters */}
          <div className="mb-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div className="kinetic-card electric-lift rounded-2xl border border-slate-200 bg-slate-50/80 p-5 text-center">
              <div className="text-3xl font-black text-[#EA580C]">20+</div>
              <div className="mt-1 text-xs font-bold text-[#111650]">Years Since Establishment</div>
              <div className="text-[10px] text-slate-400">Promoted April 2004</div>
            </div>
            <div className="kinetic-card electric-lift rounded-2xl border border-slate-200 bg-slate-50/80 p-5 text-center">
              <div className="text-3xl font-black text-[#111650]">2</div>
              <div className="mt-1 text-xs font-bold text-[#111650]">Administrative Hubs</div>
              <div className="text-[10px] text-slate-400">Noida & Delhi NCR</div>
            </div>
            <div className="kinetic-card electric-lift rounded-2xl border border-slate-200 bg-slate-50/80 p-5 text-center">
              <div className="text-3xl font-black text-[#EA580C]">400 KV</div>
              <div className="mt-1 text-xs font-bold text-[#111650]">Max Voltage Capability</div>
              <div className="text-[10px] text-slate-400">400/220/132/33/11 KV</div>
            </div>
            <div className="kinetic-card electric-lift rounded-2xl border border-slate-200 bg-slate-50/80 p-5 text-center">
              <div className="text-3xl font-black text-emerald-600">ISO</div>
              <div className="mt-1 text-xs font-bold text-[#111650]">9001:2015 Certified</div>
              <div className="text-[10px] text-slate-400">PNB Banking Partner</div>
            </div>
          </div>

          {/* The 8 Operational Pillars from Live Site */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {OPERATIONAL_PILLARS.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="kinetic-card electric-lift group rounded-2xl border border-slate-200 bg-white p-5 shadow-xs transition-all duration-300 hover:border-[#EA580C]"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#111650]/10 text-[#111650] transition-colors group-hover:bg-[#EA580C] group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-sm font-bold text-[#111650]">{p.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">{p.description}</p>
                </div>
              );
            })}
          </div>

          {/* Verified Brochure Three Core Pillars (Expertise, Commitment, Excellence) */}
          <div className="mt-16 rounded-2xl border border-slate-200 bg-slate-50/90 p-6 sm:p-8">
            <div className="mb-6 flex flex-col items-start justify-between gap-4 border-b border-slate-200 pb-4 sm:flex-row sm:items-center">
              <div>
                <span className="text-[11px] font-bold tracking-widest text-[#EA580C] uppercase">
                  OUR STRENGTH. YOUR ADVANTAGE.
                </span>
                <h3 className="text-xl font-bold text-[#111650] sm:text-2xl">
                  The Three Pillars of Execution (Company Profile Slide 1)
                </h3>
              </div>
              <SlideViewerModal
                slideNumber={1}
                slideTitle="Company Profile Cover"
                imageSrc="/images/slides/slide-1-profile.png"
              />
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {companyPillars.map((pillar) => {
                const isGreen = pillar.color === "green";
                const isBlue = pillar.color === "blue";
                return (
                  <div
                    key={pillar.title}
                    className="rounded-xl border border-white bg-white p-5 shadow-xs transition hover:shadow-md"
                  >
                    <div
                      className={`inline-block rounded-md px-2 py-0.5 text-xs font-bold uppercase tracking-wider ${
                        isGreen
                          ? "bg-emerald-100 text-emerald-800"
                          : isBlue
                            ? "bg-sky-100 text-sky-800"
                            : "bg-orange-100 text-[#EA580C]"
                      }`}
                    >
                      {pillar.title}
                    </div>
                    <p className="mt-3 text-xs leading-relaxed text-slate-700">{pillar.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================ */}
      {/* 4. BLUEPRINT MATRIX / SERVICES (Merged with 6 Major Activities)*/}
      {/* ============================================================ */}
      <section id="services" className="relative scroll-mt-28 overflow-hidden bg-slate-50 py-20">
        <div className="dynamic-section-field -z-10" />

        <Container>
          {/* Header */}
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 shadow-2xs">
              <Layers className="h-4 w-4 text-[#EA580C]" />
              <span className="text-xs font-bold tracking-wider text-[#111650] uppercase">
                Blueprint Matrix
              </span>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-[#111650] sm:text-3xl md:text-4xl">
              Industrial electrical engineering layers for high-stakes utility execution
            </h2>
            <p className="mt-3 text-xs leading-relaxed text-slate-600 sm:text-sm">
              Powertech Engineers delivers field-tested contracting capability across substations,
              distribution strengthening, heavy cabling, and turnkey infrastructure mandates.
            </p>
          </div>

          {/* 4 Core Engineering Layers */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Layer 1: Substations */}
            <div className="kinetic-card electric-lift rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
              <div className="mb-3 flex flex-wrap gap-2">
                <span className="rounded bg-orange-100 px-2 py-0.5 text-[10px] font-bold text-[#EA580C]">
                  Class-A Execution
                </span>
                <span className="rounded bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-600">
                  Testing & Commissioning
                </span>
                <span className="rounded bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-600">
                  Protection Coordination
                </span>
              </div>
              <h3 className="text-lg font-bold text-[#111650] sm:text-xl">
                Substation Installation & Commissioning
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
                End-to-end execution for substation yards, equipment erection, testing, protection integration,
                and handover up to Class-A specifications. Covers 400/220/132/33/11 KV substations, AIS/GIS switchyards,
                and transformer bays.
              </p>
            </div>

            {/* Layer 2: Overhead & Underground T&D */}
            <div className="kinetic-card electric-lift rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
              <div className="mb-3 flex flex-wrap gap-2">
                <span className="rounded bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-800">
                  Feeder Augmentation
                </span>
                <span className="rounded bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-600">
                  Network Strengthening
                </span>
                <span className="rounded bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-600">
                  Urban Electrification
                </span>
              </div>
              <h3 className="text-lg font-bold text-[#111650] sm:text-xl">
                Overhead & Underground T&D Networks
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
                Transmission and distribution network construction across urban and industrial corridors with
                utility-grade routing, safety, and outage discipline. Erection of lattice towers, conductor stringing
                up to 220 kV, and urban cabling.
              </p>
            </div>

            {/* Layer 3: Turnkey Industrial Electrical */}
            <div className="kinetic-card electric-lift rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
              <div className="mb-3 flex flex-wrap gap-2">
                <span className="rounded bg-sky-100 px-2 py-0.5 text-[10px] font-bold text-sky-800">
                  RAPDRP
                </span>
                <span className="rounded bg-sky-100 px-2 py-0.5 text-[10px] font-bold text-sky-800">
                  IPDS
                </span>
                <span className="rounded bg-sky-100 px-2 py-0.5 text-[10px] font-bold text-sky-800">
                  PMDP
                </span>
                <span className="rounded bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-600">
                  Framework Compliant
                </span>
              </div>
              <h3 className="text-lg font-bold text-[#111650] sm:text-xl">
                Turnkey Industrial Electrical Contracting
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
                Full-spectrum contracting aligned with RAPDRP, IPDS, and PMDP infrastructure frameworks for power-intensive
                industrial environments, process plants, switchyards, and urban township power networks.
              </p>
            </div>

            {/* Layer 4: Heavy Cabling & Trenchless HDD */}
            <div className="kinetic-card electric-lift rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
              <div className="mb-3 flex flex-wrap gap-2">
                <span className="rounded bg-purple-100 px-2 py-0.5 text-[10px] font-bold text-purple-800">
                  HT/LT Cabling
                </span>
                <span className="rounded bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-600">
                  Trenchless Drilling (HDD)
                </span>
                <span className="rounded bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-600">
                  Advanced Terminations
                </span>
              </div>
              <h3 className="text-lg font-bold text-[#111650] sm:text-xl">
                Heavy Underground Cabling & Instrumentation
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
                Heavy cabling, termination, instrumentation, earthing, panel integration, and precision electrical works.
                Advanced Trenchless Horizontal Directional Drilling (HDD) avoiding road or traffic disruption.
              </p>
            </div>
          </div>

          {/* 4-Step Execution Protocol from Live Site */}
          <div className="mt-16 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="mb-6 text-center sm:text-left">
              <span className="text-[11px] font-bold tracking-widest text-[#EA580C] uppercase">
                Execution Protocol
              </span>
              <h3 className="text-xl font-bold text-[#111650] sm:text-2xl">
                From survey to energization without handoff gaps
              </h3>
              <p className="mt-1 text-xs text-slate-500">
                Built for accountability across administrative approvals, site readiness, installation quality,
                utility inspection, and commissioning.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {EXECUTION_STEPS.map((step) => (
                <div key={step.num} className="relative rounded-xl border border-slate-100 bg-slate-50/70 p-4">
                  <div className="text-2xl font-black text-[#EA580C]">{step.num}</div>
                  <h4 className="mt-2 text-xs font-bold text-[#111650] sm:text-sm">{step.title}</h4>
                  <p className="mt-1 text-[11px] leading-relaxed text-slate-600">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Major Activities from Brochure Slide 4 */}
          <div className="mt-16">
            <div className="mb-6 flex flex-col items-start justify-between gap-4 border-b border-slate-200 pb-4 sm:flex-row sm:items-center">
              <div>
                <span className="text-[11px] font-bold tracking-widest text-[#EA580C] uppercase">
                  Scope Catalog
                </span>
                <h3 className="text-xl font-bold text-[#111650] sm:text-2xl">
                  The 6 Major Core Disciplines (Company Profile Slide 4)
                </h3>
              </div>
              <SlideViewerModal
                slideNumber={4}
                slideTitle="Major Activities"
                imageSrc="/images/slides/slide-4-major-activities.png"
              />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {majorActivities.map((act) => (
                <div
                  key={act.id}
                  className="rounded-xl border border-slate-200 bg-white p-5 shadow-2xs transition hover:border-[#EA580C]"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-[#EA580C]">{act.number}</span>
                    <span className="rounded bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-600">
                      {act.highlight}
                    </span>
                  </div>
                  <h4 className="mt-3 text-sm font-bold text-[#111650]">{act.title}</h4>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">{act.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================ */}
      {/* 5. SITE DOCUMENTATION & FIELD PHOTO GALLERY                 */}
      {/* ============================================================ */}
      <SiteGallery />

      {/* ============================================================ */}
      {/* 6. LIVE CONTRACT LEDGER (Verifiable Utility Contracts)        */}
      {/* ============================================================ */}
      <ContractLedger />

      {/* ============================================================ */}
      {/* 7. BROCHURE 5-SLIDES DOSSIER (Complete Verified Past Data)   */}
      {/* ============================================================ */}
      <section id="brochure" className="relative scroll-mt-28 overflow-hidden bg-slate-50 py-20">
        <div className="dynamic-section-field -z-10" />

        <Container>
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 shadow-2xs">
              <FileText className="h-4 w-4 text-[#EA580C]" />
              <span className="text-xs font-bold tracking-wider text-[#111650] uppercase">
                Official Company Profile Dossier
              </span>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-[#111650] sm:text-3xl md:text-4xl">
              The 5 Slides of Powertech Engineers
            </h2>
            <p className="mt-3 text-xs leading-relaxed text-slate-600 sm:text-sm">
              All data across this platform is directly anchored to the official 5-slide corporate profile
              document. Inspect the original presentation slides in high resolution below.
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
                    <span className="text-[10px] font-bold text-[#EA580C]">Verified</span>
                  </div>
                  <h4 className="mt-3 text-xs font-bold text-[#111650]">{slide.title}</h4>
                  <p className="mt-1 text-[11px] leading-relaxed text-slate-500">{slide.desc}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100">
                  <SlideViewerModal
                    slideNumber={slide.num}
                    slideTitle={slide.title}
                    imageSrc={slide.img}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Salient Features Checklist from Slide 3 */}
          <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-6 shadow-xs sm:p-8">
            <h3 className="text-base font-bold text-[#111650] sm:text-lg">
              Verified Salient Features (Slide 3 Cornerstones)
            </h3>
            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {salientFeatures.map((feat, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================ */}
      {/* 8. PROCUREMENT FAQ (Live Review Questions)                  */}
      {/* ============================================================ */}
      <ProcurementFAQ />

      {/* ============================================================ */}
      {/* 9. B2B INQUIRY TERMINAL (Live Site Contact & Routing Desk)   */}
      {/* ============================================================ */}
      <B2BInquiryTerminal />
    </div>
  );
}
