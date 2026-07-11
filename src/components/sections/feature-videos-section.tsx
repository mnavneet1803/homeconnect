import { Container, Section } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icons";
import { Reveal } from "@/components/motion/reveal";
import { AutoplayVideo } from "@/components/media/autoplay-video";
import { FEATURE_VIDEOS } from "@/data/homepage-media";

export function FeatureVideosSection() {
  return (
    <Section id="why-us" className="bg-white">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow text-brass-500 before:bg-brass-500">Why homeowners choose us</p>
          <h2 className="mt-3.5 text-balance text-display-sm text-pine-950 md:text-[clamp(26px,3.2vw,36px)]">
            Real work, real crews, real peace of mind
          </h2>
        </Reveal>

        <div className="mt-14 flex flex-col gap-16 md:gap-24">
          {FEATURE_VIDEOS.map((block, i) => {
            const mediaLeft = i % 2 === 1;
            return (
              <div
                key={block.id}
                className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16"
              >
                {/* Media */}
                <Reveal
                  variant="fade-up"
                  delay={0.05}
                  className={mediaLeft ? "lg:order-1" : "lg:order-2"}
                >
                  <div className="relative aspect-video overflow-hidden rounded-2xl border border-border-subtle shadow-card">
                    <AutoplayVideo
                      src={block.video.src}
                      poster={block.video.poster}
                      alt={block.title}
                      label={block.title}
                      orientation="landscape"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      sound
                      controls
                    />
                  </div>
                </Reveal>

                {/* Copy */}
                <Reveal
                  variant="fade-up"
                  className={mediaLeft ? "lg:order-2" : "lg:order-1"}
                >
                  <p className="section-eyebrow text-rust-600 before:bg-rust-600">{block.eyebrow}</p>
                  <h3 className="mt-3.5 text-balance text-heading-lg text-pine-950 md:text-[clamp(22px,2.6vw,30px)]">
                    {block.title}
                  </h3>
                  <p className="mt-3.5 max-w-[480px] text-ink-600">{block.body}</p>
                  <ul className="mt-5 space-y-2.5">
                    {block.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2.5 text-[14.5px] text-ink-700">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-pine-50 text-pine-700">
                          <Icon name="check" size={13} />
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-7">
                    <Button href={block.cta.href} variant="secondary">
                      {block.cta.label}
                      <Icon name="arrow-right" size={15} />
                    </Button>
                  </div>
                </Reveal>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
