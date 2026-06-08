import { SERVICES, SERVICE_BY_SLUG, type ServiceSlug } from "@/constants/services";
import { getServicePageContent } from "@/data/services/pages";
import { LOCATIONS, LOCATION_BY_SLUG, type LocationSlug } from "@/constants/locations";
import type { ServiceDetail } from "@/types/service";

/** Data access layer — components never import raw JSON directly */

export function getAllServices() {
  return [...SERVICES].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getServiceBySlug(slug: string) {
  return SERVICE_BY_SLUG[slug as ServiceSlug] ?? null;
}

export function getAllLocations() {
  return [...LOCATIONS].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getLocationBySlug(slug: string) {
  return LOCATION_BY_SLUG[slug as LocationSlug] ?? null;
}

/** Service detail pages — loads rich SEO content when available */
export function getServiceDetail(slug: ServiceSlug): ServiceDetail | null {
  const service = SERVICE_BY_SLUG[slug];
  if (!service) return null;

  const page = getServicePageContent(slug);

  if (page) {
    return {
      ...service,
      metaTitle: page.metaTitle,
      metaDescription: page.metaDescription,
      headline: page.hero.headline,
      subheadline: page.hero.subheadline,
      intro: page.hero.intro,
      subServices: page.subServices.map((s) => ({
        slug: s.name.toLowerCase().replace(/\s+/g, "-"),
        name: s.name,
        shortDescription: s.description,
        href: service.href,
      })),
      faq: page.faq,
      relatedSlugs: page.relatedSlugs,
    };
  }

  return {
    ...service,
    metaTitle: `${service.name} Edmonton | Free Quote from Our Team`,
    metaDescription: `Need a ${service.name.toLowerCase()} in Edmonton? Our licensed, insured team handles the work directly. Free quote, no obligation.`,
    headline: `${service.pluralName} in Edmonton`,
    subheadline: `Our own ${service.pluralName.toLowerCase()} serve Edmonton and the Capital Region.`,
    intro: `Tell us about your project and our team will provide a free quote — no middlemen, no obligation.`,
    subServices: [],
    faq: [],
    relatedSlugs: SERVICES.filter((s) => s.slug !== slug)
      .slice(0, 3)
      .map((s) => s.slug),
  };
}

export function getAllServiceSlugs(): ServiceSlug[] {
  return SERVICES.map((s) => s.slug);
}

export function getAllLocationSlugs(): LocationSlug[] {
  return LOCATIONS.map((l) => l.slug);
}
