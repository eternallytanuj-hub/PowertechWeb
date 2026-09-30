"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import {
  Phone,
  Mail,
  MapPin,
  Building,
  Upload,
  Send,
  CheckCircle2,
  MessageSquare,
  Clock,
  ShieldCheck,
  Zap,
} from "lucide-react";

export function ContactB2BSection() {
  const [enquiryType, setEnquiryType] = useState<"business" | "tender">("business");
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    location: "",
    projectType: "Substation (Turnkey EPC)",
    voltageLevel: "220 kV / 132 kV",
    requirement: "",
    message: "",
  });
  const [uploadedFile, setUploadedFile] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFile(e.target.files[0].name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#070b19] py-20 text-white sm:py-24"
    >
      {/* Background Graphic Grid */}
      <div className="hero-circuit-grid pointer-events-none absolute inset-0 opacity-15" />

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-xs font-bold tracking-wider text-[#f08020] uppercase backdrop-blur-md">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#EA580C]" />
            <span>Section 18 &bull; Business & Tender Enquiry</span>
          </div>
          <h2 className="text-3xl leading-tight font-black tracking-tight text-white sm:text-5xl">
            LET&apos;S POWER THE NEXT PROJECT.
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
            Direct routing to the Powertech Corporate Coordination Cell in Noida for utility
            tenders, EPC turnkey packages, and industrial electrification.
          </p>
        </div>

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          {/* Left Column: Office Coordinates & Direct Hotlines */}
          <div className="space-y-6 lg:col-span-5">
            {/* Corporate Head Office Card */}
            <div className="space-y-4 rounded-2xl border border-white/15 bg-[#0b1328] p-6 shadow-xl">
              <div className="flex items-center space-x-3 border-b border-white/10 pb-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#EA580C]/30 bg-[#EA580C]/20 text-[#EA580C]">
                  <Building className="h-5 w-5" />
                </div>
                <div>
                  <span className="font-mono text-[10px] font-bold tracking-widest text-[#f08020] uppercase">
                    Headquarters
                  </span>
                  <h3 className="text-base font-bold text-white">Corporate Head Office, Noida</h3>
                </div>
              </div>

              <div className="space-y-3 text-xs text-slate-300">
                <div className="flex items-start space-x-2.5">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#EA580C]" />
                  <span>
                    <strong>E-195, Sector-63, Noida</strong>, Uttar Pradesh (PIN: 201301), India
                  </span>
                </div>

                <div className="flex items-center space-x-2.5">
                  <Phone className="h-4 w-4 shrink-0 text-[#EA580C]" />
                  <a href="tel:01204131018" className="font-mono font-semibold hover:text-white">
                    Board: 0120-4131018
                  </a>
                </div>

                <div className="flex items-center space-x-2.5">
                  <Zap className="h-4 w-4 shrink-0 text-[#0066FF]" />
                  <a href="tel:9873731300" className="font-mono font-semibold hover:text-white">
                    Engineering Hotline: 9873731300
                  </a>
                </div>

                <div className="flex items-center space-x-2.5">
                  <MessageSquare className="h-4 w-4 shrink-0 text-emerald-400" />
                  <a
                    href="https://wa.me/917881163131"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono font-semibold text-emerald-400 hover:text-emerald-300"
                  >
                    Direct WhatsApp: 7881163131
                  </a>
                </div>

                <div className="flex items-center space-x-2.5">
                  <Mail className="h-4 w-4 shrink-0 text-[#EA580C]" />
                  <a
                    href="mailto:engineerspowertech1@yahoo.com"
                    className="font-mono hover:text-white"
                  >
                    engineerspowertech1@yahoo.com
                  </a>
                </div>
              </div>

              <div className="border-t border-white/5 pt-2 text-[11px] text-slate-400">
                Operating Hours: Mon - Sat &bull; 09:30 AM to 06:30 PM IST
              </div>
            </div>

            {/* Registered Office Hub Card */}
            <div className="space-y-3 rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-center space-x-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-500/20 text-sky-400">
                  <Building className="h-4 w-4" />
                </div>
                <div>
                  <span className="font-mono text-[10px] font-bold text-sky-400 uppercase">
                    Registered Hub
                  </span>
                  <h4 className="text-sm font-bold text-white">
                    Delhi Operations & Registration Desk
                  </h4>
                </div>
              </div>
              <p className="text-xs leading-relaxed text-slate-300">
                Registered office facility coordinating statutory filings, licensing compliance, and
                northern regional utility logistics.
              </p>
            </div>

            {/* Institutional Trust Badge */}
            <div className="flex items-center space-x-3 rounded-xl border border-emerald-500/30 bg-emerald-950/20 p-4 text-xs text-emerald-300">
              <ShieldCheck className="h-5 w-5 shrink-0 text-emerald-400" />
              <span>
                <strong>Confidential B2B Processing:</strong> All tender documents, Single Line
                Diagrams, and BOQ submissions remain protected under strict professional
                confidentiality.
              </span>
            </div>
          </div>

          {/* Right Column: Business & Tender Enquiry Form */}
          <div className="rounded-2xl border border-white/20 bg-[#0c1427] p-6 shadow-2xl sm:p-8 lg:col-span-7">
            {/* Tab Selector */}
            <div className="mb-6 flex border-b border-white/10 pb-2 text-xs font-bold">
              <button
                type="button"
                onClick={() => setEnquiryType("business")}
                className={`cursor-pointer border-b-2 px-4 pb-2.5 transition ${
                  enquiryType === "business"
                    ? "border-[#EA580C] text-[#EA580C]"
                    : "border-transparent text-slate-400 hover:text-white"
                }`}
              >
                Business & Project Enquiry
              </button>
              <button
                type="button"
                onClick={() => setEnquiryType("tender")}
                className={`cursor-pointer border-b-2 px-4 pb-2.5 transition ${
                  enquiryType === "tender"
                    ? "border-[#EA580C] text-[#EA580C]"
                    : "border-transparent text-slate-400 hover:text-white"
                }`}
              >
                Tender & BOQ Submission Desk
              </button>
            </div>

            {submitted ? (
              <div className="space-y-3 rounded-xl border border-emerald-500/30 bg-emerald-950/30 p-8 text-center">
                <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-400" />
                <h3 className="text-lg font-bold text-white">Enquiry Successfully Dispatched!</h3>
                <p className="mx-auto max-w-md text-xs leading-relaxed text-slate-300">
                  Thank you, <strong>{formData.name}</strong> from{" "}
                  <strong>{formData.company || "your organization"}</strong>. Your project mandate
                  has been logged directly into the Powertech Engineers B2B Terminal. Our chief
                  project engineer will review and respond within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="rounded-lg bg-white/10 px-5 py-2 text-xs font-bold text-white hover:bg-white/20"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block font-semibold text-slate-300">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Er. Rajesh Gupta"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-white placeholder:text-slate-500 focus:border-[#EA580C] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block font-semibold text-slate-300">
                      Company / Utility Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. State Transmission Board / EPC Developer"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-white placeholder:text-slate-500 focus:border-[#EA580C] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block font-semibold text-slate-300">
                      Corporate Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="corporate.email@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-white placeholder:text-slate-500 focus:border-[#EA580C] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block font-semibold text-slate-300">
                      Direct Phone / Mobile *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-white placeholder:text-slate-500 focus:border-[#EA580C] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                  <div>
                    <label className="mb-1 block font-semibold text-slate-300">
                      Project Location
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Uttar Pradesh, J&K, Bihar"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-white placeholder:text-slate-500 focus:border-[#EA580C] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block font-semibold text-slate-300">Project Type</label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full rounded-xl border border-white/15 bg-[#091124] px-3 py-2.5 text-white focus:border-[#EA580C] focus:outline-none"
                    >
                      <option>Substation (Turnkey EPC)</option>
                      <option>Transmission Lines (Overhead)</option>
                      <option>Underground Cabling (HDD)</option>
                      <option>Distribution Feeder Package</option>
                      <option>Industrial Electrification</option>
                      <option>Testing & Commissioning</option>
                    </select>
                  </div>
                  <div>
                    <label className="mb-1 block font-semibold text-slate-300">Voltage Level</label>
                    <select
                      value={formData.voltageLevel}
                      onChange={(e) => setFormData({ ...formData, voltageLevel: e.target.value })}
                      className="w-full rounded-xl border border-white/15 bg-[#091124] px-3 py-2.5 text-white focus:border-[#EA580C] focus:outline-none"
                    >
                      <option>400 kV EHV</option>
                      <option>220 kV EHV</option>
                      <option>132 kV Transmission</option>
                      <option>33 kV Sub-transmission</option>
                      <option>11 kV Distribution</option>
                      <option>415 V LT / Industrial</option>
                    </select>
                  </div>
                </div>

                {/* Tender / BOQ File Upload */}
                <div>
                  <label className="mb-1 block font-semibold text-slate-300">
                    Attach Tender Document / BOQ / Single Line Diagram (Optional)
                  </label>
                  <div className="relative flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-white/20 bg-white/5 p-4 text-center transition hover:border-[#EA580C]">
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx,.xls,.xlsx,.dwg,.zip"
                      onChange={handleFileChange}
                      className="absolute inset-0 cursor-pointer opacity-0"
                    />
                    <Upload className="mb-1 h-6 w-6 text-[#f08020]" />
                    {uploadedFile ? (
                      <span className="font-mono text-xs font-semibold text-emerald-400">
                        {uploadedFile} (Ready for Transmission)
                      </span>
                    ) : (
                      <>
                        <span className="text-xs font-semibold text-white">
                          Drag and drop Tender Document / BOQ / SLD here
                        </span>
                        <span className="text-[10px] text-slate-400">
                          PDF, Excel, DWG or ZIP up to 25MB
                        </span>
                      </>
                    )}
                  </div>
                </div>

                <div>
                  <label className="mb-1 block font-semibold text-slate-300">
                    Scope Requirement / Message
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Provide details regarding the scope of work, timeline, and execution requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-white placeholder:text-slate-500 focus:border-[#EA580C] focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#EA580C] py-3.5 text-xs font-bold text-white shadow-lg shadow-orange-600/30 transition hover:bg-orange-600 disabled:opacity-50 sm:text-sm"
                >
                  {isSubmitting ? (
                    <span>Submitting to Corporate Coordination Desk...</span>
                  ) : (
                    <>
                      <span>Submit Enterprise Enquiry</span>
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
