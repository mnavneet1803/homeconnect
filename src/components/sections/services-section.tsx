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
    <Section id="services" className="bg-surface-50">
      <Container>
        <Reveal>
          <SectionHeader
            eyebrow="Everything, one crew"
            title="Everything your home needs — handled"
            description="From a wobbly cabinet hinge to a full move-out repair list, our tradespeople carry the tools and the track record to get it done in one visit."
          />
        </Reveal>

        <StaggerGrid className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <StaggerItem key={service.slug} className="h-full">
              <ServiceGridCard service={service} index={index} />
            </StaggerItem>
          ))}
        </StaggerGrid>

        <Reveal className="mt-12 flex flex-wrap justify-center gap-3.5" delay={0.1}>
          <Button href={ctaNavigation.primary.href} size="lg">
            {ctaNavigation.primary.label}
          </Button>
          <Button href={ctaNavigation.secondary.href} variant="secondary" size="lg">
            <Icon name="phone" size={16} />
            {ctaNavigation.secondary.label}
          </Button>
        </Reveal>
      </Container>
    </Section>
  );
}
