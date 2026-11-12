import fs from "node:fs";
import path from "node:path";

export type PostMeta = {
  title: string;
  description: string;
  date: string;
  tags?: string[];
};

export type Post = PostMeta & { slug: string };

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

/** Slugs de los archivos .mdx en content/blog. */
export function getPostSlugs(): string[] {
  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export async function getPost(slug: string) {
  const mod = (await import(`@/content/blog/${slug}.mdx`)) as {
    default: React.ComponentType;
    metadata: PostMeta;
  };
  return { slug, ...mod.metadata, Content: mod.default };
}

/** Todos los posts, del más reciente al más antiguo. */
export async function getAllPosts(): Promise<Post[]> {
  const posts = await Promise.all(
    getPostSlugs().map(async (slug) => {
      const { Content: _content, ...meta } = await getPost(slug);
      return meta;
    }),
  );
  return posts.sort((a, b) => b.date.localeCompare(a.date));
}
