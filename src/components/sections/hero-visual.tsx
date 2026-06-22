"use client";

import Image from "next/image";
import { homePromoBanner } from "@/data/homepage-banners";
import { m } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { easePremium } from "@/lib/motion/variants";

export function HeroVisual() {
  const reducedMotion = usePrefersReducedMotion();

  const banner = (
    <div className="overflow-hidden rounded-2xl border border-border-subtle shadow-elevated">
      <Image
        src={homePromoBanner.src}
        alt={homePromoBanner.alt}
        width={homePromoBanner.width}
        height={homePromoBanner.height}
        sizes="(max-width: 1024px) 100vw, 50vw"
        priority
        className="h-auto w-full"
      />
    </div>
  );

  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none" aria-hidden="true">
      {reducedMotion ? (
        banner
      ) : (
        <m.div
          initial={{ opacity: 0, y: 16, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.12, ease: easePremium }}
        >
          {banner}
        </m.div>
      )}
    </div>
  );
}
