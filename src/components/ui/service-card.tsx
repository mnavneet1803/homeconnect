import Link from "next/link";
import { Icon, serviceIconName } from "@/components/ui/icons";
import { Badge } from "@/components/ui/badge";
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
    <Link
      href={linkHref}
      className={cn(
        "group card-interactive flex h-full flex-col p-6 md:p-7",
        "focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-500/20",
        className
      )}
    >
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-brand-100 transition-colors duration-normal group-hover:bg-brand-100">
        <Icon name={serviceIconName(service.icon)} size={24} />
      </div>
      <h3 className="text-heading-sm text-ink-900 transition-colors group-hover:text-brand-800">
        {service.name}
      </h3>
      <p className="mt-2 flex-1 text-body-sm leading-relaxed text-ink-500">
        {service.shortDescription}
      </p>
      {service.licensed && service.licenseLabel && (
        <Badge variant="brand" className="mt-5 w-fit">
          {service.licenseLabel}
        </Badge>
      )}
      <span className="mt-5 inline-flex items-center gap-1.5 text-label-sm font-medium text-brand-700">
        Learn more
        <Icon name="arrow-right" size={16} className="transition-transform duration-normal group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}
