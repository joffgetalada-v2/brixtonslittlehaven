import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow SVG optimization (used for logo placeholder)
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
