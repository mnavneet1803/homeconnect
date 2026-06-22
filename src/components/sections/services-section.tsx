import { getAllServices } from "@/data";
import { ctaNavigation } from "@/config/navigation";
import { Container, Section, SectionHeader } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icons";
import { Reveal } from "@/components/motion/reveal";
import { StaggerGrid, StaggerItem } from "@/components/motion/stagger-grid";
import { ServiceGridCard } from "@/components/sections/service-grid-card";

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
            description="Handyman repairs, TV mounting, furniture assembly, professional cleaning, plumbing and electrical maintenance, move-in/out repairs, and condo upkeep across Edmonton."
          />
        </Reveal>

        {/* Service image-card grid */}
        <StaggerGrid className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <StaggerItem key={service.slug}>
              <ServiceGridCard service={service} />
            </StaggerItem>
          ))}
        </StaggerGrid>

        {/* CTAs */}
        <Reveal className="mt-16 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap" delay={0.1}>
          <Button href={ctaNavigation.primary.href} size="lg">
            {ctaNavigation.primary.label}
          </Button>
          <Button href={ctaNavigation.secondary.href} variant="secondary" size="lg">
            {ctaNavigation.secondary.label}
          </Button>
          <Button href={ctaNavigation.whatsapp.href} variant="secondary" size="lg" external>
            <Icon name="whatsapp" size={18} className="mr-2" />
            {ctaNavigation.whatsapp.label}
          </Button>
        </Reveal>
      </Container>
    </Section>
  );
}
