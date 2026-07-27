import Image from "next/image";
import Link from "next/link";
import { ROUTES } from "@/constants/routes";
import { Container, Section } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icons";
import { Reveal } from "@/components/motion/reveal";
import { AutoplayVideo } from "@/components/media/autoplay-video";

const BED_TYPES = ["Storage box beds", "Hydraulic lift-up", "Platform beds", "Custom headboards"];

const GALLERY_PREVIEW = [
  {
    src: "/images/services/custom-box-beds/custom-box-bed-storage-grey-finished.png",
    alt: "Finished grey custom storage box bed with under-bed drawers",
  },
  {
    src: "/images/services/custom-box-beds/custom-box-bed-mirrored-headboard-grey.png",
    alt: "Custom grey storage box bed with mirrored headboard and matching nightstands",
  },
  {
    src: "/images/services/custom-box-beds/custom-box-bed-tufted-headboard-cream-installed.png",
    alt: "Custom tufted cream headboard installed in an Edmonton bedroom",
  },
  {
    src: "/images/services/custom-box-beds/custom-box-bed-marble-luxury-finish.png",
    alt: "Custom box bed with a luxury marble-look finish",
  },
];

export function CustomBoxBedsSection() {
  return (
    <Section id="custom-box-beds" className="spotlight bg-surface-50">
      <Container>
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
          <Reveal variant="fade-up" className="spotlight-copy">
            <p className="section-eyebrow text-rust-600 before:bg-rust-600">Custom furniture</p>
            <h2 className="mt-3.5 text-balance text-display-sm text-pine-950 md:text-[clamp(26px,3.2vw,36px)]">
              Custom box beds, built to fit your space
            </h2>
            <p className="mt-3.5 max-w-[460px] text-ink-600">
              High-quality custom box beds manufactured using premium hardwood, plywood, and
              engineered wood — any size, any style, with workshop or on-site build available
              across Edmonton.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {BED_TYPES.map((type) => (
                <span key={type} className="chip">
                  {type}
                </span>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href={ROUTES.seoLanding.customBoxBeds}>Get a custom bed quote</Button>
              <Button href={ROUTES.seoLanding.customBoxBeds} variant="secondary">
                See our custom box beds
              </Button>
            </div>
            <div className="mt-7 grid max-w-[420px] grid-cols-4 gap-2.5">
              {GALLERY_PREVIEW.map((img) => (
                <Link
                  key={img.src}
                  href={ROUTES.seoLanding.customBoxBeds}
                  aria-label="View our custom box bed gallery"
                  className="relative block aspect-square overflow-hidden rounded-lg border border-border-subtle bg-surface-100 transition-transform duration-300 hover:scale-[1.04]"
                >
                  <Image src={img.src} alt={img.alt} fill sizes="90px" className="object-cover" />
                </Link>
              ))}
            </div>
          </Reveal>

          <Reveal variant="fade-up" delay={0.08}>
            <div className="relative mx-auto aspect-[9/16] max-w-[300px] overflow-hidden rounded-lg shadow-card">
              <AutoplayVideo
                src="/videos/feature-custom-box-beds.mp4"
                poster="/videos/posters/feature-custom-box-beds.webp"
                alt="Custom box bed being built and installed by Home Solutions Edmonton"
                label="Custom box beds"
                orientation="portrait"
                sizes="300px"
                sound
              />
              <div className="absolute bottom-[18px] left-[18px] z-20 flex items-center gap-2 rounded-pill bg-paper/95 px-4 py-2 font-mono text-[12.5px] text-ink-900 shadow-card">
                <Icon name="bed" size={14} className="text-pine-700" />
                Custom box bed craftsmanship
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
