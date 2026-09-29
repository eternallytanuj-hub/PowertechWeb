import { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { Breadcrumb } from "@/components/navigation/Breadcrumb";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Engineering Capabilities",
  description:
    "Explore Powertech Engineers' machinery, technical workforce, testing equipment, and statutory compliance capabilities.",
  path: "/capabilities",
});

export default function CapabilitiesPage() {
  return (
    <Section spacing="lg">
      <Container>
        <Breadcrumb items={[{ label: "Capabilities", href: "/capabilities", current: true }]} />
        <SectionHeading
          as="h1"
          eyebrow="Technical Infrastructure"
          title="Engineering & Execution Capabilities"
          description="Architecture prepared for verified plant, machinery, testing instruments, safety protocols, and technical human resources."
        />

        <div className="border-border text-muted bg-surface rounded-lg border border-dashed p-8 text-center text-sm">
          <p className="text-foreground font-semibold">Content Pending Verification</p>
          <p className="mx-auto mt-2 max-w-xl">
            Tools, plant machinery, testing instruments (BDV testers, relay test kits, Megger, CRM),
            and certified workforce counts will be extracted directly from the verified Company
            Profile during Phase 2.
          </p>
        </div>
      </Container>
    </Section>
  );
}
