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
    <Section id="how-it-works" className="bg-surface-50">
      <Container>
        <Reveal>
          <SectionHeader
            title="Get your project done in 3 simple steps"
            description="No middlemen or random subcontractors. Just a clear path from your request to our crew completing the job."
          />
        </Reveal>
        <StaggerGrid className="relative grid gap-10 md:grid-cols-3 md:gap-8">
          <div
            className="pointer-events-none absolute top-14 hidden h-px bg-border-subtle md:block md:left-[16.67%] md:right-[16.67%]"
            aria-hidden="true"
          />
          {howItWorksSteps.map((step) => (
            <StaggerItem key={step.step}>
              <article className="group relative text-center md:text-left">
                <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-700 ring-1 ring-brand-100 transition-colors duration-normal group-hover:bg-brand-100 md:mx-0">
                  <Icon name={stepIconName(step.icon)} size={28} />
                </div>
                <span className="mb-3 inline-flex h-7 w-7 items-center justify-center rounded-full bg-brand-700 text-caption font-medium text-white">
                  {step.step}
                </span>
                <h3 className="mt-2 text-heading-md text-ink-900">{step.title}</h3>
                <p className="mt-3 text-body-md text-ink-500">{step.description}</p>
              </article>
            </StaggerItem>
          ))}
        </StaggerGrid>

        <Reveal className="mt-14 rounded-2xl border border-border-subtle bg-surface-0 p-7 md:p-8" delay={0.12}>
          <p className="text-body-md text-ink-600">
            <strong className="font-medium text-ink-900">Are you the contractor?</strong> — Yes.{" "}
            {siteConfig.business.marketplaceDisclaimer}
          </p>
        </Reveal>

        <Reveal className="mt-12 text-center" delay={0.15}>
          <Button href={ROUTES.quote} size="lg">
            Start your free request
          </Button>
          <p className="mt-4 text-caption text-ink-500">
            Average response time: under {siteConfig.business.matchSlaHours} hours
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
