import type { Metadata, Viewport } from "next";
import { Suspense } from "react";
import { Space_Grotesk, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
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

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = getRootMetadata();

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F6F1E5" },
    { media: "(prefers-color-scheme: dark)", color: "#0E2A22" },
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
      className={`${spaceGrotesk.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable}`}
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