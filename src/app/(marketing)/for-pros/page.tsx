import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/config/site";
import { Container, Section, SectionHeader } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/constants/routes";

export const metadata: Metadata = buildMetadata({
  title: "Join Our Team",
  description: `Work with ${siteConfig.name} — we're a local Edmonton contractor building an in-house team of skilled tradespeople and crew members.`,
  path: ROUTES.careers.index,
});

export default function CareersPage() {
  return (
    <Section className="pt-16">
      <Container narrow>
        <SectionHeader
          title="Join our Edmonton team"
          description="Home Solution Services is a local contractor with our own crew. We're always interested in skilled tradespeople and reliable team members who take pride in their work."
        />
        <ul className="mt-8 space-y-3 text-body-md text-ink-600">
          <li>• Work directly for one contractor — no lead fees or middlemen</li>
          <li>• Steady projects across Edmonton and the Capital Region</li>
          <li>• Licensed trades, insured crew, and accountable workmanship</li>
          <li>• Hands-on roles in handyman, painting, plumbing, electrical, and more</li>
        </ul>
        <p className="mt-8 text-body-sm text-ink-500">
          Interested in joining our team? Email{" "}
          <a href={`mailto:${siteConfig.email}`} className="text-brand-700">
            {siteConfig.email}
          </a>{" "}
          with your trade, experience, and availability.
        </p>
        <Button href={ROUTES.vetting} variant="secondary" className="mt-6">
          See our team standards
        </Button>
      </Container>
    </Section>
  );
}
