import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { ROUTES } from "@/constants/routes";
import { SEO_SERVICE_SLUGS } from "@/data/services/pages";
import { getServiceLocationPages } from "@/data/services/locations";
import { getAllNeighbourhoodPages } from "@/data/locations/neighbourhoods";
import { getAllLocationSlugs } from "@/data";
import { SEO_LANDING_PAGES } from "@/data/seo-landing";
import { getAllBlogPosts } from "@/data/blog/posts";
import { absoluteUrl } from "@/lib/utils/format";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: absoluteUrl("/", baseUrl), lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: absoluteUrl(ROUTES.quote, baseUrl), lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: absoluteUrl(ROUTES.howItWorks, baseUrl), lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: absoluteUrl(ROUTES.about, baseUrl), lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: absoluteUrl(ROUTES.vetting, baseUrl), lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: absoluteUrl(ROUTES.faq, baseUrl), lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: absoluteUrl(ROUTES.contact, baseUrl), lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: absoluteUrl(ROUTES.reviews, baseUrl), lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: absoluteUrl(ROUTES.blog.index, baseUrl), lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: absoluteUrl(ROUTES.services.index, baseUrl), lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: absoluteUrl(ROUTES.locations.index, baseUrl), lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: absoluteUrl(ROUTES.legal.privacy, baseUrl), lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: absoluteUrl(ROUTES.legal.terms, baseUrl), lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: absoluteUrl(ROUTES.legal.disclaimer, baseUrl), lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = SEO_SERVICE_SLUGS.map((slug) => ({
    url: absoluteUrl(ROUTES.services.detail(slug), baseUrl),
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const serviceLocationRoutes: MetadataRoute.Sitemap = getServiceLocationPages().map(
    (p) => ({
      url: absoluteUrl(p.href, baseUrl),
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.85,
    })
  );

  const locationRoutes: MetadataRoute.Sitemap = getAllLocationSlugs().map((slug) => ({
    url: absoluteUrl(ROUTES.locations.detail(slug), baseUrl),
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const neighbourhoodRoutes: MetadataRoute.Sitemap = getAllNeighbourhoodPages().map(
    (p) => ({
      url: absoluteUrl(p.href, baseUrl),
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.75,
    })
  );

  const seoLandingRoutes: MetadataRoute.Sitemap = Object.values(SEO_LANDING_PAGES).map(
    (page) => ({
      url: absoluteUrl(page.path, baseUrl),
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })
  );

  const blogRoutes: MetadataRoute.Sitemap = getAllBlogPosts().map((post) => ({
    url: absoluteUrl(ROUTES.blog.detail(post.slug), baseUrl),
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.65,
  }));

  return [
    ...staticRoutes,
    ...seoLandingRoutes,
    ...blogRoutes,
    ...serviceRoutes,
    ...serviceLocationRoutes,
    ...locationRoutes,
    ...neighbourhoodRoutes,
  ];
}
