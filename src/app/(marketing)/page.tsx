import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { buildMetadata } from "@/lib/seo/metadata";
import { DEFAULT_OG_IMAGE_ALT } from "@/constants/seo-social";
import { SEO } from "@/constants/app";
import { buildFAQSchema } from "@/lib/seo/json-ld";
import { JsonLdScript } from "@/components/seo/json-ld-script";
import { TestimonialSkeleton } from "@/components/skeletons";
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

const TestimonialsSection = dynamic(
  () =>
    import("@/components/sections/testimonials-section").then(
      (m) => m.TestimonialsSection
    ),
  {
    loading: () => (
      <section className="bg-surface-50 py-section">
        <div className="mx-auto max-w-content px-gutter lg:px-gutter-lg">
          <div className="mb-10 space-y-3">
            <div className="skeleton h-8 w-2/3 max-w-xl" />
            <div className="skeleton h-4 w-2/3 max-w-2xl" />
          </div>
          <div className="mb-10 flex items-center justify-center gap-2">
            <div className="skeleton h-4 w-32" />
            <div className="skeleton h-4 w-40" />
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <TestimonialSkeleton key={i} />
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <div className="skeleton h-12 w-80 rounded-lg" />
          </div>
        </div>
      </section>
    ),
  }
);

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
      <TestimonialsSection />
      <ServiceAreasSection />
      <LocalServicesSection />
      <FaqSection />
      <LeadFormSection />
    </>
  );
}
