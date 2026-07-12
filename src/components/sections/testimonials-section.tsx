import { getFeaturedTestimonials } from "@/data/testimonials";
import { siteConfig } from "@/config/site";
import { ROUTES } from "@/constants/routes";
import { Container, Section, SectionHeader } from "@/components/ui/container";
import { Icon } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { GoogleReviewsBadge } from "@/components/trust";
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
          className={i < rating ? "fill-warning-500 text-warning-500" : "text-ink-200"}
        />
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  const testimonials = getFeaturedTestimonials(3);
  const { googleRating, googleReviewCount } = siteConfig.reviews;

  return (
    <Section className="bg-surface-50">
      <Container>
        <Reveal>
          <SectionHeader
            title="What Edmonton homeowners say"
            description="Featured customer feedback — plus our Google Business Profile rating when configured."
          />
        </Reveal>

        <Reveal className="mb-12 flex flex-wrap items-center justify-center gap-4" delay={0.06}>
          <GoogleReviewsBadge />
          <p className="text-body-md text-ink-600">
            <span className="font-semibold text-ink-900">{googleRating.toFixed(1)}</span> average
            from {googleReviewCount}+ Google reviews
          </p>
        </Reveal>

        <p className="mb-8 text-center text-caption text-ink-500">
          Quotes below are curated customer feedback.{" "}
          <a href={ROUTES.reviews} className="font-medium text-pine-700">
            See all featured reviews
          </a>
        </p>

        <StaggerGrid className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <StaggerItem key={testimonial.id}>
              <blockquote className="testimonial-card group flex h-full flex-col">
                <div
                  aria-hidden="true"
                  className="mb-3 font-display text-[64px] font-bold leading-none text-brass-200 transition-colors duration-300 group-hover:text-brass-300"
                >
                  &ldquo;
                </div>

                <StarRating rating={testimonial.rating ?? 5} />

                <p className="mt-4 flex-1 text-[15px] leading-relaxed text-ink-700">
                  {testimonial.quote}
                </p>

                <div className="my-5 h-px bg-gradient-to-r from-border via-brass-200 to-transparent" />

                <footer className="flex items-center gap-3.5">
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
                </footer>
              </blockquote>
            </StaggerItem>
          ))}
        </StaggerGrid>

        <Reveal className="mt-14 flex flex-wrap justify-center gap-3" delay={0.12}>
          <Button href={ROUTES.quote} size="lg">
            Get a Free Quote
          </Button>
          <Button href={ROUTES.reviews} variant="secondary" size="lg">
            Read reviews
          </Button>
        </Reveal>
      </Container>
    </Section>
  );
}
