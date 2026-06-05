import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { Container, Section } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icons";
import { TrackedPhoneLink } from "@/components/analytics/tracked-link";
import { ROUTES } from "@/constants/routes";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = buildMetadata({
  title: "Thank You",
  description:
    "Your request has been received. We'll match you with vetted Edmonton pros within 24 hours.",
  path: ROUTES.thankYou,
  noIndex: true,
});

interface ThankYouPageProps {
  searchParams: Promise<{ lead?: string }>;
}

export default async function ThankYouPage({ searchParams }: ThankYouPageProps) {
  const { lead } = await searchParams;

  return (
    <Section className="flex min-h-[60vh] items-center pt-16">
      <Container narrow className="text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-success-50 text-success-600">
          <Icon name="check-circle" size={32} />
        </div>
        <h1 className="text-display-sm text-ink-900">You&apos;re all set!</h1>
        <p className="mt-4 text-body-lg text-ink-500">
          Your request has been received. Expect contact from matched pros within{" "}
          {siteConfig.business.matchSlaHours} hours.
        </p>

        <div className="mt-8 rounded-2xl border border-border-subtle bg-surface-0 p-6 text-left">
          <h2 className="text-heading-sm text-ink-900">What happens next</h2>
          <ol className="mt-4 space-y-3 text-body-sm text-ink-600">
            <li className="flex gap-3">
              <span className="font-medium text-brand-700">1.</span>
              We review your project details and match you with up to{" "}
              {siteConfig.business.maxMatchedPros} vetted pros.
            </li>
            <li className="flex gap-3">
              <span className="font-medium text-brand-700">2.</span>
              Matched professionals contact you by phone or email with quotes.
            </li>
            <li className="flex gap-3">
              <span className="font-medium text-brand-700">3.</span>
              You compare quotes, check references, and hire the pro you prefer.
            </li>
          </ol>
          {lead && (
            <p className="mt-4 text-caption text-ink-400">
              Reference: {lead.slice(0, 8).toUpperCase()}
            </p>
          )}
        </div>

        <p className="mt-6 text-body-sm text-ink-500">
          Didn&apos;t get a call? Check spam or call us at{" "}
          <TrackedPhoneLink
            tel={siteConfig.phone.tel}
            display={siteConfig.phone.display}
            location="thank_you"
            className="font-medium text-brand-700"
          />
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href={ROUTES.home}>Back to home</Button>
          <Button href={ROUTES.quote} variant="secondary">
            Submit another request
          </Button>
        </div>
      </Container>
    </Section>
  );
}
