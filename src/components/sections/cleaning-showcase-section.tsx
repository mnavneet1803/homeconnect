import Image from "next/image";
import {
  cleaningGalleryPhotos,
  cleaningServicesBanner,
} from "@/data/homepage-banners";
import { siteConfig } from "@/config/site";
import { ROUTES } from "@/constants/routes";
import { IMAGE_SIZES } from "@/lib/images";
import { Container, Section, SectionHeader } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { StaggerGrid, StaggerItem } from "@/components/motion/stagger-grid";

export function CleaningShowcaseSection() {
  return (
    <Section id="cleaning" className="bg-surface-0">
      <Container>
        <Reveal>
          <SectionHeader
            eyebrow="Cleaning services"
            title="Clean spaces for Edmonton homes & businesses"
            description="Residential, move-in/move-out, post-construction and commercial cleaning — reliable, thorough and competitively priced."
          />
        </Reveal>

        <Reveal delay={0.05}>
          <div className="overflow-hidden rounded-3xl border border-border-subtle shadow-card">
            <Image
              src={cleaningServicesBanner.src}
              alt={cleaningServicesBanner.alt}
              width={cleaningServicesBanner.width}
              height={cleaningServicesBanner.height}
              sizes="100vw"
              className="h-auto w-full"
            />
          </div>
        </Reveal>

        <StaggerGrid className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:gap-6">
          {cleaningGalleryPhotos.map((photo) => (
            <StaggerItem key={photo.src}>
              <div className="overflow-hidden rounded-2xl border border-border-subtle bg-surface-100 shadow-card">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                  sizes={IMAGE_SIZES.card}
                  loading="lazy"
                  className="h-auto w-full object-cover"
                />
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>

        <Reveal className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row" delay={0.1}>
          <Button href={ROUTES.services.detail("cleaners")} size="lg">
            Cleaning services
          </Button>
          <Button href={`tel:${siteConfig.phone.tel}`} variant="secondary" size="lg">
            Call {siteConfig.phone.display}
          </Button>
        </Reveal>
      </Container>
    </Section>
  );
}
