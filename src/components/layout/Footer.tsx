import React from "react";
import Link from "next/link";
import { Container } from "./Container";
import { FOOTER_QUICK_LINKS } from "@/lib/constants";
import { servicesData } from "@/data/services";
import { companyData } from "@/data/company";
import { MapPin, Phone, Mail, Globe, Zap, ArrowRight } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-border border-t bg-slate-900 text-white" aria-label="Site Footer">
      {/* Top Value Banner from Brochure */}
      <div className="border-b border-white/10 bg-slate-950 py-8">
        <Container className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center space-x-3">
            <div className="bg-accent flex h-12 w-12 items-center justify-center rounded-xl text-white shadow-md">
              <Zap className="h-7 w-7 fill-white" />
            </div>
            <div>
              <p className="text-lg font-bold tracking-tight text-white">
                Engineering tomorrow&apos;s energy solutions today.
              </p>
              <p className="text-accent text-xs font-semibold tracking-widest uppercase">
                {companyData.tagline}
              </p>
            </div>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-md bg-white px-5 py-2.5 text-sm font-bold text-slate-950 shadow transition hover:bg-slate-100"
          >
            <span>Consult Our Engineers</span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Container>
      </div>

      <Container className="py-14 md:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Brief */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-black tracking-tight text-white">
                P<span className="text-accent">O</span>WERTECH
              </span>
            </div>
            <p className="text-xs font-bold tracking-widest text-slate-400 uppercase">
              ENGINEERS & CONTRACTORS
            </p>
            <p className="text-sm leading-relaxed text-slate-300">
              EPC contractor executing 400/220/132/33/11 KV substations, transmission lines,
              industrial electrification, and breakdown maintenance across Delhi, Noida, and
              Northern India.
            </p>
          </div>

          {/* Core Services */}
          <div>
            <h4 className="text-accent mb-4 text-xs font-bold tracking-widest uppercase">
              Turnkey Capabilities
            </h4>
            <ul className="space-y-2.5 text-sm">
              {servicesData.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-slate-300 transition-colors hover:text-white"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-accent mb-4 text-xs font-bold tracking-widest uppercase">
              Company Overview
            </h4>
            <ul className="space-y-2.5 text-sm">
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

          {/* Verified Brochure Contact Details */}
          <div>
            <h4 className="text-accent mb-4 text-xs font-bold tracking-widest uppercase">
              Corporate Office & Works
            </h4>
            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-start space-x-2.5">
                <MapPin className="text-success mt-0.5 h-5 w-5 shrink-0" />
                <span>{companyData.contact.address.formatted}</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="text-accent h-4 w-4 shrink-0" />
                <a
                  href={`tel:${companyData.contact.primaryPhone}`}
                  className="transition-colors hover:text-white"
                >
                  {companyData.contact.primaryPhone}
                </a>
              </div>
              <div className="flex items-center space-x-2.5">
                <Mail className="text-secondary h-4 w-4 shrink-0" />
                <a
                  href={`mailto:${companyData.contact.primaryEmail}`}
                  className="transition-colors hover:text-white"
                >
                  {companyData.contact.primaryEmail}
                </a>
              </div>
              <div className="flex items-center space-x-2.5">
                <Globe className="text-success h-4 w-4 shrink-0" />
                <span>Delhi & Noida Works Facilities</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between border-t border-white/10 pt-6 text-xs text-slate-400 sm:flex-row">
          <p>
            © {currentYear} {companyData.name}. All rights reserved.
          </p>
          <div className="mt-3 flex space-x-6 sm:mt-0">
            <span>Electrification up to 400/220/132/33/11 KV</span>
            <span>Safety & Statutory Compliant</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
