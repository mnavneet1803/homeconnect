import Link from "next/link";
import { siteConfig } from "@/config/site";
import { LOCAL_SERVICES_CONTENT } from "@/data/content/local-services";
import { LOCATIONS } from "@/constants/locations";
import { SERVICE_BY_SLUG } from "@/constants/services";
import { ROUTES } from "@/constants/routes";
import { ctaNavigation } from "@/config/navigation";
import { Container, Section } from "@/components/ui/container";
import { Icon, serviceIconName } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";

const locations = LOCAL_SERVICES_CONTENT.locationSlugs.map(
  (slug) => LOCATIONS.find((l) => l.slug === slug)!
);

const services = LOCAL_SERVICES_CONTENT.serviceSlugs.map(
  (slug) => SERVICE_BY_SLUG[slug]
);

export function LocalServicesSection() {
  return (
    <Section
      id="local-services"
      aria-labelledby="local-services-heading"
      className="border-y border-border bg-paper-deep"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <Reveal variant="fade-up">
            <p className="section-eyebrow">{LOCAL_SERVICES_CONTENT.eyebrow}</p>
            <h2
              id="local-services-heading"
              className="mt-3.5 text-balance text-display-sm text-pine-950 md:text-[clamp(24px,2.8vw,32px)]"
            >
              {LOCAL_SERVICES_CONTENT.title}
            </h2>
            <p className="mt-4 max-w-[520px] text-[15.5px] leading-relaxed text-ink-600">
              {LOCAL_SERVICES_CONTENT.description}
            </p>
            <p className="mt-4 max-w-[520px] text-body-md leading-relaxed text-ink-600">
              {LOCAL_SERVICES_CONTENT.supplementalText}
            </p>
            <ul className="mt-6 flex flex-col gap-2.5">
              {[
                "Household repairs, big and small",
                "Preferred rates on repeat maintenance",
                "Free quotes on every request",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-[14.5px] text-ink-900">
                  <Icon name="check" size={16} className="text-pine-700" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal variant="fade-up" delay={0.08}>
            <div className="rounded-md border border-dashed border-border bg-surface-0 p-6 md:p-7">
              <h3 className="font-mono text-[15px] font-medium uppercase tracking-wider text-ink-500">
                How we&apos;re contacted
              </h3>
              <ul className="mt-4 flex flex-col gap-3">
                <li className="flex items-center gap-2.5 text-[14.5px]">
                  <Icon name="phone" size={16} className="text-brass-500" />
                  <a href={`tel:${siteConfig.phone.tel}`}>{siteConfig.phone.display}</a>
                </li>
                <li className="flex items-center gap-2.5 text-[14.5px]">
                  <Icon name="whatsapp" size={16} className="text-brass-500" />
                  <a href={ctaNavigation.whatsapp.href} target="_blank" rel="noopener noreferrer">
                    WhatsApp — same-day replies
                  </a>
                </li>
                <li className="flex items-center gap-2.5 text-[14.5px]">
                  <svg viewBox="0 0 24 24" className="h-4 w-4 text-brass-500" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <rect x="3" y="5" width="18" height="14" rx="1.5" />
                    <path d="M4 6.5l8 6.5 8-6.5" />
                  </svg>
                  <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
                </li>
              </ul>
              <Button href={ROUTES.quote} className="mt-5 w-full">
                {ctaNavigation.primary.label}
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-12" delay={0.12}>
          <p className="text-label-sm font-semibold text-ink-800">
            Home services available in Edmonton
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={service.href}
                className="group flex items-center gap-3 rounded-md border border-border bg-surface-0 p-4 transition-all hover:-translate-y-0.5 hover:border-brass-500 hover:shadow-card"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-pine-950 text-brass-400">
                  <Icon name={serviceIconName(service.icon)} size={20} />
                </span>
                <span className="flex-1 text-sm font-medium text-pine-950 group-hover:text-pine-700">
                  {service.name}
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link href={ROUTES.services.index} className="btn-link text-sm">
              View all services →
            </Link>
            <Link href={ROUTES.locations.index} className="btn-link text-sm">
              Browse service areas →
            </Link>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
