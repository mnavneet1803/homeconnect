import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";
import { Container, Section, SectionHeader } from "@/components/ui/container";
import { ROUTES } from "@/constants/routes";
import { getAllServices } from "@/data";

export const metadata: Metadata = buildMetadata({
  title: "Home Services",
  description:
    "Browse home services our Edmonton team offers — handyman, cleaning, painters, renovators, electricians, plumbers, and more.",
  path: ROUTES.services.index,
});

export default function ServicesIndexPage() {
  const services = getAllServices();

  return (
    <Section className="pt-16">
      <Container>
        <SectionHeader
          title="All home services"
          description="Browse by trade and request a free quote — our own crew handles every job."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link key={service.slug} href={service.href} className="card-interactive card-body">
              <h2 className="text-heading-sm text-ink-900">{service.name}</h2>
              <p className="mt-2 text-body-sm text-ink-500">{service.shortDescription}</p>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
