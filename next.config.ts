import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  output: 'export', 
  basePath: '/KyawThu12345.github.io',
  assetPrefix: '/KyawThu12345.github.io',
  images: {
    unoptimized: true, 
  },
};

module.exports = nextConfig;

export default nextConfig;
