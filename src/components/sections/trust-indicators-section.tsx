import Link from "next/link";
import { HOMEPAGE_TRUST_STATS } from "@/constants/app";
import { ROUTES } from "@/constants/routes";
import { Container } from "@/components/ui/container";
import { Icon, type IconName } from "@/components/ui/icons";
import { StaggerGrid, StaggerItem } from "@/components/motion/stagger-grid";
import { Reveal } from "@/components/motion/reveal";

export function TrustIndicatorsSection() {
  return (
    <section aria-label="Trust indicators" className="relative z-10 bg-surface-50 py-12">
      <Container>
        <StaggerGrid className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {HOMEPAGE_TRUST_STATS.map((stat) => (
            <StaggerItem key={stat.key}>
              <div className="group flex items-center gap-4 rounded-xl border border-border bg-surface-0 p-5 shadow-sm transition-all duration-300 ease-smooth hover:-translate-y-0.5 hover:border-brass-200 hover:shadow-card">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-pine-50 transition-all duration-300 group-hover:bg-pine-100 group-hover:scale-105">
                  <Icon name={stat.icon as IconName} size={22} className="text-pine-700" />
                </span>
                <div>
                  <p className="text-[15px] font-semibold text-pine-950">
                    {stat.type === "text" ? stat.headline : stat.label}
                  </p>
                  {stat.type === "text" && stat.subline && (
                    <p className="text-[13px] text-ink-500">{stat.subline}</p>
                  )}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>

        <Reveal className="mt-5 text-center" delay={0.12}>
          <Link href={ROUTES.vetting} className="btn-link text-sm">
            Read our standards &amp; vetting process →
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
