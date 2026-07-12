import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ctaNavigation } from "@/config/navigation";
import { SERVING_AREA } from "@/constants/launch";
import { ROUTES } from "@/constants/routes";
import { getAllServices, getAllLocations } from "@/data";
import { SiteLogo } from "@/components/brand/site-logo";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icons";
import { Container } from "@/components/ui/container";

export function Footer() {
  const services = getAllServices();
  const locations = getAllLocations();

  return (
    <footer className="bg-pine-950 text-paper/80 pb-[calc(var(--sticky-cta-height)+env(safe-area-inset-bottom,0px))] md:pb-0">
      {/* Final CTA bar — brass */}
      <section className="final-cta-bar">
        <Container className="flex flex-wrap items-center justify-between gap-6 py-9">
          <div>
            <h3 className="font-display text-[22px] font-bold text-pine-950">
              Ready to start your project?
            </h3>
            <p className="mt-1 text-sm text-pine-950/70">
              Same-day quotes for most requests across greater Edmonton.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button href={`tel:${siteConfig.phone.tel}`} variant="ghost" size="sm">
              <Icon name="phone" size={16} />
              Call Now
            </Button>
            <Button href={ctaNavigation.primary.href} variant="accent" size="sm">
              {ctaNavigation.primary.label}
            </Button>
          </div>
        </Container>
      </section>

      <Container className="animate-in fade-in duration-1000 py-16 md:py-[70px]">
        <div className="grid gap-9 md:grid-cols-2 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <SiteLogo height={52} linked={false} className="[&_img]:brightness-0 [&_img]:invert" />
            <p className="mt-3.5 max-w-[280px] text-sm leading-relaxed text-paper/75">
              {siteConfig.tagline}
            </p>
            <p className="mt-3 text-sm text-paper/75">{SERVING_AREA}</p>
            <div className="mt-6 flex gap-2.5">
              <a
                href={`tel:${siteConfig.phone.tel}`}
                aria-label="Phone"
                className="group flex h-9 w-9 items-center justify-center rounded-full border border-paper/20 transition-all duration-300 hover:border-brass-400 hover:bg-brass-500/15"
              >
                <Icon name="phone" size={15} className="text-paper/70 transition-colors group-hover:text-brass-400" />
              </a>
              <a
                href={ctaNavigation.whatsapp.href}
                aria-label="WhatsApp"
                className="group flex h-9 w-9 items-center justify-center rounded-full border border-paper/20 transition-all duration-300 hover:border-brass-400 hover:bg-brass-500/15"
              >
                <Icon name="whatsapp" size={15} className="text-paper/70 transition-colors group-hover:text-brass-400" />
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                aria-label="Email"
                className="group flex h-9 w-9 items-center justify-center rounded-full border border-paper/20 transition-all duration-300 hover:border-brass-400 hover:bg-brass-500/15"
              >
                <svg viewBox="0 0 24 24" className="h-[15px] w-[15px] text-paper/70 transition-colors group-hover:text-brass-400" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <rect x="3" y="5" width="18" height="14" rx="1.5" />
                  <path d="M4 6.5l8 6.5 8-6.5" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <p className="mb-4 font-mono text-xs font-medium uppercase tracking-wider text-brass-400">
              Services
            </p>
            <ul className="flex flex-col gap-2.5">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={s.href} className="footer-link text-sm">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 font-mono text-xs font-medium uppercase tracking-wider text-brass-400">
              Locations
            </p>
            <ul className="flex flex-col gap-2.5">
              {locations.map((l) => (
                <li key={l.slug}>
                  <Link href={l.href} className="footer-link text-sm">
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 font-mono text-xs font-medium uppercase tracking-wider text-brass-400">
              Company
            </p>
            <ul className="flex flex-col gap-2.5">
              {[
                ["About", ROUTES.about],
                ["How It Works", ROUTES.howItWorks],
                ["Reviews", ROUTES.reviews],
                ["Blog", ROUTES.blog.index],
                ["Vetting Process", ROUTES.vetting],
                ["Contact", ROUTES.contact],
                ["Book Online", ROUTES.quote],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="footer-link text-sm">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mb-4 mt-8 font-mono text-xs font-medium uppercase tracking-wider text-brass-400">
              Legal
            </p>
            <ul className="flex flex-col gap-2.5">
              {[
                ["Privacy", ROUTES.legal.privacy],
                ["Terms", ROUTES.legal.terms],
                ["Disclaimer", ROUTES.legal.disclaimer],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="footer-link text-sm">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap justify-between gap-4 border-t border-paper/10 pt-5 font-mono text-[12.5px] text-paper/60">
          <span>
            © {new Date().getFullYear()} {siteConfig.name}. {siteConfig.business.marketplaceDisclaimer}
          </span>
          <span>Edmonton, Alberta, Canada</span>
        </div>
      </Container>
    </footer>
  );
}
