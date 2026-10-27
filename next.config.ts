import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  /** Allow HMR/assets when opening dev server from LAN IP (e.g. phone testing) */
  allowedDevOrigins: ["192.168.1.16"],
  outputFileTracingRoot: path.join(__dirname),
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
  experimental: {
    optimizePackageImports: ["framer-motion"],
  },
  async redirects() {
    return [
      {
        source: "/tv-mounting-edmonton",
        destination: "/tv-wall-mounting-edmonton",
        permanent: true,
      },
      {
        source: "/move-out-cleaning-edmonton",
        destination: "/move-in-move-out-repairs-edmonton",
        permanent: true,
      },
      {
        source: "/painting-drywall-repair-edmonton",
        destination: "/painting-services-edmonton",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
