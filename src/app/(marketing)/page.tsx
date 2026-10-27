import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { DEFAULT_OG_IMAGE_ALT } from "@/constants/seo-social";
import { SEO } from "@/constants/app";
import { buildFAQSchema } from "@/lib/seo/json-ld";
import { JsonLdScript } from "@/components/seo/json-ld-script";
import { getFeaturedFaqs } from "@/data/faq/homepage";
import {
  HeroSection,
  TrustIndicatorsSection,
  ServicesSection,
  WorkReelSection,
  FeatureVideosSection,
  FurnitureBrandsSection,
  CleaningShowcaseSection,
  WorkShowcaseSection,
  HowItWorksSection,
  WhyChooseUsSection,
  // BeforeAfterSection, // TODO: Enable once true Edmonton before/after job photos are ready
  ServiceAreasSection,
  LocalServicesSection,
  FaqSection,
  LeadFormSection,
} from "@/components/sections";
// import { StatsSection } from "@/components/sections/stats-section"; // TODO: Enable once real stats are verified
// import { TestimonialsSection } from "@/components/sections/testimonials-section"; // TODO: Enable once Google reviews / verified testimonials are available

export const metadata: Metadata = buildMetadata({
  title: "Home Solution Services",
  description:
    "Edmonton home service contractor — handyman, furniture assembly, painting, drywall, TV mounting, cleaning, plumbing and electrical. Request a free quote.",
  path: "/",
  ogTitle: SEO.defaultTitle,
  ogImageAlt: DEFAULT_OG_IMAGE_ALT,
  keywords: [
    "home services Edmonton",
    "handyman Edmonton",
    "furniture assembly Edmonton",
    "contractors Edmonton",
    "plumber Edmonton",
    "electrician Edmonton",
    "cleaning services Edmonton",
    "drywall repair Edmonton",
  ],
});

export default function HomePage() {
  const faqs = getFeaturedFaqs();

  return (
    <>
      <JsonLdScript data={buildFAQSchema(faqs)} />
      <HeroSection />
      <TrustIndicatorsSection />
      {/* <StatsSection /> */}
      {/* TODO: Enable StatsSection once real jobs/years/rating data is available */}
      <ServicesSection />
      <WorkReelSection />
      <FeatureVideosSection />
      <FurnitureBrandsSection />
      <CleaningShowcaseSection />
      <WorkShowcaseSection />
      <HowItWorksSection />
      <WhyChooseUsSection />
      {/* <BeforeAfterSection /> */}
      {/* TODO: Enable Before & After once true Edmonton job photo pairs are ready */}
      {/* <TestimonialsSection /> */}
      {/* TODO: Enable TestimonialsSection once Google reviews / verified testimonials are available */}
      <ServiceAreasSection />
      <LocalServicesSection />
      <FaqSection />
      <LeadFormSection />
    </>
  );
}
