"use client";

import React, { useState } from "react";
import { HrmsLeaveRequest } from "@/data/hrms";
import {
  CalendarCheck,
  PlusCircle,
  Clock,
  CheckCircle2,
  XCircle,
  AlertCircle,
  X,
  Send,
  UserCheck,
} from "lucide-react";

interface LeaveTabProps {
  leaveRequests: HrmsLeaveRequest[];
}

export const LeaveTab: React.FC<LeaveTabProps> = ({ leaveRequests }) => {
  const [requests, setRequests] = useState<HrmsLeaveRequest[]>(leaveRequests);
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);

  // Form State
  const [leaveType, setLeaveType] = useState<
    "Casual Leave (CL)" | "Earned Leave (EL)" | "Sick Leave (SL)" | "Site Comp-Off"
  >("Casual Leave (CL)");
  const [fromDate, setFromDate] = useState("2026-10-20");
  const [toDate, setToDate] = useState("2026-10-22");
  const [reason, setReason] = useState("");
  const [substituteEngineer, setSubstituteEngineer] = useState(
    "Er. Suresh Singh (Lead Site Engineer)"
  );
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  const handleSubmitLeave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reason.trim()) return;

    const newRequest: HrmsLeaveRequest = {
      id: `LR-2026-${Math.floor(100 + Math.random() * 900)}`,
      employeeId: "PTE-EMP-1048",
      employeeName: "Er. Alok Verma",
      type: leaveType,
      fromDate,
      toDate,
      days: 3,
      reason,
      substituteEngineer,
      status: "Pending",
      appliedOn: "2026-09-30",
    };

    setRequests([newRequest, ...requests]);
    setIsApplyModalOpen(false);
    setReason("");
    setSuccessMsg(
      `Leave request ${newRequest.id} submitted successfully to Project Director & HR Desk.`
    );
    setTimeout(() => setSuccessMsg(null), 5000);
  };

  return (
    <div className="space-y-6">
      {/* Header & Apply CTA */}
      <div className="flex flex-col justify-between gap-4 rounded-2xl border border-slate-800 bg-slate-900/90 p-6 shadow-xl sm:flex-row sm:items-center">
        <div>
          <h2 className="text-xl font-bold text-white">Site Leave & Comp-Off Portal</h2>
          <p className="mt-1 text-xs text-slate-400">
            Apply for planned leaves, statutory earned leave, or trial charging comp-offs.
          </p>
        </div>

        <button
          onClick={() => setIsApplyModalOpen(true)}
          className="flex cursor-pointer items-center space-x-2 rounded-xl bg-orange-600 px-5 py-3 text-xs font-bold text-white shadow-lg shadow-orange-600/30 transition hover:bg-orange-500"
        >
          <PlusCircle className="h-4 w-4" />
          <span>Apply For Leave</span>
        </button>
      </div>

      {successMsg && (
        <div className="flex items-center space-x-2 rounded-xl border border-emerald-500/30 bg-emerald-950/40 p-3.5 text-xs text-emerald-300">
          <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
          <span>{successMsg}</span>
        </div>
      )}

      {/* Leave Balances Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {/* Casual Leave */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 shadow-lg">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-300">Casual Leave (CL)</span>
            <span className="rounded bg-orange-500/10 px-2 py-0.5 text-[10px] font-bold text-orange-400">
              Annual 8
            </span>
          </div>
          <div className="mt-3 flex items-baseline space-x-2">
            <span className="text-3xl font-black text-white">4</span>
            <span className="text-xs text-slate-400">Days Left</span>
          </div>
          <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-slate-800">
            <div className="h-full bg-orange-500 rounded-full" style={{ width: "50%" }}></div>
          </div>
        </div>

        {/* Earned Leave */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 shadow-lg">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-300">Earned Leave (EL)</span>
            <span className="rounded bg-blue-500/10 px-2 py-0.5 text-[10px] font-bold text-blue-400">
              Annual 15
            </span>
          </div>
          <div className="mt-3 flex items-baseline space-x-2">
            <span className="text-3xl font-black text-white">12</span>
            <span className="text-xs text-slate-400">Days Left</span>
          </div>
          <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-slate-800">
            <div className="h-full bg-blue-500 rounded-full" style={{ width: "80%" }}></div>
          </div>
        </div>

        {/* Sick Leave */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 shadow-lg">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-300">Sick Leave (SL)</span>
            <span className="rounded bg-emerald-500/10 px-2 py-0.5 text-[10px] font-bold text-emerald-400">
              Annual 7
            </span>
          </div>
          <div className="mt-3 flex items-baseline space-x-2">
            <span className="text-3xl font-black text-white">5</span>
            <span className="text-xs text-slate-400">Days Left</span>
          </div>
          <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-slate-800">
            <div className="h-full bg-emerald-500 rounded-full" style={{ width: "71%" }}></div>
          </div>
        </div>

        {/* Site Comp-Off */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 shadow-lg">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-300">Site Comp-Off</span>
            <span className="rounded bg-purple-500/10 px-2 py-0.5 text-[10px] font-bold text-purple-400">
              Accrued
            </span>
          </div>
          <div className="mt-3 flex items-baseline space-x-2">
            <span className="text-3xl font-black text-white">2</span>
            <span className="text-xs text-slate-400">Days Left</span>
          </div>
          <div className="mt-3 text-[10px] text-purple-300">
            Earned for 72-hr Ayodhya trial charging
          </div>
        </div>
      </div>

      {/* Leave Application History Table */}
      <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80 shadow-xl">
        <div className="border-b border-slate-800 p-6">
          <h3 className="font-bold text-white">Leave Application History & Approval Desk</h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="border-b border-slate-800 bg-slate-950/60 text-slate-400">
              <tr>
                <th className="py-3.5 px-6 font-semibold">Request ID</th>
                <th className="py-3.5 px-6 font-semibold">Leave Type</th>
                <th className="py-3.5 px-6 font-semibold">Period</th>
                <th className="py-3.5 px-6 font-semibold">Days</th>
                <th className="py-3.5 px-6 font-semibold">Reason</th>
                <th className="py-3.5 px-6 font-semibold">Substitute Site Engineer</th>
                <th className="py-3.5 px-6 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {requests.map((r) => (
                <tr key={r.id} className="transition hover:bg-slate-800/40">
                  <td className="py-3.5 px-6 font-mono font-bold text-white">{r.id}</td>
                  <td className="py-3.5 px-6 font-semibold text-slate-200">{r.type}</td>
                  <td className="py-3.5 px-6 font-mono text-slate-300">
                    {r.fromDate} &rarr; {r.toDate}
                  </td>
                  <td className="py-3.5 px-6 font-mono text-white">{r.days} Days</td>
                  <td className="py-3.5 px-6 text-slate-400 max-w-xs truncate">{r.reason}</td>
                  <td className="py-3.5 px-6 text-slate-300 flex items-center">
                    <UserCheck className="mr-1.5 h-3.5 w-3.5 text-blue-400 shrink-0" />
                    <span>{r.substituteEngineer}</span>
                  </td>
                  <td className="py-3.5 px-6">
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-bold ${
                        r.status === "Approved"
                          ? "border border-emerald-500/40 bg-emerald-500/10 text-emerald-400"
                          : r.status === "Pending"
                          ? "border border-amber-500/40 bg-amber-500/10 text-amber-400"
                          : "border border-rose-500/40 bg-rose-500/10 text-rose-400"
                      }`}
                    >
                      {r.status === "Approved" && <CheckCircle2 className="mr-1 h-3 w-3" />}
                      {r.status === "Pending" && <Clock className="mr-1 h-3 w-3" />}
                      {r.status === "Rejected" && <XCircle className="mr-1 h-3 w-3" />}
                      {r.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal: Apply Leave */}
      {isApplyModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md">
          <div className="w-full max-w-lg rounded-3xl border border-slate-700 bg-slate-900 p-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center space-x-2">
                <CalendarCheck className="h-5 w-5 text-orange-400" />
                <h3 className="text-base font-bold text-white">Apply for Site Leave</h3>
              </div>
              <button
                onClick={() => setIsApplyModalOpen(false)}
                className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-800 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleSubmitLeave} className="mt-4 space-y-4 text-xs">
              <div>
                <label className="mb-1 block font-semibold text-slate-300">Leave Category</label>
                <select
                  value={leaveType}
                  onChange={(e) => setLeaveType(e.target.value as any)}
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-2.5 text-xs text-white focus:border-orange-500 focus:outline-none"
                >
                  <option value="Casual Leave (CL)">Casual Leave (CL) - 4 Days Balance</option>
                  <option value="Earned Leave (EL)">Earned Leave (EL) - 12 Days Balance</option>
                  <option value="Sick Leave (SL)">Sick Leave (SL) - 5 Days Balance</option>
                  <option value="Site Comp-Off">Site Comp-Off - 2 Days Accrued</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="mb-1 block font-semibold text-slate-300">From Date</label>
                  <input
                    type="date"
                    required
                    value={fromDate}
                    onChange={(e) => setFromDate(e.target.value)}
                    className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-2.5 text-xs text-white focus:border-orange-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="mb-1 block font-semibold text-slate-300">To Date</label>
                  <input
                    type="date"
                    required
                    value={toDate}
                    onChange={(e) => setToDate(e.target.value)}
                    className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-2.5 text-xs text-white focus:border-orange-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1 block font-semibold text-slate-300">
                  Substitute Site Engineer (Mandatory for EPC Site Safety)
                </label>
                <input
                  type="text"
                  required
                  value={substituteEngineer}
                  onChange={(e) => setSubstituteEngineer(e.target.value)}
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-2.5 text-xs text-white focus:border-orange-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="mb-1 block font-semibold text-slate-300">Reason for Leave</label>
                <textarea
                  rows={3}
                  required
                  placeholder="Detail the operational handover and reason for absence..."
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-2.5 text-xs text-white focus:border-orange-500 focus:outline-none"
                />
              </div>

              <div className="flex justify-end space-x-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsApplyModalOpen(false)}
                  className="rounded-xl border border-slate-700 px-4 py-2 text-xs font-semibold text-slate-300 hover:bg-slate-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex items-center space-x-2 rounded-xl bg-orange-600 px-5 py-2 text-xs font-bold text-white shadow-lg shadow-orange-600/30 hover:bg-orange-500"
                >
                  <Send className="h-3.5 w-3.5" />
                  <span>Submit Leave Application</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
