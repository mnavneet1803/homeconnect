import { FEATURED_LOCATIONS, LOCATION_BY_SLUG } from "@/constants/locations";
import { FEATURED_SERVICES, SERVICE_BY_SLUG } from "@/constants/services";
import { ROUTES } from "@/constants/routes";
import type { ServiceSlug } from "@/constants/services";
import type { LocationSlug } from "@/constants/locations";

export interface ServiceLocationPage {
  serviceSlug: ServiceSlug;
  locationSlug: LocationSlug;
  href: string;
  title: string;
  description: string;
  headline: string;
}

function buildPage(
  serviceSlug: ServiceSlug,
  locationSlug: LocationSlug
): ServiceLocationPage {
  const service = SERVICE_BY_SLUG[serviceSlug];
  const location = LOCATION_BY_SLUG[locationSlug];

  return {
    serviceSlug,
    locationSlug,
    href: ROUTES.services.sub(serviceSlug, locationSlug),
    title: `${service.name} ${location.name} | Free Quote from Our Team`,
    description: `Need a ${service.name.toLowerCase()} in ${location.name}? Our team handles the work directly. Free quote — no obligation.`,
    headline: `${service.pluralName} in ${location.name}`,
  };
}

/** Prebuild featured services × featured locations (matches location page cards). */
export function getServiceLocationPages(): ServiceLocationPage[] {
  const pages: ServiceLocationPage[] = [];

  for (const service of FEATURED_SERVICES) {
    for (const location of FEATURED_LOCATIONS) {
      pages.push(buildPage(service.slug, location.slug));
    }
  }

  return pages;
}

export function getServiceLocationPage(
  serviceSlug: string,
  locationSlug: string
): ServiceLocationPage | null {
  const service = SERVICE_BY_SLUG[serviceSlug as ServiceSlug];
  const location = LOCATION_BY_SLUG[locationSlug as LocationSlug];
  if (!service || !location) return null;
  return buildPage(service.slug, location.slug);
}

export function getServiceLocationStaticParams() {
  return getServiceLocationPages().map((p) => ({
    slug: p.serviceSlug,
    location: p.locationSlug,
  }));
}
