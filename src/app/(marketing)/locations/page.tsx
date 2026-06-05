import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";
import { Container, Section, SectionHeader } from "@/components/ui/container";
import { ROUTES } from "@/constants/routes";
import { getAllLocations } from "@/data";

export const metadata: Metadata = buildMetadata({
  title: "Service Areas",
  description:
    "Edmonton Home Connect serves Edmonton and the Capital Region — Sherwood Park, St. Albert, Spruce Grove, and more.",
  path: ROUTES.locations.index,
});

export default function LocationsIndexPage() {
  const locations = getAllLocations();

  return (
    <Section className="pt-16">
      <Container>
        <SectionHeader
          title="Serving Edmonton & the Capital Region"
          description="Find home service pros in your area."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {locations.map((location) => (
            <Link key={location.slug} href={location.href} className="card-interactive card-body">
              <h2 className="text-heading-sm text-ink-900">{location.name}</h2>
              <p className="mt-1 text-caption text-ink-500">{location.region}</p>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
