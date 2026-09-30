"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { ArrowRight, Zap, CheckCircle2, ChevronRight, Layers } from "lucide-react";

interface ServiceCardData {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  voltageClass: string;
  description: string;
  image: string;
  capabilities: string[];
  link: string;
}

const SERVICES_CARDS: ServiceCardData[] = [
  {
    id: "substations",
    number: "01",
    title: "SUBSTATIONS",
    subtitle: "EHV / HV / MV Substation Execution",
    voltageClass: "Up to 400 kV EHV",
    description:
      "Comprehensive turnkey substation engineering spanning civil foundations, structural gantry erection, power transformer installation, control relay integration, and statutory CEIG commissioning up to 400 kV.",
    image: "/hero-images/hero-substation.jpg",
    capabilities: [
      "400/220/132/33/11 kV Substation Turnkey EPC",
      "Power Transformer staging & oil dielectric filtration",
      "GIS & AIS Switchyard Bay Extensions",
      "SCADA & Numerical Protection Panel Integration",
    ],
    link: "/services#substations",
  },
  {
    id: "transmission",
    number: "02",
    title: "TRANSMISSION",
    subtitle: "Transmission Line Infrastructure",
    voltageClass: "Up to 220 kV Grid",
    description:
      "End-to-end route surveying, soil bearing test alignment, tower stub casting, lattice tower erection, conductor stringing, and sagging for high-voltage transmission lines up to 220 kV.",
    image: "/hero-images/hero-tower.jpg",
    capabilities: [
      "Lattice Transmission Tower Foundation Casting",
      "Conductor Stringing & Controlled Tension Sagging",
      "High-Altitude & River Crossing Corridors",
      "Grid Interconnection & Synchronized Energization",
    ],
    link: "/services#transmission",
  },
  {
    id: "distribution",
    number: "03",
    title: "DISTRIBUTION",
    subtitle: "HT / LT Distribution Infrastructure",
    voltageClass: "33 / 11 kV & LT",
    description:
      "Large-scale government and utility distribution strengthening schemes (RAPDRP, IPDS, PMDP), high-voltage distribution systems (HVDS), feeder segregation, and technical loss reduction.",
    image: "/site-images/hv-infrastructure.jpeg",
    capabilities: [
      "RAPDRP, IPDS & PMDP Infrastructure Delivery",
      "33/11 kV Distribution Sub-Stations (DTRs)",
      "Feeder Segregation & Re-conductoring",
      "System Loss (AT&C) Reduction Interventions",
    ],
    link: "/services#distribution",
  },
  {
    id: "underground-cabling",
    number: "04",
    title: "UNDERGROUND CABLING",
    subtitle: "Trenchless Drilling (HDD) & HT/EHV Cabling",
    voltageClass: "HT / EHV Cable Networks",
    description:
      "Advanced HT/EHV underground power cabling solutions utilizing state-of-the-art Horizontal Directional Drilling (HDD) trenchless methodologies, avoiding surface disruptions across urban roads and arterial highways.",
    image: "/hero-images/hero-tunnel.jpeg",
    capabilities: [
      "Trenchless Horizontal Directional Drilling (HDD)",
      "XLPE HT & EHV Cable Laying & Jointing",
      "Sheath Fault Location & Hipot Diagnostic Testing",
      "Zero-Disruption Urban Arterial Tie-ins",
    ],
    link: "/services#underground-cabling",
  },
  {
    id: "industrial-electrical",
    number: "05",
    title: "INDUSTRIAL ELECTRICAL",
    subtitle: "Turnkey Industrial Electrical Works",
    voltageClass: "Heavy Industry & Process Plants",
    description:
      "Complete internal and external industrial plant electrification, motor control centres (MCC), power control centres (PCC), busduct systems, plant earthing grids, and statutory electrical safety compliance.",
    image: "/site-images/control-panel.jpeg",
    capabilities: [
      "Captive Substation & Step-Down Switchyards",
      "PCC, MCC Switchgear & Rising Mains Busducts",
      "Plant Earthing Grids & Lightning Protection",
      "Hazardous Area Wiring & Industrial Automation",
    ],
    link: "/services#industrial-electrical",
  },
  {
    id: "testing-commissioning",
    number: "06",
    title: "TESTING & COMMISSIONING",
    subtitle: "Protection, Testing, Energization & Handover",
    voltageClass: "CEIG & Grid Handover",
    description:
      "Specialized pre-commissioning testing, numerical protection relay configuration, transformer oil filtration (>60 kV BDV), circuit breaker timing, and CEIG statutory sign-off.",
    image: "/site-images/project-site-view.jpeg",
    capabilities: [
      "Primary & Secondary Injection Relay Testing",
      "Transformer Oil Filtration & Dielectric Analysis",
      "Circuit Breaker Timing & Contact Resistance (CRM)",
      "CEIG Statutory Inspection Clearances",
    ],
    link: "/services#testing-commissioning",
  },
];

