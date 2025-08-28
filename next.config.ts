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
      {
        protocol: "https",
        hostname: 'www.supermart.ng',
        pathname: "/**",  
      },
       {
        protocol: "https",
        hostname: 'www.supermart.ng',
        pathname: "/**",  
      },
      {
        protocol: "https",
        hostname: 'justriteonline.com',
        pathname: "/**",  
      },
       {
        protocol: "https",
        hostname: 'freshtodommot.com',
        pathname: "/**",  
      },
       {
        protocol: "https",
        hostname: 'vegetalfoods.com',
        pathname: "/**",  
      },
    ],
  },
};

export default nextConfig;
