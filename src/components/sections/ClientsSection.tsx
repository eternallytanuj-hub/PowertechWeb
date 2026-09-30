"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Building, CheckCircle2, ArrowRight, ShieldCheck } from "lucide-react";

interface ClientEntity {
  id: string;
  name: string;
  fullName: string;
  category: "Transmission" | "Distribution" | "Government / PSU" | "Industrial";
  logo: string;
  scopeSummary: string;
  landmarkProject: string;
}

const CLIENTS_LIST: ClientEntity[] = [
  {
    id: "upptcl",
    name: "UPPTCL",
    fullName: "Uttar Pradesh Power Transmission Corporation Limited",
    category: "Transmission",
    logo: "/logos/upptcl.png",
    scopeSummary: "Turnkey 220 KV substations, bay extensions, & line maintenance",
    landmarkProject: "220 KV Substation Ayodhya & Western UP Transmission Works",
  },
  {
    id: "bsptcl",
    name: "BSPTCL",
    fullName: "Bihar State Power Transmission Company Limited",
    category: "Transmission",
    logo: "/logos/bsptcl.jpg",
    scopeSummary: "EHV transmission line construction & grid interconnection",
    landmarkProject: "220/132 KV Inter-district Power Corridors",
  },
  {
    id: "hvpnl",
    name: "HVPNL",
    fullName: "Haryana Vidyut Prasaran Nigam Limited",
    category: "Transmission",
    logo: "/logos/rrvpnl.png",
    scopeSummary: "Substation infrastructure packages & breaker augmentation",
    landmarkProject: "132/66 KV Substation Packages Faridabad & Gurugram",
  },
  {
    id: "pdd-jk",
    name: "J&K PDD",
    fullName: "Power Development Department, Jammu & Kashmir (PDPW)",
    category: "Distribution",
    logo: "/logos/pdpw.jpg",
    scopeSummary: "Urban electrification, 33/11 KV feeder lines & DTR staging",
    landmarkProject: "Rajouri Urban Electrification & Mountain Feeder Augmentation",
  },
  {
    id: "dvvnl",
    name: "DVVNL",
    fullName: "Dakshinanchal Vidyut Vitran Nigam Limited",
    category: "Distribution",
    logo: "/logos/uppcl.png",
    scopeSummary: "Underground cable laying, HDD trenchless & feeder works",
    landmarkProject: "HT/LT Distribution Strengthening & Urban Cabling",
  },
  {
    id: "puvvnl",
    name: "PuVVNL",
    fullName: "Purvanchal Vidyut Vitran Nigam Limited",
    category: "Distribution",
    logo: "/logos/uppcl.png",
    scopeSummary: "RAPDRP & IPDS township electrical infrastructure packages",
    landmarkProject: "Township Feeder Modernization Schemes",
  },
  {
    id: "iocl",
    name: "Indian Oil",
    fullName: "Indian Oil Corporation Limited (IOCL)",
    category: "Government / PSU",
    logo: "/logos/iocl.png",
    scopeSummary: "Refinery captive electrical infrastructure & switchgear integration",
    landmarkProject: "Captive Plant HT Electrification & Switchyards",
  },
  {
    id: "uprvunl",
    name: "UPRVUNL",
    fullName: "Uttar Pradesh Rajya Vidyut Utpadan Nigam Limited",
    category: "Government / PSU",
    logo: "/logos/upptcl.png",
    scopeSummary: "Thermal generation switchyard and high-voltage feeder maintenance",
    landmarkProject: "Generation Plant Switchyard Maintenance",
  },
  {
    id: "areva",
    name: "AREVA T&D",
    fullName: "AREVA (T&D India Ltd)",
    category: "Industrial",
    logo: "/logos/eeed.png",
    scopeSummary: "EHV equipment erection, busbar clamping, & testing services",
    landmarkProject: "OEM Substation Switchyard Civil & Electrical Erection",
  },
  {
    id: "tata-power-ndpl",
    name: "NDPL / Tata Power",
    fullName: "North Delhi Power Limited (Tata Power DDL)",
    category: "Distribution",
    logo: "/logos/upcl.png",
    scopeSummary: "Capital distribution network cable laying & transformer bays",
    landmarkProject: "Urban Capital Distribution Corridors",
  },
];

