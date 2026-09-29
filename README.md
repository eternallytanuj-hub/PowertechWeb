# Powertech Engineers Corporate Website

Production-grade corporate web platform for **Powertech Engineers**, an Electrical Infrastructure and Engineering, Procurement, and Construction (EPC) solutions contractor.

---

## 1. Project Overview

The Powertech Engineers corporate web platform is architected to project technical authority, engineering rigor, and execution capability across high-voltage electrical infrastructure domains:

- Substations & Switchyards (Outdoor & Indoor)
- Industrial Electrification & Plant Power Distribution
- Overhead Transmission Lines
- High-Voltage Underground Cabling Networks
- Township & Commercial Electrification
- Electrical AMC, Condition Monitoring & Breakdown Services

This repository implements **Phase 1: Environment & Architecture**, establishing a strictly typed, accessible, and scalable foundation without placeholder fictions or fabricated company statistics.

---

## 2. Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, Server Components by default)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict mode enabled)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (Tokenized design system foundation)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/) (Controlled micro-interactions)
- **Database / Backend**: [Supabase](https://supabase.com/) (Configured safely for when backend functionality is required)
- **Quality & Formatting**: [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) with Tailwind class sorting

---

## 3. Project Structure

```
POWERTECH-COMPANY-WEBSITE-PROJECT/
├── docs/                               # Architecture & content verification documentation
│   ├── PROJECT.md                      # Goals, scope, and engineering principles
│   ├── CONTENT-SOURCE.md               # Primary source guidelines & ingestion rules
│   ├── ARCHITECTURE.md                 # Technical architecture & directory map
│   └── CONTENT-VERIFICATION.md         # Pre-publication verification audit checklist
│
├── public/                             # Public static assets
│   ├── images/                         # Brand & UI images
│   ├── projects/                       # Verified project site photography
│   ├── leadership/                     # Executive team photography
│   ├── certifications/                 # Official statutory license documents & badges
│   └── icons/                          # Custom SVG engineering icons
│
├── src/
│   ├── app/                            # Next.js App Router endpoints & routes
│   │   ├── layout.tsx                  # Root layout (Navbar, Footer, SEO metadata)
│   │   ├── page.tsx                    # Architectural home placeholder
│   │   ├── globals.css                 # Design token system & CSS custom properties
│   │   ├── robots.ts                   # Dynamic robots.txt
│   │   ├── sitemap.ts                  # Dynamic XML sitemap
│   │   ├── about/                      # About Us route
│   │   ├── services/                   # Services catalog & individual service routes
│   │   ├── capabilities/               # Equipment & workforce route
│   │   ├── projects/                   # Verified project case studies
│   │   ├── leadership/                 # Directors & engineering management
│   │   ├── certifications/             # Quality accreditations & licenses
│   │   └── contact/                    # Tender enquiries & office contacts
│   │
│   ├── components/                     # Modular component library
│   │   ├── layout/                     # Container, Section, Navbar, MobileNav, Footer
│   │   ├── navigation/                 # Breadcrumb
│   │   ├── sections/                   # SectionHeading, CTASection
│   │   ├── ui/                         # Button, Link, LoadingState, ErrorState
│   │   ├── cards/                      # ServiceCard, ProjectCard, LeadershipCard, CertificationCard
│   │   ├── forms/                      # Input, Textarea, Select, ContactForm
│   │   └── media/                      # ImageWrapper
│   │
│   ├── data/                           # Typed data sources (strict verification adherence)
│   │   ├── company.ts                  # Core corporate data
│   │   ├── services.ts                 # Service verticals and capability arrays
│   │   ├── projects.ts                 # Verified projects data store
│   │   ├── leadership.ts               # Executive team data store
│   │   └── certifications.ts           # Statutory licenses & certificates data store
│   │
│   ├── lib/                            # Shared utilities and system services
│   │   ├── utils.ts                    # Class merging (cn) & date helpers
│   │   ├── seo.ts                      # Metadata & JSON-LD structured data generators
│   │   ├── constants.ts                # Site navigation & system constants
│   │   └── supabase.ts                 # Safe Supabase client initialization
│   │
│   └── types/                          # Master TypeScript domain interfaces
│       └── index.ts
│
├── .env.example                        # Template for environment variables
├── eslint.config.mjs                   # ESLint configuration
├── .prettierrc.json                    # Prettier formatting rules
└── tsconfig.json                       # TypeScript compiler configuration
```

---

## 4. Getting Started & Installation

### Prerequisites

- Node.js: `v20.x` or later (tested on Node `v26.x`)
- npm: `v10.x` or later

### Installation

Clone the repository and install dependencies:

```bash
npm install
```

### Environment Configuration

Copy the example environment configuration:

```bash
cp .env.example .env.local
```

Configure your environment variables in `.env.local`:

- `NEXT_PUBLIC_SITE_URL`: Domain URL for canonical links and OpenGraph generation.
- `NEXT_PUBLIC_SUPABASE_URL` / `NEXT_PUBLIC_SUPABASE_ANON_KEY`: (Optional) Supabase credentials if database features are active.

---

## 5. Development Commands

| Command                | Description                                                           |
| :--------------------- | :-------------------------------------------------------------------- |
| `npm run dev`          | Start the local Next.js development server at `http://localhost:3000` |
| `npm run build`        | Build the optimized production application                            |
| `npm run start`        | Run the built production application locally                          |
| `npm run lint`         | Run ESLint across all codebase files                                  |
| `npm run lint:fix`     | Automatically fix ESLint format and lint errors                       |
| `npm run type-check`   | Execute TypeScript type-checking without emitting files               |
| `npm run format`       | Format code using Prettier and Tailwind plugin                        |
| `npm run format:check` | Check code formatting compliance                                      |

---

## 6. Deployment Instructions (Vercel)

The architecture is fully compatible with Vercel and standard Next.js hosting environments:

1. Push this repository to GitHub / GitLab.
2. Import the project into the [Vercel Dashboard](https://vercel.com).
3. Set the Framework Preset to **Next.js**.
4. In **Environment Variables**, add the variables documented in `.env.example`:
   - `NEXT_PUBLIC_SITE_URL`: Production domain URL (e.g. `https://powertechengineers.com`).
   - Any optional Supabase credentials.
5. Deploy.

---

## 7. Content-Source Policy

The official Powertech Engineers Company Profile document is the primary source of truth for all company information.

> **Zero Fiction Rule**:
> _"Source content must not be fabricated. Any missing, unclear, contradictory, or unverified information must be flagged for review."_

The codebase strictly forbids inventing:

- Client names or project scopes
- Numerical statistics or annual turnover
- Employee counts or workforce capacity claims
- ISO certifications or contractor license grades without registration numbers
- Client testimonials or awards

---

## 8. Verification Policy

Because primary company documents and legacy profiles may contain conflicting contact numbers, evolving addresses, or outdated email domains, all content items are tracked in `docs/CONTENT-VERIFICATION.md`.

- Unverified items are tagged with explicit `[TODO: Verify ...]` markers in the data schemas (`src/data/`).
- No assumptions or silent corrections are permitted.
- Publication of company track record and executive profiles occurs only after formal sign-off.

---

## 9. Phase 1 Verification Status

- [x] Next.js App Router with TypeScript & Tailwind CSS initialized
- [x] Design token system established in `src/app/globals.css` with reduced-motion support
- [x] All 13 site routes prepared with metadata and breadcrumbs
- [x] Foundational reusable UI components and cards prepared and typed
- [x] Strict data schemas created with zero synthetic/placeholder claims
- [x] Four documentation guides created in `/docs/`
- [x] Prettier, ESLint, and TypeScript validation verified
