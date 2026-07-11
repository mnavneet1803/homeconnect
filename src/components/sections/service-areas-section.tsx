import { getAllLocations } from "@/data";
import { LOCATIONS } from "@/constants/locations";
import { ROUTES } from "@/constants/routes";
import { Container, Section } from "@/components/ui/container";
import { CoverageExplorer } from "@/components/sections/coverage-explorer";

export function ServiceAreasSection() {
  const locations = getAllLocations();
  const edmonton = LOCATIONS.find((l) => l.slug === "edmonton");

  const cities = locations.map((loc) => ({
    slug: loc.slug,
    name: loc.name,
    href: loc.href,
  }));

  return (
    <Section id="areas" className="bg-paper-deep/40">
      <Container>
        <CoverageExplorer
          cities={cities}
          neighbourhoods={edmonton?.neighbourhoods ?? []}
          quoteHref={ROUTES.quote}
        />
      </Container>
    </Section>
  );
}
