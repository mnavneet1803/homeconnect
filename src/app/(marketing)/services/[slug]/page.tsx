import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo/metadata";
import { buildServiceSchema, buildBreadcrumbSchema, buildFAQSchema } from "@/lib/seo/json-ld";
import { JsonLdScript } from "@/components/seo/json-ld-script";
import { ROUTES } from "@/constants/routes";
import { SERVICE_BY_SLUG } from "@/constants/services";
import { SEO_SERVICE_SLUGS, getServicePageContent } from "@/data/services/pages";
import {
  ServicePageTemplate,
  getServicePageSeo,
} from "@/components/sections/service-page-template";
import type { ServiceSlug } from "@/constants/services";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SEO_SERVICE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const seo = getServicePageSeo(slug as ServiceSlug);
  if (!seo) return {};

  return buildMetadata({
    title: seo.title,
    description: seo.description,
    path: seo.path,
    keywords: seo.keywords,
    ogImage: seo.ogImage,
  });
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const serviceSlug = slug as ServiceSlug;
  const content = getServicePageContent(slug);
  const service = SERVICE_BY_SLUG[serviceSlug];
  const seo = getServicePageSeo(serviceSlug);

  if (!content || !service || !seo) notFound();

  const breadcrumbs = [
    { name: "Home", href: ROUTES.home },
    { name: "Services", href: ROUTES.services.index },
    { name: service.name, href: service.href },
  ];

  return (
    <>
      <JsonLdScript data={buildServiceSchema(service)} />
      <JsonLdScript data={buildBreadcrumbSchema(breadcrumbs)} />
      <JsonLdScript data={buildFAQSchema(seo.faq)} />
      <ServicePageTemplate slug={serviceSlug} />
    </>
  );
}
