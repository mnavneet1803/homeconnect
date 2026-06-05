"use client";

import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/config/site";
import { ctaNavigation } from "@/config/navigation";
import { ROUTES } from "@/constants/routes";
import { getAllServices } from "@/data";
import { MagneticButton } from "@/components/motion/magnetic-button";
import { TrackedPhoneLink } from "@/components/analytics/tracked-link";
import { Icon } from "@/components/ui/icons";
import { useFocusTrap } from "@/hooks/use-focus-trap";
import { cn } from "@/lib/utils/cn";

const navLinks = [
  { label: "Services", href: ROUTES.services.index },
  { label: "Service Areas", href: ROUTES.locations.index },
  { label: "How It Works", href: ROUTES.howItWorks },
  { label: "About", href: ROUTES.about },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const services = getAllServices();

  const closeMenu = useCallback(() => setOpen(false), []);
  const trapRef = useFocusTrap(open, closeMenu);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (open) {
      document.body.style.overflow = "hidden";
      root.setAttribute("data-mobile-nav-open", "");
    } else {
      document.body.style.overflow = "";
      root.removeAttribute("data-mobile-nav-open");
    }
    return () => {
      document.body.style.overflow = "";
      root.removeAttribute("data-mobile-nav-open");
    };
  }, [open]);

  const drawer = (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            key="mobile-nav-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-overlay bg-surface-overlay lg:hidden"
            onClick={closeMenu}
            aria-hidden="true"
          />
          <motion.nav
            key="mobile-nav-panel"
            ref={trapRef}
            id="mobile-nav-panel"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: [0, 0, 0.2, 1] }}
            className="fixed inset-y-0 right-0 z-modal flex w-full max-w-sm flex-col bg-surface-0 shadow-xl lg:hidden"
            aria-label="Mobile navigation"
          >
            <div className="flex items-center justify-between border-b border-border-subtle px-gutter py-4">
              <span className="font-display text-heading-sm text-ink-900">
                {siteConfig.shortName}
              </span>
              <button
                type="button"
                className="touch-target rounded-lg p-2 text-ink-500 hover:bg-ink-50"
                aria-label="Close menu"
                onClick={closeMenu}
              >
                <Icon name="x" size={22} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto overscroll-contain px-gutter py-6">
              <ul className="space-y-1">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="block rounded-lg px-3 py-3 text-body-md text-ink-700 hover:bg-ink-50 hover:text-ink-900"
                      onClick={closeMenu}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <p className="mt-6 mb-3 px-3 text-label-sm uppercase tracking-widest text-ink-400">
                Services
              </p>
              <ul className="grid grid-cols-2 gap-1">
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={s.href}
                      className="block rounded-lg px-3 py-2.5 text-body-sm text-ink-600 hover:bg-ink-50 hover:text-ink-900"
                      onClick={closeMenu}
                    >
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-border-subtle p-gutter safe-bottom">
              <TrackedPhoneLink
                tel={siteConfig.phone.tel}
                display={siteConfig.phone.display}
                location="mobile_nav"
                className="mb-3 flex items-center justify-center gap-2 py-2 text-label-md text-ink-700"
              />
              <MagneticButton
                href={ctaNavigation.primary.href}
                className="w-full"
                magnetic={false}
                onClick={closeMenu}
              >
                {ctaNavigation.primary.label}
              </MagneticButton>
            </div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <button
        type="button"
        className="btn-ghost btn-sm touch-target lg:hidden"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        onClick={() => setOpen((prev) => !prev)}
      >
        <Icon name={open ? "x" : "menu"} size={22} />
      </button>

      {mounted ? createPortal(drawer, document.body) : null}
    </>
  );
}

export function DesktopNav({ className }: { className?: string }) {
  const services = getAllServices();

  return (
    <nav className={cn("hidden items-center gap-8 lg:flex", className)} aria-label="Main">
      <div className="group relative">
        <Link
          href={ROUTES.services.index}
          className="inline-flex items-center gap-1 text-label-md text-ink-700 hover:text-ink-900"
          aria-haspopup="true"
        >
          Services
          <Icon name="chevron-down" size={16} className="opacity-50" aria-hidden />
        </Link>
        <div className="invisible absolute left-0 top-full z-dropdown pt-3 opacity-0 transition-all duration-fast group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
          <div
            className="w-72 rounded-2xl border border-border-subtle bg-surface-0 p-2 shadow-lg"
            role="menu"
          >
            {services.map((s) => (
              <Link
                key={s.slug}
                href={s.href}
                className="block rounded-xl px-4 py-3 hover:bg-ink-50"
                role="menuitem"
              >
                <span className="text-label-md text-ink-900">{s.name}</span>
                <span className="mt-0.5 block text-caption text-ink-500">
                  {s.shortDescription}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
      {navLinks.slice(1).map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-label-md text-ink-700 hover:text-ink-900"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
