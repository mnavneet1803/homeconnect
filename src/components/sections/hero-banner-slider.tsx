"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { m, AnimatePresence } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { easePremium } from "@/lib/motion/variants";
import type { HomepageBanner } from "@/data/homepage-banners";

interface HeroBannerSliderProps {
  banners: HomepageBanner[];
  autoPlayInterval?: number;
}

export function HeroBannerSlider({
  banners,
  autoPlayInterval = 5000,
}: HeroBannerSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const reducedMotion = usePrefersReducedMotion();

  const goToSlide = useCallback(
    (index: number) => {
      setDirection(index > currentIndex ? 1 : -1);
      setCurrentIndex(index);
    },
    [currentIndex]
  );

  const goToNext = useCallback(() => {
    goToSlide((currentIndex + 1) % banners.length);
  }, [currentIndex, banners.length, goToSlide]);

  const goToPrev = useCallback(() => {
    goToSlide((currentIndex - 1 + banners.length) % banners.length);
  }, [currentIndex, banners.length, goToSlide]);

  // Auto-play
  useEffect(() => {
    if (reducedMotion) return;

    const interval = setInterval(goToNext, autoPlayInterval);
    return () => clearInterval(interval);
  }, [goToNext, autoPlayInterval, reducedMotion]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0,
      scale: 0.95,
    }),
  };

  const transition = {
    x: { type: "spring", stiffness: 300, damping: 30 },
    opacity: { duration: 0.4 },
    scale: { duration: 0.4 },
  };

  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none">
      {/* Slider container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border-subtle shadow-elevated lg:aspect-[3/2]">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <m.div
            key={currentIndex}
            custom={direction}
            variants={reducedMotion ? undefined : slideVariants}
            initial={reducedMotion ? "center" : "enter"}
            animate="center"
            exit={reducedMotion ? "center" : "exit"}
            transition={reducedMotion ? { duration: 0 } : transition}
            className="absolute inset-0"
          >
            <Image
              src={banners[currentIndex].src}
              alt={banners[currentIndex].alt}
              width={banners[currentIndex].width}
              height={banners[currentIndex].height}
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority={currentIndex === 0}
              loading={currentIndex === 0 ? "eager" : "lazy"}
              className="h-full w-full object-cover"
            />
          </m.div>
        </AnimatePresence>

        {/* Navigation arrows */}
        <button
          onClick={goToPrev}
          className="absolute left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow-lg backdrop-blur-sm transition-all hover:bg-white hover:scale-110 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
          aria-label="Previous slide"
        >
          <svg
            className="h-5 w-5 text-ink-900"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow-lg backdrop-blur-sm transition-all hover:bg-white hover:scale-110 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
          aria-label="Next slide"
        >
          <svg
            className="h-5 w-5 text-ink-900"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Progress indicators */}
        <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 ${
                index === currentIndex
                  ? "w-8 bg-white"
                  : "w-2 bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === currentIndex ? "true" : "false"}
            />
          ))}
        </div>
      </div>

      {/* SEO-friendly hidden content for all images */}
      <div className="sr-only">
        {banners.map((banner, index) => (
          <div key={index}>
            {banner.alt}
          </div>
        ))}
      </div>
    </div>
  );
}
