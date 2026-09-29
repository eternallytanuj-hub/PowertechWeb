import { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { Breadcrumb } from "@/components/navigation/Breadcrumb";
import { ContactForm } from "@/components/forms/ContactForm";
import { constructMetadata } from "@/lib/seo";
import { companyData } from "@/data/company";
import { MapPin, Mail, Phone, Clock } from "lucide-react";

export const metadata: Metadata = constructMetadata({
  title: "Contact Us & Project Enquiries",
  description:
    "Connect with Powertech Engineers for high-voltage electrical infrastructure tenders, industrial electrification RFPs, and AMC enquiries.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <Section spacing="lg">
      <Container>
        <Breadcrumb items={[{ label: "Contact", href: "/contact", current: true }]} />
        <SectionHeading
          as="h1"
          eyebrow="Tender & Project Enquiries"
          title="Connect with Powertech Engineers"
          description="Submit your technical RFP, tender notice, or request an on-site electrical engineering consultation."
        />

        <div className="mt-8 grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Form Area */}
          <div className="border-border bg-surface rounded-lg border p-6 shadow-sm sm:p-8 lg:col-span-7">
            <h2 className="text-foreground mb-6 text-xl font-bold">Technical Enquiry Form</h2>
            <ContactForm />
          </div>

          {/* Contact Details & Verification Notice */}
          <div className="space-y-6 lg:col-span-5">
            <div className="border-border bg-surface space-y-6 rounded-lg border p-6 shadow-sm">
              <h3 className="text-foreground text-lg font-bold">Registered Office & Contact</h3>

              <div className="text-foreground/90 flex items-start space-x-3 text-sm">
                <MapPin className="text-secondary mt-0.5 h-5 w-5 shrink-0" />
                <div>
                  <p className="text-foreground font-semibold">Address:</p>
                  <p className="text-muted mt-1">{companyData.contact.address.formatted}</p>
                </div>
              </div>

              <div className="text-foreground/90 flex items-start space-x-3 text-sm">
                <Phone className="text-secondary mt-0.5 h-5 w-5 shrink-0" />
                <div>
                  <p className="text-foreground font-semibold">Telephone:</p>
                  <p className="text-muted mt-1">
                    {companyData.contact.primaryPhone || "[Awaiting verified contact numbers]"}
                  </p>
                </div>
              </div>

              <div className="text-foreground/90 flex items-start space-x-3 text-sm">
                <Mail className="text-secondary mt-0.5 h-5 w-5 shrink-0" />
                <div>
                  <p className="text-foreground font-semibold">Official Email:</p>
                  <p className="text-muted mt-1">
                    {companyData.contact.primaryEmail || "[Awaiting verified company email]"}
                  </p>
                </div>
              </div>

              <div className="text-foreground/90 flex items-start space-x-3 text-sm">
                <Clock className="text-secondary mt-0.5 h-5 w-5 shrink-0" />
                <div>
                  <p className="text-foreground font-semibold">Office Hours:</p>
                  <p className="text-muted mt-1">Monday – Saturday: 9:00 AM – 6:00 PM IST</p>
                </div>
              </div>
            </div>

            <div className="border-border bg-surface/50 text-muted rounded-lg border p-4 text-xs">
              <p className="text-foreground mb-1 font-semibold">
                Notice for Vendors & Subcontractors
              </p>
              <p>
                Please ensure all vendor registrations and supplier submissions reference official
                Powertech procurement channels.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
