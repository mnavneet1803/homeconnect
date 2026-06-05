import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ROUTES } from "@/constants/routes";
import { getAllServices, getAllLocations } from "@/data";
import { MagneticButton } from "@/components/motion/magnetic-button";
import { GoogleReviewsBadge } from "@/components/trust";
import { Container } from "@/components/ui/container";

export function Footer() {
  const services = getAllServices();
  const locations = getAllLocations();

  return (
    <footer className="border-t border-border-subtle bg-surface-0">
      <div className="bg-ink-950 py-10">
        <Container className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-body-md text-white">Ready to start your project?</p>
          <MagneticButton href={ROUTES.quote}>
            Get Free Quotes
          </MagneticButton>
        </Container>
      </div>

      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <p className="font-display text-heading-sm text-ink-900">
              {siteConfig.name}
            </p>
            <p className="mt-2 text-body-sm text-ink-500">{siteConfig.tagline}</p>
            <div className="mt-4">
              <GoogleReviewsBadge />
            </div>
            <p className="mt-4 text-body-sm text-ink-700">
              <a href={`tel:${siteConfig.phone.tel}`}>{siteConfig.phone.display}</a>
              <br />
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </p>
          </div>

          <div>
            <p className="text-label-md text-ink-900">Services</p>
            <ul className="mt-4 space-y-2">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={s.href}
                    className="text-body-sm text-ink-500 hover:text-brand-700"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-label-md text-ink-900">Locations</p>
            <ul className="mt-4 space-y-2">
              {locations.map((l) => (
                <li key={l.slug}>
                  <Link
                    href={l.href}
                    className="text-body-sm text-ink-500 hover:text-brand-700"
                  >
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-label-md text-ink-900">Company</p>
            <ul className="mt-4 space-y-2">
              {[
                ["About", ROUTES.about],
                ["How It Works", ROUTES.howItWorks],
                ["Vetting Process", ROUTES.vetting],
                ["Contact", ROUTES.contact],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-body-sm text-ink-500 hover:text-brand-700"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-label-md text-ink-900">Legal</p>
            <ul className="mt-4 space-y-2">
              {[
                ["Privacy", ROUTES.legal.privacy],
                ["Terms", ROUTES.legal.terms],
                ["Disclaimer", ROUTES.legal.disclaimer],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-body-sm text-ink-500 hover:text-brand-700"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border-subtle pt-8">
          <p className="text-caption text-ink-400">
            © {new Date().getFullYear()} {siteConfig.name}.{" "}
            {siteConfig.business.marketplaceDisclaimer}
          </p>
        </div>
      </Container>
    </footer>
  );
}
