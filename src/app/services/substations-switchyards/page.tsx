import { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { Breadcrumb } from "@/components/navigation/Breadcrumb";
import { CTASection } from "@/components/sections/CTASection";
import { constructMetadata } from "@/lib/seo";
import { servicesData } from "@/data/services";
import { CheckCircle2 } from "lucide-react";

const service = servicesData.find((s) => s.slug === "substations-switchyards")!;

export const metadata: Metadata = constructMetadata({
  title: service.metadata.metaTitle,
  description: service.metadata.metaDescription,
  path: `/services/${service.slug}`,
});

export default function SubstationsPage() {
  return (
    <>
      <Section spacing="lg">
        <Container>
          <Breadcrumb
            items={[
              { label: "Services", href: "/services" },
              { label: service.title, href: `/services/${service.slug}`, current: true },
            ]}
          />
          <SectionHeading
            as="h1"
            eyebrow="EPC Substation Engineering"
            title={service.title}
            description={service.description}
          />

          <div className="border-border bg-surface mt-8 rounded-lg border p-6 md:p-8">
            <h2 className="text-foreground text-xl font-bold">Technical Scope & Capabilities</h2>
            <ul className="mt-4 space-y-3">
              {service.capabilities.map((cap, i) => (
                <li key={i} className="text-foreground/90 flex items-start text-sm">
                  <CheckCircle2 className="text-secondary mt-0.5 mr-2 h-4 w-4 shrink-0" />
                  <span>{cap}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>
      <CTASection />
    </>
  );
}
