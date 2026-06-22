"use client";

import { useEffect, useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ctaNavigation } from "@/config/navigation";
import { Icon } from "@/components/ui/icons";
import { floatingCtaEnter, floatSubtle } from "@/lib/motion/variants";
import { useQuoteAnchor } from "@/hooks/use-quote-anchor";
import { useHideStickyCta } from "@/hooks/use-hide-sticky-cta";
import { useScrolledPast } from "@/hooks/use-scrolled-past";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
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

/** Desktop floating CTA — appears after scroll, hides near quote forms */
export function FloatingCta() {
  const quoteAnchor = useQuoteAnchor();
  const hiddenByForm = useHideStickyCta();
  const scrolledPast = useScrolledPast(360);
  const navOpen = useMobileNavOpen();
  const reducedMotion = usePrefersReducedMotion();

  const visible = scrolledPast && !hiddenByForm && !navOpen;

  return (
    <div className="pointer-events-none fixed bottom-6 right-6 z-sticky hidden md:block">
      <AnimatePresence>
        {visible && (
          <m.div
            key="floating-cta"
            role="region"
            aria-label="Quick contact"
            initial={reducedMotion ? false : "hidden"}
            animate="visible"
            exit="exit"
            variants={floatingCtaEnter}
            className="pointer-events-auto flex flex-col items-end gap-2.5"
          >
            <m.div
              variants={reducedMotion ? undefined : floatSubtle}
              animate={reducedMotion ? undefined : "animate"}
              className="flex flex-col items-stretch gap-2.5 rounded-2xl border border-border-subtle/80 bg-surface-0/95 p-2 shadow-elevated backdrop-blur-xl"
            >
              <Link
                href={`tel:${siteConfig.phone.tel}`}
                onClick={() => trackPhoneClick({ location: "floating_cta" })}
                className="group flex items-center gap-3 rounded-xl px-4 py-3 text-left transition-colors hover:bg-surface-50"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-50 text-brand-700 ring-1 ring-brand-100 transition-transform duration-300 group-hover:scale-105">
                  <Icon name="phone" size={18} />
                </span>
                <span>
                  <span className="block text-caption text-ink-500">Call us</span>
                  <span className="text-label-md font-medium text-ink-900">
                    {siteConfig.phone.display}
                  </span>
                </span>
              </Link>

              <Link
                href={ctaNavigation.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackCtaClick({
                    location: "floating_cta",
                    text: ctaNavigation.whatsapp.label,
                    href: ctaNavigation.whatsapp.href,
                  })
                }
                className="group flex items-center gap-3 rounded-xl px-4 py-3 text-left transition-colors hover:bg-surface-50"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-50 text-brand-700 ring-1 ring-brand-100 transition-transform duration-300 group-hover:scale-105">
                  <Icon name="whatsapp" size={18} />
                </span>
                <span>
                  <span className="block text-caption text-ink-500">Message us</span>
                  <span className="text-label-md font-medium text-ink-900">
                    {ctaNavigation.whatsapp.label}
                  </span>
                </span>
              </Link>

              <Link
                href={quoteAnchor}
                onClick={() =>
                  trackCtaClick({
                    location: "floating_cta",
                    text: ctaNavigation.primary.label,
                    href: quoteAnchor,
                  })
                }
                className="btn btn-md btn-primary w-full justify-center px-5"
              >
                {ctaNavigation.primary.label}
              </Link>
            </m.div>
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
}
