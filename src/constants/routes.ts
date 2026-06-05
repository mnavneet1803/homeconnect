/** Centralized route definitions — use instead of string literals. */
export const ROUTES = {
  home: "/",
  quote: "/get-a-quote",
  howItWorks: "/how-it-works",
  about: "/about",
  contact: "/contact",
  faq: "/faq",
  vetting: "/vetting-process",
  reviews: "/reviews",
  thankYou: "/thank-you",

  services: {
    index: "/services",
    detail: (slug: string) => `/services/${slug}` as const,
    sub: (trade: string, sub: string) => `/services/${trade}/${sub}` as const,
  },

  locations: {
    index: "/locations",
    detail: (slug: string) => `/locations/${slug}` as const,
    neighbourhood: (city: string, hood: string) =>
      `/locations/${city}/${hood}` as const,
  },

  costGuides: {
    index: "/cost-guides",
    detail: (slug: string) => `/cost-guides/${slug}` as const,
  },

  guides: {
    index: "/guides",
    detail: (slug: string) => `/guides/${slug}` as const,
  },

  projects: {
    index: "/projects",
    detail: (slug: string) => `/projects/${slug}` as const,
  },

  blog: {
    index: "/blog",
    detail: (slug: string) => `/blog/${slug}` as const,
  },

  forPros: {
    index: "/for-pros",
    join: "/for-pros/join-network",
    requirements: "/for-pros/pro-requirements",
  },

  legal: {
    privacy: "/legal/privacy",
    terms: "/legal/terms",
    disclaimer: "/legal/disclaimer",
  },

  forHomeowners: "/for-homeowners",
  forBusinesses: "/for-businesses",
  forPropertyManagers: "/for-property-managers",
} as const;

export type RouteKey = keyof typeof ROUTES;
