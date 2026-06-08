"use client";

import { useEffect, useState } from "react";
import { m } from "framer-motion";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { useQuoteAnchor } from "@/hooks/use-quote-anchor";
import { useHideStickyCta } from "@/hooks/use-hide-sticky-cta";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { trackPhoneClick, trackCtaClick } from "@/lib/analytics/events";
import { cn } from "@/lib/utils/cn";

function useMobileNavOpen(): boolean {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const sync = () => setOpen(root.hasAttribute("data-mobile-nav-open"));
    sync();

    const observer = new MutationObserver(sync);
    observer.observe(root, { attributes: true, attributeFilter: ["data-mobile-nav-open"] });
    return () => observer.disconnect();
  }, []);

  return open;
}

export function StickyCtaBar() {
  const quoteAnchor = useQuoteAnchor();
  const hiddenByForm = useHideStickyCta();
  const navOpen = useMobileNavOpen();
  const reducedMotion = usePrefersReducedMotion();

  const hidden = hiddenByForm || navOpen;

  return (
    <m.div
      role="region"
      aria-label="Contact actions"
      aria-hidden={hidden}
      initial={reducedMotion ? false : { y: "100%", opacity: 0 }}
      animate={{
        y: hidden ? "100%" : 0,
        opacity: hidden ? 0 : 1,
      }}
      transition={{
        duration: reducedMotion ? 0 : 0.35,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={cn("mobile-sticky-cta", hidden && "pointer-events-none")}
    >
      <Button
        href={`tel:${siteConfig.phone.tel}`}
        variant="secondary"
        size="md"
        className="flex-1 touch-target"
        onClick={() => trackPhoneClick({ location: "sticky_cta" })}
      >
        Call Now
      </Button>
      <Button
        href={quoteAnchor}
        size="md"
        className="flex-[1.35] touch-target"
        onClick={() =>
          trackCtaClick({
            location: "sticky_cta",
            text: "Get Free Quotes",
            href: quoteAnchor,
          })
        }
      >
        Get Free Quotes
      </Button>
    </m.div>
  );
}
