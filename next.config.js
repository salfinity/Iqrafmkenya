/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com", "cdn.standardmedia.co.ke", "www.kbc.co.ke"],
  },
};

module.exports = nextConfig;
