import type { Metadata } from "next";
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
import { Icon } from "@/components/ui/icons";
import { Suspense } from "react";
import { QuoteFormSkeleton } from "@/components/skeletons";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us",
  description: `Contact ${siteConfig.name} — Edmonton's trusted local home service contractor. Call, email, or submit a free quote request.`,
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
                  <p className="mt-1 text-body-sm text-ink-500">
                    {siteConfig.phone.hours}
                  </p>
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
                  <p className="mt-1 text-body-sm text-ink-500">
                    Fast replies during business hours
                  </p>
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

                {siteConfig.social.googleBusiness && (
                  <a
                    href={siteConfig.social.googleBusiness}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-label-md text-brand-700"
                  >
                    <Icon name="map-pin" size={18} />
                    Find us on Google Maps
                  </a>
                )}
              </div>

              <div className="mt-8">
                <EdmontonCredibility />
              </div>
            </div>

            <div>
              <h2 className="text-heading-lg text-ink-900">Get a free quote</h2>
              <p className="mt-2 text-body-md text-ink-500">
                Prefer to start online? Tell us about your project below.
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
