"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Camera, ZoomIn, X, ChevronRight, CheckCircle2, Shield, Layers } from "lucide-react";

interface SitePhoto {
  id: string;
  src: string;
  alt: string;
  caption: string;
  category: "Substation" | "Transmission" | "Cabling" | "Equipment" | "Safety";
  categoryLabel: string;
  featured?: boolean;
}

const SITE_PHOTOS: SitePhoto[] = [
  {
    id: "substation-ehv",
    src: "/site-images/substations.jpeg",
    alt: "EHV Substation Yard with Insulators and Control Kiosk",
    caption: "EHV Substation Yard with Insulators and Control Kiosk",
    category: "Substation",
    categoryLabel: "Substation Installation",
    featured: true,
  },
  {
    id: "control-panels",
    src: "/site-images/control-panel.jpeg",
    alt: "Siemens Protection and Control Panels inside Substation Building",
    caption: "Siemens Protection & Control Panels inside Substation Building",
    category: "Equipment",
    categoryLabel: "Panel Integration",
  },
  {
    id: "ht-cabling",
    src: "/site-images/gis-cabling.jpeg",
    alt: "Underground HT Cable Laying and Trench Execution",
    caption: "Underground HT Cable Laying at Substation Site",
    category: "Cabling",
    categoryLabel: "Cabling Works",
  },
  {
    id: "ais-switchyard",
    src: "/site-images/power-plant-ais.jpeg",
    alt: "AIS Switchyard Construction with Steel Structures and Busbars",
    caption: "AIS Switchyard Construction & Busbar Assembly",
    category: "Transmission",
    categoryLabel: "Transmission Works",
  },
  {
    id: "transformer-bay",
    src: "/site-images/transformer-bay.jpeg",
    alt: "Bharat Bijlee Transformer Bay with Fire Protection Lines",
    caption: "Bharat Bijlee Transformer Bay Integration",
    category: "Equipment",
    categoryLabel: "EHV Equipment",
  },
  {
    id: "hv-busbars",
    src: "/site-images/hv-infrastructure.jpeg",
    alt: "EHV Bus Insulator Strings against Sky",
    caption: "EHV Bus Insulator String Configuration",
    category: "Substation",
    categoryLabel: "High Voltage",
  },
  {
    id: "fire-suppression",
    src: "/site-images/fire-suppression.jpeg",
    alt: "Substation Fire Suppression Sprinkler Alarm System",
    caption: "Fire Suppression Sprinkler Alarm Infrastructure",
    category: "Safety",
    categoryLabel: "Safety Infrastructure",
  },
  {
    id: "transmission-tower",
    src: "/hero-images/hero-transmission.jpeg",
    alt: "High-Voltage Overhead Transmission Line Corridor",
    caption: "Overhead Transmission Corridor & Conductor Sagging",
    category: "Transmission",
    categoryLabel: "Grid Corridors",
    featured: true,
  },
  {
    id: "site-view",
    src: "/site-images/project-site-view.jpeg",
    alt: "Comprehensive Power Infrastructure Project View",
    caption: "Comprehensive Substation Field Engineering View",
    category: "Substation",
    categoryLabel: "Field Infrastructure",
    featured: true,
  },
];

const CATEGORIES = ["All", "Substation", "Transmission", "Cabling", "Equipment", "Safety"] as const;

