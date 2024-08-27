/** @type {import('next').NextConfig} */
const { withNextVideo } = require("next-video/process");
const withVideos = require("next-videos");

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "instagram.fsdv2-1.fna.fbcdn.net",
      },
    ],
  },
};

module.exports = nextConfig;
module.exports = withVideos();
module.exports = withNextVideo(nextConfig);
