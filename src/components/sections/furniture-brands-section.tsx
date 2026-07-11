import { ROUTES } from "@/constants/routes";
import { Container, Section } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icons";
import { Reveal } from "@/components/motion/reveal";
import { AutoplayVideo } from "@/components/media/autoplay-video";

const BRANDS = ["IKEA", "Wayfair", "The Brick", "Amazon", "Costco", "Structube", "JYSK", "Ashley"];

export function FurnitureBrandsSection() {
  return (
    <Section id="furniture-brands" className="spotlight">
      <Container>
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
          <Reveal variant="fade-up" className="spotlight-copy">
            <p className="section-eyebrow text-rust-600 before:bg-rust-600">Furniture assembly</p>
            <h2 className="mt-3.5 text-balance text-display-sm text-pine-950 md:text-[clamp(26px,3.2vw,36px)]">
              We assemble furniture from every major retailer
            </h2>
            <p className="mt-3.5 max-w-[460px] text-ink-600">
              Wardrobes, beds, office desks, and flat-pack kits — unboxed, built square, and anchored
              where it matters. No leftover screws, no wobble.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {BRANDS.map((brand) => (
                <span key={brand} className="chip">
                  {brand}
                </span>
              ))}
            </div>
            <Button href={ROUTES.seoLanding.furnitureAssembly} className="mt-6">
              Get an assembly quote
            </Button>
          </Reveal>

          <Reveal variant="fade-up" delay={0.08}>
            <div className="relative aspect-[4/3.1] overflow-hidden rounded-lg shadow-card">
              <AutoplayVideo
                src="/videos/card-furniture.mp4"
                poster="/videos/posters/card-furniture.webp"
                alt="Furniture assembly service in an Edmonton home"
                label="Furniture assembly"
                orientation="landscape"
                sizes="(max-width: 1024px) 100vw, 50vw"
                sound
              />
              <div className="absolute bottom-[18px] left-[18px] z-20 flex items-center gap-2 rounded-pill bg-paper/95 px-4 py-2 font-mono text-[12.5px] text-ink-900 shadow-card">
                <Icon name="wrench" size={14} className="text-pine-700" />
                Furniture assembly service
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
