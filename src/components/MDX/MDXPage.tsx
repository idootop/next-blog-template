// Markdown
import 'github-markdown-css/github-markdown-light.css';
import '@/src/styles/markdown.css';
// Highlight
import '@/src/styles/highlight.css';

import { Post } from 'contentlayer/generated';
import type { MDXComponents } from 'mdx/types';
import { useMDXComponent } from 'next-contentlayer/hooks';

import { ImageZoom } from '@/src/components/Image/ImageZoom';

import { BannerImage } from '../Image/BannerImage';
import { BaseImage } from '../Image/BaseImage';
import styles from './styles.module.css';

const components: MDXComponents = {
  img: ({ src, alt }) => {
    return <BaseImage src={src} alt={alt} zoomable />;
  },
  BannerImage,
};

export function MDXPage(props: { post: Post }) {
  const { post } = props;
  const Component = useMDXComponent(post.body.code);
  return (
    <article className="markdown-body">
      <h1 className={styles.title}>{post.title}</h1>
      <p className={styles.date}>{post.date}</p>
      <Component components={components as any} />
      <ImageZoom />
    </article>
  );
}
