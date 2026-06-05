"use client";

import { useState, useEffect, useCallback } from "react";
import { m, AnimatePresence } from "framer-motion";
import { testimonialSlide } from "@/lib/motion/variants";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { Icon } from "@/components/ui/icons";
import { cn } from "@/lib/utils/cn";
import type { Testimonial } from "@/types/testimonial";
import { SERVICE_BY_SLUG } from "@/constants/services";

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
  autoPlayMs?: number;
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Icon
          key={i}
          name="star"
          size={16}
          className={
            i < rating ? "fill-warning-500 text-warning-500" : "text-ink-200"
          }
        />
      ))}
    </div>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const service = SERVICE_BY_SLUG[testimonial.serviceSlug];
  const initials = testimonial.author
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  return (
    <blockquote className="card flex h-full flex-col p-6 md:p-8">
      <StarRating rating={testimonial.rating} />
      <p className="mt-4 flex-1 text-body-md text-ink-700">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <footer className="mt-6 flex items-center gap-3 border-t border-border-subtle pt-6">
        <div
          className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-50 text-label-sm font-medium text-brand-800"
          aria-hidden="true"
        >
          {initials}
        </div>
        <div>
          <cite className="text-label-md not-italic text-ink-900">
            {testimonial.author}
          </cite>
          <p className="text-caption text-ink-500">
            {service.name} · {testimonial.location}
          </p>
        </div>
      </footer>
    </blockquote>
  );
}

export function TestimonialCarousel({
  testimonials,
  autoPlayMs = 6000,
}: TestimonialCarouselProps) {
  const [[index, direction], setIndex] = useState([0, 0]);
  const reducedMotion = usePrefersReducedMotion();

  const paginate = useCallback(
    (newDirection: number) => {
      setIndex(([prev]) => {
        const next = (prev + newDirection + testimonials.length) % testimonials.length;
        return [next, newDirection];
      });
    },
    [testimonials.length]
  );

  useEffect(() => {
    if (reducedMotion || testimonials.length <= 1) return;
    const timer = setInterval(() => paginate(1), autoPlayMs);
    return () => clearInterval(timer);
  }, [autoPlayMs, paginate, reducedMotion, testimonials.length]);

  const current = testimonials[index];

  if (reducedMotion) {
    return (
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((t) => (
          <TestimonialCard key={t.id} testimonial={t} />
        ))}
      </div>
    );
  }

  return (
    <div>
      {/* Desktop: 3-column staggered grid with hover */}
      <div className="hidden md:grid md:grid-cols-3 md:gap-6">
        {testimonials.map((t, i) => (
          <m.div
            key={t.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
          >
            <TestimonialCard testimonial={t} />
          </m.div>
        ))}
      </div>

      {/* Mobile: crossfade carousel */}
      <div className="md:hidden">
        <div className="relative min-h-[280px]">
          <AnimatePresence mode="wait" custom={direction}>
            <m.div
              key={current.id}
              custom={direction}
              variants={testimonialSlide}
              initial="enter"
              animate="center"
              exit="exit"
            >
              <TestimonialCard testimonial={current} />
            </m.div>
          </AnimatePresence>
        </div>

        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            type="button"
            className="touch-target flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface-0 text-ink-600 transition-colors hover:border-ink-300 hover:bg-ink-50"
            aria-label="Previous testimonial"
            onClick={() => paginate(-1)}
          >
            <Icon name="arrow-right" size={18} className="rotate-180" />
          </button>
          <div className="flex gap-2" role="tablist" aria-label="Testimonials">
            {testimonials.map((t, i) => (
              <button
                key={t.id}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Testimonial ${i + 1}`}
                className={cn(
                  "h-1.5 rounded-pill transition-all duration-300",
                  i === index ? "w-6 bg-brand-600" : "w-1.5 bg-ink-200"
                )}
                onClick={() => setIndex([i, i > index ? 1 : -1])}
              />
            ))}
          </div>
          <button
            type="button"
            className="touch-target flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface-0 text-ink-600 transition-colors hover:border-ink-300 hover:bg-ink-50"
            aria-label="Next testimonial"
            onClick={() => paginate(1)}
          >
            <Icon name="arrow-right" size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
