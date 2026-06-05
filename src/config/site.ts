/**
 * Global site configuration — single source of truth for brand, contact, and SEO defaults.
 * Import from `@/config/site` only; never hardcode these values in components.
 */
export const siteConfig = {
  name: "Edmonton Home Connect",
  shortName: "EHC",
  tagline: "Edmonton's trusted way to hire local home service pros.",
  description:
    "Connect with vetted, insured home service professionals in Edmonton and the Capital Region. Free matching — up to 3 quotes, no obligation.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://edmontonhomeconnect.ca",
  locale: "en_CA",
  language: "en-CA",
  phone: {
    display: process.env.NEXT_PUBLIC_PHONE_DISPLAY ?? "(780) 555-0123",
    tel: process.env.NEXT_PUBLIC_PHONE_TEL ?? "+17805550123",
    hours: "Mon–Sat 7am–6pm",
  },
  email: "hello@edmontonhomeconnect.ca",
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
    /** Marketplace disclaimer — required on key pages */
    marketplaceDisclaimer:
      "We connect homeowners with independent contractors. We do not perform the work ourselves.",
    matchSlaHours: 24,
    maxMatchedPros: 3,
  },
  analytics: {
    gtmId: process.env.NEXT_PUBLIC_GTM_ID,
    ga4Id: process.env.NEXT_PUBLIC_GA4_ID,
  },
} as const;

export type SiteConfig = typeof siteConfig;
