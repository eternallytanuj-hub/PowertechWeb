import { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { Breadcrumb } from "@/components/navigation/Breadcrumb";
import { CertificationCard } from "@/components/cards/CertificationCard";
import { constructMetadata } from "@/lib/seo";
import { certificationsData } from "@/data/certifications";

export const metadata: Metadata = constructMetadata({
  title: "Certifications & Statutory Licenses",
  description:
    "Quality management systems, electrical contractor licenses, safety accreditations, and statutory certifications held by Powertech Engineers.",
  path: "/certifications",
});

export default function CertificationsPage() {
  return (
    <Section spacing="lg">
      <Container>
        <Breadcrumb items={[{ label: "Certifications", href: "/certifications", current: true }]} />
        <SectionHeading
          as="h1"
          eyebrow="Quality & Compliance"
          title="Certifications & Accreditations"
          description="Statutory government electrical licenses, ISO quality certifications, and health, safety & environment (HSE) standards."
        />

        {certificationsData.length === 0 ? (
          <div className="border-border text-muted bg-surface rounded-lg border border-dashed p-12 text-center text-sm">
            <p className="text-foreground text-base font-semibold">Accreditations Awaiting Audit</p>
            <p className="mx-auto mt-2 max-w-lg leading-relaxed">
              Electrical contractor license grade, issuing electricity licensing board, and ISO
              registration numbers will be populated following verification from official
              certificate copies.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {certificationsData.map((cert) => (
              <CertificationCard key={cert.id} certification={cert} />
            ))}
          </div>
        )}
      </Container>
    </Section>
  );
}
