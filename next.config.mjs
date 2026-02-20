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
        source: '/navi',
        destination: 'https://navi-lending-dashboard-eight.vercel.app/navi',
      },
      {
        source: '/navi/:path*',
        destination: 'https://navi-lending-dashboard-eight.vercel.app/navi/:path*',
      },
    ];
  },
}

export default nextConfig
