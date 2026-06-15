import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Icon } from "@/components/ui/icons";
import { TrackedLink } from "@/components/analytics/tracked-link";
import { cn } from "@/lib/utils/cn";

function GoogleLogo({ size = 28 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="shrink-0"
    >
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => {
        const fill = Math.min(Math.max(rating - i, 0), 1);
        return (
          <span key={i} className="relative inline-block h-4 w-4">
            <Icon name="star" size={16} className="text-ink-200" />
            {fill > 0 && (
              <span
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${fill * 100}%` }}
              >
                <Icon name="star" size={16} className="fill-warning-500 text-warning-500" />
              </span>
            )}
          </span>
        );
      })}
    </div>
  );
}

interface GoogleReviewsBadgeProps {
  className?: string;
  variant?: "default" | "premium";
}

/** Google Business Profile review summary with link */
export function GoogleReviewsBadge({
  className,
  variant = "default",
}: GoogleReviewsBadgeProps) {
  const { googleRating, googleReviewCount } = siteConfig.reviews;
  const gbpUrl = siteConfig.social.googleBusiness;

  const inner =
    variant === "premium" ? (
      <div
        className={cn(
          "inline-flex items-center gap-4 rounded-2xl border border-border-subtle bg-surface-0 px-5 py-4 shadow-card transition-shadow duration-300 hover:shadow-card-hover md:px-6",
          className
        )}
      >
        <GoogleLogo size={32} />
        <div className="text-left">
          <p className="text-caption font-medium uppercase tracking-wide text-ink-400">
            Google Reviews
          </p>
          <div className="mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-1">
            <StarRating rating={googleRating} />
            <span className="text-label-md font-semibold text-ink-900">
              {googleRating.toFixed(1)}
            </span>
          </div>
          <p className="mt-1 text-body-sm text-ink-500">
            Based on {googleReviewCount}+ verified reviews
          </p>
        </div>
        {gbpUrl && (
          <Icon name="arrow-right" size={18} className="hidden shrink-0 text-ink-400 sm:block" />
        )}
      </div>
    ) : (
      <div
        className={cn(
          "inline-flex items-center gap-3 rounded-xl border border-border-subtle bg-surface-0 px-4 py-3.5 shadow-card",
          className
        )}
      >
        <Icon name="star" size={20} className="fill-warning-500 text-warning-500" />
        <div className="text-left">
          <p className="text-label-md text-ink-900">{googleRating.toFixed(1)} on Google</p>
          <p className="text-caption text-ink-500">{googleReviewCount}+ verified reviews</p>
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
      <h3 className="mt-3 text-heading-md text-ink-900">Built for Edmonton homeowners</h3>
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
