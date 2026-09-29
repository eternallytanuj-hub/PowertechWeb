import { CompanyProfile } from "@/types";

/**
 * Company Profile Data Store
 *
 * Sourced directly from the official Powertech Engineers Company Profile brochure.
 */
export const companyData: CompanyProfile = {
  name: "Powertech Engineers",
  legalName: "Powertech Engineers",
  tagline: "Powering Possibilities Delivering Excellence",
  description:
    "Engineering tomorrow's energy solutions today. Powertech Engineers is a turnkey electrical infrastructure and EPC solutions contractor specializing in 400/220/132/33/11 KV substations, transmission lines, industrial electrification, and preventive maintenance.",
  establishedYear: null, // [TODO: Verify incorporation year from registration certificate]
  registrationNumber: null, // [TODO: Verify statutory registration number]
  gstNumber: null, // [TODO: Verify GSTIN]
  panNumber: null, // [TODO: Verify PAN]
  contact: {
    primaryPhone: "0120-4111018",
    secondaryPhones: [],
    primaryEmail: "engineers.powertech@yahoo.com",
    enquiryEmail: "engineers.powertech@yahoo.com",
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
 * Three Core Pillars (from Company Profile Brochure Page 1)
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
    description: "Dedicated team committed to quality, safety and execution.",
    icon: "users",
  },
  {
    title: "EXCELLENCE",
    color: "orange",
    description: "Delivering value-driven solutions that power a sustainable future.",
    icon: "target",
  },
];

/**
 * Salient Features (from Company Profile Brochure Page 2)
 */
export const salientFeatures = [
  "Well-structured organization with a dedicated team of engineers, technicians, managers, and financial consultants.",
  "Well equipped with tools & tackles, electrical testing equipment, and design facilities.",
  "Having offices and works in Delhi and Noida.",
  "Established project management methodology with compliance to safety procedures, statutory regulations, and environmental concerns.",
  "Execution of projects within the given timeframe while ensuring quality work as per client's specifications.",
  "Regular in-house training of personnel to keep them updated with the latest methods and technology.",
  "Wide spectrum of projects handled, including electrification of 400/220/132/33/11 KV substations, in-feed cabling, and electrification of industrial plants, offices, and buildings.",
  "Committed to retaining the confidence of our clients through sincere efforts, hard work, and building long-lasting relationships.",
];

/**
 * Voltage capability spectrum verified from brochure
 */
export const voltageCapabilities = ["400 KV", "220 KV", "132 KV", "33 KV", "11 KV"];
