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
    label: "Home",
    href: "/",
  },
  {
    label: "About Us",
    href: "/about",
  },
  {
    label: "Services",
    href: "/services",
    children: [
      {
        label: "Substations & Switchyards",
        href: "/services/substations-switchyards",
      },
      {
        label: "Industrial Electrification",
        href: "/services/industrial-electrification",
      },
      {
        label: "Transmission Lines",
        href: "/services/transmission-lines",
      },
      {
        label: "Underground Cabling",
        href: "/services/underground-cabling",
      },
      {
        label: "Township Electrification",
        href: "/services/township-electrification",
      },
      {
        label: "AMC & Breakdown Services",
        href: "/services/amc-breakdown",
      },
    ],
  },
  {
    label: "Capabilities",
    href: "/capabilities",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Leadership",
    href: "/leadership",
  },
  {
    label: "Certifications",
    href: "/certifications",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

/**
 * Secondary / Footer Quick Links
 */
export const FOOTER_QUICK_LINKS: NavItem[] = [
  { label: "Company Overview", href: "/about" },
  { label: "Core Capabilities", href: "/capabilities" },
  { label: "Track Record", href: "/projects" },
  { label: "Accreditations", href: "/certifications" },
  { label: "Enquiry & Support", href: "/contact" },
];
