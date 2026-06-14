"use client";

import { useEffect, useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { useQuoteAnchor } from "@/hooks/use-quote-anchor";
import { useHideStickyCta } from "@/hooks/use-hide-sticky-cta";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { slideUpDrawer } from "@/lib/motion/variants";
import { trackPhoneClick, trackCtaClick } from "@/lib/analytics/events";

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
    <AnimatePresence>
      {!hidden && (
        <m.div
          key="mobile-sticky-cta"
          role="region"
          aria-label="Contact actions"
          initial={reducedMotion ? false : "hidden"}
          animate="visible"
          exit="exit"
          variants={slideUpDrawer}
          className="mobile-sticky-cta"
        >
          <Button
            href={`tel:${siteConfig.phone.tel}`}
            variant="secondary"
            size="sm"
            className="min-w-0 flex-1"
            onClick={() => trackPhoneClick({ location: "sticky_cta" })}
          >
            Call Now
          </Button>
          <Button
            href={quoteAnchor}
            size="sm"
            className="min-w-0 flex-[1.2] leading-tight"
            onClick={() =>
              trackCtaClick({
                location: "sticky_cta",
                text: "Request a Free Quote",
                href: quoteAnchor,
              })
            }
          >
            Request a Free Quote
          </Button>
        </m.div>
      )}
    </AnimatePresence>
  );
}
