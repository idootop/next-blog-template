// Markdown
import 'github-markdown-css/github-markdown-light.css';
import '@/src/styles/markdown.css';
// Highlight
import '@/src/styles/highlight.css';

import { ImageZoom } from '@/src/components/ImageZoom';

export function MDXPage(props: { children: any }) {
  return (
    <>
      <article className="markdown-body">{props.children}</article>
      <ImageZoom />
    </>
  );
}