const CATEGORIES = [
  "All Clients",
  "Transmission",
  "Distribution",
  "Government / PSU",
  "Industrial",
];

export function ClientsSection() {
  const [activeCategory, setActiveCategory] = useState("All Clients");
  const [activeClient, setActiveClient] = useState<ClientEntity | null>(null);

  const filteredClients = CLIENTS_LIST.filter((client) => {
    if (activeCategory === "All Clients") return true;
    return client.category === activeCategory;
  });

  return (
    <section
      id="clients"
      className="relative overflow-hidden border-b border-slate-200 bg-white py-20 sm:py-24"
    >
      <div className="dynamic-section-field -z-10" />

      <Container>
        {/* Header */}
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1 text-xs font-bold tracking-wider text-[#111650] uppercase shadow-2xs">
              <span className="h-2 w-2 rounded-full bg-[#EA580C]" />
              <span>Section 11 &bull; Verified Client Clientele</span>
            </div>
            <h2 className="text-2xl font-black tracking-tight text-[#111650] sm:text-4xl lg:text-[42px]">
              TRUSTED BY POWER & INDUSTRY LEADERS
            </h2>
          </div>
          <p className="max-w-md text-xs leading-relaxed text-slate-600 sm:text-sm">
            Click any client logo to review verifiable project mandates executed by Powertech
            Engineers across state and private grids.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="mb-10 flex flex-wrap items-center gap-2 border-b border-slate-200 pb-3">
          {CATEGORIES.map((cat) => {
            const isSelected = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`cursor-pointer rounded-full px-4 py-1.5 text-xs font-bold transition-all ${
                  isSelected
                    ? "scale-105 bg-[#111650] text-white shadow-md"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-[#111650]"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Clean Premium Monochrome/Color Logo Wall */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          {filteredClients.map((client) => {
            const isSelected = activeClient?.id === client.id;

            return (
              <div
                key={client.id}
                onClick={() => setActiveClient(client)}
                className={`group kinetic-card electric-lift flex cursor-pointer flex-col items-center justify-between rounded-2xl border p-5 text-center transition-all duration-300 ${
                  isSelected
                    ? "border-[#EA580C] bg-orange-50/50 shadow-md ring-2 ring-orange-500/20"
                    : "border-slate-200 bg-white hover:border-slate-400 hover:shadow-md"
                }`}
              >
                <div className="relative my-2 flex h-14 w-28 items-center justify-center">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={100}
                    height={50}
                    className="max-h-12 w-auto object-contain grayscale filter transition-all duration-300 group-hover:grayscale-0"
                  />
                </div>

                <div className="mt-2 w-full border-t border-slate-100 pt-2">
                  <h4 className="text-xs font-bold text-[#111650]">{client.name}</h4>
                  <span className="text-[10px] font-semibold text-[#EA580C]">
                    {client.category}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Client Project Reveal Banner */}
        {activeClient && (
          <div className="animate-in fade-in mt-8 flex flex-col items-center justify-between gap-6 rounded-2xl border border-[#EA580C]/40 bg-[#0c1427] p-6 text-white shadow-xl sm:flex-row">
            <div className="space-y-1 text-center sm:text-left">
              <span className="font-mono text-[10px] font-bold tracking-widest text-[#f08020] uppercase">
                Verified Mandate &bull; {activeClient.fullName}
              </span>
              <h3 className="text-base font-bold text-white sm:text-lg">
                {activeClient.landmarkProject}
              </h3>
              <p className="text-xs text-slate-300">{activeClient.scopeSummary}</p>
            </div>

            <Link
              href="/projects"
              className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-[#EA580C] px-5 py-2.5 text-xs font-bold text-white shadow-md transition hover:bg-orange-600"
            >
              <span>View Projects for {activeClient.name}</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}
      </Container>
    </section>
  );
}
