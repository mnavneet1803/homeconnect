import { siteConfig } from "@/config/site";
import { getServiceBySlug } from "@/data";
import { emailTheme, getLogoUrl, getSiteUrl } from "@/lib/email/email-theme";
import { formatPhone, formatPostalCode } from "@/lib/utils/format";
import type { LeadFormData, LeadTimeline } from "@/types/lead";
import type { CrmLeadPayload } from "@/lib/crm/submit-lead";

const { ink, brand, surface, border, borderSubtle, fontFamily, gradientHero, shadowCard, radius } =
  emailTheme;

const TIMELINE_LABELS: Record<LeadTimeline, string> = {
  asap: "As soon as possible",
  "1-2-weeks": "Within 1–2 weeks",
  "1-3-months": "Within 1–3 months",
  researching: "Just researching",
};

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function serviceName(slug: string): string {
  return getServiceBySlug(slug)?.name ?? slug;
}

function formatSubmittedAt(iso: string): string {
  return new Intl.DateTimeFormat("en-CA", {
    dateStyle: "full",
    timeStyle: "short",
    timeZone: "America/Edmonton",
  }).format(new Date(iso));
}

function row(label: string, value: string): string {
  return `
    <tr>
      <td style="padding:14px 18px;border-bottom:1px solid ${borderSubtle};color:${ink[500]};font-size:14px;width:150px;vertical-align:top;font-weight:500;">${escapeHtml(label)}</td>
      <td style="padding:14px 18px;border-bottom:1px solid ${borderSubtle};color:${ink[900]};font-size:14px;line-height:1.5;vertical-align:top;">${escapeHtml(value)}</td>
    </tr>`;
}

function sectionTable(title: string, rows: string): string {
  return `
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid ${border};border-radius:10px;overflow:hidden;margin-bottom:20px;">
      <tr>
        <td colspan="2" style="padding:12px 18px;background:${brand[50]};color:${brand[900]};font-size:13px;font-weight:600;letter-spacing:0.01em;border-bottom:1px solid ${brand[100]};">${escapeHtml(title)}</td>
      </tr>
      ${rows}
    </table>`;
}

function emailHeader(title: string): string {
  const logoUrl = getLogoUrl();
  const siteUrl = getSiteUrl();

  return `
    <tr>
      <td style="background:${gradientHero};padding:32px 32px 28px;text-align:center;border-bottom:3px solid ${brand[700]};">
        <a href="${siteUrl}" style="text-decoration:none;display:inline-block;">
          <img
            src="${logoUrl}"
            alt="${escapeHtml(siteConfig.brand.logo.alt)}"
            width="220"
            height="153"
            style="display:block;margin:0 auto;max-width:220px;width:220px;height:auto;border:0;"
          />
        </a>
        <p style="margin:16px 0 0;color:${ink[500]};font-size:13px;line-height:1.5;">${escapeHtml(siteConfig.tagline)}</p>
        <p style="margin:12px 0 0;display:inline-block;padding:6px 14px;background:${brand[50]};color:${brand[800]};font-size:12px;font-weight:600;border-radius:999px;border:1px solid ${brand[100]};">${escapeHtml(title)}</p>
      </td>
    </tr>`;
}

function emailFooter(): string {
  const notificationEmail =
    process.env.SMTP_FROM_EMAIL ?? process.env.SMTP_USER ?? siteConfig.email;

  return `
    <tr>
      <td style="padding:24px 32px;background:${ink[50]};border-top:1px solid ${border};">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
          <tr>
            <td style="text-align:center;">
              <p style="margin:0 0 8px;color:${ink[700]};font-size:14px;font-weight:600;">${escapeHtml(siteConfig.name)}</p>
              <p style="margin:0 0 12px;color:${ink[500]};font-size:13px;line-height:1.6;">Edmonton, AB · ${escapeHtml(siteConfig.phone.hours)}</p>
              <p style="margin:0;font-size:13px;line-height:1.8;">
                <a href="tel:${siteConfig.phone.tel}" style="color:${brand[700]};text-decoration:none;font-weight:500;">${escapeHtml(siteConfig.phone.display)}</a>
                <span style="color:${ink[400]};"> &nbsp;·&nbsp; </span>
                <a href="mailto:${notificationEmail}" style="color:${brand[700]};text-decoration:none;font-weight:500;">${escapeHtml(notificationEmail)}</a>
                <span style="color:${ink[400]};"> &nbsp;·&nbsp; </span>
                <a href="${getSiteUrl()}" style="color:${brand[700]};text-decoration:none;font-weight:500;">${escapeHtml(getSiteUrl().replace(/^https?:\/\//, ""))}</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>`;
}

