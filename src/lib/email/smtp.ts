import nodemailer from "nodemailer";
import type { Transporter } from "nodemailer";

let transporter: Transporter | null = null;

export function isSmtpConfigured(): boolean {
  return Boolean(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS);
}

export function getSmtpTransporter(): Transporter {
  if (!isSmtpConfigured()) {
    throw new Error("SMTP is not configured. Set SMTP_HOST, SMTP_USER, and SMTP_PASS.");
  }

  if (!transporter) {
    const port = parseInt(process.env.SMTP_PORT ?? "587", 10);
    const secure = process.env.SMTP_SECURE === "true" || port === 465;

    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port,
      secure,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  }

  return transporter;
}

export function getFromAddress(): string {
  const name = process.env.SMTP_FROM_NAME ?? "Home Solution Services";
  const email = process.env.SMTP_FROM_EMAIL ?? process.env.SMTP_USER ?? "";
  return `"${name}" <${email}>`;
}

export function getLeadNotificationEmail(): string {
  return (
    process.env.LEAD_NOTIFICATION_EMAIL ??
    process.env.SMTP_FROM_EMAIL ??
    process.env.SMTP_USER ??
    ""
  );
}
