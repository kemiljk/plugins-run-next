/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["imgix.cosmicjs.com", "www.figma.com"],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
