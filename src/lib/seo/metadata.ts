import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { SEO } from "@/constants/app";
import { absoluteUrl } from "@/lib/utils/format";
import type { PageMetadata } from "@/types/seo";

type BuildMetadataOptions = PageMetadata & {
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
};

/**
 * Central metadata builder — use in every page's `generateMetadata` or `metadata` export.
 */
export function buildMetadata(options: BuildMetadataOptions): Metadata {
  const {
    title,
    description,
    path,
    keywords = [],
    noIndex = false,
    ogImage,
    type = "website",
    publishedTime,
    modifiedTime,
  } = options;

  const canonical = absoluteUrl(path, siteConfig.url);
  const fullTitle =
    title === siteConfig.name ? SEO.defaultTitle : `${title} | ${siteConfig.shortName}`;
  const imageUrl = ogImage
    ? absoluteUrl(ogImage, siteConfig.url)
    : absoluteUrl("/images/og/default.jpg", siteConfig.url);

  return {
    title: fullTitle,
    description: description.slice(0, SEO.maxDescriptionLength),
    keywords: keywords.length > 0 ? keywords : undefined,
    alternates: { canonical },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      type,
      locale: siteConfig.locale.replace("_", "-"),
      url: canonical,
      siteName: siteConfig.name,
      title: fullTitle,
      description,
      images: [
        {
          url: imageUrl,
          width: SEO.ogImageWidth,
          height: SEO.ogImageHeight,
          alt: title,
        },
      ],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [imageUrl],
    },
  };
}

/** Default root metadata for layout.tsx */
export function getRootMetadata(): Metadata {
  return buildMetadata({
    title: siteConfig.name,
    description: siteConfig.description,
    path: "/",
    keywords: [
      "home services Edmonton",
      "handyman Edmonton",
      "contractors Edmonton",
      "home renovation Edmonton",
    ],
  });
}
