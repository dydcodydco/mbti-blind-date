import withPlaiceholder from "@plaiceholder/next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['zzimzzim-s3.s3.ap-northeast-2.amazonaws.com'],
  },
};

// export default nextConfig;
export default withPlaiceholder(nextConfig);
