// next.config.ts
import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",              // <-- enables `next export`
  images: { unoptimized: true }, // <-- required for static export
  basePath: isProd ? "/KavyaSridharPortfolio" : undefined,
  assetPrefix: isProd ? "/KavyaSridharPortfolio/" : undefined,
};

export default nextConfig;
