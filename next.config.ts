// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Export static HTML (no server-side rendering)
  output: 'export',

  // Required for static export when using next/image
  images: {
    unoptimized: true,
  },

  // GitHub Pages serves from https://<user>.github.io/<repo>/
  basePath: '/KavyaSridharPortfolio',
  assetPrefix: '/KavyaSridharPortfolio/',

  trailingSlash: true, // avoids 404s on Pages
};

export default nextConfig;
