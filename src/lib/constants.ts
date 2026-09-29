import { NavItem } from "@/types";

export const SITE_NAME = "Powertech Engineers";
export const SITE_TAGLINE = "Electrical Infrastructure & EPC Solutions";
export const DEFAULT_SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://powertechengineers.com";

/**
 * Main Navigation Items
 * Defines the comprehensive routing architecture for the site.
 */
export const NAV_ITEMS: NavItem[] = [
  {
    label: "1. Profile",
    href: "#profile",
  },
  {
    label: "2. Overview",
    href: "#overview",
  },
  {
    label: "3. Salient Features",
    href: "#features",
  },
  {
    label: "4. Major Activities",
    href: "#activities",
  },
  {
    label: "5. Contact & Info",
    href: "#contact",
  },
];

/**
 * Secondary / Footer Quick Links
 */
export const FOOTER_QUICK_LINKS: NavItem[] = [
  { label: "Company Profile (Slide 1)", href: "#profile" },
  { label: "Company Overview (Slide 2)", href: "#overview" },
  { label: "Salient Features (Slide 3)", href: "#features" },
  { label: "Major Activities (Slide 4)", href: "#activities" },
  { label: "General Info & Contact (Slide 5)", href: "#contact" },
];
