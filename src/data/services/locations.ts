import { SEO_SERVICE_SLUGS } from "@/data/services/pages";
import { FEATURED_LOCATIONS } from "@/constants/locations";
import { SERVICE_BY_SLUG } from "@/constants/services";
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

export function getServiceLocationPages(): ServiceLocationPage[] {
  const pages: ServiceLocationPage[] = [];

  for (const serviceSlug of SEO_SERVICE_SLUGS) {
    const service = SERVICE_BY_SLUG[serviceSlug];
    for (const location of FEATURED_LOCATIONS) {
      pages.push({
        serviceSlug,
        locationSlug: location.slug,
        href: ROUTES.services.sub(serviceSlug, location.slug),
        title: `${service.name} ${location.name} | Free Quotes from Vetted Pros`,
        description: `Need a ${service.name.toLowerCase()} in ${location.name}? Get matched with up to 3 vetted, insured local pros. Free quotes — no obligation.`,
        headline: `${service.pluralName} in ${location.name}`,
      });
    }
  }

  return pages;
}

export function getServiceLocationPage(
  serviceSlug: string,
  locationSlug: string
): ServiceLocationPage | null {
  return (
    getServiceLocationPages().find(
      (p) => p.serviceSlug === serviceSlug && p.locationSlug === locationSlug
    ) ?? null
  );
}

export function getServiceLocationStaticParams() {
  return getServiceLocationPages().map((p) => ({
    slug: p.serviceSlug,
    location: p.locationSlug,
  }));
}
