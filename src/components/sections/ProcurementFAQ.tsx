"use client";

import React, { useState } from "react";
import { HelpCircle, ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: "What project scopes does Powertech Engineers handle?",
    answer:
      "Powertech Engineers handles turnkey electrical engineering scopes including substation installation and commissioning up to 400 kV, overhead transmission lines up to 220 kV, underground trenchless (HDD) cabling, industrial electrical contracting, and breakdown maintenance across demanding utility environments.",
  },
  {
    question: "Does the company support state utility infrastructure frameworks?",
    answer:
      "Yes. The service matrix is actively positioned around major state utility and government infrastructure schemes such as RAPDRP, IPDS, and PMDP, with verifiable project track records across public utility clients including UPPTCL, UPPCL, DVVNL, HVPNL, BSPTCL, and J&K PDD.",
  },
  {
    question: "Which offices should corporate buyers route inquiries to?",
    answer:
      "Operational inquiries can be routed through our Noida Corporate Head Office at E-195, Sector-63, Noida, Uttar Pradesh (201301) [Tel: 0120-4131018], or our Delhi Registered Office at 215, Jagdamba Tower, 13 Commercial Complex, Preet Vihar, Delhi (110092). Direct urgent hotlines are available at 9873731300 and 9717893182.",
  },
  {
    question: "What details should be included in a project inquiry?",
    answer:
      "For efficient review, please include: client utility or project name, geographical site location, voltage class (e.g. 400 kV, 220 kV, 132 kV, 33 kV, 11 kV), substation/cabling scope, compliance framework requirements, target completion timeline, and preferred contact coordinates.",
  },
  {
    question: "Are project references and official credentials available for enterprise review?",
    answer:
      "Yes. The platform provides a Live Contract Ledger with client utilities, scope summaries, regional jurisdictions, and execution status. Our ISO 9001:2015 certification, Punjab National Bank institutional banking records, and the complete 5-slide corporate brochure are directly accessible.",
  },
];

export function ProcurementFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section className="relative overflow-hidden bg-slate-50 py-20">
      <div className="dynamic-section-field -z-10" />

      <div className="container mx-auto max-w-4xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200/90 bg-white px-4 py-1.5 shadow-2xs">
            <HelpCircle className="h-4 w-4 text-[#EA580C]" />
            <span className="text-xs font-bold tracking-wider text-[#111650] uppercase">
              Procurement FAQ
            </span>
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-[#111650] sm:text-3xl md:text-4xl">
            Common enterprise review questions
          </h2>
          <p className="mt-3 text-xs leading-relaxed text-slate-600 sm:text-sm">
            Fast answers for corporate buyers, utility procurement teams, and project owners
            evaluating Powertech Engineers for electrical infrastructure mandates.
          </p>
        </div>

        <div className="kinetic-card space-y-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-xl border border-slate-100 bg-slate-50/60 transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="flex w-full items-center justify-between p-4 text-left sm:p-5"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-bold text-[#111650] sm:text-base">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 text-slate-500 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-[#EA580C]" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="border-t border-slate-100 bg-white px-4 pt-3 pb-5 text-xs leading-relaxed text-slate-600 sm:px-5 sm:text-sm">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
