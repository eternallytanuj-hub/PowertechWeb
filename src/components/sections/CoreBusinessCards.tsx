"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { ArrowRight, Zap, CheckCircle2, ShieldCheck, Activity, Layers, Compass } from "lucide-react";

interface CoreBusinessItem {
  number: string;
  title: string;
  subtitle: string;
  voltageClass: string;
  description: string;
  image: string;
  bullets: string[];
  link: string;
}

const CORE_BUSINESS_LIST: CoreBusinessItem[] = [
  {
    number: "01",
    title: "Substations",
    subtitle: "EHV / HV / MV Substation Execution",
    voltageClass: "Up to 400 kV EHV",
    description:
      "Turnkey civil foundations, structural gantry erection, power transformer staging, AIS/GIS switchyard integration, and statutory commissioning.",
    image: "/hero-images/hero-substation.jpg",
    bullets: [
      "400/220/132/33/11 kV Substation Turnkey EPC",
      "Power Transformer staging & oil dielectric filtration",
      "Control, Relay Panel & SCADA automation integration",
    ],
    link: "/services#substations",
  },
  {
    number: "02",
    title: "Transmission & Distribution",
    subtitle: "Overhead & Underground T&D Networks",
    voltageClass: "Up to 220 kV Lines & HDD",
    description:
      "Lattice transmission tower casting, tension conductor stringing, and trenchless Horizontal Directional Drilling (HDD) for urban utility corridors.",
    image: "/hero-images/hero-tower.jpg",
    bullets: [
      "Lattice Tower assembly & conductor sagging up to 220 kV",
      "Trenchless HDD underground power cable pulling",
      "RAPDRP, IPDS & PMDP urban network strengthening",
    ],
    link: "/services#transmission",
  },
  {
    number: "03",
    title: "Electrical EPC",
    subtitle: "Turnkey Electrical Infrastructure",
    voltageClass: "Class-A Turnkey EPC",
    description:
      "Single-point turnkey ownership from preliminary route surveys and single line diagrams through procurement, erection, and commercial grid energization.",
    image: "/hero-images/hero-tunnel.jpeg",
    bullets: [
      "Heavy industrial plant power distribution & MCC/PCC",
      "Statutory utility liaisoning & CEIG charging clearances",
      "Earthing grid design conforming to IEEE 80 standards",
    ],
    link: "/services#industrial-electrical",
  },
  {
    number: "04",
    title: "Testing & Commissioning",
    subtitle: "Protection, Testing, Energization & Handover",
    voltageClass: "Pre-Commissioning Rigor",
    description:
      "In-house diagnostic testing fleet, numerical protection relay calibration, transformer oil dielectric filtration (>60 kV BDV), and grid handover.",
    image: "/hero-images/hero-gis.jpg",
    bullets: [
      "Primary & secondary injection numerical relay testing",
      "Transformer turns ratio, winding resistance & Tan Delta",
      "Circuit breaker timing & contact resistance (CRM)",
    ],
    link: "/services#testing-commissioning",
  },
];

export function CoreBusinessCards() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(0);

  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 border-b border-slate-200">
      <div className="dynamic-section-field -z-10" />

      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#111650] mb-3 shadow-2xs">
              <span className="h-2 w-2 rounded-full bg-[#EA580C]" />
              <span>Core Business Architecture</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-[40px] font-black tracking-tight text-[#111650]">
              The 4 Pillars of Powertech EPC Execution
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
            Aligned with global energy-sector benchmarks: clear, disciplined, and engineered for utility-scale reliability.
          </p>
        </div>

        {/* 4 Core Business Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CORE_BUSINESS_LIST.map((item, idx) => {
            const isHovered = hoveredIdx === idx;

            return (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(idx)}
                className={`group relative overflow-hidden rounded-2xl border transition-all duration-500 cursor-pointer flex flex-col justify-between ${
                  isHovered
                    ? "border-[#EA580C] bg-[#090e1c] text-white shadow-2xl scale-[1.02]"
                    : "border-slate-200 bg-slate-50/80 text-slate-800 hover:border-slate-300 hover:shadow-md"
                }`}
                style={{ minHeight: "440px" }}
              >
                {/* Background image reveal */}
                <div
                  className={`absolute inset-0 transition-opacity duration-700 pointer-events-none ${
                    isHovered ? "opacity-35" : "opacity-0"
                  }`}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover object-center transform transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090e1c] via-[#090e1c]/80 to-transparent" />
                </div>

                {/* Card Top */}
                <div className="relative z-10 p-6 sm:p-7">
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-3xl font-black font-mono tracking-tighter ${
                        isHovered ? "text-[#f08020]" : "text-slate-400"
                      }`}
                    >
                      {item.number}
                    </span>
                    <span
                      className={`rounded-md px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                        isHovered
                          ? "bg-[#EA580C] text-white"
                          : "bg-slate-200 text-slate-700"
                      }`}
                    >
                      {item.voltageClass}
                    </span>
                  </div>

                  <h3
                    className={`text-xl sm:text-2xl font-black tracking-tight ${
                      isHovered ? "text-white" : "text-[#111650]"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`text-xs font-semibold mt-1 tracking-wide ${
                      isHovered ? "text-[#f08020]" : "text-slate-500"
                    }`}
                  >
                    {item.subtitle}
                  </p>

                  <p
                    className={`mt-4 text-xs leading-relaxed transition-opacity duration-300 ${
                      isHovered ? "text-slate-200" : "text-slate-600"
                    }`}
                  >
                    {item.description}
                  </p>
                </div>

                {/* Card Bottom: Bullets & Action CTA */}
                <div className="relative z-10 p-6 sm:p-7 pt-0 border-t border-white/5">
                  <div className="space-y-1.5 mb-5">
                    {item.bullets.map((b, i) => (
                      <div
                        key={i}
                        className={`flex items-start space-x-2 text-[11px] ${
                          isHovered ? "text-slate-300" : "text-slate-600"
                        }`}
                      >
                        <span
                          className={`mt-1 h-1.5 w-1.5 rounded-full shrink-0 ${
                            isHovered ? "bg-[#EA580C]" : "bg-slate-400"
                          }`}
                        />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={item.link}
                    className={`inline-flex items-center justify-between w-full rounded-xl px-4 py-2.5 text-xs font-bold transition-all ${
                      isHovered
                        ? "bg-[#EA580C] text-white shadow-md shadow-orange-600/30 hover:bg-orange-600"
                        : "bg-white text-[#111650] border border-slate-200 hover:bg-[#111650] hover:text-white"
                    }`}
                  >
                    <span>Explore Scope</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
