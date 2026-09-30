"use client";

import React, { useState } from "react";
import {
  BookOpen,
  ShieldCheck,
  Calendar,
  AlertCircle,
  Download,
  FileText,
  ChevronDown,
  ChevronRight,
  HardHat,
  Flame,
} from "lucide-react";
import { MOCK_COMPANY_CIRCULARS } from "@/data/hrms";

export const CompanyPoliciesTab: React.FC = () => {
  const [activeSection, setActiveSection] = useState<"hse" | "hr" | "holidays" | "circulars">("hse");

  const holidays2026 = [
    { date: "26 Jan 2026", day: "Monday", name: "Republic Day", type: "National Holiday" },
    { date: "17 Mar 2026", day: "Tuesday", name: "Holi", type: "Gazetted Holiday" },
    { date: "15 Aug 2026", day: "Saturday", name: "Independence Day", type: "National Holiday" },
    { date: "02 Oct 2026", day: "Friday", name: "Gandhi Jayanti", type: "National Holiday" },
    { date: "20 Oct 2026", day: "Tuesday", name: "Dussehra (Maha Navami)", type: "Gazetted Holiday" },
    { date: "08 Nov 2026", day: "Sunday", name: "Diwali (Deepavali)", type: "Gazetted Holiday" },
    { date: "25 Dec 2026", day: "Friday", name: "Christmas Day", type: "Gazetted Holiday" },
  ];

  return (
    <div className="space-y-6">
      {/* Top Navigation Filter Tabs */}
      <div className="flex flex-wrap gap-2 rounded-2xl border border-slate-800 bg-slate-900/80 p-2">
        <button
          onClick={() => setActiveSection("hse")}
          className={`flex items-center space-x-2 rounded-xl px-4 py-2 text-xs font-bold transition ${
            activeSection === "hse"
              ? "bg-orange-600 text-white shadow-md shadow-orange-600/20"
              : "text-slate-400 hover:text-white"
          }`}
        >
          <ShieldCheck className="h-4 w-4" />
          <span>HSE Electrical Safety Manual</span>
        </button>
        <button
          onClick={() => setActiveSection("hr")}
          className={`flex items-center space-x-2 rounded-xl px-4 py-2 text-xs font-bold transition ${
            activeSection === "hr"
              ? "bg-orange-600 text-white shadow-md shadow-orange-600/20"
              : "text-slate-400 hover:text-white"
          }`}
        >
          <BookOpen className="h-4 w-4" />
          <span>HR Employment Policies</span>
        </button>
        <button
          onClick={() => setActiveSection("holidays")}
          className={`flex items-center space-x-2 rounded-xl px-4 py-2 text-xs font-bold transition ${
            activeSection === "holidays"
              ? "bg-orange-600 text-white shadow-md shadow-orange-600/20"
              : "text-slate-400 hover:text-white"
          }`}
        >
          <Calendar className="h-4 w-4" />
          <span>2026 Holiday Calendar</span>
        </button>
        <button
          onClick={() => setActiveSection("circulars")}
          className={`flex items-center space-x-2 rounded-xl px-4 py-2 text-xs font-bold transition ${
            activeSection === "circulars"
              ? "bg-orange-600 text-white shadow-md shadow-orange-600/20"
              : "text-slate-400 hover:text-white"
          }`}
        >
          <AlertCircle className="h-4 w-4" />
          <span>Circulars & Operational Notices</span>
        </button>
      </div>

      {/* Section: HSE Electrical Safety Manual */}
      {activeSection === "hse" && (
        <div className="space-y-6">
          <div className="rounded-2xl border border-emerald-500/30 bg-gradient-to-r from-emerald-950/20 via-slate-900 to-slate-900 p-6 shadow-xl">
            <div className="flex items-center space-x-3">
              <ShieldCheck className="h-7 w-7 text-emerald-400" />
              <div>
                <h3 className="text-lg font-bold text-white">
                  Powertech HSE High-Voltage Safety Manual (Rev 4.2)
                </h3>
                <p className="text-xs text-slate-300">
                  Compliant with Central Electricity Authority (CEA) Regulations 2010 & Indian Standard IS 5216.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 shadow-lg">
              <div className="flex items-center space-x-2 text-xs font-bold text-orange-400 mb-2">
                <HardHat className="h-4 w-4" />
                <span>Permit-To-Work (PTW) Mandate</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                No work is permitted on energized or potentially energized circuits without an authorized PTW countersigned by the utility grid executive engineer and verified isolation line earth points.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 shadow-lg">
              <div className="flex items-center space-x-2 text-xs font-bold text-emerald-400 mb-2">
                <ShieldCheck className="h-4 w-4" />
                <span>Class-4 Dielectric PPE Requirement</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Mandatory usage of 36 kV tested dielectric gloves, safety boots with composite toe protection, and arc-flash face shields during all substation relay testing and switchgear maintenance.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 shadow-lg">
              <div className="flex items-center space-x-2 text-xs font-bold text-blue-400 mb-2">
                <Flame className="h-4 w-4" />
                <span>Double Earth Pit Grounding Protocol</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                All high-voltage transformer neutrals, lightning arrestors, and metallic switchyard gantries must be grounded via twin independent earthing leads measuring &lt; 1.0 Ohm impedance.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 shadow-lg">
              <div className="flex items-center space-x-2 text-xs font-bold text-purple-400 mb-2">
                <AlertCircle className="h-4 w-4" />
                <span>Emergency Incident Reporting</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Any near-miss or electrical hazard must be reported to the Corporate HSE Desk within 120 minutes via the service requests portal or emergency helpline 0120-4131018.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Section: HR Policies */}
      {activeSection === "hr" && (
        <div className="space-y-4">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6 shadow-xl">
            <h3 className="font-bold text-white text-base">Key Corporate HR Guidelines</h3>
            <div className="mt-4 space-y-4 text-xs">
              <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                <h4 className="font-bold text-white">Site Hardship & Relocation Allowance Policy</h4>
                <p className="mt-1 text-slate-400 leading-relaxed">
                  Engineers posted to remote transmission corridors or greenfield substation projects (e.g., Ayodhya, Western UP, Rajouri) are entitled to monthly site allowances, verified guesthouse lodging, and utility commute support.
                </p>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                <h4 className="font-bold text-white">Compensatory Offs for Continuous Trial Energization</h4>
                <p className="mt-1 text-slate-400 leading-relaxed">
                  When project milestones require 48 to 72 hours of uninterrupted observation during transformer heat-run or trial charging, engineers accrue site comp-offs at 1.5x regular rest rates.
                </p>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                <h4 className="font-bold text-white">Provident Fund & Group Medical Coverage</h4>
                <p className="mt-1 text-slate-400 leading-relaxed">
                  All permanent and site-contract staff are covered under the Employees&apos; Provident Fund (EPF) Act and covered under our comprehensive group hospitalization policy with cashless utility site tie-ups.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Section: 2026 Holiday Calendar */}
      {activeSection === "holidays" && (
        <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80 shadow-xl">
          <div className="border-b border-slate-800 p-6">
            <h3 className="font-bold text-white">2026 Official Holiday Calendar</h3>
            <p className="mt-1 text-xs text-slate-400">
              Applicable to Corporate Office Noida and Regional Project Field Offices.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="border-b border-slate-800 bg-slate-950/60 text-slate-400">
                <tr>
                  <th className="py-3.5 px-6 font-semibold">Date</th>
                  <th className="py-3.5 px-6 font-semibold">Day</th>
                  <th className="py-3.5 px-6 font-semibold">Holiday Occasion</th>
                  <th className="py-3.5 px-6 font-semibold">Type</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {holidays2026.map((h, i) => (
                  <tr key={i} className="transition hover:bg-slate-800/40">
                    <td className="py-3.5 px-6 font-mono font-bold text-white">{h.date}</td>
                    <td className="py-3.5 px-6 text-slate-300">{h.day}</td>
                    <td className="py-3.5 px-6 font-medium text-white">{h.name}</td>
                    <td className="py-3.5 px-6">
                      <span className="rounded-full border border-orange-500/30 bg-orange-500/10 px-2.5 py-0.5 text-[11px] font-bold text-orange-400">
                        {h.type}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Section: Circulars & Operational Notices */}
      {activeSection === "circulars" && (
        <div className="space-y-4">
          {MOCK_COMPANY_CIRCULARS.map((circ) => (
            <div
              key={circ.id}
              className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6 shadow-xl"
            >
              <div className="flex items-center justify-between">
                <span className="rounded bg-orange-500/10 px-2.5 py-1 text-xs font-bold text-orange-400">
                  {circ.priority}
                </span>
                <span className="font-mono text-xs text-slate-400">{circ.date}</span>
              </div>
              <h3 className="mt-3 text-sm font-bold text-white">{circ.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-300">{circ.content}</p>
              <div className="mt-4 flex items-center justify-between border-t border-slate-800 pt-3 text-[11px] text-slate-500">
                <span>Circular Code: {circ.id}</span>
                <span>Issued by: Corporate Operations & HR Directorate</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
