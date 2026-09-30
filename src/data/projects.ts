import { ProjectItem, CaseStudy } from "@/types";

/**
 * Projects Data Store
 *
 * Sourced directly from verified utility contracts, UPPTCL, PDD J&K, JSEB, DVVNL,
 * and the official 5 slides of Powertech Engineers Company Profile.
 */
export const projectsData: ProjectItem[] = [
  {
    id: "ayodhya-220kv",
    slug: "ayodhya-220kv-substation",
    title: "220 KV Substation Ayodhya (220 के.वी. उपकेन्द्र अयोध्या)",
    category: "Substations",
    client: "Uttar Pradesh Power Transmission Corporation Limited (UPPTCL)",
    location: "Ayodhya, Uttar Pradesh",
    scope:
      "Turnkey execution of 220 KV extra-high-voltage substation, bay extensions, transformer erection, testing, and full commissioning.",
    description:
      "A flagship landmark execution featured on the cover of Powertech's official company profile. Scope included civil foundation casting, structural gantry erection, 220/132/33 kV switchyard integration, power transformer staging, control & relay panel configuration, and formal synchronisation with the UP state grid.",
    status: "Completed",
    completionYear: 2022,
    voltageClass: "220 KV EHV",
    images: [
      {
        src: "/hero-images/hero-substation.jpg",
        alt: "220 KV Substation Ayodhya Switchyard",
        caption: "Ayodhya 220 KV Substation Switchyard & Busbar Network",
      },
      {
        src: "/site-images/transformer-bay.jpeg",
        alt: "Transformer Bay at Ayodhya",
        caption: "Power Transformer Bay & Secondary Protection",
      },
      {
        src: "/site-images/control-panel.jpeg",
        alt: "Substation Control Room",
        caption: "SCADA & Relay Control Panel Integration",
      },
    ],
  },
  {
    id: "pdd-rajouri",
    slug: "pdd-rajouri-urban-electrification",
    title: "PDD Jammu & Kashmir Rajouri Urban Electrification",
    category: "Distribution",
    client: "Power Development Department, Jammu & Kashmir (PDPW)",
    location: "Rajouri, Jammu & Kashmir",
    scope:
      "Urban electrification, 33/11 KV network strengthening, and turnkey distribution infrastructure delivery.",
    description:
      "High-altitude mountain terrain electrical infrastructure modernization under central utility development frameworks. Encompassed 33/11 KV sub-transmission feeder erection, distribution transformer sub-stations (DTRs), HT/LT network restructuring, and energy loss reduction.",
    status: "Completed",
    completionYear: 2021,
    voltageClass: "33/11 KV Distribution",
    images: [
      {
        src: "/site-images/hv-infrastructure.jpeg",
        alt: "High Voltage Distribution in Rajouri",
        caption: "Feeder Line Augmentation in Mountain Corridor",
      },
      {
        src: "/site-images/project-site-view.jpeg",
        alt: "Site view in J&K",
        caption: "Substation Grounding and Yard Assembly",
      },
    ],
  },
  {
    id: "upptcl-turnkey-trans",
    slug: "upptcl-turnkey-transmission-substation",
    title: "UPPTCL Turnkey Transmission & Substation Works",
    category: "Transmission",
    client: "Uttar Pradesh Power Transmission Corporation Limited",
    location: "Central & Western Uttar Pradesh",
    scope:
      "Transmission-linked electrical infrastructure, bay extensions, and lattice tower erection up to 220 kV.",
    description:
      "Multiple turnkey contracts across western and central Uttar Pradesh for extra-high-voltage transmission line stringing, double-circuit lattice towers, sagging, and line energization adhering to strict UPPTCL technical guidelines.",
    status: "Completed",
    completionYear: 2023,
    voltageClass: "220/132 KV EHV",
    images: [
      {
        src: "/hero-images/hero-tower.jpg",
        alt: "220 kV Transmission Tower",
        caption: "Lattice Tower Erection & Conductor Stringing",
      },
      {
        src: "/hero-images/hero-transmission.jpeg",
        alt: "Transmission Line Corridors",
        caption: "Transmission Network Corridors",
      },
    ],
  },
  {
    id: "jseb-loss-reduction",
    slug: "jseb-loss-reduction-program",
    title: "JSEB Jharkhand System Loss Reduction & Augmentation",
    category: "Distribution",
    client: "Jharkhand State Electricity Board (JSEB)",
    location: "Ranchi & Dhanbad Circles, Jharkhand",
    scope:
      "AT&C loss reduction, distribution transformer metering, and 33/11 KV feeder re-conductoring.",
    description:
      "Turnkey utility intervention focused on technical and commercial loss mitigation, high-voltage distribution systems (HVDS), LT AB cable conversion, and rapid feeder re-alignment across mineral and industrial belts.",
    status: "Completed",
    completionYear: 2020,
    voltageClass: "33/11 KV",
    images: [
      {
        src: "/site-images/substations.jpeg",
        alt: "Feeder Distribution Substation",
        caption: "33/11 KV Switching Station Delivery",
      },
    ],
  },
  {
    id: "dvvnl-cabling",
    slug: "dvvnl-underground-cabling-hdd",
    title: "DVVNL Trenchless Cabling & Distribution Feeder Augmentation",
    category: "Underground Cabling",
    client: "Dakshinanchal Vidyut Vitran Nigam Limited",
    location: "Agra & Aligarh Zones, Uttar Pradesh",
    scope:
      "HT/LT underground cabling through Horizontal Directional Drilling (HDD) trenchless methodology.",
    description:
      "Execution of underground cable laying in high-density urban corridors without surface disruption. Utilized specialized HDD rigs, high-voltage jointing kits, and end-to-end insulation and sheath fault testing.",
    status: "Completed",
    completionYear: 2022,
    voltageClass: "33/11 KV Underground",
    images: [
      {
        src: "/hero-images/hero-tunnel.jpeg",
        alt: "Trenchless Drilling and Cable Ducting",
        caption: "HDD Trenchless Drilling in Urban Corridor",
      },
      {
        src: "/site-images/gis-cabling.jpeg",
        alt: "Cable Tray & Terminations",
        caption: "XLPE Cable Laying & Termination Bay",
      },
    ],
  },
  {
    id: "hvpnl-infra-works",
    slug: "hvpnl-substation-infrastructure",
    title: "HVPNL 132/66 KV Substation Infrastructure Packages",
    category: "Substations",
    client: "Haryana Vidyut Prasaran Nigam Limited",
    location: "Faridabad & Gurugram, Haryana",
    scope: "Substation bay extension, circuit breaker retrofitting, and busbar augmentation.",
    description:
      "Turnkey electrical engineering supporting state transmission utility reliability. Scope included supply, testing, and erection of SF6 circuit breakers, isolators, current transformers (CTs), and potential transformers (PTs).",
    status: "Completed",
    completionYear: 2021,
    voltageClass: "132/66 KV",
    images: [
      {
        src: "/site-images/power-plant-ais.jpeg",
        alt: "AIS Substation Yard",
        caption: "132 KV Air Insulated Switchyard Installation",
      },
    ],
  },
  {
    id: "bsptcl-transmission",
    slug: "bsptcl-turnkey-electrical-execution",
    title: "BSPTCL Turnkey Electrical Infrastructure",
    category: "Transmission",
    client: "Bihar State Power Transmission Company Limited",
    location: "Patna & Muzaffarpur, Bihar",
    scope: "High-voltage transmission interconnects, tower casting, and grid synchronization.",
    description:
      "Turnkey execution under Bihar power sector restructuring, reinforcing inter-district power transmission corridors with heavy lattice tower structures and multi-circuit configurations.",
    status: "Completed",
    completionYear: 2020,
    voltageClass: "220/132 KV",
    images: [
      {
        src: "/hero-images/hero-tower.jpg",
        alt: "BSPTCL Transmission Towers",
        caption: "EHV Lattice Tower Foundations and Stringing",
      },
    ],
  },
  {
    id: "industrial-electrification-iocl",
    slug: "industrial-electrification-refinery-allied",
    title: "Industrial Electrification & Switchyard Works",
    category: "Industrial",
    client: "Industrial & Process Entities / Allied Energy Clients",
    location: "Northern Region & NCR Hubs",
    scope:
      "Captive plant power distribution, HT switchgear, PCC/MCC panels, and busduct installation.",
    description:
      "Heavy industrial power distribution, plant earthing grids, motor control centers (MCC), and captive step-down substation installations for power-intensive manufacturing facilities.",
    status: "Completed",
    completionYear: 2023,
    voltageClass: "33 KV / 11 KV / 415 V",
    images: [
      {
        src: "/site-images/control-panel.jpeg",
        alt: "Industrial MCC Panel",
        caption: "Industrial Switchgear & Busduct Routing",
      },
      {
        src: "/site-images/fire-suppression.jpeg",
        alt: "Safety & Fire Protection Systems",
        caption: "Substation Safety & Fire Suppression Systems",
      },
    ],
  },
];

