import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    authInterrupts: true,
    serverSourceMaps: true,
  },
};

export default nextConfig;
