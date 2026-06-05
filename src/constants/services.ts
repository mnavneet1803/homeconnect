import { ROUTES } from "@/constants/routes";
import type { Service } from "@/types/service";

export const SERVICE_SLUGS = [
  "handyman",
  "painters",
  "renovators",
  "flooring",
  "electricians",
  "plumbers",
  "cleaners",
  "landscapers",
  "deck-fence",
  "home-maintenance",
] as const;

export type ServiceSlug = (typeof SERVICE_SLUGS)[number];

export const SERVICES: Service[] = [
  {
    slug: "handyman",
    name: "Handyman",
    pluralName: "Handymen",
    shortDescription: "Repairs, installs, and odd jobs",
    icon: "wrench",
    href: ROUTES.services.detail("handyman"),
    licensed: false,
    featured: true,
    sortOrder: 1,
  },
  {
    slug: "painters",
    name: "Painters",
    pluralName: "Painters",
    shortDescription: "Interior, exterior, and cabinet painting",
    icon: "paintbrush",
    href: ROUTES.services.detail("painters"),
    licensed: false,
    featured: true,
    sortOrder: 2,
  },
  {
    slug: "renovators",
    name: "Renovators",
    pluralName: "Renovators",
    shortDescription: "Kitchen, bathroom, and basement renos",
    icon: "home",
    href: ROUTES.services.detail("renovators"),
    licensed: false,
    featured: true,
    sortOrder: 3,
  },
  {
    slug: "flooring",
    name: "Flooring",
    pluralName: "Flooring Installers",
    shortDescription: "Hardwood, tile, laminate, and vinyl",
    icon: "layers",
    href: ROUTES.services.detail("flooring"),
    licensed: false,
    featured: false,
    sortOrder: 4,
  },
  {
    slug: "electricians",
    name: "Electricians",
    pluralName: "Electricians",
    shortDescription: "Panels, wiring, and lighting",
    icon: "zap",
    href: ROUTES.services.detail("electricians"),
    licensed: true,
    licenseLabel: "Master Electrician",
    featured: true,
    sortOrder: 5,
  },
  {
    slug: "plumbers",
    name: "Plumbers",
    pluralName: "Plumbers",
    shortDescription: "Leaks, fixtures, and water heaters",
    icon: "droplets",
    href: ROUTES.services.detail("plumbers"),
    licensed: true,
    licenseLabel: "Licensed Plumber",
    featured: true,
    sortOrder: 6,
  },
  {
    slug: "cleaners",
    name: "Cleaners",
    pluralName: "Cleaners",
    shortDescription: "Move-out, deep, and recurring cleans",
    icon: "sparkles",
    href: ROUTES.services.detail("cleaners"),
    licensed: false,
    featured: false,
    sortOrder: 7,
  },
  {
    slug: "landscapers",
    name: "Landscapers",
    pluralName: "Landscapers",
    shortDescription: "Lawns, gardens, and yard cleanup",
    icon: "tree",
    href: ROUTES.services.detail("landscapers"),
    licensed: false,
    featured: false,
    sortOrder: 8,
  },
  {
    slug: "deck-fence",
    name: "Deck & Fence",
    pluralName: "Deck & Fence Specialists",
    shortDescription: "Builds, repairs, and staining",
    icon: "fence",
    href: ROUTES.services.detail("deck-fence"),
    licensed: false,
    featured: true,
    sortOrder: 9,
  },
  {
    slug: "home-maintenance",
    name: "Home Maintenance",
    pluralName: "Home Maintenance Pros",
    shortDescription: "Seasonal upkeep and property care",
    icon: "shield-check",
    href: ROUTES.services.detail("home-maintenance"),
    licensed: false,
    featured: false,
    sortOrder: 10,
  },
];

export const SERVICE_BY_SLUG = Object.fromEntries(
  SERVICES.map((s) => [s.slug, s])
) as Record<ServiceSlug, Service>;

export const FEATURED_SERVICES = SERVICES.filter((s) => s.featured).sort(
  (a, b) => a.sortOrder - b.sortOrder
);
