"use client";

import { useRouter } from "next/navigation";
import { useState, useRef } from "react";
import { SERVICES } from "@/constants/services";
import { ROUTES } from "@/constants/routes";
import { Icon } from "@/components/ui/icons";
import { fieldAriaProps } from "@/components/forms/form-field";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils/cn";
import {
  trackFormStart,
  trackFormComplete,
} from "@/lib/analytics/events";
import type { ServiceSlug } from "@/constants/services";

/** Compact 2-field hero form — mobile-first conversion entry point */
export function HeroQuoteForm({ className }: { className?: string }) {
  const router = useRouter();
  const [serviceSlug, setServiceSlug] = useState<ServiceSlug | "">("");
  const [postalCode, setPostalCode] = useState("");
  const [errors, setErrors] = useState<{ serviceSlug?: string; postalCode?: string }>({});
  const [submitting, setSubmitting] = useState(false);
  const started = useRef(false);

  function markStart() {
    if (started.current) return;
    started.current = true;
    trackFormStart({ serviceSlug: serviceSlug || undefined });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    markStart();

    const next: typeof errors = {};
    if (!serviceSlug) next.serviceSlug = "Select a service";
    if (!postalCode.trim()) next.postalCode = "Postal code required";
    else if (
      !/^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z]\s?\d[ABCEGHJ-NPRSTV-Z]\d$/i.test(
        postalCode
      )
    ) {
      next.postalCode = "Enter a valid postal code";
    }

    setErrors(next);
    if (Object.keys(next).length > 0) return;

    trackFormComplete({ serviceSlug });
    setSubmitting(true);

    router.push(
      `${ROUTES.quote}?service=${serviceSlug}&postal=${encodeURIComponent(postalCode)}`
    );
  }

  return (
    <form
      id="hero-quote-form"
      onSubmit={handleSubmit}
      className={cn(
        "card-elevated p-5 md:hidden",
        className
      )}
      noValidate
      onFocus={markStart}
      aria-label="Quick quote request"
    >
      <p className="mb-4 text-heading-sm text-ink-900">Get a free quote in 2 minutes</p>
      <div className="space-y-3">
        <div className="form-group">
          <label htmlFor="hero-service" className="form-label form-label-required">
            Service
          </label>
          <select
            id="hero-service"
            className={cn("form-select", errors.serviceSlug && "form-input-error")}
            value={serviceSlug}
            onChange={(e) => {
              setServiceSlug(e.target.value as ServiceSlug);
              setErrors((p) => ({ ...p, serviceSlug: undefined }));
            }}
            {...fieldAriaProps("hero-service", errors.serviceSlug)}
          >
            <option value="">Select a service</option>
            {SERVICES.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.name}
              </option>
            ))}
          </select>
          {errors.serviceSlug && (
            <p id="hero-service-error" className="form-error" role="alert">
              {errors.serviceSlug}
            </p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="hero-postal" className="form-label form-label-required">
            Postal code
          </label>
          <input
            id="hero-postal"
            type="text"
            autoComplete="postal-code"
            placeholder="T5K 2M5"
            className={cn("form-input", errors.postalCode && "form-input-error")}
            value={postalCode}
            onChange={(e) => {
              setPostalCode(e.target.value.toUpperCase());
              setErrors((p) => ({ ...p, postalCode: undefined }));
            }}
            {...fieldAriaProps("hero-postal", errors.postalCode)}
          />
          {errors.postalCode && (
            <p id="hero-postal-error" className="form-error" role="alert">
              {errors.postalCode}
            </p>
          )}
        </div>
      </div>
      <Button
        type="submit"
        className="mt-5 w-full"
        disabled={submitting}
      >
        {submitting ? "Redirecting…" : "Get Free Quote"}
      </Button>
      <p className="mt-3 flex items-center justify-center gap-1 text-caption text-ink-400">
        <Icon name="lock" size={12} />
        Free · No obligation
      </p>
    </form>
  );
}
