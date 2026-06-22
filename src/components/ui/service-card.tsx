"use client";

import Link from "next/link";
import { Icon, serviceIconName } from "@/components/ui/icons";
import { HoverCard } from "@/components/motion/hover-card";
import type { Service } from "@/types/service";
import { cn } from "@/lib/utils/cn";

interface ServiceCardProps {
  service: Service;
  className?: string;
  href?: string;
}

export function ServiceCard({ service, className, href }: ServiceCardProps) {
  const linkHref = href ?? service.href;

  return (
    <HoverCard className="h-full">
      <Link
        href={linkHref}
        className={cn(
          "group card-interactive flex h-full flex-col p-6 md:p-7",
          "focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-500/20",
          className
        )}
      >
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-brand-100 transition-all duration-300 group-hover:scale-105 group-hover:bg-brand-100">
          <Icon name={serviceIconName(service.icon)} size={24} />
        </div>
        <h3 className="text-heading-sm text-ink-900 transition-colors group-hover:text-brand-800">
          {service.name}
        </h3>
        <p className="mt-2 flex-1 text-body-sm leading-relaxed text-ink-500">
          {service.shortDescription}
        </p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-label-sm font-medium text-brand-700">
          {service.cardCta ?? "Learn more"}
          <Icon
            name="arrow-right"
            size={16}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </span>
      </Link>
    </HoverCard>
  );
}
