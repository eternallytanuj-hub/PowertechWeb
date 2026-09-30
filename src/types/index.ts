/**
 * Powertech Engineers Corporate Website
 * Core Domain Types & Content Architecture
 *
 * NOTE: All types are designed for strict adherence to verified company source data.
 * If data is unverified or unavailable, fields must remain null or empty array.
 */

// ==============================================================================
// Company Information Types
// ==============================================================================

export interface CompanyAddress {
  street?: string | null;
  city?: string | null;
  state?: string | null;
  country: string;
  postalCode?: string | null;
  formatted: string;
}

export interface CompanyContact {
  primaryPhone: string | null;
  secondaryPhones: string[];
  primaryEmail: string | null;
  enquiryEmail: string | null;
  supportEmail?: string | null;
  address: CompanyAddress;
  website: string;
}

export interface SocialLink {
  platform: "LinkedIn" | "Twitter" | "Facebook" | "YouTube" | "Instagram";
  url: string;
}

export interface CompanyProfile {
  name: string;
  legalName: string;
  tagline?: string | null;
  description: string;
  establishedYear: number | null;
  registrationNumber: string | null;
  gstNumber: string | null;
  panNumber: string | null;
  contact: CompanyContact;
  socialLinks: SocialLink[];
}

// ==============================================================================
// Services Types
// ==============================================================================

export interface ServiceMetadata {
  metaTitle: string;
  metaDescription: string;
  keywords?: string[];
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  capabilities: string[];
  image: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  } | null;
  metadata: ServiceMetadata;
}

// ==============================================================================
// Projects Types
// ==============================================================================

export type ProjectStatus = "Completed" | "Ongoing" | "Planned";

export interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  client: string | null;
  location: string;
  scope: string;
  description: string;
  status: ProjectStatus | null;
  completionYear: number | null;
  voltageClass?: string | null;
  images: ProjectImage[];
}

// ==============================================================================
// Leadership Types
// ==============================================================================

export interface LeadershipMember {
  id: string;
  name: string;
  designation: string;
  biography: string;
  qualifications?: string[] | null;
  image: {
    src: string;
    alt: string;
  } | null;
  linkedinUrl?: string | null;
}

// ==============================================================================
// Certification & Accreditation Types
// ==============================================================================

export interface CertificationItem {
  id: string;
  name: string;
  issuingBody: string;
  certificateNumber: string | null;
  date: string | null;
  expiryDate?: string | null;
  document: {
    src: string;
    alt: string;
  } | null;
}

// ==============================================================================
// Navigation & Route Types
// ==============================================================================

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
  external?: boolean;
}

export interface BreadcrumbItem {
  label: string;
  href: string;
  current?: boolean;
}

// ==============================================================================
// Contact & Enquiry Form Types
// ==============================================================================

export interface ContactFormData {
  fullName: string;
  companyName?: string;
  email: string;
  phone: string;
  serviceCategory?: string;
  projectScope?: string;
  message: string;
}

export interface FormSubmissionResponse {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
}

// ==============================================================================
// Case Study & Detailed Project Story Types
// ==============================================================================

export interface ProjectPhase {
  phase: string;
  title: string;
  description: string;
  checkpoints: string[];
}

export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  client: string;
  location: string;
  state: string;
  voltageClass: string;
  scopeOfWork: string;
  completionYear: number | string;
  heroImage: string;
  overview: string;
  phases: {
    engineering: ProjectPhase;
    procurementAndConstruction: ProjectPhase;
    installation: ProjectPhase;
    testing: ProjectPhase;
    commissioning: ProjectPhase;
    finalEnergization: ProjectPhase;
  };
  keyAchievements: string[];
  gallery: { src: string; caption: string }[];
}

// ==============================================================================
// Team & Organization Types
// ==============================================================================

export type TeamDepartment =
  | "All"
  | "Directors"
  | "Engineering Team"
  | "Project Management"
  | "Site Engineers"
  | "Testing & Commissioning";

export interface TeamMember {
  id: string;
  name: string;
  designation: string;
  department: TeamDepartment;
  experienceYears: number;
  qualifications: string[];
  location: string;
  bio: string;
  specialization: string;
  image?: string;
}

// ==============================================================================
// Career & Recruitment Types
// ==============================================================================

export interface CareerPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: "Full-Time" | "Contract" | "Site-Based";
  experienceRequired: string;
  vacancies: number;
  description: string;
  responsibilities: string[];
  requirements: string[];
}

// ==============================================================================
// News & Editorial Milestone Types
// ==============================================================================

export interface NewsArticle {
  id: string;
  title: string;
  slug: string;
  category: "Milestone" | "Contract Award" | "Safety" | "Corporate";
  date: string;
  readTime: string;
  summary: string;
  content: string;
  image: string;
  tag: string;
}
