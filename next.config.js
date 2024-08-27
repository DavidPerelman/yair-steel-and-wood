/** @type {import('next').NextConfig} */
// const { withNextVideo } = require("next-video/process");
const withVideos = require("next-videos");

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "files.edgestore.dev",
      },
    ],
  },
};

module.exports = nextConfig;
module.exports = withVideos(nextConfig);
// module.exports = withNextVideo(nextConfig);
