import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { Container, Section, SectionHeader } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/constants/routes";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = buildMetadata({
  title: "About Us",
  description: `Learn about ${siteConfig.name} — Edmonton's trusted home service matching platform.`,
  path: ROUTES.about,
});

export default function AboutPage() {
  return (
    <Section className="pt-16">
      <Container narrow>
        <SectionHeader
          title={`About ${siteConfig.name}`}
          description={siteConfig.tagline}
        />
        <p className="text-body-lg text-ink-600">{siteConfig.description}</p>
        <p className="mt-4 text-body-md text-ink-500">
          {siteConfig.business.marketplaceDisclaimer}
        </p>
        <Button href={ROUTES.quote} className="mt-8">
          Get Free Quotes
        </Button>
      </Container>
    </Section>
  );
}
