import Link from "next/link";
import { TRUST_STATS } from "@/constants/app";
import { ROUTES } from "@/constants/routes";
import { Container, Section } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";
import { StaggerGrid, StaggerItem } from "@/components/motion/stagger-grid";
import { AnimatedCounter } from "@/components/motion/animated-counter";

export function TrustIndicatorsSection() {
  return (
    <Section className="border-y border-border-subtle bg-surface-50 py-14 md:py-20">
      <Container>
        <Reveal className="mb-10 text-center md:mb-12">
          <p className="text-body-lg text-ink-500">
            Trusted by Edmonton homeowners across the Capital Region
          </p>
        </Reveal>
        <StaggerGrid className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {TRUST_STATS.map((stat) => (
            <StaggerItem key={stat.key}>
              <div className="card-elevated px-5 py-7 text-center md:px-7 md:py-9">
                <AnimatedCounter
                  value={stat.count}
                  suffix={stat.suffix}
                  decimals={stat.decimals}
                  className="text-display-sm text-ink-900"
                />
                <p className="mt-2 text-body-sm text-ink-500">{stat.label}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>
        <Reveal className="mt-10 text-center" delay={0.15}>
          <Link
            href={ROUTES.vetting}
            className="text-label-md text-brand-700 transition-colors hover:text-brand-600"
          >
            Read our vetting process →
          </Link>
        </Reveal>
      </Container>
    </Section>
  );
}
