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
    width: 1024,
    height: 682,
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
  src: `${DIR}/move-out-move-in-repairs-before-after.png`,
  alt: "Before and after wall and baseboard repairs for an Edmonton move out and move in",
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
  width: 1024,
  height: 682,
};

/** Per-service hero + detail imagery for `/services/[slug]` pages. */
const SERVICE_PAGE_IMAGES: Record<ServiceSlug, ServicePageImages> = {
  handyman: {
    hero: handymanPromo,
    detail: handymanOverview,
  },
  painters: {
    hero: {
      ...beforeAfter,
      alt: "Before and after interior painting and wall repair in Edmonton — touch-up painting by Home Solution Services",
      title: "Painting & touch-ups",
      caption: "Smooth walls and flawless finishes for Edmonton homes.",
    },
    detail: repairStrip,
  },
  renovators: {
    hero: completeHomeCare,
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
      alt: "Edmonton electrical repair services — outlet, switch and wiring fixes by licensed technicians",
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
    hero: moveInOutCleaning,
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
};

/** Resolve hero + detail images for a service detail page. */
export function getServicePageImages(slug: ServiceSlug): ServicePageImages {
  return SERVICE_PAGE_IMAGES[slug];
}

/** Thumbnail image shown on the homepage service-card grid (one per service). */
export const SERVICE_CARD_IMAGES: Record<
  ServiceSlug,
  { src: string; alt: string; width: number; height: number }
> = {
  handyman: {
    src: `${DIR}/handyman-services-edmonton.png`,
    alt: "Handyman fixing kitchen cabinet in an Edmonton home — Home Solution Services",
    width: 859,
    height: 573,
  },
  painters: {
    src: "/images/projects/interior-paint.jpg",
    alt: "Freshly painted room interior in Edmonton — professional interior painting service",
    width: 800,
    height: 600,
  },
  renovators: {
    src: "/images/projects/basement-reno.jpg",
    alt: "Finished basement renovation in Edmonton — kitchen, bathroom and living space reno",
    width: 800,
    height: 600,
  },
  flooring: {
    src: `${DIR}/home-maintenance-repairs-edmonton.png`,
    alt: "Edmonton flooring installation and home repair services — tile, hardwood and laminate",
    width: 1024,
    height: 682,
  },
  electricians: {
    src: `${DIR}/handyman-repair-services-overview.png`,
    alt: "Edmonton electrical repair services — outlets, switches and wiring fixes",
    width: 1024,
    height: 682,
  },
  plumbers: {
    src: `${DIR}/home-maintenance-repairs-edmonton.png`,
    alt: "Edmonton plumbing repairs — fixing leaks, taps and pipes by Home Solution Services",
    width: 1024,
    height: 682,
  },
  cleaners: {
    src: `${DIR}/move-in-move-out-cleaning-edmonton.png`,
    alt: "Move-in and move-out deep cleaning service for Edmonton homes and condos",
    width: 1024,
    height: 682,
  },
  landscapers: {
    src: `${DIR}/complete-home-care-edmonton.png`,
    alt: "Complete home care including landscaping and outdoor maintenance in Edmonton",
    width: 643,
    height: 348,
  },
  "deck-fence": {
    src: "/images/projects/deck-build.jpg",
    alt: "Custom deck build and fence installation in Edmonton by Home Solution Services",
    width: 800,
    height: 600,
  },
  "home-maintenance": {
    src: `${DIR}/handyman-repair-services-overview.png`,
    alt: "Preventative home maintenance services in Edmonton — repairs, upkeep and inspections",
    width: 1024,
    height: 682,
  },
};
