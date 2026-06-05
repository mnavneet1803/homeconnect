import type { LeadFormData } from "@/types/lead";
import { siteConfig } from "@/config/site";

export interface CrmLeadPayload extends LeadFormData {
  leadId: string;
  submittedAt: string;
  source: {
    pageUrl?: string;
    referrer?: string;
    utmSource?: string;
    utmMedium?: string;
    utmCampaign?: string;
  };
  site: {
    name: string;
    url: string;
  };
}

export interface CrmSubmitResult {
  delivered: boolean;
  channel: "webhook" | "none";
  error?: string;
}

function buildPayload(
  lead: LeadFormData,
  leadId: string,
  meta?: Partial<CrmLeadPayload["source"]>
): CrmLeadPayload {
  return {
    ...lead,
    leadId,
    submittedAt: new Date().toISOString(),
    source: {
      pageUrl: meta?.pageUrl,
      referrer: meta?.referrer,
      utmSource: meta?.utmSource,
      utmMedium: meta?.utmMedium,
      utmCampaign: meta?.utmCampaign,
    },
    site: {
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };
}

async function postWebhook(payload: CrmLeadPayload): Promise<CrmSubmitResult> {
  const webhookUrl = process.env.CRM_WEBHOOK_URL;
  if (!webhookUrl) {
    if (process.env.NODE_ENV === "development") {
      console.info("[CRM] No CRM_WEBHOOK_URL — lead logged:", payload.leadId);
    }
    return { delivered: false, channel: "none" };
  }

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    "User-Agent": `${siteConfig.name}/1.0`,
  };

  const secret = process.env.CRM_WEBHOOK_SECRET;
  if (secret) {
    headers["X-Webhook-Secret"] = secret;
  }

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers,
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(10_000),
    });

    if (!res.ok) {
      const text = await res.text().catch(() => "");
      return {
        delivered: false,
        channel: "webhook",
        error: `Webhook returned ${res.status}: ${text.slice(0, 200)}`,
      };
    }

    return { delivered: true, channel: "webhook" };
  } catch (err) {
    const message = err instanceof Error ? err.message : "Webhook request failed";
    return { delivered: false, channel: "webhook", error: message };
  }
}

/** Sends lead to configured CRM webhook (Zapier, HubSpot, GoHighLevel, etc.) */
export async function submitLeadToCrm(
  lead: LeadFormData,
  leadId: string,
  meta?: Partial<CrmLeadPayload["source"]>
): Promise<CrmSubmitResult> {
  const payload = buildPayload(lead, leadId, meta);
  return postWebhook(payload);
}
