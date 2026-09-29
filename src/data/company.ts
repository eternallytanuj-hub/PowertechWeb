import { CompanyProfile } from "@/types";

/**
 * Company Profile Data Store
 *
 * Sourced 100% directly from the 5 slides of the official Powertech Engineers Company Profile brochure.
 */
export const companyData: CompanyProfile = {
  name: "Powertech Engineers",
  legalName: "Powertech Engineers",
  tagline: "Powering Possibilities Delivering Excellence",
  description:
    "Engineering tomorrow's energy solutions today. Powertech Engineers was promoted in 2004 by a team of qualified engineers to establish excellence across diverse fields of engineering. An ISO 9001:2015 certified company executing turnkey EHV substations up to 400 kV, overhead transmission lines up to 220 kV, underground trenchless cabling, industrial electrification, and township schemes.",
  establishedYear: 2004,
  registrationNumber: null,
  gstNumber: null,
  panNumber: null,
  contact: {
    primaryPhone: "0120-4131018",
    secondaryPhones: ["7881163131"],
    primaryEmail: "engineerspowertech1@yahoo.com",
    enquiryEmail: "engineerspowertech1@yahoo.com",
    supportEmail: null,
    address: {
      street: "E-195, Sector-63",
      city: "Noida",
      state: "Uttar Pradesh",
      country: "India",
      postalCode: "201301",
      formatted: "E-195, Sector-63, Noida, Uttar Pradesh (201301)",
    },
    website: "https://www.powertechengineers.com",
  },
  socialLinks: [],
};

/**
 * Slide 1: Three Core Pillars (Our Strength. Your Advantage.)
 */
export const companyPillars = [
  {
    title: "EXPERTISE",
    color: "green",
    description: "Advanced engineering solutions with accuracy and reliability.",
    icon: "shield",
  },
  {
    title: "COMMITMENT",
    color: "blue",
    description: "Dedicated team committed to quality, safety and innovation.",
    icon: "users",
  },
  {
    title: "EXCELLENCE",
    color: "orange",
    description: "Delivering customized solutions that power a sustainable future.",
    icon: "target",
  },
];

/**
 * Slide 2: Company Overview 6 Pillars
 */
export const companyOverviewCards = [
  {
    title: "About Powertech Engineers",
    icon: "users",
    content:
      "Powertech Engineers was promoted in 2004 by a team of qualified engineers with a vision to establish excellence across diverse fields of engineering. Founded as a partnership firm, the organization has since evolved into a dynamic association of technocrats, managers, and financial experts, combining technical depth with strategic leadership.",
  },
  {
    title: "Execution Excellence",
    icon: "award",
    content:
      "Every project is undertaken with utmost sincerity, precision, and commitment. Backed by modern management practices, skilled manpower, and state-of-the-art tools & testing equipment, we ensure quality, safety, and on-time completion. Our ISO 9001:2015 certified systems reinforce disciplined project controls and a customer-first approach that has earned us consistent trust and repeat mandates.",
  },
  {
    title: "ISO 9001:2015 Certified",
    icon: "check-circle",
    content:
      "Powertech Engineers is an ISO 9001:2015 certified company, committed to quality management systems, process excellence, and continual improvement across all operations.",
  },
  {
    title: "Financial Strength",
    icon: "landmark",
    content:
      "We enjoy the strong confidence of our banking partners, including Punjab National Bank, whose support has been instrumental in scaling operations and meeting delivery milestones.",
  },
  {
    title: "Trusted Partnerships",
    icon: "handshake",
    content:
      "We are privileged to be associated with some of India's biggest utilities and corporate houses, including UPPTCL, UPRVUNL, DVVNL, HVPNL, BSPTCL, BSEB, Indian Oil, AREVA (T&D India Ltd), BSES Delhi, Reliance Energy Ltd., NDPL (Tata Power), PuVVNL, and J&K PDD, among others.",
  },
  {
    title: "Our Vision",
    icon: "eye",
    content:
      "To grow as a leading EPC organization driven by Humanity, Honesty, Safety, and Commitment. We remain focused on building long-term value through engineering excellence, ethical practices, and unwavering dedication to our customers' goals.",
  },
];

/**
 * Slide 2: Core Capabilities at a Glance
 */
export const coreCapabilitiesSummary = [
  {
    title: "Turnkey EPC",
    desc: "EHV Substations, GIS/Hybrid, Bay Extensions, HT/UG Cable Systems",
  },
  {
    title: "Industrial Solutions",
    desc: "Heavy Engineering, Special Grade Fabrication, Electrification & Instrumentation",
  },
  {
    title: "Project Management",
    desc: "Planning, Quality Control, Safety, Timely Commissioning",
  },
  {
    title: "Quality Assurance",
    desc: "ISO 9001:2015 Certified Processes",
  },
];

