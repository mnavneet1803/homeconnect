import { siteConfig } from "@/config/site";
import { ROUTES } from "@/constants/routes";
import { Container, Section } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icons";
import { Reveal } from "@/components/motion/reveal";

const CLEANING_TYPES = ["Residential", "Move-out", "Post-construction", "Commercial"];

export function CleaningShowcaseSection() {
  return (
    <Section id="cleaning" className="spotlight">
      <Container>
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
          <Reveal variant="fade-up" delay={0.08} className="lg:order-2">
            <div className="relative aspect-[4/3.1] overflow-hidden rounded-lg bg-gradient-to-br from-pine-800 to-pine-600 shadow-card">
              <svg viewBox="0 0 480 380" className="absolute inset-0 h-full w-full" aria-hidden="true">
                <g stroke="rgba(246,241,229,0.08)">
                  <path d="M60 0v380M180 0v380M300 0v380M420 0v380" />
                </g>
                <g stroke="#DBB459" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M200 260h60l6 20h-72z" />
                  <path d="M230 260v-70" />
                  <rect x="216" y="176" width="28" height="16" rx="3" />
                </g>
              </svg>
              <div className="absolute bottom-[18px] left-[18px] flex items-center gap-2 rounded-pill bg-paper/95 px-4 py-2 font-mono text-[12.5px] text-ink-900 shadow-card">
                <Icon name="cleaning" size={14} className="text-pine-700" />
                Cleaning &amp; sanitizing crew
              </div>
            </div>
          </Reveal>

          <Reveal variant="fade-up" className="spotlight-copy lg:order-1">
            <p className="section-eyebrow text-rust-600 before:bg-rust-600">Cleaning</p>
            <h2 className="mt-3.5 text-balance text-display-sm text-pine-950 md:text-[clamp(26px,3.2vw,36px)]">
              Clean spaces for Edmonton homes &amp; businesses
            </h2>
            <p className="mt-3.5 max-w-[460px] text-ink-600">
              Residential, move-in / move-out, post-construction and commercial cleaning — reliable,
              thorough, and scheduled around your day.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {CLEANING_TYPES.map((type) => (
                <span key={type} className="chip">
                  {type}
                </span>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href={ROUTES.services.detail("cleaners")}>Get a cleaning quote</Button>
              <Button href={`tel:${siteConfig.phone.tel}`} variant="secondary">
                Call {siteConfig.phone.display}
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
