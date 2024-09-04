/** @type {import('next').NextConfig} */
import path from "path";

const nextConfig = {
  eslint: {
    dirs: ["src"],
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    config.resolve.alias = {
      "@": path.join(__dirname, "src"),
    };

    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "files.edgestore.dev",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "instagram.fsdv4-1.fna.fbcdn.net",
      },
      {
        protocol: "https",
        hostname: "swiperjs.com",
      },
    ],
  },
};

module.exports = nextConfig;
