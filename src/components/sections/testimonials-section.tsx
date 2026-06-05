import { getFeaturedTestimonials } from "@/data/testimonials";
import { ROUTES } from "@/constants/routes";
import { Container, Section, SectionHeader } from "@/components/ui/container";
import { Icon } from "@/components/ui/icons";
import { Reveal } from "@/components/motion/reveal";
import { AnimatedCounter } from "@/components/motion/animated-counter";
import { TestimonialCarousel } from "@/components/motion/testimonial-carousel";
import { MagneticButton } from "@/components/motion/magnetic-button";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Icon
          key={i}
          name="star"
          size={16}
          className={
            i < rating ? "fill-warning-500 text-warning-500" : "text-ink-200"
          }
        />
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  const testimonials = getFeaturedTestimonials(3);

  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeader
            title="What Edmonton homeowners say"
            description="Thousands of matches. Consistently clear communication, vetted pros, and no runaround."
          />
        </Reveal>
        <Reveal className="mb-10 flex items-center justify-center gap-2" delay={0.08}>
          <StarRating rating={5} />
          <p className="text-body-md text-ink-600">
            <AnimatedCounter
              value={4.9}
              decimals={1}
              className="font-medium text-ink-900"
            />{" "}
            average from 120+ reviews
          </p>
        </Reveal>
        <TestimonialCarousel testimonials={testimonials} />
        <Reveal className="mt-12 text-center" delay={0.15}>
          <MagneticButton href={ROUTES.quote} size="lg">
            Join 847+ homeowners — Get Free Quotes
          </MagneticButton>
        </Reveal>
      </Container>
    </Section>
  );
}
