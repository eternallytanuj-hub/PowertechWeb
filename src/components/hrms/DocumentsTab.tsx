"use client";

import React, { useState } from "react";
import { HrmsEmployee, HrmsDocumentItem } from "@/data/hrms";
import {
  FileText,
  Download,
  Eye,
  CheckCircle2,
  FileBadge,
  ShieldCheck,
  CreditCard,
  PlusCircle,
  X,
  Printer,
  QrCode,
  MapPin,
  Building,
} from "lucide-react";
import { PowertechLogo } from "@/components/ui/PowertechLogo";

interface DocumentsTabProps {
  user: HrmsEmployee;
  documents: HrmsDocumentItem[];
}

export const DocumentsTab: React.FC<DocumentsTabProps> = ({ user, documents }) => {
  const [docList, setDocList] = useState<HrmsDocumentItem[]>(documents);
  const [showIdCard, setShowIdCard] = useState(false);
  const [requestDocModal, setRequestDocModal] = useState(false);
  const [requestedTitle, setRequestedTitle] = useState("Experience & Conduct Certificate");
  const [requestSuccess, setRequestSuccess] = useState<string | null>(null);
  const [previewDoc, setPreviewDoc] = useState<HrmsDocumentItem | null>(null);

  const handleRequestDoc = (e: React.FormEvent) => {
    e.preventDefault();
    setRequestDocModal(false);
    setRequestSuccess(
      `Requisition for '${requestedTitle}' received. HR administration will process and upload within 24-48 business hours.`
    );
    setTimeout(() => setRequestSuccess(null), 5000);
  };

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="flex flex-col justify-between gap-4 rounded-2xl border border-slate-800 bg-slate-900/90 p-6 shadow-xl sm:flex-row sm:items-center">
        <div>
          <h2 className="text-xl font-bold text-white">Employee Digital Locker & ID Desk</h2>
          <p className="mt-1 text-xs text-slate-400">
            Access verified appointment letters, CEIG site safety passes, and official HR documents.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={() => setShowIdCard(true)}
            className="flex cursor-pointer items-center space-x-2 rounded-xl bg-orange-600 px-5 py-3 text-xs font-bold text-white shadow-lg shadow-orange-600/30 transition hover:bg-orange-500"
          >
            <CreditCard className="h-4 w-4" />
            <span>View Digital ID Badge</span>
          </button>
          <button
            onClick={() => setRequestDocModal(true)}
            className="flex cursor-pointer items-center space-x-2 rounded-xl border border-slate-700 bg-slate-800/80 px-4 py-3 text-xs font-semibold text-slate-200 transition hover:bg-slate-700"
          >
            <PlusCircle className="h-4 w-4 text-orange-400" />
            <span>Request Document</span>
          </button>
        </div>
      </div>

      {requestSuccess && (
        <div className="flex items-center space-x-2 rounded-xl border border-emerald-500/30 bg-emerald-950/40 p-3.5 text-xs text-emerald-300">
          <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
          <span>{requestSuccess}</span>
        </div>
      )}

      {/* Documents Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {docList.map((doc) => (
          <div
            key={doc.id}
            className="flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/80 p-5 shadow-lg transition hover:border-slate-700"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-500/10 text-orange-400">
                  <FileText className="h-5 w-5" />
                </div>
                <div>
                  <span className="rounded bg-slate-800 px-2 py-0.5 text-[10px] font-semibold text-slate-400">
                    {doc.category}
                  </span>
                  <h3 className="mt-1.5 font-bold text-white text-xs leading-snug">{doc.title}</h3>
                  <div className="mt-1 flex items-center space-x-2 text-[11px] text-slate-400">
                    <span>Issued: {doc.issueDate}</span>
                    <span>&bull;</span>
                    <span>Size: {doc.fileSize}</span>
                  </div>
                </div>
              </div>

              {doc.verified && (
                <span className="flex items-center text-[10px] font-bold text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                  <ShieldCheck className="h-3 w-3 mr-1" /> Verified
                </span>
              )}
            </div>

            <div className="mt-4 flex items-center justify-end space-x-2 border-t border-slate-800/80 pt-3 text-xs">
              <button
                onClick={() => setPreviewDoc(doc)}
                className="flex items-center space-x-1.5 rounded-lg border border-slate-700 px-3 py-1.5 font-semibold text-slate-300 hover:bg-slate-800 hover:text-white"
              >
                <Eye className="h-3.5 w-3.5 text-slate-400" />
                <span>Preview</span>
              </button>
              <button
                onClick={() => alert(`Downloading verified digital copy: ${doc.title}`)}
                className="flex items-center space-x-1.5 rounded-lg bg-orange-600/20 border border-orange-500/30 px-3 py-1.5 font-bold text-orange-300 hover:bg-orange-600/30"
              >
                <Download className="h-3.5 w-3.5" />
                <span>Download</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Digital ID Card Modal */}
      {showIdCard && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md">
          <div className="w-full max-w-sm overflow-hidden rounded-3xl border border-orange-500/40 bg-slate-900 shadow-2xl">
            {/* ID Card Top Banner */}
            <div className="bg-gradient-to-r from-orange-600 to-amber-600 p-4 text-center text-white">
              <div className="flex justify-between items-center mb-1">
                <span className="text-[10px] tracking-wider uppercase font-bold text-orange-100">
                  Government Utility Authorized Pass
                </span>
                <button
                  onClick={() => setShowIdCard(false)}
                  className="rounded p-1 text-white/80 hover:text-white"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <h3 className="text-base font-black tracking-wide">POWERTECH ENGINEERS</h3>
              <p className="text-[10px] text-orange-100">
                Electrical EPC & Turnkey Infrastructure
              </p>
            </div>

            {/* ID Card Body */}
            <div className="p-6 text-center text-xs">
              {/* Photo placeholder */}
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-tr from-slate-800 to-slate-700 border-2 border-orange-500 font-black text-3xl text-orange-400 shadow-xl">
                {user.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
              </div>

              <h4 className="mt-3 text-base font-bold text-white">{user.name}</h4>
              <div className="font-mono text-xs font-bold text-orange-400">{user.id}</div>
              <div className="mt-0.5 text-xs text-slate-300">{user.designation}</div>
              <div className="text-[11px] text-slate-400">{user.department} Division</div>

              <div className="mt-4 rounded-xl border border-slate-800 bg-slate-950 p-3 text-left space-y-1.5 text-[11px]">
                <div className="flex justify-between">
                  <span className="text-slate-400">Site Assignment:</span>
                  <span className="text-white font-medium truncate max-w-[170px]">{user.siteAllocation}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">CEIG License:</span>
                  <span className="font-mono text-emerald-400 font-semibold">CEIG-UP-AUTH-2024</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Blood Group:</span>
                  <span className="text-rose-400 font-bold">O+ Positive</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Emergency Contact:</span>
                  <span className="font-mono text-white">{user.emergencyContact.phone}</span>
                </div>
              </div>

              {/* QR Code Security Mock */}
              <div className="mt-4 flex items-center justify-center space-x-3 rounded-lg border border-slate-800 bg-slate-950/60 p-2">
                <QrCode className="h-8 w-8 text-slate-400" />
                <div className="text-left text-[9px] text-slate-400 leading-tight">
                  <strong className="text-slate-300">PTE-256-AUTHENTICATED</strong><br />
                  Scan to verify EPC site authorization and safety clearance.
                </div>
              </div>

              <div className="mt-5 flex justify-center space-x-3">
                <button
                  onClick={() => window.print()}
                  className="flex items-center space-x-1 rounded-xl bg-orange-600 px-4 py-2 text-xs font-bold text-white hover:bg-orange-500"
                >
                  <Printer className="h-3.5 w-3.5" />
                  <span>Print Badge</span>
                </button>
                <button
                  onClick={() => setShowIdCard(false)}
                  className="rounded-xl border border-slate-700 px-4 py-2 text-xs font-semibold text-slate-300 hover:bg-slate-800"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Preview Document Modal */}
      {previewDoc && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md">
          <div className="w-full max-w-lg rounded-3xl border border-slate-700 bg-slate-900 p-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-sm font-bold text-white">{previewDoc.title}</h3>
              <button
                onClick={() => setPreviewDoc(null)}
                className="rounded p-1 text-slate-400 hover:bg-slate-800 hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="my-6 rounded-2xl border border-slate-800 bg-slate-950 p-6 text-center text-xs space-y-3">
              <FileBadge className="mx-auto h-12 w-12 text-orange-400" />
              <div className="font-bold text-white text-sm">Official Record Verified</div>
              <p className="text-slate-400 text-xs">
                Document Ref: <strong>{previewDoc.id}</strong> &bull; Category: {previewDoc.category} &bull; Issued: {previewDoc.issueDate}
              </p>
              <div className="rounded-lg border border-emerald-500/30 bg-emerald-950/40 p-3 text-[11px] text-emerald-300">
                Digital signature matches Powertech Central Registrars. Valid for state electricity board submissions.
              </div>
            </div>
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setPreviewDoc(null)}
                className="rounded-xl border border-slate-700 px-4 py-2 text-xs font-semibold text-slate-300 hover:bg-slate-800"
              >
                Close
              </button>
              <button
                onClick={() => {
                  alert(`Downloading: ${previewDoc.title}`);
                  setPreviewDoc(null);
                }}
                className="flex items-center space-x-1 rounded-xl bg-orange-600 px-4 py-2 text-xs font-bold text-white hover:bg-orange-500"
              >
                <Download className="h-3.5 w-3.5" />
                <span>Download PDF</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Request Document Modal */}
      {requestDocModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md">
          <div className="w-full max-w-lg rounded-3xl border border-slate-700 bg-slate-900 p-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-sm font-bold text-white">Requisition for HR Letter / Certificate</h3>
              <button
                onClick={() => setRequestDocModal(false)}
                className="rounded p-1 text-slate-400 hover:bg-slate-800 hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <form onSubmit={handleRequestDoc} className="mt-4 space-y-4 text-xs">
              <div>
                <label className="mb-1 block font-semibold text-slate-300">Document Type</label>
                <select
                  value={requestedTitle}
                  onChange={(e) => setRequestedTitle(e.target.value)}
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-2.5 text-xs text-white focus:border-orange-500 focus:outline-none"
                >
                  <option value="Experience & Conduct Certificate">Experience & Conduct Certificate</option>
                  <option value="State Electricity Board Site Authorization">State Electricity Board Site Authorization</option>
                  <option value="Bank Loan Salary Certificate">Bank Loan Salary Certificate</option>
                  <option value="Address & Relocation Confirmation Letter">Address & Relocation Confirmation Letter</option>
                </select>
              </div>
              <div>
                <label className="mb-1 block font-semibold text-slate-300">Purpose / Addressee</label>
                <textarea
                  rows={3}
                  required
                  placeholder="Specify who the letter should be addressed to (e.g., Executive Engineer UPPTCL Ayodhya)..."
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-2.5 text-xs text-white focus:border-orange-500 focus:outline-none"
                />
              </div>
              <div className="flex justify-end space-x-2 pt-2">
                <button
                  type="button"
                  onClick={() => setRequestDocModal(false)}
                  className="rounded-xl border border-slate-700 px-4 py-2 text-xs font-semibold text-slate-300 hover:bg-slate-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-xl bg-orange-600 px-5 py-2 text-xs font-bold text-white hover:bg-orange-500"
                >
                  Submit Requisition
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
