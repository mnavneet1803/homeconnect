import Link from "next/link";
import { LOCAL_SERVICES_CONTENT } from "@/data/content/local-services";
import { LOCATIONS } from "@/constants/locations";
import { SERVICE_BY_SLUG } from "@/constants/services";
import { ROUTES } from "@/constants/routes";
import { Container, Section } from "@/components/ui/container";
import { Icon, serviceIconName } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { StaggerGrid, StaggerItem } from "@/components/motion/stagger-grid";

const locations = LOCAL_SERVICES_CONTENT.locationSlugs.map(
  (slug) => LOCATIONS.find((l) => l.slug === slug)!
);

const services = LOCAL_SERVICES_CONTENT.serviceSlugs.map(
  (slug) => SERVICE_BY_SLUG[slug]
);

export function LocalServicesSection() {
  return (
    <Section
      id="local-services"
      aria-labelledby="local-services-heading"
      className="bg-surface-50"
    >
      <Container>
        <Reveal variant="scale">
          <div className="overflow-hidden rounded-3xl border border-border-subtle/80 bg-surface-0 shadow-elevated">
            <div className="grid lg:grid-cols-12">
              {/* SEO prose column */}
              <div className="border-b border-border-subtle p-8 md:p-10 lg:col-span-5 lg:border-b-0 lg:border-r lg:p-12">
                <Reveal variant="fade-up">
                  <p className="section-eyebrow">{LOCAL_SERVICES_CONTENT.eyebrow}</p>
                  <h2
                    id="local-services-heading"
                    className="section-title mt-3 text-balance text-left"
                  >
                    {LOCAL_SERVICES_CONTENT.title}
                  </h2>
                  <p className="mt-5 text-body-lg leading-relaxed text-ink-600">
                    {LOCAL_SERVICES_CONTENT.description}
                  </p>
                  <p className="mt-4 text-body-md leading-relaxed text-ink-500">
                    {LOCAL_SERVICES_CONTENT.supplementalText}
                  </p>
                </Reveal>

                <Reveal className="mt-10" delay={0.08}>
                  <p className="text-label-sm font-semibold text-ink-800">
                    Communities we serve
                  </p>
                  <StaggerGrid className="mt-4 flex flex-wrap gap-2">
                    {locations.map((location) => (
                      <StaggerItem key={location.slug}>
                        <Link
                          href={location.href}
                          className="badge-neutral transition-colors duration-normal hover:bg-brand-50 hover:text-brand-800"
                        >
                          <Icon name="map-pin" size={14} className="text-brand-600" />
                          {location.name}
                        </Link>
                      </StaggerItem>
                    ))}
                  </StaggerGrid>
                </Reveal>

                <Reveal className="mt-10" delay={0.12}>
                  <Button href={ROUTES.quote}>Request a Free Quote</Button>
                </Reveal>
              </div>

              {/* Service highlights column */}
              <div className="bg-gradient-to-br from-brand-50/30 via-surface-0 to-surface-0 p-8 md:p-10 lg:col-span-7 lg:p-12">
                <Reveal variant="fade-up" delay={0.06}>
                  <p className="text-label-sm font-semibold text-ink-800">
                    Home services available in Edmonton
                  </p>
                  <p className="mt-2 max-w-prose text-body-sm text-ink-500">
                    Explore our most requested trades — each handled by our own in-house team
                    across the Capital Region.
                  </p>
                </Reveal>

                <StaggerGrid className="mt-8 grid gap-3 sm:grid-cols-2">
                  {services.map((service) => (
                    <StaggerItem key={service.slug}>
                      <Link
                        href={service.href}
                        className="group flex items-center gap-4 rounded-2xl border border-border-subtle bg-surface-0 p-4 shadow-sm transition-all duration-300 hover:-translate-y-px hover:border-brand-200/80 hover:shadow-card"
                      >
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-brand-100 transition-colors group-hover:bg-brand-100">
                          <Icon name={serviceIconName(service.icon)} size={20} />
                        </span>
                        <span className="flex-1 text-label-md font-medium text-ink-900 transition-colors group-hover:text-brand-800">
                          {service.name}
                        </span>
                        <Icon
                          name="arrow-right"
                          size={16}
                          className="shrink-0 text-ink-300 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-brand-600"
                        />
                      </Link>
                    </StaggerItem>
                  ))}
                </StaggerGrid>

                <Reveal className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2" delay={0.14}>
                  <Link href={ROUTES.services.index} className="btn-link text-body-sm">
                    View all services →
                  </Link>
                  <Link href={ROUTES.locations.index} className="btn-link text-body-sm">
                    Browse service areas →
                  </Link>
                </Reveal>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
