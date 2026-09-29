"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Container } from "./Container";
import { companyData } from "@/data/company";
import { Phone, Mail, MapPin, Zap, Menu, X, MessageSquare } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("profile");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = ["profile", "overview", "features", "activities", "contact"];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "1. Profile", href: "#profile", id: "profile" },
    { label: "2. Overview", href: "#overview", id: "overview" },
    { label: "3. Salient Features", href: "#features", id: "features" },
    { label: "4. Major Activities", href: "#activities", id: "activities" },
    { label: "5. General Info", href: "#contact", id: "contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all">
      {/* Top Corporate Strip (Brochure Header Info) */}
      <div className="border-b border-slate-200 bg-slate-900 text-xs text-slate-300">
        <Container className="flex items-center justify-between py-2">
          <div className="flex items-center space-x-4 sm:space-x-6">
            <span className="inline-flex items-center text-slate-200">
              <MapPin className="mr-1.5 h-3.5 w-3.5 text-emerald-400" />
              Noida Sector-63 & Delhi
            </span>
            <a
              href={`tel:${companyData.contact.primaryPhone}`}
              className="inline-flex items-center text-slate-200 transition-colors hover:text-orange-400"
            >
              <Phone className="mr-1.5 h-3.5 w-3.5 text-orange-400" />
              {companyData.contact.primaryPhone}
            </a>
            <a
              href="https://wa.me/917881163131"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center text-slate-200 transition-colors hover:text-emerald-400 md:inline-flex"
            >
              <MessageSquare className="mr-1.5 h-3.5 w-3.5 text-emerald-400" />
              WhatsApp: 7881163131
            </a>
          </div>

          <div className="flex items-center space-x-3">
            <a
              href={`mailto:${companyData.contact.primaryEmail}`}
              className="hidden items-center text-slate-300 transition-colors hover:text-sky-300 sm:inline-flex"
            >
              <Mail className="mr-1.5 h-3.5 w-3.5 text-sky-400" />
              {companyData.contact.primaryEmail}
            </a>
            <span className="rounded bg-sky-950 px-2 py-0.5 text-[10px] font-bold tracking-widest text-sky-300 uppercase">
              EPC Up to 400 KV
            </span>
          </div>
        </Container>
      </div>

      {/* Main Navbar */}
      <div
        className={`border-b transition-all duration-200 ${
          isScrolled
            ? "border-slate-200 bg-white/95 shadow-md backdrop-blur-md"
            : "border-slate-100 bg-white shadow-sm"
        }`}
      >
        <Container className="flex h-18 items-center justify-between py-2">
          {/* Brand / Logo (matching brochure styling) */}
          <Link
            href="#profile"
            className="flex items-center space-x-3 rounded-md p-1 focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:outline-none"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#071D36] text-white shadow-md ring-2 ring-slate-900/10">
              <Zap className="h-6 w-6 fill-[#EA580C] text-[#EA580C]" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center text-xl leading-none font-black tracking-tight text-[#071D36]">
                <span>P</span>
                <span className="text-[#EA580C]">O</span>
                <span>WER</span>
              </div>
              <span className="mt-0.5 text-[10px] font-bold tracking-widest text-slate-600 uppercase">
                TECH ENGINEERS
              </span>
            </div>
          </Link>

          {/* Desktop Navigation for the 5 Slides */}
          <nav
            className="hidden lg:flex lg:items-center lg:space-x-1"
            aria-label="5 Slides Navigation"
          >
            {navLinks.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`rounded-lg px-3.5 py-2 text-xs font-bold transition-all ${
                    isActive
                      ? "bg-[#071D36] text-white shadow-sm"
                      : "text-slate-700 hover:bg-slate-100 hover:text-[#071D36]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Action CTA & Mobile Nav Toggle */}
          <div className="flex items-center space-x-3">
            <Link
              href="#contact"
              className="hidden items-center justify-center rounded-lg bg-[#EA580C] px-4 py-2 text-xs font-bold text-white shadow transition-all hover:bg-orange-700 sm:inline-flex"
            >
              Contact / Enquiry
            </Link>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="inline-flex items-center justify-center rounded-lg p-2 text-slate-700 hover:bg-slate-100 lg:hidden"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </Container>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-slate-200 bg-white px-4 py-4 shadow-xl lg:hidden">
          <div className="flex flex-col space-y-2">
            <div className="mb-2 px-2 text-[10px] font-bold tracking-wider text-slate-400 uppercase">
              Brochure Slides (1 - 5)
            </div>
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`rounded-md px-3 py-2 text-sm font-semibold transition-colors ${
                  activeSection === item.id
                    ? "bg-[#071D36] text-white"
                    : "text-slate-800 hover:bg-slate-100"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="border-t border-slate-100 pt-3">
              <a
                href="tel:01204131018"
                className="flex items-center space-x-2 py-1.5 text-sm font-semibold text-orange-600"
              >
                <Phone className="h-4 w-4" />
                <span>Call: 0120-4131018</span>
              </a>
              <a
                href="https://wa.me/917881163131"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 py-1.5 text-sm font-semibold text-emerald-600"
              >
                <MessageSquare className="h-4 w-4" />
                <span>WhatsApp: 7881163131</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
