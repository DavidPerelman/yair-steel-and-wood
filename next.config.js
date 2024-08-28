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
    ],
  },
};

module.exports = nextConfig;
// module.exports = withNextVideo(nextConfig);
