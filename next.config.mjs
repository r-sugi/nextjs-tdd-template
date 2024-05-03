/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['page.tsx'],
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true, // CI does linting
  },
};

export default nextConfig;
