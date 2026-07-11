import { Container, Section } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";
import { StaggerGrid, StaggerItem } from "@/components/motion/stagger-grid";
import { AutoplayVideo } from "@/components/media/autoplay-video";
import { isPortrait, type ServiceVideoMedia } from "@/data/service-media";

interface ServiceGallerySectionProps {
  media: ServiceVideoMedia;
  serviceName: string;
  className?: string;
}

/**
 * "See the work" gallery: 2–3 short clips that autoplay muted while in view,
 * with a tap-to-open sound modal. Rendered only when gallery clips exist.
 */
export function ServiceGallerySection({ media, serviceName, className }: ServiceGallerySectionProps) {
  if (!media.gallery.length) return null;

  const cols = media.gallery.length >= 3 ? "sm:grid-cols-3" : "sm:grid-cols-2";

  return (
    <Section className={className ?? "border-y border-border-subtle bg-surface-50"}>
      <Container>
        <Reveal>
          <h2 className="text-heading-lg text-ink-900">See the work</h2>
          <p className="mt-3 max-w-prose text-body-md leading-relaxed text-ink-500">
            A few short clips of our {serviceName.toLowerCase()} in action across Edmonton. Tap any
            clip to watch full screen.
          </p>
        </Reveal>

        <StaggerGrid className={`mt-8 grid gap-5 ${cols}`}>
          {media.gallery.map((clip, i) => (
            <StaggerItem key={clip.src}>
              <div
                className={`relative overflow-hidden rounded-2xl border border-border-subtle shadow-card ${
                  isPortrait(clip) ? "mx-auto aspect-[9/16] max-w-[300px]" : "aspect-video"
                }`}
              >
                <AutoplayVideo
                  src={clip.src}
                  poster={clip.poster}
                  alt={`${serviceName} in Edmonton — clip ${i + 1}`}
                  label={`${serviceName} clip ${i + 1}`}
                  orientation={isPortrait(clip) ? "portrait" : "landscape"}
                  sizes={isPortrait(clip) ? "300px" : "(max-width: 1024px) 100vw, 33vw"}
                  sound
                />
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </Container>
    </Section>
  );
}
