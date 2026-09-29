import { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { Breadcrumb } from "@/components/navigation/Breadcrumb";
import { LeadershipCard } from "@/components/cards/LeadershipCard";
import { constructMetadata } from "@/lib/seo";
import { leadershipData } from "@/data/leadership";

export const metadata: Metadata = constructMetadata({
  title: "Leadership & Management",
  description:
    "Meet the engineering directors and technical leadership steering Powertech Engineers.",
  path: "/leadership",
});

export default function LeadershipPage() {
  return (
    <Section spacing="lg">
      <Container>
        <Breadcrumb items={[{ label: "Leadership", href: "/leadership", current: true }]} />
        <SectionHeading
          as="h1"
          eyebrow="Executive Team"
          title="Leadership & Engineering Management"
          description="Experienced electrical engineers, technical directors, and project managers leading Powertech's execution excellence."
        />

        {leadershipData.length === 0 ? (
          <div className="border-border text-muted bg-surface rounded-lg border border-dashed p-12 text-center text-sm">
            <p className="text-foreground text-base font-semibold">
              Leadership Profiles Under Verification
            </p>
            <p className="mx-auto mt-2 max-w-lg leading-relaxed">
              Official executive names, designations, and technical credentials are undergoing
              source verification against statutory records and the company profile document.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {leadershipData.map((member) => (
              <LeadershipCard key={member.id} member={member} />
            ))}
          </div>
        )}
      </Container>
    </Section>
  );
}
