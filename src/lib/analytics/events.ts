import { pushToDataLayer } from "@/lib/analytics/data-layer";

export type AnalyticsEventName =
  | "cta_click"
  | "phone_click"
  | "form_start"
  | "form_step"
  | "form_complete"
  | "generate_lead";

interface BaseEventParams {
  page_path?: string;
  cta_location?: string;
  cta_text?: string;
  service_slug?: string;
  form_step?: number;
  lead_id?: string;
}

function baseParams(extra: BaseEventParams = {}): BaseEventParams {
  return {
    page_path:
      typeof window !== "undefined" ? window.location.pathname : undefined,
    ...extra,
  };
}

/** Primary CTA or quote button clicked */
export function trackCtaClick(params: {
  location: string;
  text: string;
  href?: string;
  serviceSlug?: string;
}): void {
  pushToDataLayer({
    event: "cta_click",
    ...baseParams({
      cta_location: params.location,
      cta_text: params.text,
      service_slug: params.serviceSlug,
    }),
    cta_href: params.href,
  });
}

/** tel: link clicked */
export function trackPhoneClick(params: { location: string }): void {
  pushToDataLayer({
    event: "phone_click",
    ...baseParams({ cta_location: params.location }),
  });
}

/** User interacted with quote form for the first time */
export function trackFormStart(params?: { serviceSlug?: string }): void {
  pushToDataLayer({
    event: "form_start",
    ...baseParams({ service_slug: params?.serviceSlug }),
  });
}

/** Multi-step form progressed */
export function trackFormStep(params: {
  step: number;
  serviceSlug?: string;
}): void {
  pushToDataLayer({
    event: "form_step",
    ...baseParams({
      form_step: params.step,
      service_slug: params.serviceSlug,
    }),
  });
}

/** All form fields validated — about to submit */
export function trackFormComplete(params?: { serviceSlug?: string }): void {
  pushToDataLayer({
    event: "form_complete",
    ...baseParams({ service_slug: params?.serviceSlug }),
  });
}

/** Lead successfully submitted — maps to GA4 generate_lead */
export function trackGenerateLead(params: {
  leadId: string;
  serviceSlug: string;
}): void {
  pushToDataLayer({
    event: "generate_lead",
    ...baseParams({
      lead_id: params.leadId,
      service_slug: params.serviceSlug,
    }),
  });
}
