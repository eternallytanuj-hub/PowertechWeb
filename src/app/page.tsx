import React from "react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { CTASection } from "@/components/sections/CTASection";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { FadeIn, FadeInStagger } from "@/components/ui/FadeIn";
import { companyData, salientFeatures, voltageCapabilities } from "@/data/company";
import { servicesData } from "@/data/services";
import {
  ShieldCheck,
  Users2,
  Target,
  CheckCircle2,
  Zap,
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  Building2,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      {/* =========================================================================
          HERO SECTION (Theme & Colors from Brochure Page 1)
          ========================================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#071d36] via-[#0b2545] to-[#0d2e53] pt-16 pb-24 text-white md:pt-24 md:pb-32">
        {/* Subtle high-voltage grid backdrop */}
        <div
          className="pointer-events-none absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />

        {/* Dynamic sweeping industrial glow curve */}
        <div className="bg-accent/20 pointer-events-none absolute -top-40 -right-40 h-96 w-96 rounded-full blur-3xl" />
        <div className="bg-secondary/30 pointer-events-none absolute bottom-0 -left-20 h-80 w-80 rounded-full blur-3xl" />

        <Container className="relative z-10">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <FadeIn direction="down" delay={0.1}>
                <div className="mb-6 inline-flex items-center space-x-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-semibold backdrop-blur-md">
                  <span className="bg-accent flex h-2 w-2 animate-pulse rounded-full" />
                  <span className="tracking-wide text-slate-100 uppercase">
                    {companyData.tagline}
                  </span>
                </div>
              </FadeIn>

              <FadeIn direction="up" delay={0.2}>
                <h1 className="text-3xl leading-[1.15] font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                  Engineering tomorrow&apos;s{" "}
                  <span className="text-accent decoration-accent/40 underline underline-offset-8">
                    energy solutions
                  </span>{" "}
                  today.
                </h1>
              </FadeIn>

              <FadeIn direction="up" delay={0.3}>
                <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg">
                  Powertech Engineers is a turnkey EPC electrical infrastructure contractor
                  specializing in high-voltage substations, transmission lines, and industrial power
                  networks with works in Delhi and Noida.
                </p>
              </FadeIn>

              {/* Voltage class badges from brochure */}
              <FadeIn direction="up" delay={0.4}>
                <div className="mt-6 flex flex-wrap items-center gap-2">
                  <span className="mr-2 text-xs font-bold tracking-wider text-slate-300 uppercase">
                    Turnkey Spectrum:
                  </span>
                  {voltageCapabilities.map((voltage) => (
                    <span
                      key={voltage}
                      className="inline-flex items-center rounded-md border border-white/15 bg-white/10 px-2.5 py-1 text-xs font-bold text-white shadow-sm"
                    >
                      <Zap className="text-accent mr-1 h-3 w-3" />
                      {voltage}
                    </span>
                  ))}
                </div>
              </FadeIn>

              {/* CTA Buttons */}
              <FadeIn direction="up" delay={0.5}>
                <div className="mt-8 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
                  <Link
                    href="/contact"
                    className="bg-accent shadow-accent/25 hover:bg-accent-light hover:shadow-accent/40 inline-flex items-center justify-center rounded-md px-6 py-3.5 text-sm font-bold text-white shadow-lg transition-all"
                  >
                    <span>Submit Project Enquiry</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                  <Link
                    href="/services"
                    className="inline-flex items-center justify-center rounded-md border border-white/30 bg-white/5 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all hover:bg-white/15"
                  >
                    <span>Explore Services</span>
                  </Link>
                </div>
              </FadeIn>
            </div>

            {/* Right Visual Card (Substation & Transmission showcase) */}
            <div className="lg:col-span-5">
              <FadeIn direction="left" delay={0.3}>
                <div className="relative rounded-2xl border border-white/20 bg-slate-900/80 p-6 shadow-2xl backdrop-blur-xl">
                  {/* Brochure Quote Callout Card */}
                  <div className="border-accent rounded-r-lg border-l-4 bg-white/5 p-5">
                    <p className="text-accent text-sm font-semibold tracking-wider uppercase">
                      Verified Infrastructure Credentials
                    </p>
                    <p className="mt-2 text-base leading-relaxed text-slate-100 italic">
                      &ldquo;Well-structured organization with a dedicated team of engineers,
                      technicians, and electrical testing equipment handling projects up to 400
                      KV.&rdquo;
                    </p>
                    <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3 text-xs text-slate-400">
                      <span>Offices & Works in Delhi & Noida</span>
                      <span className="text-success flex items-center font-semibold">
                        <CheckCircle2 className="mr-1 h-3.5 w-3.5" />
                        Brochure Verified
                      </span>
                    </div>
                  </div>

                  {/* Highlights Grid */}
                  <div className="mt-6 grid grid-cols-2 gap-3 text-xs">
                    <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                      <p className="font-medium text-slate-400">Headquarters</p>
                      <p className="mt-1 font-bold text-white">Noida Sector-63</p>
                    </div>
                    <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                      <p className="font-medium text-slate-400">Substation Max</p>
                      <p className="text-accent mt-1 font-bold">400 KV Grade</p>
                    </div>
                    <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                      <p className="font-medium text-slate-400">Project Discipline</p>
                      <p className="mt-1 font-bold text-white">EPC Turnkey</p>
                    </div>
                    <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                      <p className="font-medium text-slate-400">Operations</p>
                      <p className="mt-1 font-bold text-white">Delhi & Noida</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          THREE PILLARS: OUR STRENGTH. YOUR ADVANTAGE. (Brochure Page 1)
          ========================================================================= */}
      <Section spacing="lg" variant="surface" className="border-border border-b">
        <Container>
          <FadeIn direction="up">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <span className="bg-primary/10 text-primary mb-3 inline-flex items-center rounded-full px-3 py-1 text-xs font-bold tracking-widest uppercase">
                Core Value Foundation
              </span>
              <h2 className="text-2xl font-black tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
                OUR STRENGTH. YOUR ADVANTAGE.
              </h2>
              <p className="text-muted mt-3 text-sm sm:text-base">
                Directly from the Powertech Engineers charter — principles that power every
                substation, transmission line, and industrial turnkey installation.
              </p>
            </div>
          </FadeIn>

          <FadeInStagger staggerDelay={0.15}>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {/* Pillar 1: EXPERTISE (Green) */}
              <FadeIn>
                <div className="group relative flex flex-col items-center rounded-xl border border-green-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:border-green-400 hover:shadow-lg">
                  <div className="text-success border-success/30 flex h-16 w-16 items-center justify-center rounded-full border-2 bg-green-50 transition-transform group-hover:scale-110">
                    <ShieldCheck className="h-8 w-8 stroke-[1.75]" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold tracking-tight text-slate-900">
                    EXPERTISE
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    Advanced engineering solutions with accuracy and reliability.
                  </p>
                  <span className="bg-success/60 mt-6 inline-block h-1 w-12 rounded-full" />
                </div>
              </FadeIn>

              {/* Pillar 2: COMMITMENT (Blue) */}
              <FadeIn>
                <div className="group relative flex flex-col items-center rounded-xl border border-sky-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:border-sky-400 hover:shadow-lg">
                  <div className="text-secondary border-secondary/30 flex h-16 w-16 items-center justify-center rounded-full border-2 bg-sky-50 transition-transform group-hover:scale-110">
                    <Users2 className="h-8 w-8 stroke-[1.75]" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold tracking-tight text-slate-900">
                    COMMITMENT
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    Dedicated team committed to quality, safety and execution.
                  </p>
                  <span className="bg-secondary/60 mt-6 inline-block h-1 w-12 rounded-full" />
                </div>
              </FadeIn>

              {/* Pillar 3: EXCELLENCE (Orange) */}
              <FadeIn>
                <div className="group relative flex flex-col items-center rounded-xl border border-orange-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:border-orange-400 hover:shadow-lg">
                  <div className="text-accent border-accent/30 flex h-16 w-16 items-center justify-center rounded-full border-2 bg-orange-50 transition-transform group-hover:scale-110">
                    <Target className="h-8 w-8 stroke-[1.75]" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold tracking-tight text-slate-900">
                    EXCELLENCE
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    Delivering value-driven solutions that power a sustainable future.
                  </p>
                  <span className="bg-accent/60 mt-6 inline-block h-1 w-12 rounded-full" />
                </div>
              </FadeIn>
            </div>
          </FadeInStagger>
        </Container>
      </Section>

      {/* =========================================================================
          SALIENT FEATURES (Direct from Brochure Page 2)
          ========================================================================= */}
      <Section spacing="lg">
        <Container>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            {/* Features Checklist */}
            <div className="lg:col-span-7">
              <FadeIn direction="right">
                <span className="text-secondary text-xs font-bold tracking-widest uppercase">
                  Engineering Capabilities
                </span>
                <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
                  SALIENT FEATURES
                </h2>
                <p className="text-muted mt-3 text-sm sm:text-base">
                  Operational strengths and established project management protocols verified from
                  the official Powertech profile.
                </p>
              </FadeIn>

              <FadeInStagger staggerDelay={0.08} className="mt-8 space-y-3.5">
                {salientFeatures.map((feature, idx) => (
                  <FadeIn key={idx}>
                    <div className="border-border hover:border-success/60 flex items-start space-x-3 rounded-lg border bg-white p-3.5 shadow-sm transition-all hover:bg-slate-50">
                      <div className="text-success mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100">
                        <CheckCircle2 className="h-4 w-4" />
                      </div>
                      <p className="text-sm leading-relaxed font-medium text-slate-800">
                        {feature}
                      </p>
                    </div>
                  </FadeIn>
                ))}
              </FadeInStagger>
            </div>

            {/* Right Featured Card: Real Infrastructure Showcase */}
            <div className="lg:col-span-5">
              <FadeIn direction="left">
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-900 text-white shadow-xl">
                  {/* Header */}
                  <div className="border-b border-white/10 bg-slate-950 p-6">
                    <span className="text-accent text-xs font-bold tracking-widest uppercase">
                      Featured Milestone
                    </span>
                    <h3 className="mt-1 text-xl font-bold text-white">
                      High-Voltage Substation Electrification
                    </h3>
                    <p className="mt-1 text-xs text-slate-400">
                      Ayodhya Substation & Northern India Turnkey Grid Execution
                    </p>
                  </div>

                  {/* Body Content */}
                  <div className="space-y-4 p-6 text-sm text-slate-300">
                    <p className="leading-relaxed">
                      Equipped with comprehensive electrical testing equipment, oil filtration
                      plants, tools & tackles, and in-house design capabilities.
                    </p>

                    <div className="space-y-2 rounded-lg border border-white/10 bg-white/5 p-4 text-xs">
                      <div className="flex justify-between border-b border-white/10 pb-2">
                        <span className="text-slate-400">Voltage Ratings:</span>
                        <span className="text-accent font-bold">400 / 220 / 132 / 33 / 11 KV</span>
                      </div>
                      <div className="flex justify-between border-b border-white/10 pb-2">
                        <span className="text-slate-400">Operational Facilities:</span>
                        <span className="font-bold text-white">Delhi & Noida Works</span>
                      </div>
                      <div className="flex justify-between pb-1">
                        <span className="text-slate-400">Safety & Environment:</span>
                        <span className="text-success font-bold">Statutory Compliant</span>
                      </div>
                    </div>

                    <Link
                      href="/contact"
                      className="bg-accent hover:bg-accent-light mt-4 flex w-full items-center justify-center rounded-lg py-3 text-center text-sm font-bold text-white transition"
                    >
                      <span>Inquire About Turnkey Tenders</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </Container>
      </Section>

      {/* =========================================================================
          CORE SERVICES SECTION
          ========================================================================= */}
      <Section spacing="lg" variant="surface" className="border-border border-t">
        <Container>
          <FadeIn direction="up">
            <SectionHeading
              align="center"
              eyebrow="Turnkey Execution"
              title="Specialized Electrical Engineering Verticals"
              description="Complete lifecycle delivery from design engineering to statutory charging across high-voltage infrastructure."
            />
          </FadeIn>

          <FadeInStagger staggerDelay={0.1}>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {servicesData.map((service) => (
                <FadeIn key={service.id}>
                  <ServiceCard service={service} />
                </FadeIn>
              ))}
            </div>
          </FadeInStagger>
        </Container>
      </Section>

      {/* =========================================================================
          VERIFIED BROCHURE CONTACT COORDINATES STRIP
          ========================================================================= */}
      <Section spacing="md" className="border-border border-t bg-white">
        <Container>
          <FadeIn direction="up">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="border-border flex items-start space-x-3.5 rounded-lg border bg-slate-50 p-4">
                <div className="text-success flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-100">
                  <MapPin className="h-5 w-5" />
                </div>
                <div className="text-xs">
                  <p className="font-bold tracking-wider text-slate-500 uppercase">
                    Corporate Office
                  </p>
                  <p className="mt-1 font-semibold text-slate-800">
                    E-195, Sector-63, Noida (201301)
                  </p>
                </div>
              </div>

              <div className="border-border flex items-start space-x-3.5 rounded-lg border bg-slate-50 p-4">
                <div className="text-accent flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-100">
                  <Phone className="h-5 w-5" />
                </div>
                <div className="text-xs">
                  <p className="font-bold tracking-wider text-slate-500 uppercase">
                    Board Telephone
                  </p>
                  <a
                    href="tel:01204111018"
                    className="hover:text-accent mt-1 block font-semibold text-slate-800"
                  >
                    0120-4111018
                  </a>
                </div>
              </div>

              <div className="border-border flex items-start space-x-3.5 rounded-lg border bg-slate-50 p-4">
                <div className="text-secondary flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-100">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="text-xs">
                  <p className="font-bold tracking-wider text-slate-500 uppercase">
                    Official Email
                  </p>
                  <a
                    href="mailto:engineers.powertech@yahoo.com"
                    className="hover:text-secondary mt-1 block truncate font-semibold text-slate-800"
                  >
                    engineers.powertech@yahoo.com
                  </a>
                </div>
              </div>

              <div className="border-border flex items-start space-x-3.5 rounded-lg border bg-slate-50 p-4">
                <div className="text-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-100">
                  <Building2 className="h-5 w-5" />
                </div>
                <div className="text-xs">
                  <p className="font-bold tracking-wider text-slate-500 uppercase">
                    Offices & Works
                  </p>
                  <p className="mt-1 font-semibold text-slate-800">Delhi & Noida Facilities</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* =========================================================================
          CALL TO ACTION
          ========================================================================= */}
      <FadeIn direction="up">
        <CTASection
          title="Ready to Discuss Your Next Electrical Infrastructure Project?"
          description="Connect with our project engineering teams in Noida and Delhi for substation EPC, transmission lines, and industrial turnkey proposals."
          primaryActionLabel="Request Technical RFP"
          primaryActionHref="/contact"
          secondaryActionLabel="Review Services"
          secondaryActionHref="/services"
        />
      </FadeIn>
    </div>
  );
}
