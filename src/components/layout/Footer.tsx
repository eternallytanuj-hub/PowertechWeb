"use client";

import React from "react";
import Link from "next/link";
import { Container } from "./Container";
import { PowertechLogo } from "@/components/ui/PowertechLogo";
import { MapPin, Phone, Mail, Globe, ArrowUp, MessageSquare, ShieldCheck } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-[#090b2f] text-white" aria-label="Site Footer">
      {/* Top Banner */}
      <div className="border-b border-white/10 bg-[#050720] py-8">
        <Container className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center space-x-3.5">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EA580C] text-white shadow-md">
              <span className="text-xl font-black">⚡</span>
            </div>
            <div>
              <p className="text-base font-bold tracking-tight text-white md:text-lg">
                &ldquo;Engineering tomorrow&apos;s energy solutions today.&rdquo;
              </p>
              <p className="text-xs font-semibold tracking-widest text-[#EA580C] uppercase">
                Powering Possibilities Delivering Excellence
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://wa.me/917881163131"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-emerald-600 px-5 py-2 text-xs font-bold text-white shadow transition hover:bg-emerald-700"
            >
              <MessageSquare className="mr-1.5 h-4 w-4" />
              WhatsApp Us
            </a>
            <a
              href="#top"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="inline-flex items-center rounded-full bg-white/10 px-5 py-2 text-xs font-bold text-white transition hover:bg-white/20"
            >
              <ArrowUp className="mr-1.5 h-4 w-4" />
              Back to Top
            </a>
          </div>
        </Container>
      </div>

      <Container className="py-12 md:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Brief & Logo */}
          <div className="space-y-4">
            <div className="flex items-center">
              <PowertechLogo variant="light" height={44} className="h-11 w-auto" />
            </div>
            <p className="text-xs font-bold tracking-widest text-[#EA580C] uppercase">
              Class-A EPC Electrical Infrastructure Contractors
            </p>
            <p className="text-xs leading-relaxed text-slate-300">
              Turnkey electrical engineering solutions for substations up to 400 kV, heavy cabling,
              overhead transmission infrastructure up to 220 kV, and high-compliance industrial contracting.
            </p>
            <div className="pt-2 text-[11px] text-slate-400">
              <p>Promoted in April 2004 • ISO 9001:2015 Certified</p>
              <p className="mt-0.5">Banking Partner: Punjab National Bank</p>
            </div>
          </div>

          {/* Core Service Disciplines */}
          <div>
            <h4 className="mb-4 text-xs font-bold tracking-widest text-[#EA580C] uppercase">
              Core Disciplines
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <Link href="#services" className="hover:text-white hover:underline">
                  Substation Commissioning (up to 400 kV)
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white hover:underline">
                  Overhead Transmission Lines (up to 220 kV)
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white hover:underline">
                  Trenchless Drilling & Heavy Cabling (HDD)
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white hover:underline">
                  Industrial Electrification & Switchyards
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white hover:underline">
                  RAPDRP / IPDS / PMDP Township Schemes
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white hover:underline">
                  AMC & Breakdown Emergency Maintenance
                </Link>
              </li>
            </ul>
          </div>

          {/* Administrative Hubs from Live Site */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold tracking-widest text-[#EA580C] uppercase">
              Administrative Hubs
            </h4>
            <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-xs">
              <div className="font-bold text-white">Noida Corporate Head Office</div>
              <p className="mt-0.5 text-slate-300">
                E-195, Sector-63, Noida, Uttar Pradesh (201301)
              </p>
              <p className="mt-1 font-semibold text-[#EA580C]">Tel: 0120-4131018</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-xs">
              <div className="font-bold text-white">Delhi Registered Office</div>
              <p className="mt-0.5 text-slate-300">
                215, Jagdamba Tower, 13 Commercial Complex, Preet Vihar, Delhi (110092)
              </p>
              <p className="mt-1 font-semibold text-[#EA580C]">Hotline: +91-9717893182 / 9873731300</p>
            </div>
          </div>

          {/* Quick Communication */}
          <div>
            <h4 className="mb-4 text-xs font-bold tracking-widest text-[#EA580C] uppercase">
              Enterprise Access
            </h4>
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-center space-x-2.5">
                <Phone className="h-4 w-4 text-[#EA580C] shrink-0" />
                <span>9873731300 / 9717893182</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Mail className="h-4 w-4 text-[#EA580C] shrink-0" />
                <a href="mailto:engineerspowertech1@yahoo.com" className="hover:underline">
                  engineerspowertech1@yahoo.com
                </a>
              </div>
              <div className="flex items-center space-x-2.5">
                <Globe className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>www.powertechengineers.com</span>
              </div>
              <div className="pt-2">
                <Link
                  href="#contact"
                  className="inline-flex w-full items-center justify-center rounded-lg bg-[#EA580C] px-4 py-2 text-xs font-bold text-white transition hover:bg-orange-600"
                >
                  B2B Project Inquiry Desk
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="mt-12 flex flex-col items-center justify-between border-t border-white/10 pt-6 text-xs text-slate-400 md:flex-row">
          <p>© {currentYear} Powertech Engineers. All rights reserved.</p>
          <div className="mt-2 flex items-center space-x-4 md:mt-0">
            <span>Class-A Electrical Contracting</span>
            <span>•</span>
            <span>ISO 9001:2015 Certified</span>
            <span>•</span>
            <Link href="#brochure" className="text-[#EA580C] hover:underline">
              Official 5-Slide Dossier
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
