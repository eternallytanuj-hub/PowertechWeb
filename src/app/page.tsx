import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { FadeIn, FadeInStagger } from "@/components/ui/FadeIn";
import { SlideViewerModal } from "@/components/ui/SlideViewerModal";
import { QuickEnquiryForm } from "@/components/ui/QuickEnquiryForm";
import {
  companyData,
  companyPillars,
  companyOverviewCards,
  coreCapabilitiesSummary,
  verifiedClientsList,
  salientFeatures,
  majorActivities,
  generalInfoPillars,
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
  Globe,
  Zap,
  ArrowRight,
  ShieldCheck,
  Building2,
  Cpu,
  Layers,
  Sparkles,
  MessageSquare,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col bg-slate-50 text-slate-800">
      {/* ============================================================ */}
      {/* FLOATING / STICKY SLIDE NAVIGATION QUICK-BAR                */}
      {/* ============================================================ */}
      <nav
        aria-label="Slide quick navigation"
        className="sticky top-28 z-30 border-b border-slate-200/80 bg-white/95 py-2 shadow-xs backdrop-blur-md"
      >
        <Container className="flex items-center justify-between overflow-x-auto py-1">
          <div className="flex items-center space-x-2 text-xs font-bold text-slate-500 whitespace-nowrap">
            <span className="text-[11px] tracking-wider text-slate-400 uppercase">
              Brochure Slides:
            </span>
          </div>

          <div className="flex items-center space-x-1 sm:space-x-2">
            {[
              { num: 1, name: "Profile", href: "#profile" },
              { num: 2, name: "Overview", href: "#overview" },
              { num: 3, name: "Salient Features", href: "#features" },
              { num: 4, name: "Major Activities", href: "#activities" },
              { num: 5, name: "General Info", href: "#contact" },
            ].map((slide) => (
              <a
                key={slide.num}
                href={slide.href}
                className="inline-flex items-center space-x-1.5 rounded-md px-2.5 py-1 text-xs font-bold text-slate-700 transition hover:bg-slate-100 hover:text-[#071D36]"
              >
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#071D36] text-[10px] text-white">
                  {slide.num}
                </span>
                <span className="hidden sm:inline">{slide.name}</span>
              </a>
            ))}
          </div>

          <div className="hidden items-center space-x-2 md:flex">
            <span className="rounded bg-emerald-50 px-2 py-0.5 text-[11px] font-bold text-emerald-700">
              ISO 9001:2015
            </span>
            <span className="rounded bg-orange-50 px-2 py-0.5 text-[11px] font-bold text-[#EA580C]">
              Up to 400 KV
            </span>
          </div>
        </Container>
      </nav>

      {/* ============================================================ */}
      {/* SLIDE 1: COMPANY PROFILE (HERO)                              */}
      {/* ============================================================ */}
      <section
        id="profile"
        className="relative scroll-mt-36 border-b border-slate-200 bg-white py-12 md:py-16"
      >
        <Container>
          {/* Top Bar for Slide 1 */}
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
            <div className="flex items-center space-x-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#071D36] text-xs font-bold text-white">
                1
              </span>
              <span className="text-xs font-bold tracking-wider text-slate-500 uppercase">
                Slide 1 of 5 • Corporate Identity
              </span>
            </div>
            <SlideViewerModal
              slideNumber={1}
              slideTitle="Company Profile Cover"
              imageSrc="/images/slides/slide-1-profile.png"
            />
          </div>

          {/* Hero Content Grid */}
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <FadeIn direction="up">
                {/* Brand Tagline & Badges */}
                <div className="mb-3 inline-flex items-center space-x-2 rounded-full border border-orange-200 bg-orange-50/80 px-3 py-1 text-xs font-bold text-[#EA580C]">
                  <Zap className="h-3.5 w-3.5 fill-[#EA580C]" />
                  <span>EPC & ELECTRICAL INFRASTRUCTURE CONTRACTORS</span>
                </div>

                {/* Company Name Matching Brochure Logo */}
                <div className="mb-2 flex items-center space-x-2">
                  <h1 className="text-3xl font-black tracking-tight text-[#071D36] sm:text-4xl md:text-5xl">
                    P<span className="text-[#EA580C]">O</span>WER TECH ENGINEERS
                  </h1>
                </div>

                <div className="mb-4">
                  <h2 className="text-2xl font-black tracking-tight text-[#071D36] sm:text-3xl">
                    COMPANY <span className="text-emerald-700">PROFILE</span>
                  </h2>
                  <div className="mt-2 h-1 w-24 rounded-full bg-[#EA580C]" />
                  <p className="mt-2 text-xs font-bold tracking-widest text-slate-500 uppercase">
                    POWERING POSSIBILITIES DELIVERING EXCELLENCE
                  </p>
                </div>

                {/* Verified Brochure Quote Box */}
                <div className="my-6 rounded-xl border-l-4 border-[#EA580C] bg-[#071D36] p-5 text-white shadow-md">
                  <p className="text-lg font-bold italic tracking-tight sm:text-xl">
                    &ldquo;Engineering tomorrow&apos;s energy solutions today.&rdquo;
                  </p>
                  <p className="mt-1 text-xs font-medium text-slate-300">
                    Turnkey Engineering, Procurement & Construction for Extra High Voltage
                    Power Systems.
                  </p>
                </div>

                {/* Voltage Range Spectrum */}
                <div className="mb-8">
                  <p className="mb-2 text-xs font-bold tracking-wider text-slate-500 uppercase">
                    Voltage Execution Spectrum:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {voltageCapabilities.map((kv) => (
                      <span
                        key={kv}
                        className="rounded-lg border border-slate-200 bg-slate-100 px-3 py-1.5 text-xs font-extrabold text-[#071D36]"
                      >
                        {kv}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-3">
                  <a
                    href="#overview"
                    className="inline-flex items-center rounded-lg bg-[#071D36] px-5 py-2.5 text-xs font-bold text-white shadow transition hover:bg-slate-800"
                  >
                    Explore Company Overview
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-xs font-bold text-slate-800 shadow-xs transition hover:bg-slate-50"
                  >
                    Contact Details (Slide 5)
                  </a>
                </div>
              </FadeIn>
            </div>

            {/* Right Side: Ayodhya Substation Showcase & Visuals */}
            <div className="lg:col-span-5">
              <FadeIn direction="left" delay={0.15}>
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg">
                  <div className="relative aspect-4/3 w-full bg-slate-900">
                    <Image
                      src="/images/slides/slide-1-profile.png"
                      alt="Powertech Engineers 220 KV Substation Ayodhya"
                      fill
                      className="object-cover object-bottom"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute right-3 bottom-3 left-3 text-white">
                      <span className="rounded bg-[#EA580C] px-2 py-0.5 text-[10px] font-bold uppercase">
                        Execution Landmark
                      </span>
                      <h3 className="mt-1 text-base font-bold">
                        220 के.वी. उपकेन्द्र अयोध्या (220 KV Substation Ayodhya)
                      </h3>
                      <p className="text-[11px] text-slate-200">
                        High-voltage transmission substation & infrastructure executed by Powertech.
                      </p>
                    </div>
                  </div>

                  {/* Brochure Slide 1 Bottom Strip */}
                  <div className="border-t border-slate-100 bg-slate-50 p-4">
                    <p className="mb-2 text-[10px] font-bold tracking-wider text-slate-400 uppercase">
                      Registered Coordinates:
                    </p>
                    <div className="grid grid-cols-1 gap-2 text-xs text-slate-700 sm:grid-cols-2">
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                        <span>E-195, Sec-63, Noida (201301)</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Phone className="h-3.5 w-3.5 text-[#EA580C] shrink-0" />
                        <span>0120-4131018</span>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>

          {/* Three Core Pillars: OUR STRENGTH. YOUR ADVANTAGE. */}
          <div className="mt-14 border-t border-slate-200 pt-10">
            <FadeIn direction="up">
              <div className="mb-8 text-center">
                <span className="text-xs font-extrabold tracking-widest text-[#EA580C] uppercase">
                  OUR STRENGTH. YOUR ADVANTAGE.
                </span>
                <h3 className="mt-1 text-2xl font-black text-[#071D36]">
                  The Three Pillars of Execution
                </h3>
              </div>
            </FadeIn>

            <FadeInStagger className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {companyPillars.map((pillar) => {
                const isGreen = pillar.color === "green";
                const isBlue = pillar.color === "blue";

                const badgeColor = isGreen
                  ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                  : isBlue
                    ? "bg-sky-50 text-sky-700 border-sky-200"
                    : "bg-orange-50 text-[#EA580C] border-orange-200";

                const iconBg = isGreen
                  ? "bg-emerald-600 text-white"
                  : isBlue
                    ? "bg-sky-600 text-white"
                    : "bg-[#EA580C] text-white";

                return (
                  <FadeIn
                    key={pillar.title}
                    direction="up"
                    className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
                  >
                    <div className="mb-4 flex items-center justify-between">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-xl ${iconBg} shadow`}
                      >
                        {pillar.icon === "shield" && <Shield className="h-6 w-6" />}
                        {pillar.icon === "users" && <Users className="h-6 w-6" />}
                        {pillar.icon === "target" && <Target className="h-6 w-6" />}
                      </div>
                      <span
                        className={`rounded-full border px-3 py-1 text-xs font-black tracking-wider uppercase ${badgeColor}`}
                      >
                        {pillar.title}
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-[#071D36]">{pillar.title}</h4>
                    <p className="mt-2 text-xs leading-relaxed text-slate-600">
                      {pillar.description}
                    </p>
                  </FadeIn>
                );
              })}
            </FadeInStagger>
          </div>
        </Container>
      </section>

      {/* ============================================================ */}
      {/* SLIDE 2: COMPANY OVERVIEW                                    */}
      {/* ============================================================ */}
      <section
        id="overview"
        className="relative scroll-mt-36 border-b border-slate-200 bg-slate-100/60 py-14 md:py-20"
      >
        <Container>
          {/* Top Bar for Slide 2 */}
          <div className="mb-8 flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-4">
            <div className="flex items-center space-x-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-700 text-xs font-bold text-white">
                2
              </span>
              <span className="text-xs font-bold tracking-wider text-slate-500 uppercase">
                Slide 2 of 5 • Corporate Overview & Credentials
              </span>
            </div>
            <SlideViewerModal
              slideNumber={2}
              slideTitle="Company Overview"
              imageSrc="/images/slides/slide-2-overview.png"
            />
          </div>

          <FadeIn direction="up">
            <div className="mb-10 text-center">
              <div className="inline-flex items-center space-x-1 text-xs font-extrabold tracking-widest text-[#EA580C] uppercase">
                <span>ABOUT US</span>
              </div>
              <h2 className="mt-1 text-3xl font-black text-[#071D36] sm:text-4xl">
                COMPANY <span className="text-emerald-700">OVERVIEW</span>
              </h2>
              <div className="mx-auto mt-2 h-1 w-20 rounded-full bg-[#EA580C]" />
              <p className="mt-3 text-xs font-bold tracking-widest text-slate-500 uppercase">
                POWERING POSSIBILITIES DELIVERING EXCELLENCE
              </p>
              <p className="mx-auto mt-2 max-w-xl text-xs font-semibold text-slate-600">
                ⚡ Engineering tomorrow&apos;s energy solutions today.
              </p>
            </div>
          </FadeIn>

          {/* 6 Information Cards (from Slide 2) */}
          <FadeInStagger className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {companyOverviewCards.map((card) => {
              return (
                <FadeIn
                  key={card.title}
                  direction="up"
                  className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-slate-300 hover:shadow-md"
                >
                  <div className="mb-4 flex items-center space-x-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#071D36] text-white">
                      {card.icon === "users" && <Users className="h-5 w-5 text-emerald-400" />}
                      {card.icon === "award" && <Award className="h-5 w-5 text-[#EA580C]" />}
                      {card.icon === "check-circle" && (
                        <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                      )}
                      {card.icon === "landmark" && (
                        <Landmark className="h-5 w-5 text-sky-400" />
                      )}
                      {card.icon === "handshake" && (
                        <Handshake className="h-5 w-5 text-[#EA580C]" />
                      )}
                      {card.icon === "eye" && <Eye className="h-5 w-5 text-emerald-400" />}
                    </div>
                    <h3 className="text-base font-bold text-[#071D36]">{card.title}</h3>
                  </div>
                  <p className="text-xs leading-relaxed text-slate-600">{card.content}</p>
                </FadeIn>
              );
            })}
          </FadeInStagger>

          {/* Slide 2 Bottom Banner: CORE CAPABILITIES AT A GLANCE */}
          <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <FadeIn direction="up">
              <div className="mb-6 flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                <h3 className="text-sm font-extrabold tracking-wider text-[#071D36] uppercase">
                  CORE CAPABILITIES AT A GLANCE :
                </h3>
                <span className="rounded bg-emerald-100 px-2.5 py-0.5 text-[11px] font-bold text-emerald-800">
                  ISO 9001:2015 Certified Processes
                </span>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {coreCapabilitiesSummary.map((cap) => (
                  <div
                    key={cap.title}
                    className="rounded-xl border border-slate-100 bg-slate-50/70 p-4"
                  >
                    <div className="flex items-center space-x-2">
                      <div className="h-2 w-2 rounded-full bg-[#EA580C]" />
                      <h4 className="text-xs font-bold text-[#071D36]">{cap.title}</h4>
                    </div>
                    <p className="mt-1.5 text-[11px] leading-relaxed text-slate-600">
                      {cap.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Clientele Strip from Brochure */}
              <div className="mt-6 rounded-xl border border-blue-100 bg-sky-50/60 p-4">
                <div className="flex items-center space-x-2 text-xs font-bold text-[#071D36]">
                  <Users className="h-4 w-4 text-[#EA580C]" />
                  <span>
                    Clientele: Major State Utilities, Discoms, PSUs, and Private Corporates
                  </span>
                </div>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {verifiedClientsList.map((client) => (
                    <span
                      key={client}
                      className="rounded border border-sky-200 bg-white px-2 py-0.5 text-[10px] font-bold text-slate-700 shadow-2xs"
                    >
                      {client}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* ============================================================ */}
      {/* SLIDE 3: SALIENT FEATURES                                    */}
      {/* ============================================================ */}
      <section
        id="features"
        className="relative scroll-mt-36 border-b border-slate-200 bg-white py-14 md:py-20"
      >
        <Container>
          {/* Top Bar for Slide 3 */}
          <div className="mb-8 flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
            <div className="flex items-center space-x-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-700 text-xs font-bold text-white">
                3
              </span>
              <span className="text-xs font-bold tracking-wider text-slate-500 uppercase">
                Slide 3 of 5 • Operational & Organizational Cornerstones
              </span>
            </div>
            <SlideViewerModal
              slideNumber={3}
              slideTitle="Salient Features"
              imageSrc="/images/slides/slide-3-salient-features.png"
            />
          </div>

          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
            {/* Left 8 Salient Features in Green-Bordered Box (matching brochure) */}
            <div className="lg:col-span-7">
              <FadeIn direction="up">
                <div className="mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-black tracking-widest text-[#071D36]">
                      POWER TECH ENGINEERS
                    </span>
                  </div>
                  <h2 className="mt-1 text-3xl font-black text-[#071D36] sm:text-4xl">
                    SALIENT <span className="text-emerald-700">FEATURES</span>
                  </h2>
                  <div className="mt-2 h-1 w-20 rounded-full bg-[#EA580C]" />
                </div>

                <div className="rounded-2xl border-2 border-emerald-600/30 bg-emerald-50/20 p-5 shadow-sm sm:p-6">
                  <div className="space-y-4">
                    {salientFeatures.map((feat, index) => (
                      <div
                        key={index}
                        className="flex items-start space-x-3 rounded-xl border border-emerald-100 bg-white p-3.5 shadow-2xs transition hover:border-emerald-300"
                      >
                        <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-white">
                          <CheckCircle2 className="h-4 w-4" />
                        </div>
                        <p className="text-xs leading-relaxed font-medium text-slate-700">
                          {feat}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Right Side: Heavy Transformer & Substation Installation Visuals */}
            <div className="lg:col-span-5">
              <FadeIn direction="left" delay={0.2}>
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg">
                  <div className="relative aspect-4/3 w-full bg-slate-900">
                    <Image
                      src="/images/slides/slide-3-salient-features.png"
                      alt="Powertech Engineers Heavy Electrical Testing & Transformer Works"
                      fill
                      className="object-cover object-right"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/20 to-transparent" />
                    <div className="absolute right-4 bottom-4 left-4 text-white">
                      <span className="rounded bg-emerald-600 px-2.5 py-0.5 text-[10px] font-bold uppercase">
                        Heavy Power Equipment
                      </span>
                      <h4 className="mt-1 text-base font-bold">
                        Transformer Installation & Testing
                      </h4>
                      <p className="text-[11px] text-slate-200">
                        Equipped with electrical testing tools, calibrated tackles, and in-house
                        engineering facilities.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3 p-5">
                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4 text-emerald-600" />
                        <h5 className="text-xs font-bold text-[#071D36]">Delhi & Noida Works</h5>
                      </div>
                      <p className="mt-1 text-[11px] text-slate-600">
                        Full-scale operational footprint with dedicated facilities for fast mobilization
                        across Northern Indian power corridors.
                      </p>
                    </div>

                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                      <div className="flex items-center space-x-2">
                        <Cpu className="h-4 w-4 text-[#EA580C]" />
                        <h5 className="text-xs font-bold text-[#071D36]">
                          Continuous Personnel Training
                        </h5>
                      </div>
                      <p className="mt-1 text-[11px] text-slate-600">
                        Regular in-house technical safety & execution seminars ensuring up-to-date
                        compliance with latest grid standards.
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================ */}
      {/* SLIDE 4: MAJOR ACTIVITIES                                    */}
      {/* ============================================================ */}
      <section
        id="activities"
        className="relative scroll-mt-36 border-b border-slate-200 bg-slate-100/60 py-14 md:py-20"
      >
        <Container>
          {/* Top Bar for Slide 4 */}
          <div className="mb-8 flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-4">
            <div className="flex items-center space-x-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#EA580C] text-xs font-bold text-white">
                4
              </span>
              <span className="text-xs font-bold tracking-wider text-slate-500 uppercase">
                Slide 4 of 5 • Core Disciplines & Technical Capabilities
              </span>
            </div>
            <SlideViewerModal
              slideNumber={4}
              slideTitle="Major Activities"
              imageSrc="/images/slides/slide-4-major-activities.png"
            />
          </div>

          <FadeIn direction="up">
            <div className="mb-10 text-center">
              <span className="text-xs font-extrabold tracking-widest text-[#EA580C] uppercase">
                CORE WORK DISCIPLINES
              </span>
              <h2 className="mt-1 text-3xl font-black text-[#071D36] sm:text-4xl">
                MAJOR <span className="text-[#EA580C]">ACTIVITIES</span>
              </h2>
              <div className="mx-auto mt-2 h-1 w-20 rounded-full bg-[#EA580C]" />
              <p className="mx-auto mt-3 max-w-xl text-xs text-slate-600">
                Turnkey electrical infrastructure solutions executed with utmost precision,
                safety, and statutory compliance.
              </p>
            </div>
          </FadeIn>

          {/* 6 Core Activities Grid */}
          <FadeInStagger className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {majorActivities.map((act) => (
              <FadeIn
                key={act.id}
                direction="up"
                className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-[#EA580C]/40 hover:shadow-md"
              >
                <div>
                  <div className="mb-4 flex items-center justify-between">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#071D36] text-xs font-black text-white">
                      {act.number}
                    </span>
                    <span className="rounded-full bg-orange-50 px-2.5 py-0.5 text-[10px] font-bold text-[#EA580C]">
                      {act.highlight}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-[#071D36]">{act.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">
                    {act.description}
                  </p>
                </div>

                <div className="mt-5 border-t border-slate-100 pt-3">
                  <a
                    href="#contact"
                    className="inline-flex items-center text-xs font-bold text-[#EA580C] hover:underline"
                  >
                    <span>Request scope & quote</span>
                    <ArrowRight className="ml-1 h-3.5 w-3.5" />
                  </a>
                </div>
              </FadeIn>
            ))}
          </FadeInStagger>

          {/* Slide 4 Photographic Callout */}
          <div className="mt-12 overflow-hidden rounded-2xl border border-slate-200 bg-[#071D36] text-white shadow-md">
            <div className="grid grid-cols-1 items-center gap-6 p-6 sm:p-8 lg:grid-cols-12">
              <div className="lg:col-span-8">
                <span className="rounded bg-[#EA580C] px-2.5 py-0.5 text-[10px] font-bold uppercase">
                  Proven Turnkey Execution
                </span>
                <h3 className="mt-2 text-xl font-bold sm:text-2xl">
                  Executing Substations & Switchyards up to 400 kV
                </h3>
                <p className="mt-2 text-xs text-slate-300">
                  From civil bay preparation and busbar erections to specialized trenchless HDD
                  underground cabling, Powertech delivers high-reliability electrical infrastructure.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 lg:col-span-4 lg:justify-end">
                <a
                  href="#contact"
                  className="rounded-lg bg-[#EA580C] px-5 py-2.5 text-xs font-bold text-white shadow transition hover:bg-orange-700"
                >
                  Consult Our Engineers
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================ */}
      {/* SLIDE 5: GENERAL INFORMATION & CONTACT                       */}
      {/* ============================================================ */}
      <section
        id="contact"
        className="relative scroll-mt-36 bg-white py-14 md:py-20"
      >
        <Container>
          {/* Top Bar for Slide 5 */}
          <div className="mb-8 flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
            <div className="flex items-center space-x-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-700 text-xs font-bold text-white">
                5
              </span>
              <span className="text-xs font-bold tracking-wider text-slate-500 uppercase">
                Slide 5 of 5 • Corporate Credentials & Direct Enquiry
              </span>
            </div>
            <SlideViewerModal
              slideNumber={5}
              slideTitle="General Information"
              imageSrc="/images/slides/slide-5-general-info.png"
            />
          </div>

          <FadeIn direction="up">
            <div className="mb-10 text-center">
              <span className="text-xs font-extrabold tracking-widest text-[#EA580C] uppercase">
                CORPORATE COMMUNICATION
              </span>
              <h2 className="mt-1 text-3xl font-black text-[#071D36] sm:text-4xl">
                GENERAL <span className="text-emerald-700">INFORMATION</span>
              </h2>
              <div className="mx-auto mt-2 h-1 w-20 rounded-full bg-[#EA580C]" />
              <p className="mx-auto mt-3 max-w-xl text-xs text-slate-600">
                Official contact channels and verified coordinates from the company profile brochure.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12">
            {/* Left: General Information Card from Slide 5 */}
            <div className="space-y-6 lg:col-span-5">
              <FadeIn direction="up">
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
                  <div className="mb-5 flex items-center justify-between border-b border-slate-100 pb-3">
                    <h3 className="text-sm font-black tracking-wider text-[#071D36] uppercase">
                      OFFICIAL COORDINATES
                    </h3>
                    <span className="rounded bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-600">
                      Noida / Delhi
                    </span>
                  </div>

                  <div className="space-y-4">
                    {/* Corporate Office */}
                    <div className="flex items-start space-x-3 rounded-xl border border-slate-100 bg-slate-50 p-3.5">
                      <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
                        <MapPin className="h-4 w-4" />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase">
                          Corporate Office
                        </span>
                        <p className="text-xs font-bold text-slate-900">
                          {companyData.contact.address.formatted}
                        </p>
                      </div>
                    </div>

                    {/* Contact Number */}
                    <div className="flex items-start space-x-3 rounded-xl border border-slate-100 bg-slate-50 p-3.5">
                      <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-[#EA580C]">
                        <Phone className="h-4 w-4" />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase">
                          Contact Number (Landline)
                        </span>
                        <p className="text-xs font-bold text-slate-900">
                          <a
                            href={`tel:${companyData.contact.primaryPhone}`}
                            className="hover:text-[#EA580C]"
                          >
                            {companyData.contact.primaryPhone}
                          </a>
                        </p>
                      </div>
                    </div>

                    {/* WhatsApp / Mobile */}
                    <div className="flex items-start space-x-3 rounded-xl border border-slate-100 bg-slate-50 p-3.5">
                      <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
                        <MessageSquare className="h-4 w-4" />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase">
                          Mobile / WhatsApp
                        </span>
                        <p className="text-xs font-bold text-slate-900">
                          <a
                            href="https://wa.me/917881163131"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-emerald-700 hover:underline"
                          >
                            +91 7881163131
                          </a>
                        </p>
                      </div>
                    </div>

                    {/* Mail ID */}
                    <div className="flex items-start space-x-3 rounded-xl border border-slate-100 bg-slate-50 p-3.5">
                      <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-sky-100 text-sky-700">
                        <Mail className="h-4 w-4" />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase">
                          Official Mail ID
                        </span>
                        <p className="text-xs font-bold text-slate-900">
                          <a
                            href={`mailto:${companyData.contact.primaryEmail}`}
                            className="hover:text-sky-700"
                          >
                            {companyData.contact.primaryEmail}
                          </a>
                        </p>
                      </div>
                    </div>

                    {/* Website */}
                    <div className="flex items-start space-x-3 rounded-xl border border-slate-100 bg-slate-50 p-3.5">
                      <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
                        <Globe className="h-4 w-4" />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase">
                          Corporate Website
                        </span>
                        <p className="text-xs font-bold text-slate-900">
                          <a
                            href={companyData.contact.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-emerald-700"
                          >
                            www.powertechengineers.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Direct Action Quick Buttons */}
                <div className="flex flex-col gap-2 pt-2 sm:flex-row">
                  <a
                    href="tel:01204131018"
                    className="flex flex-1 items-center justify-center rounded-xl bg-[#071D36] px-4 py-2.5 text-xs font-bold text-white shadow transition hover:bg-slate-800"
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Call 0120-4131018
                  </a>
                  <a
                    href="https://wa.me/917881163131"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-1 items-center justify-center rounded-xl bg-emerald-600 px-4 py-2.5 text-xs font-bold text-white shadow transition hover:bg-emerald-700"
                  >
                    <MessageSquare className="mr-2 h-4 w-4" />
                    WhatsApp 7881163131
                  </a>
                </div>
              </FadeIn>
            </div>

            {/* Right: Interactive Project / Service Enquiry Form */}
            <div className="lg:col-span-7">
              <FadeIn direction="left" delay={0.15}>
                <QuickEnquiryForm />
              </FadeIn>
            </div>
          </div>

          {/* Three Operational Values from Slide 5 Footer */}
          <div className="mt-14 border-t border-slate-200 pt-10">
            <FadeInStagger className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              {generalInfoPillars.map((pillar) => (
                <FadeIn
                  key={pillar.title}
                  direction="up"
                  className="flex flex-col items-center rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-xs"
                >
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-[#071D36]">
                    {pillar.icon === "shield-check" && (
                      <ShieldCheck className="h-6 w-6 text-emerald-600" />
                    )}
                    {pillar.icon === "users" && <Users className="h-6 w-6 text-sky-600" />}
                    {pillar.icon === "target" && (
                      <Target className="h-6 w-6 text-[#EA580C]" />
                    )}
                  </div>
                  <h4 className="text-sm font-bold tracking-wider text-[#071D36] uppercase">
                    {pillar.title}
                  </h4>
                  <p className="mt-1.5 text-xs text-slate-600">{pillar.description}</p>
                </FadeIn>
              ))}
            </FadeInStagger>
          </div>
        </Container>
      </section>
    </div>
  );
}
