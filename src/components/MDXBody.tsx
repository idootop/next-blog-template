/* eslint-disable @next/next/no-img-element */

'use client';

// Markdown
import 'github-markdown-css/github-markdown-light.css';
import '@/src/styles/markdown.css';
// Highlight
import '@/src/styles/highlight.css';
// Katex
import '@/src/styles/katex/styles.css';

import type { MDXComponents } from 'mdx/types';
import { useMDXComponent } from 'next-contentlayer/hooks';

import { ImageZoom } from '@/src/components/ImageZoom';

import { BaseImage } from './BaseImage';

const components: MDXComponents = {
  img: ({ src, alt }) => {
    return <BaseImage src={src} alt={alt} zoomable />;
  },
};

export function MDXBody(props: { code: string }) {
  const Component = useMDXComponent(props.code);

  return (
    <>
      <article className="markdown-body">
        <Component components={components as any} />
      </article>
      <ImageZoom />
    </>
  );
}
