import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";
import { Container, Section, SectionHeader } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/constants/routes";

export const metadata: Metadata = buildMetadata({
  title: "Cost Guides",
  description:
    "Edmonton home service cost guides — pricing estimates for handyman, plumbing, painting, and renovation projects.",
  path: ROUTES.costGuides.index,
});

const guides = [
  { slug: "handyman", title: "Handyman costs in Edmonton", range: "$50–$90/hr" },
  { slug: "plumbers", title: "Plumber costs in Edmonton", range: "$90–$150/hr" },
  { slug: "painters", title: "House painting costs in Edmonton", range: "$2–$4/sq ft" },
  { slug: "renovators", title: "Renovation costs in Edmonton", range: "Varies by scope" },
];

export default function CostGuidesPage() {
  return (
    <Section className="pt-16">
      <Container>
        <SectionHeader
          title="Edmonton cost guides"
          description="General pricing estimates to help you budget. Request free quotes for accurate project pricing."
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {guides.map((g) => (
            <Link
              key={g.slug}
              href={ROUTES.services.detail(g.slug)}
              className="card-interactive card-body"
            >
              <h2 className="text-heading-sm text-ink-900">{g.title}</h2>
              <p className="mt-2 text-body-sm text-ink-500">Typical range: {g.range}</p>
            </Link>
          ))}
        </div>
        <Button href={ROUTES.quote} className="mt-8">
          Get accurate quotes for your project
        </Button>
      </Container>
    </Section>
  );
}
