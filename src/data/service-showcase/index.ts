/**
 * Service showcase imagery — real marketing/service visuals used across the
 * homepage gallery, service detail pages, and the Before & After section.
 */

import type { ServiceSlug } from "@/constants/services";

export interface ShowcaseImage {
  /** Public path under /public */
  src: string;
  /** SEO-friendly, descriptive alt text */
  alt: string;
  /** Card heading */
  title: string;
  /** Short supporting caption */
  caption: string;
  /** Intrinsic pixel width */
  width: number;
  /** Intrinsic pixel height */
  height: number;
}

export interface ServicePageImages {
  /** Primary visual beside the service hero copy */
  hero: ShowcaseImage;
  /** Supporting visual in the service details section */
  detail: ShowcaseImage;
}

const DIR = "/images/services";
const HOMEPAGE_DIR = "/images/homepage";

/** Main "Services we offer" visual gallery. */
export const serviceShowcase: ShowcaseImage[] = [
  {
    src: `${DIR}/handyman-repair-services-overview.png`,
    alt: "Edmonton handyman fixing a light fixture, plumbing, electrical, furniture assembly and door repairs",
    title: "Handyman & repairs",
    caption: "Big or small, we do it all — repairs, plumbing, electrical, doors and more.",
    width: 1024,
    height: 682,
  },
  {
    src: `${DIR}/complete-home-care-edmonton.png`,
    alt: "Complete home care in Edmonton — move out and move in repair, maintenance, and cleaning",
    title: "Complete home care",
    caption: "Move-in/out repairs, preventative maintenance, and cleaning under one roof.",
    width: 643,
    height: 348,
  },
  {
    src: `${DIR}/home-maintenance-repairs-edmonton.png`,
    alt: "Edmonton home maintenance — fixing leaks, tightening hinges, wall patching, and electrical fixes",
    title: "Home maintenance",
    caption: "Small fixes, big difference — leaks, hinges, wall patches, switches and more.",
    width: 1024,
    height: 682,
  },
  {
    src: `${DIR}/move-in-move-out-cleaning-edmonton.png`,
    alt: "Move in and move out cleaning in Edmonton for houses, condos and apartments",
    title: "Move in / move out cleaning",
    caption: "Spotless houses, condos and apartments — deep clean, kitchen, bathroom and floors.",
    width: 1024,
    height: 682,
  },
  {
    src: `${DIR}/tv-wall-mount-stereo-installation.png`,
    alt: "Professional TV wall mounting and stereo system installation in Edmonton homes",
    title: "TV mounting & stereo",
    caption: "Secure TV wall mounting and home theatre setup with clean, concealed wiring.",
    width: 627,
    height: 352,
  },
  {
    src: `${DIR}/computer-printer-setup-software.png`,
    alt: "Computer, printer and software setup service for Edmonton homes and small business",
    title: "Computer & printer setup",
    caption: "Computer, printer, Wi‑Fi and software setup — works with all major brands.",
    width: 1024,
    height: 682,
  },
];

/** Slim full-width banner used above the gallery. */
export const repairServicesStrip: ShowcaseImage = {
  src: `${DIR}/repair-services-strip.png`,
  alt: "Furniture assembly, electrical repairs, drywall repair and door & lock fixing services in Edmonton",
  title: "What we fix",
  caption: "Furniture assembly · Electrical · Drywall · Doors & locks",
  width: 1024,
  height: 151,
};

/** Hero visual for the Before & After / Real Repairs section. */
export const beforeAfterRepairs: ShowcaseImage = {
  src: `${HOMEPAGE_DIR}/move-in-move-out-repairs.jpg`,
  alt: "Move-out and move-in repairs in Edmonton — hole and dent repair, baseboard fixes, scratch removal and touch-up painting",
  title: "Move-out & move-in repairs",
  caption:
    "Holes, dents, scuffs and damaged baseboards — repaired and repainted so your place looks move-in perfect.",
  width: 1024,
  height: 682,
};

/** On-brand promo banner for the conversion CTA band. */
export const handymanPromo: ShowcaseImage = {
  src: `${DIR}/handyman-services-edmonton.png`,
  alt: "Home Solution Services handyman fixing kitchen cabinets in an Edmonton home — we fix it, you relax",
  title: "We fix it, you relax",
  caption: "Reliable, professional, affordable and on time.",
  width: 859,
  height: 573,
};

const handymanOverview: ShowcaseImage = {
  src: `${DIR}/handyman-repair-services-overview.png`,
  alt: "Edmonton handyman services — repairs, installs, plumbing, electrical and door fixes",
  title: "Handyman services",
  caption: "Professional handyman work across Edmonton.",
  width: 1024,
  height: 682,
};

const homeMaintenance: ShowcaseImage = {
  src: `${DIR}/home-maintenance-repairs-edmonton.png`,
  alt: "Edmonton home maintenance — leaks, hinges, wall patches and electrical fixes",
  title: "Home maintenance",
  caption: "Preventative upkeep for Edmonton homes.",
  width: 1024,
  height: 682,
};

