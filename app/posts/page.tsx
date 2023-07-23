import { Post } from 'contentlayer/generated';
import Link from 'next/link';

import { Column, Expand, Row } from '@/core/components/Flex';

import { allPostsByYear, YearPosts } from './allPostsByYear';

export default async function Page() {
  return (
    <Column
      width="100%"
      style={{
        margin: '0 auto',
        width: '',
      }}
    >
      {allPostsByYear.map(e => {
        return <YearPost key={e.year} year={e.year} posts={e.posts} />;
      })}
    </Column>
  );
}

const YearPost = (props: YearPosts) => {
  const { year, posts } = props;
  return (
    <Column width="100%" alignItems="start">
      <h1
        style={{
          color: 'rgba(0, 0, 0, 0.3)',
        }}
      >
        {year}
      </h1>
      {posts.map(post => {
        return <PostItem key={post.title} post={post} />;
      })}
    </Column>
  );
};

const PostItem = (props: { post: Post }) => {
  const { post } = props;
  return (
    <Link
      href={post.slug}
      style={{
        width: '100%',
        color: '#000',
        textDecoration: 'none',
      }}
    >
      <Row alignItems="center" width="100%">
        <Expand>
          <h1>{post.title}</h1>
        </Expand>
        <span
          style={{
            color: 'rgba(0, 0, 0, 0.3)',
          }}
        >
          {post.date.substring(5)}
        </span>
      </Row>
    </Link>
  );
};
