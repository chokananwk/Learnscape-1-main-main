/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "come.in.th",
      },
    ],
  },
};

export default nextConfig;
