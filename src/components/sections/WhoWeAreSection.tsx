"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import {
  ArrowRight,
  ShieldCheck,
  Award,
  CheckCircle2,
  Building,
  Target,
  Users,
  Landmark,
  Eye,
} from "lucide-react";

export function WhoWeAreSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-b border-slate-200 bg-slate-50 py-20 sm:py-24"
    >
      <div className="dynamic-section-field -z-10" />

      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* Left Column: Visual Media Presentation */}
          <div className="space-y-4 lg:col-span-6">
            <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-900 shadow-xl">
              <Image
                src="/hero-images/corporate-office.png"
                alt="Powertech Corporate Head Office, E-195 Sector-63 Noida"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Badge Overlay */}
              <div className="absolute top-4 left-4">
                <span className="rounded-lg bg-[#EA580C] px-3 py-1 text-xs font-bold tracking-wider text-white uppercase shadow-md">
                  Corporate Head Office &bull; Noida
                </span>
              </div>

              {/* Caption Overlay */}
              <div className="absolute right-5 bottom-5 left-5 text-white">
                <p className="font-mono text-xs font-bold text-[#f08020] uppercase">
                  Administrative & Engineering Hub
                </p>
                <h3 className="mt-0.5 text-lg font-bold text-white">
                  E-195, Sector-63, Noida, Uttar Pradesh (201301)
                </h3>
                <p className="mt-1 text-xs text-white/80">
                  Central coordination cell for turnkey power transmission & substation project
                  management.
                </p>
              </div>
            </div>

            {/* Sub-gallery of Corporate Proof */}
            <div className="grid grid-cols-2 gap-3">
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-slate-200 shadow-xs">
                <Image
                  src="/site-images/transformer-bay.jpeg"
                  alt="Transformer Bay Execution"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-end bg-black/40 p-2.5">
                  <span className="text-[10px] font-bold text-white">EHV Transformer Staging</span>
                </div>
              </div>
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-slate-200 shadow-xs">
                <Image
                  src="/site-images/control-panel.jpeg"
                  alt="Protection Control Rooms"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-end bg-black/40 p-2.5">
                  <span className="text-[10px] font-bold text-white">
                    SCADA & Relay Integration
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Corporate Introduction */}
          <div className="space-y-6 lg:col-span-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1 text-xs font-bold tracking-wider text-[#111650] uppercase">
              <span className="h-2 w-2 rounded-full bg-[#EA580C]" />
              <span>Section 03 &bull; Who We Are</span>
            </div>

            <h2 className="text-2xl leading-[1.15] font-black tracking-tight text-[#111650] sm:text-4xl lg:text-[42px]">
              Engineering Power Infrastructure with Precision.
            </h2>

            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              Powertech Engineers was promoted in <strong>April 2004</strong> by a team of qualified
              engineering technocrats with a vision to establish execution excellence across
              high-voltage power transmission, distribution, and substation engineering.
            </p>

            <p className="text-xs leading-relaxed text-slate-600 sm:text-sm">
              Founded as a partnership firm, the organization has evolved into a dynamic association
              of technocrats, project managers, and financial experts. Backed by institutional
              banking support from <strong>Punjab National Bank</strong> and certified under{" "}
              <strong>ISO 9001:2015</strong>, Powertech has earned consistent trust and repeat
              mandates from India’s largest state utilities and energy conglomerates.
            </p>

            {/* 3 Core Value Callouts */}
            <div className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-3">
              <div className="rounded-xl border border-slate-200 bg-white p-3.5 shadow-2xs">
                <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-100 font-bold text-emerald-800">
                  <ShieldCheck className="h-4 w-4" />
                </div>
                <h4 className="text-xs font-bold text-[#111650]">EXPERTISE</h4>
                <p className="mt-1 text-[11px] text-slate-600">
                  Precision engineering for extra-high-voltage systems up to 400 kV.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-3.5 shadow-2xs">
                <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-sky-100 font-bold text-sky-800">
                  <Users className="h-4 w-4" />
                </div>
                <h4 className="text-xs font-bold text-[#111650]">COMMITMENT</h4>
                <p className="mt-1 text-[11px] text-slate-600">
                  Dedicated multidisciplinary team prioritizing safety and quality.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-3.5 shadow-2xs">
                <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-orange-100 font-bold text-[#EA580C]">
                  <Target className="h-4 w-4" />
                </div>
                <h4 className="text-xs font-bold text-[#111650]">EXCELLENCE</h4>
                <p className="mt-1 text-[11px] text-slate-600">
                  Customized turnkey EPC powering resilient grid networks.
                </p>
              </div>
            </div>

            {/* Geographic & Administrative Presence */}
            <div className="space-y-1.5 rounded-xl border border-slate-200 bg-white p-4 text-xs text-slate-700">
              <div className="flex items-center gap-1.5 font-bold text-[#111650]">
                <Building className="h-4 w-4 text-[#EA580C]" />
                <span>Dual Administrative Hubs & Pan-India Footprint</span>
              </div>
              <p className="text-slate-600">
                Operating with corporate headquarters in <strong>Noida</strong> (Sector-63) and
                registered facilities in <strong>Delhi</strong>, deploying field execution teams
                across Uttar Pradesh, Jammu & Kashmir, Haryana, Bihar, and Jharkhand.
              </p>
            </div>

            {/* CTA matching draft specification */}
            <div className="flex items-center gap-4 pt-2">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 rounded-full bg-[#111650] px-7 py-3 text-xs font-bold text-white shadow-md transition hover:bg-[#EA580C] sm:text-sm"
              >
                <span>Read Our Story</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/leadership"
                className="inline-flex items-center gap-1 text-xs font-bold text-[#111650] transition hover:text-[#EA580C] sm:text-sm"
              >
                <span>Meet Leadership &bull; Directors &rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
