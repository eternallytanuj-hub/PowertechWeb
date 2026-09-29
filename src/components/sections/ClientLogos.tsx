"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ShieldCheck, Building2 } from "lucide-react";

interface ClientLogoItem {
  name: string;
  initials: string;
  fullName: string;
  image: string;
  state: string;
  tag: string;
}

const CLIENTS: ClientLogoItem[] = [
  {
    name: "UPPTCL",
    initials: "UPPTCL",
    fullName: "Uttar Pradesh Power Transmission Corporation Limited",
    image: "/logos/upptcl.png",
    state: "Uttar Pradesh",
    tag: "State Transmission",
  },
  {
    name: "UPPCL",
    initials: "UPPCL",
    fullName: "Uttar Pradesh Power Corporation Limited",
    image: "/logos/uppcl.png",
    state: "Uttar Pradesh",
    tag: "State Power Utility",
  },
  {
    name: "BSPTCL",
    initials: "BSPTCL",
    fullName: "Bihar State Power Transmission Company Limited",
    image: "/logos/bsptcl.jpg",
    state: "Bihar",
    tag: "State Transmission",
  },
  {
    name: "UPCL",
    initials: "UPCL",
    fullName: "Uttarakhand Power Corporation Limited",
    image: "/logos/upcl.png",
    state: "Uttarakhand",
    tag: "State Utility",
  },
  {
    name: "RRVPNL",
    initials: "RRVPNL",
    fullName: "Rajasthan Rajya Vidyut Prasaran Nigam Limited",
    image: "/logos/rrvpnl.png",
    state: "Rajasthan",
    tag: "Transmission Grid",
  },
  {
    name: "IOCL",
    initials: "IOCL",
    fullName: "Indian Oil Corporation Limited",
    image: "/logos/iocl.png",
    state: "Pan-India",
    tag: "Navratna PSU",
  },
  {
    name: "PDPW",
    initials: "PDPW",
    fullName: "Power Development Department Project Wing, J&K",
    image: "/logos/pdpw.jpg",
    state: "Jammu & Kashmir",
    tag: "Urban Electrification",
  },
  {
    name: "EEED Goa",
    initials: "EEED",
    fullName: "Electricity Department, Government of Goa",
    image: "/logos/eeed.png",
    state: "Goa",
    tag: "State Department",
  },
];

const ADDITIONAL_PARTNERS = [
  { name: "DVVNL", desc: "Dakshinanchal Vidyut Vitran Nigam" },
  { name: "HVPNL", desc: "Haryana Vidyut Prasaran Nigam" },
  { name: "JSEB", desc: "Jharkhand State Electricity Board" },
  { name: "AREVA T&D", desc: "Alstom Grid / Areva India" },
  { name: "Tata Power", desc: "North Delhi Power Limited" },
  { name: "Reliance Energy", desc: "Infrastructure Electrification" },
  { name: "BSES Delhi", desc: "Urban Distribution Network" },
  { name: "Punjab National Bank", desc: "Institutional Banking Partner" },
];

export function ClientLogos() {
  const [activeClient, setActiveClient] = useState<ClientLogoItem | null>(null);

  return (
    <section className="relative overflow-hidden border-y border-slate-200/80 bg-white py-16">
      <div className="dynamic-section-field -z-10" />

      <div className="container mx-auto px-4 sm:px-6">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-3.5 py-1 text-xs font-bold text-[#EA580C]">
            <Building2 className="h-3.5 w-3.5" />
            <span>Public Utility & Infrastructure Track Record</span>
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-[#111650] sm:text-3xl md:text-4xl">
            Our Main Clients
          </h2>
          <p className="mt-2 text-xs font-medium text-slate-500 sm:text-sm">
            Trusted by India’s state power transmission corporations, distribution boards, and heavy industrial PSUs.
          </p>
        </div>

        {/* Primary Client Logos Grid with hover lift & glow */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">
          {CLIENTS.map((client) => (
            <div
              key={client.name}
              onMouseEnter={() => setActiveClient(client)}
              onMouseLeave={() => setActiveClient(null)}
              className="kinetic-card electric-lift group relative flex flex-col items-center justify-between rounded-xl border border-slate-200/90 bg-white p-3.5 text-center shadow-xs transition-all duration-300 hover:border-[#f08020] hover:shadow-md"
            >
              <div className="relative mb-2 flex h-16 w-16 items-center justify-center sm:h-18 sm:w-18">
                <Image
                  src={client.image}
                  alt={`${client.name} Logo`}
                  width={72}
                  height={72}
                  className="max-h-14 max-w-14 object-contain transition-transform duration-300 group-hover:scale-108"
                />
              </div>
              <div className="w-full">
                <div className="text-xs font-extrabold text-[#111650] group-hover:text-[#EA580C]">
                  {client.initials}
                </div>
                <div className="mt-0.5 truncate text-[10px] font-semibold text-slate-400">
                  {client.state}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Utility Partners & Banking Strip */}
        <div className="mt-8 rounded-xl border border-slate-200/80 bg-slate-50/70 p-4">
          <div className="mb-2 text-center text-[11px] font-bold tracking-wider text-slate-400 uppercase">
            Additional Institutional & Banking Partners
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {ADDITIONAL_PARTNERS.map((partner) => (
              <span
                key={partner.name}
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-2xs transition hover:border-[#f08020] hover:text-[#111650]"
                title={partner.desc}
              >
                <ShieldCheck className="h-3 w-3 text-emerald-600" />
                <span>{partner.name}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
