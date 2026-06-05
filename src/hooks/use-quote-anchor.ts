"use client";

import { usePathname } from "next/navigation";
import { ROUTES } from "@/constants/routes";

/** Returns the correct in-page quote form anchor for the current route */
export function useQuoteAnchor(): string {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  if (segments[0] === "services" && segments.length >= 3) return "#service-location-quote";
  if (segments[0] === "services") return "#service-quote";
  if (segments[0] === "locations" && segments.length >= 3) return "#hood-quote";
  if (segments[0] === "locations") return "#location-quote";
  if (pathname === ROUTES.quote || pathname === ROUTES.contact) return "#quote-form";
  return "#quote";
}

/** Quote page path with optional service pre-selection */
export function quoteHref(serviceSlug?: string): string {
  if (serviceSlug) return `${ROUTES.quote}?service=${serviceSlug}`;
  return ROUTES.quote;
}
