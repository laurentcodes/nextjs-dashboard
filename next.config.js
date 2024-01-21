/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    serverActions: {
      allowedOrigins: ['https://nextjs-dashboard-7sno.onrender.com']
    }
  }
};

module.exports = nextConfig;
