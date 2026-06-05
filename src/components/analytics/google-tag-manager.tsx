import Script from "next/script";
import { siteConfig } from "@/config/site";

/** Loads GTM + initializes dataLayer. GA4 should be configured inside GTM. */
export function GoogleTagManager() {
  const gtmId = siteConfig.analytics.gtmId;
  if (!gtmId) return null;

  return (
    <>
      <Script id="gtm-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];window.dataLayer.push({'gtm.start':new Date().getTime(),event:'gtm.js'});`}
      </Script>
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtm.js?id=${gtmId}`}
      />
    </>
  );
}

export function GoogleTagManagerNoScript() {
  const gtmId = siteConfig.analytics.gtmId;
  if (!gtmId) return null;

  return (
    <noscript>
      <iframe
        title="Google Tag Manager"
        src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
      />
    </noscript>
  );
}

/** Direct GA4 fallback when GTM is not configured */
export function GoogleAnalytics4() {
  const ga4Id = siteConfig.analytics.ga4Id;
  const gtmId = siteConfig.analytics.gtmId;
  if (!ga4Id || gtmId) return null;

  return (
    <>
      <Script
        id="ga4-script"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${ga4Id}`}
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${ga4Id}');`}
      </Script>
    </>
  );
}
