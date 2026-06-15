import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";
import { Container, Section, SectionHeader } from "@/components/ui/container";
import { ROUTES } from "@/constants/routes";
import { getAllLocations } from "@/data";
import { LocationCoverageSection } from "@/components/sections/location-coverage-section";
import { Reveal } from "@/components/motion/reveal";
import { StaggerGrid, StaggerItem } from "@/components/motion/stagger-grid";
import { HoverCard } from "@/components/motion/hover-card";

export const metadata: Metadata = buildMetadata({
  title: "Service Areas",
  description:
    "Home Solution Services serves Edmonton and the Capital Region — Sherwood Park, St. Albert, Spruce Grove, Stony Plain, Leduc, Beaumont, and more.",
  path: ROUTES.locations.index,
});

export default function LocationsIndexPage() {
  const locations = getAllLocations();

  return (
    <>
      <Section className="pt-16">
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow="Edmonton & Capital Region"
              title="Serving Edmonton & the Capital Region"
              description="Our team serves Edmonton and communities across the metro area — handyman, cleaning, maintenance, and more."
            />
          </Reveal>
        </Container>
      </Section>

      <LocationCoverageSection />

      <Section className="bg-surface-0">
        <Container>
          <Reveal>
            <h2 className="text-heading-lg text-ink-900">Browse by community</h2>
            <p className="mt-2 max-w-prose text-body-md text-ink-500">
              Select your city or town to see local services, neighbourhoods, and request a
              free quote.
            </p>
          </Reveal>

          <StaggerGrid className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {locations.map((location) => (
              <StaggerItem key={location.slug}>
                <HoverCard className="h-full">
                  <Link
                    href={location.href}
                    className="card-interactive flex h-full flex-col card-body focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-500/20"
                  >
                    <h3 className="text-heading-sm text-ink-900">{location.name}</h3>
                    <p className="mt-1 text-caption text-ink-500">{location.region}</p>
                    {location.neighbourhoods.length > 0 && (
                      <p className="mt-3 text-body-sm text-ink-400">
                        {location.neighbourhoods.slice(0, 4).join(" · ")}
                        {location.neighbourhoods.length > 4 ? " · …" : ""}
                      </p>
                    )}
                    <span className="mt-4 text-label-sm font-medium text-brand-700">
                      View local services →
                    </span>
                  </Link>
                </HoverCard>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </Container>
      </Section>
    </>
  );
}
