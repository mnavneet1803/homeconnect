import { LOCATIONS } from "@/constants/locations";
import { ROUTES } from "@/constants/routes";
import { slugify } from "@/lib/utils/slugify";
import type { LocationSlug } from "@/constants/locations";

/** Neighbourhood landing pages for Edmonton local SEO */
export interface NeighbourhoodPage {
  slug: string;
  name: string;
  citySlug: LocationSlug;
  cityName: string;
  href: string;
}

export function getAllNeighbourhoodPages(): NeighbourhoodPage[] {
  const pages: NeighbourhoodPage[] = [];

  for (const location of LOCATIONS) {
    for (const hood of location.neighbourhoods) {
      const hoodSlug = slugify(hood);
      pages.push({
        slug: hoodSlug,
        name: hood,
        citySlug: location.slug,
        cityName: location.name,
        href: ROUTES.locations.neighbourhood(location.slug, hoodSlug),
      });
    }
  }

  return pages;
}

export function getNeighbourhoodPage(
  citySlug: string,
  hoodSlug: string
): NeighbourhoodPage | null {
  return (
    getAllNeighbourhoodPages().find(
      (p) => p.citySlug === citySlug && p.slug === hoodSlug
    ) ?? null
  );
}

export function getNeighbourhoodStaticParams() {
  return getAllNeighbourhoodPages().map((p) => ({
    slug: p.citySlug,
    hood: p.slug,
  }));
}
