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
        source: '/navi/:path*',
        destination: 'https://datumlabs-defi-dashboard.vercel.app/navi/:path*',
      },
    ];
  },
}

export default nextConfig
