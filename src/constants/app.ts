/** Trust stats — sourced from Google reviews config in production */
export const TRUST_STATS = [
  {
    count: parseInt(process.env.NEXT_PUBLIC_GOOGLE_REVIEW_COUNT ?? "127", 10),
    suffix: "+",
    label: "Google reviews",
    key: "reviews",
    decimals: 0,
  },
  {
    count: parseFloat(process.env.NEXT_PUBLIC_GOOGLE_RATING ?? "4.9"),
    suffix: "★",
    label: "Google rating",
    key: "rating",
    decimals: 1,
  },
  {
    count: 50,
    suffix: "+",
    label: "Vetted pros in network",
    key: "pros",
    decimals: 0,
  },
  {
    count: 24,
    suffix: " hr",
    label: "Typical match time",
    key: "sla",
    decimals: 0,
  },
] as const;

export const TRUST_BADGES = [
  "Vetted Pros",
  "Insured & WCB",
  "Free to Use",
  "Edmonton Local",
  "Google Verified",
] as const;

export const ANIMATION = {
  duration: {
    instant: 0.1,
    fast: 0.15,
    normal: 0.2,
    slow: 0.3,
    slower: 0.45,
  },
  stagger: 0.05,
  maxStaggerItems: 6,
} as const;

export const FORM = {
  minDescriptionLength: 20,
  maxPhotos: 3,
  maxPhotoSizeMb: 5,
} as const;

export const SEO = {
  titleTemplate: "%s | Edmonton Home Connect",
  defaultTitle: "Edmonton Home Connect — Trusted Local Home Service Pros",
  maxDescriptionLength: 160,
  maxTitleLength: 60,
  ogImageWidth: 1200,
  ogImageHeight: 630,
} as const;
