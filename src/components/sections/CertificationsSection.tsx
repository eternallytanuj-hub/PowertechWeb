"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import {
  certificationsData,
  publicDocumentsList,
  ExtendedCertification,
} from "@/data/certifications";
import { CertificateViewerModal } from "@/components/ui/CertificateViewerModal";
import { SlideViewerModal } from "@/components/ui/SlideViewerModal";
import {
  Award,
  ShieldCheck,
  FileText,
  Download,
  ExternalLink,
  CheckCircle2,
  Calendar,
  Building,
} from "lucide-react";

export function CertificationsSection() {
  const [selectedCert, setSelectedCert] = useState<ExtendedCertification | null>(null);
  const [certModalOpen, setCertModalOpen] = useState(false);

  const handleOpenCert = (cert: ExtendedCertification) => {
    setSelectedCert(cert);
    setCertModalOpen(true);
  };

  return (
    <section
      id="certifications"
      className="relative overflow-hidden border-b border-slate-200 bg-white py-20 sm:py-24"
    >
      <div className="dynamic-section-field -z-10" />

      <Container>
        {/* Section Header */}
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1 text-xs font-bold tracking-wider text-[#111650] uppercase shadow-2xs">
              <span className="h-2 w-2 rounded-full bg-[#EA580C]" />
              <span>Section 13 & 14 &bull; Credentials & Public Documents</span>
            </div>
            <h2 className="text-2xl font-black tracking-tight text-[#111650] sm:text-4xl lg:text-[42px]">
              Certifications, Statutory Licenses & Credentials
            </h2>
          </div>
          <p className="max-w-md text-xs leading-relaxed text-slate-600 sm:text-sm">
            Click any certificate card below to launch the interactive verification document
            inspection viewer.
          </p>
        </div>

        {/* Large Certificate Cards Grid */}
        <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certificationsData.map((cert) => (
            <div
              key={cert.id}
              onClick={() => handleOpenCert(cert)}
              className="group kinetic-card electric-lift relative flex cursor-pointer flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#EA580C] hover:shadow-xl"
            >
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <span className="rounded-md border border-orange-200 bg-orange-50 px-2.5 py-0.5 text-[10px] font-bold tracking-wider text-[#EA580C] uppercase">
                    {cert.badge}
                  </span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#111650]/10 text-[#111650] transition-colors group-hover:bg-[#EA580C] group-hover:text-white">
                    <ShieldCheck className="h-4 w-4" />
                  </span>
                </div>

                <h3 className="text-base leading-snug font-bold text-[#111650] transition-colors group-hover:text-[#EA580C] sm:text-lg">
                  {cert.name}
                </h3>
                <p className="mt-1 text-xs font-medium text-slate-500">{cert.issuingBody}</p>

                <div className="mt-4 rounded-xl border border-slate-100 bg-slate-50 p-3 text-xs text-slate-700">
                  <div className="text-[10px] font-bold text-slate-400 uppercase">
                    Accredited Scope
                  </div>
                  <p className="mt-1 line-clamp-2 leading-relaxed">{cert.scope}</p>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4 text-xs">
                <span className="font-mono text-[11px] font-semibold text-emerald-600">
                  Valid: {cert.expiryDate || "Active"}
                </span>
                <button
                  type="button"
                  className="flex items-center gap-1 font-bold text-[#111650] transition-colors group-hover:text-[#EA580C]"
                >
                  <span>View Certificate</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Section 14: Approved Public Documents & Dossier Downloads */}
        <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-6 sm:p-10">
          <div className="mb-6 flex flex-col justify-between gap-4 border-b border-slate-200 pb-4 sm:flex-row sm:items-center">
            <div>
              <span className="font-mono text-[11px] font-bold tracking-widest text-[#EA580C] uppercase">
                Section 14 &bull; Corporate Transparency
              </span>
              <h3 className="text-xl font-bold text-[#111650]">
                Downloadable Public Credentials & Company Profiles
              </h3>
            </div>
            <span className="text-xs font-medium text-slate-500">
              Official Approved B2B Tender Evaluation Pack
            </span>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {publicDocumentsList.map((doc) => (
              <div
                key={doc.id}
                className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-4 shadow-2xs transition hover:border-[#EA580C]"
              >
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-[#111650]">
                      <FileText className="h-4 w-4" />
                    </span>
                    <span className="rounded bg-slate-100 px-2 py-0.5 text-[9px] font-bold text-slate-600">
                      {doc.fileSize}
                    </span>
                  </div>
                  <h4 className="line-clamp-2 text-xs font-bold text-[#111650]">{doc.title}</h4>
                  <p className="mt-1 line-clamp-2 text-[11px] text-slate-500">{doc.description}</p>
                </div>

                <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">
                  <SlideViewerModal
                    slideNumber={1}
                    slideTitle={doc.title}
                    imageSrc={doc.previewSlide}
                  />
                  <a
                    href="#contact"
                    className="text-[11px] font-semibold text-slate-500 hover:text-[#EA580C]"
                  >
                    Request PDF
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>

      {/* Certificate Viewer Modal */}
      <CertificateViewerModal
        cert={selectedCert}
        isOpen={certModalOpen}
        onClose={() => setCertModalOpen(false)}
      />
    </section>
  );
}
