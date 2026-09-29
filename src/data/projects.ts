import { ProjectItem } from "@/types";

/**
 * Projects Data Store
 *
 * CRITICAL RULE:
 * Fake projects, clients, locations, or technical metrics MUST NEVER be invented.
 * This array remains empty until projects are extracted and verified from the official
 * Powertech Engineers Company Profile document or client-approved project dossier.
 *
 * Verification checklist item: docs/CONTENT-VERIFICATION.md (Section 5 - Projects & Track Record)
 */
export const projectsData: ProjectItem[] = [
  // [AWAITING VERIFIED DATA FROM COMPANY PROFILE]
  // Format upon verification:
  // {
  //   id: "project-slug",
  //   slug: "project-slug",
  //   title: "Verified Project Title",
  //   category: "Substations / Transmission / Industrial",
  //   client: "Client Name (if permitted by NDA) or Industry Sector",
  //   location: "City, State",
  //   scope: "Scope summary",
  //   description: "Factual execution description",
  //   status: "Completed",
  //   completionYear: 2024,
  //   images: []
  // }
];
