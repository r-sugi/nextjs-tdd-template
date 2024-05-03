/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['page.tsx'],
  output: 'export',
  eslint: {
    quiet: true,
  },
};

export default nextConfig;
