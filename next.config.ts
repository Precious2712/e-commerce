import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: 'ng.jumia.is',
        pathname: "/**",   
      },
      {
        protocol: "https",
        hostname: 'shoprite.ng',
        pathname: "/**",  
      },
      {
        protocol: "https",
        hostname: 'images.unsplash.com',
        pathname: "/**",  
      },
    ],
  },
};

export default nextConfig;
