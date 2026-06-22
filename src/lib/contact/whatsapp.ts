import { siteConfig } from "@/config/site";

/** E.164 digits only — wa.me expects country code without + */
function whatsAppDigits(): string {
  const configured = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  if (configured) return configured.replace(/\D/g, "");
  const tel = siteConfig.phone.tel.replace(/\D/g, "");
  return tel.startsWith("1") ? tel : `1${tel}`;
}

export function getWhatsAppUrl(message?: string): string {
  const text = encodeURIComponent(message ?? siteConfig.whatsapp.defaultMessage);
  return `https://wa.me/${whatsAppDigits()}?text=${text}`;
}
