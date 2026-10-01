"use client";

import React, { useState } from "react";
import {
  HrmsEmployee,
  HrmsAttendanceRecord,
  HrmsLeaveRequest,
  HrmsPayrollSlip,
  HrmsDocumentItem,
  MOCK_COMPANY_CIRCULARS,
} from "@/data/hrms";
import {
  Clock,
  CalendarCheck,
  CreditCard,
  FileText,
  MapPin,
  CheckCircle2,
  HardHat,
  ArrowUpRight,
  ShieldCheck,
  AlertCircle,
  Activity,
  Flame,
  ChevronRight,
  TrendingUp,
} from "lucide-react";
import { HrmsTabKey } from "./HrmsLayout";

interface EmployeeDashboardTabProps {
  user: HrmsEmployee;
  attendance: HrmsAttendanceRecord[];
  leaves: HrmsLeaveRequest[];
  payroll: HrmsPayrollSlip[];
  documents: HrmsDocumentItem[];
  onNavigateTab: (tab: HrmsTabKey) => void;
}

export const EmployeeDashboardTab: React.FC<EmployeeDashboardTabProps> = ({
  user,
  attendance,
  leaves,
  payroll,
  documents,
  onNavigateTab,
}) => {
  const [punchedIn, setPunchedIn] = useState(true);
  const [punchTime, setPunchTime] = useState("08:15 AM");
  const [punchMessage, setPunchMessage] = useState<string | null>(null);

  const latestPay = payroll[0];
  const pendingLeaves = leaves.filter((l) => l.status === "Pending").length;
  const verifiedDocs = documents.filter((d) => d.verified).length;

  const handlePunchToggle = () => {
    if (punchedIn) {
      setPunchedIn(false);
      setPunchMessage("Checked out of 220 KV Ayodhya Switchyard at 05:45 PM. 9.5 hours logged.");
    } else {
      setPunchedIn(true);
      setPunchTime("08:15 AM");
      setPunchMessage("Checked into 220 KV Ayodhya Switchyard with GPS Geotag.");
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Banner: Site Operations Status */}
      <div className="relative overflow-hidden rounded-2xl border border-orange-500/30 bg-gradient-to-r from-orange-950/40 via-slate-900 to-slate-900 p-6 shadow-xl backdrop-blur-xl">
        <div className="relative z-10 flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-md border border-orange-500/40 bg-orange-500/20 px-2.5 py-0.5 text-xs font-bold text-orange-400">
                ACTIVE SITE ASSIGNMENT
              </span>
              <span className="flex items-center text-xs text-emerald-400">
                <span className="mr-1.5 h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Energization Phase: In Progress
              </span>
            </div>
            <h2 className="mt-2 text-xl font-bold text-white sm:text-2xl">
              Welcome back, {user.name}
            </h2>
            <p className="mt-1 flex items-center text-xs text-slate-300">
              <MapPin className="mr-1.5 h-3.5 w-3.5 text-orange-400 shrink-0" />
              <span>Assigned Site: <strong>{user.siteAllocation}</strong></span>
              <span className="mx-2 text-slate-600">&bull;</span>
              <span>Designation: <strong>{user.designation}</strong></span>
            </p>
          </div>

          {/* Quick Site Punch In/Out Action */}
          <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center">
            <div className="rounded-xl border border-slate-700 bg-slate-900/90 px-4 py-2.5 text-xs">
              <div className="text-[10px] uppercase tracking-wider text-slate-400">Shift Schedule</div>
              <div className="font-semibold text-white">Morning Site (08:00 - 17:00)</div>
              <div className="text-[10px] text-emerald-400">
                {punchedIn ? `Punched In at ${punchTime}` : "Currently Checked Out"}
              </div>
            </div>
            <button
              onClick={handlePunchToggle}
              className={`flex items-center space-x-2 rounded-xl px-5 py-3 text-xs font-bold text-white shadow-lg transition ${
                punchedIn
                  ? "bg-rose-600 hover:bg-rose-500 shadow-rose-600/30"
                  : "bg-emerald-600 hover:bg-emerald-500 shadow-emerald-600/30"
              }`}
            >
              <Clock className="h-4 w-4" />
              <span>{punchedIn ? "Punch Out of Site" : "Punch In to Site"}</span>
            </button>
          </div>
        </div>

        {punchMessage && (
          <div className="mt-4 rounded-xl border border-slate-700 bg-slate-950/70 p-3 text-xs text-orange-300">
            {punchMessage}
          </div>
        )}
      </div>

      {/* 4 Core Dashboard KPI Cards (Specification Section 14) */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {/* Card 1: Attendance */}
        <div
          onClick={() => onNavigateTab("attendance")}
          className="group cursor-pointer rounded-2xl border border-slate-800 bg-slate-900/80 p-5 shadow-lg transition-all hover:border-orange-500/40 hover:bg-slate-900 hover:shadow-orange-500/5"
        >
          <div className="flex items-center justify-between">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/10 text-orange-400">
              <Clock className="h-6 w-6" />
            </div>
            <span className="flex items-center text-xs font-semibold text-emerald-400">
              <CheckCircle2 className="mr-1 h-3.5 w-3.5" /> 100% Present
            </span>
          </div>
          <div className="mt-4">
            <div className="text-2xl font-black text-white">7.5 hrs</div>
            <div className="text-xs font-semibold text-slate-300">Today&apos;s Site Attendance</div>
            <div className="mt-1 flex items-center justify-between text-[11px] text-slate-400">
              <span>This Month: 26 Days</span>
              <span className="text-orange-400 group-hover:translate-x-1 transition-transform inline-flex items-center">
                View Log &rarr;
              </span>
            </div>
          </div>
        </div>

        {/* Card 2: Leave Balance */}
        <div
          onClick={() => onNavigateTab("leave")}
          className="group cursor-pointer rounded-2xl border border-slate-800 bg-slate-900/80 p-5 shadow-lg transition-all hover:border-orange-500/40 hover:bg-slate-900 hover:shadow-orange-500/5"
        >
          <div className="flex items-center justify-between">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
              <CalendarCheck className="h-6 w-6" />
            </div>
            {pendingLeaves > 0 && (
              <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-2 py-0.5 text-[10px] font-bold text-amber-400">
                {pendingLeaves} Pending
              </span>
            )}
          </div>
          <div className="mt-4">
            <div className="text-2xl font-black text-white">19 Days</div>
            <div className="text-xs font-semibold text-slate-300">Total Leave Balance</div>
            <div className="mt-1 flex items-center justify-between text-[11px] text-slate-400">
              <span>CL: 4 &bull; EL: 12 &bull; SL: 3</span>
              <span className="text-orange-400 group-hover:translate-x-1 transition-transform inline-flex items-center">
                Apply &rarr;
              </span>
            </div>
          </div>
        </div>

        {/* Card 3: Payslip */}
        <div
          onClick={() => onNavigateTab("payroll")}
          className="group cursor-pointer rounded-2xl border border-slate-800 bg-slate-900/80 p-5 shadow-lg transition-all hover:border-orange-500/40 hover:bg-slate-900 hover:shadow-orange-500/5"
        >
          <div className="flex items-center justify-between">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
              <CreditCard className="h-6 w-6" />
            </div>
            <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-bold text-emerald-400">
              Disbursed
            </span>
          </div>
          <div className="mt-4">
            <div className="text-2xl font-black text-white">₹{latestPay.netPayable.toLocaleString("en-IN")}</div>
            <div className="text-xs font-semibold text-slate-300">
              Latest Net Pay ({latestPay.month} {latestPay.year})
            </div>
            <div className="mt-1 flex items-center justify-between text-[11px] text-slate-400">
              <span>Via PNB A/C ...2910</span>
              <span className="text-orange-400 group-hover:translate-x-1 transition-transform inline-flex items-center">
                Slip PDF &rarr;
              </span>
            </div>
          </div>
        </div>

        {/* Card 4: Documents */}
        <div
          onClick={() => onNavigateTab("documents")}
          className="group cursor-pointer rounded-2xl border border-slate-800 bg-slate-900/80 p-5 shadow-lg transition-all hover:border-orange-500/40 hover:bg-slate-900 hover:shadow-orange-500/5"
        >
          <div className="flex items-center justify-between">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
              <FileText className="h-6 w-6" />
            </div>
            <span className="rounded-full border border-purple-500/30 bg-purple-500/10 px-2 py-0.5 text-[10px] font-bold text-purple-400">
              {verifiedDocs} Verified
            </span>
          </div>
          <div className="mt-4">
            <div className="text-2xl font-black text-white">4 Files</div>
            <div className="text-xs font-semibold text-slate-300">Employee Documents & ID</div>
            <div className="mt-1 flex items-center justify-between text-[11px] text-slate-400">
              <span>CEIG Safety Card Active</span>
              <span className="text-orange-400 group-hover:translate-x-1 transition-transform inline-flex items-center">
                Access &rarr;
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Grid: Live Site Activity + Important Circulars */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Left 2 Cols: Site Execution Status & Shift Log */}
        <div className="space-y-6 lg:col-span-2">
          {/* Site Execution Card */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6 shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center space-x-2">
                <HardHat className="h-5 w-5 text-orange-400" />
                <h3 className="font-bold text-white">Site Manpower & Task Roster</h3>
              </div>
              <button
                onClick={() => onNavigateTab("site-manpower")}
                className="text-xs font-semibold text-orange-400 hover:underline"
              >
                Full Project Roster &rarr;
              </button>
            </div>

            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-3.5">
                <div className="text-[11px] text-slate-400">Site Engineers on Duty</div>
                <div className="mt-1 text-xl font-bold text-white">8 Engineers</div>
                <div className="mt-1 text-[10px] text-emerald-400">Led by Er. Alok Verma</div>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-3.5">
                <div className="text-[11px] text-slate-400">Skilled Laborers Deployed</div>
                <div className="mt-1 text-xl font-bold text-white">45 Technicians</div>
                <div className="mt-1 text-[10px] text-blue-400">Switchyard Bay-4 plinths</div>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-3.5">
                <div className="text-[11px] text-slate-400">Safety Index Score</div>
                <div className="mt-1 text-xl font-bold text-emerald-400">99.4%</div>
                <div className="mt-1 text-[10px] text-slate-400">0 Incident Hours: 142,000</div>
              </div>
            </div>

            {/* Current Site Milestone Checklist */}
            <div className="mt-5 space-y-2.5">
              <div className="text-xs font-bold text-slate-300">Active Task Progress at Ayodhya 220kV</div>
              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-950/40 p-2.5">
                  <div className="flex items-center space-x-2.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                    <span className="text-slate-200">160 MVA Power Transformer Oil Filtration & BDV Testing</span>
                  </div>
                  <span className="rounded bg-emerald-500/20 px-2 py-0.5 text-[10px] font-bold text-emerald-300">
                    Completed
                  </span>
                </div>
                <div className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-950/40 p-2.5">
                  <div className="flex items-center space-x-2.5">
                    <Activity className="h-4 w-4 text-amber-400 shrink-0 animate-pulse" />
                    <span className="text-slate-200">220 KV SF6 Circuit Breaker Timing & Contact Resistance Tests</span>
                  </div>
                  <span className="rounded bg-amber-500/20 px-2 py-0.5 text-[10px] font-bold text-amber-300">
                    In Progress (85%)
                  </span>
                </div>
                <div className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-950/40 p-2.5">
                  <div className="flex items-center space-x-2.5">
                    <Clock className="h-4 w-4 text-slate-500 shrink-0" />
                    <span className="text-slate-400">Differential Protection & Numerical Relay Pre-Commissioning</span>
                  </div>
                  <span className="rounded bg-slate-800 px-2 py-0.5 text-[10px] font-semibold text-slate-400">
                    Scheduled Oct 2
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions Bar */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            <button
              onClick={() => onNavigateTab("leave")}
              className="flex flex-col items-center justify-center rounded-xl border border-slate-800 bg-slate-900/60 p-4 text-center transition hover:border-orange-500/30 hover:bg-slate-900"
            >
              <CalendarCheck className="h-5 w-5 text-orange-400 mb-2" />
              <span className="text-xs font-bold text-white">Apply Leave</span>
              <span className="text-[10px] text-slate-400">CL / EL / Comp-off</span>
            </button>
            <button
              onClick={() => onNavigateTab("payroll")}
              className="flex flex-col items-center justify-center rounded-xl border border-slate-800 bg-slate-900/60 p-4 text-center transition hover:border-orange-500/30 hover:bg-slate-900"
            >
              <CreditCard className="h-5 w-5 text-emerald-400 mb-2" />
              <span className="text-xs font-bold text-white">Download Payslip</span>
              <span className="text-[10px] text-slate-400">Aug 2026 Ready</span>
            </button>
            <button
              onClick={() => onNavigateTab("requests")}
              className="flex flex-col items-center justify-center rounded-xl border border-slate-800 bg-slate-900/60 p-4 text-center transition hover:border-orange-500/30 hover:bg-slate-900"
            >
              <ShieldCheck className="h-5 w-5 text-blue-400 mb-2" />
              <span className="text-xs font-bold text-white">Order Site PPE</span>
              <span className="text-[10px] text-slate-400">Tools & Tackles</span>
            </button>
            <button
              onClick={() => onNavigateTab("documents")}
              className="flex flex-col items-center justify-center rounded-xl border border-slate-800 bg-slate-900/60 p-4 text-center transition hover:border-orange-500/30 hover:bg-slate-900"
            >
              <FileText className="h-5 w-5 text-purple-400 mb-2" />
              <span className="text-xs font-bold text-white">Site ID Card</span>
              <span className="text-[10px] text-slate-400">CEIG Permit</span>
            </button>
          </div>
        </div>

        {/* Right Col: HSE Directives & Company Circulars */}
        <div className="space-y-6">
          {/* Circulars Widget */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6 shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center space-x-2">
                <AlertCircle className="h-5 w-5 text-orange-400" />
                <h3 className="font-bold text-white">Notices & Circulars</h3>
              </div>
              <button
                onClick={() => onNavigateTab("policies")}
                className="text-xs text-orange-400 hover:underline"
              >
                All Policies &rarr;
              </button>
            </div>

            <div className="mt-4 space-y-4">
              {MOCK_COMPANY_CIRCULARS.map((circ) => (
                <div
                  key={circ.id}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 transition hover:border-slate-700"
                >
                  <div className="flex items-center justify-between">
                    <span className="rounded bg-orange-500/10 px-2 py-0.5 text-[10px] font-bold text-orange-400">
                      {circ.priority}
                    </span>
                    <span className="text-[10px] text-slate-500">{circ.date}</span>
                  </div>
                  <h4 className="mt-2 text-xs font-bold text-white leading-snug">
                    {circ.title}
                  </h4>
                  <p className="mt-1 text-[11px] text-slate-400 leading-relaxed">
                    {circ.content}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Site Safety Compliance Meter */}
          <div className="rounded-2xl border border-emerald-500/30 bg-gradient-to-b from-emerald-950/20 to-slate-900 p-6 shadow-xl">
            <div className="flex items-center space-x-2">
              <ShieldCheck className="h-5 w-5 text-emerald-400" />
              <h3 className="font-bold text-white">HSE Golden Rules</h3>
            </div>
            <p className="mt-2 text-xs text-slate-300">
              Zero tolerance for working without PTW (Permit-to-Work) and double earthing in live EHV switchyards.
            </p>
            <div className="mt-4 space-y-2 text-xs">
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-slate-400">Daily Toolbox Talk</span>
                <span className="font-bold text-emerald-400">100% Conducted (08:00 AM)</span>
              </div>
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-slate-400">Dielectric Testing PPE</span>
                <span className="font-bold text-emerald-400">Verified Class-4</span>
              </div>
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-slate-400">CEIG Safety Authorization</span>
                <span className="font-bold text-emerald-400">Valid till 2027</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
