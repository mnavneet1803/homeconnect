import type { Metadata } from "next";
import { Suspense } from "react";
import { buildMetadata } from "@/lib/seo/metadata";
import { buildLocalBusinessSchema } from "@/lib/seo/json-ld";
import { JsonLdScript } from "@/components/seo/json-ld-script";
import { siteConfig } from "@/config/site";
import { ctaNavigation } from "@/config/navigation";
import { ROUTES } from "@/constants/routes";
import { Container, Section, SectionHeader } from "@/components/ui/container";
import { QuoteForm, QuoteFormReassurance } from "@/components/forms/quote-form";
import { EdmontonCredibility, GoogleReviewsBadge } from "@/components/trust";
import { TrackedPhoneLink } from "@/components/analytics/tracked-link";
import { GoogleMapEmbed } from "@/components/maps/google-map-embed";
import { Icon } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { QuoteFormSkeleton } from "@/components/skeletons";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us",
  description: `Contact ${siteConfig.name} — Edmonton's trusted local home service contractor. Call, email, WhatsApp, or submit a free quote request.`,
  path: ROUTES.contact,
});

export default function ContactPage() {
  return (
    <>
      <JsonLdScript data={buildLocalBusinessSchema()} />

      <Section className="pt-16">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeader
                title="Contact us"
                description="Questions about our services, your quote, or your project? We're here to help Edmonton homeowners."
                align="left"
                className="mx-0 text-left"
              />

              <div className="mt-8 space-y-6">
                <GoogleReviewsBadge />

                <div className="card p-6">
                  <h2 className="text-heading-sm text-ink-900">Phone</h2>
                  <TrackedPhoneLink
                    tel={siteConfig.phone.tel}
                    display={siteConfig.phone.display}
                    location="contact_page"
                    className="mt-2 block text-body-lg font-medium text-brand-700"
                  />
                  <p className="mt-1 text-body-sm text-ink-500">{siteConfig.phone.hours}</p>
                </div>

                <div className="card p-6">
                  <h2 className="text-heading-sm text-ink-900">WhatsApp</h2>
                  <a
                    href={ctaNavigation.whatsapp.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-2 text-body-lg font-medium text-brand-700"
                  >
                    <Icon name="whatsapp" size={20} />
                    Message us on WhatsApp
                  </a>
                  <p className="mt-1 text-body-sm text-ink-500">Fast replies during business hours</p>
                </div>

                <div className="card p-6">
                  <h2 className="text-heading-sm text-ink-900">Email</h2>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="mt-2 block text-body-lg font-medium text-brand-700"
                  >
                    {siteConfig.email}
                  </a>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Button href={ctaNavigation.primary.href}>
                    Book Online · {ctaNavigation.primary.label}
                  </Button>
                  <Button href={ctaNavigation.secondary.href} variant="secondary">
                    {ctaNavigation.secondary.label}
                  </Button>
                </div>
              </div>

              <div className="mt-8">
                <h2 className="mb-3 text-heading-sm text-ink-900">Service area map</h2>
                <GoogleMapEmbed />
                {siteConfig.maps.openUrl ? (
                  <a
                    href={siteConfig.maps.openUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-label-md text-brand-700"
                  >
                    <Icon name="map-pin" size={18} />
                    Open in Google Maps
                  </a>
                ) : null}
              </div>

              <div className="mt-8">
                <EdmontonCredibility />
              </div>
            </div>

            <div>
              <h2 className="text-heading-lg text-ink-900">Get a free quote</h2>
              <p className="mt-2 text-body-md text-ink-500">
                Prefer to start online? Tell us about your project below — same flow as Book Online.
              </p>
              <div className="mt-6">
                <QuoteFormReassurance />
              </div>
              <Suspense fallback={<QuoteFormSkeleton className="mt-6" />}>
                <QuoteForm id="quote-form" className="mt-6" />
              </Suspense>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
