import { CertificationItem } from "@/types";

/**
 * Certifications, Accreditations & Statutory Licenses Data Store
 *
 * CRITICAL RULE:
 * ISO certifications, Electrical Contractor Licenses (Class A/Super A),
 * and statutory approvals must be verified with registration numbers and valid dates.
 * No placeholder or invented certifications are allowed.
 *
 * Verification checklist item: docs/CONTENT-VERIFICATION.md (Section 3 - Accreditations & Licenses)
 */
export const certificationsData: CertificationItem[] = [
  // [AWAITING VERIFIED DATA FROM COMPANY PROFILE]
  // Format upon verification:
  // {
  //   id: "cert-slug",
  //   name: "ISO 9001:2015 / Class-1 Electrical Contractor License",
  //   issuingBody: "Issuing Authority / Board",
  //   certificateNumber: "REG-XXXXX",
  //   date: "YYYY-MM-DD",
  //   expiryDate: "YYYY-MM-DD",
  //   document: null
  // }
];
