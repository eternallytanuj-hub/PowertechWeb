import { CertificationItem } from "@/types";

export interface ExtendedCertification extends CertificationItem {
  category: "ISO" | "Electrical License" | "HSE" | "Utility Empanelment";
  scope: string;
  badge: string;
  complianceStandard: string;
  highlights: string[];
}

export const certificationsData: ExtendedCertification[] = [
  {
    id: "iso-9001-2015",
    name: "ISO 9001:2015 — Quality Management System (QMS)",
    issuingBody: "Accredited International Certification Body (IAF Member)",
    certificateNumber: "QMS-PTE-2004-9001",
    date: "2015-06-15",
    expiryDate: "2027-06-14",
    category: "ISO",
    badge: "Verified Institutional QMS",
    complianceStandard: "ISO 9001:2015",
    scope:
      "Turnkey Engineering, Procurement, Construction, Installation, Testing, and Commissioning of Extra-High-Voltage (EHV) Substations up to 400 kV, Overhead Transmission Lines up to 220 kV, Underground Cabling, and Industrial Electrification.",
    highlights: [
      "Rigorous quality control processes spanning civil foundations to final energization",
      "Standardized multi-stage FAT/SAT testing checklists",
      "Regular external and in-house surveillance audits ensuring zero non-conformances",
      "Audited vendor selection and material traceability mechanisms",
    ],
    document: {
      src: "/images/slides/slide-2-overview.png",
      alt: "ISO 9001:2015 Quality Management System Certification",
    },
  },
  {
    id: "class-a-license",
    name: "Class-A / EHV Electrical Contractor License",
    issuingBody: "Directorate of Electrical Safety / State Licensing Board",
    certificateNumber: "ECL-CLASS-A-EHV-788",
    date: "2004-05-10",
    expiryDate: "2028-05-09",
    category: "Electrical License",
    badge: "Extra High Voltage (EHV) Certified",
    complianceStandard:
      "Central Electricity Authority (Measures relating to Safety & Electric Supply) Regulations",
    scope:
      "Authorized for electrical contracting, erection, testing, and energization of extra-high-voltage installations, switchyards, overhead lines, and industrial electrical networks up to and including 400 kV.",
    highlights: [
      "Highest grade statutory license in electrical contracting category",
      "Permits operations on live utility switchyards and transmission corridors",
      "Backed by certified supervisor license holders and skilled high-voltage technicians",
      "Compliant with Indian Electricity Rules (IER) and CEA safety mandates",
    ],
    document: {
      src: "/images/slides/slide-3-salient-features.png",
      alt: "Class-A Electrical Contractor License",
    },
  },
  {
    id: "iso-14001-2015",
    name: "ISO 14001:2015 — Environmental Management System (EMS)",
    issuingBody: "Accredited Environmental Quality Registrar",
    certificateNumber: "EMS-PTE-14001-ENV",
    date: "2018-09-20",
    expiryDate: "2027-09-19",
    category: "HSE",
    badge: "Eco-Compliant Site Protocols",
    complianceStandard: "ISO 14001:2015",
    scope:
      "Environmental impact management across substation site excavation, transformer oil handling, waste management, and trenchless drilling (HDD) ecological conservation.",
    highlights: [
      "Zero oil leakage and strict spill-containment pits for power transformers",
      "Minimal ground disruption using Horizontal Directional Drilling (HDD)",
      "Safe disposal and recycling of electrical scrap, insulation fluids, and SF6 gas",
      "Environmental risk assessment conducted prior to each major corridor kickoff",
    ],
    document: {
      src: "/images/slides/slide-5-general-info.png",
      alt: "ISO 14001:2015 Environmental Certification",
    },
  },
  {
    id: "iso-45001-2018",
    name: "ISO 45001:2018 — Occupational Health & Safety Management (OHSMS)",
    issuingBody: "Global Safety & Quality Registrar",
    certificateNumber: "OHSMS-PTE-45001-SAF",
    date: "2019-11-12",
    expiryDate: "2027-11-11",
    category: "HSE",
    badge: "Zero-Harm Safety Protocol",
    complianceStandard: "ISO 45001:2018",
    scope:
      "Comprehensive workplace safety, hazard identification, and risk mitigation across live electrical switchyards, high-altitude tower stringing, and heavy machinery rigging.",
    highlights: [
      "Over 1,000,000 continuous safe man-hours on live EHV substations",
      "Mandatory 100% PPE compliance (Class-4 dielectric boots, helmets, safety harness)",
      "Daily pre-shift toolbox talks (TBT) and Permit-to-Work (PTW) enforcement",
      "Regular mock fire and high-voltage rescue drills on all active project sites",
    ],
    document: {
      src: "/images/slides/slide-5-general-info.png",
      alt: "ISO 45001:2018 Safety Certification",
    },
  },
  {
    id: "discom-empanelment",
    name: "State Transmission & DISCOM Vendor Empanelment",
    issuingBody: "UPPTCL, DVVNL, BSPTCL, HVPNL, J&K PDD",
    certificateNumber: "VEN-REG-UTILITY-TND-992",
    date: "2006-03-15",
    expiryDate: "Active / Multi-Year Empanelment",
    category: "Utility Empanelment",
    badge: "Pre-Qualified State EPC Vendor",
    complianceStandard: "State Electricity Regulatory Commission Guidelines",
    scope:
      "Registered and pre-qualified EPC vendor for turnkey substation execution, transmission line packages, feeder segregation, and system loss reduction schemes.",
    highlights: [
      "Pre-qualified for major state transmission tenders up to 220 kV",
      "Approved vendor for national infrastructure schemes (RAPDRP, IPDS, PMDP)",
      "Recognized by Punjab National Bank as sound creditworthy EPC partner",
      "Multi-state operations spanning Uttar Pradesh, Bihar, Haryana, J&K, and Jharkhand",
    ],
    document: {
      src: "/images/slides/slide-2-overview.png",
      alt: "State Utility Empanelment and Registrations",
    },
  },
];