/**
 * Slide 2: Verified Clientele
 */
export const verifiedClientsList = [
  "UPPTCL",
  "UPRVUNL",
  "DVVNL",
  "HVPNL",
  "BSPTCL",
  "BSEB",
  "Indian Oil",
  "AREVA (T&D India Ltd)",
  "BSES Delhi",
  "Reliance Energy Ltd.",
  "NDPL (Tata Power)",
  "PuVVNL",
  "J&K PDD",
];

/**
 * Slide 3: Salient Features (The 8 Verified Cornerstones)
 */
export const salientFeatures = [
  "Well-structured organization with a dedicated team of engineers, technicians, managers, and financial consultants.",
  "Well equipped with tools & tackles, electrical testing equipment, and design facilities.",
  "Having offices and works in Delhi and Noida.",
  "Established project management methodology with compliance to safety procedures, statutory regulations, and environmental concerns.",
  "Execution of projects within the given timeframe while ensuring quality work as per client specifications.",
  "Regular in-house training of personnel to keep them updated with the latest methods and technology.",
  "Wide spectrum of projects handled, including electrification of 400/220/132/33/11 KV substations, in-feed cabling, and electrification of industrial plants, offices, and buildings.",
  "Committed to retaining the confidence of our clients through sincere efforts, hard work, and building long-lasting relationships.",
];

/**
 * Slide 4: Major Activities (The 6 Core Disciplines)
 */
export const majorActivities = [
  {
    id: "substations",
    number: "01",
    title: "Substations and Switchyards up to 400 kV",
    description:
      "Turnkey engineering, civil foundations, structural erection, equipment installation, testing, and commissioning of extra-high-voltage substations and switchyards up to 400 kV (including 220/132/33/11 kV).",
    highlight: "Up to 400 kV EHV Capability",
  },
  {
    id: "underground-cabling",
    number: "02",
    title: "Under ground cable laying including Trenchless Drilling",
    description:
      "Advanced HT/EHV underground power cabling solutions utilizing state-of-the-art Trenchless Drilling (HDD) methodologies, avoiding surface disruptions in urban, highway, and congested utility corridors.",
    highlight: "Trenchless Drilling / HDD",
  },
  {
    id: "transmission-lines",
    number: "03",
    title: "Over head Transmission Lines up to 220 kV",
    description:
      "End-to-end route surveying, tower foundation casting, lattice tower assembly, conductor stringing, sagging, and line energization for high-voltage transmission lines up to 220 kV.",
    highlight: "Up to 220 kV Grid Infrastructure",
  },
  {
    id: "amc-breakdown",
    number: "04",
    title: "AMC / Breakdown works of Switchyard / plant",
    description:
      "Comprehensive Annual Maintenance Contracts (AMC) and emergency breakdown support for power switchyards, transformers, circuit breakers, and industrial plants with rapid response teams.",
    highlight: "Rapid Response & Preventive Maintenance",
  },
  {
    id: "industrial-electrification",
    number: "05",
    title: "Turnkey projects of Industrial electrification",
    description:
      "Complete power distribution, heavy machinery feeding, MCC/PCC switchgear, busducts, plant illumination, and statutory electrical compliance for heavy manufacturing and process facilities.",
    highlight: "Heavy Industry & Process Plants",
  },
  {
    id: "township-electrification",
    number: "06",
    title: "Township Electrification Projects",
    description:
      "Large-scale government and utility-backed urban and rural electrification distribution schemes, including RAPDRP, IPDS, and PMDP, enhancing distribution reliability and metering.",
    highlight: "RAPDRP, IPDS & PMDP Schemes",
  },
];

/**
 * Slide 5: General Information Operational Pillars
 */
export const generalInfoPillars = [
  {
    title: "SAFE OPERATIONS",
    description: "Committed to safety in every aspect of our work.",
    icon: "shield-check",
  },
  {
    title: "EXPERT TEAM",
    description: "Skilled professionals delivering reliable engineering solutions.",
    icon: "users",
  },
  {
    title: "QUALITY FOCUS",
    description: "Delivering excellence through quality and innovation.",
    icon: "target",
  },
];

/**
 * Voltage capability spectrum verified from brochure
 */
export const voltageCapabilities = ["400 KV", "220 KV", "132 KV", "33 KV", "11 KV"];
