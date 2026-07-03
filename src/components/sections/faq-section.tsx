import Link from "next/link";
import { getFeaturedFaqs } from "@/data/faq/homepage";
import { ROUTES } from "@/constants/routes";
import { Container, Section, SectionHeader } from "@/components/ui/container";
import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";

export function FaqSection() {
  const faqs = getFeaturedFaqs();

  return (
    <Section id="faq">
      <Container narrow>
        <Reveal>
          <SectionHeader
            eyebrow="Common questions"
            title="Everything you're wondering, answered"
            description="Everything you need to know before requesting your free quote."
          />
        </Reveal>
        <Reveal delay={0.06}>
          <Accordion
            items={faqs.map((f) => ({
              id: f.id,
              question: f.question,
              answer: f.answer,
            }))}
          />
        </Reveal>
        <Reveal className="mt-12 flex flex-col items-center gap-5 text-center" delay={0.12}>
          <Link href={ROUTES.contact} className="btn-link">
            Still have questions? Contact us →
          </Link>
          <Button href={ROUTES.quote} size="lg">
            Get Free Quotes
          </Button>
        </Reveal>
      </Container>
    </Section>
  );
}
