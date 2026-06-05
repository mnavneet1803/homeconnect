import type { Metadata } from "next";
import { Suspense } from "react";
import { buildMetadata } from "@/lib/seo/metadata";
import { Container, Section, SectionHeader } from "@/components/ui/container";
import { QuoteForm, QuoteFormReassurance } from "@/components/forms/quote-form";
import { ROUTES } from "@/constants/routes";
import { QuoteFormSkeleton } from "@/components/skeletons";

export const metadata: Metadata = buildMetadata({
  title: "Get Free Quotes",
  description:
    "Tell us about your project and get matched with up to 3 vetted Edmonton home service professionals. Free and no obligation.",
  path: ROUTES.quote,
});

export default function QuotePage() {
  return (
    <Section className="bg-gradient-brand-subtle pt-16">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeader
              title="Get matched with vetted pros today"
              description="Takes about 2 minutes. We'll connect you with qualified Edmonton professionals."
              align="left"
              className="mx-0 mb-0 text-left"
            />
            <div className="mt-8">
              <QuoteFormReassurance />
            </div>
          </div>
          <Suspense fallback={<QuoteFormSkeleton />}>
            <QuoteForm id="quote-form" />
          </Suspense>
        </div>
      </Container>
    </Section>
  );
}
