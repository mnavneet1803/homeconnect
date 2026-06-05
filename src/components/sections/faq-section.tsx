import Link from "next/link";
import { getFeaturedFaqs } from "@/data/faq/homepage";
import { ROUTES } from "@/constants/routes";
import { Container, Section, SectionHeader } from "@/components/ui/container";
import { Accordion } from "@/components/ui/accordion";
import { Reveal } from "@/components/motion/reveal";
import { MagneticButton } from "@/components/motion/magnetic-button";

export function FaqSection() {
  const faqs = getFeaturedFaqs();

  return (
    <Section id="faq">
      <Container narrow>
        <Reveal>
          <SectionHeader
            title="Common questions"
            description="Everything you need to know before requesting your free match."
          />
        </Reveal>
        <Reveal delay={0.08}>
          <Accordion
            items={faqs.map((f) => ({
              id: f.id,
              question: f.question,
              answer: f.answer,
            }))}
          />
        </Reveal>
        <Reveal className="mt-10 flex flex-col items-center gap-4 text-center" delay={0.15}>
          <Link href={ROUTES.contact} className="btn-link">
            Still have questions? Contact us →
          </Link>
          <MagneticButton href={ROUTES.quote} size="lg">
            Get Free Quotes
          </MagneticButton>
        </Reveal>
      </Container>
    </Section>
  );
}
