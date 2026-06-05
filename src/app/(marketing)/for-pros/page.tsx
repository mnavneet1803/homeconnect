import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/config/site";
import { Container, Section, SectionHeader } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/constants/routes";

export const metadata: Metadata = buildMetadata({
  title: "For Pros",
  description: `Join the ${siteConfig.name} network — connect with qualified Edmonton homeowners seeking vetted home service professionals.`,
  path: ROUTES.forPros.index,
});

export default function ForProsPage() {
  return (
    <Section className="pt-16">
      <Container narrow>
        <SectionHeader
          title="Join our Edmonton pro network"
          description="Connect with homeowners actively seeking vetted home service professionals in the Capital Region."
        />
        <ul className="mt-8 space-y-3 text-body-md text-ink-600">
          <li>• Pre-qualified leads — homeowners who describe their project upfront</li>
          <li>• No shared leads sold to 10 contractors</li>
          <li>• Insurance and licensing verification builds homeowner trust</li>
        </ul>
        <p className="mt-8 text-body-sm text-ink-500">
          Pro applications opening soon. Email{" "}
          <a href={`mailto:${siteConfig.email}`} className="text-brand-700">
            {siteConfig.email}
          </a>{" "}
          to express interest.
        </p>
        <Button href={ROUTES.vetting} variant="secondary" className="mt-6">
          See our vetting standards
        </Button>
      </Container>
    </Section>
  );
}
