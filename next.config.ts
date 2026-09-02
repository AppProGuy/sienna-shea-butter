import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    // Vercel serves this Vinext build as static Vite output, so image URLs must
    // point to the bundled files rather than the Next image optimisation route.
    unoptimized: true,
  },
};

export default nextConfig;
