import { siteConfig } from "@/config/site";
import { howItWorksSteps } from "@/data/content/homepage";
import { ROUTES } from "@/constants/routes";
import { Container, Section, SectionHeader } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { StaggerGrid, StaggerItem } from "@/components/motion/stagger-grid";

export function HowItWorksSection() {
  return (
    <Section id="how-it-works" className="bg-surface-0">
      <Container>
        <Reveal>
          <SectionHeader
            eyebrow="Three steps"
            title="From request to done"
            description="No call centres, no runaround — one point of contact from your first message to the final walkthrough."
          />
        </Reveal>

        <StaggerGrid className="relative mt-14 grid gap-8 md:grid-cols-3">
          {/* Connecting line — desktop only */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-[calc(16.6%+1.5rem)] right-[calc(16.6%+1.5rem)] top-8 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent md:block"
          />

          {howItWorksSteps.map((step, index) => (
            <StaggerItem key={step.step}>
              <article className="group relative flex flex-col rounded-xl border border-border bg-surface-0 p-8 shadow-sm transition-all duration-300 ease-smooth hover:-translate-y-1 hover:border-brass-200 hover:shadow-card">
                {/* Gold left accent on hover */}
                <div className="absolute inset-y-0 left-0 w-[3px] rounded-l-xl bg-brass-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Step number */}
                <div className="mb-6 flex items-center justify-between">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-border bg-surface-50 font-display text-[18px] font-bold text-pine-950 transition-all duration-300 group-hover:border-brass-500 group-hover:bg-brass-50 group-hover:text-brass-500">
                    {String(step.step).padStart(2, "0")}
                  </span>
                  {/* Connector dot — desktop */}
                  {index < howItWorksSteps.length - 1 && (
                    <div
                      aria-hidden="true"
                      className="absolute right-0 top-8 hidden h-2.5 w-2.5 translate-x-1/2 rounded-full border-2 border-border bg-surface-0 md:block"
                    />
                  )}
                </div>

                <h3 className="text-[19px] font-bold tracking-tight text-pine-950">
                  {step.title}
                </h3>
                <p className="mt-2.5 text-[14.5px] leading-relaxed text-ink-600">
                  {step.description}
                </p>

                {/* Subtle step label */}
                <p className="mt-4 font-mono text-[11px] uppercase tracking-widest text-brass-400">
                  Step {String(step.step).padStart(2, "0")}
                </p>
              </article>
            </StaggerItem>
          ))}
        </StaggerGrid>

        <Reveal
          className="mt-12 flex flex-wrap items-center justify-between gap-5 border-t border-dashed border-border pt-8"
          delay={0.12}
        >
          <p className="max-w-[520px] text-sm text-ink-500">
            <strong className="font-medium text-ink-800">Are you the contractor?</strong> Yes —{" "}
            {siteConfig.business.marketplaceDisclaimer}
          </p>
          <Button href={ROUTES.quote} variant="secondary" size="sm">
            Apply as a subcontractor
          </Button>
        </Reveal>
      </Container>
    </Section>
  );
}
