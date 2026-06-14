import Image from "next/image";
import { siteConfig } from "@/config/site";
import { ROUTES } from "@/constants/routes";
import { IMAGE_SIZES } from "@/lib/images";
import { serviceShowcase, repairServicesStrip } from "@/data/service-showcase";
import { Container, Section, SectionHeader } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { StaggerGrid, StaggerItem } from "@/components/motion/stagger-grid";

export function ServicesShowcaseSection() {
  return (
    <Section id="what-we-do" className="bg-surface-50">
      <Container>
        <Reveal>
          <SectionHeader
            eyebrow="Edmonton home services"
            title="Everything your home needs — handled"
            description="One trusted local team for handyman repairs, maintenance, cleaning, and tech setup across Edmonton and the Capital Region."
          />
        </Reveal>

        <Reveal delay={0.05}>
          <div className="overflow-hidden rounded-3xl border border-border-subtle shadow-card">
            <Image
              src={repairServicesStrip.src}
              alt={repairServicesStrip.alt}
              width={repairServicesStrip.width}
              height={repairServicesStrip.height}
              sizes="100vw"
              className="h-auto w-full"
            />
          </div>
        </Reveal>

        <StaggerGrid className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {serviceShowcase.map((item) => (
            <StaggerItem key={item.src}>
              <article className="card-interactive flex h-full flex-col overflow-hidden">
                <div className="relative overflow-hidden bg-surface-100">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={item.width}
                    height={item.height}
                    sizes={IMAGE_SIZES.card}
                    loading="lazy"
                    className="h-auto w-full"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7 md:p-8">
                  <h3 className="text-heading-sm text-ink-900">{item.title}</h3>
                  <p className="mt-3 text-body-sm leading-relaxed text-ink-400">
                    {item.caption}
                  </p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerGrid>

        <Reveal
          className="mt-16 flex flex-col items-center justify-center gap-4 sm:flex-row"
          delay={0.1}
        >
          <Button href={`tel:${siteConfig.phone.tel}`} size="lg">
            Call {siteConfig.phone.display}
          </Button>
          <Button href={ROUTES.quote} variant="secondary" size="lg">
            Request a free quote
          </Button>
        </Reveal>
      </Container>
    </Section>
  );
}
