"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
  Lock,
  ChevronDown,
  Zap,
  Building,
  HardHat,
  Users,
  Award,
  Layers,
} from "lucide-react";

interface SubMenuItem {
  label: string;
  href: string;
  desc?: string;
}

interface NavItemData {
  label: string;
  href: string;
  subItems?: SubMenuItem[];
}

const NAVIGATION_ITEMS: NavItemData[] = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "/about",
    subItems: [
      {
        label: "Company Overview",
        href: "/about#overview",
        desc: "Two decades of EPC delivery since 2004",
      },
      {
        label: "Our Journey",
        href: "/about#journey",
        desc: "From foundation technocrats to state EPC partner",
      },
      {
        label: "Vision & Mission",
        href: "/about#vision",
        desc: "Humanity, honesty, safety, and commitment",
      },
      {
        label: "Leadership & Team",
        href: "/leadership",
        desc: "Meet the technocrat founders, directors & 3D team",
      },
      {
        label: "Infrastructure & Resources",
        href: "/capabilities#resources",
        desc: "Noida HQ, testing fleets & HDD machinery",
      },
      {
        label: "Certifications",
        href: "/certifications",
        desc: "ISO 9001:2015 & Class-A EHV License",
      },
    ],
  },
  {
    label: "Services",
    href: "/services",
    subItems: [
      {
        label: "Substations & Switchyards",
        href: "/services#substations",
        desc: "Turnkey execution up to 400 kV EHV",
      },
      {
        label: "Transmission Lines",
        href: "/services#transmission",
        desc: "Lattice towers & conductor stringing up to 220 kV",
      },
      {
        label: "Distribution Infrastructure",
        href: "/services#distribution",
        desc: "RAPDRP, IPDS & PMDP schemes",
      },
      {
        label: "Underground Cabling (HDD)",
        href: "/services#underground-cabling",
        desc: "Trenchless drilling & XLPE cable systems",
      },
      {
        label: "Industrial Electrical Works",
        href: "/services#industrial-electrical",
        desc: "Plant switchyards, PCC/MCC, and busducts",
      },
      {
        label: "Testing & Commissioning",
        href: "/services#testing-commissioning",
        desc: "Relay injection, oil BDV & CEIG sign-off",
      },
    ],
  },
  {
    label: "Projects",
    href: "/projects",
    subItems: [
      {
        label: "Featured Projects",
        href: "/projects#featured",
        desc: "Flagship 220 KV Ayodhya Substation & landmarks",
      },
      {
        label: "Substation Projects",
        href: "/projects?category=Substations",
        desc: "EHV switchyards & bay extensions",
      },
      {
        label: "Transmission Projects",
        href: "/projects?category=Transmission",
        desc: "Lines up to 220 kV across UP & Bihar",
      },
      {
        label: "Distribution Projects",
        href: "/projects?category=Distribution",
        desc: "J&K PDD & DVVNL urban network packages",
      },
      {
        label: "Underground Cabling Projects",
        href: "/projects?category=Underground+Cabling",
        desc: "HDD trenchless corridors",
      },
      {
        label: "Project Search & Filters",
        href: "/projects#filters",
        desc: "Browse 100+ work packages by state & voltage",
      },
    ],
  },
  {
    label: "Capabilities",
    href: "/capabilities",
    subItems: [
      {
        label: "Engineering Capability",
        href: "/capabilities#engineering",
        desc: "AutoCAD SLD design & protection curves",
      },
      {
        label: "EPC Execution Capability",
        href: "/capabilities#execution",
        desc: "Single-point turnkey site delivery",
      },
      {
        label: "Testing & Diagnostics",
        href: "/capabilities#testing",
        desc: "Mobile high-vacuum oil filtration units",
      },
      {
        label: "Equipment & Resources",
        href: "/capabilities#resources",
        desc: "250+ engineers, mobile cranes & HDD rigs",
      },
    ],
  },
  {
    label: "Clients",
    href: "/clients",
    subItems: [
      {
        label: "Transmission Utilities",
        href: "/clients#transmission",
        desc: "UPPTCL, HVPNL, BSPTCL, RRVPNL",
      },
      {
        label: "Distribution Utilities",
        href: "/clients#distribution",
        desc: "DVVNL, PuVVNL, BSES, NDPL Tata Power, J&K PDD",
      },
      {
        label: "Government / PSU Clients",
        href: "/clients#psu",
        desc: "Indian Oil, UPRVUNL, BSEB",
      },
      {
        label: "Industrial Clients",
        href: "/clients#industrial",
        desc: "AREVA T&D, Reliance Energy, process plants",
      },
    ],
  },
  {
    label: "Quality & HSE",
    href: "/quality-hse",
    subItems: [
      {
        label: "Quality Management (QA/QC)",
        href: "/quality-hse#quality",
        desc: "ISO 9001:2015 multi-stage audits",
      },
      {
        label: "HSE Safety Protocols",
        href: "/quality-hse#hse",
        desc: "Zero-Harm PTW & 1,000,000 safe man-hours",
      },
      {
        label: "Statutory Compliance",
        href: "/quality-hse#compliance",
        desc: "CEA regulations & Indian Electricity Rules",
      },
      {
        label: "Certifications & Licenses",
        href: "/certifications",
        desc: "Class-A EHV License & accredited badges",
      },
    ],
  },
  {
    label: "Careers",
    href: "/careers",
    subItems: [
      { label: "Why Powertech", href: "/careers#why", desc: "Build state energy infrastructure" },
      {
        label: "Open Positions",
        href: "/careers#positions",
        desc: "Substation engineers, testing specialists & GETs",
      },
      {
        label: "Submit Resume",
        href: "/careers#apply",
        desc: "Public candidate recruitment portal",
      },
    ],
  },
  {
    label: "Contact",
    href: "/contact",
    subItems: [
      {
        label: "Corporate Office",
        href: "/contact#corporate",
        desc: "E-195 Sector-63 Noida Head Office",
      },
      {
        label: "Registered Office",
        href: "/contact#registered",
        desc: "Delhi statutory & logistics hub",
      },
      { label: "Business Enquiry", href: "/contact#enquiry", desc: "B2B infrastructure terminal" },
      {
        label: "Tender / BOQ Desk",
        href: "/contact#tender",
        desc: "Upload tender specifications & drawings",
      },
    ],
  },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full transition-all">
      {/* Top Utility & Routing Strip */}
      <div className="border-b border-white/10 bg-[#060a17] text-white/90">
        <Container className="flex h-10 items-center justify-between text-xs">
          {/* Direct Phone & Hotline Routing */}
          <div className="flex items-center space-x-4 sm:space-x-6">
            <a
              href="tel:01204131018"
              className="flex items-center space-x-1.5 transition-colors hover:text-[#f08020]"
              title="Noida Corporate Office Landline"
            >
              <Phone className="h-3.5 w-3.5 text-[#EA580C]" />
              <span className="font-semibold">Noida: 0120-4131018</span>
            </a>
            <a
              href="tel:9873731300"
              className="hidden items-center space-x-1.5 transition-colors hover:text-[#f08020] sm:flex"
              title="Direct Engineering Hotline"
            >
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
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
            <span className="hidden rounded-full bg-emerald-500/20 px-2 py-0.5 font-mono font-bold text-emerald-400 lg:inline">
              Class-A EHV License
            </span>
            <Link
              href="/contact#tender"
              className="inline-flex items-center gap-1 rounded bg-[#EA580C] px-2.5 py-1 font-bold text-white transition hover:bg-orange-600"
            >
              <span>Tender / BOQ Upload</span>
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </Container>
      </div>

      {/* Main Desktop Header Bar */}
      <div
        className={`border-b transition-all duration-300 ${
          isScrolled
            ? "border-slate-200 bg-white/95 shadow-md backdrop-blur-md"
            : "border-slate-100 bg-white shadow-xs"
        }`}
      >
        <Container className="flex h-20 items-center justify-between py-2">
          {/* Official Powertech Brand Logo */}
          <Link
            href="/"
            className="group flex shrink-0 items-center rounded-lg p-1 transition-opacity hover:opacity-90 focus:outline-none"
            aria-label="Powertech Engineers Home"
          >
            <PowertechLogo
              height={46}
              className="h-11 w-auto transition-transform group-hover:scale-[1.02] sm:h-12"
            />
          </Link>

          {/* Center Navigation with Dropdown Menus */}
          <nav className="hidden items-center space-x-1 lg:flex" aria-label="Main Navigation">
            {NAVIGATION_ITEMS.map((item) => {
              const isActive =
                pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
              const hasSub = item.subItems && item.subItems.length > 0;

              return (
                <div
                  key={item.label}
                  className="group relative"
                  onMouseEnter={() => hasSub && setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center space-x-1 rounded-lg px-2.5 py-2 text-xs font-bold transition-all ${
                      isActive
                        ? "bg-[#111650] text-white shadow-xs"
                        : "text-slate-700 hover:bg-slate-100 hover:text-[#111650]"
                    }`}
                  >
                    <span>{item.label}</span>
                    {hasSub && (
                      <ChevronDown
                        className={`h-3 w-3 transition-transform duration-200 ${
                          activeDropdown === item.label
                            ? "rotate-180 text-[#f08020]"
                            : "text-slate-400"
                        }`}
                      />
                    )}
                  </Link>

                  {/* Mega Dropdown Menu */}
                  {hasSub && activeDropdown === item.label && (
                    <div className="animate-in fade-in slide-in-from-top-2 absolute top-full left-0 z-50 w-72 pt-2 duration-200">
                      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl">
                        <div className="mb-1 rounded-t-xl border-b border-slate-100 bg-slate-50/80 px-3 py-2">
                          <span className="text-[10px] font-bold tracking-wider text-[#EA580C] uppercase">
                            {item.label} Sections
                          </span>
                        </div>
                        <div className="space-y-0.5">
                          {item.subItems!.map((sub) => (
                            <Link
                              key={sub.label}
                              href={sub.href}
                              onClick={() => setActiveDropdown(null)}
                              className="group/item flex flex-col rounded-lg px-3 py-2 transition-colors hover:bg-slate-50"
                            >
                              <span className="text-xs font-bold text-slate-800 group-hover/item:text-[#111650]">
                                {sub.label}
                              </span>
                              {sub.desc && (
                                <span className="line-clamp-1 text-[10px] text-slate-400 group-hover/item:text-slate-600">
                                  {sub.desc}
                                </span>
                              )}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Right Action Elements: Distinct Employee Login Button & Mobile Toggle */}
          <div className="flex items-center space-x-3">
            {/* Distinct Employee Login 🔐 Button (Specification Section 4 & 25) */}
            <Link
              href="/login"
              className="inline-flex items-center space-x-1.5 rounded-full border border-[#111650]/20 bg-[#111650] px-4 py-2 text-xs font-bold text-white shadow-sm transition hover:border-[#EA580C] hover:bg-[#EA580C]"
              title="Secure Employee HRMS Login Gateway"
            >
              <Lock className="h-3.5 w-3.5 text-[#f08020]" />
              <span>Employee Login</span>
              <span className="text-xs font-normal">🔐</span>
            </Link>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="inline-flex cursor-pointer items-center justify-center rounded-lg p-2 text-slate-700 hover:bg-slate-100 lg:hidden"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </Container>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="max-h-[85vh] overflow-y-auto border-b border-slate-200 bg-white px-5 py-4 shadow-2xl lg:hidden">
          <div className="mb-4 flex items-center justify-between border-b border-slate-100 pb-3">
            <PowertechLogo height={36} className="h-9 w-auto" />
            <span className="text-[10px] font-bold tracking-widest text-[#EA580C] uppercase">
              EPC CONTRACTORS
            </span>
          </div>

          <div className="flex flex-col space-y-1">
            {NAVIGATION_ITEMS.map((item) => (
              <div key={item.label} className="border-b border-slate-50 py-1">
                <Link
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between rounded-lg px-3 py-2 text-sm font-bold text-slate-800 hover:bg-slate-100"
                >
                  <span>{item.label}</span>
                  <ChevronRight className="h-4 w-4 text-slate-400" />
                </Link>
                {item.subItems && (
                  <div className="space-y-1 pb-1 pl-6">
                    {item.subItems.slice(0, 3).map((sub) => (
                      <Link
                        key={sub.label}
                        href={sub.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-1 text-xs text-slate-500 hover:text-[#111650]"
                      >
                        &bull; {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Mobile Employee Login Link */}
            <div className="pt-3">
              <Link
                href="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center space-x-2 rounded-xl bg-[#111650] py-3 text-xs font-bold text-white shadow-md"
              >
                <Lock className="h-4 w-4 text-[#f08020]" />
                <span>Secure Employee Login Portal 🔐</span>
              </Link>
            </div>

            {/* Direct Telecom Coordinates */}
            <div className="space-y-2 border-t border-slate-100 pt-3 text-xs text-slate-700">
              <a href="tel:01204131018" className="flex items-center space-x-2">
                <Phone className="h-3.5 w-3.5 text-[#EA580C]" />
                <span>Noida Board: 0120-4131018</span>
              </a>
              <a href="tel:9873731300" className="flex items-center space-x-2">
                <Phone className="h-3.5 w-3.5 text-[#EA580C]" />
                <span>Engineering Hotline: 9873731300</span>
              </a>
              <a
                href="https://wa.me/917881163131"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 font-semibold text-emerald-600"
              >
                <MessageSquare className="h-3.5 w-3.5" />
                <span>WhatsApp: 7881163131</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function ChevronRight(props: any) {
  return (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  );
}
