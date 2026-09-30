"use client";

import React, { useState } from "react";
import { Container } from "@/components/layout/Container";
import { teamMembersData } from "@/data/team";
import { TeamMember, TeamDepartment } from "@/types";
import { Users, MapPin, Award, CheckCircle2, X, ArrowRight, Filter, Sparkles } from "lucide-react";

const DEPARTMENTS: TeamDepartment[] = [
  "All",
  "Directors",
  "Engineering Team",
  "Project Management",
  "Site Engineers",
  "Testing & Commissioning",
];

export function TeamWall3DSection() {
  const [selectedDept, setSelectedDept] = useState<TeamDepartment>("All");
  const [activeMember, setActiveMember] = useState<TeamMember | null>(null);

  const filteredMembers = teamMembersData.filter((member) => {
    if (selectedDept === "All") return true;
    return member.department === selectedDept;
  });

  return (
    <section
      id="team"
      className="relative overflow-hidden border-b border-slate-200 bg-white py-20 sm:py-24"
    >
      <div className="dynamic-section-field -z-10" />

      <Container>
        {/* Header */}
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1 text-xs font-bold tracking-wider text-[#111650] uppercase shadow-2xs">
              <span className="h-2 w-2 rounded-full bg-[#EA580C]" />
              <span>Section 10 &bull; Our Team</span>
            </div>
            <h2 className="text-2xl font-black tracking-tight text-[#111650] sm:text-4xl lg:text-[42px]">
              The 3D Engineering Team Wall
            </h2>
          </div>
          <p className="max-w-md text-xs leading-relaxed text-slate-600 sm:text-sm">
            Powertech is built on multidisciplinary engineering technocrats: substation designers,
            high-voltage line crews, and precision commissioning specialists.
          </p>
        </div>

        {/* Department Filters */}
        <div className="mb-10 flex flex-wrap items-center gap-2 border-b border-slate-200 pb-3">
          <div className="mr-2 flex items-center gap-1.5 text-xs text-slate-500">
            <Filter className="h-3.5 w-3.5 text-[#EA580C]" />
            <span className="text-[10px] font-bold uppercase">Filter Discipline:</span>
          </div>

          {DEPARTMENTS.map((dept) => {
            const isSelected = selectedDept === dept;
            return (
              <button
                key={dept}
                type="button"
                onClick={() => setSelectedDept(dept)}
                className={`cursor-pointer rounded-full px-4 py-1.5 text-xs font-bold transition-all ${
                  isSelected
                    ? "scale-105 bg-[#111650] text-white shadow-md shadow-indigo-950/20"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-[#111650]"
                }`}
              >
                {dept}
              </button>
            );
          })}
        </div>

        {/* 3D Depth Floating Team Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredMembers.map((member) => (
            <div
              key={member.id}
              onClick={() => setActiveMember(member)}
              className="group kinetic-card electric-lift relative flex cursor-pointer flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50/70 p-5 shadow-xs transition-all duration-300 hover:border-[#EA580C] hover:bg-white hover:shadow-xl"
            >
              <div>
                <div className="mb-3 flex items-center justify-between">
                  <span className="rounded-md border border-slate-200 bg-white px-2 py-0.5 text-[9px] font-bold tracking-wider text-[#EA580C] uppercase">
                    {member.department}
                  </span>
                  <span className="font-mono text-[10px] font-semibold text-slate-400">
                    {member.experienceYears}+ Yrs
                  </span>
                </div>

                {/* Avatar Icon */}
                <div className="mb-3 flex items-center space-x-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#111650] text-sm font-bold text-white shadow-md transition-colors group-hover:bg-[#EA580C]">
                    {member.name.split(" ").slice(-1)[0][0]}
                  </div>
                  <div>
                    <h3 className="text-sm leading-tight font-bold text-[#111650] transition-colors group-hover:text-[#EA580C]">
                      {member.name}
                    </h3>
                    <p className="text-[11px] font-medium text-slate-500">{member.designation}</p>
                  </div>
                </div>

                <p className="line-clamp-2 text-xs leading-relaxed text-slate-600">
                  {member.specialization}
                </p>
              </div>

              <div className="mt-4 flex items-center justify-between border-t border-slate-200/60 pt-3 text-[11px] text-slate-400">
                <span className="flex items-center gap-1">
                  <MapPin className="h-3 w-3 text-[#EA580C]" />
                  <span className="max-w-[130px] truncate">{member.location}</span>
                </span>
                <span className="font-semibold text-[#0066FF] group-hover:underline">
                  View Profile &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* Member Details Modal */}
      {activeMember && (
        <div
          className="animate-in fade-in fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
          onClick={() => setActiveMember(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-white/20 bg-[#080d1a] p-6 text-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between border-b border-white/10 pb-4">
              <div className="flex items-center space-x-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EA580C] text-lg font-bold text-white">
                  {activeMember.name.split(" ").slice(-1)[0][0]}
                </div>
                <div>
                  <span className="text-[10px] font-bold tracking-wider text-[#f08020] uppercase">
                    {activeMember.department}
                  </span>
                  <h3 className="text-base font-bold text-white">{activeMember.name}</h3>
                  <p className="text-xs text-slate-300">{activeMember.designation}</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setActiveMember(null)}
                className="rounded-lg bg-white/10 p-1.5 text-slate-300 transition hover:bg-white/20 hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="space-y-4 py-4 text-xs">
              <div>
                <span className="mb-1 block text-[10px] tracking-wider text-slate-400 uppercase">
                  Technical Specialization
                </span>
                <p className="font-semibold text-slate-200">{activeMember.specialization}</p>
              </div>

              <div>
                <span className="mb-1 block text-[10px] tracking-wider text-slate-400 uppercase">
                  Qualifications & Accreditations
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {activeMember.qualifications.map((q, i) => (
                    <span
                      key={i}
                      className="rounded bg-white/10 px-2 py-0.5 text-[11px] text-slate-200"
                    >
                      {q}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <span className="mb-1 block text-[10px] tracking-wider text-slate-400 uppercase">
                  Engineering Overview & Track Record
                </span>
                <p className="leading-relaxed text-slate-300">{activeMember.bio}</p>
              </div>

              <div className="flex items-center justify-between border-t border-white/10 pt-2 text-[11px] text-slate-400">
                <span>Location: {activeMember.location}</span>
                <span className="font-semibold text-emerald-400">
                  {activeMember.experienceYears}+ Years Practical Experience
                </span>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => setActiveMember(null)}
                className="w-full rounded-xl bg-white/10 py-2.5 text-xs font-bold text-white transition hover:bg-white/20"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
