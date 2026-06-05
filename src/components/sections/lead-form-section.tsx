import { Suspense } from "react";
import { siteConfig } from "@/config/site";
import { Container, Section, SectionHeader } from "@/components/ui/container";
import { QuoteForm, QuoteFormReassurance } from "@/components/forms/quote-form";
import { QuoteFormSkeleton } from "@/components/skeletons";
import { Reveal } from "@/components/motion/reveal";
import { FloatingBackground } from "@/components/motion/floating-background";

function FormFallback() {
  return <QuoteFormSkeleton />;
}

export function LeadFormSection() {
  return (
    <Section id="quote" className="relative overflow-hidden bg-gradient-brand-subtle">
      <FloatingBackground grid={false} />
      <Container className="relative">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Reveal variant="fade-up">
              <SectionHeader
                title="Get matched with vetted pros today"
                description="Tell us about your project. We'll connect you with up to 3 qualified Edmonton professionals — free and no obligation."
                align="left"
                className="mx-0 mb-0 text-left"
              />
            </Reveal>
            <Reveal className="mt-8" delay={0.1}>
              <QuoteFormReassurance />
            </Reveal>
            <Reveal className="mt-8" delay={0.15}>
              <p className="text-caption text-ink-400">
                {siteConfig.business.marketplaceDisclaimer}
              </p>
            </Reveal>
          </div>
          <Reveal variant="scale" delay={0.12}>
            <Suspense fallback={<FormFallback />}>
              <QuoteForm id="quote-form" />
            </Suspense>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
