"use client";

import Image from "next/image";
import Link from "next/link";
import { Icon, serviceIconName } from "@/components/ui/icons";
import { CardVideo } from "@/components/media/card-video";
import { SERVICE_CARD_IMAGES } from "@/data/service-showcase";
import { CARD_VIDEOS } from "@/data/homepage-media";
import { IMAGE_SIZES } from "@/lib/images";
import type { Service } from "@/types/service";
import type { ServiceSlug } from "@/constants/services";

interface ServiceGridCardProps {
  service: Service;
  index: number;
}

// Gradient palettes for card image areas — cycling through brand palette
const CARD_GRADIENTS = [
  "from-pine-950 to-pine-700",
  "from-pine-800 to-pine-500",
  "from-pine-950 via-pine-800 to-pine-600",
  "from-ink-900 to-pine-700",
  "from-pine-700 to-pine-400",
  "from-pine-950 to-ink-800",
];

export function ServiceGridCard({ service, index }: ServiceGridCardProps) {
  const ctaLabel = service.cardCta ?? `Explore`;
  const gradient = CARD_GRADIENTS[index % CARD_GRADIENTS.length];
  const slug = service.slug as ServiceSlug;
  const image = SERVICE_CARD_IMAGES[slug];
  const video = CARD_VIDEOS[slug];

  return (
    <div className="svc-card-premium group relative flex h-full flex-col">
      {/* Fixed 4:3 media area so every card matches */}
      <div
        className={`relative aspect-[4/3] shrink-0 overflow-hidden ${
          image || video ? "bg-surface-100" : `bg-gradient-to-br ${gradient}`
        }`}
      >
        {video ? (
          <CardVideo video={video} alt={image?.alt ?? service.name} label={service.name} />
        ) : image ? (
          <div className="svc-image-area absolute inset-0">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes={IMAGE_SIZES.card}
              loading="lazy"
              className="object-cover object-center"
            />
          </div>
        ) : (
          <>
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(246,241,229,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(246,241,229,0.15) 1px, transparent 1px)",
                backgroundSize: "28px 28px",
              }}
            />
            <div className="svc-image-area absolute inset-0 flex items-center justify-center">
              <Icon
                name={serviceIconName(service.icon)}
                size={60}
                className="text-paper/10 transition-transform duration-700 group-hover:scale-110"
                aria-hidden="true"
              />
            </div>
          </>
        )}
        {/* Service icon badge — bottom left (non-interactive) */}
        <div className="pointer-events-none absolute bottom-4 left-4 z-20 flex h-10 w-10 items-center justify-center rounded-xl bg-brass-500 shadow-brass transition-all duration-300 group-hover:scale-110 group-hover:bg-brass-400">
          <Icon name={serviceIconName(service.icon)} size={20} className="text-pine-950" />
        </div>
        <div className="pointer-events-none absolute inset-0 rounded-t-xl opacity-0 ring-2 ring-inset ring-brass-500/40 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      <article className="flex min-h-0 flex-1 flex-col p-5">
        <h3 className="text-[17px] font-bold tracking-tight text-pine-950">{service.name}</h3>
        <p className="mt-1.5 line-clamp-3 flex-1 text-[13.5px] leading-relaxed text-ink-600">
          {service.shortDescription}
        </p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-pine-700 transition-all duration-300 group-hover:gap-3 group-hover:text-pine-600">
          {ctaLabel}
          <Icon
            name="arrow-right"
            size={13}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </span>
      </article>

      {/* Stretched navigation link — sits above content, below the video play button (z-30) */}
      <Link
        href={service.href}
        aria-label={service.name}
        className="absolute inset-0 z-10 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass-500 focus-visible:ring-offset-2"
      />
    </div>
  );
}
