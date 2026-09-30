"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import {
  FileText,
  ShieldCheck,
  Zap,
  Wrench,
  Users,
  Compass,
  Activity,
  HardHat,
  Truck,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

interface CapabilityCategory {
  id: string;
  label: string;
  icon: any;
  headline: string;
  description: string;
  items: { title: string; desc: string }[];
  equipmentOrMetrics: { label: string; value: string }[];
}

const CAPABILITY_TABS: CapabilityCategory[] = [
  {
    id: "engineering",
    label: "Engineering",
    icon: Compass,
    headline: "System Engineering & Design Coordination",
    description:
      "Comprehensive multi-voltage electrical engineering capabilities ensuring absolute adherence to state transmission utility specifications and CEA grid regulations.",
    items: [
      {
        title: "Single Line Diagram (SLD) Design",
        desc: "Design coordination, statutory layout drafting, busbar ampacity calculations, and clearance checks for 400/220/132/33/11 kV substations.",
      },
      {
        title: "Route Survey & Tower Spotting",
        desc: "Precision route profile surveys, GPS tower alignment, right-of-way (ROW) planning, and soil bearing capacity investigation.",
      },
      {
        title: "Protection & Relay Coordination",
        desc: "Numerical protection grading, fault-level calculations, CT/PT sizing studies, and SCADA automation scheme integration.",
      },
      {
        title: "Earthing Grid & Lightning Protection",
        desc: "Substation earthing mat designs conforming to IEEE 80, step and touch potential analysis, and lightning mast coverage calculation.",
      },
    ],
    equipmentOrMetrics: [
      { label: "CAD Stations", value: "Dedicated Design Cell" },
      { label: "Calculation Norms", value: "IEEE 80 / IS 3043" },
      { label: "Design Standards", value: "CEA Regulations" },
      { label: "Voltage Coverage", value: "Up to 400 kV EHV" },
    ],
  },
  {
    id: "execution",
    label: "EPC Execution",
    icon: HardHat,
    headline: "Turnkey Site Execution & Project Controls",
    description:
      "Field-tested project management methodology configured for high-compliance electrical contracting, foundation casting, gantry erection, and tight shutdown coordination.",
    items: [
      {
        title: "Turnkey EPC Management",
        desc: "End-to-end responsibility from greenfield site clearing and civil works through testing, inspection, and commercial asset handover.",
      },
      {
        title: "Shutdown & Cutover Planning",
        desc: "Strict coordination with state utility load dispatch centers (SLDC) for planned line outages and rapid busbar retrofits.",
      },
      {
        title: "Utility Liaisoning & Statutory Approvals",
        desc: "Direct liaison with Chief Electrical Inspector to Government (CEIG) and state transmission boards (UPPTCL, BSPTCL, HVPNL).",
      },
      {
        title: "Trenchless HDD Cable Pulling",
        desc: "High-torque Horizontal Directional Drilling (HDD) through urban and highway corridors without surface traffic disruption.",
      },
    ],
    equipmentOrMetrics: [
      { label: "Simultaneous Sites", value: "Multi-State Ready" },
      { label: "Contractor License", value: "Class-A / EHV" },
      { label: "Execution Speed", value: "Zero Handoff Gaps" },
      { label: "HSE Compliance", value: "Zero-Harm PTW" },
    ],
  },
  {
    id: "testing",
    label: "Testing & Diagnostics",
    icon: Activity,
    headline: "Diagnostic Testing & Pre-Commissioning Rigor",
    description:
      "Fully equipped with advanced electrical testing instruments and mobile diagnostic vans to verify every transformer, circuit breaker, and protection relay.",
    items: [
      {
        title: "Power Transformer Diagnostics",
        desc: "Transformer turns ratio (TTR), winding resistance, insulation resistance, magnetic balance, and Tan Delta capacitance dissipation factor.",
      },
      {
        title: "Transformer Oil Dielectric Filtration",
        desc: "High-vacuum mobile filtration plants achieving breakdown voltage (BDV) >60 kV and moisture content <15 ppm.",
      },
      {
        title: "Switchgear & Circuit Breaker Timing",
        desc: "Contact resistance measurement (CRM) via micro-ohmmeters, dynamic contact timing, and SF6 gas dew point/pressure tests.",
      },
      {
        title: "Numerical Relay Secondary Injection",
        desc: "Multi-phase automated secondary injection testing for distance, differential, overcurrent, and earth fault protection schemes.",
      },
    ],
    equipmentOrMetrics: [
      { label: "Oil Breakdown Voltage", value: ">60 kV BDV" },
      { label: "Secondary Injection", value: "Multi-Phase Kits" },
      { label: "High-Pot Testing", value: "HT/EHV Cables" },
      { label: "Statutory Filing", value: "CEIG Certified" },
    ],
  },
  {
    id: "resources",
    label: "Manpower & Equipment",
    icon: Wrench,
    headline: "Owned Tools, Heavy Tackles & Specialist Teams",
    description:
      "A rich asset base of high-capacity machinery, calibrated test kits, specialized stringing winches, and experienced high-voltage line crews.",
    items: [
      {
        title: "Dedicated Engineering Technocrats",
        desc: "Permanent core team of electrical, civil, and safety engineers with decades of high-voltage transmission experience.",
      },
      {
        title: "Trained High-Voltage Line Gangs",
        desc: "Skilled erection teams trained for lattice tower assembly, conductor stringing, sagging, and insulator string hoisting.",
      },
      {
        title: "Heavy Erection & Stringing Fleet",
        desc: "Mobile hydraulic cranes, winch machines, tensioners, pullers, cable drum trailers, and HDD drilling rigs.",
      },
      {
        title: "In-House Electrical Testing Fleet",
        desc: "Calibrated secondary injection test sets, oil BDV testing sets, 5 kV Meggers, earth testers, and breaker timers.",
      },
    ],
    equipmentOrMetrics: [
      { label: "Site Specialists", value: "250+ Professionals" },
      { label: "Operating Hubs", value: "Noida & Delhi NCR" },
      { label: "Mobile Filtration", value: "Owned High-Vacuum" },
      { label: "Banking Support", value: "Punjab National Bank" },
    ],
  },
];

