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

export interface ServicePageProblem {
  title: string;
  description: string;
}

export interface ServicePageProcessStep {
  step: number;
  title: string;
  description: string;
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
  overview: {
    title: string;
    paragraphs: string[];
  };
  commonProblems: {
    title: string;
    intro: string;
    problems: ServicePageProblem[];
  };
  whyChooseUs: {
    title: string;
    intro: string;
    reasons: ServicePageBenefit[];
  };
  process: {
    title: string;
    intro: string;
    steps: ServicePageProcessStep[];
  };
  serviceAreas: {
    title: string;
    intro: string;
  };
  localAreas: string[];
  faq: ServicePageFaq[];
  relatedSlugs: ServiceSlug[];
  cta: {
    headline: string;
    description: string;
  };
  /** @deprecated Merged into overview — kept during migration */
  details?: {
    title: string;
    paragraphs: string[];
  };
  /** @deprecated Merged into whyChooseUs — kept during migration */
  benefits?: ServicePageBenefit[];
}

/** Base page data merged with SEO enrichment at runtime */
export type ServicePageBase = Omit<
  ServicePageContent,
  "overview" | "commonProblems" | "whyChooseUs" | "process" | "serviceAreas" | "cta"
>;
