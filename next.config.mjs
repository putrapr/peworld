/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        // port: '',
        // pathname: '/my-bucket/**',
      },
    ],
  },
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

// module.exports = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'res.cloudinary.com',
//         // port: '',
//         // pathname: '/my-bucket/**',
//       },
//     ],
//   },
// }