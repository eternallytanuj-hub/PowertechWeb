# Powertech Engineers — Technical Architecture & Structure

## 1. System Overview

The Powertech Engineers web application is structured as a high-performance, modular Next.js application built with TypeScript and Tailwind CSS. The architecture prioritizes server-side rendering (SSR), static metadata generation, accessible component composition, and clean separation between data definitions and visual presentation.

---

## 2. Directory & File Organization

```
POWERTECH-COMPANY-WEBSITE-PROJECT/
├── docs/                               # Architectural & Content Documentation
│   ├── PROJECT.md                      # Project scope, goals, and principles
│   ├── CONTENT-SOURCE.md               # Primary source guidelines & ingestion rules
│   ├── ARCHITECTURE.md                 # Technical architecture & directory map
│   └── CONTENT-VERIFICATION.md         # Pre-publication verification checklist
│
├── public/                             # Static Web Assets
│   ├── images/                         # General brand and UI imagery
│   ├── projects/                       # Verified project site photographs
│   ├── leadership/                     # Executive & engineering head portraits
│   ├── certifications/                 # Official statutory license documents & badges
│   └── icons/                          # Domain-specific SVG engineering icons
│
├── src/
│   ├── app/                            # Next.js App Router (File-based Routing)
│   │   ├── layout.tsx                  # Root layout (Navbar, Footer, SEO metadata)
│   │   ├── page.tsx                    # Home page entry
│   │   ├── globals.css                 # Design token system & Tailwind imports
│   │   ├── robots.ts                   # Dynamic robots.txt generation
│   │   ├── sitemap.ts                  # Dynamic XML sitemap generator
│   │   ├── about/                      # Company overview & corporate history
│   │   │   └── page.tsx
│   │   ├── services/                   # Services hub & specialized verticals
│   │   │   ├── page.tsx                # Master services catalog
│   │   │   ├── substations-switchyards/# Substation EPC service
│   │   │   ├── industrial-electrification/# Industrial plant electrification
│   │   │   ├── transmission-lines/     # Overhead transmission line construction
│   │   │   ├── underground-cabling/    # Trenchless & underground cabling
│   │   │   ├── township-electrification/# Township & commercial infrastructure
│   │   │   └── amc-breakdown/          # Preventive maintenance & emergency response
│   │   ├── capabilities/               # Plant machinery & technical equipment
│   │   │   └── page.tsx
│   │   ├── projects/                   # Verified project case studies & track record
│   │   │   └── page.tsx
│   │   ├── leadership/                 # Management profiles & directors
│   │   │   └── page.tsx
│   │   ├── certifications/             # Quality accreditations & contractor licenses
│   │   │   └── page.tsx
│   │   └── contact/                    # Tender enquiries, RFPs, and office contacts
│   │       └── page.tsx
│   │
│   ├── components/                     # Modular Reusable UI Components
│   │   ├── layout/                     # High-level layout wrappers
│   │   │   ├── Container.tsx           # Responsive max-width container
│   │   │   ├── Section.tsx             # Semantic padded section wrapper
│   │   │   ├── Navbar.tsx              # Sticky desktop & tablet navigation
│   │   │   ├── MobileNav.tsx           # Accessible mobile drawer menu
│   │   │   └── Footer.tsx              # Corporate footer with dynamic links
│   │   ├── navigation/                 # Navigation elements
│   │   │   └── Breadcrumb.tsx          # Accessible breadcrumbs
│   │   ├── sections/                   # Multi-element structured sections
│   │   │   ├── SectionHeading.tsx      # Standardized heading with eyebrow & subtitle
│   │   │   └── CTASection.tsx          # Project enquiry call-to-action block
│   │   ├── ui/                         # Atomic primitives
│   │   │   ├── Button.tsx              # Standard button with loading/variant states
│   │   │   ├── Link.tsx                # Universal internal/external anchor
│   │   │   ├── LoadingState.tsx        # Accessible loading spinner and feedback
│   │   │   └── ErrorState.tsx          # Accessible error fallback card
│   │   ├── cards/                      # Structured card components
│   │   │   ├── ServiceCard.tsx         # Service vertical preview card
│   │   │   ├── ProjectCard.tsx         # Infrastructure project showcase card
│   │   │   ├── LeadershipCard.tsx      # Director profile card
│   │   │   └── CertificationCard.tsx   # Accreditation and license card
│   │   ├── forms/                      # Form inputs & handlers
│   │   │   ├── Input.tsx               # Accessible labeled text input
│   │   │   ├── Textarea.tsx            # Accessible labeled textarea
│   │   │   ├── Select.tsx              # Accessible labeled dropdown select
│   │   │   └── ContactForm.tsx         # B2B technical enquiry form
│   │   └── media/                      # Media display
│   │       └── ImageWrapper.tsx        # Next.js Image wrapper with aspect ratios
│   │
│   ├── data/                           # Typed Content Repositories (Verified Ground Truth)
│   │   ├── company.ts                  # Core company details & addresses
│   │   ├── services.ts                 # Service descriptions & capabilities
│   │   ├── projects.ts                 # Verified project history
│   │   ├── leadership.ts               # Executive team records
│   │   └── certifications.ts           # Accreditations & licensing data
│   │
│   ├── lib/                            # Shared Utilities & System Services
│   │   ├── utils.ts                    # ClassName merging (cn) & date formatting
│   │   ├── seo.ts                      # Metadata & JSON-LD structured data generators
│   │   ├── constants.ts                # Site navigation & system constants
│   │   └── supabase.ts                 # Safe Supabase client initialization
│   │
│   └── types/                          # Strict TypeScript Domain Interfaces
│       └── index.ts                    # Master domain types
│
├── .env.example                        # Environment variable documentation
├── eslint.config.mjs                   # ESLint configuration
├── .prettierrc.json                    # Prettier formatting rules
├── .prettierignore                     # Prettier file ignore list
├── next.config.ts                      # Next.js build configuration
├── package.json                        # Dependencies & npm scripts
└── tsconfig.json                       # TypeScript compiler configuration
```

