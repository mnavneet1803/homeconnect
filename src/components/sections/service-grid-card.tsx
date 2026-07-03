"use client";

import Link from "next/link";
import { Icon, serviceIconName } from "@/components/ui/icons";
import { HoverCard } from "@/components/motion/hover-card";
import type { Service } from "@/types/service";

interface ServiceGridCardProps {
  service: Service;
  index: number;
}

export function ServiceGridCard({ service, index }: ServiceGridCardProps) {
  const ctaLabel = service.cardCta ?? `See ${service.name.toLowerCase()}`;
  const workOrder = String(index + 1).padStart(2, "0");

  return (
    <HoverCard className="h-full">
      <article className="svc-card group flex h-full flex-col">
        <Link
          href={service.href}
          className="flex h-full flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass-500 focus-visible:ring-offset-2"
        >
          <div className="mb-4 flex items-center justify-between">
            <div className="svc-icon">
              <Icon name={serviceIconName(service.icon)} size={22} className="text-brass-400" />
            </div>
            <span className="font-mono text-[11px] text-ink-500">WO–{workOrder}</span>
          </div>
          <h3 className="text-[17.5px] font-semibold text-pine-950">{service.name}</h3>
          <p className="mt-2 flex-1 text-sm text-ink-600">{service.shortDescription}</p>
          <span className="mt-4 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-pine-700 transition-transform group-hover:gap-2">
            {ctaLabel}
            <Icon
              name="arrow-right"
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </span>
        </Link>
      </article>
    </HoverCard>
  );
}
