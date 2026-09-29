# Powertech Engineers Corporate Website — Project Overview

## 1. Project Purpose & Scope

The purpose of this project is to architect, develop, and deliver a production-grade, highly credible B2B corporate web platform for **Powertech Engineers**.

Powertech Engineers operates as an Engineering, Procurement, and Construction (EPC) and electrical infrastructure contractor specializing in:

- High-voltage outdoor and indoor substations and switchyards
- Heavy industrial plant electrification and power distribution
- Overhead power transmission lines
- High-voltage underground cabling and trenchless installations
- Township and commercial electrical infrastructure
- Electrical Operation & Maintenance (O&M), Annual Maintenance Contracts (AMC), and emergency breakdown restoration

The digital presence must project technical authority, engineering rigor, statutory compliance, and corporate trustworthiness to public sector undertakings (PSUs), state electricity distribution companies (DISCOMs), industrial developers, and EPC prime contractors.

---

## 2. Core Objectives

1. **B2B Technical Credibility**: Establish an authoritative digital representation that highlights execution capacity, machinery, testing capability, and safety standards.
2. **Turnkey Service Showcase**: Present each of the 6 specialized service verticals with technical depth, specifications, and scope clarity.
3. **Verified Track Record**: Showcase real, client-approved infrastructure projects with accurate parameters (voltage rating, location, client/sector, execution scope).
4. **Statutory Transparency**: Clearly document electrical contractor licenses, ISO certifications, and regulatory accreditations.
5. **High-Conversion Inbound Enquiries**: Provide responsive, secure tender and project enquiry workflows for clients, consultants, and procurement managers.
6. **Zero Fiction Standard**: Strictly exclude placeholder statistics, fabricated testimonials, generated projects, or synthetic claims.

---

## 3. Target Audience

The website is engineered for sophisticated B2B stakeholders, decision-makers, and technical procurement teams:

- **Public Sector Undertakings (PSUs) & State Transmission Utilities**: State DISCOMs, central/state electricity boards, and renewable energy evacuation nodal agencies.
- **Industrial Plant Developers & Process Industries**: Chemical, steel, automotive, textile, pharmaceutical, and manufacturing plants requiring turnkey HT/LT power distribution.
- **Commercial & Infrastructure EPC Primes**: Real estate developers, data center builders, metro rail contractors, and smart city infrastructure authorities.
- **Electrical Consultants & Chartered Engineers**: Technical advisors preparing tenders, validating vendor empanelment lists, and inspecting contractor execution history.

---

## 4. Planned Site Architecture & Pages

1. **Home (`/`)**: Executive overview of Powertech's capabilities, service verticals, safety standards, and project verification highlights.
2. **About Us (`/about`)**: Company background, vision, statutory credentials, and corporate milestones.
3. **Services Hub (`/services`)**: Turnkey EPC electrical engineering portfolio.
   - **Substations & Switchyards (`/services/substations-switchyards`)**: HT/EHV substations up to transmission voltage classes.
   - **Industrial Electrification (`/services/industrial-electrification`)**: Turnkey plant power distribution, MCC/PCC panels, busducts.
   - **Transmission Lines (`/services/transmission-lines`)**: Overhead tower foundation, erection, and stringing.
   - **Underground Cabling (`/services/underground-cabling`)**: Trenchless HDD, cable laying, straight jointing, and testing.
   - **Township Electrification (`/services/township-electrification`)**: Distribution transformers, compact substations, RMU automation.
   - **AMC & Breakdown Services (`/services/amc-breakdown`)**: 24/7 emergency response, oil filtration, and preventive testing.
4. **Capabilities (`/capabilities`)**: Machinery, heavy erection equipment, precision testing instruments, and workforce capacity.
5. **Projects (`/projects`)**: Audited track record of completed and ongoing infrastructure contracts.
6. **Leadership (`/leadership`)**: Profiles of directors, partners, and chief technical engineers.
7. **Certifications (`/certifications`)**: State electrical contractor licenses, ISO 9001/14001/45001 accreditations.
8. **Contact & Tenders (`/contact`)**: Technical enquiry submission, RFP channels, registered office coordinates.

---

## 5. Technology Stack

- **Core Framework**: Next.js 16 (App Router, Server Components by default)
- **Language**: TypeScript 5 (Strict Mode, 100% typed interfaces)
- **Styling**: Tailwind CSS v4 with custom design tokens via `@theme`
- **Iconography**: Lucide React
- **Animation**: Framer Motion (for controlled micro-interactions)
- **Code Quality**: ESLint, Prettier with Tailwind sorting plugin
- **Backend / Database**: Supabase (isolated safe client wrapper; optional until backend features are activated)
- **Hosting Target**: Vercel-compatible edge architecture

---

## 6. Development Phases

- **Phase 1: Environment & Architecture (Current Phase)**:
  - Repository setup, tooling configuration, design token system, directory layout, reusable UI/layout primitives, route skeletons, SEO foundation, documentation, and zero-fake-data schemas.
- **Phase 2: Source Data Ingestion & Content Audit**:
  - Ingestion of the official Powertech Company Profile PDF, audit against `CONTENT-VERIFICATION.md`, and population of data stores (`company.ts`, `services.ts`, `projects.ts`, etc.).
- **Phase 3: Visual Design & Page Assembly**:
  - Industrial engineering aesthetic implementation, high-contrast layouts, typography refinement, and page-by-page component assembly.
- **Phase 4: Backend & Enquiry Channel Activation**:
  - Form route handlers, Supabase database integration (if active), captcha spam protection, and automated email notifications.
- **Phase 5: Performance Optimization, WCAG Audit & Launch**:
  - Core Web Vitals profiling, Lighthouse 95+ validation, cross-browser testing, accessibility audit, and production deployment.
