import { siteConfig } from "@/config/site";
import { howItWorksSteps } from "@/data/content/homepage";
import { ROUTES } from "@/constants/routes";
import { Container, Section, SectionHeader } from "@/components/ui/container";
import { Icon, stepIconName } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { StaggerGrid, StaggerItem } from "@/components/motion/stagger-grid";

export function HowItWorksSection() {
  return (
    <Section id="how-it-works" className="bg-surface-0">
      <Container>
        <Reveal>
          <SectionHeader
            eyebrow="How it works"
            title="From request to done — in 3 steps"
            description="No middlemen or random subcontractors. Just a clear path from your request to our crew completing the job."
          />
        </Reveal>

        <StaggerGrid className="grid gap-6 md:grid-cols-3 md:gap-8">
          {howItWorksSteps.map((step) => (
            <StaggerItem key={step.step}>
              <article className="card-elevated group flex h-full flex-col p-8 md:p-10">
                <div className="mb-6 flex items-center gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-700 text-label-sm font-semibold text-white">
                    {step.step}
                  </span>
                  <div className="h-px flex-1 bg-border-subtle" aria-hidden="true" />
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-700 ring-1 ring-brand-100 transition-colors duration-200 group-hover:bg-brand-100">
                    <Icon name={stepIconName(step.icon)} size={24} />
                  </div>
                </div>
                <h3 className="text-heading-md text-ink-900">{step.title}</h3>
                <p className="mt-3 flex-1 text-body-md leading-relaxed text-ink-500">{step.description}</p>
              </article>
            </StaggerItem>
          ))}
        </StaggerGrid>

        <Reveal className="mt-10 rounded-3xl border border-border-subtle bg-surface-50 p-7 md:p-9" delay={0.12}>
          <p className="text-body-md text-ink-600">
            <strong className="font-medium text-ink-900">Are you the contractor?</strong>{" "}Yes —{" "}
            {siteConfig.business.marketplaceDisclaimer}
          </p>
        </Reveal>

        <Reveal className="mt-12 text-center" delay={0.15}>
          <Button href={ROUTES.quote} size="lg">
            Start your free request
          </Button>
          <p className="mt-4 text-caption text-ink-400">
            Average response time: under {siteConfig.business.matchSlaHours} hours
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
