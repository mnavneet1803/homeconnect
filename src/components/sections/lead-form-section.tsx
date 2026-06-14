import { Suspense } from "react";
import { siteConfig } from "@/config/site";
import { SERVING_AREA } from "@/constants/launch";
import { Container, Section, SectionHeader } from "@/components/ui/container";
import { QuoteForm, QuoteFormReassurance } from "@/components/forms/quote-form";
import { QuoteFormSkeleton } from "@/components/skeletons";
import { Reveal } from "@/components/motion/reveal";

function FormFallback() {
  return <QuoteFormSkeleton />;
}

export function LeadFormSection() {
  return (
    <Section id="quote" className="bg-gradient-trust border-t border-brand-100/50">
      <Container>
        <div className="grid items-start gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <Reveal variant="fade-up">
              <SectionHeader
                title="Get a free quote from our team"
                description={`${SERVING_AREA}. Tell us about your project — our crew will review and respond, free and with no obligation.`}
                align="left"
                className="mx-0 mb-0 text-left"
              />
            </Reveal>
            <Reveal className="mt-10" delay={0.08}>
              <QuoteFormReassurance />
            </Reveal>
            <Reveal className="mt-8" delay={0.12}>
              <p className="text-caption text-ink-400">
                {siteConfig.business.marketplaceDisclaimer}
              </p>
            </Reveal>
          </div>
          <Reveal variant="fade-up" delay={0.1}>
            <Suspense fallback={<FormFallback />}>
              <QuoteForm id="quote-form" />
            </Suspense>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
