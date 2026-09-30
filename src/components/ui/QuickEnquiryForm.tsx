"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, MessageSquare, Phone } from "lucide-react";

export function QuickEnquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    serviceType: "Substations and Switchyards up to 400 kV",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission / show confirmation
    setSubmitted(true);
  };

  const services = [
    "Substations and Switchyards up to 400 kV",
    "Under ground cable laying including Trenchless Drilling",
    "Over head Transmission Lines up to 220 kV",
    "AMC / Breakdown works of Switchyard / plant",
    "Turnkey projects of Industrial electrification",
    "Township Electrification (RAPDRP, IPDS, PMDP)",
    "General Engineering Inquiry",
  ];

  const whatsappMessage = encodeURIComponent(
    `Hello Powertech Engineers,\n\nMy Name: ${formData.name || "[Your Name]"}\nContact: ${formData.phone || "[Phone]"}\nRequirement: ${formData.serviceType}\nDetails: ${formData.message || "[Inquiry details]"}`
  );

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold text-[#071D36]">Submit Project Enquiry</h3>
          <p className="text-xs text-slate-500">
            Directly connect with our Noida & Delhi engineering teams
          </p>
        </div>
        <span className="rounded-full bg-orange-100 px-3 py-1 text-[11px] font-bold text-orange-700">
          Fast Response
        </span>
      </div>

      {submitted ? (
        <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-6 text-center">
          <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-600" />
          <h4 className="mt-3 text-base font-bold text-slate-900">Enquiry Received!</h4>
          <p className="mt-1 text-xs text-slate-600">
            Thank you, {formData.name || "Client"}. Our engineering team will review your
            requirements and reach out shortly at{" "}
            {formData.phone || formData.email || "your contact details"}.
          </p>
          <div className="mt-4 flex flex-col justify-center gap-2 sm:flex-row">
            <a
              href={`https://wa.me/917881163131?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-4 py-2 text-xs font-bold text-white shadow hover:bg-emerald-700"
            >
              <MessageSquare className="mr-1.5 h-4 w-4" />
              Send Copy to WhatsApp
            </a>
            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50"
            >
              Submit Another Inquiry
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="block text-xs font-semibold text-slate-700">
                Contact Person / Organization *
              </label>
              <input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g., Rajesh Sharma / State Discom"
                className="mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2 text-xs text-slate-900 focus:border-[#EA580C] focus:ring-1 focus:ring-[#EA580C] focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-xs font-semibold text-slate-700">
                Phone / Mobile Number *
              </label>
              <input
                id="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="e.g., 0120-4131018 / 7881163131"
                className="mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2 text-xs text-slate-900 focus:border-[#EA580C] focus:ring-1 focus:ring-[#EA580C] focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="email" className="block text-xs font-semibold text-slate-700">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="e.g., yourname@domain.com"
                className="mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2 text-xs text-slate-900 focus:border-[#EA580C] focus:ring-1 focus:ring-[#EA580C] focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="serviceType" className="block text-xs font-semibold text-slate-700">
                Scope / Service Area
              </label>
              <select
                id="serviceType"
                value={formData.serviceType}
                onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                className="mt-1 block w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900 focus:border-[#EA580C] focus:ring-1 focus:ring-[#EA580C] focus:outline-none"
              >
                {services.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-xs font-semibold text-slate-700">
              Project Brief / Technical Requirements
            </label>
            <textarea
              id="message"
              rows={3}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Specify voltage level (e.g. 220 KV / 33 KV), location, tentative timeline, or scope..."
              className="mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2 text-xs text-slate-900 focus:border-[#EA580C] focus:ring-1 focus:ring-[#EA580C] focus:outline-none"
            />
          </div>

          <div className="flex flex-col items-center justify-between gap-3 pt-2 sm:flex-row">
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-lg bg-[#EA580C] px-5 py-2.5 text-xs font-bold text-white shadow transition hover:bg-orange-700 focus:outline-none sm:w-auto"
            >
              <Send className="mr-2 h-4 w-4" />
              Submit Direct Enquiry
            </button>

            <a
              href={`https://wa.me/917881163131?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center rounded-lg border border-emerald-300 bg-emerald-50 px-4 py-2.5 text-xs font-bold text-emerald-800 transition hover:bg-emerald-100 sm:w-auto"
            >
              <MessageSquare className="mr-1.5 h-4 w-4 text-emerald-600" />
              Instant WhatsApp Enquiry
            </a>
          </div>
        </form>
      )}
    </div>
  );
}
