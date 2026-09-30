import { CareerPosition } from "@/types";

export const careerPositionsData: CareerPosition[] = [
  {
    id: "sr-substation-engineer",
    title: "Senior Substation Project Engineer (220/132 kV)",
    department: "Substations & EHV Projects",
    location: "Noida / Site-Based (UP / Northern Region)",
    type: "Site-Based",
    experienceRequired: "5 - 8 Years",
    vacancies: 3,
    description:
      "Responsible for turnkey site execution of extra-high-voltage substations up to 220 kV. Leads civil-to-electrical interface, equipment uncrating, gantry alignment, and utility engineer coordination.",
    responsibilities: [
      "Supervise physical erection of power transformers, circuit breakers, CTs, PTs, and isolators",
      "Coordinate with state transmission utility inspectors (UPPTCL / BSPTCL) for clearance approvals",
      "Ensure 100% adherence to switchyard safety protocols and permit-to-work systems",
      "Maintain site measurement books (MB) and progress milestone records",
    ],
    requirements: [
      "B.Tech / B.E. in Electrical Engineering from an accredited institute",
      "Minimum 5 years of verifiable hands-on experience in 132 kV or 220 kV substation execution",
      "Familiarity with Single Line Diagrams (SLD), busbar torque calculations, and equipment manuals",
      "Class-A Supervisor License preferred",
    ],
  },
  {
    id: "testing-commissioning-engineer",
    title: "Testing & Commissioning Engineer (Protection & Relays)",
    department: "Testing & Commissioning Cell",
    location: "Mobile Field Unit / Pan-India",
    type: "Full-Time",
    experienceRequired: "4 - 7 Years",
    vacancies: 2,
    description:
      "Conducts primary and secondary injection tests on numerical protection relays, transformer oil BDV diagnostics, and pre-commissioning checks prior to state grid energization.",
    responsibilities: [
      "Perform secondary injection testing using modern multi-phase test kits",
      "Configure and test numerical distance, differential, and overcurrent relays",
      "Carry out transformer turns ratio (TTR), winding resistance, and insulation resistance audits",
      "Prepare statutory test reports for Chief Electrical Inspector (CEIG) submission",
    ],
    requirements: [
      "B.Tech / Diploma in Electrical Engineering",
      "Proven proficiency in Omicron / Megger / Doble secondary injection kits",
      "Deep understanding of IEC 61850 substation automation architecture",
      "Willingness to travel across regional utility sites for scheduled commissioning drives",
    ],
  },
  {
    id: "transmission-line-engineer",
    title: "Transmission Line Engineer (Towers & Stringing)",
    department: "Transmission Infrastructure",
    location: "Regional Transmission Corridors (UP / Haryana / Bihar)",
    type: "Site-Based",
    experienceRequired: "4 - 6 Years",
    vacancies: 2,
    description:
      "Leads route survey alignment, stub setting, tower assembly, and conductor stringing operations for overhead transmission lines up to 220 kV.",
    responsibilities: [
      "Oversee tower foundation casting, pile foundations, and stub checking",
      "Supervise tower erection gangs and tension stringing operations",
      "Ensure right-of-way (ROW) clearance and road/railway crossing clearances as per CEA rules",
      "Execute final conductor sagging, clamping, and jumpering",
    ],
    requirements: [
      "B.Tech or Diploma in Civil / Electrical Engineering",
      "At least 4 years experience in 132/220 kV lattice transmission line construction",
      "Knowledge of tensioner / puller winch machinery and sagging charts",
      "Strong leadership skills for managing site erection gangs",
    ],
  },
  {
    id: "graduate-trainee-engineer",
    title: "Graduate Engineer Trainee (GET) — Electrical",
    department: "Engineering & Technical Services",
    location: "Noida Engineering Center & Project Sites",
    type: "Full-Time",
    experienceRequired: "Fresh Graduate / 0 - 1 Year",
    vacancies: 5,
    description:
      "Fast-track technical training program for high-potential electrical engineering graduates. Rotates across AutoCAD design, site erection, testing labs, and utility contract management.",
    responsibilities: [
      "Assist senior engineers with SLD drafting, cable schedule preparation, and bill of quantities",
      "Participate in site equipment inspection, insulation tests, and daily progress reporting",
      "Undergo rigorous training on high-voltage electrical safety standards and ISO procedures",
      "Learn state utility specifications (UPPTCL, DVVNL) and technical tendering workflows",
    ],
    requirements: [
      "B.Tech / B.E. in Electrical or Power Engineering (minimum 65% aggregate)",
      "Strong theoretical foundation in power systems, switchgear, and circuit analysis",
      "Proficiency in AutoCAD Electrical, MS Excel, and technical drafting",
      "Dynamic mindset with eagerness to learn high-voltage power infrastructure execution",
    ],
  },
];
