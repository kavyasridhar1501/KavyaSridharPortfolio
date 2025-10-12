// next.config.ts
import type { NextConfig } from 'next';

const repo = 'KavyaSridharPortfolio';
const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  // GitHub Pages needs a static export
  output: 'export',

  // Disable Next/Image optimization on static hosting
  images: { unoptimized: true },

  // Serve from /<repo> only in production (so local dev works at /)
  basePath: isProd ? `/${repo}` : '',
  assetPrefix: isProd ? `/${repo}/` : undefined,

  // Avoid 404s for nested routes on Pages
  trailingSlash: true,

  // Optional, but helpful
  reactStrictMode: true,
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
