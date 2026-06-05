import { siteConfig } from "@/config/site";
import { howItWorksSteps } from "@/data/content/homepage";
import { ROUTES } from "@/constants/routes";
import { Container, Section, SectionHeader } from "@/components/ui/container";
import { Icon, stepIconName } from "@/components/ui/icons";
import { Reveal } from "@/components/motion/reveal";
import { StaggerGrid, StaggerItem } from "@/components/motion/stagger-grid";
import { MagneticButton } from "@/components/motion/magnetic-button";
import { FloatingBackground } from "@/components/motion/floating-background";

export function HowItWorksSection() {
  return (
    <Section id="how-it-works" className="relative overflow-hidden bg-surface-0">
      <FloatingBackground grid={false} orbs={[
        {
          className: "right-[15%] top-[20%] h-64 w-64 rounded-full bg-brand-200/20 blur-3xl",
          duration: 24,
          x: [0, -15, 0],
          y: [0, 10, 0],
        },
      ]} />
      <Container className="relative">
        <Reveal>
          <SectionHeader
            title="Get matched in 3 simple steps"
            description="No cold calls from random contractors. No shared leads sold to 10 companies. Just a clear path from request to hired pro."
          />
        </Reveal>
        <StaggerGrid className="relative grid gap-8 md:grid-cols-3 md:gap-6">
          <div
            className="pointer-events-none absolute top-12 hidden h-px bg-gradient-to-r from-transparent via-brand-300 to-transparent md:block md:left-[16.67%] md:right-[16.67%]"
            aria-hidden="true"
          />
          {howItWorksSteps.map((step) => (
            <StaggerItem key={step.step}>
              <article className="group relative text-center md:text-left">
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-700 ring-1 ring-brand-100 transition-all duration-300 group-hover:bg-brand-100 group-hover:shadow-sm md:mx-0">
                  <Icon name={stepIconName(step.icon)} size={28} />
                </div>
                <span className="mb-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-700 text-caption font-medium text-white">
                  {step.step}
                </span>
                <h3 className="mt-2 text-heading-md text-ink-900">{step.title}</h3>
                <p className="mt-2 text-body-md text-ink-500">{step.description}</p>
              </article>
            </StaggerItem>
          ))}
        </StaggerGrid>

        <Reveal className="mt-12 rounded-2xl border border-border-subtle bg-surface-50 p-6 md:p-8" delay={0.15}>
          <p className="text-body-md text-ink-600">
            <strong className="text-ink-900">Are you the contractor?</strong> — No.
            We&apos;re a free matching service. You hire the pro directly.{" "}
            {siteConfig.business.marketplaceDisclaimer}
          </p>
        </Reveal>

        <Reveal className="mt-10 text-center" delay={0.2}>
          <MagneticButton href={ROUTES.quote} size="lg">
            Start your free request
          </MagneticButton>
          <p className="mt-3 text-caption text-ink-500">
            Average match time: under {siteConfig.business.matchSlaHours} hours
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
