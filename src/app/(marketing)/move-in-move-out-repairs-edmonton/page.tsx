import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { getSeoLandingPage } from "@/data/seo-landing";
import { SeoLandingPageTemplate } from "@/components/sections/seo-landing-page-template";
import { notFound } from "next/navigation";

const SLUG = "move-in-move-out-repairs-edmonton";

export function generateMetadata(): Metadata {
  const page = getSeoLandingPage(SLUG);
  if (!page) return {};
  return buildMetadata({
    title: page.metaTitle,
    description: page.metaDescription,
    path: page.path,
  });
}

export default function MoveInMoveOutRepairsEdmontonPage() {
  if (!getSeoLandingPage(SLUG)) notFound();
  return <SeoLandingPageTemplate slug={SLUG} />;
}
