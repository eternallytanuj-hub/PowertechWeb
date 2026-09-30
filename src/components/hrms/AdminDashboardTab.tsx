"use client";

import React, { useState } from "react";
import {
  HrmsEmployee,
  HrmsLeaveRequest,
  MOCK_CURRENT_USER,
  MOCK_LEAVE_REQUESTS,
} from "@/data/hrms";
import {
  ShieldAlert,
  Users,
  CheckCircle2,
  XCircle,
  Clock,
  Search,
  Building,
  UserCheck,
  CreditCard,
  Briefcase,
  AlertCircle,
  Filter,
} from "lucide-react";

export const AdminDashboardTab: React.FC = () => {
  // Pending leaves state for interactive approval/rejection
  const [leaveQueue, setLeaveQueue] = useState<HrmsLeaveRequest[]>([
    ...MOCK_LEAVE_REQUESTS,
    {
      id: "LR-2026-104",
      employeeId: "PTE-EMP-1062",
      employeeName: "Er. Deepak Yadav",
      type: "Casual Leave (CL)",
      fromDate: "2026-10-15",
      toDate: "2026-10-18",
      days: 4,
      reason: "Family function in Varanasi after HDD cabling milestone completion",
      substituteEngineer: "Er. Nitin Joshi",
      status: "Pending",
      appliedOn: "2026-09-30",
    },
  ]);

  // Employee Master Directory Mock
  const [employees, setEmployees] = useState([
    MOCK_CURRENT_USER,
    {
      id: "PTE-EMP-1021",
      name: "Er. Suresh Singh",
      designation: "Lead Transmission & Substation Engineer",
      department: "Substations" as const,
      role: "Project Manager" as const,
      email: "suresh.singh@powertechengineers.com",
      phone: "+91 98737 31302",
      joinDate: "05 Jun 2017",
      siteAllocation: "Western UP 220 KV Corridors",
      employmentType: "Permanent" as const,
      salary: {
        basic: 65000,
        hra: 26000,
        siteAllowance: 20000,
        specialAllowance: 12000,
        pfDeduction: 7800,
        taxTds: 6200,
        netPay: 109000,
      },
      bankDetails: {
        bankName: "Punjab National Bank",
        accountNumber: "0847000100481109",
        ifscCode: "PUNB0084700",
        branch: "Sector-63 Noida",
      },
      statutory: {
        pfUan: "101489201109",
        esiNumber: "Exempt",
        panNumber: "BCDEF2345G",
      },
      emergencyContact: {
        name: "Mrs. Meena Singh",
        relationship: "Spouse",
        phone: "+91 98711 33445",
      },
    },
    {
      id: "PTE-EMP-1062",
      name: "Er. Deepak Yadav",
      designation: "Senior Trenchless HDD Cabling Specialist",
      department: "Underground Cabling" as const,
      role: "Site Engineer" as const,
      email: "deepak.yadav@powertechengineers.com",
      phone: "+91 98737 31305",
      joinDate: "14 Feb 2021",
      siteAllocation: "Agra Urban Trenchless HDD HT Cabling",
      employmentType: "Permanent" as const,
      salary: {
        basic: 48000,
        hra: 19200,
        siteAllowance: 14000,
        specialAllowance: 8500,
        pfDeduction: 5760,
        taxTds: 3800,
        netPay: 80140,
      },
      bankDetails: {
        bankName: "Punjab National Bank",
        accountNumber: "0847000100483321",
        ifscCode: "PUNB0084700",
        branch: "Sector-63 Noida",
      },
      statutory: {
        pfUan: "101489203321",
        esiNumber: "Exempt",
        panNumber: "CDEFG3456H",
      },
      emergencyContact: {
        name: "Mr. Ramakant Yadav",
        relationship: "Father",
        phone: "+91 98711 44556",
      },
    },
    {
      id: "PTE-EMP-1088",
      name: "Er. Vikram Rana",
      designation: "Distribution Infrastructure Project Lead",
      department: "Transmission" as const,
      role: "Project Manager" as const,
      email: "vikram.rana@powertechengineers.com",
      phone: "+91 98737 31308",
      joinDate: "10 Aug 2022",
      siteAllocation: "Rajouri Urban Electrification & Feeder Modernization",
      employmentType: "Permanent" as const,
      salary: {
        basic: 55000,
        hra: 22000,
        siteAllowance: 18000,
        specialAllowance: 9500,
        pfDeduction: 6600,
        taxTds: 4900,
        netPay: 93000,
      },
      bankDetails: {
        bankName: "Punjab National Bank",
        accountNumber: "0847000100485542",
        ifscCode: "PUNB0084700",
        branch: "Sector-63 Noida",
      },
      statutory: {
        pfUan: "101489205542",
        esiNumber: "Exempt",
        panNumber: "DEFGH4567I",
      },
      emergencyContact: {
        name: "Mrs. Kavita Rana",
        relationship: "Spouse",
        phone: "+91 98711 55667",
      },
    },
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDept, setSelectedDept] = useState("All");
  const [actionNotice, setActionNotice] = useState<string | null>(null);

  const handleApprove = (id: string, empName: string) => {
    setLeaveQueue((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status: "Approved" } : item))
    );
    setActionNotice(`Approved leave request ${id} for ${empName}. System notification issued.`);
    setTimeout(() => setActionNotice(null), 4000);
  };

  const handleReject = (id: string, empName: string) => {
    setLeaveQueue((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status: "Rejected" } : item))
    );
    setActionNotice(`Rejected leave request ${id} for ${empName}. Substitute review initiated.`);
    setTimeout(() => setActionNotice(null), 4000);
  };

  const filteredEmployees = employees.filter((emp) => {
    const matchesSearch =
      emp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      emp.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      emp.siteAllocation.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDept = selectedDept === "All" || emp.department === selectedDept;
    return matchesSearch && matchesDept;
  });

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="relative overflow-hidden rounded-2xl border border-purple-500/30 bg-gradient-to-r from-purple-950/30 via-slate-900 to-slate-900 p-6 shadow-xl">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <div className="flex items-center space-x-2">
              <span className="rounded bg-purple-500/20 border border-purple-500/40 px-2.5 py-0.5 text-xs font-bold text-purple-400">
                ADMINISTRATION & OPERATIONS CONTROL
              </span>
              <span className="text-xs text-slate-400">Central HRMS ERP Desk</span>
            </div>
            <h2 className="mt-2 text-2xl font-black text-white sm:text-3xl">
              Powertech Corporate HR & Admin Desk
            </h2>
            <p className="mt-1 text-xs text-slate-300">
              Manage employee master rosters, leave approvals, payroll batches, and site allocations across company projects.
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <div className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-2.5 text-xs">
              <div className="text-[10px] uppercase text-slate-400">Total Workforce</div>
              <div className="font-black text-white text-lg">185+ Personnel</div>
            </div>
          </div>
        </div>

        {actionNotice && (
          <div className="mt-4 flex items-center space-x-2 rounded-xl border border-emerald-500/30 bg-emerald-950/40 p-3 text-xs text-emerald-300">
            <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
            <span>{actionNotice}</span>
          </div>
        )}
      </div>

      {/* Pending Leave Approvals Queue */}
      <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80 shadow-xl">
        <div className="flex items-center justify-between border-b border-slate-800 p-6">
          <div className="flex items-center space-x-2">
            <Clock className="h-5 w-5 text-amber-400" />
            <h3 className="font-bold text-white">Pending Leave Approval Queue</h3>
          </div>
          <span className="rounded-full bg-amber-500/10 border border-amber-500/30 px-2.5 py-0.5 text-xs font-bold text-amber-400">
            {leaveQueue.filter((l) => l.status === "Pending").length} Requests Pending Action
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="border-b border-slate-800 bg-slate-950/60 text-slate-400">
              <tr>
                <th className="py-3.5 px-6 font-semibold">Ref ID</th>
                <th className="py-3.5 px-6 font-semibold">Employee</th>
                <th className="py-3.5 px-6 font-semibold">Leave Type</th>
                <th className="py-3.5 px-6 font-semibold">Duration</th>
                <th className="py-3.5 px-6 font-semibold">Substitute Site Engineer</th>
                <th className="py-3.5 px-6 font-semibold">Status</th>
                <th className="py-3.5 px-6 font-semibold text-right">Admin Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {leaveQueue.map((req) => (
                <tr key={req.id} className="transition hover:bg-slate-800/40">
                  <td className="py-3.5 px-6 font-mono font-bold text-white">{req.id}</td>
                  <td className="py-3.5 px-6">
                    <div className="font-bold text-white">{req.employeeName}</div>
                    <div className="text-[10px] text-slate-400 font-mono">{req.employeeId}</div>
                  </td>
                  <td className="py-3.5 px-6 text-slate-200">{req.type}</td>
                  <td className="py-3.5 px-6 font-mono text-slate-300">
                    {req.fromDate} &rarr; {req.toDate} ({req.days}d)
                  </td>
                  <td className="py-3.5 px-6 text-slate-300">{req.substituteEngineer}</td>
                  <td className="py-3.5 px-6">
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-bold ${
                        req.status === "Approved"
                          ? "border border-emerald-500/40 bg-emerald-500/10 text-emerald-400"
                          : req.status === "Pending"
                          ? "border border-amber-500/40 bg-amber-500/10 text-amber-400"
                          : "border border-rose-500/40 bg-rose-500/10 text-rose-400"
                      }`}
                    >
                      {req.status}
                    </span>
                  </td>
                  <td className="py-3.5 px-6 text-right">
                    {req.status === "Pending" ? (
                      <div className="flex items-center justify-end space-x-2">
                        <button
                          onClick={() => handleApprove(req.id, req.employeeName)}
                          className="cursor-pointer rounded-lg bg-emerald-600/20 border border-emerald-500/30 px-3 py-1 font-bold text-emerald-300 hover:bg-emerald-600/40"
                        >
                          Approve
                        </button>
                        <button
                          onClick={() => handleReject(req.id, req.employeeName)}
                          className="cursor-pointer rounded-lg bg-rose-600/20 border border-rose-500/30 px-3 py-1 font-bold text-rose-300 hover:bg-rose-600/40"
                        >
                          Reject
                        </button>
                      </div>
                    ) : (
                      <span className="text-[11px] text-slate-500">Processed</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Employee Master Directory */}
      <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80 shadow-xl">
        <div className="flex flex-col justify-between gap-4 border-b border-slate-800 p-6 md:flex-row md:items-center">
          <div>
            <h3 className="font-bold text-white">Employee Master Directory</h3>
            <p className="mt-0.5 text-xs text-slate-400">
              Electrical engineers, project managers, and site specialists.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Search Input */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-500" />
              <input
                type="text"
                placeholder="Search name, ID, or site..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="rounded-xl border border-slate-700 bg-slate-950 py-2 pl-9 pr-4 text-xs text-white placeholder:text-slate-500 focus:border-purple-500 focus:outline-none"
              />
            </div>

            {/* Department Filter */}
            <select
              value={selectedDept}
              onChange={(e) => setSelectedDept(e.target.value)}
              className="rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-white focus:border-purple-500 focus:outline-none"
            >
              <option value="All">All Departments</option>
              <option value="Substations">Substations</option>
              <option value="Transmission">Transmission</option>
              <option value="Underground Cabling">Underground Cabling</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="border-b border-slate-800 bg-slate-950/60 text-slate-400">
              <tr>
                <th className="py-3.5 px-6 font-semibold">Employee ID</th>
                <th className="py-3.5 px-6 font-semibold">Name & Role</th>
                <th className="py-3.5 px-6 font-semibold">Department</th>
                <th className="py-3.5 px-6 font-semibold">Assigned Project Site</th>
                <th className="py-3.5 px-6 font-semibold">Monthly Net Pay</th>
                <th className="py-3.5 px-6 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {filteredEmployees.map((emp) => (
                <tr key={emp.id} className="transition hover:bg-slate-800/40">
                  <td className="py-3.5 px-6 font-mono font-bold text-purple-400">{emp.id}</td>
                  <td className="py-3.5 px-6">
                    <div className="font-bold text-white">{emp.name}</div>
                    <div className="text-[10px] text-slate-400">{emp.designation}</div>
                  </td>
                  <td className="py-3.5 px-6 text-slate-300">{emp.department}</td>
                  <td className="py-3.5 px-6 text-orange-400 font-medium">{emp.siteAllocation}</td>
                  <td className="py-3.5 px-6 font-mono text-emerald-400 font-bold">
                    ₹{emp.salary.netPay.toLocaleString("en-IN")}
                  </td>
                  <td className="py-3.5 px-6">
                    <span className="rounded-full bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-0.5 text-[10px] font-bold text-emerald-400">
                      Active
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
