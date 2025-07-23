import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["encrypted-tbn0.gstatic.com"], // ✅ Add allowed image domains here
  },
};

export default nextConfig;
