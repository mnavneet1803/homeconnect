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
    count: 10,
    suffix: "+",
    label: "Home services offered",
    key: "services",
    decimals: 0,
  },
  {
    count: 24,
    suffix: " hr",
    label: "Typical response time",
    key: "sla",
    decimals: 0,
  },
] as const;

export const TRUST_BADGES = [
  "Licensed Team",
  "Insured & WCB",
  "Free Quotes",
  "Edmonton Local",
  "Google Verified",
] as const;

export const ANIMATION = {
  duration: {
    instant: 0.1,
    fast: 0.15,
    normal: 0.25,
    slow: 0.35,
    slower: 0.5,
  },
  stagger: 0.06,
  maxStaggerItems: 6,
} as const;

export const FORM = {
  minDescriptionLength: 20,
  maxPhotos: 3,
  maxPhotoSizeMb: 5,
} as const;

export const SEO = {
  titleTemplate: "%s | Edmonton Home Connect",
  defaultTitle: "Edmonton Home Connect — Trusted Local Home Service Contractor",
  maxDescriptionLength: 160,
  maxTitleLength: 60,
  ogImageWidth: 1200,
  ogImageHeight: 630,
} as const;
