import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { Container, Section, SectionHeader } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/constants/routes";

export const metadata: Metadata = buildMetadata({
  title: "Homeowner Guides",
  description:
    "Practical guides for Edmonton homeowners — hiring contractors, preparing for projects, and seasonal home care.",
  path: ROUTES.guides.index,
});

const guides = [
  "How to hire a contractor in Edmonton",
  "Winterizing your Edmonton home",
  "Spring home maintenance checklist",
  "What to ask before hiring a plumber",
];

export default function GuidesPage() {
  return (
    <Section className="pt-16">
      <Container narrow>
        <SectionHeader
          title="Homeowner guides"
          description="Practical advice for Edmonton homeowners planning home projects."
        />
        <ul className="space-y-4">
          {guides.map((title) => (
            <li key={title} className="card p-5 text-body-md text-ink-700">
              {title}
            </li>
          ))}
        </ul>
        <p className="mt-8 text-body-sm text-ink-500">
          Full guides coming soon. In the meantime, request a free quote from our team for your project.
        </p>
        <Button href={ROUTES.quote} className="mt-4">
          Get Free Quotes
        </Button>
      </Container>
    </Section>
  );
}
