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

## 3. Development Principles

- **Separation of Concerns**: Clean isolation between domain data schemas (`src/data/`), business logic/utilities (`src/lib/`), UI components (`src/components/`), and routing endpoints (`src/app/`).
- **Server-First Architecture**: Default to React Server Components (RSC) to maximize Core Web Vitals, minimize client bundle weight, and optimize search engine crawling.
- **Typed Content Structures**: Strict TypeScript interfaces enforce that data is modeled accurately and missing fields remain explicit `null` or `TODO` values rather than arbitrary fabrications.
- **Design Token Scalability**: Visual identity and theme variables (colors, spacing, typography, radii, elevations) are managed centrally in `globals.css` and Tailwind `@theme` configuration.
- **Accessibility by Design (WCAG Conscious)**: High contrast, semantic HTML5 elements, full keyboard navigation, and explicit form labeling.
- **Security-First Form Handling**: Client-side validation complemented by server-side verification architecture, with zero client-side exposure of privileged credentials.
