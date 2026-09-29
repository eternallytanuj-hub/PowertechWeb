import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { companyData } from "@/data/company";
import { ShieldCheck, HardHat, FileText } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <Section spacing="xl" variant="surface">
        <Container>
          <div className="max-w-3xl">
            <span className="bg-primary/10 text-primary mb-4 inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold tracking-wider uppercase">
              Phase 1 Architecture Initialized
            </span>
            <h1 className="text-foreground text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
              {companyData.name}
            </h1>
            <p className="text-muted mt-4 text-lg leading-relaxed">{companyData.description}</p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/services"
                className="bg-primary hover:bg-primary/90 inline-flex items-center justify-center rounded-md px-5 py-2.5 text-sm font-semibold text-white shadow transition-colors"
              >
                Services Architecture
              </Link>
              <Link
                href="/contact"
                className="border-border bg-background text-foreground hover:bg-surface inline-flex items-center justify-center rounded-md border px-5 py-2.5 text-sm font-semibold transition-colors"
              >
                Contact Channels
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      <Section spacing="lg">
        <Container>
          <SectionHeading
            eyebrow="Architectural Foundation"
            title="Environment & Readiness Verification"
            description="All architectural layers, design tokens, routing structures, and component interfaces are initialized for Phase 2."
          />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="border-border bg-surface rounded-lg border p-6 shadow-sm">
              <div className="bg-primary/10 text-primary flex h-10 w-10 items-center justify-center rounded-md">
                <HardHat className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="text-foreground mt-4 text-base font-bold">EPC Services Routing</h3>
              <p className="text-muted mt-2 text-sm">
                6 specialized engineering service routes prepared with typed capability structures.
              </p>
            </div>

            <div className="border-border bg-surface rounded-lg border p-6 shadow-sm">
              <div className="bg-secondary/10 text-secondary flex h-10 w-10 items-center justify-center rounded-md">
                <ShieldCheck className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="text-foreground mt-4 text-base font-bold">Zero Fake Data Guardrail</h3>
              <p className="text-muted mt-2 text-sm">
                Data schemas populated strictly with verified company data or explicit verification
                markers.
              </p>
            </div>

            <div className="border-border bg-surface rounded-lg border p-6 shadow-sm">
              <div className="bg-accent/20 text-foreground flex h-10 w-10 items-center justify-center rounded-md">
                <FileText className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="text-foreground mt-4 text-base font-bold">Documentation & Audits</h3>
              <p className="text-muted mt-2 text-sm">
                Verification checklists and architectural documentation prepared in /docs.
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
