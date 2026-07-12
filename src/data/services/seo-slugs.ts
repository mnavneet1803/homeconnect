export const SEO_SERVICE_SLUGS = [
  "handyman",
  "painters",
  "renovators",
  "flooring",
  "plumbers",
  "electricians",
  "landscapers",
  "cleaners",
  "deck-fence",
  "home-maintenance",
  "drywall-repair",
  "shed-assembly",
] as const;

export type SeoServiceSlug = (typeof SEO_SERVICE_SLUGS)[number];
