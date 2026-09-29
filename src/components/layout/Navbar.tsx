import React from "react";
import Link from "next/link";
import { Container } from "./Container";
import { MobileNav } from "./MobileNav";
import { NAV_ITEMS } from "@/lib/constants";
import { companyData } from "@/data/company";
import { ChevronDown, Phone, Mail, MapPin, Zap } from "lucide-react";

export function Navbar() {
  return (
    <header className="border-border bg-background/95 supports-[backdrop-filter]:bg-background/90 sticky top-0 z-40 w-full border-b shadow-sm backdrop-blur">
      {/* Top Corporate Strip (Brochure Header Info) */}
      <div className="border-border/60 text-muted hidden border-b bg-slate-50 py-1.5 text-xs sm:block">
        <Container className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <span className="inline-flex items-center font-medium text-slate-700">
              <MapPin className="text-success mr-1.5 h-3.5 w-3.5" />
              Noida Sector-63 & Delhi
            </span>
            <a
              href={`tel:${companyData.contact.primaryPhone}`}
              className="hover:text-accent inline-flex items-center text-slate-700 transition-colors"
            >
              <Phone className="text-accent mr-1.5 h-3.5 w-3.5" />
              {companyData.contact.primaryPhone}
            </a>
            <a
              href={`mailto:${companyData.contact.primaryEmail}`}
              className="hover:text-secondary inline-flex items-center text-slate-700 transition-colors"
            >
              <Mail className="text-secondary mr-1.5 h-3.5 w-3.5" />
              {companyData.contact.primaryEmail}
            </a>
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-[10px] font-semibold tracking-widest text-slate-600 uppercase">
              EPC Up to 400 KV
            </span>
          </div>
        </Container>
      </div>

      {/* Main Navbar */}
      <Container className="flex h-18 items-center justify-between py-2">
        {/* Brand / Logo (matching brochure styling) */}
        <Link
          href="/"
          className="focus-visible:ring-primary flex items-center space-x-2.5 rounded-md p-1 focus-visible:ring-2 focus-visible:outline-none"
        >
          <div className="bg-primary ring-primary/20 flex h-10 w-10 items-center justify-center rounded-lg text-white shadow-sm ring-2">
            <Zap className="text-accent fill-accent h-6 w-6" />
          </div>
          <div className="flex flex-col">
            <div className="text-primary flex items-center text-xl leading-none font-black tracking-tight">
              <span>P</span>
              <span className="text-accent">O</span>
              <span>WER</span>
            </div>
            <span className="mt-0.5 text-[10px] font-bold tracking-widest text-slate-500 uppercase">
              TECH ENGINEERS
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex lg:items-center lg:space-x-7" aria-label="Main Navigation">
          {NAV_ITEMS.map((item) => (
            <div key={item.label} className="group relative">
              {item.children ? (
                <div className="relative py-2">
                  <Link
                    href={item.href}
                    className="hover:text-secondary focus-visible:ring-secondary inline-flex items-center text-sm font-semibold text-slate-800 transition-colors focus-visible:ring-2 focus-visible:outline-none"
                  >
                    <span>{item.label}</span>
                    <ChevronDown className="group-hover:text-secondary ml-1 h-3.5 w-3.5 text-slate-400 transition-transform duration-200 group-hover:rotate-180" />
                  </Link>

                  {/* Dropdown Menu */}
                  <div className="invisible absolute top-full left-0 z-50 pt-1 opacity-0 transition-all duration-150 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                    <div className="border-border bg-background w-72 rounded-lg border p-2.5 shadow-xl">
                      <div className="mb-2 px-3 pt-1 text-[11px] font-bold tracking-wider text-slate-400 uppercase">
                        Turnkey Services (Up to 400KV)
                      </div>
                      {item.children.map((subItem) => (
                        <Link
                          key={subItem.label}
                          href={subItem.href}
                          className="hover:text-secondary block rounded-md px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  href={item.href}
                  className="hover:text-secondary focus-visible:ring-secondary text-sm font-semibold text-slate-800 transition-colors focus-visible:ring-2 focus-visible:outline-none"
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Action Button & Mobile Nav */}
        <div className="flex items-center space-x-4">
          <Link
            href="/contact"
            className="bg-accent hover:bg-accent-light focus-visible:ring-accent hidden items-center justify-center rounded-md px-5 py-2.5 text-sm font-bold text-white shadow-sm transition-all focus-visible:ring-2 focus-visible:outline-none sm:inline-flex"
          >
            Request Quotation
          </Link>
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
