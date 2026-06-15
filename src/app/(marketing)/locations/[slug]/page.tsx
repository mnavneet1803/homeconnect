import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo/metadata";
import { buildBreadcrumbSchema, buildLocalBusinessSchema } from "@/lib/seo/json-ld";
import { JsonLdScript } from "@/components/seo/json-ld-script";
import { ROUTES } from "@/constants/routes";
import { getAllLocationSlugs, getLocationBySlug } from "@/data";
import { LocationPageTemplate } from "@/components/sections/location-page-template";

interface LocationPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllLocationSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: LocationPageProps): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) return {};

  return buildMetadata({
    title: `Home Services in ${location.name}, Alberta`,
    description: `Home services in ${location.name} and surrounding areas. Our team handles handyman, painting, plumbing, electrical, and more — free custom quotes.`,
    path: location.href,
    ogImageAlt: `Home services in ${location.name}, Alberta — Home Solution Services`,
    keywords: [
      `home services ${location.name}`,
      `contractors ${location.name}`,
      `handyman ${location.name}`,
    ],
  });
}

export default async function LocationPage({ params }: LocationPageProps) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) notFound();

  const breadcrumbs = [
    { name: "Home", href: ROUTES.home },
    { name: "Locations", href: ROUTES.locations.index },
    { name: location.name, href: location.href },
  ];

  return (
    <>
      <JsonLdScript data={buildBreadcrumbSchema(breadcrumbs)} />
      <JsonLdScript data={buildLocalBusinessSchema()} />
      <LocationPageTemplate location={location} />
    </>
  );
}
