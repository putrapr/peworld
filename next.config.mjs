/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/v1/:slug*',
        destination: `https://fwm17-be-peword.vercel.app/v1/:slug*`
      }
    ];
  },
};

export default nextConfig;
