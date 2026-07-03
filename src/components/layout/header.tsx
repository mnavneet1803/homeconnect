import { siteConfig } from "@/config/site";
import { ctaNavigation } from "@/config/navigation";
import { DesktopNav, MobileNav } from "@/components/layout/mobile-nav";
import { SiteLogo } from "@/components/brand/site-logo";
import { Button } from "@/components/ui/button";
import { TrackedPhoneLink } from "@/components/analytics/tracked-link";
import { cn } from "@/lib/utils/cn";

export function Header({ className }: { className?: string }) {
  return (
    <header
      className={cn(
        "sticky top-[5px] z-sticky w-full max-w-[100vw] border-b border-border bg-surface-50/90 backdrop-blur-md",
        "pt-[env(safe-area-inset-top,0px)]",
        className
      )}
    >
      <div className="mx-auto flex h-16 max-w-content items-center justify-between px-gutter">
        <SiteLogo height={44} priority className="sm:hidden" />
        <SiteLogo height={48} priority className="hidden sm:inline-flex" />
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
            className="hidden sm:inline-flex"
          >
            {ctaNavigation.primary.label}
          </Button>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
