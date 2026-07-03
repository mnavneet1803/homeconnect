import { siteConfig } from "@/config/site";
import { ctaNavigation } from "@/config/navigation";
import { SERVING_AREA } from "@/constants/launch";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icons";
import { HeroHouseIllustration } from "@/components/illustrations/hero-house";
import { AnimatedCounter } from "@/components/motion/animated-counter";
import { Reveal } from "@/components/motion/reveal";

const HERO_STATS = [
  { value: 9, suffix: "", label: "Years Local" },
  { value: 1400, suffix: "", label: "Jobs Done" },
  { value: 24, suffix: "h", label: "Avg. Response" },
] as const;

export function HeroSection() {
  return (
    <section className="relative overflow-x-clip bg-gradient-hero pb-[clamp(70px,9vw,110px)] pt-[clamp(48px,7vw,80px)] text-paper hero-grid-bg">
      <Container>
        <div className="relative grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="order-2 lg:order-1">
            <Reveal variant="fade-up" immediate>
              <p className="section-eyebrow text-brass-400 before:bg-brass-400">
                Edmonton · Licensed &amp; Insured
              </p>
            </Reveal>
            <Reveal variant="fade-up" immediate delay={0.06}>
              <h1 className="mt-4 text-balance text-display-sm text-paper md:text-display-lg">
                Trusted home service contractor in{" "}
                <em className="not-italic text-brass-400">Edmonton</em>
              </h1>
            </Reveal>
            <Reveal variant="fade-up" immediate delay={0.12}>
              <p className="mt-5 max-w-[480px] text-lg text-paper/80">
                One call for handyman work, furniture assembly, cleaning, plumbing and electrical
                maintenance — done right, by the same crew every time.
              </p>
            </Reveal>
            <Reveal variant="fade-up" immediate delay={0.18}>
              <div className="mt-8 flex flex-wrap gap-3.5">
                <Button href={ctaNavigation.primary.href} size="lg">
                  <Icon name="gift" size={16} />
                  {ctaNavigation.primary.label}
                </Button>
                <Button href={ctaNavigation.secondary.href} variant="line" size="lg">
                  <Icon name="phone" size={16} />
                  {ctaNavigation.secondary.label}
                </Button>
              </div>
            </Reveal>
            {/* <Reveal variant="fade-up" immediate delay={0.24}>
              <div className="mt-12 grid max-w-[480px] grid-cols-2 gap-0 border-t border-dashed border-paper/30 pt-6 sm:grid-cols-3">
                {HERO_STATS.map((stat) => (
                  <div key={stat.label} className="pr-5">
                    <p className="font-display text-[clamp(22px,2.6vw,30px)] font-semibold text-brass-400">
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} duration={1.2} />
                    </p>
                    <p className="font-mono text-[12.5px] uppercase tracking-wider text-paper/60">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal> */}
            <Reveal variant="fade" immediate delay={0.28}>
              <p className="mt-6 text-caption text-paper/50">{SERVING_AREA}</p>
            </Reveal>
          </div>

          <Reveal variant="fade-up" immediate delay={0.15} className="order-1 lg:order-2">
            <HeroHouseIllustration />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
