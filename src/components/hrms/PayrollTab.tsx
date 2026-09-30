"use client";

import React, { useState } from "react";
import { HrmsEmployee, HrmsPayrollSlip } from "@/data/hrms";
import {
  CreditCard,
  Download,
  Printer,
  X,
  FileCheck,
  Building,
  Receipt,
  PlusCircle,
  CheckCircle2,
  DollarSign,
  TrendingDown,
  TrendingUp,
} from "lucide-react";
import { PowertechLogo } from "@/components/ui/PowertechLogo";

interface PayrollTabProps {
  user: HrmsEmployee;
  payrollSlips: HrmsPayrollSlip[];
}

export const PayrollTab: React.FC<PayrollTabProps> = ({ user, payrollSlips }) => {
  const [selectedSlip, setSelectedSlip] = useState<HrmsPayrollSlip | null>(null);
  const [reimbursementModal, setReimbursementModal] = useState(false);
  const [claimCategory, setClaimCategory] = useState("Site Local Conveyance & Tolls");
  const [claimAmount, setClaimAmount] = useState("");
  const [claimDescription, setClaimDescription] = useState("");
  const [claimSuccess, setClaimSuccess] = useState<string | null>(null);

  const latest = payrollSlips[0];

  const handleClaimSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setReimbursementModal(false);
    setClaimSuccess(
      `Reimbursement claim of ₹${Number(claimAmount).toLocaleString("en-IN")} submitted for Finance verification.`
    );
    setClaimAmount("");
    setClaimDescription("");
    setTimeout(() => setClaimSuccess(null), 5000);
  };

  return (
    <div className="space-y-6">
      {/* Top Banner: Latest Salary Disbursed */}
      <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 p-6 shadow-xl">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <div>
            <div className="flex items-center space-x-2">
              <span className="rounded bg-emerald-500/20 border border-emerald-500/40 px-2.5 py-0.5 text-xs font-bold text-emerald-400">
                SALARY DISBURSED
              </span>
              <span className="text-xs text-slate-400">
                Disbursed on {latest.paymentDate} via PNB
              </span>
            </div>
            <h2 className="mt-2 text-2xl font-black text-white sm:text-3xl">
              ₹{latest.netPayable.toLocaleString("en-IN")}
            </h2>
            <p className="mt-1 text-xs text-slate-300">
              Net Take-Home Pay for <strong>{latest.month} {latest.year}</strong> (Eighty-Six Thousand Two Hundred Sixty Rupees)
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setSelectedSlip(latest)}
              className="flex cursor-pointer items-center space-x-2 rounded-xl bg-orange-600 px-5 py-3 text-xs font-bold text-white shadow-lg shadow-orange-600/30 transition hover:bg-orange-500"
            >
              <FileCheck className="h-4 w-4" />
              <span>View August 2026 Payslip</span>
            </button>

            <button
              onClick={() => setReimbursementModal(true)}
              className="flex cursor-pointer items-center space-x-2 rounded-xl border border-slate-700 bg-slate-800/80 px-4 py-3 text-xs font-semibold text-slate-200 transition hover:bg-slate-700"
            >
              <Receipt className="h-4 w-4 text-orange-400" />
              <span>Claim Reimbursement</span>
            </button>
          </div>
        </div>

        {claimSuccess && (
          <div className="mt-4 flex items-center space-x-2 rounded-xl border border-emerald-500/30 bg-emerald-950/40 p-3 text-xs text-emerald-300">
            <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
            <span>{claimSuccess}</span>
          </div>
        )}
      </div>

      {/* Salary Breakdown Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 shadow-lg">
          <div className="flex items-center justify-between text-slate-400 text-xs">
            <span>Gross Monthly Earnings</span>
            <TrendingUp className="h-4 w-4 text-emerald-400" />
          </div>
          <div className="mt-2 text-2xl font-black text-white">
            ₹{user.salary.basic + user.salary.hra + user.salary.siteAllowance + user.salary.specialAllowance}
          </div>
          <div className="mt-1 text-[11px] text-slate-400">
            Includes ₹{user.salary.siteAllowance.toLocaleString("en-IN")} Substation Site Allowance
          </div>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 shadow-lg">
          <div className="flex items-center justify-between text-slate-400 text-xs">
            <span>Statutory & Tax Deductions</span>
            <TrendingDown className="h-4 w-4 text-rose-400" />
          </div>
          <div className="mt-2 text-2xl font-black text-rose-400">
            ₹{(user.salary.pfDeduction + user.salary.taxTds).toLocaleString("en-IN")}
          </div>
          <div className="mt-1 text-[11px] text-slate-400">
            PF (₹{user.salary.pfDeduction.toLocaleString("en-IN")}) + TDS (₹{user.salary.taxTds.toLocaleString("en-IN")})
          </div>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 shadow-lg">
          <div className="flex items-center justify-between text-slate-400 text-xs">
            <span>Disbursement Route</span>
            <Building className="h-4 w-4 text-blue-400" />
          </div>
          <div className="mt-2 text-xl font-bold text-white">
            Punjab National Bank
          </div>
          <div className="mt-1 text-[11px] text-slate-400 font-mono">
            A/C: ...2910 &bull; Sector-63 Noida
          </div>
        </div>
      </div>

      {/* Salary History Table */}
      <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80 shadow-xl">
        <div className="border-b border-slate-800 p-6">
          <h3 className="font-bold text-white">Salary Slips & Disbursal History</h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="border-b border-slate-800 bg-slate-950/60 text-slate-400">
              <tr>
                <th className="py-3.5 px-6 font-semibold">Slip ID</th>
                <th className="py-3.5 px-6 font-semibold">Month & Year</th>
                <th className="py-3.5 px-6 font-semibold">Gross Pay</th>
                <th className="py-3.5 px-6 font-semibold">Deductions</th>
                <th className="py-3.5 px-6 font-semibold">Net Pay</th>
                <th className="py-3.5 px-6 font-semibold">Payment Date</th>
                <th className="py-3.5 px-6 font-semibold">Status</th>
                <th className="py-3.5 px-6 font-semibold text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {payrollSlips.map((slip) => (
                <tr key={slip.id} className="transition hover:bg-slate-800/40">
                  <td className="py-3.5 px-6 font-mono font-bold text-white">{slip.id}</td>
                  <td className="py-3.5 px-6 font-semibold text-slate-200">
                    {slip.month} {slip.year}
                  </td>
                  <td className="py-3.5 px-6 font-mono text-slate-300">
                    ₹{slip.grossEarnings.toLocaleString("en-IN")}
                  </td>
                  <td className="py-3.5 px-6 font-mono text-rose-300">
                    -₹{slip.totalDeductions.toLocaleString("en-IN")}
                  </td>
                  <td className="py-3.5 px-6 font-mono font-bold text-emerald-400">
                    ₹{slip.netPayable.toLocaleString("en-IN")}
                  </td>
                  <td className="py-3.5 px-6 text-slate-400">{slip.paymentDate}</td>
                  <td className="py-3.5 px-6">
                    <span className="inline-flex items-center rounded-full border border-emerald-500/40 bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-bold text-emerald-400">
                      <CheckCircle2 className="mr-1 h-3 w-3" />
                      {slip.status}
                    </span>
                  </td>
                  <td className="py-3.5 px-6 text-right">
                    <button
                      onClick={() => setSelectedSlip(slip)}
                      className="cursor-pointer font-bold text-orange-400 hover:text-orange-300 hover:underline"
                    >
                      View Slip &rarr;
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Payslip Modal (Section 14: Salary Slip Details) */}
      {selectedSlip && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md">
          <div className="max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-slate-700 bg-slate-900 p-8 shadow-2xl text-slate-200">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center space-x-3">
                <PowertechLogo variant="light" height={28} className="h-7 w-auto" />
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Official Salary Certificate
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => window.print()}
                  className="rounded-lg border border-slate-700 p-2 text-slate-400 hover:bg-slate-800 hover:text-white"
                  title="Print / Save PDF"
                >
                  <Printer className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setSelectedSlip(null)}
                  className="rounded-lg border border-slate-700 p-2 text-slate-400 hover:bg-slate-800 hover:text-white"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Slip Letterhead */}
            <div className="mt-6 text-center border-b border-slate-800 pb-6">
              <h2 className="text-lg font-black text-white tracking-wide">
                POWERTECH ENGINEERS
              </h2>
              <p className="text-[11px] text-slate-400">
                Electrical EPC, Substation & Transmission Contractors &bull; Class-A Licensed
              </p>
              <p className="text-[11px] text-slate-400">
                Corporate Office: Sector-63, Noida - 201301 (U.P.) &bull; Tel: 0120-4131018
              </p>
              <div className="mt-3 inline-block rounded-full border border-orange-500/40 bg-orange-500/10 px-4 py-1 text-xs font-bold text-orange-400">
                Payslip for {selectedSlip.month} {selectedSlip.year}
              </div>
            </div>

            {/* Employee Particulars Grid */}
            <div className="mt-6 grid grid-cols-2 gap-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4 text-xs">
              <div>
                <span className="text-slate-400">Employee Name:</span>{" "}
                <strong className="text-white">{user.name}</strong>
              </div>
              <div>
                <span className="text-slate-400">Employee ID:</span>{" "}
                <strong className="font-mono text-white">{user.id}</strong>
              </div>
              <div>
                <span className="text-slate-400">Designation:</span>{" "}
                <strong className="text-white">{user.designation}</strong>
              </div>
              <div>
                <span className="text-slate-400">Department:</span>{" "}
                <strong className="text-white">{user.department}</strong>
              </div>
              <div>
                <span className="text-slate-400">Site Assignment:</span>{" "}
                <span className="text-orange-400 font-medium">{user.siteAllocation}</span>
              </div>
              <div>
                <span className="text-slate-400">PF UAN:</span>{" "}
                <span className="font-mono text-white">{user.statutory.pfUan}</span>
              </div>
              <div>
                <span className="text-slate-400">Bank & A/C:</span>{" "}
                <span className="text-white">PNB (...{user.bankDetails.accountNumber.slice(-4)})</span>
              </div>
              <div>
                <span className="text-slate-400">PAN Number:</span>{" "}
                <span className="font-mono text-white">{user.statutory.panNumber}</span>
              </div>
            </div>

            {/* Earnings & Deductions Columns */}
            <div className="mt-6 grid grid-cols-2 gap-4 text-xs">
              {/* Earnings */}
              <div className="rounded-xl border border-slate-800 bg-slate-950/40 p-4">
                <div className="border-b border-slate-800 pb-2 font-bold text-emerald-400">
                  Earnings
                </div>
                <div className="mt-3 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Basic Pay</span>
                    <span className="font-mono text-white">₹{user.salary.basic.toLocaleString("en-IN")}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">House Rent Allowance (HRA)</span>
                    <span className="font-mono text-white">₹{user.salary.hra.toLocaleString("en-IN")}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Site Hardship Allowance</span>
                    <span className="font-mono text-white">₹{user.salary.siteAllowance.toLocaleString("en-IN")}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Special Allowance</span>
                    <span className="font-mono text-white">₹{user.salary.specialAllowance.toLocaleString("en-IN")}</span>
                  </div>
                  <div className="border-t border-slate-800 pt-2 flex justify-between font-bold text-white">
                    <span>Total Earnings (A)</span>
                    <span className="font-mono text-emerald-400">₹{selectedSlip.grossEarnings.toLocaleString("en-IN")}</span>
                  </div>
                </div>
              </div>

              {/* Deductions */}
              <div className="rounded-xl border border-slate-800 bg-slate-950/40 p-4">
                <div className="border-b border-slate-800 pb-2 font-bold text-rose-400">
                  Deductions
                </div>
                <div className="mt-3 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Provident Fund (PF)</span>
                    <span className="font-mono text-white">₹{user.salary.pfDeduction.toLocaleString("en-IN")}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Tax Deducted at Source (TDS)</span>
                    <span className="font-mono text-white">₹{user.salary.taxTds.toLocaleString("en-IN")}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">ESI Contribution</span>
                    <span className="font-mono text-slate-500">₹0 (Exempt)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Other Deductions</span>
                    <span className="font-mono text-slate-500">₹0</span>
                  </div>
                  <div className="border-t border-slate-800 pt-2 flex justify-between font-bold text-white">
                    <span>Total Deductions (B)</span>
                    <span className="font-mono text-rose-400">₹{selectedSlip.totalDeductions.toLocaleString("en-IN")}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Net Amount Highlight */}
            <div className="mt-6 flex items-center justify-between rounded-xl border border-emerald-500/40 bg-emerald-950/30 p-4">
              <div>
                <span className="text-xs text-slate-400">Net Amount Disbursed (A - B):</span>
                <div className="text-xl font-black text-emerald-400">
                  ₹{selectedSlip.netPayable.toLocaleString("en-IN")}
                </div>
              </div>
              <div className="text-right text-[11px] text-slate-400">
                Payment Mode: <strong>NEFT / PNB Corporate Clearing</strong><br />
                Txn Ref: <strong>PTE-PAY-20260831-2910</strong>
              </div>
            </div>

            <div className="mt-6 text-center text-[10px] text-slate-500">
              This is a computer-generated payroll advice issued under Powertech Engineers HRMS ERP and requires no physical signature.
            </div>
          </div>
        </div>
      )}

      {/* Reimbursement Claim Modal */}
      {reimbursementModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md">
          <div className="w-full max-w-lg rounded-3xl border border-slate-700 bg-slate-900 p-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center space-x-2">
                <Receipt className="h-5 w-5 text-orange-400" />
                <h3 className="text-base font-bold text-white">Site Reimbursement Claim</h3>
              </div>
              <button
                onClick={() => setReimbursementModal(false)}
                className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-800 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleClaimSubmit} className="mt-4 space-y-4 text-xs">
              <div>
                <label className="mb-1 block font-semibold text-slate-300">Expense Category</label>
                <select
                  value={claimCategory}
                  onChange={(e) => setClaimCategory(e.target.value)}
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-2.5 text-xs text-white focus:border-orange-500 focus:outline-none"
                >
                  <option value="Site Local Conveyance & Tolls">Site Local Conveyance & Tolls</option>
                  <option value="Transformer Oil Filtration Fuel / DG Run">Transformer Oil Filtration Fuel / DG Run</option>
                  <option value="CEIG / Utility Official Hospitality">CEIG / Utility Official Inspection Hospitality</option>
                  <option value="Emergency Tool & Tackle Purchase">Emergency Tool & Tackle Purchase</option>
                </select>
              </div>

              <div>
                <label className="mb-1 block font-semibold text-slate-300">Claim Amount (INR ₹)</label>
                <input
                  type="number"
                  required
                  placeholder="e.g. 4200"
                  value={claimAmount}
                  onChange={(e) => setClaimAmount(e.target.value)}
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-2.5 text-xs text-white focus:border-orange-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="mb-1 block font-semibold text-slate-300">Expense Details & Bill Reference</label>
                <textarea
                  rows={3}
                  required
                  placeholder="Describe the site activity and GST tax invoice numbers..."
                  value={claimDescription}
                  onChange={(e) => setClaimDescription(e.target.value)}
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-2.5 text-xs text-white focus:border-orange-500 focus:outline-none"
                />
              </div>

              <div className="flex justify-end space-x-3 pt-2">
                <button
                  type="button"
                  onClick={() => setReimbursementModal(false)}
                  className="rounded-xl border border-slate-700 px-4 py-2 text-xs font-semibold text-slate-300 hover:bg-slate-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-xl bg-orange-600 px-5 py-2 text-xs font-bold text-white shadow-lg shadow-orange-600/30 hover:bg-orange-500"
                >
                  Submit for Approval
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
