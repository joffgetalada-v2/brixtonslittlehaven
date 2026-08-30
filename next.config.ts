import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow SVG optimization (used for logo placeholder)
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  async headers() {
    return [
      {
        // Baseline hardening for every response. Deliberately no
        // Content-Security-Policy: the hero engine builds blob: video URLs and the
        // AdSense script is one env var away from loading, so a policy written now
        // would break one of them later. Add it with the AdSense rollout.
        source: '/:path*',
        headers: [
          // Stop browsers guessing a different type than we declare.
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          // No reason for this site to be framed by anyone.
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          // Send the origin cross-site, the full path same-site.
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          // The site asks for none of these; deny them up front.
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()' },
        ],
      },
      {
        // The 22 hero clips are content-stable and lazily fetched as the visitor
        // scrolls. Without this they revalidate on every visit: 11 round trips
        // before the flight can start. A week of freshness costs nothing because a
        // re-encode ships under the same filenames only when we deploy one.
        source: '/scrollworld/vid/:file*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=604800, stale-while-revalidate=86400' },
        ],
      },
    ];
  },
};

export default nextConfig;
