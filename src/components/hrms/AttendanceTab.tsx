"use client";

import React, { useState } from "react";
import { HrmsAttendanceRecord } from "@/data/hrms";
import {
  Clock,
  MapPin,
  Calendar,
  CheckCircle2,
  AlertTriangle,
  ArrowUpRight,
  ShieldCheck,
  Radio,
  FileCheck,
  History,
} from "lucide-react";

interface AttendanceTabProps {
  attendanceRecords: HrmsAttendanceRecord[];
}

export const AttendanceTab: React.FC<AttendanceTabProps> = ({ attendanceRecords }) => {
  const [records, setRecords] = useState<HrmsAttendanceRecord[]>(attendanceRecords);
  const [isCheckedIn, setIsCheckedIn] = useState(true);
  const [todayHours, setTodayHours] = useState(7.5);
  const [punchMessage, setPunchMessage] = useState<string | null>(null);

  const handlePunchToggle = () => {
    if (isCheckedIn) {
      setIsCheckedIn(false);
      setPunchMessage("Punch-Out captured at 05:45 PM for 220 KV Ayodhya Switchyard. 9.5 hours recorded.");
      setRecords((prev) =>
        prev.map((r, i) => (i === 0 ? { ...r, checkOut: "05:45 PM", status: "Present", hoursLogged: 9.5 } : r))
      );
    } else {
      setIsCheckedIn(true);
      setPunchMessage("Punch-In captured at 08:15 AM at Ayodhya Switchyard (GPS: 26.7922° N, 82.1998° E).");
      setRecords((prev) =>
        prev.map((r, i) => (i === 0 ? { ...r, checkIn: "08:15 AM", checkOut: "Active on Site", status: "On Site" } : r))
      );
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Banner: Geotagged Site Punch Terminal */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-6 shadow-xl backdrop-blur-xl">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
          <div>
            <div className="flex items-center space-x-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                EPC SITE GEOTAGGED PUNCH TERMINAL
              </span>
            </div>
            <h2 className="mt-2 text-xl font-black text-white sm:text-2xl">
              220 KV Ayodhya Switchyard Bay-4 Plinth Area
            </h2>
            <div className="mt-1 flex flex-wrap items-center gap-3 text-xs text-slate-400">
              <span className="flex items-center text-orange-400">
                <MapPin className="mr-1 h-3.5 w-3.5" />
                Lat: 26.7922° N, Lon: 82.1998° E (UPPTCL Package)
              </span>
              <span className="text-slate-600">&bull;</span>
              <span>Assigned Shift: <strong>Morning Site (08:00 - 17:00)</strong></span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="rounded-xl border border-slate-700 bg-slate-950/80 px-4 py-2 text-right">
              <div className="text-[10px] text-slate-400 uppercase">Today&apos;s Status</div>
              <div className="font-bold text-white">
                {isCheckedIn ? "Checked In: 08:15 AM" : "Checked Out: 05:45 PM"}
              </div>
              <div className="text-[10px] text-emerald-400">{todayHours} Hours Logged</div>
            </div>

            <button
              onClick={handlePunchToggle}
              className={`flex cursor-pointer items-center space-x-2 rounded-xl px-6 py-3.5 text-xs font-bold text-white shadow-lg transition ${
                isCheckedIn
                  ? "bg-rose-600 hover:bg-rose-500 shadow-rose-600/30"
                  : "bg-emerald-600 hover:bg-emerald-500 shadow-emerald-600/30"
              }`}
            >
              <Clock className="h-4 w-4" />
              <span>{isCheckedIn ? "Record Site Punch Out" : "Record Site Punch In"}</span>
            </button>
          </div>
        </div>

        {punchMessage && (
          <div className="mt-4 flex items-center space-x-2 rounded-xl border border-emerald-500/30 bg-emerald-950/40 p-3 text-xs text-emerald-300">
            <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
            <span>{punchMessage}</span>
          </div>
        )}
      </div>

      {/* Monthly Statistics Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 shadow-lg">
          <div className="text-xs text-slate-400">Total Working Days</div>
          <div className="mt-2 text-2xl font-black text-white">26 Days</div>
          <div className="mt-1 text-[11px] text-emerald-400">September 2026 Cycle</div>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 shadow-lg">
          <div className="text-xs text-slate-400">Present on Site</div>
          <div className="mt-2 text-2xl font-black text-emerald-400">24 Days</div>
          <div className="mt-1 text-[11px] text-slate-400">100% Punctuality Score</div>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 shadow-lg">
          <div className="text-xs text-slate-400">Overtime / Shutdowns</div>
          <div className="mt-2 text-2xl font-black text-amber-400">2 Days (24 hrs)</div>
          <div className="mt-1 text-[11px] text-amber-300">Pre-Commissioning Testing</div>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 shadow-lg">
          <div className="text-xs text-slate-400">Cumulative Hours Logged</div>
          <div className="mt-2 text-2xl font-black text-white">218.5 hrs</div>
          <div className="mt-1 text-[11px] text-slate-400">Standard Mandate: 208 hrs</div>
        </div>
      </div>

      {/* Attendance History Table */}
      <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80 shadow-xl">
        <div className="flex items-center justify-between border-b border-slate-800 p-6">
          <div className="flex items-center space-x-2">
            <History className="h-5 w-5 text-orange-400" />
            <h3 className="font-bold text-white">September 2026 Site Attendance Log</h3>
          </div>
          <span className="text-xs text-slate-400">Showing last 5 site shifts</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="border-b border-slate-800 bg-slate-950/60 text-slate-400">
              <tr>
                <th className="py-3.5 px-6 font-semibold">Date</th>
                <th className="py-3.5 px-6 font-semibold">Shift Timing</th>
                <th className="py-3.5 px-6 font-semibold">Site Location</th>
                <th className="py-3.5 px-6 font-semibold">In Time</th>
                <th className="py-3.5 px-6 font-semibold">Out Time</th>
                <th className="py-3.5 px-6 font-semibold">Hours</th>
                <th className="py-3.5 px-6 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {records.map((r) => (
                <tr key={r.id} className="transition hover:bg-slate-800/40">
                  <td className="py-3.5 px-6 font-mono font-medium text-white">{r.date}</td>
                  <td className="py-3.5 px-6 text-slate-300">{r.shift}</td>
                  <td className="py-3.5 px-6 text-slate-300 flex items-center">
                    <MapPin className="mr-1.5 h-3.5 w-3.5 text-orange-400 shrink-0" />
                    <span>{r.siteLocation}</span>
                  </td>
                  <td className="py-3.5 px-6 font-mono text-emerald-400">{r.checkIn}</td>
                  <td className="py-3.5 px-6 font-mono text-slate-300">{r.checkOut}</td>
                  <td className="py-3.5 px-6 font-mono font-semibold text-white">{r.hoursLogged} hrs</td>
                  <td className="py-3.5 px-6">
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-bold ${
                        r.status === "On Site"
                          ? "border border-emerald-500/40 bg-emerald-500/10 text-emerald-400"
                          : r.status === "Present"
                          ? "border border-blue-500/40 bg-blue-500/10 text-blue-400"
                          : r.status === "Overtime"
                          ? "border border-amber-500/40 bg-amber-500/10 text-amber-400"
                          : "border border-slate-700 bg-slate-800 text-slate-400"
                      }`}
                    >
                      {r.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Night Shutdown & Special Shift Protocol Note */}
      <div className="flex items-start space-x-3 rounded-2xl border border-amber-500/30 bg-amber-950/20 p-5 text-xs text-amber-200">
        <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-400" />
        <div>
          <h4 className="font-bold text-amber-300">Night Shutdown Shift Protocol (IS 5216 Compliance)</h4>
          <p className="mt-1 leading-relaxed text-amber-200/90">
            For planned night shutdown operations involving busbar tie-ins or line cuts, engineers must pre-log Permit-to-Work (PTW) numbers with the utility grid sub-station operator prior to starting overtime logs.
          </p>
        </div>
      </div>
    </div>
  );
};
