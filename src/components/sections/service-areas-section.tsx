import Link from "next/link";
import { getAllLocations } from "@/data";
import { LOCATIONS } from "@/constants/locations";
import { ROUTES } from "@/constants/routes";
import { Container, Section } from "@/components/ui/container";
import { Icon } from "@/components/ui/icons";
import { Reveal } from "@/components/motion/reveal";
import { StaggerGrid, StaggerItem } from "@/components/motion/stagger-grid";
import { MagneticButton } from "@/components/motion/magnetic-button";
import { FloatingBackground } from "@/components/motion/floating-background";

export function ServiceAreasSection() {
  const locations = getAllLocations();
  const edmonton = LOCATIONS.find((l) => l.slug === "edmonton");

  return (
    <Section className="relative overflow-hidden bg-surface-0">
      <FloatingBackground
        grid={false}
        orbs={[
          {
            className: "left-[5%] bottom-[10%] h-80 w-80 rounded-full bg-brand-300/10 blur-3xl",
            duration: 26,
            x: [0, 20, 0],
            y: [0, -12, 0],
          },
        ]}
      />
      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Reveal variant="fade-up">
              <p className="section-eyebrow">Service areas</p>
              <h2 className="section-title text-balance text-left">
                Serving Edmonton & the Capital Region
              </h2>
              <p className="mt-4 text-body-lg text-ink-500">
                Wherever you are in the metro area, we connect you with pros who know
                your neighbourhood.
              </p>
            </Reveal>

            <StaggerGrid className="mt-8 flex flex-wrap gap-2">
              {locations.map((loc) => (
                <StaggerItem key={loc.slug}>
                  <Link
                    href={loc.href}
                    className="badge-neutral transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-50 hover:text-brand-800 hover:shadow-xs"
                  >
                    {loc.name}
                  </Link>
                </StaggerItem>
              ))}
            </StaggerGrid>

            {edmonton && edmonton.neighbourhoods.length > 0 && (
              <Reveal className="mt-8" delay={0.1}>
                <p className="text-label-sm font-medium text-ink-700">
                  Popular Edmonton neighbourhoods
                </p>
                <p className="mt-3 text-body-sm leading-relaxed text-ink-500">
                  {edmonton.neighbourhoods.join(" · ")}
                </p>
              </Reveal>
            )}

            <Reveal className="mt-6" delay={0.15}>
              <p className="text-body-sm text-ink-500">
                Don&apos;t see your area? Enter your postal code — we likely serve you.
              </p>
            </Reveal>

            <Reveal className="mt-8" delay={0.2}>
              <MagneticButton href={ROUTES.quote}>
                Check availability — Get Free Quotes
              </MagneticButton>
            </Reveal>
          </div>

          <Reveal variant="scale" delay={0.12}>
            <div
              className="relative aspect-square max-w-lg rounded-3xl border border-border-subtle bg-gradient-to-br from-brand-50 via-surface-0 to-accent-50 p-8 shadow-card transition-shadow duration-300 hover:shadow-card-hover lg:ml-auto"
              aria-hidden="true"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative h-48 w-48 animate-[spin_60s_linear_infinite] rounded-full border-2 border-dashed border-brand-200/60 motion-reduce:animate-none">
                  <div className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-600 shadow-focus" />
                  {[0, 60, 120, 180, 240, 300].map((deg) => (
                    <div
                      key={deg}
                      className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-400"
                      style={{ transform: `rotate(${deg}deg) translateY(-88px)` }}
                    />
                  ))}
                </div>
              </div>
              <div className="absolute bottom-8 left-8 right-8 rounded-xl bg-surface-0/90 p-4 shadow-sm backdrop-blur-sm">
                <div className="flex items-center gap-2 text-brand-700">
                  <Icon name="map-pin" size={18} />
                  <span className="text-label-md font-medium">Edmonton Metro</span>
                </div>
                <p className="mt-1 text-caption text-ink-500">50 km service radius</p>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
