/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  experimental: {
    serverActions: {
      bodySizeLimit: "5mb",
    },
  },
};

module.exports = nextConfig;
