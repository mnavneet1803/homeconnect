import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo/metadata";
import { buildServiceSchema, buildBreadcrumbSchema, buildFAQSchema } from "@/lib/seo/json-ld";
import { JsonLdScript } from "@/components/seo/json-ld-script";
import { ROUTES } from "@/constants/routes";
import { SERVICE_BY_SLUG } from "@/constants/services";
import { LOCATION_BY_SLUG } from "@/constants/locations";
import {
  getServiceLocationPage,
  getServiceLocationStaticParams,
} from "@/data/services/locations";
import { ServiceLocationTemplate } from "@/components/sections/service-location-template";
import type { ServiceSlug } from "@/constants/services";

interface ServiceLocationPageProps {
  params: Promise<{ slug: string; location: string }>;
}

export async function generateStaticParams() {
  return getServiceLocationStaticParams();
}

export async function generateMetadata({
  params,
}: ServiceLocationPageProps): Promise<Metadata> {
  const { slug, location } = await params;
  const page = getServiceLocationPage(slug, location);
  if (!page) return {};

  return buildMetadata({
    title: page.title,
    description: page.description,
    path: page.href,
    ogImage: `/images/og/services/${slug}.jpg`,
  });
}

export default async function ServiceLocationPage({ params }: ServiceLocationPageProps) {
  const { slug, location } = await params;
  const page = getServiceLocationPage(slug, location);
  const service = SERVICE_BY_SLUG[slug as ServiceSlug];
  const loc = LOCATION_BY_SLUG[location as keyof typeof LOCATION_BY_SLUG];

  if (!page || !service || !loc) notFound();

  const breadcrumbs = [
    { name: "Home", href: ROUTES.home },
    { name: "Services", href: ROUTES.services.index },
    { name: service.name, href: service.href },
    { name: loc.name, href: page.href },
  ];

  const faqForSchema = [
    {
      id: `${page.serviceSlug}-${page.locationSlug}-schema`,
      question: `How much does ${service.name.toLowerCase()} cost in ${loc.name}?`,
      answer: `Every project is priced individually. Request a free custom quote from our ${service.pluralName.toLowerCase()} in ${loc.name}.`,
    },
  ];

  return (
    <>
      <JsonLdScript data={buildServiceSchema(service, loc)} />
      <JsonLdScript data={buildBreadcrumbSchema(breadcrumbs)} />
      <JsonLdScript data={buildFAQSchema(faqForSchema)} />
      <ServiceLocationTemplate page={page} />
    </>
  );
}
