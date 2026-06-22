import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/config/site";
import { ROUTES } from "@/constants/routes";
import { Container, Section, SectionHeader } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { EdmontonCredibility, GoogleReviewsBadge } from "@/components/trust";
import { vettingSteps, vettingRequirements } from "@/data/content/vetting";
import { Icon } from "@/components/ui/icons";

export const metadata: Metadata = buildMetadata({
  title: "Vetting Process",
  description: `Learn how ${siteConfig.name} maintains quality standards — insurance, training, and ongoing monitoring for our in-house team.`,
  path: ROUTES.vetting,
});

export default function VettingProcessPage() {
  return (
    <>
      <Section className="bg-surface-0 pt-16 pb-14">
        <Container narrow>
          <p className="section-eyebrow">Trust & quality</p>
          <h1 className="mt-4 text-display-sm text-ink-900">
            Our team standards & credentials
          </h1>
          <p className="mt-4 text-body-lg text-ink-500">
            Every member of our crew meets strict insurance, training, and quality
            standards before working on your home.
          </p>
          <GoogleReviewsBadge className="mt-6" />
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader title="Our 4-step quality standards" />
          <div className="grid gap-8 md:grid-cols-2">
            {vettingSteps.map((step) => (
              <article key={step.step} className="card p-6">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-700 text-caption font-medium text-white">
                  {step.step}
                </span>
                <h2 className="mt-4 text-heading-md text-ink-900">{step.title}</h2>
                <p className="mt-2 text-body-md text-ink-500">{step.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-surface-0">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeader
                title="Minimum requirements"
                align="left"
                className="mx-0 text-left"
              />
              <ul className="mt-6 space-y-3">
                {vettingRequirements.map((req) => (
                  <li key={req} className="flex gap-3 text-body-md text-ink-600">
                    <Icon name="check" size={18} className="mt-0.5 shrink-0 text-brand-600" />
                    {req}
                  </li>
                ))}
              </ul>
            </div>
            <EdmontonCredibility />
          </div>
        </Container>
      </Section>

      <Section>
        <Container narrow className="text-center">
          <p className="text-body-md text-ink-500">
            {siteConfig.business.marketplaceDisclaimer}
          </p>
          <Button href={ROUTES.quote} className="mt-10" size="lg">
            Get a free quote
          </Button>
        </Container>
      </Section>
    </>
  );
}
