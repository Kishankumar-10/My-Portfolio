import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    unoptimized: true, // Recommended for portfolio sites on Vercel if not using Image Optimization
  },
  typescript: {
    ignoreBuildErrors: false,
  }
};

export default nextConfig;
