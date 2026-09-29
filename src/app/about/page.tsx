import { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { Breadcrumb } from "@/components/navigation/Breadcrumb";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "About Us",
  description:
    "Learn about Powertech Engineers, our electrical infrastructure capabilities, and our engineering standards.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <Section spacing="lg">
      <Container>
        <Breadcrumb items={[{ label: "About Us", href: "/about", current: true }]} />
        <SectionHeading
          as="h1"
          eyebrow="Corporate Overview"
          title="About Powertech Engineers"
          description="Architecture ready for verified corporate history, vision, mission, and organizational credentials from the official company profile."
        />
        <div className="border-border text-muted bg-surface rounded-lg border border-dashed p-8 text-center text-sm">
          <p className="text-foreground font-semibold">Content Pending Verification</p>
          <p className="mx-auto mt-2 max-w-xl">
            Corporate overview, establishment milestones, and founding philosophy will be populated
            directly from the verified Powertech Engineers Company Profile document during Phase 2.
          </p>
        </div>
      </Container>
    </Section>
  );
}
