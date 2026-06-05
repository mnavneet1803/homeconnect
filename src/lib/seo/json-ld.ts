import { siteConfig } from "@/config/site";
import { absoluteUrl } from "@/lib/utils/format";
import type { BreadcrumbItem, JsonLdGraph } from "@/types/seo";
import type { FAQItem } from "@/types/faq";
import type { Service } from "@/types/service";
import type { Location } from "@/types/location";

/** Organization + WebSite graph for root layout */
export function buildOrganizationSchema(): JsonLdGraph {
  const sameAs = [
    siteConfig.social.googleBusiness,
    siteConfig.social.facebook,
    siteConfig.social.instagram,
    siteConfig.social.linkedin,
  ].filter(Boolean);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        url: siteConfig.url,
        logo: absoluteUrl("/images/brand/logo.png", siteConfig.url),
        description: siteConfig.description,
        email: siteConfig.email,
        telephone: siteConfig.phone.tel,
        ...(sameAs.length > 0 ? { sameAs } : {}),
        address: {
          "@type": "PostalAddress",
          addressLocality: siteConfig.address.city,
          addressRegion: siteConfig.address.province,
          addressCountry: siteConfig.address.countryCode,
        },
        areaServed: {
          "@type": "GeoCircle",
          geoMidpoint: {
            "@type": "GeoCoordinates",
            latitude: siteConfig.geo.latitude,
            longitude: siteConfig.geo.longitude,
          },
          geoRadius: "50000",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        publisher: { "@id": `${siteConfig.url}/#organization` },
        inLanguage: siteConfig.language,
      },
    ],
  };
}

export function buildBreadcrumbSchema(items: BreadcrumbItem[]): JsonLdGraph {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.href, siteConfig.url),
    })),
  };
}

export function buildFAQSchema(faqs: FAQItem[]): JsonLdGraph {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function buildServiceSchema(
  service: Service,
  location?: Location
): JsonLdGraph {
  const areaName = location?.name ?? "Edmonton";
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${service.name} in ${areaName}`,
    description: service.shortDescription,
    provider: { "@id": `${siteConfig.url}/#organization` },
    areaServed: {
      "@type": "City",
      name: areaName,
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: "Alberta",
      },
    },
    url: absoluteUrl(service.href, siteConfig.url),
  };
}

export function buildLocalBusinessSchema(): JsonLdGraph {
  const sameAs = [
    siteConfig.social.googleBusiness,
    siteConfig.social.facebook,
    siteConfig.social.instagram,
    siteConfig.social.linkedin,
  ].filter(Boolean);

  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phone.tel,
    email: siteConfig.email,
    ...(sameAs.length > 0 ? { sameAs } : {}),
    ...(siteConfig.reviews.googleReviewCount > 0
      ? {
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: siteConfig.reviews.googleRating,
            reviewCount: siteConfig.reviews.googleReviewCount,
            bestRating: 5,
          },
        }
      : {}),
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.province,
      addressCountry: siteConfig.address.countryCode,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    priceRange: "$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "07:00",
      closes: "18:00",
    },
  };
}
