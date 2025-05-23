import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Example of setting a basePath if your app is under a subfolder
  basePath: process.env.NODE_ENV === 'production' ? '' : '',
  
  // Correct assetPrefix with full URL for production (https://)
  assetPrefix: process.env.NODE_ENV === 'production' 
    ? 'https://nextjs-dashboard-2nl9.vercel.app' 
    : '',

  // You can also set custom redirects, rewrites, etc.
  async redirects() {
    return [
      {
        source: '/old-page',
        destination: '/new-page',
        permanent: true,
      },
    ];
  },

  // You can also set public runtime configuration
  publicRuntimeConfig: {
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000',
  },
};

export default nextConfig;