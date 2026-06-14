import Link from "next/link";
import { getAllServices } from "@/data";
import { siteConfig } from "@/config/site";
import { ROUTES } from "@/constants/routes";
import { IMAGE_SIZES } from "@/lib/images";
import type { ServiceSlug } from "@/constants/services";
import { SERVICE_CARD_IMAGES } from "@/data/service-showcase";
import { AuditImage } from "@/components/dev/audit-image";
import { Container, Section, SectionHeader } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Icon } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { StaggerGrid, StaggerItem } from "@/components/motion/stagger-grid";

export function ServicesSection() {
  const services = getAllServices();

  return (
    <Section id="services" className="bg-surface-0">
      <Container>
        {/* Heading */}
        <Reveal>
          <SectionHeader
            eyebrow="Edmonton home services"
            title="Everything your home needs — handled"
            description="From quick repairs to full renovations, cleaning, and tech setup. One local team handles it all across Edmonton and the Capital Region."
          />
        </Reveal>

        {/* Service image-card grid */}
        <StaggerGrid className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const img = SERVICE_CARD_IMAGES[service.slug as ServiceSlug];
            return (
              <StaggerItem key={service.slug}>
                <Link
                  href={service.href}
                  className="card-interactive group flex h-full flex-col overflow-hidden focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-500/20"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-surface-100">
                    <AuditImage
                      auditId={`service-card-${service.slug}`}
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes={IMAGE_SIZES.card}
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-7 md:p-8">
                    <h3 className="text-heading-sm text-ink-900 transition-colors group-hover:text-brand-800">
                      {service.name}
                    </h3>
                    <p className="mt-3 flex-1 text-body-sm leading-relaxed text-ink-400">
                      {service.shortDescription}
                    </p>
                    {service.licensed && service.licenseLabel && (
                      <Badge variant="brand" className="mt-5 w-fit">
                        {service.licenseLabel}
                      </Badge>
                    )}
                    <span className="mt-5 inline-flex items-center gap-1.5 text-label-sm font-medium text-brand-700">
                      Learn more
                      <Icon
                        name="arrow-right"
                        size={16}
                        className="transition-transform duration-normal group-hover:translate-x-0.5"
                      />
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerGrid>

        {/* CTAs */}
        <Reveal className="mt-16 flex flex-col items-center justify-center gap-4 sm:flex-row" delay={0.1}>
          <Button href={ROUTES.quote} size="lg">
            Get free quote
          </Button>
          <Button href={`tel:${siteConfig.phone.tel}`} variant="secondary" size="lg">
            Call {siteConfig.phone.display}
          </Button>
        </Reveal>
      </Container>
    </Section>
  );
}
