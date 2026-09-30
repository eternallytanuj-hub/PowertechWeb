"use client";

import React, { useState } from "react";
import { HrmsProjectSite, MOCK_PROJECT_SITES } from "@/data/hrms";
import {
  HardHat,
  Users,
  MapPin,
  ShieldCheck,
  ArrowRightLeft,
  CheckCircle2,
  Clock,
  Activity,
  Layers,
  Building,
  PlusCircle,
  X,
  Send,
} from "lucide-react";

export const SiteManpowerTab: React.FC = () => {
  const [sites, setSites] = useState<HrmsProjectSite[]>(MOCK_PROJECT_SITES);
  const [selectedSite, setSelectedSite] = useState<HrmsProjectSite>(sites[0]);
  const [transferModal, setTransferModal] = useState(false);
  const [transferEngineer, setTransferEngineer] = useState("Er. Alok Verma");
  const [fromSite, setFromSite] = useState(sites[0].name);
  const [toSite, setToSite] = useState(sites[1].name);
  const [transferSuccess, setTransferSuccess] = useState<string | null>(null);

  // Quick stats
  const totalEngineers = sites.reduce((sum, s) => sum + s.engineersDeployed, 0);
  const totalLabor = sites.reduce((sum, s) => sum + s.skilledLaborDeployed, 0);
  const avgSafety = (
    sites.reduce((sum, s) => sum + s.safetyScore, 0) / sites.length
  ).toFixed(1);

  const handleTransferSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTransferModal(false);
    setTransferSuccess(
      `Site Transfer Order issued: ${transferEngineer} relocated from '${fromSite}' to '${toSite}'. Project site rosters updated.`
    );
    setTimeout(() => setTransferSuccess(null), 6000);
  };

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 p-6 shadow-xl">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <div>
            <div className="flex items-center space-x-2">
              <span className="rounded bg-blue-500/20 border border-blue-500/40 px-2.5 py-0.5 text-xs font-bold text-blue-400">
                EPC SITE OPERATIONS
              </span>
              <span className="text-xs text-slate-400">
                Active Utility Projects: {sites.length} Major Locations
              </span>
            </div>
            <h2 className="mt-2 text-2xl font-black text-white sm:text-3xl">
              Project Manpower & Labour Deployment
            </h2>
            <p className="mt-1 text-xs text-slate-300">
              Real-time headcount, safety scores, shift windows, and engineer site transfers across North India projects.
            </p>
          </div>

          <button
            onClick={() => setTransferModal(true)}
            className="flex cursor-pointer items-center space-x-2 rounded-xl bg-orange-600 px-5 py-3 text-xs font-bold text-white shadow-lg shadow-orange-600/30 transition hover:bg-orange-500"
          >
            <ArrowRightLeft className="h-4 w-4" />
            <span>Initiate Site Transfer</span>
          </button>
        </div>

        {transferSuccess && (
          <div className="mt-4 flex items-center space-x-2 rounded-xl border border-emerald-500/30 bg-emerald-950/40 p-3.5 text-xs text-emerald-300">
            <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
            <span>{transferSuccess}</span>
          </div>
        )}
      </div>

      {/* Aggregate Statistics */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 shadow-lg">
          <div className="text-xs text-slate-400">Active Project Sites</div>
          <div className="mt-2 text-3xl font-black text-white">{sites.length} Sites</div>
          <div className="mt-1 text-[11px] text-orange-400">UP, J&K, Regional Utilities</div>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 shadow-lg">
          <div className="text-xs text-slate-400">Engineers Deployed on Field</div>
          <div className="mt-2 text-3xl font-black text-blue-400">{totalEngineers} Engineers</div>
          <div className="mt-1 text-[11px] text-slate-400">EHV, Substation & HDD Specialists</div>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 shadow-lg">
          <div className="text-xs text-slate-400">Skilled Labour & Technicians</div>
          <div className="mt-2 text-3xl font-black text-amber-400">{totalLabor} Personnel</div>
          <div className="mt-1 text-[11px] text-slate-400">Cable Jointers, Riggers, Fitters</div>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 shadow-lg">
          <div className="text-xs text-slate-400">Average Safety Compliance</div>
          <div className="mt-2 text-3xl font-black text-emerald-400">{avgSafety}%</div>
          <div className="mt-1 text-[11px] text-slate-400">Zero Incident Workplaces</div>
        </div>
      </div>

      {/* Project Site Cards Grid */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {sites.map((site) => (
          <div
            key={site.id}
            className={`rounded-2xl border p-6 shadow-xl transition ${
              selectedSite.id === site.id
                ? "border-orange-500/60 bg-slate-900 shadow-orange-500/5"
                : "border-slate-800 bg-slate-900/80 hover:border-slate-700"
            }`}
          >
            {/* Site Header */}
            <div className="flex items-start justify-between">
              <div>
                <span className="rounded bg-orange-500/10 px-2.5 py-0.5 text-[10px] font-bold text-orange-400 border border-orange-500/30">
                  {site.voltage}
                </span>
                <h3 className="mt-2 text-base font-bold text-white leading-tight">{site.name}</h3>
                <div className="mt-1 flex items-center text-xs text-slate-400">
                  <MapPin className="mr-1 h-3.5 w-3.5 text-orange-400 shrink-0" />
                  <span>{site.location}</span>
                </div>
              </div>

              <span
                className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold ${
                  site.shiftStatus === "Day Shift Active"
                    ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                    : "bg-purple-500/20 text-purple-400 border border-purple-500/30"
                }`}
              >
                {site.shiftStatus}
              </span>
            </div>

            {/* Client Info */}
            <div className="mt-4 rounded-xl border border-slate-800 bg-slate-950/60 p-3 text-xs">
              <span className="text-slate-400">Client Utility:</span>{" "}
              <strong className="text-white">{site.client}</strong>
            </div>

            {/* Manpower Counts */}
            <div className="mt-4 grid grid-cols-3 gap-3 text-center text-xs">
              <div className="rounded-xl border border-slate-800 bg-slate-950/40 p-3">
                <div className="text-[10px] text-slate-400 uppercase">Lead Engineer</div>
                <div className="mt-1 font-bold text-white truncate">{site.leadEngineer}</div>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-950/40 p-3">
                <div className="text-[10px] text-slate-400 uppercase">Engineers</div>
                <div className="mt-1 font-black text-blue-400 text-sm">
                  {site.engineersDeployed}
                </div>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-950/40 p-3">
                <div className="text-[10px] text-slate-400 uppercase">Skilled Labour</div>
                <div className="mt-1 font-black text-amber-400 text-sm">
                  {site.skilledLaborDeployed}
                </div>
              </div>
            </div>

            {/* Safety Score Meter */}
            <div className="mt-4 border-t border-slate-800/80 pt-3">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400 flex items-center">
                  <ShieldCheck className="h-3.5 w-3.5 mr-1 text-emerald-400" /> Site Safety Score
                </span>
                <span className="font-bold text-emerald-400">{site.safetyScore}%</span>
              </div>
              <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-slate-800">
                <div
                  className="h-full bg-emerald-500 rounded-full"
                  style={{ width: `${site.safetyScore}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal: Site Transfer Workflow */}
      {transferModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md">
          <div className="w-full max-w-lg rounded-3xl border border-slate-700 bg-slate-900 p-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center space-x-2">
                <ArrowRightLeft className="h-5 w-5 text-orange-400" />
                <h3 className="text-base font-bold text-white">Engineer Site Transfer Workflow</h3>
              </div>
              <button
                onClick={() => setTransferModal(false)}
                className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-800 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleTransferSubmit} className="mt-4 space-y-4 text-xs">
              <div>
                <label className="mb-1 block font-semibold text-slate-300">Select Engineer</label>
                <select
                  value={transferEngineer}
                  onChange={(e) => setTransferEngineer(e.target.value)}
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-2.5 text-xs text-white focus:border-orange-500 focus:outline-none"
                >
                  <option value="Er. Alok Verma">Er. Alok Verma (Senior Substation Project Engineer)</option>
                  <option value="Er. Suresh Singh">Er. Suresh Singh (Lead Transmission Engineer)</option>
                  <option value="Er. Vikram Rana">Er. Vikram Rana (Distribution Project Lead)</option>
                  <option value="Er. Deepak Yadav">Er. Deepak Yadav (HDD Trenchless Cabling Lead)</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="mb-1 block font-semibold text-slate-300">Current Site (From)</label>
                  <select
                    value={fromSite}
                    onChange={(e) => setFromSite(e.target.value)}
                    className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-2.5 text-xs text-white focus:border-orange-500 focus:outline-none"
                  >
                    {sites.map((s) => (
                      <option key={s.id} value={s.name}>
                        {s.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="mb-1 block font-semibold text-slate-300">Target Site (To)</label>
                  <select
                    value={toSite}
                    onChange={(e) => setToSite(e.target.value)}
                    className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-2.5 text-xs text-white focus:border-orange-500 focus:outline-none"
                  >
                    {sites.map((s) => (
                      <option key={s.id} value={s.name}>
                        {s.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="mb-1 block font-semibold text-slate-300">Transfer Reason & Handover Plan</label>
                <textarea
                  rows={3}
                  required
                  placeholder="e.g. Critical support required for 33 kV trenchless HDD river crossing execution in Agra division..."
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-2.5 text-xs text-white focus:border-orange-500 focus:outline-none"
                />
              </div>

              <div className="flex justify-end space-x-3 pt-2">
                <button
                  type="button"
                  onClick={() => setTransferModal(false)}
                  className="rounded-xl border border-slate-700 px-4 py-2 text-xs font-semibold text-slate-300 hover:bg-slate-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-xl bg-orange-600 px-5 py-2 text-xs font-bold text-white hover:bg-orange-500"
                >
                  Issue Transfer Order
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
