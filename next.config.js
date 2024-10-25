/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost", "ictinnovations.africa"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
