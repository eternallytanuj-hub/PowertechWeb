"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ExtendedCertification } from "@/data/certifications";
import {
  X,
  CheckCircle2,
  ShieldCheck,
  Download,
  ExternalLink,
  Calendar,
  Building,
  Award,
} from "lucide-react";

interface CertificateViewerModalProps {
  cert: ExtendedCertification | null;
  isOpen: boolean;
  onClose: () => void;
}

export function CertificateViewerModal({ cert, isOpen, onClose }: CertificateViewerModalProps) {
  if (!isOpen || !cert) return null;

  return (
    <div
      className="animate-in fade-in fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-3 backdrop-blur-md transition-opacity duration-300 sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="cert-modal-title"
    >
      <div
        className="relative flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-white/20 bg-[#080d1a] text-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between border-b border-white/10 bg-[#0c1427] px-6 py-4">
          <div className="flex items-center space-x-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#EA580C]/30 bg-[#EA580C]/20 text-[#EA580C]">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <span className="text-[10px] font-bold tracking-widest text-[#EA580C] uppercase">
                {cert.badge}
              </span>
              <h3 id="cert-modal-title" className="text-base font-bold text-white sm:text-lg">
                {cert.name}
              </h3>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg bg-white/10 text-slate-300 transition hover:bg-white/20 hover:text-white"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="space-y-6 overflow-y-auto p-6">
          {/* Metadata Cards */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-white/5 p-3.5">
              <span className="text-[10px] tracking-wider text-slate-400 uppercase">
                Issuing Body
              </span>
              <p className="mt-1 text-xs font-semibold text-white">{cert.issuingBody}</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-3.5">
              <span className="text-[10px] tracking-wider text-slate-400 uppercase">
                Registration / License
              </span>
              <p className="mt-1 font-mono text-xs font-semibold text-emerald-400">
                {cert.certificateNumber || "Verified Statutory Record"}
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-3.5">
              <span className="text-[10px] tracking-wider text-slate-400 uppercase">
                Validity Period
              </span>
              <p className="mt-1 text-xs font-semibold text-white">
                {cert.date} &rarr; {cert.expiryDate || "Continuous"}
              </p>
            </div>
          </div>

          {/* Scope of Accreditation */}
          <div className="rounded-xl border border-[#0284c7]/30 bg-[#0284c7]/10 p-4">
            <h4 className="flex items-center gap-1.5 text-xs font-bold tracking-wider text-[#38bdf8] uppercase">
              <Award className="h-4 w-4" />
              <span>Certified Technical Scope</span>
            </h4>
            <p className="mt-2 text-xs leading-relaxed text-slate-200">{cert.scope}</p>
          </div>

          {/* Key Compliance Highlights */}
          <div>
            <h4 className="mb-3 text-xs font-bold tracking-wider text-slate-300 uppercase">
              Institutional Compliance Highlights
            </h4>
            <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {cert.highlights.map((h, i) => (
                <div key={i} className="flex items-start space-x-2 text-xs text-slate-300">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#EA580C]" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Document Preview & Verification Stamp */}
          {cert.document && (
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-300">
                  Official Document Reference & Verification Slide
                </span>
                <span className="inline-flex items-center gap-1 font-mono text-[11px] text-emerald-400">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                  Audit Verified
                </span>
              </div>
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg border border-white/10 bg-black/40">
                <Image
                  src={cert.document.src}
                  alt={cert.document.alt}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between border-t border-white/10 bg-[#0c1427] px-6 py-4">
          <span className="text-[11px] text-slate-400">
            Standard: <strong className="text-slate-200">{cert.complianceStandard}</strong>
          </span>
          <div className="flex items-center space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="cursor-pointer rounded-lg bg-white/10 px-4 py-2 text-xs font-semibold text-white transition hover:bg-white/20"
            >
              Close Viewer
            </button>
            <a
              href="#contact"
              onClick={onClose}
              className="inline-flex items-center gap-1.5 rounded-lg bg-[#EA580C] px-4 py-2 text-xs font-bold text-white shadow-sm transition hover:bg-orange-600"
            >
              <span>Request Vendor Pack</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
