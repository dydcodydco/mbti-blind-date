import withPlaiceholder from "@plaiceholder/next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'zzimzzim-s3.s3.ap-northeast-2.amazonaws.com',
        pathname: '/**',
      },
    ],
  },
};

// export default nextConfig;
export default withPlaiceholder(nextConfig);
