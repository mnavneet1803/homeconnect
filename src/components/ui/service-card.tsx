"use client";

import Link from "next/link";
import { m } from "framer-motion";
import { Icon, serviceIconName } from "@/components/ui/icons";
import { Badge } from "@/components/ui/badge";
import { hoverLift } from "@/lib/motion/variants";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import type { Service } from "@/types/service";
import { cn } from "@/lib/utils/cn";

interface ServiceCardProps {
  service: Service;
  className?: string;
  href?: string;
}

export function ServiceCard({ service, className, href }: ServiceCardProps) {
  const reducedMotion = usePrefersReducedMotion();
  const linkHref = href ?? service.href;

  return (
    <m.div
      whileHover={reducedMotion ? undefined : hoverLift}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className={cn("h-full", className)}
    >
      <Link
        href={linkHref}
        className={cn(
          "group card-interactive flex h-full flex-col p-6",
          "focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-500/25"
        )}
      >
        <m.div
          className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-700"
          whileHover={reducedMotion ? undefined : { scale: 1.05, backgroundColor: "rgb(204 251 241)" }}
          transition={{ duration: 0.2 }}
        >
          <Icon name={serviceIconName(service.icon)} size={24} />
        </m.div>
        <h3 className="text-heading-sm text-ink-900 transition-colors group-hover:text-brand-800">
          {service.name}
        </h3>
        <p className="mt-2 flex-1 text-body-sm text-ink-500">{service.shortDescription}</p>
        {service.licensed && service.licenseLabel && (
          <Badge variant="brand" className="mt-4 w-fit">
            {service.licenseLabel}
          </Badge>
        )}
        <span className="mt-4 inline-flex items-center gap-1 text-label-sm font-medium text-brand-700 opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100 group-focus-visible:opacity-100">
          Learn more
          <Icon name="arrow-right" size={16} />
        </span>
      </Link>
    </m.div>
  );
}
