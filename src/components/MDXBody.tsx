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
import { ComponentPropsWithoutRef } from 'react';

import { ImageZoom } from '@/src/components/ImageZoom';

import { BaseImage } from './BaseImage';

const createHeadingWithLink = (
  Level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6',
) => {
  return ({ id, children }: ComponentPropsWithoutRef<'h1'>) => (
    <Level id={id}>
      <a className="heading-anchor" href={`#${id}`} />
      {children}
    </Level>
  );
};

const components: MDXComponents = {
  h1: createHeadingWithLink('h1'),
  h2: createHeadingWithLink('h2'),
  h3: createHeadingWithLink('h3'),
  h4: createHeadingWithLink('h4'),
  h5: createHeadingWithLink('h5'),
  h6: createHeadingWithLink('h6'),
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
