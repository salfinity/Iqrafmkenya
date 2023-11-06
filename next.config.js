/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "res.cloudinary.com",
      "cdn.standardmedia.co.ke",
    ],
  },
}

module.exports = nextConfig
