import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { buildFAQSchema } from "@/lib/seo/json-ld";
import { JsonLdScript } from "@/components/seo/json-ld-script";
import { HowItWorksSection } from "@/components/sections/how-it-works-section";
import { LeadFormSection } from "@/components/sections/lead-form-section";
import { ROUTES } from "@/constants/routes";
import { Container, Section, SectionHeader } from "@/components/ui/container";
import { getFeaturedFaqs } from "@/data/faq/homepage";

export const metadata: Metadata = buildMetadata({
  title: "How It Works",
  description:
    "Learn how Home Solution Services works — request a quote and our own team handles your project. Free, fast, and no obligation.",
  path: ROUTES.howItWorks,
});

export default function HowItWorksPage() {
  const faqs = getFeaturedFaqs().slice(0, 3);

  return (
    <>
      <JsonLdScript data={buildFAQSchema(faqs)} />
      <Section className="pt-16 pb-0">
        <Container>
          <SectionHeader
            title="How Home Solution Services works"
            description="A simple, transparent process from your request to our crew completing the work."
          />
        </Container>
      </Section>
      <HowItWorksSection />
      <LeadFormSection />
    </>
  );
}
