/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
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
