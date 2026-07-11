"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { useInViewAutoplay } from "@/hooks/use-in-view-autoplay";
import { HERO_MEDIA } from "@/data/homepage-media";
import { cn } from "@/lib/utils/cn";

/**
 * Full-bleed hero backdrop: a muted loop that autoplays while in view — the
 * landscape cut on desktop, the portrait cut on mobile. The poster paints first
 * (LCP-safe) and stands in when autoplay is blocked or reduced-motion is
 * preferred. Readability gradients + CTAs are layered by the hero section.
 */
export function HeroMedia({ className }: { className?: string }) {
  const reducedMotion = usePrefersReducedMotion();
  const [videoSrc, setVideoSrc] = useState<string | null>(null);
  const { ref } = useInViewAutoplay();

  useEffect(() => {
    if (reducedMotion) {
      setVideoSrc(null);
      return;
    }
    const desktop = window.matchMedia("(min-width: 1024px)").matches;
    setVideoSrc(desktop ? HERO_MEDIA.desktop.src : HERO_MEDIA.mobile.src);
  }, [reducedMotion]);

  return (
    <div className={cn("absolute inset-0 h-full w-full overflow-hidden", className)}>
      {/* Poster paints first (LCP-safe). */}
      <Image
        src={HERO_MEDIA.desktop.poster}
        alt="Home Solution Services handyman working in an Edmonton home"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {videoSrc && (
        <video
          ref={ref}
          key={videoSrc}
          className="absolute inset-0 h-full w-full object-cover object-center"
          src={videoSrc}
          poster={HERO_MEDIA.desktop.poster}
          muted
          loop
          playsInline
          preload="none"
        />
      )}
    </div>
  );
}
