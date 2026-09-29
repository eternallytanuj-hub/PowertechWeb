import React from "react";
import Link from "next/link";
import { Container } from "./Container";
import { FOOTER_QUICK_LINKS } from "@/lib/constants";
import { companyData, majorActivities } from "@/data/company";
import { MapPin, Phone, Mail, Globe, Zap, ArrowUp, MessageSquare } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-[#071D36] text-white" aria-label="Site Footer">
      {/* Top Banner from Brochure */}
      <div className="border-b border-white/10 bg-[#051528] py-8">
        <Container className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center space-x-3.5">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EA580C] text-white shadow-md">
              <Zap className="h-6 w-6 fill-white" />
            </div>
            <div>
              <p className="text-base font-bold tracking-tight text-white md:text-lg">
                &ldquo;Engineering tomorrow&apos;s energy solutions today.&rdquo;
              </p>
              <p className="text-xs font-semibold tracking-widest text-[#EA580C] uppercase">
                {companyData.tagline}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://wa.me/917881163131"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg bg-emerald-600 px-4 py-2 text-xs font-bold text-white shadow transition hover:bg-emerald-700"
            >
              <MessageSquare className="mr-1.5 h-4 w-4" />
              WhatsApp Us
            </a>
            <Link
              href="#profile"
              className="inline-flex items-center rounded-lg bg-white/10 px-4 py-2 text-xs font-bold text-white transition hover:bg-white/20"
            >
              <ArrowUp className="mr-1.5 h-4 w-4" />
              Back to Top
            </Link>
          </div>
        </Container>
      </div>

      <Container className="py-12 md:py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Brief */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-black tracking-tight text-white">
                P<span className="text-[#EA580C]">O</span>WERTECH
              </span>
            </div>
            <p className="text-xs font-bold tracking-widest text-slate-400 uppercase">
              ENGINEERS & CONTRACTORS
            </p>
            <p className="text-xs leading-relaxed text-slate-300">
              Turnkey EPC contractor executing 400/220/132/33/11 KV substations, overhead
              transmission lines up to 220 kV, underground trenchless cabling, industrial
              electrification, and breakdown maintenance across Northern India.
            </p>
          </div>

          {/* Core Activities from Slide 4 */}
          <div>
            <h4 className="mb-4 text-xs font-bold tracking-widest text-[#EA580C] uppercase">
              Major Activities
            </h4>
            <ul className="space-y-2 text-xs">
              {majorActivities.map((act) => (
                <li key={act.id}>
                  <Link
                    href="#activities"
                    className="text-slate-300 transition-colors hover:text-white"
                  >
                    • {act.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Jump to Slides */}
          <div>
            <h4 className="mb-4 text-xs font-bold tracking-widest text-[#EA580C] uppercase">
              Slide Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              {FOOTER_QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-300 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Verified Coordinates from Slide 5 */}
          <div>
            <h4 className="mb-4 text-xs font-bold tracking-widest text-[#EA580C] uppercase">
              Corporate Office & Works
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start space-x-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                <span>{companyData.contact.address.formatted}</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="h-4 w-4 shrink-0 text-orange-400" />
                <a
                  href={`tel:${companyData.contact.primaryPhone}`}
                  className="transition-colors hover:text-white"
                >
                  {companyData.contact.primaryPhone}
                </a>
              </div>
              <div className="flex items-center space-x-2.5">
                <MessageSquare className="h-4 w-4 shrink-0 text-emerald-400" />
                <a
                  href="https://wa.me/917881163131"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  +91 7881163131
                </a>
              </div>
              <div className="flex items-center space-x-2.5">
                <Mail className="h-4 w-4 shrink-0 text-sky-400" />
                <a
                  href={`mailto:${companyData.contact.primaryEmail}`}
                  className="transition-colors hover:text-white"
                >
                  {companyData.contact.primaryEmail}
                </a>
              </div>
              <div className="flex items-center space-x-2.5">
                <Globe className="h-4 w-4 shrink-0 text-emerald-400" />
                <span>Offices & Works in Delhi and Noida</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 flex flex-col items-center justify-between border-t border-white/10 pt-6 text-[11px] text-slate-400 sm:flex-row">
          <p>
            © {currentYear} {companyData.name}. All rights reserved.
          </p>
          <div className="mt-3 flex space-x-4 sm:mt-0">
            <span>Electrification up to 400/220/132/33/11 KV</span>
            <span>•</span>
            <span>ISO 9001:2015 Certified</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