---

## 3. Design System Token Foundation

The design system is grounded in CSS Custom Properties bridged to Tailwind CSS v4 via `@theme`:

| Token Category      | Token Variable                                            | Role / Usage                                                      |
| :------------------ | :-------------------------------------------------------- | :---------------------------------------------------------------- |
| **Primary Color**   | `--primary`                                               | Deep technical navy for corporate trust, primary buttons, headers |
| **Secondary Color** | `--secondary`                                             | Precision blue for interactive states, links, subheadings         |
| **Accent Color**    | `--accent`                                                | Warm engineering amber for prominent CTAs, badges, highlights     |
| **Surfaces**        | `--background`, `--surface`, `--surface-raised`           | Neutral white and subtle slate layers                             |
| **Text**            | `--foreground`, `--muted`, `--muted-foreground`           | High-contrast typography scale adhering to WCAG standards         |
| **Borders**         | `--border`, `--border-subtle`                             | Crisp division lines for technical layouts                        |
| **Feedback**        | `--success`, `--warning`, `--error`                       | Form validation and status indicators                             |
| **Elevations**      | `--shadow-sm` through `--shadow-xl`                       | Subtle, controlled elevation                                      |
| **Transitions**     | `--duration-fast`, `--duration-normal`, `--duration-slow` | Controlled micro-interactions                                     |

---

## 4. Rendering Strategy & Server Components

- **Default Server Components**: All page routes (`page.tsx`), high-level layouts, sections, and cards render on the server without shipping React runtime JavaScript to the client.
- **Selective Client Components**: Only interactive UI elements utilize the `"use client"` directive:
  - `MobileNav.tsx`: Manages mobile menu toggle state and keyboard traps.
  - `ContactForm.tsx`: Handles local input states, real-time feedback, and submission transitions.
- **SEO & Metadata**: Every route exports typed `Metadata` generated via `constructMetadata()` from `src/lib/seo.ts`, providing canonical links, OpenGraph cards, and Twitter summary metadata.

---

## 5. Security & Data Protection Architecture

1. **Zero Secret Leakage**:
   - Only variables intended for browser consumption are prefixed with `NEXT_PUBLIC_`.
   - Private tokens (e.g. `SUPABASE_SERVICE_ROLE_KEY`, `CAPTCHA_SECRET_KEY`) are isolated to server-side executions.
2. **Safe Database Connectivity**:
   - `src/lib/supabase.ts` provides non-throwing fallback handling if credentials are not configured during early environments.
3. **Form Sanitization**:
   - All forms use controlled inputs, strict typing, and server-side submission readiness.
