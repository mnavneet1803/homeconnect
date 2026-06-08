import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";
import { Container, Section, SectionHeader } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/constants/routes";

export const metadata: Metadata = buildMetadata({
  title: "Cost Guides",
  description:
    "Request a custom quote for handyman, plumbing, painting, and renovation work in Edmonton. Pricing is based on your specific project.",
  path: ROUTES.costGuides.index,
});

const guides = [
  { slug: "handyman", title: "Handyman services in Edmonton" },
  { slug: "plumbers", title: "Plumbing services in Edmonton" },
  { slug: "painters", title: "House painting in Edmonton" },
  { slug: "renovators", title: "Home renovation in Edmonton" },
];

export default function CostGuidesPage() {
  return (
    <Section className="pt-16">
      <Container>
        <SectionHeader
          title="Get a quote for your project"
          description="We don't publish fixed prices — every job is quoted based on scope, materials, and complexity. Tell us about your project for a custom estimate."
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {guides.map((g) => (
            <Link
              key={g.slug}
              href={ROUTES.services.detail(g.slug)}
              className="card-interactive card-body"
            >
              <h2 className="text-heading-sm text-ink-900">{g.title}</h2>
              <p className="mt-2 text-body-sm text-ink-500">
                Custom quote based on your project
              </p>
            </Link>
          ))}
        </div>
        <Button href={ROUTES.quote} className="mt-8">
          Request a free quote
        </Button>
      </Container>
    </Section>
  );
}
