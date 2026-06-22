import Image from "next/image";
import type { HomepageBanner } from "@/data/homepage-banners";
import { Container, Section } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";

interface PromoBannerSectionProps {
  banner: HomepageBanner;
  id?: string;
  className?: string;
}

export function PromoBannerSection({ banner, id, className }: PromoBannerSectionProps) {
  return (
    <Section id={id} className={className}>
      <Container>
        <Reveal>
          <div className="overflow-hidden rounded-3xl border border-border-subtle shadow-card">
            <Image
              src={banner.src}
              alt={banner.alt}
              width={banner.width}
              height={banner.height}
              sizes="100vw"
              className="h-auto w-full"
            />
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
