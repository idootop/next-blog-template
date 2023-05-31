import NextMDX from '@next/mdx';
import rehypeHighlight from 'rehype-highlight';
import rehypeKatex from 'rehype-katex';
import { remarkHeadingId } from 'remark-custom-heading-id';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';

const withMDX = NextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkHeadingId, remarkGfm, remarkMath],
    rehypePlugins: [rehypeHighlight, rehypeKatex],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
};

export default withMDX(nextConfig);
