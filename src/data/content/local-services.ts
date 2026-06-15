import type { ServiceSlug } from "@/constants/services";
import type { LocationSlug } from "@/constants/locations";

export const LOCAL_SERVICES_CONTENT = {
  eyebrow: "Edmonton & Capital Region",
  title: "Local Home Services Across Edmonton",
  description:
    "We proudly serve homeowners, landlords, tenants, property managers, and businesses throughout Edmonton, Sherwood Park, St. Albert, Spruce Grove, Stony Plain, Beaumont, and Leduc.",
  supplementalText:
    "Whether you need a quick handyman fix, a deep clean before a move, or ongoing maintenance for a rental portfolio, our Edmonton-based crew delivers reliable work with free quotes and direct accountability — no middlemen.",
  serviceSlugs: [
    "handyman",
    "cleaners",
    "tv-wall-mounting",
    "furniture-assembly",
    "plumbers",
    "electricians",
    "move-in-move-out-repairs",
  ] as const satisfies readonly ServiceSlug[],
  locationSlugs: [
    "edmonton",
    "sherwood-park",
    "st-albert",
    "spruce-grove",
    "stony-plain",
    "beaumont",
    "leduc",
  ] as const satisfies readonly LocationSlug[],
};