export function WhatWeDoCards() {
  const [activeCard, setActiveCard] = useState<string | null>(SERVICES_CARDS[0].id);

  return (
    <section
      id="services-cards"
      className="relative overflow-hidden border-b border-slate-200 bg-white py-20 sm:py-24"
    >
      <div className="dynamic-section-field -z-10" />

      <Container>
        {/* Header */}
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1 text-xs font-bold tracking-wider text-[#111650] uppercase">
              <span className="h-2 w-2 rounded-full bg-[#EA580C]" />
              <span>Section 04 &bull; What We Do</span>
            </div>
            <h2 className="text-2xl font-black tracking-tight text-[#111650] sm:text-4xl lg:text-[40px]">
              The 6 Core Execution Disciplines
            </h2>
          </div>
          <p className="max-w-md text-xs leading-relaxed text-slate-600 sm:text-sm">
            Delivering integrated EPC engineering from survey and foundation casting through testing
            and energized asset handover.
          </p>
        </div>

        {/* 6 Large Visual Expandable Cards (Grid of 3 on desktop) */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES_CARDS.map((card, idx) => {
            const isSelected = activeCard === card.id;

            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                onMouseEnter={() => setActiveCard(card.id)}
                onClick={() => setActiveCard(card.id)}
                className={`group relative flex cursor-pointer flex-col justify-between overflow-hidden rounded-2xl border transition-all duration-500 ${
                  isSelected
                    ? "scale-[1.02] border-[#EA580C] bg-[#090e1c] text-white shadow-2xl"
                    : "border-slate-200 bg-slate-50/80 text-slate-800 hover:border-slate-400 hover:shadow-lg"
                }`}
                style={{ minHeight: "420px" }}
              >
                {/* Background Image that fades in on hover/select */}
                <div
                  className={`pointer-events-none absolute inset-0 transition-opacity duration-700 ${
                    isSelected ? "opacity-35" : "opacity-0 group-hover:opacity-15"
                  }`}
                >
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="transform object-cover object-center transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090e1c] via-[#090e1c]/80 to-transparent" />
                </div>

                {/* Card Top Information */}
                <div className="relative z-10 p-6 sm:p-7">
                  <div className="mb-4 flex items-center justify-between">
                    <span
                      className={`font-mono text-2xl font-black tracking-tighter ${
                        isSelected ? "text-[#f08020]" : "text-slate-400 group-hover:text-[#EA580C]"
                      }`}
                    >
                      {card.number}
                    </span>
                    <span
                      className={`rounded-md px-2.5 py-0.5 text-[10px] font-bold tracking-wider uppercase ${
                        isSelected
                          ? "bg-[#EA580C] text-white"
                          : "bg-slate-200 text-slate-700 group-hover:bg-[#111650] group-hover:text-white"
                      }`}
                    >
                      {card.voltageClass}
                    </span>
                  </div>

                  <h3
                    className={`text-xl font-black tracking-tight sm:text-2xl ${
                      isSelected ? "text-white" : "text-[#111650]"
                    }`}
                  >
                    {card.title}
                  </h3>
                  <p
                    className={`mt-1 text-xs font-semibold tracking-wide ${
                      isSelected ? "text-[#f08020]" : "text-slate-500"
                    }`}
                  >
                    {card.subtitle}
                  </p>

                  <p
                    className={`mt-4 text-xs leading-relaxed transition-opacity duration-300 ${
                      isSelected ? "text-slate-200 opacity-100" : "text-slate-600 opacity-90"
                    }`}
                  >
                    {card.description}
                  </p>
                </div>

                {/* Card Bottom: Expandable Capabilities & Action CTA */}
                <div className="relative z-10 border-t border-white/5 p-6 pt-0 sm:p-7">
                  <div className="mb-5 space-y-1.5">
                    {card.capabilities.slice(0, 3).map((cap, i) => (
                      <div
                        key={i}
                        className={`flex items-start space-x-2 text-[11px] ${
                          isSelected ? "text-slate-300" : "text-slate-600"
                        }`}
                      >
                        <span
                          className={`mt-1 h-1.5 w-1.5 shrink-0 rounded-full ${
                            isSelected ? "bg-[#EA580C]" : "bg-slate-400"
                          }`}
                        />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={card.link}
                    className={`inline-flex w-full items-center justify-between rounded-xl px-4 py-2.5 text-xs font-bold transition-all ${
                      isSelected
                        ? "bg-[#EA580C] text-white shadow-md shadow-orange-600/30 hover:bg-orange-600"
                        : "border border-slate-200 bg-white text-[#111650] hover:bg-[#111650] hover:text-white"
                    }`}
                  >
                    <span>Explore {card.title} Scope</span>
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
