import { Container, Section } from "@/components/ui/container";
import type { ReactNode } from "react";

interface LegalPageLayoutProps {
  title: string;
  description: string;
  children: ReactNode;
  lastUpdated?: string;
}

export function LegalPageLayout({
  title,
  description,
  children,
  lastUpdated = "June 2025",
}: LegalPageLayoutProps) {
  return (
    <Section className="pt-16 pb-20">
      <Container narrow>
        <p className="section-eyebrow">Legal</p>
        <h1 className="mt-2 text-display-sm text-ink-900">{title}</h1>
        <p className="mt-4 text-body-lg text-ink-500">{description}</p>
        <p className="mt-2 text-caption text-ink-400">Last updated: {lastUpdated}</p>
        <div className="prose-legal mt-10 space-y-10">{children}</div>
      </Container>
    </Section>
  );
}

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section>
      <h2 className="text-heading-md text-ink-900">{title}</h2>
      <p className="mt-3 text-body-md text-ink-600">{children}</p>
    </section>
  );
}
