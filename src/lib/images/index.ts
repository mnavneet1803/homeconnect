import type { StaticImageData } from "next/image";

/** Image categories — maps to /public/images/{category}/ */
export const IMAGE_CATEGORIES = {
  brand: "brand",
  services: "services",
  projects: "projects",
  locations: "locations",
  og: "og",
  heroes: "heroes",
  placeholders: "placeholders",
} as const;

export type ImageCategory =
  (typeof IMAGE_CATEGORIES)[keyof typeof IMAGE_CATEGORIES];

/** Standard aspect ratios for consistent layouts */
export const IMAGE_ASPECTS = {
  hero: { width: 16, height: 9 },
  card: { width: 4, height: 3 },
  square: { width: 1, height: 1 },
  og: { width: 1200, height: 630 },
  avatar: { width: 1, height: 1 },
} as const;

type ImageSource = string | StaticImageData;

interface ImagePropsInput {
  src: ImageSource;
  alt: string;
  category?: ImageCategory;
  priority?: boolean;
  sizes?: string;
  aspect?: keyof typeof IMAGE_ASPECTS;
}

/** Responsive sizes presets by layout context */
export const IMAGE_SIZES = {
  hero: "(max-width: 768px) 100vw, 50vw",
  card: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  thumbnail: "96px",
  avatar: "40px",
  full: "100vw",
} as const;

/**
 * Build consistent next/image props.
 * Use with `<Image {...getImageProps({...})} />`.
 */
export function getImageProps({
  src,
  alt,
  priority = false,
  sizes = IMAGE_SIZES.card,
  aspect = "card",
}: ImagePropsInput) {
  const { width, height } = IMAGE_ASPECTS[aspect];
  const baseWidth = aspect === "og" ? 1200 : 800;
  const baseHeight = Math.round(baseWidth * (height / width));

  if (typeof src === "string") {
    return {
      src,
      alt,
      width: baseWidth,
      height: baseHeight,
      sizes,
      priority,
      quality: priority ? 90 : 80,
    };
  }

  return {
    src,
    alt,
    sizes,
    priority,
    quality: priority ? 90 : 80,
    placeholder: "blur" as const,
  };
}

/** Resolve public image path by category */
export function publicImagePath(
  category: ImageCategory,
  filename: string
): string {
  return `/images/${category}/${filename}`;
}

/** OG image path for a page type */
export function getOgImagePath(slug?: string): string {
  if (!slug) return publicImagePath("og", "default.jpg");
  return publicImagePath("og", `${slug}.jpg`);
}
