import Link from "next/link";
import { getAllServices } from "@/data";
import { siteConfig } from "@/config/site";
import { Container, Section, SectionHeader } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
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
        <Reveal className="mt-16 flex flex-col items-center justify-center gap-4 sm:flex-row" delay={0.1}>
          <Button href="/#quote" size="lg">
            Request a Free Quote
          </Button>
          <Button href={`tel:${siteConfig.phone.tel}`} variant="secondary" size="lg">
            Call Now
          </Button>
        </Reveal>
      </Container>
    </Section>
  );
}
