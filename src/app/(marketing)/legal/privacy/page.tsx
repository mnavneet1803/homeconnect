import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { ROUTES } from "@/constants/routes";
import { siteConfig } from "@/config/site";
import { LegalPageLayout, LegalSection } from "@/components/sections/legal-page-layout";
import { privacyPolicySections } from "@/data/content/legal";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: `Privacy policy for ${siteConfig.name} — how we collect, use, and protect your personal information under PIPEDA.`,
  path: ROUTES.legal.privacy,
});

export default function PrivacyPage() {
  return (
    <LegalPageLayout
      title="Privacy Policy"
      description="How Home Solution Services collects, uses, and protects your personal information."
    >
      {privacyPolicySections.map((section) => (
        <LegalSection key={section.title} title={section.title}>
          {section.body}
        </LegalSection>
      ))}
    </LegalPageLayout>
  );
}
