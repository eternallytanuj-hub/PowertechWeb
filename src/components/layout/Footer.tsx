import React from "react";
import Link from "next/link";
import { Container } from "./Container";
import { FOOTER_QUICK_LINKS, SITE_NAME, SITE_TAGLINE } from "@/lib/constants";
import { servicesData } from "@/data/services";
import { companyData } from "@/data/company";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-border bg-surface text-foreground border-t" aria-label="Site Footer">
      <Container className="py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Brief */}
          <div className="space-y-4">
            <h3 className="text-primary text-lg font-bold tracking-tight">{SITE_NAME}</h3>
            <p className="text-muted text-xs font-medium tracking-wider uppercase">
              {SITE_TAGLINE}
            </p>
            <p className="text-muted text-sm leading-relaxed">
              Engineering, Procurement, and Construction (EPC) solutions for critical electrical
              infrastructure.
            </p>
          </div>

          {/* Core Services */}
          <div>
            <h4 className="text-foreground mb-4 text-sm font-semibold tracking-wider uppercase">
              Services
            </h4>
            <ul className="space-y-2 text-sm">
              {servicesData.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-muted hover:text-primary transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground mb-4 text-sm font-semibold tracking-wider uppercase">
              Company
            </h4>
            <ul className="space-y-2 text-sm">
              {FOOTER_QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Verification Notice */}
          <div>
            <h4 className="text-foreground mb-4 text-sm font-semibold tracking-wider uppercase">
              Registered Office
            </h4>
            <div className="text-muted space-y-2 text-sm">
              <p>{companyData.contact.address.formatted}</p>
              <p>Country: {companyData.contact.address.country}</p>
              <p className="text-muted pt-2 text-xs italic">
                Statutory details pending client profile verification.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-border text-muted mt-12 flex flex-col items-center justify-between border-t pt-6 text-xs sm:flex-row">
          <p>
            © {currentYear} {companyData.name}. All rights reserved.
          </p>
          <div className="mt-4 flex space-x-6 sm:mt-0">
            <span>Corporate EPC Electrical Engineering</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
