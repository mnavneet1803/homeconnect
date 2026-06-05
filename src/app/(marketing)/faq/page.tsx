import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { buildFAQSchema } from "@/lib/seo/json-ld";
import { JsonLdScript } from "@/components/seo/json-ld-script";
import { FaqSection } from "@/components/sections/faq-section";
import { LeadFormSection } from "@/components/sections/lead-form-section";
import { ROUTES } from "@/constants/routes";
import { Container, Section, SectionHeader } from "@/components/ui/container";
import { getFeaturedFaqs } from "@/data/faq/homepage";

export const metadata: Metadata = buildMetadata({
  title: "FAQ",
  description:
    "Frequently asked questions about Edmonton Home Connect — matching, vetting, pricing, and how our free quote service works.",
  path: ROUTES.faq,
});

export default function FaqPage() {
  const faqs = getFeaturedFaqs();

  return (
    <>
      <JsonLdScript data={buildFAQSchema(faqs)} />
      <Section className="pt-16 pb-0">
        <Container narrow>
          <SectionHeader
            title="Frequently asked questions"
            description="Everything you need to know about getting matched with vetted Edmonton home service pros."
          />
        </Container>
      </Section>
      <FaqSection />
      <LeadFormSection />
    </>
  );
}
