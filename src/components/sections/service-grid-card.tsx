"use client";

import Link from "next/link";
import { Icon, serviceIconName } from "@/components/ui/icons";
import type { Service } from "@/types/service";

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

  return (
    <Link
      href={service.href}
      className="svc-card-premium group flex flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass-500 focus-visible:ring-offset-2"
      aria-label={service.name}
    >
      {/* Image area — rich gradient with large icon */}
      <div className={`relative h-44 overflow-hidden bg-gradient-to-br ${gradient}`}>
        {/* Subtle grid texture */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(246,241,229,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(246,241,229,0.15) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        {/* Zoom layer */}
        <div className="svc-image-area absolute inset-0 flex items-center justify-center">
          <Icon
            name={serviceIconName(service.icon)}
            size={60}
            className="text-paper/10 transition-transform duration-700 group-hover:scale-110"
            aria-hidden="true"
          />
        </div>
        {/* Service icon badge — bottom left */}
        <div className="absolute bottom-4 left-4 flex h-10 w-10 items-center justify-center rounded-xl bg-brass-500 shadow-brass transition-all duration-300 group-hover:scale-110 group-hover:bg-brass-400">
          <Icon name={serviceIconName(service.icon)} size={20} className="text-pine-950" />
        </div>
        {/* Glowing border on hover */}
        <div className="absolute inset-0 rounded-t-xl opacity-0 ring-2 ring-inset ring-brass-500/40 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      {/* Content area */}
      <article className="flex flex-1 flex-col p-5">
        <h3 className="text-[17px] font-bold tracking-tight text-pine-950">{service.name}</h3>
        <p className="mt-1.5 flex-1 text-[13.5px] leading-relaxed text-ink-600">
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
    </Link>
  );
}
