import { allPages } from 'contentlayer/generated';
import { Metadata } from 'next';

import { MDXBody } from '@/src/components/MDXBody';

interface PageProps {
  params: {
    slug: string[];
  };
}

async function getPageFromParams(params: PageProps['params']) {
  const slug = params?.slug?.join('/');
  return allPages.find(page => page.slugAsParams === slug);
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const page = await getPageFromParams(params);

  if (!page) {
    return {};
  }

  return {
    title: page.title,
    description: page.description,
  };
}

export async function generateStaticParams(): Promise<PageProps['params'][]> {
  return allPages.map(page => ({
    slug: page.slugAsParams.split('/'),
  }));
}

export default async function IndexPage({ params }: PageProps) {
  const page = await getPageFromParams(params);

  if (!page) {
    return '404';
  }

  return <MDXBody code={page.body.code} />;
}
