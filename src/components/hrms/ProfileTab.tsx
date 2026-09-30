"use client";

import React, { useState } from "react";
import { HrmsEmployee } from "@/data/hrms";
import {
  User,
  Building,
  Mail,
  Phone,
  Calendar,
  CreditCard,
  Shield,
  MapPin,
  CheckCircle2,
  Lock,
  Edit2,
  Save,
  FileBadge,
  HeartPulse,
} from "lucide-react";

interface ProfileTabProps {
  user: HrmsEmployee;
}

export const ProfileTab: React.FC<ProfileTabProps> = ({ user }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [phone, setPhone] = useState(user.phone);
  const [emergencyPhone, setEmergencyPhone] = useState(user.emergencyContact.phone);
  const [saveMessage, setSaveMessage] = useState<string | null>(null);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setIsEditing(false);
    setSaveMessage("Contact information updated successfully in Powertech Central HRMS.");
    setTimeout(() => setSaveMessage(null), 4000);
  };

  return (
    <div className="space-y-6">
      {/* Header Profile Card */}
      <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 p-6 shadow-xl">
        <div className="relative z-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-amber-600 text-2xl font-black text-white shadow-xl shadow-orange-500/20">
              {user.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h2 className="text-xl font-bold text-white sm:text-2xl">{user.name}</h2>
                <span className="rounded-full border border-orange-500/30 bg-orange-500/20 px-2.5 py-0.5 text-[11px] font-bold text-orange-400">
                  {user.id}
                </span>
                <span className="rounded-full border border-emerald-500/30 bg-emerald-500/20 px-2.5 py-0.5 text-[11px] font-bold text-emerald-400">
                  {user.employmentType}
                </span>
              </div>
              <p className="mt-1 text-xs text-slate-300">
                {user.designation} &bull; <strong>{user.department} Department</strong>
              </p>
              <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-slate-400">
                <span className="flex items-center">
                  <MapPin className="mr-1 h-3.5 w-3.5 text-orange-400" />
                  {user.siteAllocation}
                </span>
                <span className="flex items-center">
                  <Calendar className="mr-1 h-3.5 w-3.5 text-slate-500" />
                  Joined: {user.joinDate}
                </span>
              </div>
            </div>
          </div>

          <button
            onClick={() => setIsEditing(!isEditing)}
            className="flex items-center space-x-2 rounded-xl border border-slate-700 bg-slate-800/80 px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-slate-700"
          >
            <Edit2 className="h-4 w-4 text-orange-400" />
            <span>{isEditing ? "Cancel Editing" : "Edit Contact Details"}</span>
          </button>
        </div>

        {saveMessage && (
          <div className="mt-4 flex items-center space-x-2 rounded-xl border border-emerald-500/30 bg-emerald-950/40 p-3 text-xs text-emerald-300">
            <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
            <span>{saveMessage}</span>
          </div>
        )}
      </div>

      {/* Editing Form or Read-Only View */}
      {isEditing && (
        <form onSubmit={handleSave} className="rounded-2xl border border-orange-500/30 bg-slate-900 p-6 shadow-xl">
          <h3 className="text-sm font-bold text-white mb-4">Update Contact Coordinates</h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Personal Mobile Number
              </label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-2.5 text-xs text-white focus:border-orange-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Emergency Contact Phone ({user.emergencyContact.name} - {user.emergencyContact.relationship})
              </label>
              <input
                type="text"
                value={emergencyPhone}
                onChange={(e) => setEmergencyPhone(e.target.value)}
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-2.5 text-xs text-white focus:border-orange-500 focus:outline-none"
              />
            </div>
          </div>
          <div className="mt-4 flex justify-end space-x-3">
            <button
              type="button"
              onClick={() => setIsEditing(false)}
              className="rounded-xl border border-slate-700 px-4 py-2 text-xs font-semibold text-slate-300 hover:bg-slate-800"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex items-center space-x-2 rounded-xl bg-orange-600 px-5 py-2 text-xs font-bold text-white hover:bg-orange-500"
            >
              <Save className="h-4 w-4" />
              <span>Save Changes</span>
            </button>
          </div>
        </form>
      )}

      {/* Grid: 4 Core Profile Sections */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Section 1: Employment & Official Details */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6 shadow-xl">
          <div className="flex items-center space-x-2 border-b border-slate-800 pb-3">
            <Building className="h-5 w-5 text-orange-400" />
            <h3 className="font-bold text-white">Employment & Official Allocation</h3>
          </div>
          <div className="mt-4 space-y-3 text-xs">
            <div className="flex justify-between border-b border-slate-800/60 pb-2">
              <span className="text-slate-400">Employee Code</span>
              <span className="font-mono font-bold text-white">{user.id}</span>
            </div>
            <div className="flex justify-between border-b border-slate-800/60 pb-2">
              <span className="text-slate-400">Designation</span>
              <span className="font-semibold text-white">{user.designation}</span>
            </div>
            <div className="flex justify-between border-b border-slate-800/60 pb-2">
              <span className="text-slate-400">Functional Division</span>
              <span className="text-white">{user.department}</span>
            </div>
            <div className="flex justify-between border-b border-slate-800/60 pb-2">
              <span className="text-slate-400">Date of Joining</span>
              <span className="text-white">{user.joinDate}</span>
            </div>
            <div className="flex justify-between border-b border-slate-800/60 pb-2">
              <span className="text-slate-400">Primary Project Site</span>
              <span className="font-medium text-orange-400">{user.siteAllocation}</span>
            </div>
            <div className="flex justify-between border-b border-slate-800/60 pb-2">
              <span className="text-slate-400">Official Email</span>
              <span className="font-mono text-slate-300">{user.email}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Corporate Cell</span>
              <span className="font-mono text-white">{phone}</span>
            </div>
          </div>
        </div>

        {/* Section 2: Statutory & Utility Licenses */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6 shadow-xl">
          <div className="flex items-center space-x-2 border-b border-slate-800 pb-3">
            <FileBadge className="h-5 w-5 text-purple-400" />
            <h3 className="font-bold text-white">Statutory & CEIG Safety Licenses</h3>
          </div>
          <div className="mt-4 space-y-3 text-xs">
            <div className="flex justify-between border-b border-slate-800/60 pb-2">
              <span className="text-slate-400">Provident Fund UAN</span>
              <span className="font-mono font-bold text-white">{user.statutory.pfUan}</span>
            </div>
            <div className="flex justify-between border-b border-slate-800/60 pb-2">
              <span className="text-slate-400">ESI Insurance Status</span>
              <span className="text-slate-300">{user.statutory.esiNumber}</span>
            </div>
            <div className="flex justify-between border-b border-slate-800/60 pb-2">
              <span className="text-slate-400">Income Tax PAN</span>
              <span className="font-mono font-bold text-white">{user.statutory.panNumber}</span>
            </div>
            <div className="flex justify-between border-b border-slate-800/60 pb-2">
              <span className="text-slate-400">Class-A Electrical Safety Card</span>
              <span className="font-semibold text-emerald-400">CEIG-UP-AUTH-2024</span>
            </div>
            <div className="flex justify-between border-b border-slate-800/60 pb-2">
              <span className="text-slate-400">Voltage Authorization</span>
              <span className="text-white">Up to 400 kV EHV Substations</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">License Expiry</span>
              <span className="text-slate-300">31 December 2027</span>
            </div>
          </div>
        </div>

        {/* Section 3: Bank Details (Salary Disbursement) */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6 shadow-xl">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div className="flex items-center space-x-2">
              <CreditCard className="h-5 w-5 text-emerald-400" />
              <h3 className="font-bold text-white">Disbursement Bank Account</h3>
            </div>
            <span className="rounded bg-emerald-500/10 px-2 py-0.5 text-[10px] font-bold text-emerald-400">
              Verified PNB Direct
            </span>
          </div>
          <div className="mt-4 space-y-3 text-xs">
            <div className="flex justify-between border-b border-slate-800/60 pb-2">
              <span className="text-slate-400">Bank Name</span>
              <span className="font-bold text-white">{user.bankDetails.bankName}</span>
            </div>
            <div className="flex justify-between border-b border-slate-800/60 pb-2">
              <span className="text-slate-400">Account Number</span>
              <span className="font-mono font-bold text-white">{user.bankDetails.accountNumber}</span>
            </div>
            <div className="flex justify-between border-b border-slate-800/60 pb-2">
              <span className="text-slate-400">IFSC Code</span>
              <span className="font-mono text-white">{user.bankDetails.ifscCode}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Branch Name</span>
              <span className="text-slate-300">{user.bankDetails.branch}</span>
            </div>
          </div>
        </div>

        {/* Section 4: Emergency Contacts & Nominee */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6 shadow-xl">
          <div className="flex items-center space-x-2 border-b border-slate-800 pb-3">
            <HeartPulse className="h-5 w-5 text-rose-400" />
            <h3 className="font-bold text-white">Emergency Contact & Nominee</h3>
          </div>
          <div className="mt-4 space-y-3 text-xs">
            <div className="flex justify-between border-b border-slate-800/60 pb-2">
              <span className="text-slate-400">Primary Contact Person</span>
              <span className="font-bold text-white">{user.emergencyContact.name}</span>
            </div>
            <div className="flex justify-between border-b border-slate-800/60 pb-2">
              <span className="text-slate-400">Relationship</span>
              <span className="text-slate-300">{user.emergencyContact.relationship}</span>
            </div>
            <div className="flex justify-between border-b border-slate-800/60 pb-2">
              <span className="text-slate-400">Emergency Phone</span>
              <span className="font-mono text-rose-300">{emergencyPhone}</span>
            </div>
            <div className="flex justify-between border-b border-slate-800/60 pb-2">
              <span className="text-slate-400">Designated PF Nominee</span>
              <span className="text-white">{user.emergencyContact.name} (100% Share)</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Medical Insurance Card</span>
              <span className="text-slate-300">New India Assurance #NIA-PTE-8472</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
