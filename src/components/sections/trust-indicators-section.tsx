import Link from "next/link";
import { HOMEPAGE_TRUST_STATS } from "@/constants/app";
import { ROUTES } from "@/constants/routes";
import { Container } from "@/components/ui/container";
import { TrustStatCard } from "@/components/trust/trust-stat-card";
import { Reveal } from "@/components/motion/reveal";
import { StaggerGrid, StaggerItem } from "@/components/motion/stagger-grid";

export function TrustIndicatorsSection() {
  const statCount = HOMEPAGE_TRUST_STATS.length;

  return (
    <section
      aria-label="Trust indicators"
      className="relative z-10 mt-4 pb-10 md:mt-6 md:pb-14 lg:mt-8"
    >
      <Container>
        <Reveal variant="scale" immediate>
          <div className="overflow-hidden rounded-3xl border border-border-subtle/80 bg-surface-0 shadow-elevated">
            <div className="border-b border-border-subtle bg-gradient-to-r from-brand-50/80 via-surface-0 to-brand-50/50 px-6 py-10 text-center md:px-10 md:py-12">
              <p className="text-label-sm font-semibold uppercase tracking-widest text-brand-600">
                Trusted across Edmonton
              </p>
              <p className="mx-auto mt-2 max-w-lg text-body-md text-ink-500">
                Local homeowners count on our team for reliable work, honest quotes, and fast
                follow-up.
              </p>
            </div>

            <div className="px-4 py-8 md:px-10 md:py-10">
              <StaggerGrid
                className={
                  statCount === 3
                    ? "mx-auto grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3"
                    : statCount === 4
                      ? "mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
                      : "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5"
                }
              >
                {HOMEPAGE_TRUST_STATS.map((stat) => (
                  <StaggerItem key={stat.key}>
                    <TrustStatCard stat={stat} variant={statCount <= 3 ? "compact" : "default"} />
                  </StaggerItem>
                ))}
              </StaggerGrid>

              <Reveal className="mt-8 text-center" delay={0.12}>
                <Link
                  href={ROUTES.vetting}
                  className="text-label-sm font-medium text-brand-700 transition-colors hover:text-brand-600"
                >
                  Read our standards & vetting process →
                </Link>
              </Reveal>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
