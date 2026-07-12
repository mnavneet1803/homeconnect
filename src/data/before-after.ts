/**
 * Before & After gallery data.
 * Prefer true before/after job pairs under /public/images/before-after/.
 * Until dedicated pairs are uploaded, "after" may point at existing work photos
 * and "before" remains a documented placeholder path.
 */

export interface BeforeAfterImage {
  /** Public path under /public */
  src: string;
  alt: string;
  /** true when this is still a TODO placeholder path (file may not exist yet) */
  placeholder?: boolean;
}

export interface BeforeAfterPair {
  id: string;
  service: string;
  area: string;
  caption: string;
  before: BeforeAfterImage;
  after: BeforeAfterImage;
}

const BA = "/images/before-after";
const EXISTING = {
  furniture: "/images/homepage/furniture-assembly-workshop.jpg",
  painting: "/images/projects/interior-paint.jpg",
  drywall: "/images/services/move-out-move-in-repairs-before-after.png",
  cleaning: "/images/services/move-in-move-out-cleaning-edmonton.png",
  shed: "/images/homepage/furniture-assembly-workshop.jpg",
} as const;

/**
 * Exact filenames still needed for true before/after pairs
 * (upload into public/images/before-after/):
 * - furniture-assembly-before.webp / furniture-assembly-after.webp
 * - painting-before.webp / painting-after.webp
 * - drywall-repair-before.webp / drywall-repair-after.webp
 * - shed-assembly-before.webp / shed-assembly-after.webp
 * - cleaning-before.webp / cleaning-after.webp
 */
export const BEFORE_AFTER_NEEDED_FILES = [
  `${BA}/furniture-assembly-before.webp`,
  `${BA}/furniture-assembly-after.webp`,
  `${BA}/painting-before.webp`,
  `${BA}/painting-after.webp`,
  `${BA}/drywall-repair-before.webp`,
  `${BA}/drywall-repair-after.webp`,
  `${BA}/shed-assembly-before.webp`,
  `${BA}/shed-assembly-after.webp`,
  `${BA}/cleaning-before.webp`,
  `${BA}/cleaning-after.webp`,
] as const;

export const beforeAfterPairs: BeforeAfterPair[] = [
  {
    id: "furniture-assembly",
    service: "Furniture & shed assembly",
    area: "Edmonton",
    caption: "Flat-pack furniture built square and secured in an Edmonton home.",
    before: {
      src: `${BA}/furniture-assembly-before.webp`,
      alt: "Furniture parts before assembly in Edmonton",
      placeholder: true,
    },
    after: {
      src: EXISTING.furniture,
      alt: "Completed furniture assembly in an Edmonton home",
    },
  },
  {
    id: "painting",
    service: "Painting & drywall",
    area: "Edmonton",
    caption: "Wall repairs and fresh paint with clean lines and careful prep.",
    before: {
      src: `${BA}/painting-before.webp`,
      alt: "Room walls before painting in Edmonton",
      placeholder: true,
    },
    after: {
      src: EXISTING.painting,
      alt: "Freshly painted interior in an Edmonton home",
    },
  },
  {
    id: "drywall-repair",
    service: "Painting & drywall",
    area: "Edmonton",
    caption: "Drywall patched and finished as part of our painting service.",
    before: {
      src: `${BA}/drywall-repair-before.webp`,
      alt: "Damaged drywall before repair in Edmonton",
      placeholder: true,
    },
    after: {
      src: EXISTING.drywall,
      alt: "Drywall and wall repairs completed in Edmonton",
    },
  },
  {
    id: "shed-assembly",
    service: "Furniture & shed assembly",
    area: "Capital Region",
    caption: "Outdoor storage kits assembled square, level, and secure.",
    before: {
      src: `${BA}/shed-assembly-before.webp`,
      alt: "Shed kit before assembly",
      placeholder: true,
    },
    after: {
      src: EXISTING.shed,
      alt: "Assembled outdoor storage / shed project — temporary stand-in until shed job photo is uploaded",
    },
  },
  {
    id: "cleaning",
    service: "Cleaning",
    area: "Edmonton",
    caption: "Deep cleaning for homes and rentals — kitchens, baths, and floors.",
    before: {
      src: `${BA}/cleaning-before.webp`,
      alt: "Space before professional cleaning in Edmonton",
      placeholder: true,
    },
    after: {
      src: EXISTING.cleaning,
      alt: "Professionally cleaned Edmonton home ready for move-in",
    },
  },
];
