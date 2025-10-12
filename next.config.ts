const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: isProd ? "/KavyaSridharPortfolio" : undefined,
  assetPrefix: isProd ? "/KavyaSridharPortfolio/" : undefined,
};

export default nextConfig;
