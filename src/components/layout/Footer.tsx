"use client";

import React from "react";
import Link from "next/link";
import { Container } from "./Container";
import { PowertechLogo } from "@/components/ui/PowertechLogo";
import {
  MapPin,
  Phone,
  Mail,
  ArrowUp,
  MessageSquare,
  ShieldCheck,
  Lock,
  ExternalLink,
  ChevronRight,
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-[#060a17] text-white" aria-label="Site Footer">
      {/* Top Banner */}
      <div className="border-b border-white/10 bg-[#04060f] py-8">
        <Container className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center space-x-4 text-center md:text-left">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#EA580C] text-white shadow-lg">
              <span className="text-2xl font-black">⚡</span>
            </div>
            <div>
              <p className="text-base font-bold tracking-tight text-white sm:text-lg">
                &ldquo;Engineering tomorrow&apos;s energy solutions today.&rdquo;
              </p>
              <p className="font-mono text-xs font-bold tracking-widest text-[#f08020] uppercase">
                Powering Possibilities Delivering Excellence
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://wa.me/917881163131"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-emerald-600 px-5 py-2.5 text-xs font-bold text-white shadow transition hover:bg-emerald-700"
            >
              <MessageSquare className="mr-1.5 h-4 w-4" />
              WhatsApp Us
            </a>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="inline-flex cursor-pointer items-center rounded-full bg-white/10 px-5 py-2.5 text-xs font-bold text-white transition hover:bg-white/20"
            >
              <ArrowUp className="mr-1.5 h-4 w-4" />
              Back to Top
            </button>
          </div>
        </Container>
      </div>

      {/* 5-Column Navigation Matrix matching Section 24 */}
      <Container className="py-14 sm:py-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {/* Column 01 — Powertech */}
          <div className="space-y-4">
            <h4 className="border-b border-white/10 pb-2 text-xs font-bold tracking-widest text-[#EA580C] uppercase">
              Powertech
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <Link href="/about" className="transition hover:text-white">
                  Company Overview
                </Link>
              </li>
              <li>
                <Link href="/about#journey" className="transition hover:text-white">
                  Our Journey (Since 2004)
                </Link>
              </li>
              <li>
                <Link href="/leadership" className="transition hover:text-white">
                  Meet the Directors
                </Link>
              </li>
              <li>
                <Link href="/#team" className="transition hover:text-white">
                  Engineering Team
                </Link>
              </li>
              <li>
                <Link href="/careers" className="transition hover:text-white">
                  Careers & Openings
                </Link>
              </li>
              <li>
                <Link href="/#brochure" className="transition hover:text-white">
                  5-Slide Corporate Dossier
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 02 — Services */}
          <div className="space-y-4">
            <h4 className="border-b border-white/10 pb-2 text-xs font-bold tracking-widest text-[#EA580C] uppercase">
              Core Services
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <Link href="/services#substations" className="transition hover:text-white">
                  Substations up to 400 kV
                </Link>
              </li>
              <li>
                <Link href="/services#transmission" className="transition hover:text-white">
                  Transmission Lines (220 kV)
                </Link>
              </li>
              <li>
                <Link href="/services#distribution" className="transition hover:text-white">
                  Distribution Infrastructure
                </Link>
              </li>
              <li>
                <Link href="/services#underground-cabling" className="transition hover:text-white">
                  Underground Cabling (HDD)
                </Link>
              </li>
              <li>
                <Link
                  href="/services#industrial-electrical"
                  className="transition hover:text-white"
                >
                  Industrial Electrical Works
                </Link>
              </li>
              <li>
                <Link
                  href="/services#testing-commissioning"
                  className="transition hover:text-white"
                >
                  Testing & Commissioning
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 03 — Projects */}
          <div className="space-y-4">
            <h4 className="border-b border-white/10 pb-2 text-xs font-bold tracking-widest text-[#EA580C] uppercase">
              Projects & Proof
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <Link href="/projects#ayodhya" className="transition hover:text-white">
                  220 KV Ayodhya Substation
                </Link>
              </li>
              <li>
                <Link href="/projects?category=Substations" className="transition hover:text-white">
                  Substation Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/projects?category=Transmission"
                  className="transition hover:text-white"
                >
                  Transmission Line Packages
                </Link>
              </li>
              <li>
                <Link
                  href="/projects?category=Distribution"
                  className="transition hover:text-white"
                >
                  Urban Electrification Packages
                </Link>
              </li>
              <li>
                <Link href="/projects" className="transition hover:text-white">
                  Contract Ledger (100+ Packages)
                </Link>
              </li>
              <li>
                <Link href="/#engineering-to-energization" className="transition hover:text-white">
                  Execution Process
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 04 — Credentials */}
          <div className="space-y-4">
            <h4 className="border-b border-white/10 pb-2 text-xs font-bold tracking-widest text-[#EA580C] uppercase">
              Credentials
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <Link href="/clients" className="transition hover:text-white">
                  Utility Clients
                </Link>
              </li>
              <li>
                <Link href="/certifications" className="transition hover:text-white">
                  ISO 9001:2015 Certification
                </Link>
              </li>
              <li>
                <Link href="/certifications" className="transition hover:text-white">
                  Class-A Electrical License
                </Link>
              </li>
              <li>
                <Link href="/quality-hse" className="transition hover:text-white">
                  Quality Management (QA/QC)
                </Link>
              </li>
              <li>
                <Link href="/quality-hse#hse" className="transition hover:text-white">
                  HSE & Zero-Harm Protocols
                </Link>
              </li>
              <li>
                <Link href="/certifications#documents" className="transition hover:text-white">
                  Download Public Dossiers
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 05 — Contact & Routing */}
          <div className="space-y-4">
            <h4 className="border-b border-white/10 pb-2 text-xs font-bold tracking-widest text-[#EA580C] uppercase">
              Contact & Routing
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <p className="leading-snug">
                <strong className="block text-white">Corporate Head Office:</strong>
                E-195, Sector-63, Noida, UP 201301
              </p>
              <p className="leading-snug">
                <strong className="block text-white">Phone:</strong>
                0120-4131018 &bull; 9873731300
              </p>
              <p className="leading-snug">
                <strong className="block text-white">Official Email:</strong>
                engineerspowertech1@yahoo.com
              </p>
              <div className="pt-2">
                <Link
                  href="/contact#tender"
                  className="inline-flex items-center gap-1.5 rounded-lg bg-[#EA580C] px-3.5 py-1.5 text-xs font-bold text-white transition hover:bg-orange-600"
                >
                  <span>Submit Tender BOQ</span>
                  <ChevronRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Corporate Trust Baseline */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/5 p-4 text-xs text-slate-400 md:flex-row">
          <div className="flex items-center space-x-3">
            <PowertechLogo variant="light" height={34} className="h-8 w-auto" />
            <span>
              Promoted April 2004 &bull; Banking Partner: <strong>Punjab National Bank</strong>{" "}
              &bull; Class-A / EHV Contractor
            </span>
          </div>

          {/* Employee Login Link matching Section 24 & 25 */}
          <Link
            href="/login"
            className="flex items-center space-x-1.5 rounded-lg border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-semibold text-white transition hover:border-[#EA580C] hover:bg-[#EA580C]"
            title="Authorized Personnel HRMS Gateway"
          >
            <Lock className="h-3.5 w-3.5 text-[#f08020]" />
            <span>Employee Login Portal 🔐</span>
          </Link>
        </div>
      </Container>

      {/* Bottom Utility Bar */}
      <div className="border-t border-white/10 bg-[#03050c] py-4 text-xs text-slate-400">
        <Container className="flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
          <p>
            &copy; {currentYear} Powertech Engineers. All Rights Reserved. Turnkey EPC Power
            Infrastructure.
          </p>
          <div className="flex items-center space-x-4">
            <Link href="/about" className="transition hover:text-white">
              Privacy Policy
            </Link>
            <span>&bull;</span>
            <Link href="/about" className="transition hover:text-white">
              Terms of Engagement
            </Link>
            <span>&bull;</span>
            <Link href="/sitemap.xml" className="transition hover:text-white">
              Sitemap
            </Link>
            <span>&bull;</span>
            <Link href="/login" className="font-semibold text-[#f08020] hover:text-white">
              HRMS Portal 🔐
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
