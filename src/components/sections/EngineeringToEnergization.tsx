"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import {
  Compass,
  FileCode2,
  Truck,
  HardHat,
  Wrench,
  Activity,
  ShieldCheck,
  Zap,
  CheckCircle2,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

interface ProcessStage {
  step: string;
  name: string;
  category: string;
  title: string;
  description: string;
  deliverables: string[];
  safetyProtocol: string;
  photo: string;
  photoCaption: string;
  icon: any;
}

const STAGES: ProcessStage[] = [
  {
    step: "01",
    name: "Survey",
    category: "Geotechnical & Route Mapping",
    title: "Topographical Survey & Route Finalization",
    description:
      "Precision GPS topography, underground utility detection, soil electrical resistivity testing, and right-of-way (ROW) alignment for high-voltage corridors.",
    deliverables: [
      "Soil bearing capacity & resistivity test reports",
      "Route profile CAD maps & tower spotting charts",
      "Statutory road, railway & river crossing clearances",
    ],
    safetyProtocol: "Field crew safety briefings & hazardous terrain PPE",
    photo: "/hero-images/hero-tower.jpg",
    photoCaption: "Corridor Route Alignment & Tower Spotting",
    icon: Compass,
  },
  {
    step: "02",
    name: "Engineering",
    category: "System Design & SLD Approval",
    title: "Electrical & Structural Design Engineering",
    description:
      "Preparation of single line diagrams (SLD), structural gantry calculations, busbar current carrying capacity, and earthing grid designs conforming to IEEE 80.",
    deliverables: [
      "Utility approved Single Line Diagrams (SLD)",
      "Switchyard layout plans & structural foundation drawings",
      "Relay protection coordination curves & settings",
    ],
    safetyProtocol: "Design safety margins & creepage distance verification",
    photo: "/site-images/control-panel.jpeg",
    photoCaption: "CAD Electrical Engineering & Relay Logic",
    icon: FileCode2,
  },
  {
    step: "03",
    name: "Procurement",
    category: "FAT Inspection & Supply Chain",
    title: "Type-Tested Equipment Procurement",
    description:
      "Procurement coordination with accredited Tier-1 manufacturers for transformers, SF6 switchgear, conductors, insulators, and control panels with factory acceptance tests (FAT).",
    deliverables: [
      "Third-party Type Test certificates from CPRI / ERDA",
      "Factory Acceptance Testing (FAT) inspection sign-offs",
      "Heavy logistics & specialized hydraulic trailer transit",
    ],
    safetyProtocol: "Heavy haulage transport safety & crane rigging checks",
    photo: "/site-images/transformer-bay.jpeg",
    photoCaption: "Factory Tested EHV Transformers & Switchgear",
    icon: Truck,
  },
  {
    step: "04",
    name: "Construction",
    category: "Civil Foundations & Gantries",
    title: "Civil Foundations & Tower Erection",
    description:
      "Excavation, reinforced RCC casting for transformer plinths, control buildings, switchyard gravel spread, and heavy galvanized steel gantry structural assembly.",
    deliverables: [
      "M25/M30 cube test compressive strength reports",
      "Galvanized lattice tower & gantry structural erection",
      "Earthing mat grid conductor welding & test pits",
    ],
    safetyProtocol: "Excavation shoring, fall protection harness, hard-hat zoning",
    photo: "/hero-images/hero-transmission.jpeg",
    photoCaption: "Reinforced Civil Plinths & Structural Steel Erection",
    icon: HardHat,
  },
  {
    step: "05",
    name: "Installation",
    category: "Equipment Staging & HDD Cabling",
    title: "Electrical Equipment Erection & Cabling",
    description:
      "Skid placement of power transformers, circuit breaker mounting, tubular busbar fabrication, and trenchless underground cable laying (HDD) across utility corridors.",
    deliverables: [
      "Torque-checked busbar and terminal connections",
      "HT/LT cable pulling, straight-through joints & terminations",
      "Marshalling kiosk & secondary wiring integration",
    ],
    safetyProtocol: "Permit-to-Work (PTW) enforcement on active sites",
    photo: "/hero-images/hero-tunnel.jpeg",
    photoCaption: "Trenchless Drilling HDD & Equipment Erection",
    icon: Wrench,
  },
  {
    step: "06",
    name: "Testing",
    category: "Pre-Commissioning Diagnostics",
    title: "Multi-Stage Pre-Commissioning & Diagnostics",
    description:
      "Primary & secondary injection tests, transformer oil filtration (>60 kV BDV), contact resistance measurement (CRM), breaker timing, and insulation resistance checks.",
    deliverables: [
      "Comprehensive pre-commissioning diagnostic dossiers",
      "Transformer Tan-Delta, TTR & Dielectric BDV reports",
      "Numeric protection relay trip test records",
    ],
    safetyProtocol: "High-voltage test barricading & discharge earthing rods",
    photo: "/site-images/power-plant-ais.jpeg",
    photoCaption: "Dielectric Oil Testing & Secondary Injection",
    icon: Activity,
  },
  {
    step: "07",
    name: "Commissioning",
    category: "Statutory Approvals & CEIG",
    title: "Statutory Inspection & Compliance Clearances",
    description:
      "Liaison with the Directorate of Electrical Safety (CEIG), utility inspection wing sign-offs, and compliance verification under Central Electricity Authority regulations.",
    deliverables: [
      "Statutory CEIG Charging Permission Letter",
      "Interconnection and synchronization approvals",
      "Grid operator pre-charging clearance checklist",
    ],
    safetyProtocol: "Pre-charging site lockdown & warning siren notification",
    photo: "/hero-images/hero-gis.jpg",
    photoCaption: "CEIG Statutory Inspection & Substation Verification",
    icon: ShieldCheck,
  },
  {
    step: "08",
    name: "Energization",
    category: "Commercial Handover",
    title: "Live Grid Energization & Commercial Handover",
    description:
      "Trial charging on no-load, synchronized grid tie-in, full commercial load transfer, and delivery of complete as-built documentation to utility operating teams.",
    deliverables: [
      "As-Built drawing dossiers & O&M manual handover",
      "Synchronized load transfer protocol certificates",
      "Initial 90-day stabilization & warranty maintenance",
    ],
    safetyProtocol: "Continuous thermography scans on live energized busbars",
    photo: "/hero-images/hero-substation.jpg",
    photoCaption: "Ayodhya 220 kV Energized Substation Network",
    icon: Zap,
  },
];

