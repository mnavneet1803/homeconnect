import { siteConfig } from "@/config/site";
import { absoluteUrl } from "@/lib/utils/format";

/** Email design tokens — mirrors tailwind.config.ts / globals.css */
export const emailTheme = {
  ink: {
    900: "#1C1917",
    700: "#44403C",
    600: "#57534E",
    500: "#78716C",
    400: "#A8A29E",
    200: "#E7E5E4",
    100: "#F5F5F4",
    50: "#FAFAF9",
  },
  brand: {
    950: "#042F2E",
    900: "#134E4A",
    800: "#115E59",
    700: "#0D6B64",
    600: "#0F766E",
    50: "#F0FDFA",
    100: "#CCFBF1",
  },
  surface: "#FFFFFF",
  border: "#E7E5E4",
  borderSubtle: "#ECEAE8",
  fontFamily:
    'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  gradientCta: "linear-gradient(135deg, #042F2E 0%, #115E59 50%, #0D6B64 100%)",
  gradientHero: "linear-gradient(160deg, #F0FDFA 0%, #FAFAF9 35%, #FFFFFF 70%)",
  shadowCard: "0 1px 4px rgba(12, 10, 9, 0.04), 0 0 0 1px rgba(12, 10, 9, 0.06)",
  radius: "12px",
} as const;

export function getLogoUrl(): string {
  return absoluteUrl(siteConfig.brand.logo.src, siteConfig.url);
}

export function getSiteUrl(): string {
  return siteConfig.url.replace(/\/$/, "");
}
