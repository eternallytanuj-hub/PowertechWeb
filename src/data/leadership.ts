import { LeadershipMember } from "@/types";

/**
 * Leadership Team Data Store
 * Grounded in Powertech Engineers' 2004 technocrat engineering foundation.
 */
export interface EnhancedLeader extends LeadershipMember {
  statement: string;
  experienceYears: number;
  education: string;
  responsibilities: string[];
  contributions: string[];
  roleBadge: string;
}

export const leadershipData: EnhancedLeader[] = [
  {
    id: "managing-director",
    name: "Er. R. K. Sharma",
    designation: "Founder & Managing Director",
    roleBadge: "EPC Strategy & Executive Governance",
    experienceYears: 28,
    education: "B.Tech (Electrical Engineering), Chartered Engineer (India)",
    biography:
      "A founding technocrat promoter of Powertech Engineers since April 2004. With over 28 years of power transmission and substation engineering leadership, he oversees corporate strategy, banking relations with Punjab National Bank, client liaisons with state utilities, and turnkey execution standards.",
    statement:
      "Engineering excellence is not a slogan; it is the discipline of delivering grid assets that power state economies with zero compromise on safety and precision.",
    responsibilities: [
      "Strategic Governance & Corporate Direction",
      "State Utility & Discom Board Level Liaison",
      "Banking & Financial Resource Management",
      "Long-term EPC Expansion & Joint Ventures",
    ],
    contributions: [
      "Promoted Powertech Engineers in 2004 from a specialized firm to a premier Class-A EPC provider",
      "Steered landmark 220 KV and 132 KV turnkey substation mandates across Northern India",
      "Secured ISO 9001:2015 institutional accreditation across all site operations",
    ],
    qualifications: [
      "B.Tech (Electrical Engineering)",
      "Fellow, Institution of Engineers (FIE)",
      "Certified High-Voltage Substation Consultant",
    ],
    image: {
      src: "/leadership/director-1.png",
      alt: "Er. R. K. Sharma - Founder & Managing Director",
    },
    linkedinUrl: null,
  },
  {
    id: "technical-director",
    name: "Er. V. P. Singh",
    designation: "Technical Director (EHV Projects & Operations)",
    roleBadge: "Substations & EHV Transmission Lines",
    experienceYears: 24,
    education: "M.Tech (Power Systems Engineering), B.E. (Electrical)",
    biography:
      "Leads all engineering survey, layout design, single line diagram approvals, and transmission corridor erection. Possesses deep technical expertise in 400 kV and 220 kV switchyard gantry assembly, transformer commissioning, and conductor sagging methodologies.",
    statement:
      "The integrity of a high-voltage grid lies in the tolerances of its weakest link. We engineer every foundation, busbar, and protection clamp to withstand decades of fault stress.",
    responsibilities: [
      "EHV Substation Engineering & Switchyard Architecture",
      "Overhead Transmission Lines (up to 220 kV) Execution",
      "Technical Compliance with CEA & State Grid Codes",
      "Civil-to-Electrical Interlock Engineering",
    ],
    contributions: [
      "Direct technical oversight of the 220 KV Ayodhya Substation turnkey project delivery",
      "Pioneered high-altitude transmission stringing protocols for J&K PDD mountain corridors",
      "Established standard operating procedures for zero-outage switchyard cutovers",
    ],
    qualifications: [
      "M.Tech (Power Systems Engineering)",
      "B.E. (Electrical Engineering)",
      "Certified Energy Auditor (BEE)",
    ],
    image: {
      src: "/leadership/director-2.png",
      alt: "Er. V. P. Singh - Technical Director",
    },
    linkedinUrl: null,
  },
  {
    id: "head-testing-commissioning",
    name: "Er. A. K. Verma",
    designation: "Head of Testing, Protection & Commissioning",
    roleBadge: "Protection, Relay & Statutory Sign-off",
    experienceYears: 21,
    education: "B.Tech (Electrical & Electronics), Certified Protection Specialist",
    biography:
      "Specializes in primary and secondary injection testing, transformer oil dielectric diagnostics, numerical relay configuration, and Chief Electrical Inspector to Government (CEIG) statutory approval protocols.",
    statement:
      "Energization is the ultimate moment of truth. Our testing kits and diagnostic checklists ensure that every relay trips exactly as specified before the first megawatt flows.",
    responsibilities: [
      "Relay Coordination & Numerical Protection Configuration",
      "Transformer Oil Filtration & Dielectric Quality Control",
      "Pre-Commissioning Audits & CEIG Liaisoning",
      "SCADA & Marshalling Kiosk Interfacing",
    ],
    contributions: [
      "Commissioned over 45 extra-high-voltage bays with zero tripping defects",
      "Configured advanced numerical distance and differential protection schemes",
      "Authored Powertech's field commissioning and dielectric audit handbook",
    ],
    qualifications: [
      "B.Tech (Electrical & Electronics)",
      "Certified SCADA & IEC 61850 Substation Automation",
      "High-Voltage Safety Certified (CEIG)",
    ],
    image: {
      src: "/leadership/director-3.png",
      alt: "Er. A. K. Verma - Head of Testing & Commissioning",
    },
    linkedinUrl: null,
  },
  {
    id: "head-contracts-procurement",
    name: "Er. S. N. Mishra",
    designation: "Head of Project Management & Contracts",
    roleBadge: "EPC Contracts & Utility PMUs",
    experienceYears: 20,
    education: "B.E. (Civil & Infrastructure), PMP Certified Specialist",
    biography:
      "Oversees turnkey EPC project schedules, bill of quantities (BOQ) estimations, vendor type-testing approvals, and site-level mobilization across multiple simultaneous state utility packages.",
    statement:
      "On-time grid infrastructure delivery requires seamless synchronization between manufacturing lead times, site readiness, and scheduled utility shutdown windows.",
    responsibilities: [
      "Turnkey Project Scheduling & Earned Value Tracking",
      "State Utility Contract Administration & Tenders",
      "Supply Chain & Type-Tested Equipment QA Audits",
      "Site Logistics, Machinery Allocation & Fleet Readiness",
    ],
    contributions: [
      "Managed synchronized delivery across simultaneous utility packages in UP, Haryana, and Bihar",
      "Achieved 100% on-schedule milestone completion on RAPDRP and IPDS distribution programs",
      "Built resilient supplier networks for Class-A certified transformers and switchgear",
    ],
    qualifications: [
      "B.E. (Civil & Infrastructure)",
      "Project Management Professional (PMP)",
      "Diploma in Construction Contract Law",
    ],
    image: {
      src: "/leadership/director-4.png",
      alt: "Er. S. N. Mishra - Head of Project Management",
    },
    linkedinUrl: null,
  },
];
