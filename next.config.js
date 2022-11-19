/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["imgix.cosmicjs.com", "www.figma.com"],
  },
};

module.exports = nextConfig;
