import { AuditImage } from "@/components/dev/audit-image";
import { siteConfig } from "@/config/site";
import { ROUTES } from "@/constants/routes";
import { IMAGE_SIZES } from "@/lib/images";
import { beforeAfterRepairs } from "@/data/service-showcase";
import { Container, Section } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icons";
import { Reveal } from "@/components/motion/reveal";

const repairHighlights = [
  "Hole & dent repair — walls patched and sanded smooth",
  "Scratch & mark removal — scuffs and marks gone",
  "Baseboard & trim repair — fixed and repainted",
  "Touch-up painting — seamless, move-in-ready finish",
];

export function BeforeAfterSection() {
  return (
    <Section id="before-after" className="bg-surface-50">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal variant="fade-up">
            <div className="overflow-hidden rounded-2xl border border-border-subtle shadow-elevated">
              <AuditImage
                auditId="before-after-main"
                src={beforeAfterRepairs.src}
                alt={beforeAfterRepairs.alt}
                width={beforeAfterRepairs.width}
                height={beforeAfterRepairs.height}
                sizes={IMAGE_SIZES.hero}
                loading="lazy"
                className="h-auto w-full"
              />
            </div>
          </Reveal>

          <Reveal variant="fade-up" delay={0.08}>
            <div>
              <Badge variant="brand">Real repairs · Before &amp; after</Badge>
              <h2 className="mt-4 text-balance text-display-sm text-ink-900">
                Move-out &amp; move-in repairs, done right
              </h2>
              <p className="mt-5 max-w-prose text-body-lg text-ink-500">
                {beforeAfterRepairs.caption} Whether you&apos;re handing back the
                keys or settling into a new place, our Edmonton crew makes damage
                disappear.
              </p>

              <ul className="mt-8 space-y-3">
                {repairHighlights.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-brand-50 text-brand-700">
                      <Icon name="check" size={14} />
                    </span>
                    <span className="text-body-md text-ink-600">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button href={`tel:${siteConfig.phone.tel}`} size="lg">
                  Call {siteConfig.phone.display}
                </Button>
                <Button href={ROUTES.quote} variant="secondary" size="lg">
                  Get a repair quote
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
