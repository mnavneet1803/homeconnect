import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";
import { buildLocalBusinessSchema } from "@/lib/seo/json-ld";
import { JsonLdScript } from "@/components/seo/json-ld-script";
import { siteConfig } from "@/config/site";
import { ctaNavigation } from "@/config/navigation";
import { ROUTES } from "@/constants/routes";
import { getFeaturedTestimonials } from "@/data/testimonials";
import { Container, Section, SectionHeader } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icons";
import { GoogleReviewsBadge } from "@/components/trust";
import { Reveal } from "@/components/motion/reveal";

export const metadata: Metadata = buildMetadata({
  title: "Reviews",
  description: `Customer feedback for ${siteConfig.name} in Edmonton. Read featured reviews and leave a Google review.`,
  path: ROUTES.reviews,
});

export default function ReviewsPage() {
  const testimonials = getFeaturedTestimonials(6);
  const { googleRating, googleReviewCount, writeReviewUrl, embedEnabled } =
    siteConfig.reviews;

  return (
    <>
      <JsonLdScript data={buildLocalBusinessSchema()} />
      <Section className="pt-16">
        <Container>
          <Reveal variant="fade-up">
            <SectionHeader
              title="Reviews from Edmonton homeowners"
              description="Featured feedback from customers who hired our crew. Rating summary reflects our Google Business Profile when configured."
              align="left"
              className="mx-0 text-left"
            />
          </Reveal>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <GoogleReviewsBadge variant="premium" />
            <p className="text-body-sm text-ink-600">
              <span className="font-semibold text-ink-900">{googleRating.toFixed(1)}</span> average
              from {googleReviewCount}+ Google reviews
            </p>
          </div>

          <p className="mt-4 max-w-2xl text-caption text-ink-500">
            Quotes below are curated customer feedback shared with us. Live Google review feeds
            can be plugged in later via an embed when enabled.
          </p>

          {embedEnabled ? (
            <div className="mt-8 rounded-xl border border-dashed border-border bg-surface-50 p-6 text-body-sm text-ink-600">
              Reviews embed slot is enabled (`NEXT_PUBLIC_REVIEWS_EMBED_ENABLED`). Add your
              Elfsight or Google reviews widget markup in a follow-up deploy.
            </div>
          ) : null}

          <ul className="mt-12 grid gap-5 md:grid-cols-2">
            {testimonials.map((t) => (
              <li
                key={t.id}
                className="rounded-xl border border-border bg-surface-0 p-6 shadow-sm"
              >
                <div className="flex gap-0.5" aria-label={`${t.rating ?? 5} out of 5 stars`}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Icon
                      key={i}
                      name="star"
                      size={14}
                      className={
                        i < (t.rating ?? 5)
                          ? "fill-warning-500 text-warning-500"
                          : "text-ink-200"
                      }
                    />
                  ))}
                </div>
                <blockquote className="mt-4 text-[15px] leading-relaxed text-ink-700">
                  “{t.quote}”
                </blockquote>
                <footer className="mt-5 text-label-sm text-ink-500">
                  <span className="font-semibold text-ink-800">{t.author}</span>
                  {t.location ? ` · ${t.location}` : ""}
                </footer>
              </li>
            ))}
          </ul>

          <div className="mt-12 flex flex-wrap gap-3">
            {writeReviewUrl ? (
              <Button href={writeReviewUrl} external>
                Leave a Google review
              </Button>
            ) : null}
            <Button href={ROUTES.quote} variant="secondary">
              {ctaNavigation.primary.label}
            </Button>
            <Button href={ROUTES.contact} variant="secondary">
              Contact us
            </Button>
          </div>

          <p className="mt-6 text-body-sm text-ink-500">
            Prefer to call?{" "}
            <Link href={`tel:${siteConfig.phone.tel}`} className="font-medium text-brand-700">
              {siteConfig.phone.display}
            </Link>
          </p>
        </Container>
      </Section>
    </>
  );
}
