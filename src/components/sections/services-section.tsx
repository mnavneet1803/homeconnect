import { getAllServices } from "@/data";
import { ROUTES } from "@/constants/routes";
import { Container, Section, SectionHeader } from "@/components/ui/container";
import { ServiceCard } from "@/components/ui/service-card";
import { Reveal } from "@/components/motion/reveal";
import { StaggerGrid, StaggerItem } from "@/components/motion/stagger-grid";
import { MagneticButton } from "@/components/motion/magnetic-button";

export function ServicesSection() {
  const services = getAllServices();

  return (
    <Section id="services">
      <Container>
        <Reveal>
          <SectionHeader
            title="Home services for every project"
            description="From quick repairs to full renovations — browse by trade and tell us what you need. We'll match you with the right Edmonton pro."
          />
        </Reveal>
        <StaggerGrid className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service) => (
            <StaggerItem key={service.slug}>
              <ServiceCard service={service} className="h-full" />
            </StaggerItem>
          ))}
        </StaggerGrid>
        <Reveal className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row" delay={0.1}>
          <MagneticButton href={ROUTES.quote} size="lg">
            Get Free Quotes
          </MagneticButton>
          <MagneticButton href={ROUTES.services.index} variant="secondary" size="lg" magnetic={false}>
            View all services
          </MagneticButton>
        </Reveal>
      </Container>
    </Section>
  );
}
