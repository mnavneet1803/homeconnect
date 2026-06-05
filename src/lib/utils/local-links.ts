import { LOCATIONS } from "@/constants/locations";
import { ROUTES } from "@/constants/routes";
import { slugify } from "@/lib/utils/slugify";

/** Resolve a display area name to an internal link for local SEO */
export function getAreaHref(area: string, serviceSlug?: string): string | null {
  const location = LOCATIONS.find((l) => l.name === area);
  if (location) {
    return serviceSlug
      ? ROUTES.services.sub(serviceSlug, location.slug)
      : location.href;
  }

  const edmonton = LOCATIONS.find((l) => l.slug === "edmonton");
  if (edmonton?.neighbourhoods.includes(area)) {
    return ROUTES.locations.neighbourhood("edmonton", slugify(area));
  }

  return null;
}
