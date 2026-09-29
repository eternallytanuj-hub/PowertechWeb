import { LeadershipMember } from "@/types";

/**
 * Leadership Team Data Store
 *
 * CRITICAL RULE:
 * Leadership profiles must strictly reflect actual company directors, partners,
 * and key technical executives verified from the company profile or statutory documents.
 * No placeholder or invented names/biographies are permitted.
 *
 * Verification checklist item: docs/CONTENT-VERIFICATION.md (Section 4 - Leadership & Management)
 */
export const leadershipData: LeadershipMember[] = [
  // [AWAITING VERIFIED DATA FROM COMPANY PROFILE]
  // Format upon verification:
  // {
  //   id: "person-slug",
  //   name: "Verified Full Name",
  //   designation: "Managing Director / Director / Technical Head",
  //   biography: "Factual background and industry experience",
  //   qualifications: ["B.E. Electrical", ...],
  //   image: null,
  //   linkedinUrl: null
  // }
];
