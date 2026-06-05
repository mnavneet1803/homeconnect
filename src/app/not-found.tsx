import Link from "next/link";
import { Container, Section } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/constants/routes";

export default function NotFound() {
  return (
    <Section className="flex min-h-[60vh] items-center pt-16">
      <Container narrow className="text-center">
        <p className="font-mono text-display-sm text-ink-900">404</p>
        <h1 className="mt-4 text-heading-lg text-ink-900">Page not found</h1>
        <p className="mt-4 text-body-md text-ink-500">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href={ROUTES.home}>Back to home</Button>
          <Button href={ROUTES.quote} variant="secondary">
            Get Free Quotes
          </Button>
        </div>
      </Container>
    </Section>
  );
}
