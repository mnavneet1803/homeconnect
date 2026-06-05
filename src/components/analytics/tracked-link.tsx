"use client";

import Link from "next/link";
import { cn } from "@/lib/utils/cn";
import { trackCtaClick, trackPhoneClick } from "@/lib/analytics/events";

interface TrackedLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  location: string;
  ctaText?: string;
  serviceSlug?: string;
  external?: boolean;
  onClick?: () => void;
}

/** Link with automatic CTA or phone conversion tracking */
export function TrackedLink({
  href,
  children,
  className,
  location,
  ctaText,
  serviceSlug,
  external,
  onClick,
}: TrackedLinkProps) {
  const isPhone = href.startsWith("tel:");

  function handleClick() {
    if (isPhone) {
      trackPhoneClick({ location });
    } else {
      trackCtaClick({
        location,
        text: ctaText ?? (typeof children === "string" ? children : location),
        href,
        serviceSlug,
      });
    }
    onClick?.();
  }

  if (external || href.startsWith("http")) {
    return (
      <a
        href={href}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
}

interface TrackedPhoneLinkProps {
  tel: string;
  display: string;
  location: string;
  className?: string;
}

export function TrackedPhoneLink({
  tel,
  display,
  location,
  className,
}: TrackedPhoneLinkProps) {
  return (
    <a
      href={`tel:${tel}`}
      className={cn(className)}
      onClick={() => trackPhoneClick({ location })}
    >
      {display}
    </a>
  );
}
