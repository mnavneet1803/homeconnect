import { siteConfig } from "@/config/site";
import { ROUTES } from "@/constants/routes";
import { Container, Section } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icons";
import { Reveal } from "@/components/motion/reveal";
import { AutoplayVideo } from "@/components/media/autoplay-video";

const CLEANING_TYPES = ["Residential", "Move-out", "Post-construction", "Commercial"];

export function CleaningShowcaseSection() {
  return (
    <Section id="cleaning" className="spotlight">
      <Container>
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
          <Reveal variant="fade-up" delay={0.08} className="lg:order-2">
            <div className="relative aspect-[4/3.1] overflow-hidden rounded-lg shadow-card">
              <AutoplayVideo
                src="/videos/feature-cleaning.mp4"
                poster="/videos/posters/feature-cleaning.webp"
                alt="Cleaning and sanitizing crew working in an Edmonton home"
                label="Cleaning"
                orientation="landscape"
                sizes="(max-width: 1024px) 100vw, 50vw"
                sound
              />
              <div className="absolute bottom-[18px] left-[18px] z-20 flex items-center gap-2 rounded-pill bg-paper/95 px-4 py-2 font-mono text-[12.5px] text-ink-900 shadow-card">
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
