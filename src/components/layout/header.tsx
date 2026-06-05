import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ctaNavigation } from "@/config/navigation";
import { ROUTES } from "@/constants/routes";
import { DesktopNav, MobileNav } from "@/components/layout/mobile-nav";
import { MagneticButton } from "@/components/motion/magnetic-button";
import { TrackedPhoneLink } from "@/components/analytics/tracked-link";
import { cn } from "@/lib/utils/cn";

export function Header({ className }: { className?: string }) {
  return (
    <header
      className={cn(
        "sticky top-0 z-sticky border-b border-border-subtle bg-surface-0/80 backdrop-blur-md transition-shadow duration-300",
        className
      )}
    >
      <div className="mx-auto flex h-16 max-w-content items-center justify-between px-gutter lg:px-gutter-lg">
        <Link
          href={ROUTES.home}
          className="font-display text-heading-sm text-ink-900 hover:text-ink-900"
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
            className="hidden text-label-md text-ink-700 transition-colors hover:text-brand-700 sm:inline-flex"
          />
          <MagneticButton
            href={ctaNavigation.primary.href}
            size="sm"
            className="hidden sm:inline-flex"
            magnetic={false}
          >
            {ctaNavigation.primary.label}
          </MagneticButton>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
