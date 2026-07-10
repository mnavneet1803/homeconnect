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
  { icon: "gift" as const, label: "No obligation to book", sub: "Get your quote, then decide" },
  { icon: "shield-check" as const, label: "Fixed-price estimate", sub: "No hidden surprises" },
] as const;

export function LeadFormSection() {
  return (
    <Section id="quote" className="bg-surface-0 px-4 md:px-8">
      <Reveal variant="scale">
        <div className="mx-auto max-w-content overflow-hidden rounded-2xl shadow-[0_40px_80px_-24px_rgba(14,42,34,0.28)]">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            {/* Left — benefits + copy */}
            <div className="relative overflow-hidden bg-pine-950 p-8 text-paper md:p-12">
              {/* Decorative mesh pattern */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(246,241,229,1) 1px, transparent 1px), linear-gradient(90deg, rgba(246,241,229,1) 1px, transparent 1px)",
                  backgroundSize: "36px 36px",
                }}
              />
              {/* Radial glow */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full opacity-20"
                style={{
                  background: "radial-gradient(circle, rgba(200,155,60,0.6) 0%, transparent 70%)",
                }}
              />

              <div className="relative z-10">
                <p className="section-eyebrow text-brass-400 before:bg-brass-400">Get started</p>
                <h2 className="mt-4 text-balance font-display text-[clamp(1.6rem,3vw,2.25rem)] font-bold leading-tight tracking-tight text-paper">
                  Get a free quote<br />from our team
                </h2>
                <p className="mt-4 text-[15px] leading-relaxed text-paper/70">
                  Tell us about the job and your address — we&apos;ll follow up with a fixed-price
                  quote, usually within one business day.
                </p>

                <ul className="mt-8 flex flex-col gap-4">
                  {QUOTE_POINTS.map((point) => (
                    <li key={point.label} className="flex items-start gap-3.5">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-paper/10">
                        <Icon name={point.icon} size={17} className="text-brass-400" />
                      </span>
                      <div>
                        <p className="text-[14.5px] font-semibold text-paper">{point.label}</p>
                        <p className="text-[13px] text-paper/60">{point.sub}</p>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="mt-10 hidden lg:block">
                  <QuoteFormReassurance />
                </div>

                <p className="mt-6 text-[12px] text-paper/40 lg:hidden">
                  {siteConfig.business.marketplaceDisclaimer}
                </p>
              </div>
            </div>

            {/* Right — form */}
            <div className="relative bg-surface-50 p-8 md:p-12">
              {/* Gold top accent */}
              <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-brass-400 to-transparent" />

              <Suspense fallback={<FormFallback />}>
                <QuoteForm id="quote-form" />
              </Suspense>
              <p className="mt-4 text-center text-[12px] text-ink-400">
                We reply within one business day — no spam, ever.
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
