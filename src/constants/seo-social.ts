/** Default social / Open Graph share image — 1200×630 (WhatsApp, Facebook, LinkedIn, X) */
export const DEFAULT_OG_IMAGE = "/og-image.jpg";

export const DEFAULT_OG_IMAGE_ALT =
  "Home Solution Services — Edmonton's trusted home service experts. Handyman, cleaning, TV mounting, furniture assembly, plumbing, and electrical across the Capital Region.";

export const DEFAULT_OG_IMAGE_WIDTH = 1200;
export const DEFAULT_OG_IMAGE_HEIGHT = 630;

/** MIME type served for the default OG asset */
export const DEFAULT_OG_IMAGE_TYPE = "image/jpeg" as const;

/** Optional X (Twitter) handle — e.g. @HomeSolutionAB (include @) */
export const TWITTER_SITE =
  process.env.NEXT_PUBLIC_TWITTER_HANDLE?.trim() || undefined;
