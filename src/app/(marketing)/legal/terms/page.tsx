import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { ROUTES } from "@/constants/routes";
import { siteConfig } from "@/config/site";
import { LegalPageLayout, LegalSection } from "@/components/sections/legal-page-layout";
import { termsSections } from "@/data/content/legal";

export const metadata: Metadata = buildMetadata({
  title: "Terms & Conditions",
  description: `Terms and conditions for using ${siteConfig.name} — Edmonton's trusted local home service contractor.`,
  path: ROUTES.legal.terms,
});

export default function TermsPage() {
  return (
    <LegalPageLayout
      title="Terms & Conditions"
      description="Terms governing your use of Home Solution Services."
    >
      {termsSections.map((section) => (
        <LegalSection key={section.title} title={section.title}>
          {section.body}
        </LegalSection>
      ))}
    </LegalPageLayout>
  );
}
