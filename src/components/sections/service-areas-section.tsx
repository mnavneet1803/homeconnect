import Link from "next/link";
import { getAllLocations } from "@/data";
import { LOCATIONS } from "@/constants/locations";
import { ROUTES } from "@/constants/routes";
import { Container, Section } from "@/components/ui/container";
import { Icon } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { StaggerGrid, StaggerItem } from "@/components/motion/stagger-grid";

export function ServiceAreasSection() {
  const locations = getAllLocations();
  const edmonton = LOCATIONS.find((l) => l.slug === "edmonton");

  return (
    <Section className="bg-surface-50">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <Reveal variant="fade-up">
              <p className="section-eyebrow">Service areas</p>
              <h2 className="section-title text-balance text-left">
                Serving Edmonton & the Capital Region
              </h2>
              <p className="mt-5 text-body-lg text-ink-500">
                Wherever you are in the metro area, our team knows your neighbourhood
                and serves it directly.
              </p>
            </Reveal>

            <StaggerGrid className="mt-10 flex flex-wrap gap-2.5">
              {locations.map((loc) => (
                <StaggerItem key={loc.slug}>
                  <Link
                    href={loc.href}
                    className="badge-neutral transition-colors duration-normal hover:bg-brand-50 hover:text-brand-800"
                  >
                    {loc.name}
                  </Link>
                </StaggerItem>
              ))}
            </StaggerGrid>

            {edmonton && edmonton.neighbourhoods.length > 0 && (
              <Reveal className="mt-10" delay={0.08}>
                <p className="text-label-sm font-medium text-ink-700">
                  Popular Edmonton neighbourhoods
                </p>
                <p className="mt-3 text-body-sm leading-relaxed text-ink-500">
                  {edmonton.neighbourhoods.join(" · ")}
                </p>
              </Reveal>
            )}

            <Reveal className="mt-6" delay={0.12}>
              <p className="text-body-sm text-ink-500">
                Don&apos;t see your area? Enter your postal code — we likely serve you.
              </p>
            </Reveal>

            <Reveal className="mt-10" delay={0.15}>
              <Button href={ROUTES.quote}>
                Check availability — Get Free Quotes
              </Button>
            </Reveal>
          </div>

          <Reveal variant="fade-up" delay={0.1}>
            <div
              className="relative aspect-square max-w-lg rounded-2xl border border-border-subtle bg-gradient-to-br from-brand-50 via-surface-0 to-surface-50 p-8 shadow-card lg:ml-auto"
              aria-hidden="true"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative flex h-44 w-44 items-center justify-center rounded-full border border-brand-200/80 bg-brand-50/50">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-700 shadow-sm">
                    <Icon name="map-pin" size={12} className="text-white" />
                  </div>
                  {[0, 72, 144, 216, 288].map((deg) => (
                    <div
                      key={deg}
                      className="absolute h-2 w-2 rounded-full bg-brand-300"
                      style={{ transform: `rotate(${deg}deg) translateY(-80px)` }}
                    />
                  ))}
                </div>
              </div>
              <div className="absolute bottom-8 left-8 right-8 rounded-xl border border-border-subtle bg-surface-0 p-5 shadow-sm">
                <div className="flex items-center gap-2.5 text-brand-700">
                  <Icon name="map-pin" size={18} />
                  <span className="text-label-md font-medium">Edmonton Metro</span>
                </div>
                <p className="mt-1.5 text-caption text-ink-500">50 km service radius</p>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
