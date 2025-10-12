// next.config.ts
import type { NextConfig } from 'next'

const repo = 'KavyaSridharPortfolio'
const isProd = process.env.NODE_ENV === 'production'

const nextConfig: NextConfig = {
  output: 'export',              // produce static site in ./out
  basePath: isProd ? `/${repo}` : '',
  assetPrefix: isProd ? `/${repo}/` : '',
  images: { unoptimized: true }, // needed for static export + GitHub Pages
}

export default nextConfig
