import { allPosts, Post } from 'contentlayer/generated';

type Year = string;
export interface YearPosts {
  year: Year;
  posts: Post[];
}

const getPostsGroupByYear = () => {
  const posts: YearPosts[] = [];
  let year;
  allPosts
    .sort((a, b) => {
      return b.date.localeCompare(a.date, undefined, {
        numeric: true,
        sensitivity: 'base',
      });
    })
    .forEach(post => {
      const _year = post.date.split('-')[0];
      if (_year !== year) {
        posts.push({ year: _year, posts: [post] });
        year = _year;
      } else {
        posts[posts.length - 1].posts.push(post);
      }
    });
  return posts;
};

export const allPostsByYear = getPostsGroupByYear();
