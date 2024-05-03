/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['page.tsx'],
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
