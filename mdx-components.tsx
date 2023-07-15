import type { MDXComponents } from 'mdx/types';

import { BaseImage } from '@/src/components/Image/BaseImage';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    img: ({ src, alt }) => {
      return <BaseImage src={src} alt={alt} zoomable />;
    },
    ...components,
  };
}
