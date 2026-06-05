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
