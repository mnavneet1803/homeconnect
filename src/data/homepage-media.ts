/**
 * Homepage video media map.
 * Web derivatives live in /public/videos (see /public/videos/manifest.json).
 * Encoding + poster generation: scripts/encode-homepage-media.ps1
 */

import { ROUTES } from "@/constants/routes";
import type { ServiceSlug } from "@/constants/services";

export interface VideoAsset {
  /** Web-optimized H.264 clip served from /public */
  src: string;
  /** WebP poster shown first (LCP-safe, lazy for below-the-fold) */
  poster: string;
  width: number;
  height: number;
}

/** Hero: desktop landscape loop, mobile portrait, and a modal cut with audio. */
export const HERO_MEDIA = {
  desktop: {
    src: "/videos/hero-handyman.mp4",
    poster: "/videos/posters/hero-handyman.webp",
    width: 1920,
    height: 1080,
  },
  mobile: {
    src: "/videos/hero-handyman-mobile.mp4",
    poster: "/videos/posters/hero-handyman-mobile.webp",
    width: 720,
    height: 1280,
  },
  /** Sound-on cut opened from the "Watch Video" control. */
  modal: {
    src: "/videos/hero-handyman-modal.mp4",
    poster: "/videos/posters/hero-handyman.webp",
    width: 1920,
    height: 1080,
  },
} as const;

export type FeatureTreatment = "loop" | "click-audio";

export interface FeatureVideoBlock {
  id: string;
  eyebrow: string;
  title: string;
  body: string;
  bullets: string[];
  cta: { label: string; href: string };
  video: VideoAsset;
  /** muted background loop, or poster + click-to-play with sound */
  treatment: FeatureTreatment;
}

const FEATURE_DIMS = { width: 1280, height: 720 };

/** Locked feature blocks — do not change source→slot mapping. */
export const FEATURE_VIDEOS: FeatureVideoBlock[] = [
  {
    id: "smarter-manage-home",
    eyebrow: "One trusted crew",
    title: "A smarter way to manage your home",
    body: "Stop juggling five different contractors. One local team keeps your home clean, maintained, and running — scheduled around your week and done to a standard you can see.",
    bullets: ["Residential & move-out cleaning", "Recurring maintenance plans", "One point of contact"],
    cta: { label: "Explore cleaning", href: ROUTES.services.detail("cleaners") },
    video: {
      src: "/videos/feature-cleaning.mp4",
      poster: "/videos/posters/feature-cleaning.webp",
      ...FEATURE_DIMS,
    },
    treatment: "loop",
  },
  {
    id: "peace-of-mind",
    eyebrow: "Insured & accountable",
    title: "Peace of mind with every service",
    body: "From the first quote to the final walkthrough, you work with the same insured crew — no strangers, no surprises. Move-in and move-out work is documented so nothing gets missed.",
    bullets: ["Same crew, every visit", "Written quotes up front", "Move-in / move-out ready"],
    cta: { label: "See how it works", href: ROUTES.howItWorks },
    video: {
      src: "/videos/feature-move-in-out.mp4",
      poster: "/videos/posters/feature-move-in-out.webp",
      ...FEATURE_DIMS,
    },
    treatment: "click-audio",
  },
  {
    id: "quality-work",
    eyebrow: "Craft you can trust",
    title: "Quality work you can depend on",
    body: "Repairs, installs, and finishing done right the first time. Our handymen show up on time, protect your space, and leave it clean — the details are the whole job.",
    bullets: ["Repairs, installs & finishing", "On-time, tidy workmanship", "Backed by our team"],
    cta: { label: "Book a handyman", href: ROUTES.seoLanding.handyman },
    video: {
      src: "/videos/feature-handyman.mp4",
      poster: "/videos/posters/feature-handyman.webp",
      ...FEATURE_DIMS,
    },
    treatment: "loop",
  },
];

const CARD_DIMS = { width: 960, height: 720 };

/** Poster-first hover/modal videos for the 8 mapped service cards. */
export const CARD_VIDEOS: Partial<Record<ServiceSlug, VideoAsset>> = {
  handyman: {
    src: "/videos/card-handyman.mp4",
    poster: "/videos/posters/card-handyman.webp",
    ...CARD_DIMS,
  },
  plumbers: {
    src: "/videos/card-plumbing.mp4",
    poster: "/videos/posters/card-plumbing.webp",
    ...CARD_DIMS,
  },
  electricians: {
    src: "/videos/card-electrical.mp4",
    poster: "/videos/posters/card-electrical.webp",
    ...CARD_DIMS,
  },
  cleaners: {
    src: "/videos/card-cleaning.mp4",
    poster: "/videos/posters/card-cleaning.webp",
    ...CARD_DIMS,
  },
  painters: {
    src: "/videos/card-painting.mp4",
    poster: "/videos/posters/card-painting.webp",
    ...CARD_DIMS,
  },
  "furniture-assembly": {
    src: "/videos/card-furniture.mp4",
    poster: "/videos/posters/card-furniture.webp",
    ...CARD_DIMS,
  },
  "tv-wall-mounting": {
    src: "/videos/card-tv-mounting.mp4",
    poster: "/videos/posters/card-tv-mounting.webp",
    ...CARD_DIMS,
  },
  "move-in-move-out-repairs": {
    src: "/videos/card-move-in-out.mp4",
    poster: "/videos/posters/card-move-in-out.webp",
    ...CARD_DIMS,
  },
  "home-maintenance": {
    src: "/videos/card-house-condo.mp4",
    poster: "/videos/posters/card-house-condo.webp",
    ...CARD_DIMS,
  },
};

export interface ReelItem extends VideoAsset {
  id: string;
  label: string;
}

const REEL_DIMS = { width: 720, height: 1280 };

/** "Work in action" vertical reel — leftover portrait clips only. */
export const REEL_ITEMS: ReelItem[] = [
  { id: "house-condo", label: "House & condo care", src: "/videos/reel-house-condo.mp4", poster: "/videos/posters/reel-house-condo.webp", ...REEL_DIMS },
  { id: "cleaning", label: "Deep cleaning", src: "/videos/reel-cleaning.mp4", poster: "/videos/posters/reel-cleaning.webp", ...REEL_DIMS },
  { id: "furniture", label: "Furniture assembly", src: "/videos/reel-furniture.mp4", poster: "/videos/posters/reel-furniture.webp", ...REEL_DIMS },
  { id: "tv-mounting", label: "TV wall mounting", src: "/videos/reel-tv-mounting.mp4", poster: "/videos/posters/reel-tv-mounting.webp", ...REEL_DIMS },
  { id: "furniture-2", label: "Flat-pack builds", src: "/videos/reel-furniture-2.mp4", poster: "/videos/posters/reel-furniture-2.webp", ...REEL_DIMS },
  { id: "house-condo-2", label: "Move-in ready", src: "/videos/reel-house-condo-2.mp4", poster: "/videos/posters/reel-house-condo-2.webp", ...REEL_DIMS },
];
