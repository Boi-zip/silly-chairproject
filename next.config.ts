import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // We keep Turbopack enabled, but configure the underlying SWC compiler
  compiler: {
    // This tells SWC to remove modern features
    styledComponents: true, // If you use them, otherwise remove
  },
  // Customizing the SWC transformation
  experimental: {
    swcPlugins: [], 
  },
};

export default nextConfig;