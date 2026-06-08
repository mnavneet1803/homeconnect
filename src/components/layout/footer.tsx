import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ROUTES } from "@/constants/routes";
import { getAllServices, getAllLocations } from "@/data";
import { Button } from "@/components/ui/button";
import { GoogleReviewsBadge } from "@/components/trust";
import { Container } from "@/components/ui/container";

export function Footer() {
  const services = getAllServices();
  const locations = getAllLocations();

  return (
    <footer className="border-t border-border-subtle bg-surface-0">
      <div className="bg-brand-900 py-12 md:py-14">
        <Container className="flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
          <div>
            <p className="text-heading-sm text-white">Ready to start your project?</p>
            <p className="mt-2 text-body-sm text-brand-100">
              Free quotes from our licensed Edmonton team — no obligation.
            </p>
          </div>
          <Button href={ROUTES.quote} variant="secondary" className="shrink-0 bg-white hover:bg-surface-50">
            Get Free Quotes
          </Button>
        </Container>
      </div>

      <Container className="py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <p className="font-display text-heading-sm text-ink-900">
              {siteConfig.name}
            </p>
            <p className="mt-3 text-body-sm leading-relaxed text-ink-500">{siteConfig.tagline}</p>
            <div className="mt-6">
              <GoogleReviewsBadge />
            </div>
            <p className="mt-6 text-body-sm text-ink-600">
              <a href={`tel:${siteConfig.phone.tel}`} className="hover:text-brand-700">
                {siteConfig.phone.display}
              </a>
              <br />
              <a href={`mailto:${siteConfig.email}`} className="hover:text-brand-700">
                {siteConfig.email}
              </a>
            </p>
          </div>

          <div>
            <p className="text-label-md text-ink-900">Services</p>
            <ul className="mt-5 space-y-3">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={s.href}
                    className="text-body-sm text-ink-500 transition-colors hover:text-brand-700"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-label-md text-ink-900">Locations</p>
            <ul className="mt-5 space-y-3">
              {locations.map((l) => (
                <li key={l.slug}>
                  <Link
                    href={l.href}
                    className="text-body-sm text-ink-500 transition-colors hover:text-brand-700"
                  >
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-label-md text-ink-900">Company</p>
            <ul className="mt-5 space-y-3">
              {[
                ["About", ROUTES.about],
                ["How It Works", ROUTES.howItWorks],
                ["Vetting Process", ROUTES.vetting],
                ["Contact", ROUTES.contact],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-body-sm text-ink-500 transition-colors hover:text-brand-700"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-label-md text-ink-900">Legal</p>
            <ul className="mt-5 space-y-3">
              {[
                ["Privacy", ROUTES.legal.privacy],
                ["Terms", ROUTES.legal.terms],
                ["Disclaimer", ROUTES.legal.disclaimer],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-body-sm text-ink-500 transition-colors hover:text-brand-700"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-border-subtle pt-8">
          <p className="text-caption leading-relaxed text-ink-400">
            © {new Date().getFullYear()} {siteConfig.name}.{" "}
            {siteConfig.business.marketplaceDisclaimer}
          </p>
        </div>
      </Container>
    </footer>
  );
}
