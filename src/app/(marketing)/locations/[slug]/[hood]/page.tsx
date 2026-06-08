import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo/metadata";
import { buildBreadcrumbSchema } from "@/lib/seo/json-ld";
import { JsonLdScript } from "@/components/seo/json-ld-script";
import { ROUTES } from "@/constants/routes";
import {
  getNeighbourhoodPage,
  getNeighbourhoodStaticParams,
} from "@/data/locations/neighbourhoods";
import { NeighbourhoodPageTemplate } from "@/components/sections/neighbourhood-page-template";

interface NeighbourhoodPageProps {
  params: Promise<{ slug: string; hood: string }>;
}

export async function generateStaticParams() {
  return getNeighbourhoodStaticParams();
}

export async function generateMetadata({
  params,
}: NeighbourhoodPageProps): Promise<Metadata> {
  const { slug, hood } = await params;
  const neighbourhood = getNeighbourhoodPage(slug, hood);
  if (!neighbourhood) return {};

  return buildMetadata({
    title: `Home Services in ${neighbourhood.name}, ${neighbourhood.cityName}`,
    description: `Home services in ${neighbourhood.name}, ${neighbourhood.cityName}. Our licensed team provides free custom quotes for every project.`,
    path: neighbourhood.href,
  });
}

export default async function NeighbourhoodPage({ params }: NeighbourhoodPageProps) {
  const { slug, hood } = await params;
  const neighbourhood = getNeighbourhoodPage(slug, hood);
  if (!neighbourhood) notFound();

  const breadcrumbs = [
    { name: "Home", href: ROUTES.home },
    { name: "Locations", href: ROUTES.locations.index },
    { name: neighbourhood.cityName, href: ROUTES.locations.detail(slug) },
    { name: neighbourhood.name, href: neighbourhood.href },
  ];

  return (
    <>
      <JsonLdScript data={buildBreadcrumbSchema(breadcrumbs)} />
      <NeighbourhoodPageTemplate neighbourhood={neighbourhood} />
    </>
  );
}
