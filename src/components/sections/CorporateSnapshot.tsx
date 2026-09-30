"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { ShieldCheck, Award, Zap, Building2, MapPin } from "lucide-react";

interface SnapshotMetric {
  value: string;
  label: string;
  sublabel: string;
  highlight: string;
  color: string;
}

const METRICS: SnapshotMetric[] = [
  {
    value: "20+",
    label: "YEARS OF EXPERIENCE",
    sublabel: "Promoted in April 2004 by engineering technocrats",
    highlight: "Since 2004",
    color: "text-[#EA580C]",
  },
  {
    value: "100+",
    label: "PROJECTS / WORK PACKAGES",
    sublabel: "Turnkey substations, bay extensions, & feeder networks",
    highlight: "State Utilities",
    color: "text-[#0066FF]",
  },
  {
    value: "10+",
    label: "STATES / NETWORKS",
    sublabel: "Uttar Pradesh, J&K, Haryana, Bihar, Jharkhand & NCR",
    highlight: "Pan-India Reach",
    color: "text-[#059669]",
  },
  {
    value: "250+",
    label: "ENGINEERING & SITE PROFESSIONALS",
    sublabel: "Designers, testing engineers, supervisors & line crews",
    highlight: "Skilled Manpower",
    color: "text-[#D97706]",
  },
  {
    value: "400 kV",
    label: "PEAK VOLTAGE CAPABILITY",
    sublabel: "400/220/132/33/11 kV EHV switchyards & lines",
    highlight: "Extra High Voltage",
    color: "text-[#EA580C]",
  },
];

export function CorporateSnapshot() {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-white py-16 sm:py-20">
      <div className="dynamic-section-field -z-10" />

      <Container>
        {/* Section Header */}
        <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1 text-xs font-bold tracking-wider text-[#111650] uppercase">
              <span className="h-2 w-2 rounded-full bg-[#EA580C]" />
              <span>Section 02 &bull; Corporate Snapshot</span>
            </div>
            <h2 className="text-2xl font-black tracking-tight text-[#111650] sm:text-4xl">
              Operational Scale & Infrastructure Provenance
            </h2>
          </div>
          <p className="max-w-md text-xs leading-relaxed text-slate-600 sm:text-sm">
            Over two decades of disciplined turnkey delivery for India’s premier power transmission
            and distribution utilities.
          </p>
        </div>

        {/* Oversized Number Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {METRICS.map((metric, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="kinetic-card electric-lift flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50/70 p-6 transition-all hover:border-[#EA580C] hover:bg-white hover:shadow-lg"
            >
              <div>
                <span className="inline-block rounded border border-slate-200 bg-white px-2 py-0.5 text-[10px] font-bold tracking-wider text-slate-500 uppercase">
                  {metric.highlight}
                </span>
                <div
                  className={`mt-4 text-4xl font-black tracking-tight sm:text-5xl ${metric.color}`}
                >
                  {metric.value}
                </div>
                <h3 className="mt-2 text-xs font-bold tracking-wider text-[#111650] uppercase">
                  {metric.label}
                </h3>
              </div>
              <p className="mt-4 border-t border-slate-200/60 pt-3 text-[11px] leading-relaxed text-slate-500">
                {metric.sublabel}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Institutional Assurance Strip */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-slate-200 bg-slate-100/60 px-6 py-4 text-xs text-slate-700">
          <div className="flex items-center space-x-2">
            <ShieldCheck className="h-4 w-4 text-[#EA580C]" />
            <span>
              <strong>ISO 9001:2015 Certified</strong> Quality Management Systems across all project
              sites.
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <Building2 className="h-4 w-4 text-[#0066FF]" />
            <span>
              <strong>Punjab National Bank</strong> Banking Partner & Credit Support.
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <Award className="h-4 w-4 text-emerald-600" />
            <span>
              <strong>Class-A Statutory License</strong> authorized up to 400 kV extra-high-voltage
              works.
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
