"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Container } from "./Container";
import { PowertechLogo } from "@/components/ui/PowertechLogo";
import {
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  MessageSquare,
  ArrowRight,
  ShieldCheck,
  FileText,
} from "lucide-react";

interface NavLinkItem {
  label: string;
  descriptor: string;
  href: string;
  id: string;
}

const NAV_LINKS: NavLinkItem[] = [
  { label: "Home", descriptor: "Platform Gateway", href: "#", id: "home" },
  { label: "About Us", descriptor: "Operational Core", href: "#features", id: "features" },
  { label: "Services", descriptor: "Blueprint Matrix", href: "#services", id: "services" },
  { label: "Documentation", descriptor: "Field Photos", href: "#documentation", id: "documentation" },
  { label: "Projects", descriptor: "Contract Ledger", href: "#projects", id: "projects" },
  { label: "Brochure", descriptor: "5 Slides Dossier", href: "#brochure", id: "brochure" },
  { label: "Contact Us", descriptor: "B2B Terminal", href: "#contact", id: "contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sectionIds = ["features", "services", "documentation", "projects", "brochure", "contact"];
      let current = "home";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 150) {
            current = id;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full">
      {/* Top Utility & Corporate Routing Strip */}
      <div className="border-b border-white/10 bg-[#090b2f] text-white/90">
        <Container className="flex h-10 items-center justify-between text-xs">
          {/* Direct Phone & Hotline Routing */}
          <div className="flex items-center space-x-4 sm:space-x-6">
            <a
              href="tel:01204131018"
              className="flex items-center space-x-1.5 transition-colors hover:text-[#EA580C]"
              title="Noida Corporate Office Landline"
            >
              <Phone className="h-3.5 w-3.5 text-[#EA580C]" />
              <span className="font-semibold">Noida: 0120-4131018</span>
            </a>
            <a
              href="tel:9873731300"
              className="hidden items-center space-x-1.5 transition-colors hover:text-[#EA580C] sm:flex"
              title="Direct Engineering Hotline"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Hotline: 9873731300</span>
            </a>
            <a
              href="https://wa.me/917881163131"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center space-x-1 text-emerald-400 hover:text-emerald-300 md:flex"
            >
              <MessageSquare className="h-3 w-3" />
              <span>WhatsApp: 7881163131</span>
            </a>
          </div>

          {/* Quick Corporate Routing */}
          <div className="flex items-center space-x-4 text-[11px]">
            <a
              href="mailto:engineerspowertech1@yahoo.com"
              className="hidden items-center space-x-1 text-slate-300 hover:text-white lg:flex"
            >
              <Mail className="h-3 w-3 text-[#EA580C]" />
              <span>engineerspowertech1@yahoo.com</span>
            </a>
            <span className="hidden rounded-full bg-white/10 px-2 py-0.5 font-bold text-white/80 lg:inline">
              ISO 9001:2015
            </span>
            <a
              href="#contact"
              className="inline-flex items-center gap-1 rounded bg-[#EA580C] px-2.5 py-1 font-bold text-white transition hover:bg-orange-600"
            >
              <span>Enterprise Inquiry</span>
              <ArrowRight className="h-3 w-3" />
            </a>
          </div>
        </Container>
      </div>

      {/* Main Navbar matching live site */}
      <div
        className={`border-b transition-all duration-200 ${
          isScrolled
            ? "border-slate-200 bg-white/95 shadow-md backdrop-blur-md"
            : "border-slate-100 bg-white shadow-xs"
        }`}
      >
        <Container className="flex h-18 items-center justify-between py-2">
          {/* Official Powertech Brand Logo */}
          <Link
            href="#"
            className="group flex items-center rounded-lg p-1 transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-[#111650] focus-visible:outline-none"
            aria-label="Powertech Engineers Home"
          >
            <PowertechLogo height={44} className="h-10 w-auto transition-transform group-hover:scale-[1.02] sm:h-11" />
          </Link>

          {/* Desktop Navigation with Descriptors */}
          <nav className="hidden xl:flex xl:items-center xl:space-x-1" aria-label="Main Navigation">
            {NAV_LINKS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`group flex flex-col rounded-lg px-3 py-1.5 transition-all ${
                    isActive
                      ? "bg-[#111650] text-white shadow-xs"
                      : "text-slate-700 hover:bg-slate-100 hover:text-[#111650]"
                  }`}
                >
                  <span className="text-xs font-bold leading-tight">{item.label}</span>
                  <span
                    className={`text-[9px] font-medium leading-none ${
                      isActive ? "text-[#f08020]" : "text-slate-400 group-hover:text-slate-600"
                    }`}
                  >
                    {item.descriptor}
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* Fallback Nav for regular desktop (lg to xl) */}
          <nav className="hidden lg:flex xl:hidden lg:items-center lg:space-x-1">
            {NAV_LINKS.slice(0, 6).map((item) => {
              const isActive = activeSection === item.id;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`rounded-lg px-2.5 py-1.5 text-xs font-bold transition-all ${
                    isActive ? "bg-[#111650] text-white" : "text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action CTA & Mobile Nav Toggle */}
          <div className="flex items-center space-x-3">
            <Link
              href="#contact"
              className="magnetic-button hidden items-center justify-center rounded-full bg-[#EA580C] px-5 py-2 text-xs font-bold text-white shadow-sm transition-all hover:bg-orange-600 sm:inline-flex"
            >
              Start B2B Inquiry
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
          <div className="mb-3 flex items-center justify-between border-b border-slate-100 pb-2">
            <PowertechLogo height={32} className="h-8 w-auto" />
            <span className="text-[10px] font-bold tracking-widest text-[#EA580C] uppercase">
              EPC CONTRACTORS
            </span>
          </div>

          <div className="flex flex-col space-y-1">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${
                  activeSection === item.id
                    ? "bg-[#111650] text-white"
                    : "text-slate-800 hover:bg-slate-100"
                }`}
              >
                <span>{item.label}</span>
                <span className="text-[11px] text-[#f08020] font-normal">{item.descriptor}</span>
              </Link>
            ))}

            <div className="border-t border-slate-100 pt-3">
              <a
                href="tel:01204131018"
                className="flex items-center space-x-2 py-1.5 text-xs font-semibold text-slate-700"
              >
                <Phone className="h-4 w-4 text-[#EA580C]" />
                <span>Noida: 0120-4131018</span>
              </a>
              <a
                href="tel:9873731300"
                className="flex items-center space-x-2 py-1.5 text-xs font-semibold text-slate-700"
              >
                <Phone className="h-4 w-4 text-[#EA580C]" />
                <span>Hotline: 9873731300</span>
              </a>
              <a
                href="https://wa.me/917881163131"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 py-1.5 text-xs font-semibold text-emerald-600"
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
