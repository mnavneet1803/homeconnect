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
    "Learn how Edmonton Home Connect matches you with up to 3 vetted local home service pros. Free, fast, and no obligation.",
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
            title="How Edmonton Home Connect works"
            description="A simple, transparent process from request to hired pro."
          />
        </Container>
      </Section>
      <HowItWorksSection />
      <LeadFormSection />
    </>
  );
}
