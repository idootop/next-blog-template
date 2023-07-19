interface Post {
  slug: string;
  title: string;
  date: string;
}

export const getPosts = async (): Promise<Post[]> => {
  const posts = (require as any).context('./', true, /^\.\/[^/]+\/page\.mdx$/);
  return Promise.all(
    posts.keys().map(async filePath => {
      const post = posts(filePath);
      const slug = filePath.substr(2).replace(/\/page\.mdx$/, '');

      return {
        slug,
        ...post.metadata,
      };
    }),
  );
};

export const getPost = (slug: string): Post | undefined => {
  try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const post = require(`./${slug}/page.mdx`);
    return {
      slug,
      ...post.metadata,
    };
  } catch {
    return;
  }
};
