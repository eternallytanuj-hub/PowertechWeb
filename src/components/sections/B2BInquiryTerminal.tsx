"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Send, MapPin, Phone, Mail, Globe, CheckCircle2, MessageSquare, Clock, ShieldCheck, ArrowRight } from "lucide-react";
import { PowertechLogo } from "@/components/ui/PowertechLogo";

export function B2BInquiryTerminal() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    voltageClass: "400/220/132 KV Substations & Switchyards",
    parameters: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const whatsappMessage = encodeURIComponent(
    `*Powertech Engineers - B2B Inquiry*\n\n` +
      `*Representative:* ${formState.name || "N/A"}\n` +
      `*Phone:* ${formState.phone || "N/A"}\n` +
      `*Email:* ${formState.email || "N/A"}\n` +
      `*Category:* ${formState.voltageClass}\n` +
      `*Parameters:* ${formState.parameters || "Project consultation request"}`
  );

  return (
    <section id="contact" className="relative scroll-mt-28 overflow-hidden bg-[#111650] py-20 text-white">
      {/* Circuit Grid Background from Live Site */}
      <div className="hero-circuit-grid absolute inset-0 opacity-25" />
      <div className="absolute inset-0 bg-radial-[circle_at_25%_20%] from-[#f0802030] to-transparent opacity-40" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        {/* Section Heading matching Live Site */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-[#EA580C] animate-pulse" />
            <span className="text-xs font-bold tracking-wider text-white uppercase">
              B2B Business Inquiry Terminal
            </span>
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-5xl">
            Route project parameters directly to the engineering desk
          </h2>
          <p className="mt-4 text-xs leading-relaxed text-white/80 sm:text-sm">
            Share contracting requirements, utility package details, site constraints, voltage class,
            cabling scope, or commissioning timelines for enterprise review.
          </p>
        </div>

        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12">
          {/* Left Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="kinetic-card rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl shadow-2xl sm:p-8">
              {submitted ? (
                <div className="py-10 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                    <CheckCircle2 className="h-10 w-10" />
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-white">Inquiry Parameters Captured!</h3>
                  <p className="mx-auto mt-2 max-w-md text-xs leading-relaxed text-white/80 sm:text-sm">
                    Thank you, {formState.name || "Client"}. Your project scope parameters have been logged.
                    Our technical and tendering desk will evaluate your requirements and reach out via{" "}
                    {formState.phone || formState.email || "your contact channels"}.
                  </p>

                  <div className="mt-6 flex flex-wrap justify-center gap-3">
                    <a
                      href={`https://wa.me/917881163131?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-2.5 text-xs font-bold text-white shadow-md transition hover:bg-emerald-500"
                    >
                      <MessageSquare className="h-4 w-4" />
                      <span>Transmit via WhatsApp Desk</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="rounded-full border border-white/30 bg-white/10 px-5 py-2.5 text-xs font-bold text-white hover:bg-white/20"
                    >
                      Send Another Scope
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="mb-2 flex items-center justify-between border-b border-white/10 pb-3">
                    <span className="text-xs font-bold text-white/90">Enterprise Parameters Form</span>
                    <span className="rounded bg-[#EA580C] px-2 py-0.5 text-[10px] font-bold text-white uppercase">
                      Fast Routing
                    </span>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1 block text-xs font-medium text-white/90">
                        Full Name / Corporate Representative *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Representative name"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full rounded-xl border border-white/20 bg-white/10 px-3.5 py-2.5 text-xs text-white placeholder-white/40 focus:border-[#EA580C] focus:outline-none focus:ring-1 focus:ring-[#EA580C]"
                      />
                    </div>

                    <div>
                      <label className="mb-1 block text-xs font-medium text-white/90">
                        Contact Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="Mobile or office phone"
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        className="w-full rounded-xl border border-white/20 bg-white/10 px-3.5 py-2.5 text-xs text-white placeholder-white/40 focus:border-[#EA580C] focus:outline-none focus:ring-1 focus:ring-[#EA580C]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1 block text-xs font-medium text-white/90">
                        Corporate Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="corporate@domain.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full rounded-xl border border-white/20 bg-white/10 px-3.5 py-2.5 text-xs text-white placeholder-white/40 focus:border-[#EA580C] focus:outline-none focus:ring-1 focus:ring-[#EA580C]"
                      />
                    </div>

                    <div>
                      <label className="mb-1 block text-xs font-medium text-white/90">
                        Voltage Class / Scope Category
                      </label>
                      <select
                        value={formState.voltageClass}
                        onChange={(e) => setFormState({ ...formState, voltageClass: e.target.value })}
                        className="w-full rounded-xl border border-white/20 bg-[#111650] px-3.5 py-2.5 text-xs text-white focus:border-[#EA580C] focus:outline-none focus:ring-1 focus:ring-[#EA580C]"
                      >
                        <option value="400/220/132 KV Substations & Switchyards">
                          Substations & Switchyards up to 400 kV
                        </option>
                        <option value="Overhead Transmission Lines up to 220 kV">
                          Overhead Transmission Lines up to 220 kV
                        </option>
                        <option value="Underground Cabling & Trenchless HDD">
                          Underground Cabling & Trenchless Drilling (HDD)
                        </option>
                        <option value="Industrial Turnkey Electrification">
                          Turnkey Industrial Electrification Projects
                        </option>
                        <option value="Township Electrification (RAPDRP/IPDS/PMDP)">
                          Township Electrification (RAPDRP / IPDS / PMDP)
                        </option>
                        <option value="AMC / Switchyard Breakdown Maintenance">
                          AMC / Breakdown Works of Switchyard / Plant
                        </option>
                        <option value="General Engineering Consultation">
                          General Engineering Consultation
                        </option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="mb-1 block text-xs font-medium text-white/90">
                      Project Scope Parameters *
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Mention voltage class, utility framework, location, cabling/substation scope, timelines, and documentation needs."
                      value={formState.parameters}
                      onChange={(e) => setFormState({ ...formState, parameters: e.target.value })}
                      className="w-full rounded-xl border border-white/20 bg-white/10 p-3.5 text-xs text-white placeholder-white/40 focus:border-[#EA580C] focus:outline-none focus:ring-1 focus:ring-[#EA580C]"
                    />
                  </div>

                  <div className="flex flex-col items-center justify-between gap-3 pt-2 sm:flex-row">
                    <div className="flex items-center gap-2 text-[11px] text-white/70">
                      <ShieldCheck className="h-4 w-4 text-emerald-400" />
                      <span>Direct route to Noida engineering desk</span>
                    </div>

                    <button
                      type="submit"
                      className="magnetic-button inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#EA580C] px-8 py-3 text-xs font-bold text-white shadow-lg transition-all hover:bg-orange-600 sm:w-auto"
                    >
                      <span>Submit Inquiry Parameters</span>
                      <Send className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Dual Administrative Hubs matching live site */}
          <div className="space-y-4 lg:col-span-5">
            <div className="mb-2">
              <span className="text-xs font-bold tracking-wider text-[#EA580C] uppercase">
                Corporate Routing & Hubs
              </span>
              <h3 className="mt-1 text-xl font-bold text-white sm:text-2xl">
                Administrative Hubs
              </h3>
            </div>

            {/* Noida Hub */}
            <div className="kinetic-card electric-lift rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-md overflow-hidden">
              <div className="relative mb-3 h-40 w-full overflow-hidden rounded-xl border border-white/15">
                <Image
                  src="/images/corporate-office.png"
                  alt="Powertech Engineers Corporate Head Office, Noida"
                  fill
                  sizes="(max-width: 1024px) 100vw, 420px"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-2 left-2 flex items-center gap-1.5">
                  <span className="rounded bg-[#EA580C] px-2 py-0.5 text-[9px] font-bold text-white uppercase tracking-wider">
                    Corporate HQ
                  </span>
                  <span className="text-[10px] font-medium text-white/90">E-195, Sector-63, Noida</span>
                </div>
              </div>
              <div className="mb-2 flex items-center justify-between">
                <span className="rounded-md bg-[#EA580C] px-2 py-0.5 text-[10px] font-bold text-white uppercase">
                  Corporate Head Office
                </span>
                <span className="text-[10px] font-bold text-white/60">Noida Hub</span>
              </div>
              <h4 className="text-sm font-bold text-white">E-195, Sector-63, Noida (UP)</h4>
              <p className="mt-1 text-xs text-white/75">
                Noida, Gautam Buddha Nagar, Uttar Pradesh - 201301
              </p>
              <div className="mt-3 flex items-center gap-2 text-xs font-semibold text-white/90">
                <Phone className="h-3.5 w-3.5 text-[#EA580C]" />
                <a href="tel:01204131018" className="hover:text-[#EA580C]">
                  0120-4131018
                </a>
              </div>
            </div>

            {/* Delhi Hub */}
            <div className="kinetic-card electric-lift rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-md">
              <div className="mb-2 flex items-center justify-between">
                <span className="rounded-md bg-emerald-600 px-2 py-0.5 text-[10px] font-bold text-white uppercase">
                  Registered Office
                </span>
                <span className="text-[10px] font-bold text-white/60">Delhi Hub</span>
              </div>
              <h4 className="text-sm font-bold text-white">215, Jagdamba Tower</h4>
              <p className="mt-1 text-xs text-white/75">
                13 Commercial Complex, Preet Vihar, Delhi - 110092
              </p>
              <div className="mt-3 flex items-center gap-2 text-xs font-semibold text-white/90">
                <Phone className="h-3.5 w-3.5 text-[#EA580C]" />
                <a href="tel:9717893182" className="hover:text-[#EA580C]">
                  +91-9717893182 / 9873731300
                </a>
              </div>
            </div>

            {/* Direct Hotlines & Communication Channels */}
            <div className="rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur-md">
              <div className="text-[10px] font-bold tracking-wider text-white/60 uppercase">
                Direct Engineering Hotlines
              </div>
              <div className="mt-2 flex flex-wrap gap-2 text-xs font-bold text-white">
                <a href="tel:9873731300" className="rounded-lg bg-white/10 px-3 py-1.5 hover:bg-white/20">
                  9873731300
                </a>
                <a href="tel:9717893182" className="rounded-lg bg-white/10 px-3 py-1.5 hover:bg-white/20">
                  9717893182
                </a>
                <a href="tel:9971712883" className="rounded-lg bg-white/10 px-3 py-1.5 hover:bg-white/20">
                  9971712883
                </a>
              </div>

              <div className="mt-4 flex flex-col gap-2 text-xs text-white/80 border-t border-white/10 pt-3">
                <div className="flex items-center gap-2">
                  <Mail className="h-3.5 w-3.5 text-[#EA580C]" />
                  <a href="mailto:engineerspowertech1@yahoo.com" className="hover:underline">
                    engineerspowertech1@yahoo.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-3.5 w-3.5 text-emerald-400" />
                  <span>www.powertechengineers.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
