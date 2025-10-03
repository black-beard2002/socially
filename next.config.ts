import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    // ⚠️ Dangerously allow production builds to complete even with type errors
    ignoreBuildErrors: true,
  },
  eslint: {
    // ⚠️ Dangerously allow production builds to complete even with ESLint errors
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
