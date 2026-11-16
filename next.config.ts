import type { NextConfig } from "next";

// Static export for GitHub Pages, served at https://t34virus.github.io/foliage/
const basePath = "/foliage";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
  // Plain <img>/<video> src values don't get basePath automatically; see src/lib/asset.ts.
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
