"use client";

import { useEffect, useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ctaNavigation } from "@/config/navigation";
import { Icon } from "@/components/ui/icons";
import { useQuoteAnchor } from "@/hooks/use-quote-anchor";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { slideUpDrawer } from "@/lib/motion/variants";
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
  const navOpen = useMobileNavOpen();
  const reducedMotion = usePrefersReducedMotion();

  return (
    <AnimatePresence>
      {!navOpen && (
        <m.div
          key="mobile-sticky-cta"
          role="region"
          aria-label="Quick contact"
          initial={reducedMotion ? false : "hidden"}
          animate="visible"
          exit="exit"
          variants={slideUpDrawer}
          className="mobile-sticky-cta"
        >
          <Link
            href={`tel:${siteConfig.phone.tel}`}
            className="mobile-sticky-cta__action"
            onClick={() => trackPhoneClick({ location: "sticky_cta" })}
          >
            <Icon name="phone" size={18} className="shrink-0 text-pine-800" aria-hidden />
            <span>Call</span>
          </Link>

          <Link
            href={ctaNavigation.whatsapp.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-sticky-cta__action"
            onClick={() =>
              trackCtaClick({
                location: "sticky_cta",
                text: ctaNavigation.whatsapp.label,
                href: ctaNavigation.whatsapp.href,
              })
            }
          >
            <Icon name="whatsapp" size={18} className="shrink-0 text-pine-800" aria-hidden />
            <span>WhatsApp</span>
          </Link>

          <Link
            href={quoteAnchor}
            className={cn("mobile-sticky-cta__quote")}
            onClick={() =>
              trackCtaClick({
                location: "sticky_cta",
                text: ctaNavigation.primary.label,
                href: quoteAnchor,
              })
            }
          >
            <Icon name="clipboard-list" size={17} className="shrink-0" aria-hidden />
            <span>Free Quote</span>
          </Link>
        </m.div>
      )}
    </AnimatePresence>
  );
}