/**
 * Flagship Detailed Case Study Data
 * Sourced directly from Slide 1 and corporate execution records.
 */
export const caseStudiesData: Record<string, CaseStudy> = {
  "ayodhya-220kv": {
    id: "ayodhya-220kv",
    slug: "ayodhya-220kv-substation",
    title: "220 KV Substation Ayodhya",
    subtitle: "Turnkey Extra-High-Voltage Substation & Grid Interconnection",
    client: "Uttar Pradesh Power Transmission Corporation Limited (UPPTCL)",
    location: "Ayodhya",
    state: "Uttar Pradesh",
    voltageClass: "220 KV / 132 KV / 33 KV",
    scopeOfWork:
      "Complete EPC Execution: Civil Foundations, Structural Erection, Power Transformer Staging, Protection Integration & Energization",
    completionYear: 2022,
    heroImage: "/hero-images/hero-substation.jpg",
    overview:
      "The 220 KV Substation at Ayodhya stands as one of Powertech Engineers' most prestigious landmark achievements. Executed for UPPTCL under demanding timeframes, this facility serves as a critical node in Uttar Pradesh's power transmission grid, supplying uninterrupted, high-reliability power to the historic region.",
    phases: {
      engineering: {
        phase: "01",
        title: "Engineering & Route Survey",
        description:
          "Geotechnical soil investigation, single line diagram (SLD) approval, structural foundation calculations, and fault-level calculation coordination with UPPTCL design wings.",
        checkpoints: [
          "Soil resistivity & bearing capacity tests",
          "Comprehensive SLD approval by chief transmission engineer",
          "Earthing mat calculations as per IS 3043 and IEEE 80",
          "Clearance & creepage distance verification for 220 kV",
        ],
      },
      procurementAndConstruction: {
        phase: "02",
        title: "Civil Works & Structural Fabrication",
        description:
          "Excavation and casting of heavy RCC transformer plinths, gantry tower footings, control room building, fire-break walls, and drainage channels.",
        checkpoints: [
          "High-grade M25/M30 concrete with cube strength certification",
          "Galvanized structural steel gantries & beams (IS 2062)",
          "Dedicated oil soak pit & fire deluge drainage",
          "Switchyard gravel spreading (100mm depth as per CEA norms)",
        ],
      },
      installation: {
        phase: "03",
        title: "Heavy Equipment Staging & Erection",
        description:
          "Safe rigging, uncrating, and alignment of 220/132 kV power transformers, SF6 gas circuit breakers, isolators, current/potential transformers, and lightning arresters.",
        checkpoints: [
          "Hydraulic trailer heavy haulage & skid placement",
          "Torque-controlled bolt tightening on all high-voltage busbars",
          "Aluminium tubular busbar fabrication and vibration dampener fixing",
          "Control, protection, and SCADA cable trench routing",
        ],
      },
      testing: {
        phase: "04",
        title: "Multi-Stage Pre-Commissioning & Diagnostics",
        description:
          "Rigorous primary and secondary injection testing, transformer oil breakdown voltage (BDV) filtration, and insulation resistance audits.",
        checkpoints: [
          "Transformer oil filtration to >60 kV BDV and <15 ppm moisture",
          "Transformer turns ratio (TTR), winding resistance & Tan Delta",
          "Breaker timing, contact resistance (CRM), and SF6 gas pressure tests",
          "Secondary injection on numerical differential and distance relays",
        ],
      },
      commissioning: {
        phase: "05",
        title: "Statutory Approval & Substation Charging",
        description:
          "Direct liaison with the Directorate of Electrical Safety (Chief Electrical Inspector to Government - CEIG) and issuance of statutory charging clearance.",
        checkpoints: [
          "CEIG formal inspection and compliance sign-off",
          "Trial energization on no-load for 24 continuous hours",
          "Phase angle verification and synchronized grid hookup",
          "Thermal imaging thermography on all terminal clamps",
        ],
      },
      finalEnergization: {
        phase: "06",
        title: "Grid Energization & Asset Handover",
        description:
          "Seamless commercial load transfer to UPPTCL transmission operators, delivery of complete as-built documentation, and full warranty support.",
        checkpoints: [
          "Complete As-Built drawings in AutoCAD and PDF",
          "Comprehensive Operation & Maintenance (O&M) manuals",
          "Operator handover protocol sign-off",
          "Zero reported tripping across initial 90-day stabilization",
        ],
      },
    },
    keyAchievements: [
      "Completed with 100% adherence to UPPTCL technical and quality standards",
      "Zero lost-time injuries (LTI) across over 250,000 project man-hours",
      "Featured as the premier corporate landmark on Slide 1 of Powertech's official profile",
      "Seamless integration of advanced numerical protection and SCADA protocols",
    ],
    gallery: [
      {
        src: "/hero-images/hero-substation.jpg",
        caption: "Main 220 kV Switchyard Busbar Layout",
      },
      {
        src: "/site-images/transformer-bay.jpeg",
        caption: "Power Transformer Bay & Safety Blast Walls",
      },
      {
        src: "/site-images/control-panel.jpeg",
        caption: "Protection Relay Panels & Marshalling Kiosks",
      },
      {
        src: "/site-images/fire-suppression.jpeg",
        caption: "Transformer Nitrogen Fire Protection System",
      },
    ],
  },
};
