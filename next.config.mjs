/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    const env = process.env.NEXT_PUBLIC_URL_BE
    return [
      {
        source: '/v1/:slug*',
        destination: `${env}/v1/:slug*`
      }
    ];
  },
};

export default nextConfig;
