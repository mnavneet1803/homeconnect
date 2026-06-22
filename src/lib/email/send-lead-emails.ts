import type { CrmLeadPayload } from "@/lib/crm/submit-lead";
import {
  buildCustomerConfirmationEmail,
  buildTeamNotificationEmail,
} from "@/lib/email/lead-email-templates";
import {
  getFromAddress,
  getLeadNotificationEmail,
  getSmtpTransporter,
  isSmtpConfigured,
} from "@/lib/email/smtp";

export interface LeadEmailResult {
  delivered: boolean;
  teamNotified: boolean;
  customerNotified: boolean;
  error?: string;
}

export async function sendLeadEmails(payload: CrmLeadPayload): Promise<LeadEmailResult> {
  if (!isSmtpConfigured()) {
    if (process.env.NODE_ENV === "development") {
      console.info("[email] SMTP not configured — skipping lead emails:", payload.leadId);
    }
    return { delivered: false, teamNotified: false, customerNotified: false };
  }

  const teamEmail = getLeadNotificationEmail();
  if (!teamEmail) {
    return {
      delivered: false,
      teamNotified: false,
      customerNotified: false,
      error: "No LEAD_NOTIFICATION_EMAIL or SMTP_FROM_EMAIL configured",
    };
  }

  const transporter = getSmtpTransporter();
  const from = getFromAddress();
  const teamMessage = buildTeamNotificationEmail(payload);
  const customerMessage = buildCustomerConfirmationEmail(payload, payload.leadId);

  let teamNotified = false;
  let customerNotified = false;
  const errors: string[] = [];

  try {
    await transporter.sendMail({
      from,
      to: teamEmail,
      replyTo: payload.email,
      subject: teamMessage.subject,
      text: teamMessage.text,
      html: teamMessage.html,
    });
    teamNotified = true;
  } catch (err) {
    const message = err instanceof Error ? err.message : "Team notification failed";
    errors.push(message);
  }

  try {
    await transporter.sendMail({
      from,
      to: payload.email,
      subject: customerMessage.subject,
      text: customerMessage.text,
      html: customerMessage.html,
    });
    customerNotified = true;
  } catch (err) {
    const message = err instanceof Error ? err.message : "Customer confirmation failed";
    errors.push(message);
  }

  return {
    delivered: teamNotified || customerNotified,
    teamNotified,
    customerNotified,
    error: errors.length > 0 ? errors.join("; ") : undefined,
  };
}
