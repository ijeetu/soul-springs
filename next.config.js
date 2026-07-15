/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'vishwalabs.com',
        pathname: '/logoemail.png',
      },
    ],
  },
};

module.exports = nextConfig;
