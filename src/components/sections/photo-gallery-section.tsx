"use client";

import { useState } from "react";
import Image from "next/image";
import { Container, Section, SectionHeader } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";
import { StaggerGrid, StaggerItem } from "@/components/motion/stagger-grid";
import { PhotoLightbox, type LightboxImage } from "@/components/media/photo-lightbox";

interface PhotoGallerySectionProps {
  images: LightboxImage[];
  title?: string;
  description?: string;
  className?: string;
}

/** Curated photo grid with a full-screen lightbox — used for rich, image-heavy service pages. */
export function PhotoGallerySection({
  images,
  title = "Our work",
  description,
  className,
}: PhotoGallerySectionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  if (!images.length) return null;

  return (
    <Section className={className}>
      <Container>
        <Reveal>
          <SectionHeader title={title} description={description} />
        </Reveal>

        <StaggerGrid className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4">
          {images.map((image, i) => (
            <StaggerItem key={image.src}>
              <button
                type="button"
                onClick={() => setActiveIndex(i)}
                aria-label={`View photo: ${image.alt}`}
                className="group relative block aspect-square w-full overflow-hidden rounded-xl border border-border-subtle bg-surface-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="pointer-events-none absolute inset-0 bg-pine-950/0 transition-colors duration-300 group-hover:bg-pine-950/15" />
              </button>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </Container>

      <PhotoLightbox
        images={images}
        index={activeIndex}
        onClose={() => setActiveIndex(null)}
        onNavigate={setActiveIndex}
      />
    </Section>
  );
}
