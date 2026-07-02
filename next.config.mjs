/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // Vercel image optimization (WebP/AVIF + resize) — was disabled in the
    // v0 scaffold; enabling it cuts LCP/bandwidth on the logo-heavy grids.
    formats: ["image/avif", "image/webp"],
    remotePatterns: [{ protocol: "https", hostname: "cdn.sanity.io" }],
  },
  // Ensure the repo-hosted MDX reports (content/reports/*.mdx) are bundled into
  // serverless functions that read them at runtime (ISR hub, sitemap, API).
  outputFileTracingIncludes: {
    "/**": ["./content/**/*"],
  },
  async rewrites() {
    return [
      {
        source: '/Incentiv',
        destination: 'https://incentiv-dashboard.vercel.app/Incentiv',
      },
      {
        source: '/Incentiv/:path*',
        destination: 'https://incentiv-dashboard.vercel.app/Incentiv/:path*',
      },
    ];
  },
  async redirects() {
    return [
      // Apex (no-www) → www, the canonical host. Matches host exactly so it
      // never loops on www.datumlab.xyz.
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'datumlab.xyz' }],
        destination: 'https://www.datumlab.xyz/:path*',
        permanent: true,
      },
    ];
  },
}

export default nextConfig
