import type { Metadata, Viewport } from "next";
import { Suspense } from "react";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { getRootMetadata } from "@/lib/seo/metadata";
import { buildOrganizationSchema, buildLocalBusinessSchema } from "@/lib/seo/json-ld";
import { JsonLdScript } from "@/components/seo/json-ld-script";
import {
  GoogleTagManager,
  GoogleTagManagerNoScript,
  GoogleAnalytics4,
} from "@/components/analytics/google-tag-manager";
import { MotionProvider } from "@/components/motion/motion-provider";
import "@/styles/globals.css";

export const metadata: Metadata = getRootMetadata();

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAFBFC" },
    { media: "(prefers-color-scheme: dark)", color: "#0A0F14" },
  ],
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-CA"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <JsonLdScript data={buildOrganizationSchema()} />
        <JsonLdScript data={buildLocalBusinessSchema()} />
        <GoogleTagManager />
        <GoogleAnalytics4 />
      </head>
      <body className="min-h-screen bg-surface-50 font-sans antialiased">
        <GoogleTagManagerNoScript />
        <Suspense fallback={null}>
          <MotionProvider>{children}</MotionProvider>
        </Suspense>
      </body>
    </html>
  );
}