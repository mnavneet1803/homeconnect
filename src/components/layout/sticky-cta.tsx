"use client";

import { siteConfig } from "@/config/site";
import { MagneticButton } from "@/components/motion/magnetic-button";
import { useQuoteAnchor } from "@/hooks/use-quote-anchor";
import { useHideStickyCta } from "@/hooks/use-hide-sticky-cta";
import { trackPhoneClick, trackCtaClick } from "@/lib/analytics/events";
import { cn } from "@/lib/utils/cn";

export function StickyCtaBar() {
  const quoteAnchor = useQuoteAnchor();
  const hidden = useHideStickyCta();

  return (
    <div
      className={cn(
        "mobile-sticky-cta transition-transform duration-300",
        hidden && "pointer-events-none translate-y-full opacity-0"
      )}
      role="region"
      aria-label="Quick actions"
      aria-hidden={hidden}
    >
      <MagneticButton
        href={`tel:${siteConfig.phone.tel}`}
        variant="secondary"
        className="btn-md flex-1 touch-target"
        magnetic={false}
        onClick={() => trackPhoneClick({ location: "sticky_cta" })}
      >
        Call
      </MagneticButton>
      <MagneticButton
        href={quoteAnchor}
        className="btn-md flex-[1.4] touch-target"
        magnetic={false}
        onClick={() =>
          trackCtaClick({
            location: "sticky_cta",
            text: "Get Free Quotes",
            href: quoteAnchor,
          })
        }
      >
        Get Free Quotes
      </MagneticButton>
    </div>
  );
}
