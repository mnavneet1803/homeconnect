import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { buildMetadata } from "@/lib/seo/metadata";
import { buildFAQSchema } from "@/lib/seo/json-ld";
import { JsonLdScript } from "@/components/seo/json-ld-script";
import { ProjectCardSkeleton, TestimonialSkeleton } from "@/components/skeletons";
import { getFeaturedFaqs } from "@/data/faq/homepage";
import {
  HeroSection,
  TrustIndicatorsSection,
  ServicesSection,
  // BeforeAfterSection,
  HowItWorksSection,
  WhyChooseUsSection,
  ServiceAreasSection,
  LocalServicesSection,
  FaqSection,
  LeadFormSection,
} from "@/components/sections";

const FeaturedProjectsSection = dynamic(
  () =>
    import("@/components/sections/featured-projects-section").then(
      (m) => m.FeaturedProjectsSection
    ),
  {
    loading: () => (
      <section className="bg-surface-0 py-section">
        <div className="mx-auto max-w-content px-gutter lg:px-gutter-lg">
          <div className="mb-10 space-y-3">
            <div className="skeleton h-8 w-2/3 max-w-xl" />
            <div className="skeleton h-4 w-2/3 max-w-2xl" />
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <ProjectCardSkeleton key={i} />
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <div className="skeleton h-12 w-64 rounded-lg" />
          </div>
        </div>
      </section>
    ),
  }
);

const TestimonialsSection = dynamic(
  () =>
    import("@/components/sections/testimonials-section").then(
      (m) => m.TestimonialsSection
    ),
  {
    loading: () => (
      <section className="py-section">
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

// TODO: Enable testimonials after receiving verified customer reviews.
export const metadata: Metadata = buildMetadata({
  title: "Home Solution Services",
  description:
    "Edmonton home service contractor — handyman, TV mounting, furniture assembly, professional cleaning, plumbing and electrical maintenance, and move-in/out repairs. Request a free quote.",
  path: "/",
  keywords: [
    "home services Edmonton",
    "handyman Edmonton",
    "contractors Edmonton",
    "home renovation Edmonton",
    "plumber Edmonton",
    "electrician Edmonton",
    "cleaning services Edmonton",
  ],
});

export default function HomePage() {
  const faqs = getFeaturedFaqs();

  return (
    <>
      <JsonLdScript data={buildFAQSchema(faqs)} />
      <HeroSection />
      <TrustIndicatorsSection />
      <ServicesSection />
      <HowItWorksSection />
      <WhyChooseUsSection />
      {/* <FeaturedProjectsSection /> */}
      {/* <BeforeAfterSection /> */}
      {/* TODO: Enable before/after gallery after verified project photos are available. */}
      {/* <TestimonialsSection /> */}
      <ServiceAreasSection />
      <LocalServicesSection />
      <FaqSection />
      <LeadFormSection />
    </>
  );
}
