"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { PowertechLogo } from "@/components/ui/PowertechLogo";
import {
  ArrowRight,
  ShieldCheck,
  Award,
  Zap,
  Layers,
  FileText,
  Sliders,
  Play,
  Pause,
  ChevronRight,
  Sparkles,
} from "lucide-react";

interface HeroScene {
  id: string;
  name: string;
  categoryNumber: string;
  title: string;
  headline: string;
  subline: string;
  image: string;
  voltageTag: string;
  locationTag: string;
  keyMetric: string;
  metricLabel: string;
}

const HERO_SCENES: HeroScene[] = [
  {
    id: "substation",
    name: "SUBSTATION",
    categoryNumber: "01",
    title: "EHV Substations & Switchyards",
    headline: "POWER INFRASTRUCTURE. ENGINEERED. EXECUTED. ENERGIZED.",
    subline:
      "Turnkey Electrical Engineering, Substation, Transmission & Distribution Infrastructure Solutions.",
    image: "/hero-images/hero-substation.jpg",
    voltageTag: "Substations up to 400 kV",
    locationTag: "Ayodhya 220 kV Landmark Execution",
    keyMetric: "400 kV",
    metricLabel: "Peak Substation Capability",
  },
  {
    id: "transmission",
    name: "TRANSMISSION",
    categoryNumber: "02",
    title: "Overhead Grid Networks",
    headline: "POWER INFRASTRUCTURE. ENGINEERED. EXECUTED. ENERGIZED.",
    subline:
      "High-voltage lattice transmission corridors, route surveying, conductor stringing, and grid synchronization.",
    image: "/hero-images/hero-tower.jpg",
    voltageTag: "Lines up to 220 kV",
    locationTag: "UPPTCL & State Grid Corridors",
    keyMetric: "220 kV",
    metricLabel: "Overhead Grid Voltage",
  },
  {
    id: "distribution",
    name: "DISTRIBUTION",
    categoryNumber: "03",
    title: "HT/LT Distribution Infrastructure",
    headline: "POWERING COMMUNITIES WITH RESILIENT GRIDS.",
    subline:
      "RAPDRP, IPDS & PMDP framework-compliant urban electrification and loss-reduction infrastructure.",
    image: "/hero-images/hero-transmission.jpeg",
    voltageTag: "33 / 11 kV Networks",
    locationTag: "J&K PDD & DVVNL Zones",
    keyMetric: "100+",
    metricLabel: "Utility Packages Executed",
  },
  {
    id: "industrial",
    name: "INDUSTRIAL",
    categoryNumber: "04",
    title: "Industrial Electrification & Trenchless HDD",
    headline: "HEAVY INDUSTRIAL ELECTRIFICATION & TRENCHLESS HDD.",
    subline:
      "Turnkey plant switchyards, busduct routing, PCC/MCC panels, and advanced Trenchless Horizontal Directional Drilling.",
    image: "/hero-images/hero-tunnel.jpeg",
    voltageTag: "HDD Trenchless Drilling",
    locationTag: "Process Plants & Urban Arteries",
    keyMetric: "Zero",
    metricLabel: "Surface Traffic Disruption",
  },
  {
    id: "commissioning",
    name: "COMMISSIONING",
    categoryNumber: "05",
    title: "Testing, Protection & Energization",
    headline: "FROM SURVEY TO SYNCHRONIZATION WITH PRE-COMMISSIONING RIGOR.",
    subline:
      "Secondary numerical relay testing, transformer oil dielectric filtration (>60 kV BDV), and statutory CEIG clearances.",
    image: "/hero-images/hero-gis.jpg",
    voltageTag: "CEIG & Utility Sign-Off",
    locationTag: "Mobile Diagnostic & Oil Units",
    keyMetric: ">60 kV",
    metricLabel: "Oil Dielectric Breakdown Voltage",
  },
];

