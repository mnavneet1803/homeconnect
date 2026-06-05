import Link from "next/link";
import { TRUST_STATS } from "@/constants/app";
import { ROUTES } from "@/constants/routes";
import { Container, Section } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";
import { StaggerGrid, StaggerItem } from "@/components/motion/stagger-grid";
import { AnimatedCounter } from "@/components/motion/animated-counter";
import { HoverCard } from "@/components/motion/hover-card";

export function TrustIndicatorsSection() {
  return (
    <Section className="border-y border-border-subtle bg-surface-0 py-12 md:py-16">
      <Container>
        <Reveal className="mb-8 text-center md:mb-10">
          <p className="text-body-md text-ink-500">
            Trusted by Edmonton homeowners across the Capital Region
          </p>
        </Reveal>
        <StaggerGrid className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {TRUST_STATS.map((stat) => (
            <StaggerItem key={stat.key}>
              <HoverCard className="card-elevated px-4 py-6 text-center md:px-6 md:py-8">
                <AnimatedCounter
                  value={stat.count}
                  suffix={stat.suffix}
                  decimals={stat.decimals}
                  className="text-display-sm text-ink-900"
                />
                <p className="mt-1 text-body-sm text-ink-500">{stat.label}</p>
              </HoverCard>
            </StaggerItem>
          ))}
        </StaggerGrid>
        <Reveal className="mt-8 text-center" delay={0.2}>
          <Link
            href={ROUTES.vetting}
            className="text-label-md font-medium text-brand-700 transition-colors hover:text-brand-600"
          >
            Read our vetting process →
          </Link>
        </Reveal>
      </Container>
    </Section>
  );
}
