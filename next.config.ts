import type { NextConfig } from "next";

// Static export for GitHub Pages, served at https://portfolio.alohateresa.com/ (custom domain, so no base
// path; the old https://t34virus.github.io/foliage/ links redirect there). To serve under a subfolder again,
// set basePath to it, e.g. "/foliage".
const basePath = "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
  // Plain <img>/<video> src values don't get basePath automatically; see src/lib/asset.ts.
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
