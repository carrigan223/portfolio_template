/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media-1.api-sports.io",
      },
    ],
  },
};

module.exports = nextConfig;
