/**
 * Global site configuration — single source of truth for brand, contact, and SEO defaults.
 * Import from `@/config/site` only; never hardcode these values in components.
 */
export const siteConfig = {
  name: "Home Solution Services",
  shortName: "Home Solution",
  tagline: "Your home, our solution — trusted Edmonton home services.",
  description:
    "Licensed home service team in Edmonton and the Capital Region — handyman repairs, maintenance, installs, cleaning, and tech setup. Big or small, we do it all. Call for a free quote.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.homesolutionservices.ca",
  locale: "en_CA",
  language: "en-CA",
  phone: {
    display: process.env.NEXT_PUBLIC_PHONE_DISPLAY ?? "(587) 594-8575",
    tel: process.env.NEXT_PUBLIC_PHONE_TEL ?? "+15875948575",
    hours: "Mon–Sat 7am–6pm",
  },
  email: "hello@homesolutionservices.ca",
  address: {
    street: "",
    city: "Edmonton",
    province: "AB",
    postalCode: "",
    country: "CA",
    countryCode: "CA",
  },
  geo: {
    latitude: 53.5461,
    longitude: -113.4938,
  },
  social: {
    facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL ?? "",
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "",
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL ?? "",
    googleBusiness: process.env.NEXT_PUBLIC_GBP_URL ?? "",
  },
  reviews: {
    googleRating: parseFloat(process.env.NEXT_PUBLIC_GOOGLE_RATING ?? "4.9"),
    googleReviewCount: parseInt(
      process.env.NEXT_PUBLIC_GOOGLE_REVIEW_COUNT ?? "127",
      10
    ),
  },
  business: {
    type: "HomeImprovementContractor" as const,
    /** Company service model — shown on key pages */
    marketplaceDisclaimer:
      "We are the contractor. Our own licensed, insured team performs the work — no middlemen or outside subcontractors.",
    matchSlaHours: 24,
    maxMatchedPros: 3,
  },
  analytics: {
    gtmId: process.env.NEXT_PUBLIC_GTM_ID,
    ga4Id: process.env.NEXT_PUBLIC_GA4_ID,
  },
} as const;

export type SiteConfig = typeof siteConfig;
