"use client";

import { useState, useRef, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { m } from "framer-motion";
import { SERVICES } from "@/constants/services";
import { ROUTES } from "@/constants/routes";
import { siteConfig } from "@/config/site";
import { Icon } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { fieldAriaProps } from "@/components/forms/form-field";
import { TrackedPhoneLink } from "@/components/analytics/tracked-link";
import { cn } from "@/lib/utils/cn";
import {
  trackFormStart,
  trackFormStep,
  trackFormComplete,
  trackGenerateLead,
} from "@/lib/analytics/events";
import type { LeadTimeline } from "@/types/lead";
import type { ServiceSlug } from "@/constants/services";

const STEPS = ["Service", "Project", "Contact"] as const;
const TIMELINES: { value: LeadTimeline; label: string }[] = [
  { value: "asap", label: "As soon as possible" },
  { value: "1-2-weeks", label: "Within 1–2 weeks" },
  { value: "1-3-months", label: "Within 1–3 months" },
  { value: "researching", label: "Just researching" },
];

interface FormState {
  serviceSlug: ServiceSlug | "";
  postalCode: string;
  description: string;
  timeline: LeadTimeline;
  name: string;
  phone: string;
  email: string;
}

const initialState: FormState = {
  serviceSlug: "",
  postalCode: "",
  description: "",
  timeline: "asap",
  name: "",
  phone: "",
  email: "",
};

function getUtmParams(): Record<string, string | undefined> {
  if (typeof window === "undefined") return {};
  const params = new URLSearchParams(window.location.search);
  return {
    utmSource: params.get("utm_source") ?? undefined,
    utmMedium: params.get("utm_medium") ?? undefined,
    utmCampaign: params.get("utm_campaign") ?? undefined,
  };
}

interface QuoteFormProps {
  className?: string;
  id?: string;
  defaultServiceSlug?: ServiceSlug;
  compact?: boolean;
}

export function QuoteForm({
  className,
  id,
  defaultServiceSlug,
  compact = false,
}: QuoteFormProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const serviceFromUrl = searchParams.get("service") as ServiceSlug | null;

  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormState>({
    ...initialState,
    serviceSlug: defaultServiceSlug ?? serviceFromUrl ?? "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const formStarted = useRef(false);
  const stepAnnouncer = useRef<HTMLDivElement>(null);

  const announceStep = useCallback((newStep: number) => {
    if (stepAnnouncer.current) {
      stepAnnouncer.current.textContent = `Step ${newStep + 1} of 3: ${STEPS[newStep]}`;
    }
  }, []);

  function markFormStart() {
    if (formStarted.current) return;
    formStarted.current = true;
    trackFormStart({
      serviceSlug: form.serviceSlug || defaultServiceSlug || undefined,
    });
  }

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    markFormStart();
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  function validateStep(): boolean {
    const next: Partial<Record<keyof FormState, string>> = {};

    if (step === 0) {
      if (!form.serviceSlug) next.serviceSlug = "Please select a service";
      if (!form.postalCode.trim()) next.postalCode = "Postal code is required";
      else if (
        !/^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z]\s?\d[ABCEGHJ-NPRSTV-Z]\d$/i.test(
          form.postalCode
        )
      ) {
        next.postalCode = "Enter a valid Canadian postal code";
      }
    }

    if (step === 1) {
      if (form.description.trim().length < 20) {
        next.description = "Please describe your project (20 characters minimum)";
      }
    }

    if (step === 2) {
      if (!form.name.trim()) next.name = "Name is required";
      if (!form.phone.trim()) next.phone = "Phone is required";
      if (!form.email.trim()) next.email = "Email is required";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
        next.email = "Enter a valid email";
      }
    }

    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validateStep()) return;

    if (step < STEPS.length - 1) {
      const nextStep = step + 1;
      trackFormStep({
        step: nextStep + 1,
        serviceSlug: form.serviceSlug || undefined,
      });
      setStep(nextStep);
      announceStep(nextStep);
      return;
    }

    trackFormComplete({ serviceSlug: form.serviceSlug || undefined });
    setSubmitting(true);
    setSubmitError(null);

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          source: {
            pageUrl: window.location.href,
            referrer: document.referrer || undefined,
            ...getUtmParams(),
          },
        }),
      });
      const data = await res.json();

      if (!res.ok) {
        setSubmitError(data.message ?? "Something went wrong. Please try again.");
        if (data.errors) {
          const fieldErrors: Partial<Record<keyof FormState, string>> = {};
          for (const [key, msgs] of Object.entries(data.errors)) {
            fieldErrors[key as keyof FormState] = (msgs as string[])[0];
          }
          setErrors(fieldErrors);
        }
        return;
      }

      trackGenerateLead({
        leadId: data.leadId,
        serviceSlug: form.serviceSlug as string,
      });

      router.push(`${ROUTES.thankYou}?lead=${data.leadId}`);
    } catch {
      setSubmitError("Network error. Please try again or call us.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form
      id={id}
      onSubmit={handleSubmit}
      className={cn("card-elevated overflow-hidden", className)}
      noValidate
      onFocus={markFormStart}
    >
      <div
        ref={stepAnnouncer}
        className="sr-only"
        aria-live="polite"
        aria-atomic="true"
      />

      {!compact && (
        <div className="border-b border-border-subtle px-6 py-5 md:px-8">
          <div
            className="flex gap-2"
            role="progressbar"
            aria-valuenow={step + 1}
            aria-valuemin={1}
            aria-valuemax={3}
            aria-label={`Step ${step + 1} of 3: ${STEPS[step]}`}
          >
            {STEPS.map((label, i) => (
              <div key={label} className="flex-1">
                <div
                  className={cn(
                    "h-1 rounded-pill transition-colors duration-fast",
                    i <= step ? "bg-brand-600" : "bg-ink-200"
                  )}
                />
                <p className="mt-2 text-caption text-ink-500">{label}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="px-6 py-6 md:px-8">
        <m.div
          key={step}
          initial={{ opacity: 0, x: 8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {step === 0 && (
            <div className="space-y-5">
              <div className="form-group">
                <label htmlFor="serviceSlug" className="form-label form-label-required">
                  Service type
                </label>
                <select
                  id="serviceSlug"
                  className={cn("form-select", errors.serviceSlug && "form-input-error")}
                  value={form.serviceSlug}
                  onChange={(e) =>
                    updateField("serviceSlug", e.target.value as ServiceSlug)
                  }
                  {...fieldAriaProps("serviceSlug", errors.serviceSlug)}
                >
                  <option value="">Select a service</option>
                  {SERVICES.map((s) => (
                    <option key={s.slug} value={s.slug}>
                      {s.name}
                    </option>
                  ))}
                </select>
                {errors.serviceSlug && (
                  <p id="serviceSlug-error" className="form-error" role="alert">
                    {errors.serviceSlug}
                  </p>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="postalCode" className="form-label form-label-required">
                  Postal code
                </label>
                <input
                  id="postalCode"
                  type="text"
                  autoComplete="postal-code"
                  placeholder="T5K 2M5"
                  className={cn("form-input", errors.postalCode && "form-input-error")}
                  value={form.postalCode}
                  onChange={(e) => updateField("postalCode", e.target.value.toUpperCase())}
                  {...fieldAriaProps(
                    "postalCode",
                    errors.postalCode,
                    "We serve Edmonton and the Capital Region"
                  )}
                />
                <p id="postalCode-helper" className="form-helper">
                  We serve Edmonton and the Capital Region
                </p>
                {errors.postalCode && (
                  <p id="postalCode-error" className="form-error" role="alert">
                    {errors.postalCode}
                  </p>
                )}
              </div>
            </div>
          )}

          {step === 1 && !compact && (
            <div className="space-y-5">
              <div className="form-group">
                <label htmlFor="description" className="form-label form-label-required">
                  Project description
                </label>
                <textarea
                  id="description"
                  className={cn("form-textarea", errors.description && "form-input-error")}
                  placeholder="Tell us about your project — scope, timeline, and any details that help us prepare your quote."
                  value={form.description}
                  onChange={(e) => updateField("description", e.target.value)}
                  {...fieldAriaProps("description", errors.description)}
                />
                {errors.description && (
                  <p id="description-error" className="form-error" role="alert">
                    {errors.description}
                  </p>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="timeline" className="form-label">
                  Timeline
                </label>
                <select
                  id="timeline"
                  className="form-select"
                  value={form.timeline}
                  onChange={(e) => updateField("timeline", e.target.value as LeadTimeline)}
                >
                  {TIMELINES.map((t) => (
                    <option key={t.value} value={t.value}>
                      {t.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-5">
              <div className="form-group">
                <label htmlFor="name" className="form-label form-label-required">
                  Full name
                </label>
                <input
                  id="name"
                  type="text"
                  autoComplete="name"
                  className={cn("form-input", errors.name && "form-input-error")}
                  value={form.name}
                  onChange={(e) => updateField("name", e.target.value)}
                  {...fieldAriaProps("name", errors.name)}
                />
                {errors.name && (
                  <p id="name-error" className="form-error" role="alert">
                    {errors.name}
                  </p>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="phone" className="form-label form-label-required">
                  Phone
                </label>
                <input
                  id="phone"
                  type="tel"
                  autoComplete="tel"
                  className={cn("form-input", errors.phone && "form-input-error")}
                  value={form.phone}
                  onChange={(e) => updateField("phone", e.target.value)}
                  {...fieldAriaProps("phone", errors.phone)}
                />
                {errors.phone && (
                  <p id="phone-error" className="form-error" role="alert">
                    {errors.phone}
                  </p>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label form-label-required">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  className={cn("form-input", errors.email && "form-input-error")}
                  value={form.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  {...fieldAriaProps("email", errors.email)}
                />
                {errors.email && (
                  <p id="email-error" className="form-error" role="alert">
                    {errors.email}
                  </p>
                )}
              </div>
            </div>
          )}
        </m.div>

        {submitError && (
          <p
            className="mt-4 rounded-lg bg-error-50 px-4 py-3 text-body-sm text-error-700"
            role="alert"
          >
            {submitError}
          </p>
        )}

        <div className="mt-6 flex gap-3">
          {step > 0 && !compact && (
            <Button
              type="button"
              variant="secondary"
              onClick={() => {
                const prev = step - 1;
                setStep(prev);
                announceStep(prev);
              }}
              disabled={submitting}
            >
              Back
            </Button>
          )}
          <Button
            type="submit"
            className="flex-1"
            disabled={submitting}
            onClick={() =>
              trackFormStart({ serviceSlug: form.serviceSlug || undefined })
            }
          >
            {submitting
              ? "Submitting…"
              : compact
                ? "Get Quote"
                : step === STEPS.length - 1
                  ? "Submit & get quote"
                  : "Continue"}
          </Button>
        </div>

        <p className="mt-4 flex items-center justify-center gap-1.5 text-caption text-ink-500">
          <Icon name="lock" size={14} />
          Free · No obligation ·{" "}
          <a href={ROUTES.legal.privacy} className="underline hover:text-brand-700">
            Privacy protected
          </a>
        </p>
      </div>
    </form>
  );
}

export function QuoteFormReassurance() {
  return (
    <div className="space-y-6">
      <ul className="space-y-4">
        {[
          "Our own in-house crew",
          `Response within ${siteConfig.business.matchSlaHours} hours`,
          "Free quote, no obligation",
        ].map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-700">
              <Icon name="check" size={14} />
            </span>
            <span className="text-body-md text-ink-700">{item}</span>
          </li>
        ))}
      </ul>
      <p className="text-body-sm text-ink-500">
        <Icon name="lock" size={14} className="mr-1 inline" />
        We never sell your information. Your details are used only to prepare your quote.
      </p>
      <p className="text-body-sm text-ink-600">
        Prefer to talk?{" "}
        <TrackedPhoneLink
          tel={siteConfig.phone.tel}
          display={siteConfig.phone.display}
          location="form_reassurance"
          className="font-medium text-brand-700"
        />
        <span className="text-ink-400"> · {siteConfig.phone.hours}</span>
      </p>
    </div>
  );
}
