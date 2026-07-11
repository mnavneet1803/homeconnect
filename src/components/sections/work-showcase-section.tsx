import { ROUTES } from "@/constants/routes";
import { Container, Section } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icons";
import { Reveal } from "@/components/motion/reveal";
import { AutoplayVideo } from "@/components/media/autoplay-video";

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
            <div className="relative aspect-[4/3.1] overflow-hidden rounded-lg shadow-card">
              <AutoplayVideo
                src="/videos/card-painting.mp4"
                poster="/videos/posters/card-painting.webp"
                alt="Interior finishing and painting crew working in an Edmonton home"
                label="Interior finishing"
                orientation="landscape"
                sizes="(max-width: 1024px) 100vw, 50vw"
                sound
              />
              <div className="absolute bottom-[18px] left-[18px] z-20 flex items-center gap-2 rounded-pill bg-paper/95 px-4 py-2 font-mono text-[12.5px] text-ink-900 shadow-card">
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
