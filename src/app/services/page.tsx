import { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { Breadcrumb } from "@/components/navigation/Breadcrumb";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { constructMetadata } from "@/lib/seo";
import { servicesData } from "@/data/services";

export const metadata: Metadata = constructMetadata({
  title: "Engineering Services",
  description:
    "Comprehensive turnkey electrical engineering, EPC infrastructure, substations, transmission lines, and industrial power solutions.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <Section spacing="lg">
      <Container>
        <Breadcrumb items={[{ label: "Services", href: "/services", current: true }]} />
        <SectionHeading
          as="h1"
          eyebrow="Turnkey EPC Solutions"
          title="Engineering & Infrastructure Services"
          description="Powertech Engineers provides end-to-end execution across high-voltage substations, transmission lines, industrial electrification, and preventive maintenance."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
