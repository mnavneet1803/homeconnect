import { ROUTES } from "@/constants/routes";
import { Container, Section } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icons";
import { Reveal } from "@/components/motion/reveal";

const FINISH_TYPES = ["Interior painting", "Drywall repair", "Staining", "Flooring", "Decking", "Fencing"];

export function WorkShowcaseSection() {
  return (
    <Section id="our-work" className="spotlight">
      <Container>
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
          <Reveal variant="fade-up" className="spotlight-copy">
            <p className="section-eyebrow text-rust-600 before:bg-rust-600">Finishing &amp; renovation</p>
            <h2 className="mt-3.5 text-balance text-display-sm text-pine-950 md:text-[clamp(26px,3.2vw,36px)]">
              Quality finishes across Edmonton
            </h2>
            <p className="mt-3.5 max-w-[460px] text-ink-600">
              Interior painting, drywall repair, staining, flooring and small home improvements — done
              neatly, on schedule, the first time.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {FINISH_TYPES.map((type) => (
                <span key={type} className="chip">
                  {type}
                </span>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href={ROUTES.services.detail("painters")}>Get a finishing quote</Button>
              <Button href={ROUTES.services.detail("renovators")} variant="secondary">
                Renovation services
              </Button>
            </div>
          </Reveal>

          <Reveal variant="fade-up" delay={0.08}>
            <div className="relative aspect-[4/3.1] overflow-hidden rounded-lg bg-gradient-to-b from-pine-950 to-pine-700 shadow-card">
              <svg viewBox="0 0 480 380" className="absolute inset-0 h-full w-full" aria-hidden="true">
                <path
                  d="M0 260 Q120 220 240 255 T480 250 V380 H0 Z"
                  fill="#DBB459"
                  opacity="0.14"
                />
                <g stroke="#DBB459" strokeWidth="1.7" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="120" y="120" width="240" height="150" rx="4" />
                  <path d="M120 190h240M170 120v150M310 120v150" />
                </g>
              </svg>
              <div className="absolute bottom-[18px] left-[18px] flex items-center gap-2 rounded-pill bg-paper/95 px-4 py-2 font-mono text-[12.5px] text-ink-900 shadow-card">
                <Icon name="home" size={14} className="text-pine-700" />
                Interior finishing crew
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
