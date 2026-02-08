import type { NextConfig } from 'next';

/**
 * Next.js runtime flags used by this project.
 */
const nextConfig: NextConfig = {
  reactCompiler: true,
  experimental: {
    cacheComponents: true,
  },
};

export default nextConfig;
