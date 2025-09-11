import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
        port: "",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
      },
    ],
    deviceSizes: [360, 480, 640, 768, 1024, 1280, 1920, 2560],
    imageSizes: [64, 128, 256, 384, 512, 640],
  }
};

export default nextConfig;
