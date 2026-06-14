import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Icon } from "@/components/ui/icons";
import { TrackedLink } from "@/components/analytics/tracked-link";

/** Google Business Profile review summary with link */
export function GoogleReviewsBadge({ className }: { className?: string }) {
  const { googleRating, googleReviewCount } = siteConfig.reviews;
  const gbpUrl = siteConfig.social.googleBusiness;

  const inner = (
    <div
      className={`inline-flex items-center gap-3 rounded-xl border border-border-subtle bg-surface-0 px-4 py-3.5 shadow-card ${className ?? ""}`}
    >
      <Icon name="star" size={20} className="fill-warning-500 text-warning-500" />
      <div className="text-left">
        <p className="text-label-md text-ink-900">
          {googleRating.toFixed(1)} on Google
        </p>
        <p className="text-caption text-ink-500">
          {googleReviewCount}+ verified reviews
        </p>
      </div>
      {gbpUrl && (
        <Icon name="arrow-right" size={16} className="text-ink-400" aria-hidden />
      )}
    </div>
  );

  if (!gbpUrl) return inner;

  return (
    <TrackedLink
      href={gbpUrl}
      location="google_reviews_badge"
      ctaText="Google Reviews"
      external
      className="inline-block transition-opacity hover:opacity-90"
    >
      {inner}
    </TrackedLink>
  );
}

/** Row of professional trust signals */
export function TrustBar() {
  const items = [
    { icon: "shield-check" as const, label: "Experienced local team" },
    { icon: "map-pin" as const, label: "Edmonton & Surrounding Areas" },
    { icon: "gift" as const, label: "Free quotes" },
    { icon: "clock" as const, label: `${siteConfig.business.matchSlaHours}hr response time` },
  ];

  return (
    <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
      {items.map((item) => (
        <li key={item.label} className="flex items-center gap-2.5 text-body-sm text-ink-600">
          <Icon name={item.icon} size={16} className="text-brand-600" />
          {item.label}
        </li>
      ))}
    </ul>
  );
}

/** Local Edmonton credibility block */
export function EdmontonCredibility() {
  return (
    <div className="rounded-2xl border border-border-subtle bg-surface-0 p-7 shadow-card">
      <p className="section-eyebrow">Locally rooted</p>
      <h3 className="mt-3 text-heading-md text-ink-900">
        Built for Edmonton homeowners
      </h3>
      <ul className="mt-6 space-y-4 text-body-sm leading-relaxed text-ink-600">
        <li className="flex gap-3">
          <Icon name="check" size={16} className="mt-0.5 shrink-0 text-brand-600" />
          Serving T5, T6, T7, and T8 postal codes across Edmonton and surrounding areas
        </li>
        <li className="flex gap-3">
          <Icon name="check" size={16} className="mt-0.5 shrink-0 text-brand-600" />
          Handyman, maintenance, and repair work for houses and condos
        </li>
        <li className="flex gap-3">
          <Icon name="check" size={16} className="mt-0.5 shrink-0 text-brand-600" />
          Free quotes with upfront pricing before work begins
        </li>
        <li className="flex gap-3">
          <Icon name="check" size={16} className="mt-0.5 shrink-0 text-brand-600" />
          Our own in-house team does the work — no middlemen
        </li>
      </ul>
      {siteConfig.social.googleBusiness && (
        <p className="mt-6">
          <Link
            href={siteConfig.social.googleBusiness}
            target="_blank"
            rel="noopener noreferrer"
            className="text-label-md text-brand-700"
          >
            Read our Google reviews →
          </Link>
        </p>
      )}
    </div>
  );
}
