import Link from "next/link";
import { TRUST_STATS } from "@/constants/app";
import { ROUTES } from "@/constants/routes";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";
import { StaggerGrid, StaggerItem } from "@/components/motion/stagger-grid";
import { AnimatedCounter } from "@/components/motion/animated-counter";

export function TrustIndicatorsSection() {
  return (
    <section className="border-y border-border-subtle bg-surface-0 py-16 md:py-24">
      <Container>
        <Reveal className="mb-14 text-center md:mb-16">
          <p className="text-label-sm font-semibold uppercase tracking-widest text-brand-600">
            Trusted across Edmonton
          </p>
          <p className="mt-3 text-body-lg text-ink-400">
            The Capital Region&apos;s local home service team
          </p>
        </Reveal>

        <StaggerGrid className="grid grid-cols-2 gap-px bg-border-subtle md:grid-cols-4">
          {TRUST_STATS.map((stat) => (
            <StaggerItem key={stat.key}>
              <div className="flex flex-col items-center bg-surface-0 px-6 py-10 text-center md:px-10 md:py-12">
                <AnimatedCounter
                  value={stat.count}
                  suffix={stat.suffix}
                  decimals={stat.decimals}
                  className="text-display-md font-medium tracking-tight text-ink-900 md:text-display-lg"
                />
                <p className="mt-3 text-body-sm text-ink-400">{stat.label}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>

        <Reveal className="mt-12 text-center" delay={0.15}>
          <Link
            href={ROUTES.vetting}
            className="text-label-sm font-medium text-brand-700 transition-colors hover:text-brand-600"
          >
            Read our standards & vetting process →
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
