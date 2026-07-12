import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icons";
import { cn } from "@/lib/utils/cn";

interface GoogleMapEmbedProps {
  className?: string;
  /** compact = shorter aspect for homepage/service-areas */
  variant?: "default" | "compact";
}

/**
 * Env-driven Google Map iframe. Falls back to an outbound Maps / GBP link
 * when NEXT_PUBLIC_GOOGLE_MAPS_EMBED is not set.
 */
export function GoogleMapEmbed({ className, variant = "default" }: GoogleMapEmbedProps) {
  const embedUrl = siteConfig.maps.embedUrl;
  const mapsUrl = siteConfig.maps.openUrl;
  const aspect = variant === "compact" ? "aspect-[16/10]" : "aspect-[16/11]";

  if (!embedUrl) {
    return (
      <div
        className={cn(
          "flex flex-col items-center justify-center gap-4 rounded-xl border border-border bg-surface-50 p-8 text-center",
          aspect,
          className
        )}
      >
        <Icon name="map-pin" size={28} className="text-brass-500" />
        <div>
          <p className="font-semibold text-pine-950">Edmonton &amp; surrounding areas</p>
          <p className="mt-1 max-w-sm text-body-sm text-ink-600">
            We serve the Capital Region. Open Google Maps for directions and our business profile.
          </p>
        </div>
        {mapsUrl ? (
          <Button href={mapsUrl} variant="secondary" external>
            Open in Google Maps
          </Button>
        ) : null}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-border bg-surface-100 shadow-sm",
        aspect,
        className
      )}
    >
      <iframe
        title="Home Solution Services location / service area"
        src={embedUrl}
        className="h-full w-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
}
