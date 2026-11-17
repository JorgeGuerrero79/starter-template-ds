import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Container, Section } from "@/components/layout";
import { getPost, getPostSlugs } from "@/lib/posts";
import { formatDate } from "@/lib/utils";

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  if (!getPostSlugs().includes(slug)) return {};
  const post = await getPost(slug);
  return {
    title: post.title,
    description: post.description,
    openGraph: { type: "article", title: post.title, description: post.description },
  };
}

export default async function PostPage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  if (!getPostSlugs().includes(slug)) notFound();
  const { Content, title, date } = await getPost(slug);

  return (
    <Section aria-labelledby="post-title">
      <Container size="sm">
        <article>
          <p className="text-sm text-muted-foreground">
            <time dateTime={date}>{formatDate(date)}</time>
          </p>
          <h1 id="post-title" className="mt-2 text-4xl font-bold">
            {title}
          </h1>
          <Content />
        </article>
      </Container>
    </Section>
  );
}
