"use client";

import Link from "next/link";
import { IMAGE_SIZES } from "@/lib/images";
import type { ServiceSlug } from "@/constants/services";
import { SERVICE_CARD_IMAGES } from "@/data/service-showcase";
import { AuditImage } from "@/components/dev/audit-image";
import { Badge } from "@/components/ui/badge";
import { Icon, serviceIconName } from "@/components/ui/icons";
import { HoverCard } from "@/components/motion/hover-card";
import type { Service } from "@/types/service";

interface ServiceGridCardProps {
  service: Service;
}

export function ServiceGridCard({ service }: ServiceGridCardProps) {
  const img = SERVICE_CARD_IMAGES[service.slug as ServiceSlug];
  const ctaLabel = service.cardCta ?? "Learn more";

  return (
    <HoverCard className="h-full">
      <Link
        href={service.href}
        className="card-interactive group flex h-full flex-col overflow-hidden focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-500/20"
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-surface-100">
          <AuditImage
            auditId={`service-card-${service.slug}`}
            src={img.src}
            alt={img.alt}
            fill
            sizes={IMAGE_SIZES.card}
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
          <div className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white/95 text-brand-700 shadow-sm ring-1 ring-white/80 backdrop-blur-sm transition-transform duration-300 group-hover:scale-105">
            <Icon name={serviceIconName(service.icon)} size={24} />
          </div>
        </div>
        <div className="flex flex-1 flex-col p-7 md:p-8">
          <h3 className="text-heading-sm text-ink-900 transition-colors group-hover:text-brand-800">
            {service.name}
          </h3>
          <p className="mt-3 text-body-sm leading-relaxed text-ink-400">
            {service.shortDescription}
          </p>
          {service.highlights && service.highlights.length > 0 && (
            <ul className="mt-5 space-y-2">
              {service.highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-body-sm text-ink-600"
                >
                  <Icon
                    name="check"
                    size={16}
                    className="mt-0.5 shrink-0 text-brand-600"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
          {service.licensed && service.licenseLabel && (
            <Badge variant="brand" className="mt-5 w-fit">
              {service.licenseLabel}
            </Badge>
          )}
          <span className="mt-5 inline-flex items-center gap-1.5 text-label-sm font-medium text-brand-700">
            {ctaLabel}
            <Icon
              name="arrow-right"
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </span>
        </div>
      </Link>
    </HoverCard>
  );
}
