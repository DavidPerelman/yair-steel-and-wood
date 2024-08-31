/** @type {import('next').NextConfig} */
// const { withNextVideo } = require("next-video/process");

const nextConfig = {
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
// module.exports = withNextVideo(nextConfig);
