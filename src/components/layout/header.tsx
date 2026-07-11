"use client";

import { siteConfig } from "@/config/site";
import { ctaNavigation } from "@/config/navigation";
import { DesktopNav, MobileNav } from "@/components/layout/mobile-nav";
import { SiteLogo } from "@/components/brand/site-logo";
import { Button } from "@/components/ui/button";
import { TrackedPhoneLink } from "@/components/analytics/tracked-link";
import { useScrolled } from "@/hooks/use-scrolled";
import { cn } from "@/lib/utils/cn";

export function Header({ className }: { className?: string }) {
  const scrolled = useScrolled(60);

  return (
    <header
      className={cn(
        // Always solid/frosted so nav links stay readable over any hero
        // (dark video or light page) with no scroll-dependent contrast flash.
        "fixed top-0 z-sticky w-full max-w-[100vw] glass-nav transition-all duration-500 ease-smooth",
        "pt-[env(safe-area-inset-top,0px)]",
        className
      )}
    >
      <div className="mx-auto flex max-w-content items-center justify-between px-gutter"
        style={{ height: scrolled ? "64px" : "76px", transition: "height 400ms cubic-bezier(0.19,1,0.22,1)" }}
      >
        <div className={cn("transition-all duration-400", scrolled ? "scale-95" : "scale-100")}>
          <SiteLogo height={44} priority className="sm:hidden" />
          <SiteLogo height={48} priority className="hidden sm:inline-flex" />
        </div>
        <DesktopNav />

        <div className="flex items-center gap-2 sm:gap-3.5">
          <TrackedPhoneLink
            tel={siteConfig.phone.tel}
            display={siteConfig.phone.display}
            location="header"
            className="nav-link hidden font-mono text-sm font-medium md:inline-flex"
          />
          <Button
            href={ctaNavigation.primary.href}
            size="sm"
            className="hidden scale-100 transition-transform duration-200 hover:scale-[1.03] sm:inline-flex"
          >
            {ctaNavigation.primary.label}
          </Button>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
