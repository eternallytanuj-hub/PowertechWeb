"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, ZoomIn, Eye } from "lucide-react";

interface SlideViewerModalProps {
  slideNumber: number;
  slideTitle: string;
  imageSrc: string;
}

export function SlideViewerModal({ slideNumber, slideTitle, imageSrc }: SlideViewerModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center space-x-1.5 rounded-lg border border-slate-300 bg-white/90 px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-sm transition hover:border-[#EA580C] hover:bg-orange-50 hover:text-[#EA580C] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#EA580C]"
        title={`View Original Slide ${slideNumber} from Brochure`}
      >
        <Eye className="h-3.5 w-3.5 text-[#EA580C]" />
        <span>View Original Slide {slideNumber}</span>
      </button>

      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm transition-opacity"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative max-h-[92vh] max-w-2xl overflow-hidden rounded-2xl bg-white p-3 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-2 flex items-center justify-between border-b border-slate-100 pb-2">
              <div className="flex items-center space-x-2">
                <span className="rounded bg-[#071D36] px-2 py-0.5 text-xs font-bold text-white">
                  Slide {slideNumber}
                </span>
                <span className="text-xs font-bold text-slate-800">{slideTitle}</span>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-lg p-1 text-slate-500 hover:bg-slate-100 hover:text-slate-900"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="relative max-h-[82vh] overflow-y-auto rounded-lg bg-slate-100">
              <Image
                src={imageSrc}
                alt={`Original Brochure Slide ${slideNumber} - ${slideTitle}`}
                width={800}
                height={1200}
                className="h-auto w-full object-contain"
                priority
              />
            </div>

            <div className="mt-2 flex items-center justify-between text-[11px] text-slate-500">
              <span>Source: Official Powertech Engineers Company Profile Brochure</span>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="font-semibold text-[#EA580C] hover:underline"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
