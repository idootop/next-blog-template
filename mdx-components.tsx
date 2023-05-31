/* eslint-disable @next/next/no-img-element */
import type { MDXComponents } from 'mdx/types';

import { Text } from './core/components/Text';
import { isEmpty } from './core/utils/is';

// This file is required to use MDX in `app` directory.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    img: ({ src, alt }) => {
      const _img = (
        <img
          src={src}
          alt={alt}
          style={{
            objectFit: 'contain',
          }}
        />
      );
      return isEmpty(alt) ? (
        _img
      ) : (
        <span
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {_img}
          <Text marginTop="10px" color="#363636">
            {alt}
          </Text>
        </span>
      );
    },
  };
}
