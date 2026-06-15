import Link from "next/link";
import { ROUTES } from "@/constants/routes";
import { getAllLocations } from "@/data";
import { Container, Section } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icons";
import { CoverageMap } from "@/components/illustrations/coverage-map";
import { Reveal } from "@/components/motion/reveal";
import { StaggerGrid, StaggerItem } from "@/components/motion/stagger-grid";

export function LocationCoverageSection() {
  const locations = getAllLocations();

  return (
    <Section className="border-y border-border-subtle bg-surface-50">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Reveal variant="fade-up">
              <p className="section-eyebrow">Capital Region coverage</p>
              <h2 className="section-title mt-3 text-balance text-left">
                Service coverage across Edmonton & surrounding communities
              </h2>
              <p className="mt-5 text-body-lg leading-relaxed text-ink-500">
                Our in-house team serves homeowners, landlords, and businesses throughout
                the Edmonton metro — from the city core to surrounding municipalities.
                Every community below is connected directly to our local crew.
              </p>
            </Reveal>

            <Reveal className="mt-8" delay={0.08}>
              <ul className="space-y-3 text-body-sm text-ink-600">
                <li className="flex gap-3">
                  <Icon name="check" size={16} className="mt-0.5 shrink-0 text-brand-600" />
                  One accountable team — no third-party handoffs
                </li>
                <li className="flex gap-3">
                  <Icon name="check" size={16} className="mt-0.5 shrink-0 text-brand-600" />
                  Free quotes with typical response within 24 hours
                </li>
                <li className="flex gap-3">
                  <Icon name="check" size={16} className="mt-0.5 shrink-0 text-brand-600" />
                  Serving T5, T6, T7, and T8 postal codes
                </li>
              </ul>
            </Reveal>

            <StaggerGrid className="mt-8 flex flex-wrap gap-2">
              {locations.map((loc) => (
                <StaggerItem key={loc.slug}>
                  <Link
                    href={loc.href}
                    className="badge-neutral transition-colors hover:bg-brand-50 hover:text-brand-800"
                  >
                    <Icon name="map-pin" size={14} className="text-brand-600" />
                    {loc.name}
                  </Link>
                </StaggerItem>
              ))}
            </StaggerGrid>

            <Reveal className="mt-10" delay={0.12}>
              <Button href={ROUTES.quote}>Check availability in your area</Button>
            </Reveal>
          </div>

          <Reveal variant="fade-up" delay={0.1}>
            <div className="overflow-hidden rounded-3xl border border-border-subtle bg-surface-0 p-4 shadow-elevated sm:p-6 lg:ml-auto">
              <div className="aspect-[640/520] w-full">
                <CoverageMap className="h-full" />
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
