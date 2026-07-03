import Link from "next/link";
import { HOMEPAGE_TRUST_STATS } from "@/constants/app";
import { ROUTES } from "@/constants/routes";
import { Container } from "@/components/ui/container";
import { Icon, type IconName } from "@/components/ui/icons";
import { Reveal } from "@/components/motion/reveal";

export function TrustIndicatorsSection() {
  return (
    <section aria-label="Trust indicators" className="relative z-10 -mt-10 pb-10 md:-mt-10">
      <Container>
        <Reveal variant="scale" immediate>
          <div className="trust-card">
            {HOMEPAGE_TRUST_STATS.map((stat) => (
              <div key={stat.key} className="trust-item">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-paper-deep">
                  <Icon name={stat.icon as IconName} size={22} className="text-pine-700" />
                </span>
                <div>
                  <p className="text-[15px] font-semibold text-pine-950">
                    {stat.type === "text" ? stat.headline : stat.label}
                  </p>
                  {stat.type === "text" && stat.subline && (
                    <p className="text-[13px] text-ink-600">{stat.subline}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal className="mt-6 text-center" delay={0.1}>
          <Link href={ROUTES.vetting} className="btn-link text-sm">
            Read our standards &amp; vetting process →
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
