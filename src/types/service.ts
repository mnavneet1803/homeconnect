import type { ServiceSlug } from "@/constants/services";

export interface Service {
  slug: ServiceSlug;
  name: string;
  pluralName: string;
  shortDescription: string;
  icon: string;
  href: string;
  licensed: boolean;
  licenseLabel?: string;
  featured: boolean;
  sortOrder: number;
  /** Bullet points shown on the homepage service card */
  highlights?: string[];
  /** Custom link label on service cards (defaults to "Learn more") */
  cardCta?: string;
  /** Custom quote button label on service detail pages */
  quoteCta?: string;
}

export interface SubService {
  slug: string;
  name: string;
  shortDescription: string;
  href: string;
}

export interface ServiceDetail extends Service {
  metaTitle: string;
  metaDescription: string;
  headline: string;
  subheadline: string;
  intro: string;
  subServices: SubService[];
  faq: { question: string; answer: string }[];
  relatedSlugs: ServiceSlug[];
}
