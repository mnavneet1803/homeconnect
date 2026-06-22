import Image from "next/image";
import { paintingHighRiseLiving, paintingRenovationCollage } from "@/data/homepage-banners";
import { ROUTES } from "@/constants/routes";
import { IMAGE_SIZES } from "@/lib/images";
import { Container, Section, SectionHeader } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";

export function WorkShowcaseSection() {
  return (
    <Section id="our-work" className="bg-surface-50">
      <Container>
        <Reveal>
          <SectionHeader
            eyebrow="Painting & renovation"
            title="Quality finishes across Edmonton"
            description="Interior and exterior painting, drywall repair, decking, fencing and full home improvements — done right the first time."
          />
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-5 lg:gap-8">
          <Reveal className="lg:col-span-3" delay={0.05}>
            <div className="overflow-hidden rounded-3xl border border-border-subtle shadow-card">
              <Image
                src={paintingRenovationCollage.src}
                alt={paintingRenovationCollage.alt}
                width={paintingRenovationCollage.width}
                height={paintingRenovationCollage.height}
                sizes="(max-width: 1024px) 100vw, 60vw"
                loading="lazy"
                className="h-auto w-full"
              />
            </div>
          </Reveal>

          <Reveal className="lg:col-span-2" delay={0.1}>
            <div className="overflow-hidden rounded-3xl border border-border-subtle shadow-card">
              <Image
                src={paintingHighRiseLiving.src}
                alt={paintingHighRiseLiving.alt}
                width={paintingHighRiseLiving.width}
                height={paintingHighRiseLiving.height}
                sizes={IMAGE_SIZES.card}
                loading="lazy"
                className="h-auto w-full"
              />
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row" delay={0.12}>
          <Button href={ROUTES.services.detail("painters")} size="lg">
            Painting services
          </Button>
          <Button href={ROUTES.services.detail("renovators")} variant="secondary" size="lg">
            Renovation services
          </Button>
        </Reveal>
      </Container>
    </Section>
  );
}
