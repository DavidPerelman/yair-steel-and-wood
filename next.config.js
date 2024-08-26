/** @type {import('next').NextConfig} */
const { withNextVideo } = require("next-video/process");
const withVideos = require("next-videos");

const nextConfig = {};

module.exports = nextConfig;
module.exports = withVideos();
module.exports = withNextVideo(nextConfig);
