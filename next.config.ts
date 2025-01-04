import type { NextConfig } from "next";

/* config options here */
const nextConfig: NextConfig = {
  transpilePackages: ["reshaped"],
  experimental: {
    optimizePackageImports: ["reshaped"],
  },
};

export default nextConfig;
