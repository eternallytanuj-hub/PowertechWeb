import { ServiceItem } from "@/types";

/**
 * Services Data Store
 *
 * Sourced according to proposed service offerings.
 * Full technical capabilities, descriptions, and equipment specifications
 * must be verified against the official company profile before deployment.
 */
export const servicesData: ServiceItem[] = [
  {
    id: "service-substations-switchyards",
    slug: "substations-switchyards",
    title: "Substations & Switchyards",
    shortDescription:
      "Engineering, supply, civil erection, testing, and commissioning of outdoor and indoor substations and switchyards.",
    description:
      "Comprehensive turnkey substation and switchyard execution spanning design engineering, civil foundations, structural erection, power transformer installation, control relay integration, and statutory commissioning.",
    capabilities: [
      "Electrification and commissioning of 400/220/132/33/11 KV substations and switchyards",
      "Civil foundations, structural gantry erection, and equipment staging",
      "Power transformer erection, oil filtration, and secondary testing",
      "Control relay integration, protection testing, and statutory inspection compliance",
    ],
    image: null, // [TODO: Attach verified high-resolution project photograph]
    metadata: {
      metaTitle: "Substations & Switchyards | Powertech Engineers",
      metaDescription:
        "Substation and switchyard engineering, erection, testing, and commissioning solutions by Powertech Engineers.",
    },
  },
  {
    id: "service-industrial-electrification",
    slug: "industrial-electrification",
    title: "Industrial Electrification",
    shortDescription:
      "Turnkey internal and external electrical installation for heavy manufacturing, chemical, process, and industrial plants.",
    description:
      "End-to-end industrial electrification covering HT/LT power distribution networks, motor control centres (MCC), power control centres (PCC), busduct systems, and plant grounding systems.",
    capabilities: [
      "[TODO: Verify HT/LT distribution panel capabilities]",
      "[TODO: Verify busduct trunking and rising mains scope]",
      "[TODO: Verify industrial plant illumination and hazardous area cabling]",
      "[TODO: Verify earthing grid and lightning protection specifications]",
    ],
    image: null,
    metadata: {
      metaTitle: "Industrial Electrification Solutions | Powertech Engineers",
      metaDescription:
        "Industrial electrification, HT/LT power distribution, and plant automation infrastructure by Powertech Engineers.",
    },
  },
  {
    id: "service-transmission-lines",
    slug: "transmission-lines",
    title: "Transmission Lines",
    shortDescription:
      "Survey, tower foundation, erection, and stringing of high-voltage overhead transmission lines.",
    description:
      "Overhead transmission line engineering and construction capabilities, including route alignment, soil testing, tower foundation casting, tower erection, conductor stringing, and final charging.",
    capabilities: [
      "[TODO: Verify transmission line voltage capacity from company profile]",
      "[TODO: Verify tower foundation and stringing methodology]",
      "[TODO: Verify right-of-way (ROW) clearance and statutory liaisoning capabilities]",
    ],
    image: null,
    metadata: {
      metaTitle: "Overhead Transmission Lines | Powertech Engineers",
      metaDescription:
        "Overhead transmission line construction, tower erection, and conductor stringing services by Powertech Engineers.",
    },
  },
  {
    id: "service-underground-cabling",
    slug: "underground-cabling",
    title: "Underground Cabling",
    shortDescription:
      "Trenching, horizontal directional drilling (HDD), cable laying, straight-through jointing, and termination.",
    description:
      "Precision underground power cabling networks for urban corridors, industrial estates, and renewable evacuation lines.",
    capabilities: [
      "[TODO: Verify cable voltage ratings from company profile]",
      "[TODO: Verify trenchless excavation and HDD capabilities]",
      "[TODO: Verify cable jointing kits and high-voltage fault location testing]",
    ],
    image: null,
    metadata: {
      metaTitle: "Underground Power Cabling Networks | Powertech Engineers",
      metaDescription:
        "Underground cabling, trenchless excavation, jointing, and termination by Powertech Engineers.",
    },
  },
  {
    id: "service-township-electrification",
    slug: "township-electrification",
    title: "Township & Commercial Electrification",
    shortDescription:
      "Integrated electrical infrastructure for residential townships, IT parks, commercial complexes, and institutions.",
    description:
      "Complete electrical infrastructure development including distribution transformer centers, compact substations (CSS), ring main units (RMU), street lighting, and underground distribution.",
    capabilities: [
      "[TODO: Verify distribution transformer and compact substation setup]",
      "[TODO: Verify ring main unit (RMU) automation and feeder pillars]",
      "[TODO: Verify township internal distribution and solar street lighting]",
    ],
    image: null,
    metadata: {
      metaTitle: "Township & Commercial Electrification | Powertech Engineers",
      metaDescription:
        "Electrical infrastructure planning and execution for townships and commercial developments by Powertech Engineers.",
    },
  },
  {
    id: "service-amc-breakdown",
    slug: "amc-breakdown",
    title: "AMC & Breakdown Services",
    shortDescription:
      "Annual maintenance contracts (AMC), preventive condition monitoring, and emergency breakdown restoration.",
    description:
      "Round-the-clock operation and maintenance (O&M) and preventative maintenance programs designed to ensure uptime, transformer health, switchgear reliability, and statutory safety compliance.",
    capabilities: [
      "[TODO: Verify SLA response times and preventive maintenance scope]",
      "[TODO: Verify transformer oil filtration and BDV testing equipment]",
      "[TODO: Verify thermal imaging and breaker timing test capabilities]",
      "[TODO: Verify 24/7 emergency breakdown crew availability]",
    ],
    image: null,
    metadata: {
      metaTitle: "Electrical AMC & Breakdown Services | Powertech Engineers",
      metaDescription:
        "Comprehensive electrical annual maintenance contracts (AMC) and emergency breakdown support by Powertech Engineers.",
    },
  },
];
