import type { ServiceSlug } from "@/constants/services";
import type { LocationSlug } from "@/constants/locations";

export const LOCAL_SERVICES_CONTENT = {
  eyebrow: "Edmonton & Capital Region",
  title: "Local Home Services Across Edmonton",
  description:
    "We proudly serve homeowners, landlords, tenants, property managers, and businesses throughout Edmonton, Sherwood Park, St. Albert, Beaumont, Leduc, Fort Saskatchewan, Spruce Grove, and Stony Plain.",
  supplementalText:
    "Whether you need a quick handyman fix, a deep clean before a move, or ongoing maintenance for a rental portfolio, our Edmonton-based crew delivers reliable work with free quotes and direct accountability — no middlemen.",
  serviceSlugs: [
    "furniture-assembly",
    "handyman",
    "plumbers",
    "electricians",
    "painters",
    "cleaners",
    "tv-wall-mounting",
  ] as const satisfies readonly ServiceSlug[],
  locationSlugs: [
    "edmonton",
    "sherwood-park",
    "st-albert",
    "beaumont",
    "leduc",
    "fort-saskatchewan",
    "spruce-grove",
    "stony-plain",
  ] as const satisfies readonly LocationSlug[],
};
