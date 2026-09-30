"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { careerPositionsData } from "@/data/careers";
import { CareerPosition } from "@/types";
import {
  Briefcase,
  MapPin,
  Clock,
  Upload,
  CheckCircle2,
  Users,
  Award,
  Sparkles,
  ArrowRight,
  Send,
} from "lucide-react";

export function CareersSection() {
  const [selectedJob, setSelectedJob] = useState<CareerPosition | null>(careerPositionsData[0]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    qualification: "B.Tech / B.E. (Electrical)",
    experience: "3 - 5 Years",
    position: careerPositionsData[0].title,
    preferredLocation: "Noida / Regional Site",
    notes: "",
  });
  const [fileName, setFileName] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
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
      id="careers"
      className="relative overflow-hidden border-b border-white/10 bg-slate-900 py-20 text-white sm:py-24"
    >
      <div className="hero-circuit-grid pointer-events-none absolute inset-0 opacity-15" />

      <Container className="relative z-10">
        {/* Careers Hero Banner */}
        <div className="relative mb-16 overflow-hidden rounded-3xl border border-white/20 bg-[#0a1224] p-8 shadow-2xl sm:p-12">
          <div className="absolute inset-0 z-0 opacity-20">
            <Image
              src="/hero-images/hero-substation.jpg"
              alt="Engineering site team"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a1224] via-[#0a1224]/90 to-transparent" />
          </div>

          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-xs font-bold tracking-wider text-[#f08020] uppercase backdrop-blur-md">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#EA580C]" />
              <span>Section 16 &bull; Careers & People</span>
            </div>
            <h2 className="text-3xl leading-tight font-black tracking-tight text-white sm:text-5xl">
              BUILD YOUR CAREER WHERE POWER INFRASTRUCTURE GETS BUILT.
            </h2>
            <p className="max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
              Join a 20-year legacy of engineering technocrats executing India’s most critical 400
              kV substations, EHV transmission towers, and high-tech trenchless cable corridors.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#open-positions"
                className="inline-flex items-center gap-2 rounded-full bg-[#EA580C] px-7 py-3 text-xs font-bold text-white shadow-lg transition hover:bg-orange-600 sm:text-sm"
              >
                <span>View Opportunities</span>
                <ArrowRight className="h-4 w-4" />
              </a>
              <span className="text-xs text-slate-400">
                Permanent roles &bull; NABL-grade training &bull; State utility exposure
              </span>
            </div>
          </div>
        </div>

        {/* 2-Column Section: Open Positions on Left, Recruitment Application Form on Right */}
        <div id="open-positions" className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          {/* Left Column: Open Positions List */}
          <div className="space-y-4 lg:col-span-6">
            <div className="mb-2 flex items-center justify-between">
              <div>
                <span className="font-mono text-xs font-bold tracking-widest text-[#f08020] uppercase">
                  Current Openings
                </span>
                <h3 className="text-xl font-bold text-white">Engineering Vacancies</h3>
              </div>
              <span className="rounded-full border border-emerald-500/30 bg-emerald-500/20 px-3 py-1 text-xs font-bold text-emerald-400">
                {careerPositionsData.length} Active Openings
              </span>
            </div>

            <div className="space-y-3">
              {careerPositionsData.map((job) => {
                const isSelected = selectedJob?.id === job.id;

                return (
                  <div
                    key={job.id}
                    onClick={() => {
                      setSelectedJob(job);
                      setFormData((prev) => ({ ...prev, position: job.title }));
                    }}
                    className={`cursor-pointer rounded-2xl border p-5 transition-all ${
                      isSelected
                        ? "border-[#EA580C] bg-[#0f1a33] shadow-lg ring-1 ring-orange-500/30"
                        : "border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <span className="text-[10px] font-bold tracking-wider text-[#EA580C] uppercase">
                          {job.department}
                        </span>
                        <h4 className="mt-0.5 text-base font-bold text-white">{job.title}</h4>
                      </div>
                      <span className="shrink-0 rounded bg-white/10 px-2 py-0.5 text-[10px] font-bold text-slate-300">
                        {job.type}
                      </span>
                    </div>

                    <div className="mt-2.5 flex flex-wrap items-center gap-3 text-xs text-slate-400">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3 w-3 text-[#f08020]" />
                        {job.location}
                      </span>
                      <span>&bull;</span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3 text-[#f08020]" />
                        {job.experienceRequired}
                      </span>
                    </div>

                    <p className="mt-3 line-clamp-2 text-xs leading-relaxed text-slate-300">
                      {job.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Public Recruitment Form */}
          <div className="rounded-2xl border border-white/20 bg-[#0c1427] p-6 shadow-2xl sm:p-8 lg:col-span-6">
            <div className="mb-6 border-b border-white/10 pb-4">
              <span className="font-mono text-[10px] font-bold tracking-widest text-[#f08020] uppercase">
                Public Recruitment Gateway
              </span>
              <h3 className="mt-0.5 text-xl font-bold text-white">Submit Your Resume</h3>
              <p className="mt-1 text-xs text-slate-400">
                Applying for: <strong className="text-white">{formData.position}</strong>
              </p>
            </div>

            {submitted ? (
              <div className="space-y-3 rounded-xl border border-emerald-500/30 bg-emerald-950/30 p-6 text-center">
                <CheckCircle2 className="mx-auto h-10 w-10 text-emerald-400" />
                <h4 className="text-base font-bold text-white">Application Received!</h4>
                <p className="text-xs leading-relaxed text-slate-300">
                  Thank you, <strong>{formData.name}</strong>. Your profile has been routed to
                  Powertech’s technical HR desk in Noida. We will contact you shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="rounded-lg bg-white/10 px-4 py-2 text-xs font-semibold text-white hover:bg-white/20"
                >
                  Submit Another Profile
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div>
                  <label className="mb-1 block font-semibold text-slate-300">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Er. Rohit Verma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-white placeholder:text-slate-500 focus:border-[#EA580C] focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block font-semibold text-slate-300">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="engineer@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-white placeholder:text-slate-500 focus:border-[#EA580C] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block font-semibold text-slate-300">
                      Contact Phone *
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

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block font-semibold text-slate-300">
                      Highest Qualification
                    </label>
                    <select
                      value={formData.qualification}
                      onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
                      className="w-full rounded-xl border border-white/15 bg-[#091124] px-4 py-2.5 text-white focus:border-[#EA580C] focus:outline-none"
                    >
                      <option>B.Tech / B.E. (Electrical)</option>
                      <option>M.Tech (Power Systems)</option>
                      <option>Diploma in Electrical Engg</option>
                      <option>B.Tech / Diploma (Civil)</option>
                      <option>Safety / HSE Certification</option>
                    </select>
                  </div>
                  <div>
                    <label className="mb-1 block font-semibold text-slate-300">
                      Total Experience
                    </label>
                    <select
                      value={formData.experience}
                      onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                      className="w-full rounded-xl border border-white/15 bg-[#091124] px-4 py-2.5 text-white focus:border-[#EA580C] focus:outline-none"
                    >
                      <option>Fresh Graduate / 0 - 1 Yr</option>
                      <option>1 - 3 Years</option>
                      <option>3 - 5 Years</option>
                      <option>5 - 8 Years</option>
                      <option>8+ Years</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="mb-1 block font-semibold text-slate-300">
                    Preferred Location
                  </label>
                  <input
                    type="text"
                    value={formData.preferredLocation}
                    onChange={(e) =>
                      setFormData({ ...formData, preferredLocation: e.target.value })
                    }
                    placeholder="e.g. Noida / Western UP / Central UP / J&K"
                    className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-white placeholder:text-slate-500 focus:border-[#EA580C] focus:outline-none"
                  />
                </div>

                {/* Resume Upload Box */}
                <div>
                  <label className="mb-1 block font-semibold text-slate-300">
                    Resume Upload (PDF / DOCX)
                  </label>
                  <div className="relative flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-white/20 bg-white/5 p-4 text-center transition hover:border-[#EA580C]">
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="absolute inset-0 cursor-pointer opacity-0"
                    />
                    <Upload className="mb-1 h-6 w-6 text-[#f08020]" />
                    {fileName ? (
                      <span className="text-xs font-semibold text-emerald-400">{fileName}</span>
                    ) : (
                      <>
                        <span className="text-xs font-semibold text-white">
                          Click or drag resume file here
                        </span>
                        <span className="text-[10px] text-slate-400">
                          PDF, DOC, DOCX up to 10MB
                        </span>
                      </>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#EA580C] py-3 text-xs font-bold text-white shadow-lg shadow-orange-600/30 transition hover:bg-orange-600 disabled:opacity-50 sm:text-sm"
                >
                  {isSubmitting ? (
                    <span>Routing Application to HR Desk...</span>
                  ) : (
                    <>
                      <span>Submit Application</span>
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
