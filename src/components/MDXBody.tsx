/* eslint-disable @next/next/no-img-element */

// Markdown
import 'github-markdown-css/github-markdown-light.css';
import '@/src/styles/markdown.css';
// Highlight
import '@/src/styles/highlight.css';
// Katex
import '@/src/styles/katex/styles.css';

import type { MDXComponents } from 'mdx/types';
import { useMDXComponent } from 'next-contentlayer/hooks';

import { isNotEmpty } from '@/core/utils/is';
import { ImageZoom } from '@/src/components/ImageZoom';

const components: MDXComponents = {
  img: ({ src, alt }) => {
    return (
      <span
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <img
          src={src}
          alt={alt}
          data-zoomable
          style={{
            objectFit: 'contain',
          }}
        />
        {isNotEmpty(alt) && (
          <span
            style={{
              color: '#666',
              fontSize: '12px',
              textAlign: 'center',
              marginTop: '10px',
            }}
          >
            {alt}
          </span>
        )}
      </span>
    );
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
