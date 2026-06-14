import { getFeaturedTestimonials } from "@/data/testimonials";
import { ROUTES } from "@/constants/routes";
import { Container, Section, SectionHeader } from "@/components/ui/container";
import { Icon } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { TestimonialCarousel } from "@/components/motion/testimonial-carousel";

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
    <Section className="bg-surface-0">
      <Container>
        <Reveal>
          <SectionHeader
            title="What Edmonton homeowners say"
            description="Consistently clear communication, quality workmanship, and no runaround."
          />
        </Reveal>
        <Reveal className="mb-12 flex items-center justify-center gap-3" delay={0.06}>
          <StarRating rating={5} />
          <p className="text-body-md text-ink-600">
            <span className="font-medium text-ink-900">4.9</span> average from 120+ reviews
          </p>
        </Reveal>
        <TestimonialCarousel testimonials={testimonials} />
        <Reveal className="mt-14 text-center" delay={0.12}>
          <Button href={ROUTES.quote} size="lg">
            Get Free Quotes
          </Button>
        </Reveal>
      </Container>
    </Section>
  );
}