function emailShell(title: string, bodyHtml: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta name="color-scheme" content="light">
  <title>${escapeHtml(title)}</title>
</head>
<body style="margin:0;padding:0;background:${ink[50]};font-family:${fontFamily};-webkit-font-smoothing:antialiased;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${ink[50]};padding:40px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:${surface};border-radius:${radius};overflow:hidden;box-shadow:${shadowCard};border:1px solid ${border};">
          ${emailHeader(title)}
          <tr>
            <td style="padding:32px 32px 28px;">${bodyHtml}</td>
          </tr>
          ${emailFooter()}
        </table>
        <p style="margin:20px 0 0;color:${ink[400]};font-size:11px;line-height:1.5;text-align:center;max-width:560px;">
          You received this email from ${escapeHtml(siteConfig.name)}.
        </p>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export function buildTeamNotificationEmail(payload: CrmLeadPayload): {
  subject: string;
  text: string;
  html: string;
} {
  const service = serviceName(payload.serviceSlug);
  const timeline = TIMELINE_LABELS[payload.timeline];
  const submittedAt = formatSubmittedAt(payload.submittedAt);

  const text = [
    `New quote request — ${siteConfig.name}`,
    "",
    `Lead ID: ${payload.leadId}`,
    `Submitted: ${submittedAt}`,
    "",
    "— Contact —",
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `Phone: ${formatPhone(payload.phone)}`,
    "",
    "— Project —",
    `Service: ${service}`,
    `Postal code: ${formatPostalCode(payload.postalCode)}`,
    `Timeline: ${timeline}`,
    `Description: ${payload.description}`,
    "",
    "— Source —",
    `Page: ${payload.source.pageUrl ?? "—"}`,
    `Referrer: ${payload.source.referrer ?? "—"}`,
    `UTM: ${[payload.source.utmSource, payload.source.utmMedium, payload.source.utmCampaign].filter(Boolean).join(" / ") || "—"}`,
  ].join("\n");

  const sourceRows = [
    payload.source.pageUrl ? row("Page URL", payload.source.pageUrl) : "",
    payload.source.referrer ? row("Referrer", payload.source.referrer) : "",
    payload.source.utmSource ? row("UTM Source", payload.source.utmSource) : "",
    payload.source.utmMedium ? row("UTM Medium", payload.source.utmMedium) : "",
    payload.source.utmCampaign ? row("UTM Campaign", payload.source.utmCampaign) : "",
  ]
    .filter(Boolean)
    .join("");

  const bodyHtml = `
    <p style="margin:0 0 6px;color:${ink[900]};font-size:18px;font-weight:600;letter-spacing:-0.01em;">New quote request received</p>
    <p style="margin:0 0 28px;color:${ink[500]};font-size:14px;line-height:1.5;">
      Lead ID <strong style="color:${brand[700]};">${escapeHtml(payload.leadId)}</strong>
      &nbsp;·&nbsp; ${escapeHtml(submittedAt)}
    </p>
    ${sectionTable(
      "Contact information",
      `${row("Name", payload.name)}${row("Email", payload.email)}${row("Phone", formatPhone(payload.phone))}`
    )}
    ${sectionTable(
      "Project details",
      `${row("Service", service)}${row("Postal code", formatPostalCode(payload.postalCode))}${row("Timeline", timeline)}${row("Description", payload.description)}`
    )}
    ${sourceRows ? sectionTable("Source", sourceRows) : ""}
    <table role="presentation" cellpadding="0" cellspacing="0" style="margin-top:8px;">
      <tr>
        <td style="border-radius:10px;background:${brand[700]};">
          <a href="mailto:${escapeHtml(payload.email)}" style="display:inline-block;padding:12px 22px;color:#ffffff;font-size:14px;font-weight:600;text-decoration:none;">Reply to ${escapeHtml(payload.name.split(/\s+/)[0] ?? payload.name)}</a>
        </td>
      </tr>
    </table>`;

  return {
    subject: `New quote request: ${service} — ${payload.name}`,
    text,
    html: emailShell("New quote request", bodyHtml),
  };
}

export function buildCustomerConfirmationEmail(
  lead: LeadFormData,
  leadId: string
): { subject: string; text: string; html: string } {
  const service = serviceName(lead.serviceSlug);
  const firstName = lead.name.trim().split(/\s+/)[0] ?? lead.name;
  const slaHours = siteConfig.business.matchSlaHours;

  const text = [
    `Hi ${firstName},`,
    "",
    `Thank you for reaching out to ${siteConfig.name}. We've received your quote request and our team will review the details shortly.`,
    "",
    "Here's a summary of what you submitted:",
    `Service: ${service}`,
    `Postal code: ${formatPostalCode(lead.postalCode)}`,
    `Timeline: ${TIMELINE_LABELS[lead.timeline]}`,
    `Reference: ${leadId}`,
    "",
    `We aim to contact you within ${slaHours} hours. If your request is urgent, call us at ${siteConfig.phone.display}.`,
    "",
    `Best regards,`,
    `The ${siteConfig.name} Team`,
    siteConfig.phone.display,
    process.env.SMTP_FROM_EMAIL ?? process.env.SMTP_USER ?? siteConfig.email,
  ].join("\n");

  const bodyHtml = `
    <p style="margin:0 0 16px;color:${ink[900]};font-size:17px;font-weight:600;">Hi ${escapeHtml(firstName)},</p>
    <p style="margin:0 0 16px;color:${ink[600]};font-size:15px;line-height:1.65;">
      Thank you for connecting with <strong style="color:${ink[900]};">${escapeHtml(siteConfig.name)}</strong>.
      We've received your quote request and our team will reach out to you shortly.
    </p>
    <p style="margin:0 0 28px;color:${ink[600]};font-size:15px;line-height:1.65;">
      We typically respond within <strong style="color:${brand[700]};">${slaHours} hours</strong>.
      If your project is time-sensitive, call us at
      <a href="tel:${siteConfig.phone.tel}" style="color:${brand[700]};text-decoration:none;font-weight:600;">${escapeHtml(siteConfig.phone.display)}</a>.
    </p>
    ${sectionTable(
      "Your request summary",
      `${row("Service", service)}${row("Postal code", formatPostalCode(lead.postalCode))}${row("Timeline", TIMELINE_LABELS[lead.timeline])}${row("Reference", leadId)}`
    )}
    <p style="margin:0;color:${ink[600]};font-size:15px;line-height:1.65;">
      Best regards,<br>
      <strong style="color:${ink[900]};">The ${escapeHtml(siteConfig.name)} Team</strong>
    </p>`;

  return {
    subject: `We received your quote request — ${siteConfig.name}`,
    text,
    html: emailShell("Thank you for your request", bodyHtml),
  };
}
