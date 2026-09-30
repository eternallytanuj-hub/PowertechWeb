"use client";

import React from "react";
import { HrmsEmployee } from "@/data/hrms";
import {
  Award,
  Target,
  CheckCircle2,
  TrendingUp,
  Star,
  ShieldCheck,
  Calendar,
  Zap,
} from "lucide-react";

interface PerformanceTabProps {
  user: HrmsEmployee;
}

export const PerformanceTab: React.FC<PerformanceTabProps> = ({ user }) => {
  return (
    <div className="space-y-6">
      {/* Top Banner: Annual Review Rating */}
      <div className="rounded-2xl border border-slate-800 bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 p-6 shadow-xl">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <div>
            <div className="flex items-center space-x-2">
              <span className="rounded bg-amber-500/20 border border-amber-500/40 px-2.5 py-0.5 text-xs font-bold text-amber-400">
                ANNUAL PERFORMANCE REVIEW: FY 2025-26
              </span>
              <span className="text-xs text-emerald-400 font-semibold">Exceeds Expectations</span>
            </div>
            <h2 className="mt-2 text-2xl font-black text-white sm:text-3xl">
              Performance Index: 4.85 / 5.0
            </h2>
            <p className="mt-1 text-xs text-slate-300">
              Evaluated by Project Director & Operations Head on EPC milestones, site safety, and utility coordination.
            </p>
          </div>

          <div className="flex items-center space-x-2 rounded-2xl border border-amber-500/30 bg-amber-950/30 px-5 py-4">
            <Award className="h-8 w-8 text-amber-400" />
            <div>
              <div className="text-xs font-bold text-white">Star Site Performer</div>
              <div className="text-[10px] text-amber-300">Ayodhya Substation Package</div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Result Areas (KRAs) & Goals */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6 shadow-xl">
        <div className="flex items-center space-x-2 border-b border-slate-800 pb-4">
          <Target className="h-5 w-5 text-orange-400" />
          <h3 className="font-bold text-white">FY 2026-27 Site Engineering Goals & Milestones</h3>
        </div>

        <div className="mt-6 space-y-4">
          {/* Goal 1 */}
          <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
            <div className="flex items-start justify-between">
              <div>
                <span className="rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 text-[10px] font-bold">
                  Weightage: 35%
                </span>
                <h4 className="mt-2 text-xs font-bold text-white">
                  Ayodhya 220 KV Bay-4 Erection & Transformer Plinth Handover
                </h4>
                <p className="mt-1 text-[11px] text-slate-400">
                  Execute structure erection, equipment positioning, and primary busbar connections ahead of client baseline deadline.
                </p>
              </div>
              <span className="text-sm font-bold text-emerald-400">95% Achieved</span>
            </div>
            <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-slate-800">
              <div className="h-full bg-emerald-500 rounded-full" style={{ width: "95%" }}></div>
            </div>
          </div>

          {/* Goal 2 */}
          <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
            <div className="flex items-start justify-between">
              <div>
                <span className="rounded bg-blue-500/10 text-blue-400 border border-blue-500/30 px-2 py-0.5 text-[10px] font-bold">
                  Weightage: 30%
                </span>
                <h4 className="mt-2 text-xs font-bold text-white">
                  Zero Lost Time Injuries (LTI) & 100% PTW Adherence
                </h4>
                <p className="mt-1 text-[11px] text-slate-400">
                  Strict enforcement of CEA safety regulations, double-earthing verification, and morning toolbox briefings for all site labor.
                </p>
              </div>
              <span className="text-sm font-bold text-blue-400">100% Achieved</span>
            </div>
            <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-slate-800">
              <div className="h-full bg-blue-500 rounded-full" style={{ width: "100%" }}></div>
            </div>
          </div>

          {/* Goal 3 */}
          <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
            <div className="flex items-start justify-between">
              <div>
                <span className="rounded bg-purple-500/10 text-purple-400 border border-purple-500/30 px-2 py-0.5 text-[10px] font-bold">
                  Weightage: 20%
                </span>
                <h4 className="mt-2 text-xs font-bold text-white">
                  Protection Relay Testing & SCADA Telemetry Handover
                </h4>
                <p className="mt-1 text-[11px] text-slate-400">
                  Differential, overcurrent, and distance relay secondary injection tests coordination with UPPTCL testing division.
                </p>
              </div>
              <span className="text-sm font-bold text-purple-400">80% Achieved</span>
            </div>
            <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-slate-800">
              <div className="h-full bg-purple-500 rounded-full" style={{ width: "80%" }}></div>
            </div>
          </div>

          {/* Goal 4 */}
          <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
            <div className="flex items-start justify-between">
              <div>
                <span className="rounded bg-orange-500/10 text-orange-400 border border-orange-500/30 px-2 py-0.5 text-[10px] font-bold">
                  Weightage: 15%
                </span>
                <h4 className="mt-2 text-xs font-bold text-white">
                  Junior Engineer Mentorship & On-Site Skill Development
                </h4>
                <p className="mt-1 text-[11px] text-slate-400">
                  Conduct weekly hands-on switchyard orientation sessions for GETs and site technician teams.
                </p>
              </div>
              <span className="text-sm font-bold text-orange-400">90% Achieved</span>
            </div>
            <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-slate-800">
              <div className="h-full bg-orange-500 rounded-full" style={{ width: "90%" }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Reviewer Appraisal Comments */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6 shadow-xl">
        <h3 className="font-bold text-white mb-3">Management Appraisal Remarks</h3>
        <blockquote className="rounded-xl border-l-4 border-orange-500 bg-slate-950/60 p-4 text-xs italic text-slate-300">
          &ldquo;Er. Alok Verma has demonstrated stellar technical command at the UPPTCL Ayodhya 220 kV site. His leadership during the critical 160 MVA transformer placement and continuous zero-accident compliance exemplifies Powertech Engineers&apos; execution ethos. Recommended for Senior Project Management promotion track in the upcoming financial review.&rdquo;
        </blockquote>
        <div className="mt-3 flex items-center justify-between text-[11px] text-slate-400">
          <span>Reviewed by: <strong>Er. Suresh Singh, Lead Project Manager</strong></span>
          <span>Date: <strong>15 April 2026</strong></span>
        </div>
      </div>
    </div>
  );
};
