import { Suspense } from "react";
import { siteConfig } from "@/config/site";
import { Container, Section } from "@/components/ui/container";
import { Icon } from "@/components/ui/icons";
import { QuoteForm, QuoteFormReassurance } from "@/components/forms/quote-form";
import { QuoteFormSkeleton } from "@/components/skeletons";
import { Reveal } from "@/components/motion/reveal";

function FormFallback() {
  return <QuoteFormSkeleton />;
}

const QUOTE_POINTS = [
  "No obligation to book",
  "Fixed-price estimate",
  "Licensed & insured crew",
] as const;

export function LeadFormSection() {
  return (
    <Section id="quote" className="px-4 md:px-8">
      <Reveal variant="scale">
        <div className="quote-wrap mx-auto max-w-content">
          <div className="p-8 text-paper md:p-12">
            <p className="section-eyebrow text-brass-400 before:bg-brass-400">Get started</p>
            <h2 className="mt-3.5 text-balance text-display-sm text-paper md:text-[clamp(24px,2.8vw,32px)]">
              Get a free quote from our team
            </h2>
            <p className="mt-3.5 text-[15px] text-paper/70">
              Tell us a bit about the job and your address — we&apos;ll follow up with a fixed-price
              quote, usually within one business day.
            </p>
            <ul className="mt-6 flex flex-col gap-3.5">
              {QUOTE_POINTS.map((point) => (
                <li key={point} className="flex items-center gap-2.5 text-sm text-paper/85">
                  <Icon name="check" size={16} className="text-brass-400" />
                  {point}
                </li>
              ))}
            </ul>
            <div className="mt-8 hidden lg:block">
              <QuoteFormReassurance />
            </div>
            <p className="mt-6 text-caption text-paper/50 lg:hidden">
              {siteConfig.business.marketplaceDisclaimer}
            </p>
          </div>

          <div className="relative border-t border-dashed border-border bg-paper p-8 md:p-12 lg:border-l lg:border-t-0">
            <Suspense fallback={<FormFallback />}>
              <QuoteForm id="quote-form" />
            </Suspense>
            <p className="mt-3 text-center text-xs text-ink-500">
              We reply within one business day — no spam, ever.
            </p>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
