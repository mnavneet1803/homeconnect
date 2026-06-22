import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { SEO } from "@/constants/app";
import {
  DEFAULT_OG_IMAGE,
  DEFAULT_OG_IMAGE_ALT,
  DEFAULT_OG_IMAGE_HEIGHT,
  DEFAULT_OG_IMAGE_TYPE,
  DEFAULT_OG_IMAGE_WIDTH,
  TWITTER_SITE,
} from "@/constants/seo-social";
import { absoluteUrl } from "@/lib/utils/format";
import type { PageMetadata } from "@/types/seo";

type BuildMetadataOptions = PageMetadata & {
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  /** Open Graph / Twitter title (defaults to page title with site name) */
  ogTitle?: string;
  /** Open Graph / Twitter description (defaults to meta description) */
  ogDescription?: string;
};

function formatOgLocale(locale: string): string {
  return locale.replace("_", "-");
}

/** Absolute HTTPS URL for an OG image path */
export function resolveOgImageUrl(imagePath?: string): string {
  return absoluteUrl(imagePath ?? DEFAULT_OG_IMAGE, siteConfig.url);
}

function buildOpenGraphImages(
  imageUrl: string,
  alt: string,
  width = DEFAULT_OG_IMAGE_WIDTH,
  height = DEFAULT_OG_IMAGE_HEIGHT
): NonNullable<NonNullable<Metadata["openGraph"]>["images"]> {
  return [
    {
      url: imageUrl,
      secureUrl: imageUrl,
      width,
      height,
      alt,
      type: DEFAULT_OG_IMAGE_TYPE,
    },
  ];
}

/**
 * Central metadata builder — use in every page's `generateMetadata` or `metadata` export.
 *
 * Generates Open Graph tags (WhatsApp, Facebook, LinkedIn) and Twitter Card metadata
 * with absolute canonical URLs and a 1200×630 default share image.
 */
export function buildMetadata(options: BuildMetadataOptions): Metadata {
  const {
    title,
    description,
    path,
    keywords = [],
    noIndex = false,
    ogImage,
    ogImageAlt,
    ogTitle,
    ogDescription,
    type = "website",
    publishedTime,
    modifiedTime,
  } = options;

  const canonical = absoluteUrl(path, siteConfig.url);
  const fullTitle =
    title === siteConfig.name ? SEO.defaultTitle : `${title} | ${siteConfig.shortName}`;
  const metaDescription = description.slice(0, SEO.maxDescriptionLength);
  const shareTitle = ogTitle ?? fullTitle;
  const shareDescription = (ogDescription ?? metaDescription).slice(
    0,
    SEO.maxDescriptionLength
  );
  const imageUrl = resolveOgImageUrl(ogImage);
  const imageAlt = ogImageAlt ?? DEFAULT_OG_IMAGE_ALT;

  const openGraphImages = buildOpenGraphImages(imageUrl, imageAlt);

  return {
    metadataBase: new URL(siteConfig.url),
    title: fullTitle,
    description: metaDescription,
    keywords: keywords.length > 0 ? keywords : undefined,
    applicationName: siteConfig.name,
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    alternates: {
      canonical,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, googleBot: { index: true, follow: true } },
    openGraph: {
      type,
      locale: formatOgLocale(siteConfig.locale),
      url: canonical,
      siteName: siteConfig.name,
      title: shareTitle,
      description: shareDescription,
      images: openGraphImages,
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },
    twitter: {
      card: "summary_large_image",
      title: shareTitle,
      description: shareDescription,
      images: openGraphImages,
      ...(TWITTER_SITE && { site: TWITTER_SITE, creator: TWITTER_SITE }),
    },
    other: {
      // LinkedIn reads standard OG tags; explicit image dimensions help some crawlers
      "og:image:width": String(DEFAULT_OG_IMAGE_WIDTH),
      "og:image:height": String(DEFAULT_OG_IMAGE_HEIGHT),
    },
  };
}

/** Default root metadata for layout.tsx */
export function getRootMetadata(): Metadata {
  return {
    ...buildMetadata({
      title: siteConfig.name,
      description: siteConfig.description,
      path: "/",
      ogTitle: SEO.defaultTitle,
      ogDescription: siteConfig.description,
      ogImageAlt: DEFAULT_OG_IMAGE_ALT,
      keywords: [
        "home services Edmonton",
        "handyman Edmonton",
        "contractors Edmonton",
        "home renovation Edmonton",
        "cleaning services Edmonton",
      ],
    }),
    icons: {
      icon: [
        { url: siteConfig.brand.logoIcon.src, sizes: "512x512", type: "image/png" },
        { url: "/images/brand/favicon-32.png", sizes: "32x32", type: "image/png" },
      ],
      apple: "/images/brand/apple-touch-icon.png",
    },
  };
}