export function SiteGallery() {
  const [activeTab, setActiveTab] = useState<string>("All");
  const [lightboxPhoto, setLightboxPhoto] = useState<SitePhoto | null>(null);

  const filteredPhotos =
    activeTab === "All" ? SITE_PHOTOS : SITE_PHOTOS.filter((p) => p.category === activeTab);

  return (
    <section id="documentation" className="relative scroll-mt-28 overflow-hidden bg-slate-50 py-20">
      <div className="dynamic-section-field -z-10" />

      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200/90 bg-white px-4 py-1.5 shadow-2xs">
            <Camera className="h-4 w-4 text-[#EA580C]" />
            <span className="text-xs font-bold tracking-wider text-[#111650] uppercase">
              Site Documentation
            </span>
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-[#111650] sm:text-3xl md:text-4xl">
            Building India’s power infrastructure — on the ground, at scale
          </h2>
          <p className="mt-3 text-xs leading-relaxed text-slate-600 sm:text-sm">
            Every site captured here represents real field execution by Powertech Engineers — from
            extra-high-voltage substation erection and panel integration to heavy cabling, AIS
            construction, and safety systems.
          </p>
        </div>

        {/* Narrative & Metric Snapshot */}
        <div className="mb-12 grid grid-cols-1 items-center gap-6 md:grid-cols-12">
          <div className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs sm:p-7 md:col-span-7">
            <div className="mb-3 inline-flex items-center gap-1.5 rounded-md bg-[#111650]/10 px-2.5 py-1 text-xs font-bold text-[#111650]">
              <Shield className="h-3.5 w-3.5 text-[#EA580C]" />
              <span>About Powertech Engineers</span>
            </div>
            <p className="text-xs leading-relaxed text-slate-700 sm:text-sm">
              Powertech Engineers is a Class-A electrical infrastructure contractor with two decades
              of turnkey execution across India’s state power utilities. Operating from registered
              corporate offices in Noida (UP) and Delhi, the company delivers end-to-end contracting
              for EHV substations, overhead and underground T&D networks, heavy cabling, and
              industrial electrical systems.
            </p>
            <p className="mt-3 text-xs leading-relaxed text-slate-600 sm:text-sm">
              With a verifiable track record spanning UPPTCL, DVVNL, HVPNL, BSPTCL, JSEB, and PDD
              Jammu & Kashmir, the organization is recognized for no-handoff-gap delivery — from
              engineering survey and procurement to energization and formal utility handover.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 md:col-span-5 md:grid-cols-1">
            {[
              { label: "Years of field execution", value: "20+", desc: "Established April 2004" },
              {
                label: "State utility networks",
                value: "6+",
                desc: "UP, Bihar, Haryana, J&K, etc.",
              },
              {
                label: "Execution standard",
                value: "Class-A",
                desc: "Turnkey EPC with ISO 9001:2015",
              },
            ].map((stat) => (
              <div
                key={stat.label}
                className="kinetic-card electric-lift flex flex-col justify-between rounded-xl border border-slate-200/90 bg-white p-4 shadow-2xs sm:flex-row sm:items-center"
              >
                <div>
                  <div className="text-xl font-black text-[#EA580C] sm:text-2xl">{stat.value}</div>
                  <div className="text-xs font-bold text-[#111650]">{stat.label}</div>
                  <div className="text-[10px] text-slate-400">{stat.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Category Filters */}
        <div className="mb-8 flex flex-wrap items-center justify-center gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`rounded-full px-4 py-1.5 text-xs font-bold transition-all ${
                activeTab === cat
                  ? "bg-[#111650] text-white shadow-sm"
                  : "border border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Photo Gallery Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {filteredPhotos.map((photo, idx) => {
            const isSpanTwo =
              activeTab === "All" && photo.featured && (idx === 0 || idx === 7 || idx === 8);
            return (
              <div
                key={photo.id}
                onClick={() => setLightboxPhoto(photo)}
                className={`group relative cursor-pointer overflow-hidden rounded-2xl border border-slate-200 bg-slate-900 shadow-sm transition-all duration-300 hover:shadow-lg ${
                  isSpanTwo ? "sm:col-span-2" : "col-span-1"
                }`}
              >
                <div className="relative aspect-4/3 w-full sm:aspect-16/10">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent transition-opacity group-hover:opacity-90" />

                  <div className="absolute top-3 right-3 rounded-full bg-black/40 p-1.5 text-white opacity-0 backdrop-blur-md transition-opacity group-hover:opacity-100">
                    <ZoomIn className="h-4 w-4" />
                  </div>

                  <div className="absolute right-3 bottom-3 left-3 text-white">
                    <span className="inline-block rounded-md bg-[#EA580C] px-2 py-0.5 text-[10px] font-bold tracking-wider uppercase">
                      {photo.categoryLabel}
                    </span>
                    <h3 className="mt-1 line-clamp-2 text-xs font-bold sm:text-sm">
                      {photo.caption}
                    </h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxPhoto && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          onClick={() => setLightboxPhoto(null)}
        >
          <div
            className="relative max-h-[92vh] max-w-4xl overflow-hidden rounded-2xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-100 px-5 py-3">
              <div className="flex items-center gap-2">
                <span className="rounded bg-[#EA580C] px-2 py-0.5 text-[10px] font-bold text-white uppercase">
                  {lightboxPhoto.categoryLabel}
                </span>
                <span className="text-xs font-bold text-[#111650] sm:text-sm">
                  {lightboxPhoto.caption}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setLightboxPhoto(null)}
                className="rounded-lg p-1.5 text-slate-500 hover:bg-slate-100 hover:text-slate-900"
                aria-label="Close photo preview"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="relative aspect-16/10 max-h-[75vh] w-full bg-slate-950">
              <Image
                src={lightboxPhoto.src}
                alt={lightboxPhoto.alt}
                fill
                sizes="(max-width: 1024px) 95vw, 900px"
                className="object-contain"
                priority
              />
            </div>

            <div className="border-t border-slate-100 bg-slate-50 px-5 py-3 text-xs text-slate-600">
              {lightboxPhoto.alt} • Verified on-site documentation by Powertech Engineers.
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
