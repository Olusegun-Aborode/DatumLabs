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
}

export default nextConfig