const completeHomeCare: ShowcaseImage = {
  src: `${DIR}/complete-home-care-edmonton.png`,
  alt: "Complete home care in Edmonton — repairs, maintenance and cleaning",
  title: "Complete home care",
  caption: "One team for move-in, maintenance and cleaning.",
  width: 643,
  height: 348,
};

const moveInOutCleaning: ShowcaseImage = {
  src: `${DIR}/move-in-move-out-cleaning-edmonton.png`,
  alt: "Move in and move out cleaning in Edmonton for houses, condos and apartments",
  title: "Move in / move out cleaning",
  caption: "Deep cleaning for Edmonton homes and rentals.",
  width: 1024,
  height: 682,
};

const beforeAfter: ShowcaseImage = beforeAfterRepairs;

const repairStrip: ShowcaseImage = repairServicesStrip;

const tvMount: ShowcaseImage = {
  src: `${DIR}/tv-wall-mount-stereo-installation.png`,
  alt: "TV wall mounting and home theatre setup in Edmonton",
  title: "TV & wall mounting",
  caption: "Professional AV installation with clean wiring.",
  width: 627,
  height: 352,
};

/** Per-service hero + detail imagery for `/services/[slug]` pages. */
const SERVICE_PAGE_IMAGES: Record<ServiceSlug, ServicePageImages> = {
  handyman: {
    hero: {
      src: `${HOMEPAGE_DIR}/handyman-services-banner.png`,
      alt: "Edmonton handyman services — furniture assembly, TV mounting, drywall, painting, plumbing, electrical and general repairs",
      title: "Handyman services",
      caption: "Professional handyman work across Edmonton.",
      width: 1024,
      height: 709,
    },
    detail: handymanOverview,
  },
  "tv-wall-mounting": {
    hero: tvMount,
    detail: handymanOverview,
  },
  "furniture-assembly": {
    hero: {
      src: `${HOMEPAGE_DIR}/furniture-assembly-workshop.jpg`,
      alt: "Canadian furniture assembly service in Edmonton — IKEA, JYSK, Wayfair, The Brick and more leading brands",
      title: "Furniture assembly",
      caption: "Fast, precise assembly from every major retailer.",
      width: 1024,
      height: 558,
    },
    detail: handymanPromo,
  },
  "move-in-move-out-repairs": {
    hero: beforeAfter,
    detail: handymanOverview,
  },
  painters: {
    hero: {
      src: `${HOMEPAGE_DIR}/painting-renovation-collage.png`,
      alt: "Edmonton painting and renovation work — interior painting, exterior siding, fencing, deck building and finishing",
      title: "Painting & touch-ups",
      caption: "Smooth walls and flawless finishes for Edmonton homes.",
      width: 1024,
      height: 558,
    },
    detail: repairStrip,
  },
  renovators: {
    hero: {
      src: `${HOMEPAGE_DIR}/modern-kitchen.png`,
      alt: "Spotless modern kitchen after professional renovation and home maintenance in Edmonton",
      title: "Renovation services",
      caption: "Quality home improvements across the Capital Region.",
      width: 1024,
      height: 664,
    },
    detail: beforeAfter,
  },
  flooring: {
    hero: handymanOverview,
    detail: {
      ...homeMaintenance,
      alt: "Edmonton flooring and home repair services — professional installation and maintenance",
      title: "Flooring & installs",
      caption: "Quality flooring work across the Capital Region.",
    },
  },
  electricians: {
    hero: {
      ...repairStrip,
      alt: "Edmonton electrical repair services — outlet, switch and wiring fixes by professional technicians",
      title: "Electrical repairs",
      caption: "Safe, code-compliant electrical work in Edmonton.",
    },
    detail: homeMaintenance,
  },
  plumbers: {
    hero: {
      ...homeMaintenance,
      alt: "Edmonton plumbing repairs — fixing leaks, taps and pipes by Home Solution Services",
      title: "Plumbing repairs",
      caption: "Fast leak fixes and fixture repairs in Edmonton.",
    },
    detail: handymanOverview,
  },
  cleaners: {
    hero: {
      src: `${HOMEPAGE_DIR}/cleaning-services-banner.png`,
      alt: "Professional cleaning services in Edmonton — reliable, thorough and affordable for homes, apartments, condos and businesses",
      title: "Cleaning services",
      caption: "Deep cleaning for Edmonton homes and rentals.",
      width: 807,
      height: 532,
    },
    detail: completeHomeCare,
  },
  landscapers: {
    hero: completeHomeCare,
    detail: handymanOverview,
  },
  "deck-fence": {
    hero: handymanOverview,
    detail: {
      ...handymanPromo,
      alt: "Edmonton deck and fence building and repair by Home Solution Services",
      title: "Deck & fence work",
      caption: "Builds, repairs and staining across Edmonton.",
    },
  },
  "home-maintenance": {
    hero: homeMaintenance,
    detail: completeHomeCare,
  },
  "drywall-repair": {
    hero: {
      ...repairStrip,
      alt: "Drywall repair and wall patching in Edmonton homes by Home Solution Services",
      title: "Drywall repair",
      caption: "Clean patches, smooth seams, paint-ready walls.",
    },
    detail: handymanOverview,
  },
  "shed-assembly": {
    hero: {
      src: `${HOMEPAGE_DIR}/furniture-assembly-workshop.jpg`,
      alt: "Shed and outdoor storage assembly in Edmonton by Home Solution Services",
      title: "Shed assembly",
      caption: "Garden sheds and outdoor storage — part of our furniture & shed assembly service.",
      width: 1024,
      height: 558,
    },
    detail: handymanPromo,
  },
};

