/* eslint-disable @next/next/no-img-element */
import type { MDXComponents } from 'mdx/types';

import { isNotEmpty } from './core/utils/is';

// This file is required to use MDX in `app` directory.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
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
}
