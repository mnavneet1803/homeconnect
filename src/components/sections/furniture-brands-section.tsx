import { ROUTES } from "@/constants/routes";
import { Container, Section } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icons";
import { Reveal } from "@/components/motion/reveal";

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
            <div className="relative aspect-[4/3.1] overflow-hidden rounded-lg bg-gradient-to-br from-pine-800 to-pine-950 shadow-card">
              <svg viewBox="0 0 480 380" className="absolute inset-0 h-full w-full" aria-hidden="true">
                <g stroke="rgba(246,241,229,0.08)">
                  <path d="M0 40h480M0 100h480M0 160h480M0 220h480M0 280h480M0 340h480" />
                </g>
                <g stroke="#DBB459" strokeWidth="1.7" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="150" y="130" width="150" height="170" rx="4" />
                  <path d="M150 175h150M225 175v125" />
                  <circle cx="205" cy="200" r="3" fill="#DBB459" stroke="none" />
                  <circle cx="255" cy="200" r="3" fill="#DBB459" stroke="none" />
                </g>
              </svg>
              <div className="absolute bottom-[18px] left-[18px] flex items-center gap-2 rounded-pill bg-paper/95 px-4 py-2 font-mono text-[12.5px] text-ink-900 shadow-card">
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