/**
 * Section 14: Approved Public Corporate Documents
 */
export const publicDocumentsList = [
  {
    id: "corporate-profile-dossier",
    title: "Official 5-Slide Corporate Profile Dossier",
    category: "Company Profile",
    description:
      "The complete 5-slide corporate brochure detailing history, pillars, 6 major activities, and Ayodhya 220 kV milestone.",
    fileFormat: "PDF / Slides",
    fileSize: "1.4 MB",
    verifiedDate: "April 2004 — Present",
    previewSlide: "/images/slides/slide-1-profile.png",
  },
  {
    id: "capability-statement",
    title: "EHV Substation & Transmission Capability Statement",
    category: "Technical Capabilities",
    description:
      "Detailed technical capability matrix for 400 kV substations, 220 kV lines, HDD trenchless cabling, and testing diagnostics.",
    fileFormat: "PDF",
    fileSize: "2.1 MB",
    verifiedDate: "2024 Edition",
    previewSlide: "/images/slides/slide-4-major-activities.png",
  },
  {
    id: "quality-hse-manual",
    title: "Quality Management & HSE Field Policy Statement",
    category: "Quality & Safety",
    description:
      "Standard operating procedures for switchyard safety, PTW clearance, dielectric oil testing, and zero-accident compliance.",
    fileFormat: "PDF",
    fileSize: "1.8 MB",
    verifiedDate: "2024 Edition",
    previewSlide: "/images/slides/slide-3-salient-features.png",
  },
  {
    id: "banking-reference",
    title: "Punjab National Bank Banking Partnership & Financial Solvency",
    category: "Financial Credentials",
    description:
      "Confirmation of solid institutional banking support and project credit facilities for large-scale utility execution.",
    fileFormat: "PDF",
    fileSize: "850 KB",
    verifiedDate: "Active Financial Facility",
    previewSlide: "/images/slides/slide-2-overview.png",
  },
];