/** Resolve hero + detail images for a service detail page. */
export function getServicePageImages(slug: ServiceSlug): ServicePageImages {
  return SERVICE_PAGE_IMAGES[slug];
}

/**
 * Thumbnail image shown on the homepage service-card grid (one per service).
 * Cards crop to a fixed **3:2** frame (`object-cover`). Prefer assets near **1200×800**.
 */
export const SERVICE_CARD_IMAGES: Record<
  ServiceSlug,
  { src: string; alt: string; width: number; height: number }
> = {
  handyman: {
    src: `${DIR}/handyman-repair-services-overview.png`,
    alt: "Edmonton handyman services — repairs, installs, plumbing, electrical and more",
    width: 1024,
    height: 709,
  },
  "tv-wall-mounting": {
    src: `${DIR}/tv-wall-mount-stereo-installation.png`,
    alt: "Professional TV wall mounting in an Edmonton home — Home Solution Services",
    width: 627,
    height: 352,
  },
  "furniture-assembly": {
    src: `${HOMEPAGE_DIR}/furniture-assembly-workshop.jpg`,
    alt: "Canadian furniture assembly service in Edmonton — IKEA, JYSK, Wayfair, The Brick and more leading brands",
    width: 1024,
    height: 558,
  },
  painters: {
    src: `${HOMEPAGE_DIR}/painting-renovation-collage.png`,
    alt: "Edmonton interior and exterior painting, fencing, decking and renovation work",
    width: 1024,
    height: 558,
  },
  renovators: {
    src: `${HOMEPAGE_DIR}/modern-kitchen.png`,
    alt: "Modern kitchen renovation and home improvement in Edmonton",
    width: 1024,
    height: 664,
  },
  flooring: {
    src: `${HOMEPAGE_DIR}/modern-kitchen.png`,
    alt: "Edmonton flooring installation and home repair services — tile, hardwood and laminate",
    width: 1024,
    height: 664,
  },
  electricians: {
    src: `${HOMEPAGE_DIR}/handyman-services-banner.png`,
    alt: "Edmonton electrical maintenance — outlets, switches and wiring fixes",
    width: 1024,
    height: 709,
  },
  plumbers: {
    src: `${HOMEPAGE_DIR}/handyman-services-banner.png`,
    alt: "Edmonton plumbing maintenance — fixing leaks, taps and pipes",
    width: 1024,
    height: 709,
  },
  "move-in-move-out-repairs": {
    src: `${HOMEPAGE_DIR}/move-in-move-out-repairs.jpg`,
    alt: "Move-out and move-in repairs in Edmonton — hole and dent repair, baseboard fixes, scratch removal and touch-up painting",
    width: 1024,
    height: 682,
  },
  cleaners: {
    src: `${HOMEPAGE_DIR}/cleaning-move-in-move-out.jpg`,
    alt: "Move-in and move-out cleaning for houses, condos and apartments in Edmonton — deep cleaning, kitchen, bathroom, floors and more",
    width: 1024,
    height: 682,
  },
  landscapers: {
    src: `${HOMEPAGE_DIR}/painting-renovation-collage.png`,
    alt: "Exterior home improvements including fencing, decking and landscaping in Edmonton",
    width: 1024,
    height: 558,
  },
  "deck-fence": {
    src: `${HOMEPAGE_DIR}/painting-renovation-collage.png`,
    alt: "Custom deck build and fence installation in Edmonton by Home Solution Services",
    width: 1024,
    height: 558,
  },
  "home-maintenance": {
    src: `${HOMEPAGE_DIR}/post-construction-cleaning.png`,
    alt: "Preventative home maintenance and post-construction cleaning in Edmonton",
    width: 248,
    height: 176,
  },
  "drywall-repair": {
    src: `${DIR}/handyman-repair-services-overview.png`,
    alt: "Drywall repair and wall patching services in Edmonton",
    width: 1024,
    height: 709,
  },
  "shed-assembly": {
    src: `${HOMEPAGE_DIR}/furniture-assembly-workshop.jpg`,
    alt: "Shed and outdoor storage assembly in Edmonton",
    width: 1024,
    height: 558,
  },
};
