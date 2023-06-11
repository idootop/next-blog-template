import { withContentlayer } from 'next-contentlayer';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  webpack: config => {
    config.infrastructureLogging = {
      level: 'error',
    };
    return config;
  },
};

export default withContentlayer(nextConfig);
