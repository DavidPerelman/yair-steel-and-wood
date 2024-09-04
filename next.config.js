/** @type {import('next').NextConfig} */

const nextConfig = {
  eslint: {
    dirs: ["src"],
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "swiperjs.com",
      },
    ],
  },
};

module.exports = nextConfig;
