/**
 * Global site configuration — single source of truth for brand, contact, and SEO defaults.
 * Import from `@/config/site` only; never hardcode these values in components.
 */
export const siteConfig = {
  name: "Home Solution Services",
  shortName: "Home Solution",
  tagline: "Your home, our solution — trusted Edmonton home services.",
  description:
    "Edmonton home service team — handyman repairs, TV mounting, furniture assembly, professional cleaning, plumbing and electrical maintenance, move-in/out repairs, and condo upkeep. Call for a free quote.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.homesolutionservices.ca",
  locale: "en_CA",
  language: "en-CA",
  phone: {
    display: process.env.NEXT_PUBLIC_PHONE_DISPLAY ?? "587-594-8575",
    tel: process.env.NEXT_PUBLIC_PHONE_TEL ?? "5875948575",
    hours: "Mon–Sat 7am–6pm",
  },
  whatsapp: {
    defaultMessage:
      "Hi! I'd like to request a quote from Home Solution Services.",
  },
  /** Display/contact email — override via env; form delivery still uses SMTP_* */
  email:
    process.env.NEXT_PUBLIC_CONTACT_EMAIL ??
    process.env.CONTACT_EMAIL ??
    "homehelp0789@gmail.com",
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
  maps: {
    /** Full Google Maps embed iframe src (no API secret required for basic embeds) */
    embedUrl: process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED ?? "",
    /** Outbound Maps / GBP link used as fallback and “Open in Maps” */
    openUrl:
      process.env.NEXT_PUBLIC_GOOGLE_MAPS_URL ??
      process.env.NEXT_PUBLIC_GBP_URL ??
      "",
  },
  reviews: {
    googleRating: parseFloat(process.env.NEXT_PUBLIC_GOOGLE_RATING ?? "4.9"),
    googleReviewCount: parseInt(
      process.env.NEXT_PUBLIC_GOOGLE_REVIEW_COUNT ?? "127",
      10
    ),
    /** Direct “Write a review” link when available; falls back to GBP URL */
    writeReviewUrl:
      process.env.NEXT_PUBLIC_GOOGLE_REVIEW_URL ??
      process.env.NEXT_PUBLIC_GBP_URL ??
      "",
    /** Optional third-party reviews embed (Elfsight etc.) — paste full embed HTML via env in a later phase */
    embedEnabled: process.env.NEXT_PUBLIC_REVIEWS_EMBED_ENABLED === "true",
  },
  business: {
    type: "HomeImprovementContractor" as const,
    /** Company service model — shown on key pages */
    marketplaceDisclaimer:
      "We are the contractor. Our own in-house team performs the work — no middlemen or outside subcontractors.",
    matchSlaHours: 24,
    maxMatchedPros: 3,
  },
  brand: {
    logo: {
      src: "/images/brand/logo.png",
      alt: "Home Solutions Edmonton — professional home services logo",
      width: 397,
      height: 275,
    },
    logoIcon: {
      src: "/images/brand/logo-icon-512.png",
      width: 512,
      height: 512,
    },
  },
  analytics: {
    gtmId: process.env.NEXT_PUBLIC_GTM_ID,
    ga4Id: process.env.NEXT_PUBLIC_GA4_ID,
  },
} as const;

export type SiteConfig = typeof siteConfig;
