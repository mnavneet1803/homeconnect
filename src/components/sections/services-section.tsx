import { getAllServices } from "@/data";
import { ROUTES } from "@/constants/routes";
import { Container, Section, SectionHeader } from "@/components/ui/container";
import { ServiceCard } from "@/components/ui/service-card";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { StaggerGrid, StaggerItem } from "@/components/motion/stagger-grid";

export function ServicesSection() {
  const services = getAllServices();

  return (
    <Section id="services" className="bg-surface-0">
      <Container>
        <Reveal>
          <SectionHeader
            title="Home services for every project"
            description="From quick repairs to full renovations — browse by trade and tell us what you need. Our team handles it directly."
          />
        </Reveal>
        <StaggerGrid className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service) => (
            <StaggerItem key={service.slug}>
              <ServiceCard service={service} className="h-full" />
            </StaggerItem>
          ))}
        </StaggerGrid>
        <Reveal className="mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row" delay={0.1}>
          <Button href={ROUTES.quote} size="lg">
            Get Free Quotes
          </Button>
          <Button href={ROUTES.services.index} variant="secondary" size="lg">
            View all services
          </Button>
        </Reveal>
      </Container>
    </Section>
  );
}
