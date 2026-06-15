import type { ServicePageContent, ServicePageBase } from "@/types/service-page";
import type { ServicePageEnrichment } from "@/data/services/enriched-pages";

/** Merge base page data with SEO enrichment content. */
export function mergeServicePage(
  base: ServicePageBase,
  enrichment: ServicePageEnrichment
): ServicePageContent {
  return {
    ...base,
    overview: enrichment.overview,
    commonProblems: enrichment.commonProblems,
    whyChooseUs: enrichment.whyChooseUs,
    process: enrichment.process,
    serviceAreas: enrichment.serviceAreas,
    cta: enrichment.cta,
    faq: [...base.faq, ...enrichment.additionalFaq],
  };
}
