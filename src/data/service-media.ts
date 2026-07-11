/**
 * Per-service video media (primary clip + short gallery) for service detail and
 * SEO landing pages. Reuses homepage web encodes from /public/videos and adds a
 * few gallery-only encodes (gallery-*). See scripts/encode-homepage-media.ps1.
 */

import type { ServiceSlug } from "@/constants/services";
import { CARD_VIDEOS, type VideoAsset } from "@/data/homepage-media";

const L = { width: 1280, height: 720 };
const P = { width: 720, height: 1280 };

const V = (file: string, dims: { width: number; height: number }): VideoAsset => ({
  src: `/videos/${file}.mp4`,
  poster: `/videos/posters/${file}.webp`,
  ...dims,
});

export interface ServiceVideoMedia {
  primary: VideoAsset;
  gallery: VideoAsset[];
}

export function isPortrait(asset: VideoAsset): boolean {
  return asset.height > asset.width;
}

/** service detail template pages (ROUTES.services.detail) */
export const SERVICE_PAGE_MEDIA: Partial<Record<ServiceSlug, ServiceVideoMedia>> = {
  plumbers: {
    primary: CARD_VIDEOS.plumbers!,
    gallery: [V("gallery-plumbing", L)],
  },
  electricians: {
    primary: CARD_VIDEOS.electricians!,
    gallery: [V("gallery-electrical", P)],
  },
  cleaners: {
    primary: CARD_VIDEOS.cleaners!,
    gallery: [V("reel-cleaning", P), V("feature-cleaning", L)],
  },
  painters: {
    primary: CARD_VIDEOS.painters!,
    gallery: [],
  },
  "home-maintenance": {
    primary: V("reel-house-condo", P),
    gallery: [V("reel-house-condo-2", P)],
  },
};

/** SEO landing template pages (keyed by landing slug) */
export const SEO_LANDING_MEDIA: Record<string, ServiceVideoMedia> = {
  "handyman-services-edmonton": {
    primary: V("feature-handyman", L),
    gallery: [V("gallery-handyman-4", L), CARD_VIDEOS.handyman!],
  },
  "tv-wall-mounting-edmonton": {
    primary: CARD_VIDEOS["tv-wall-mounting"]!,
    gallery: [V("reel-tv-mounting", P)],
  },
  "furniture-assembly-edmonton": {
    primary: CARD_VIDEOS["furniture-assembly"]!,
    gallery: [V("reel-furniture", P), V("reel-furniture-2", P)],
  },
  "move-in-move-out-repairs-edmonton": {
    primary: CARD_VIDEOS["move-in-move-out-repairs"]!,
    gallery: [V("feature-move-in-out", L)],
  },
};

export function getServicePageMedia(slug: ServiceSlug): ServiceVideoMedia | null {
  return SERVICE_PAGE_MEDIA[slug] ?? null;
}

export function getSeoLandingMedia(slug: string): ServiceVideoMedia | null {
  return SEO_LANDING_MEDIA[slug] ?? null;
}