export function EngineeringToEnergization() {
  const [activeStageIdx, setActiveStageIdx] = useState(0);
  const activeStage = STAGES[activeStageIdx];
  const Icon = activeStage.icon;

  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-[#070d1d] py-20 text-white sm:py-24">
      {/* Blueprint Grid Lines Background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(#0066ff 1px, transparent 1px), linear-gradient(90deg, #0066ff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-radial from-transparent via-[#070d1d]/70 to-[#070d1d]" />

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-950/40 px-3.5 py-1 text-xs font-bold tracking-wider text-[#38bdf8] uppercase backdrop-blur-md">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#EA580C]" />
              <span>Section 07 &bull; Engineering to Energization</span>
            </div>
            <h2 className="text-2xl leading-tight font-black tracking-tight text-white sm:text-4xl lg:text-[42px]">
              The 8-Stage Turnkey Execution Pipeline
            </h2>
          </div>
          <p className="max-w-md font-mono text-xs leading-relaxed text-slate-300 sm:text-sm">
            A blueprint-driven sequence delivering zero-gap accountability from initial corridor
            survey to synchronized grid energization.
          </p>
        </div>

        {/* Interactive Horizontal Process Steps Bar */}
        <div className="mb-10 scrollbar-thin overflow-x-auto pt-2 pb-4">
          <div className="relative flex min-w-[760px] items-center justify-between lg:min-w-0">
            {/* Animated Connector Line */}
            <div className="absolute top-1/2 right-0 left-0 z-0 h-0.5 -translate-y-1/2 bg-white/15" />
            <div
              className="absolute top-1/2 left-0 z-0 h-0.5 -translate-y-1/2 bg-gradient-to-r from-[#0066FF] to-[#EA580C] transition-all duration-500"
              style={{
                width: `${(activeStageIdx / (STAGES.length - 1)) * 100}%`,
              }}
            />

            {STAGES.map((s, idx) => {
              const isSelected = idx === activeStageIdx;
              const isPast = idx < activeStageIdx;

              return (
                <button
                  key={s.step}
                  type="button"
                  onClick={() => setActiveStageIdx(idx)}
                  className={`group relative z-10 flex cursor-pointer flex-col items-center transition-all ${
                    isSelected ? "scale-110" : "hover:scale-105"
                  }`}
                  aria-label={`Go to stage ${s.step}: ${s.name}`}
                >
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-full border-2 transition-all sm:h-12 sm:w-12 ${
                      isSelected
                        ? "border-[#EA580C] bg-[#EA580C] text-white shadow-lg ring-4 shadow-orange-600/40 ring-orange-500/20"
                        : isPast
                          ? "border-[#0066FF] bg-[#0066FF] text-white"
                          : "border-white/20 bg-[#0c1427] text-slate-400 group-hover:border-white/50 group-hover:text-white"
                    }`}
                  >
                    <span className="font-mono text-xs font-bold">{s.step}</span>
                  </div>
                  <span
                    className={`mt-2 text-xs font-bold tracking-wider uppercase transition-colors ${
                      isSelected ? "text-[#f08020]" : "text-slate-400 group-hover:text-slate-200"
                    }`}
                  >
                    {s.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Stage Detailed Presentation Panel */}
        <div className="grid grid-cols-1 gap-8 rounded-2xl border border-white/20 bg-[#0b1329]/90 p-6 shadow-2xl backdrop-blur-xl sm:p-10 lg:grid-cols-12">
          {/* Left Side: Technical Scope & Checklist */}
          <div className="space-y-6 lg:col-span-7">
            <div className="flex items-center space-x-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#EA580C]/30 bg-[#EA580C]/20 text-[#EA580C]">
                <Icon className="h-6 w-6" />
              </div>
              <div>
                <span className="font-mono text-xs font-bold tracking-widest text-[#f08020] uppercase">
                  Stage {activeStage.step} of 08 &bull; {activeStage.category}
                </span>
                <h3 className="mt-0.5 text-xl font-bold text-white sm:text-2xl">
                  {activeStage.title}
                </h3>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-slate-200">{activeStage.description}</p>

            {/* Deliverables Checklist */}
            <div className="space-y-2.5 rounded-xl border border-white/10 bg-white/5 p-4 sm:p-5">
              <h4 className="font-mono text-xs font-bold tracking-wider text-[#38bdf8] uppercase">
                Technical Handover Deliverables:
              </h4>
              <div className="space-y-2">
                {activeStage.deliverables.map((item, i) => (
                  <div key={i} className="flex items-start space-x-2.5 text-xs text-slate-200">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Safety Protocol Badge */}
            <div className="flex items-center space-x-2.5 rounded-lg border border-amber-500/30 bg-amber-950/20 px-4 py-2.5 text-xs text-amber-200">
              <ShieldCheck className="h-4 w-4 shrink-0 text-amber-400" />
              <span>
                <strong>HSE Protocol:</strong> {activeStage.safetyProtocol}
              </span>
            </div>

            {/* Next Stage Navigation Button */}
            <div className="flex items-center space-x-3 pt-2">
              <button
                type="button"
                onClick={() => setActiveStageIdx((prev) => (prev + 1) % STAGES.length)}
                className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-[#EA580C] px-5 py-2.5 text-xs font-bold text-white shadow-md transition hover:bg-orange-600"
              >
                <span>Advance to Next Stage</span>
                <ArrowRight className="h-4 w-4" />
              </button>
              <span className="text-[11px] text-slate-400">
                Click any step above to inspect stage protocols
              </span>
            </div>
          </div>

          {/* Right Side: Associated Project Photograph */}
          <div className="flex flex-col justify-between lg:col-span-5">
            <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-white/20 bg-slate-950 shadow-xl">
              <Image
                src={activeStage.photo}
                alt={activeStage.photoCaption}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute right-3 bottom-3 left-3 text-white">
                <span className="rounded bg-[#EA580C] px-2 py-0.5 text-[9px] font-bold tracking-wider uppercase">
                  Field Documentation
                </span>
                <p className="mt-1 text-xs font-semibold text-white/95">
                  {activeStage.photoCaption}
                </p>
              </div>
            </div>

            <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-3.5 text-xs text-slate-300">
              <div className="mb-1 flex items-center justify-between text-[11px] text-slate-400">
                <span>Contract Compliance</span>
                <span className="font-mono font-bold text-emerald-400">100% Audit Verified</span>
              </div>
              <p className="text-[11px] leading-relaxed text-slate-400">
                All 8 stages adhere strictly to Central Electricity Authority (CEA) regulations and
                state transmission utility standards.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
