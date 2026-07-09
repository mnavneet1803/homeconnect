import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icons";
import { AnimatedCounter } from "@/components/motion/animated-counter";
import { StaggerGrid, StaggerItem } from "@/components/motion/stagger-grid";
import { Reveal } from "@/components/motion/reveal";

const STATS = [
  {
    icon: "home" as const,
    value: 1400,
    suffix: "+",
    label: "Jobs Completed",
    sub: "Across greater Edmonton",
  },
  {
    icon: "clock" as const,
    value: 9,
    suffix: " yrs",
    label: "Years of Service",
    sub: "Established local business",
  },
  {
    icon: "star" as const,
    value: 4.9,
    suffix: "★",
    decimals: 1,
    label: "Average Rating",
    sub: "From 120+ verified reviews",
  },
  {
    icon: "shield-check" as const,
    value: 24,
    suffix: "h",
    label: "Avg. Response",
    sub: "Quote in one business day",
  },
] as const;

export function StatsSection() {
  return (
    <section className="border-t border-border bg-surface-0 py-16 md:py-20">
      <Container>
        <Reveal>
          <p className="section-eyebrow mx-auto justify-center">By the numbers</p>
          <h2 className="section-title mt-3.5 text-center">
            A track record Edmonton homeowners trust
          </h2>
        </Reveal>

        <StaggerGrid className="mt-12 grid grid-cols-2 gap-5 lg:grid-cols-4">
          {STATS.map((stat) => (
            <StaggerItem key={stat.label}>
              <div className="stat-card group text-center">
                {/* Gold top accent */}
                <div className="absolute inset-x-0 top-0 h-1 rounded-t-xl bg-gradient-to-r from-transparent via-brass-400 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <span className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-pine-950 transition-transform duration-300 group-hover:scale-110">
                  <Icon name={stat.icon} size={22} className="text-brass-400" />
                </span>

                <p className="font-display text-[clamp(1.75rem,3.5vw,2.25rem)] font-bold leading-none tracking-tight text-pine-950">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    decimals={"decimals" in stat ? stat.decimals : 0}
                    duration={1.8}
                  />
                </p>
                <p className="mt-1.5 text-[15px] font-semibold text-pine-950">{stat.label}</p>
                <p className="mt-1 text-[13px] text-ink-500">{stat.sub}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </Container>
    </section>
  );
}
