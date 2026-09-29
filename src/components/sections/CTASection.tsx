import React from "react";
import Link from "next/link";
import { Container } from "../layout/Container";
import { Section } from "../layout/Section";

export interface CTASectionProps {
  title?: string;
  description?: string;
  primaryActionLabel?: string;
  primaryActionHref?: string;
  secondaryActionLabel?: string;
  secondaryActionHref?: string;
  className?: string;
}

export function CTASection({
  title = "Partner with Powertech on Your Next Infrastructure Project",
  description = "Consult our technical team for high-voltage substation engineering, transmission line construction, or industrial turnkey electrification.",
  primaryActionLabel = "Submit Project Enquiry",
  primaryActionHref = "/contact",
  secondaryActionLabel = "Explore Our Services",
  secondaryActionHref = "/services",
  className,
}: CTASectionProps) {
  return (
    <Section variant="primary" spacing="lg" className={className}>
      <Container className="text-center">
        <div className="mx-auto max-w-3xl space-y-6">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
            {title}
          </h2>
          <p className="text-base leading-relaxed text-slate-200 sm:text-lg">{description}</p>
          <div className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row">
            <Link
              href={primaryActionHref}
              className="bg-accent text-foreground hover:bg-accent/90 focus-visible:ring-accent inline-flex w-full items-center justify-center rounded-md px-6 py-3 text-sm font-semibold shadow transition focus-visible:ring-2 focus-visible:outline-none sm:w-auto"
            >
              {primaryActionLabel}
            </Link>
            <Link
              href={secondaryActionHref}
              className="inline-flex w-full items-center justify-center rounded-md border border-white/30 bg-transparent px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none sm:w-auto"
            >
              {secondaryActionLabel}
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