export function CapabilitiesSection() {
  const [activeTabId, setActiveTabId] = useState("engineering");
  const currentTab = CAPABILITY_TABS.find((t) => t.id === activeTabId) || CAPABILITY_TABS[0];
  const Icon = currentTab.icon;

  return (
    <section
      id="capabilities"
      className="relative overflow-hidden border-b border-slate-200 bg-slate-50 py-20 sm:py-24"
    >
      <div className="dynamic-section-field -z-10" />

      <Container>
        {/* Section Header */}
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1 text-xs font-bold tracking-wider text-[#111650] uppercase shadow-2xs">
              <span className="h-2 w-2 rounded-full bg-[#EA580C]" />
              <span>Section 08 &bull; Capabilities Matrix</span>
            </div>
            <h2 className="text-2xl font-black tracking-tight text-[#111650] sm:text-4xl lg:text-[42px]">
              How Powertech Executes Complex Projects
            </h2>
          </div>
          <p className="max-w-md text-xs leading-relaxed text-slate-600 sm:text-sm">
            In-house technical depth across engineering design, turnkey EPC execution, diagnostic
            testing, and specialized heavy equipment.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="mb-8 flex flex-wrap items-center gap-2.5">
          {CAPABILITY_TABS.map((tab) => {
            const isSelected = tab.id === activeTabId;
            const TabIcon = tab.icon;

            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTabId(tab.id)}
                className={`flex cursor-pointer items-center space-x-2 rounded-xl px-5 py-3 text-xs font-bold transition-all ${
                  isSelected
                    ? "scale-105 bg-[#111650] text-white shadow-lg shadow-indigo-950/20"
                    : "border border-slate-200 bg-white text-slate-700 hover:bg-slate-100 hover:text-[#111650]"
                }`}
              >
                <TabIcon
                  className={`h-4 w-4 ${isSelected ? "text-[#f08020]" : "text-slate-500"}`}
                />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Active Tab Panel */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg sm:p-10">
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
            {/* Left Content */}
            <div className="space-y-6 lg:col-span-8">
              <div className="flex items-center space-x-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EA580C]/10 text-[#EA580C]">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <span className="text-[11px] font-bold tracking-widest text-[#EA580C] uppercase">
                    Core Technical Pillar
                  </span>
                  <h3 className="text-xl font-bold text-[#111650] sm:text-2xl">
                    {currentTab.headline}
                  </h3>
                </div>
              </div>

              <p className="text-sm leading-relaxed text-slate-700">{currentTab.description}</p>

              {/* 4 Detail Items */}
              <div className="grid grid-cols-1 gap-4 pt-2 sm:grid-cols-2">
                {currentTab.items.map((item, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-slate-100 bg-slate-50/80 p-4 transition hover:border-[#EA580C]"
                  >
                    <h4 className="flex items-center gap-1.5 text-xs font-bold text-[#111650]">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-[#EA580C]" />
                      <span>{item.title}</span>
                    </h4>
                    <p className="mt-1.5 text-xs leading-relaxed text-slate-600">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-4 pt-2">
                <Link
                  href="/capabilities"
                  className="inline-flex items-center gap-2 rounded-full bg-[#111650] px-6 py-2.5 text-xs font-bold text-white shadow-xs transition hover:bg-[#EA580C]"
                >
                  <span>Explore Full Technical Specifications</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* Right Metric Highlights */}
            <div className="space-y-4 rounded-xl border border-slate-200 bg-slate-50 p-6 lg:col-span-4">
              <h4 className="border-b border-slate-200 pb-3 text-xs font-bold tracking-wider text-[#111650] uppercase">
                Key Performance Metrics & Resources
              </h4>

              <div className="space-y-3">
                {currentTab.equipmentOrMetrics.map((m, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between border-b border-slate-200/60 py-2 text-xs"
                  >
                    <span className="text-slate-500">{m.label}</span>
                    <span className="font-bold text-[#111650]">{m.value}</span>
                  </div>
                ))}
              </div>

              <div className="rounded-lg border border-orange-200 bg-orange-50 p-3 text-[11px] text-[#EA580C]">
                <strong>Turnkey Commitment:</strong> All testing equipment is calibrated to national
                NABL standards with traceable calibration certificates.
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
