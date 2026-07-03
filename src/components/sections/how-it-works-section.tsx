import { siteConfig } from "@/config/site";
import { howItWorksSteps } from "@/data/content/homepage";
import { ROUTES } from "@/constants/routes";
import { Container, Section, SectionHeader } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { StaggerGrid, StaggerItem } from "@/components/motion/stagger-grid";

export function HowItWorksSection() {
  return (
    <Section id="how-it-works" className="px-4 md:px-8">
      <div className="process-panel section mx-auto max-w-content">
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow="Three steps"
              title="From request to done"
              description="No call centres, no runaround — one point of contact from your first message to the final walkthrough."
              className="[&_.section-eyebrow]:text-brass-400 [&_.section-eyebrow]:before:bg-brass-400 [&_.section-description]:text-paper/65 [&_.section-title]:text-paper"
            />
          </Reveal>

          <StaggerGrid className="grid gap-5 md:grid-cols-3">
            {howItWorksSteps.map((step, index) => (
              <StaggerItem key={step.step}>
                <article className="step-card relative">
                  <p className="font-mono text-[13px] tracking-wider text-brass-400">
                    {String(step.step).padStart(2, "0")} / {step.title.split(" ")[0]}
                  </p>
                  <h3 className="mt-3.5 text-[19px] font-semibold text-paper">{step.title}</h3>
                  <p className="mt-2 text-[14.5px] text-paper/65">{step.description}</p>
                  {index < howItWorksSteps.length - 1 && (
                    <span
                      className="absolute right-[-22px] top-1/2 hidden h-px w-5 -translate-y-1/2 bg-paper/25 md:block"
                      aria-hidden="true"
                    />
                  )}
                </article>
              </StaggerItem>
            ))}
          </StaggerGrid>

          <Reveal className="mt-10 flex flex-wrap items-center justify-between gap-5 border-t border-dashed border-paper/20 pt-6" delay={0.12}>
            <p className="max-w-[520px] text-sm text-paper/60">
              <strong className="font-medium text-paper/85">Are you the contractor?</strong> Yes —{" "}
              {siteConfig.business.marketplaceDisclaimer}
            </p>
            <Button href={ROUTES.quote} variant="line" size="sm">
              Apply as a subcontractor
            </Button>
          </Reveal>
        </Container>
      </div>
    </Section>
  );
}
