import Image from "next/image";
import { furnitureBrandsBanner } from "@/data/homepage-banners";
import { ROUTES } from "@/constants/routes";
import { Container, Section, SectionHeader } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";

export function FurnitureBrandsSection() {
  return (
    <Section id="furniture-brands" className="bg-surface-50">
      <Container>
        <Reveal>
          <SectionHeader
            eyebrow="Furniture assembly"
            title="We assemble furniture from every major retailer"
            description="IKEA, Wayfair, The Brick, Amazon, JYSK, Ashley, Staples, Best Buy, Canadian Tire and more — fast, precise assembly across Edmonton."
          />
        </Reveal>

        <Reveal delay={0.05}>
          <div className="overflow-hidden rounded-3xl border border-border-subtle shadow-card">
            <Image
              src={furnitureBrandsBanner.src}
              alt={furnitureBrandsBanner.alt}
              width={furnitureBrandsBanner.width}
              height={furnitureBrandsBanner.height}
              sizes="(max-width: 768px) 100vw, 1024px"
              className="h-auto w-full"
            />
          </div>
        </Reveal>

        <Reveal className="mt-10 text-center" delay={0.1}>
          <Button href={ROUTES.seoLanding.furnitureAssembly} variant="secondary">
            Furniture assembly services
          </Button>
        </Reveal>
      </Container>
    </Section>
  );
}
