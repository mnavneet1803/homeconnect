import type { ServiceSlug } from "@/constants/services";

export interface ServicePageBenefit {
  title: string;
  description: string;
  icon: string;
}

export interface ServicePageSubService {
  name: string;
  description: string;
}

export interface ServicePageFaq {
  question: string;
  answer: string;
}

export interface ServicePageContent {
  slug: ServiceSlug;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  hero: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    intro: string;
  };
  subServices: ServicePageSubService[];
  details: {
    title: string;
    paragraphs: string[];
  };
  benefits: ServicePageBenefit[];
  localAreas: string[];
  faq: ServicePageFaq[];
  relatedSlugs: ServiceSlug[];
}
