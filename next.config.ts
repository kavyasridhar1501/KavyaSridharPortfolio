// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Export static HTML for GitHub Pages
  output: 'export',

  // Required because GitHub Pages doesn't support Next.js image optimization
  images: {
    unoptimized: true,
  },

  // Tell Next.js where your project will be hosted
  basePath: '/KavyaSridharPortfolio',
  assetPrefix: '/KavyaSridharPortfolio/',

  // Ensures that each route ends with a slash (fixes 404s on GitHub Pages)
  trailingSlash: true,

  // Optional: enable React strict mode (helps catch issues)
  reactStrictMode: true,

  // Optional: add ESLint build check ignore (so it doesn’t block builds)
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
