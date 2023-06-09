import {
  ComputedFields,
  defineDocumentType,
  makeSource,
} from 'contentlayer/source-files';
import rehypeHighlight from 'rehype-highlight';
import rehypeKatex from 'rehype-katex';
import { remarkHeadingId } from 'remark-custom-heading-id';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import remarkSlug from 'remark-slug';

const baseComputedFields: ComputedFields = {
  slug: {
    type: 'string',
    resolve: doc => `/${doc._raw.flattenedPath}`,
  },
  slugAsParams: {
    type: 'string',
    resolve: doc => doc._raw.flattenedPath.split('/').slice(1).join('/'),
  },
  description: {
    type: 'string',
    resolve: doc => doc.description ?? doc.title,
  },
};

export const Page = defineDocumentType(() => ({
  name: 'Page',
  filePathPattern: `pages/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
    },
  },
  computedFields: {
    ...baseComputedFields,
  },
}));

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `posts/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
    },
    date: {
      type: 'string',
      required: true,
    },
    update: {
      type: 'string',
    },
  },
  computedFields: {
    ...baseComputedFields,
    update: {
      type: 'string',
      resolve: doc => doc.update ?? doc.date,
    },
  },
}));

export default makeSource({
  contentDirPath: './content',
  documentTypes: [Page, Post],
  mdx: {
    remarkPlugins: [remarkSlug, remarkHeadingId, remarkGfm, remarkMath],
    rehypePlugins: [rehypeHighlight, rehypeKatex],
  },
});
