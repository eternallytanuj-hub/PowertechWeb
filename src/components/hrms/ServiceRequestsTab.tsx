"use client";

import React, { useState } from "react";
import { HrmsServiceRequest } from "@/data/hrms";
import {
  HelpCircle,
  PlusCircle,
  Clock,
  CheckCircle2,
  AlertCircle,
  X,
  Send,
  ShieldCheck,
  Laptop,
  FileQuestion,
  Truck,
} from "lucide-react";

interface ServiceRequestsTabProps {
  initialRequests: HrmsServiceRequest[];
}

export const ServiceRequestsTab: React.FC<ServiceRequestsTabProps> = ({ initialRequests }) => {
  const [requests, setRequests] = useState<HrmsServiceRequest[]>(initialRequests);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Form State
  const [category, setCategory] = useState<
    "Site PPE & Tools" | "IT / Portal Access" | "HR Letter Request" | "Travel & Site Relocation"
  >("Site PPE & Tools");
  const [priority, setPriority] = useState<"High" | "Medium" | "Urgent">("High");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!subject.trim()) return;

    const newReq: HrmsServiceRequest = {
      id: `SR-${Math.floor(100 + Math.random() * 900)}`,
      category,
      subject,
      priority,
      status: "In Review",
      createdDate: "2026-09-30",
      resolutionNote: "Acknowledged by Corporate Dispatch & IT Desk. Assigned for immediate fulfillment.",
    };

    setRequests([newReq, ...requests]);
    setIsModalOpen(false);
    setSubject("");
    setDescription("");
    setSuccessMsg(`Ticket ${newReq.id} logged successfully with Central Support.`);
    setTimeout(() => setSuccessMsg(null), 5000);
  };

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="flex flex-col justify-between gap-4 rounded-2xl border border-slate-800 bg-slate-900/90 p-6 shadow-xl sm:flex-row sm:items-center">
        <div>
          <h2 className="text-xl font-bold text-white">Employee Helpdesk & Site Requisitions</h2>
          <p className="mt-1 text-xs text-slate-400">
            Submit service tickets for site PPE replenishment, IT access, HR certificates, or project relocation.
          </p>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="flex cursor-pointer items-center space-x-2 rounded-xl bg-orange-600 px-5 py-3 text-xs font-bold text-white shadow-lg shadow-orange-600/30 transition hover:bg-orange-500"
        >
          <PlusCircle className="h-4 w-4" />
          <span>Raise New Request</span>
        </button>
      </div>

      {successMsg && (
        <div className="flex items-center space-x-2 rounded-xl border border-emerald-500/30 bg-emerald-950/40 p-3.5 text-xs text-emerald-300">
          <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
          <span>{successMsg}</span>
        </div>
      )}

      {/* Requests List */}
      <div className="space-y-4">
        {requests.map((req) => (
          <div
            key={req.id}
            className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6 shadow-lg transition hover:border-slate-700"
          >
            <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
              <div className="flex items-center space-x-3">
                <span className="font-mono text-xs font-bold text-orange-400">{req.id}</span>
                <span className="rounded bg-slate-800 px-2 py-0.5 text-[11px] font-semibold text-slate-300">
                  {req.category}
                </span>
                <span
                  className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${
                    req.priority === "Urgent"
                      ? "bg-rose-500/20 text-rose-400 border border-rose-500/30"
                      : req.priority === "High"
                      ? "bg-amber-500/20 text-amber-400 border border-amber-500/30"
                      : "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                  }`}
                >
                  {req.priority} Priority
                </span>
              </div>

              <div className="flex items-center space-x-3 text-xs">
                <span className="text-slate-400">Created: {req.createdDate}</span>
                <span
                  className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-bold ${
                    req.status === "Resolved"
                      ? "border border-emerald-500/40 bg-emerald-500/10 text-emerald-400"
                      : req.status === "In Review"
                      ? "border border-amber-500/40 bg-amber-500/10 text-amber-400"
                      : "border border-blue-500/40 bg-blue-500/10 text-blue-400"
                  }`}
                >
                  {req.status === "Resolved" ? (
                    <CheckCircle2 className="mr-1 h-3 w-3" />
                  ) : (
                    <Clock className="mr-1 h-3 w-3" />
                  )}
                  {req.status}
                </span>
              </div>
            </div>

            <h3 className="mt-3 text-sm font-bold text-white">{req.subject}</h3>

            {req.resolutionNote && (
              <div className="mt-3 rounded-xl border border-slate-800 bg-slate-950/60 p-3 text-xs text-slate-300">
                <span className="font-semibold text-orange-400">Resolution Status / Tracking:</span>{" "}
                {req.resolutionNote}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Raise Request Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md">
          <div className="w-full max-w-lg rounded-3xl border border-slate-700 bg-slate-900 p-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center space-x-2">
                <HelpCircle className="h-5 w-5 text-orange-400" />
                <h3 className="text-base font-bold text-white">Submit Helpdesk Ticket</h3>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-800 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="mt-4 space-y-4 text-xs">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="mb-1 block font-semibold text-slate-300">Category</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value as any)}
                    className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-2.5 text-xs text-white focus:border-orange-500 focus:outline-none"
                  >
                    <option value="Site PPE & Tools">Site PPE & Tools</option>
                    <option value="IT / Portal Access">IT / Portal Access</option>
                    <option value="HR Letter Request">HR Letter Request</option>
                    <option value="Travel & Site Relocation">Travel & Site Relocation</option>
                  </select>
                </div>
                <div>
                  <label className="mb-1 block font-semibold text-slate-300">Priority</label>
                  <select
                    value={priority}
                    onChange={(e) => setPriority(e.target.value as any)}
                    className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-2.5 text-xs text-white focus:border-orange-500 focus:outline-none"
                  >
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                    <option value="Urgent">Urgent (Safety / Charging)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="mb-1 block font-semibold text-slate-300">Subject / Requisition Summary</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Requirement of Class-4 Dielectric Testing Gloves"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-2.5 text-xs text-white focus:border-orange-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="mb-1 block font-semibold text-slate-300">Detailed Description & Project Justification</label>
                <textarea
                  rows={3}
                  required
                  placeholder="Detail the site requirements, item quantities, or assistance required..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-2.5 text-xs text-white focus:border-orange-500 focus:outline-none"
                />
              </div>

              <div className="flex justify-end space-x-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="rounded-xl border border-slate-700 px-4 py-2 text-xs font-semibold text-slate-300 hover:bg-slate-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex items-center space-x-2 rounded-xl bg-orange-600 px-5 py-2 text-xs font-bold text-white hover:bg-orange-500"
                >
                  <Send className="h-3.5 w-3.5" />
                  <span>Submit Ticket</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
