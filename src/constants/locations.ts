import { ROUTES } from "@/constants/routes";
import type { Location } from "@/types/location";

export const LOCATION_SLUGS = [
  "edmonton",
  "sherwood-park",
  "st-albert",
  "spruce-grove",
  "stony-plain",
  "fort-saskatchewan",
  "leduc",
  "beaumont",
] as const;

export type LocationSlug = (typeof LOCATION_SLUGS)[number];

export const LOCATIONS: Location[] = [
  {
    slug: "edmonton",
    name: "Edmonton",
    region: "Capital Region",
    href: ROUTES.locations.detail("edmonton"),
    featured: true,
    sortOrder: 1,
    neighbourhoods: [
      "Terwillegar",
      "Windermere",
      "Summerside",
      "Mill Woods",
      "Oliver",
      "Downtown",
      "Glenora",
      "Clareview",
      "Strathearn",
      "West Edmonton",
    ],
  },
  {
    slug: "sherwood-park",
    name: "Sherwood Park",
    region: "Strathcona County",
    href: ROUTES.locations.detail("sherwood-park"),
    featured: true,
    sortOrder: 2,
    neighbourhoods: [],
  },
  {
    slug: "st-albert",
    name: "St. Albert",
    region: "Capital Region",
    href: ROUTES.locations.detail("st-albert"),
    featured: true,
    sortOrder: 3,
    neighbourhoods: [],
  },
  {
    slug: "spruce-grove",
    name: "Spruce Grove",
    region: "Capital Region",
    href: ROUTES.locations.detail("spruce-grove"),
    featured: true,
    sortOrder: 4,
    neighbourhoods: [],
  },
  {
    slug: "stony-plain",
    name: "Stony Plain",
    region: "Capital Region",
    href: ROUTES.locations.detail("stony-plain"),
    featured: false,
    sortOrder: 5,
    neighbourhoods: [],
  },
  {
    slug: "fort-saskatchewan",
    name: "Fort Saskatchewan",
    region: "Capital Region",
    href: ROUTES.locations.detail("fort-saskatchewan"),
    featured: false,
    sortOrder: 6,
    neighbourhoods: [],
  },
  {
    slug: "leduc",
    name: "Leduc",
    region: "Capital Region",
    href: ROUTES.locations.detail("leduc"),
    featured: false,
    sortOrder: 7,
    neighbourhoods: [],
  },
  {
    slug: "beaumont",
    name: "Beaumont",
    region: "Capital Region",
    href: ROUTES.locations.detail("beaumont"),
    featured: false,
    sortOrder: 8,
    neighbourhoods: [],
  },
];

export const LOCATION_BY_SLUG = Object.fromEntries(
  LOCATIONS.map((l) => [l.slug, l])
) as Record<LocationSlug, Location>;

export const FEATURED_LOCATIONS = LOCATIONS.filter((l) => l.featured).sort(
  (a, b) => a.sortOrder - b.sortOrder
);

/** Edmonton metro postal code prefixes we serve */
export const VALID_POSTAL_PREFIXES = ["T5", "T6", "T7", "T8"] as const;
