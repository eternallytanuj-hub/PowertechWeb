"use client";

import React, { useState } from "react";
import {
  FileText,
  Search,
  ShieldCheck,
  CheckCircle2,
  Building,
  MapPin,
  ExternalLink,
} from "lucide-react";

interface ContractRecord {
  id: string;
  name: string;
  clientUtility: string;
  scopeSummary: string;
  region: string;
  state: "Uttar Pradesh" | "Jammu & Kashmir" | "Jharkhand" | "Bihar" | "Haryana" | "Pan-India";
  voltageClass: string;
  status:
    "Featured Execution Landmark" | "Completed / Verifiable Execution" | "Major Utility Execution";
  statusColor: string;
}

const CONTRACT_RECORDS: ContractRecord[] = [
  {
    id: "ayodhya-220kv",
    name: "220 KV Substation Ayodhya (220 के.वी. उपकेन्द्र अयोध्या)",
    clientUtility: "Uttar Pradesh Power Transmission Corporation Limited (UPPTCL)",
    scopeSummary:
      "Turnkey execution of 220 KV extra-high-voltage substation, bay extensions, transformer erection, testing, and full commissioning in Ayodhya.",
    region: "Ayodhya, Uttar Pradesh",
    state: "Uttar Pradesh",
    voltageClass: "220 KV EHV",
    status: "Featured Execution Landmark",
    statusColor: "bg-orange-50 text-[#EA580C] border-orange-200",
  },
  {
    id: "pdd-rajouri",
    name: "PDD Jammu & Kashmir Rajouri Urban Electrification",
    clientUtility: "Power Development Department, Jammu & Kashmir (PDPW)",
    scopeSummary:
      "Urban electrification, high-voltage network strengthening, and turnkey distribution infrastructure delivery across Rajouri corridor.",
    region: "Rajouri, J&K",
    state: "Jammu & Kashmir",
    voltageClass: "33/11 KV Distribution",
    status: "Completed / Verifiable Execution",
    statusColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  {
    id: "jseb-loss-reduction",
    name: "JSEB Jharkhand System Loss Reductions",
    clientUtility: "Jharkhand State Electricity Board (JSEB)",
    scopeSummary:
      "System improvement works focused on AT&C loss reduction, distribution resilience, and utility-grade electrical delivery.",
    region: "Jharkhand",
    state: "Jharkhand",
    voltageClass: "33/11 KV Sub-transmission",
    status: "Completed / Verifiable Execution",
    statusColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  {
    id: "upptcl-turnkey",
    name: "UPPTCL Turnkey Transmission & Substation Works",
    clientUtility: "Uttar Pradesh Power Transmission Corporation Limited",
    scopeSummary:
      "Transmission-linked electrical infrastructure support for grid reliability and high-voltage project execution across central and western UP.",
    region: "Uttar Pradesh",
    state: "Uttar Pradesh",
    voltageClass: "400/220/132 KV EHV",
    status: "Major Utility Execution",
    statusColor: "bg-sky-50 text-sky-800 border-sky-200",
  },
  {
    id: "dvvnl-infra",
    name: "DVVNL Distribution Infrastructure Packages",
    clientUtility: "Dakshinanchal Vidyut Vitran Nigam Limited",
    scopeSummary:
      "Distribution network execution, underground cable laying, and feeder augmentation works across assigned electrical divisions.",
    region: "Western Uttar Pradesh",
    state: "Uttar Pradesh",
    voltageClass: "33/11 KV Networks",
    status: "Major Utility Execution",
    statusColor: "bg-sky-50 text-sky-800 border-sky-200",
  },
  {
    id: "hvpnl-infra",
    name: "HVPNL Power Infrastructure Works",
    clientUtility: "Haryana Vidyut Prasaran Nigam Limited",
    scopeSummary:
      "Transmission substation and associated electrical engineering works supporting state utility power infrastructure reliability.",
    region: "Haryana",
    state: "Haryana",
    voltageClass: "132/66/33 KV",
    status: "Major Utility Execution",
    statusColor: "bg-sky-50 text-sky-800 border-sky-200",
  },
  {
    id: "bsptcl-transmission",
    name: "BSPTCL Turnkey Electrical Execution",
    clientUtility: "Bihar State Power Transmission Company Limited",
    scopeSummary:
      "State transmission infrastructure execution with turnkey contracting, civil foundation casting, and field engineering coordination.",
    region: "Bihar",
    state: "Bihar",
    voltageClass: "220/132 KV EHV",
    status: "Major Utility Execution",
    statusColor: "bg-sky-50 text-sky-800 border-sky-200",
  },
  {
    id: "framework-schemes",
    name: "RAPDRP / IPDS / PMDP Township Schemes",
    clientUtility: "State Power Utilities & Municipal Electrification Schemes",
    scopeSummary:
      "Underground cabling with HDD trenchless drilling, transformer sub-station installation, and distribution strengthening.",
    region: "Northern India",
    state: "Pan-India",
    voltageClass: "11 KV & LT Networks",
    status: "Completed / Verifiable Execution",
    statusColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
];

const FILTER_STATES = [
  "All",
  "Uttar Pradesh",
  "Jammu & Kashmir",
  "Jharkhand",
  "Bihar",
  "Haryana",
] as const;

export function ContractLedger() {
  const [activeState, setActiveState] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filtered = CONTRACT_RECORDS.filter((rec) => {
    const matchesState =
      activeState === "All" || rec.state === activeState || rec.state === "Pan-India";
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !q ||
      rec.name.toLowerCase().includes(q) ||
      rec.clientUtility.toLowerCase().includes(q) ||
      rec.scopeSummary.toLowerCase().includes(q) ||
      rec.region.toLowerCase().includes(q) ||
      rec.voltageClass.toLowerCase().includes(q);
    return matchesState && matchesSearch;
  });

  return (
    <section id="projects" className="relative scroll-mt-28 overflow-hidden bg-white py-20">
      <div className="dynamic-section-field -z-10" />

      <div className="container mx-auto px-4 sm:px-6">
        {/* Header matching live site */}
        <div className="mb-12 grid grid-cols-1 items-end gap-8 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200/90 bg-white px-4 py-1.5 shadow-2xs">
              <FileText className="h-4 w-4 text-[#EA580C]" />
              <span className="text-xs font-bold tracking-wider text-[#111650] uppercase">
                Live Contract Ledger
              </span>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-[#111650] sm:text-3xl md:text-4xl">
              Corporate proof points across state power utilities
            </h2>
            <p className="mt-3 text-xs leading-relaxed text-slate-600 sm:text-sm">
              A structured ledger of high-value electrical infrastructure work spanning 400/220/132
              KV substations, urban electrification, transmission networks, and turnkey utility
              execution.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <div className="kinetic-card electric-lift rounded-2xl border border-slate-200 bg-slate-50/80 p-5 text-center">
              <div className="text-3xl font-black text-[#EA580C]">6+</div>
              <div className="mt-1 text-xs font-bold text-[#111650]">State Utility Networks</div>
              <div className="text-[10px] text-slate-400">UP, Bihar, Haryana, J&K, Jharkhand</div>
            </div>
            <div className="kinetic-card electric-lift rounded-2xl border border-slate-200 bg-slate-50/80 p-5 text-center">
              <div className="text-3xl font-black text-[#111650]">Class-A</div>
              <div className="mt-1 text-xs font-bold text-[#111650]">Execution Standard</div>
              <div className="text-[10px] text-slate-400">Turnkey EPC with ISO 9001:2015</div>
            </div>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {FILTER_STATES.map((st) => (
              <button
                key={st}
                onClick={() => setActiveState(st)}
                className={`rounded-full px-3.5 py-1.5 text-xs font-bold transition-all ${
                  activeState === st
                    ? "bg-[#111650] text-white shadow-xs"
                    : "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                }`}
              >
                {st}
              </button>
            ))}
          </div>

          <div className="relative min-w-[240px] sm:w-72">
            <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search contracts, utilities, scope..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-white py-2 pr-4 pl-9 text-xs font-medium text-slate-900 placeholder-slate-400 focus:border-[#EA580C] focus:ring-1 focus:ring-[#EA580C] focus:outline-none"
            />
          </div>
        </div>

        {/* Procurement Table matching live site */}
        <div className="kinetic-card overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md">
          {/* Table Header */}
          <div className="hidden grid-cols-[1.3fr_1.1fr_1.5fr_0.8fr] gap-4 border-b border-slate-200 bg-[#111650] px-6 py-4 text-xs font-bold tracking-wider text-white uppercase lg:grid">
            <div>Project / Scope Name</div>
            <div>Client Utility / Public Body</div>
            <div>Engineering Scope Summary</div>
            <div className="text-right">Execution Status</div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-slate-100">
            {filtered.map((item) => (
              <article
                key={item.id}
                className="grid grid-cols-1 gap-3 p-5 transition-all duration-200 hover:bg-slate-50/90 lg:grid-cols-[1.3fr_1.1fr_1.5fr_0.8fr] lg:items-center lg:px-6 lg:py-5"
              >
                {/* Column 1: Project Name & Voltage */}
                <div>
                  <div className="flex items-center gap-2">
                    <span className="rounded bg-orange-100 px-2 py-0.5 text-[10px] font-bold text-[#EA580C]">
                      {item.voltageClass}
                    </span>
                  </div>
                  <h3 className="mt-1 text-sm font-bold text-[#111650] lg:text-base">
                    {item.name}
                  </h3>
                  <div className="mt-1 flex items-center gap-1.5 text-[11px] font-medium text-slate-500">
                    <MapPin className="h-3 w-3 shrink-0 text-slate-400" />
                    <span>{item.region}</span>
                  </div>
                </div>

                {/* Column 2: Client Utility */}
                <div className="border-t border-slate-100 pt-2 lg:border-t-0 lg:pt-0">
                  <div className="text-[10px] font-bold text-slate-400 uppercase lg:hidden">
                    Client Utility
                  </div>
                  <div className="text-xs font-bold text-slate-800 lg:text-sm">
                    {item.clientUtility}
                  </div>
                </div>

                {/* Column 3: Scope Summary */}
                <div className="border-t border-slate-100 pt-2 lg:border-t-0 lg:pt-0">
                  <div className="text-[10px] font-bold text-slate-400 uppercase lg:hidden">
                    Scope Summary
                  </div>
                  <p className="text-xs leading-relaxed text-slate-600">{item.scopeSummary}</p>
                </div>

                {/* Column 4: Status */}
                <div className="flex items-center justify-between border-t border-slate-100 pt-2 lg:justify-end lg:border-t-0 lg:pt-0">
                  <span
                    className={`inline-flex items-center gap-1 rounded-full border px-3 py-1 text-[11px] font-bold ${item.statusColor}`}
                  >
                    <CheckCircle2 className="h-3 w-3 shrink-0" />
                    <span>{item.status}</span>
                  </span>
                </div>
              </article>
            ))}

            {filtered.length === 0 && (
              <div className="p-10 text-center text-sm font-medium text-slate-500">
                No contract records matched your search parameters. Try clearing filters or search
                query.
              </div>
            )}
          </div>
        </div>

        {/* Bottom Note */}
        <p className="mt-4 text-center text-xs text-slate-500">
          Ledger records are structured for institutional and B2B review: client utility, scope
          summary, project region, voltage class, and execution status are verifiable against client
          certificates.
        </p>
      </div>
    </section>
  );
}
