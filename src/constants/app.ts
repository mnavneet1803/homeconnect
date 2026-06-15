/** Trust stats shown on the homepage trust section */
export type HomepageTrustStat =
  | {
      key: string;
      type: "numeric";
      value: number;
      suffix?: string;
      prefix?: string;
      decimals?: number;
      label: string;
      icon: string;
      showStars?: boolean;
    }
  | {
      key: string;
      type: "text";
      headline: string;
      subline?: string;
      icon: string;
    };

export const HOMEPAGE_TRUST_STATS: HomepageTrustStat[] = [
  {
    key: "local",
    type: "text",
    headline: "Edmonton Based Team",
    icon: "map-pin",
  },
  {
    key: "quotes",
    type: "text",
    headline: "Free Quotes",
    subline: "No obligation pricing",
    icon: "gift",
  },
  {
    key: "response",
    type: "text",
    headline: "Response Within 24 Hours",
    icon: "clock",
  },
];

export const TRUST_BADGES = [
  "Free Quotes",
  "Edmonton Local",
  "Fast Response",
  "Direct Accountability",
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
  titleTemplate: "%s | Home Solution Services",
  defaultTitle: "Home Solution Services — Edmonton Handyman & Home Repairs",
  maxDescriptionLength: 160,
  maxTitleLength: 60,
  ogImageWidth: 1200,
  ogImageHeight: 630,
} as const;
