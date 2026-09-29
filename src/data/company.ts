import { CompanyProfile } from "@/types";

/**
 * Company Profile Data Store
 *
 * NOTE: Information must be sourced directly from verified company documents (e.g. Company Profile PDF).
 * Fields marked with null or empty arrays await formal client verification.
 */
export const companyData: CompanyProfile = {
  name: "Powertech Engineers",
  legalName: "Powertech Engineers",
  tagline: null, // [TODO: Verify official tagline from Company Profile PDF]
  description:
    "Powertech Engineers is an engineering, procurement, and construction (EPC) and electrical infrastructure solutions provider specializing in substations, transmission lines, industrial electrification, and maintenance services.",
  establishedYear: null, // [TODO: Verify incorporation / establishment year]
  registrationNumber: null, // [TODO: Verify official registration/CIN number]
  gstNumber: null, // [TODO: Verify GSTIN]
  panNumber: null, // [TODO: Verify PAN]
  contact: {
    primaryPhone: null, // [TODO: Verify verified primary telephone number]
    secondaryPhones: [],
    primaryEmail: null, // [TODO: Verify official domain email address]
    enquiryEmail: null, // [TODO: Verify business enquiry email]
    supportEmail: null,
    address: {
      street: null,
      city: null,
      state: null,
      country: "India",
      postalCode: null,
      formatted: "[TODO: Verify registered office address from Company Profile PDF]",
    },
    website: "https://powertechengineers.com", // [TODO: Verify registered domain]
  },
  socialLinks: [],
};