export function HeroExperience() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % HERO_SCENES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const currentScene = HERO_SCENES[currentIdx];

  return (
    <section className="relative flex min-h-[92vh] w-full flex-col justify-between overflow-hidden bg-[#070b19] text-white sm:min-h-[95vh]">
      {/* Background Cinematic Visual with smooth cross-fade */}
      <div className="absolute inset-0 z-0">
        {HERO_SCENES.map((scene, i) => (
          <div
            key={scene.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              i === currentIdx ? "scale-100 opacity-100" : "pointer-events-none scale-105 opacity-0"
            }`}
            style={{
              transitionProperty: "opacity, transform",
              transitionDuration: "1200ms",
            }}
          >
            <Image
              src={scene.image}
              alt={scene.title}
              fill
              priority={i === 0}
              className="scale-105 transform object-cover object-center transition-transform duration-10000 ease-out"
            />
          </div>
        ))}

        {/* Sophisticated Multi-Layer Gradient Overlays for Maximum Text Contrast */}
        <div className="absolute inset-0 z-1 bg-gradient-to-r from-[#070b19] via-[#070b19]/80 to-transparent" />
        <div className="absolute inset-0 z-1 bg-gradient-to-t from-[#070b19] via-transparent to-[#070b19]/60" />
        <div className="hero-circuit-grid pointer-events-none absolute inset-0 z-1 opacity-20" />
      </div>

      {/* Main Hero Content Area */}
      <div className="relative z-10 flex flex-1 items-center pt-24 pb-12">
        <Container className="w-full">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            {/* Left Column: Hero Narrative */}
            <div className="space-y-6 lg:col-span-8">
              {/* Floating Live Telemetry Badge */}
              <div className="inline-flex flex-wrap items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold shadow-lg backdrop-blur-md">
                <span className="flex h-2 w-2 animate-pulse rounded-full bg-[#EA580C]" />
                <span className="font-bold tracking-wider text-[#f08020] uppercase">
                  {currentScene.voltageTag}
                </span>
                <span className="text-white/40">&bull;</span>
                <span className="text-white/90">{currentScene.locationTag}</span>
              </div>

              {/* Main Impactful Headings */}
              <div>
                <p className="mb-2 font-mono text-xs font-bold tracking-widest text-[#f08020] uppercase sm:text-sm">
                  POWERTECH ENGINEERS &bull; EPC CONTRACTORS SINCE 2004
                </p>
                <h1 className="max-w-4xl text-3xl leading-[1.08] font-black tracking-tight text-white drop-shadow-md sm:text-5xl lg:text-6xl">
                  {currentScene.headline}
                </h1>
              </div>

              {/* Supporting Line */}
              <p className="max-w-2xl text-base leading-relaxed font-normal text-slate-200 drop-shadow-sm sm:text-lg">
                {currentScene.subline}
              </p>

              {/* CTAs matching draft specification */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#projects"
                  className="group inline-flex cursor-pointer items-center gap-2.5 rounded-full bg-[#EA580C] px-8 py-3.5 text-xs font-bold text-white shadow-xl shadow-orange-600/30 transition-all hover:scale-[1.02] hover:bg-orange-600 sm:text-sm"
                >
                  <span>View Our Projects</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>

                <a
                  href="#contact"
                  className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-xs font-bold text-white backdrop-blur-md transition hover:bg-white/20 sm:text-sm"
                >
                  <Zap className="h-4 w-4 text-[#f08020]" />
                  <span>Enquire Now</span>
                </a>

                <a
                  href="#capabilities"
                  className="hidden items-center gap-2 rounded-full border border-transparent px-5 py-3.5 text-xs font-semibold text-slate-300 transition hover:text-white sm:inline-flex sm:text-sm"
                >
                  <Layers className="h-4 w-4 text-[#f08020]" />
                  <span>Our Capabilities</span>
                </a>
              </div>

              {/* Secondary Visual Floating Telemetry Labels (Specification Section 01) */}
              <div className="grid max-w-2xl grid-cols-2 gap-3 pt-4 sm:grid-cols-4">
                <div className="rounded-xl border border-white/15 bg-[#0a1128]/70 p-3 backdrop-blur-md">
                  <div className="text-xl font-black text-[#EA580C] sm:text-2xl">20+</div>
                  <div className="text-[11px] font-bold tracking-wider text-white uppercase">
                    Years Experience
                  </div>
                  <div className="text-[10px] text-slate-400">Promoted 2004</div>
                </div>

                <div className="rounded-xl border border-white/15 bg-[#0a1128]/70 p-3 backdrop-blur-md">
                  <div className="text-xl font-black text-[#38bdf8] sm:text-2xl">400 kV</div>
                  <div className="text-[11px] font-bold tracking-wider text-white uppercase">
                    EHV / HV / MV
                  </div>
                  <div className="text-[10px] text-slate-400">Extra High Voltage</div>
                </div>

                <div className="rounded-xl border border-white/15 bg-[#0a1128]/70 p-3 backdrop-blur-md">
                  <div className="text-xl font-black text-emerald-400 sm:text-2xl">Turnkey</div>
                  <div className="text-[11px] font-bold tracking-wider text-white uppercase">
                    EPC Delivery
                  </div>
                  <div className="text-[10px] text-slate-400">Single Ownership</div>
                </div>

                <div className="rounded-xl border border-white/15 bg-[#0a1128]/70 p-3 backdrop-blur-md">
                  <div className="text-xl font-black text-amber-300 sm:text-2xl">T&D</div>
                  <div className="text-[11px] font-bold tracking-wider text-white uppercase">
                    Lines & Corridors
                  </div>
                  <div className="text-[10px] text-slate-400">Grid Reliability</div>
                </div>
              </div>
            </div>

            {/* Right Column: Dynamic Scene Telemetry Card */}
            <div className="hidden justify-end lg:col-span-4 lg:flex">
              <div className="w-80 space-y-4 rounded-2xl border border-white/20 bg-[#0c1427]/85 p-6 shadow-2xl backdrop-blur-xl">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="font-mono text-[11px] tracking-widest text-[#f08020] uppercase">
                    SCENE #{currentScene.categoryNumber} TELEMETRY
                  </span>
                  <button
                    type="button"
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-md bg-white/10 text-white/80 transition hover:bg-white/20"
                    title={isPlaying ? "Pause Scene Cycle" : "Play Scene Cycle"}
                  >
                    {isPlaying ? <Pause className="h-3 w-3" /> : <Play className="h-3 w-3" />}
                  </button>
                </div>

                <div>
                  <span className="text-xs text-slate-400">Current Focus Discipline</span>
                  <h3 className="mt-0.5 text-base font-bold text-white">{currentScene.title}</h3>
                </div>

                <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-3.5">
                  <div>
                    <div className="text-2xl font-black text-[#EA580C]">
                      {currentScene.keyMetric}
                    </div>
                    <div className="text-[10px] font-medium text-slate-400">
                      {currentScene.metricLabel}
                    </div>
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#EA580C]/20 text-[#EA580C]">
                    <Zap className="h-5 w-5" />
                  </div>
                </div>

                <div className="space-y-1.5 text-xs text-slate-300">
                  <div className="flex justify-between border-b border-white/5 py-1">
                    <span className="text-slate-400">Governance:</span>
                    <span className="font-semibold text-white">ISO 9001:2015</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 py-1">
                    <span className="text-slate-400">Banking Partner:</span>
                    <span className="font-semibold text-white">Punjab National Bank</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-slate-400">License:</span>
                    <span className="font-semibold text-emerald-400">Class-A / EHV</span>
                  </div>
                </div>

                <a
                  href="#case-study"
                  className="flex w-full items-center justify-center gap-1.5 rounded-lg bg-white/10 py-2.5 text-xs font-bold text-white transition hover:bg-white/20"
                >
                  <span>Inspect Execution Dossier</span>
                  <ChevronRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Bottom Scene Selector matching Section 01 Hero UI Detail: 01 / 05 */}
      <div className="relative z-20 border-t border-white/15 bg-[#050816]/90 py-4 backdrop-blur-md">
        <Container>
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            {/* Slide Index Counter */}
            <div className="flex items-center space-x-3 font-mono text-xs font-bold tracking-widest text-[#f08020]">
              <span className="text-sm text-white">0{currentIdx + 1}</span>
              <span className="text-white/40">/</span>
              <span>0{HERO_SCENES.length}</span>
              <span className="hidden font-sans text-[10px] font-medium text-white/50 uppercase sm:inline">
                DISCIPLINE SELECTOR
              </span>
            </div>

            {/* 5 Clickable Discipline Buttons (SUBSTATION, TRANSMISSION, DISTRIBUTION, INDUSTRIAL, COMMISSIONING) */}
            <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
              {HERO_SCENES.map((scene, i) => {
                const isActive = i === currentIdx;
                return (
                  <button
                    key={scene.id}
                    type="button"
                    onClick={() => {
                      setCurrentIdx(i);
                      setIsPlaying(false);
                    }}
                    className={`flex cursor-pointer items-center space-x-2 rounded-lg px-3.5 py-2 text-xs font-bold tracking-wider transition-all ${
                      isActive
                        ? "scale-105 bg-[#EA580C] text-white shadow-md shadow-orange-500/30"
                        : "bg-white/5 text-slate-300 hover:bg-white/15 hover:text-white"
                    }`}
                    aria-label={`Select scene ${scene.name}`}
                  >
                    <span className="font-mono text-[10px] opacity-75">0{i + 1}</span>
                    <span>{scene.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Quick Link to Slide Brochure */}
            <a
              href="#brochure"
              className="hidden items-center gap-1.5 text-xs text-slate-400 transition hover:text-white lg:flex"
            >
              <FileText className="h-3.5 w-3.5 text-[#f08020]" />
              <span>5-Slide Verified Dossier</span>
            </a>
          </div>
        </Container>
      </div>
    </section>
  );
}
