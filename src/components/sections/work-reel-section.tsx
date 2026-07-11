import { Container, Section } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";
import { AutoplayVideo } from "@/components/media/autoplay-video";
import { REEL_ITEMS } from "@/data/homepage-media";

export function WorkReelSection() {
  return (
    <Section id="work-in-action" className="bg-surface-50">
      <Container>
        <Reveal className="max-w-2xl">
          <p className="section-eyebrow text-brass-500 before:bg-brass-500">Work in action</p>
          <h2 className="mt-3.5 text-balance text-display-sm text-pine-950 md:text-[clamp(26px,3.2vw,36px)]">
            A look at real Edmonton jobs
          </h2>
          <p className="mt-3.5 text-ink-600">
            Short clips from recent visits — tap any tile to watch full screen.
          </p>
        </Reveal>
      </Container>

      {/* Full-bleed horizontal reel with scroll snap */}
      <Reveal delay={0.05}>
        <div
          className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-gutter px-gutter pb-4 lg:px-gutter-lg [scrollbar-width:thin] [-webkit-overflow-scrolling:touch]"
          role="list"
          aria-label="Work in action video reel"
        >
          {REEL_ITEMS.map((item, i) => (
            <div
              key={item.id}
              role="listitem"
              className="w-[220px] shrink-0 snap-start sm:w-[240px]"
            >
              <div className="relative aspect-[9/16] overflow-hidden rounded-2xl border border-border-subtle shadow-card">
                <AutoplayVideo
                  src={item.src}
                  poster={item.poster}
                  alt={item.label}
                  label={item.label}
                  orientation="portrait"
                  sizes="240px"
                  sound
                  priority={i < 2}
                />
                <span className="pointer-events-none absolute bottom-3 left-3 right-16 z-10 text-left text-[13px] font-semibold text-white drop-shadow">
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
