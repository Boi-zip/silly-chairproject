import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'out', // Optional: simpler output folder
  images: { unoptimized: true },
  compress: true, // Enables compression
  productionBrowserSourceMaps: false, // Ensure source maps don't leak into production
  compiler: {
    removeConsole: true, // Strips console.logs to save bytes
  },
  experimental: {
    optimizePackageImports: ['react-icons', 'bootstrap'], // Critical for tree-shaking
  },
};

export default nextConfig;