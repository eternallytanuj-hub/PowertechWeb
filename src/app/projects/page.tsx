import { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { Breadcrumb } from "@/components/navigation/Breadcrumb";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { constructMetadata } from "@/lib/seo";
import { projectsData } from "@/data/projects";

export const metadata: Metadata = constructMetadata({
  title: "Projects & Track Record",
  description:
    "Review verified EPC electrical infrastructure projects, high-voltage substations, and industrial installations completed by Powertech Engineers.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <Section spacing="lg">
      <Container>
        <Breadcrumb items={[{ label: "Projects", href: "/projects", current: true }]} />
        <SectionHeading
          as="h1"
          eyebrow="Proven Execution"
          title="Projects & Track Record"
          description="Verified record of completed and ongoing electrical infrastructure, substation, and industrial electrification contracts."
        />

        {projectsData.length === 0 ? (
          <div className="border-border text-muted bg-surface rounded-lg border border-dashed p-12 text-center text-sm">
            <p className="text-foreground text-base font-semibold">
              Project Portfolio Under Verification
            </p>
            <p className="mx-auto mt-2 max-w-lg leading-relaxed">
              No unverified or synthetic projects are published. Actual client contracts, scopes,
              locations, and voltage classes are being audited from the Powertech Company Profile
              PDF and will be populated in Phase 2.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projectsData.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </Container>
    </Section>
  );
}
