import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { ROUTES } from "@/constants/routes";
import { siteConfig } from "@/config/site";
import { LegalPageLayout, LegalSection } from "@/components/sections/legal-page-layout";
import { disclaimerSections } from "@/data/content/legal";

export const metadata: Metadata = buildMetadata({
  title: "Disclaimer",
  description: `Disclaimer for ${siteConfig.name} — marketplace model, pricing estimates, and service limitations.`,
  path: ROUTES.legal.disclaimer,
});

export default function DisclaimerPage() {
  return (
    <LegalPageLayout
      title="Disclaimer"
      description="Important information about our marketplace model and service limitations."
    >
      {disclaimerSections.map((section) => (
        <LegalSection key={section.title} title={section.title}>
          {section.body}
        </LegalSection>
      ))}
    </LegalPageLayout>
  );
}
