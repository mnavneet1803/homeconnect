import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ctaNavigation } from "@/config/navigation";
import { ROUTES } from "@/constants/routes";
import { DesktopNav, MobileNav } from "@/components/layout/mobile-nav";
import { Button } from "@/components/ui/button";
import { TrackedPhoneLink } from "@/components/analytics/tracked-link";
import { cn } from "@/lib/utils/cn";

export function Header({ className }: { className?: string }) {
  return (
    <header
      className={cn(
        "sticky top-0 z-sticky w-full max-w-[100vw] border-b border-border-subtle/80 bg-surface-0/95 backdrop-blur-lg",
        "pt-[env(safe-area-inset-top,0px)]",
        className
      )}
    >
      <div className="mx-auto flex h-16 max-w-content items-center justify-between px-gutter lg:px-gutter-lg">
        <Link
          href={ROUTES.home}
          className="font-display text-heading-sm tracking-tight text-ink-900 hover:text-ink-900"
          aria-label={`${siteConfig.name} home`}
        >
          {siteConfig.shortName}
        </Link>

        <DesktopNav />

        <div className="flex items-center gap-2 sm:gap-3">
          <TrackedPhoneLink
            tel={siteConfig.phone.tel}
            display={siteConfig.phone.display}
            location="header"
            className="hidden text-label-md text-ink-600 transition-colors hover:text-brand-700 md:inline-flex"
          />
          <Button
            href={ctaNavigation.secondary.href}
            variant="secondary"
            size="sm"
            className="hidden sm:inline-flex"
          >
            {ctaNavigation.secondary.label}
          </Button>
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
