import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { Container, Section, SectionHeader } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/constants/routes";

export const metadata: Metadata = buildMetadata({
  title: "Blog",
  description:
    "Edmonton home services blog — tips, trends, and local project insights for Capital Region homeowners.",
  path: ROUTES.blog.index,
});

export default function BlogPage() {
  return (
    <Section className="pt-16">
      <Container narrow className="text-center">
        <SectionHeader
          title="Edmonton home services blog"
          description="Local tips and project insights — new articles coming soon."
        />
        <Button href={ROUTES.quote}>Get Free Quotes</Button>
      </Container>
    </Section>
  );
}
