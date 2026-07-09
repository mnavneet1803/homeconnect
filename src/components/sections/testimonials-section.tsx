import { getFeaturedTestimonials } from "@/data/testimonials";
import { ROUTES } from "@/constants/routes";
import { Container, Section, SectionHeader } from "@/components/ui/container";
import { Icon } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { StaggerGrid, StaggerItem } from "@/components/motion/stagger-grid";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Icon
          key={i}
          name="star"
          size={15}
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
    <Section className="bg-surface-50">
      <Container>
        <Reveal>
          <SectionHeader
            title="What Edmonton homeowners say"
            description="Consistently clear communication, quality workmanship, and no runaround."
          />
        </Reveal>

        {/* Rating overview */}
        <Reveal className="mb-12 flex flex-wrap items-center justify-center gap-3" delay={0.06}>
          <StarRating rating={5} />
          <p className="text-body-md text-ink-600">
            <span className="font-semibold text-ink-900">4.9</span> average from 120+ reviews
          </p>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-pine-100 bg-pine-50 px-3 py-1 text-[12px] font-medium text-pine-700">
            <Icon name="check" size={12} className="text-pine-600" />
            Google Verified
          </span>
        </Reveal>

        {/* Premium testimonial cards */}
        <StaggerGrid className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <StaggerItem key={testimonial.id}>
              <blockquote className="testimonial-card group flex h-full flex-col">
                {/* Large decorative quote mark */}
                <div
                  aria-hidden="true"
                  className="mb-3 font-display text-[64px] font-bold leading-none text-brass-200 transition-colors duration-300 group-hover:text-brass-300"
                >
                  "
                </div>

                {/* Stars */}
                <StarRating rating={testimonial.rating ?? 5} />

                {/* Quote text */}
                <p className="mt-4 flex-1 text-[15px] leading-relaxed text-ink-700">
                  {testimonial.quote}
                </p>

                {/* Divider */}
                <div className="my-5 h-px bg-gradient-to-r from-border via-brass-200 to-transparent" />

                {/* Author */}
                <footer className="flex items-center gap-3.5">
                  {/* Avatar initial */}
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-pine-950 font-display text-[15px] font-semibold text-brass-400">
                    {testimonial.author.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <cite className="not-italic text-[14px] font-semibold text-pine-950">
                      {testimonial.author}
                    </cite>
                    {testimonial.location && (
                      <p className="text-[12px] text-ink-500">{testimonial.location}</p>
                    )}
                  </div>
                  {/* Verified badge */}
                  <span className="ml-auto inline-flex items-center gap-1 rounded-full bg-pine-50 px-2.5 py-1 text-[11px] font-medium text-pine-700">
                    <Icon name="check" size={10} className="text-pine-600" />
                    Verified
                  </span>
                </footer>
              </blockquote>
            </StaggerItem>
          ))}
        </StaggerGrid>

        <Reveal className="mt-14 text-center" delay={0.12}>
          <Button href={ROUTES.quote} size="lg">
            Get Free Quotes
          </Button>
        </Reveal>
      </Container>
    </Section>
  );
}
