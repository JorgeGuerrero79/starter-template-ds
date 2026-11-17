import type { Metadata } from "next";

import { Container, Section, Stack } from "@/components/layout";
import { Badge, Card, CardDescription, CardHeader, CardTitle, Link } from "@/components/ui";
import { getAllPosts } from "@/lib/posts";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Blog",
  description: "Ejemplo de contenido en MDX.",
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <Section aria-labelledby="blog-title">
      <Container size="md">
        <Stack gap="lg">
          <h1 id="blog-title" className="text-3xl font-bold">
            Blog
          </h1>
          <ul className="flex flex-col gap-4">
            {posts.map((post) => (
              <li key={post.slug}>
                <Card>
                  <CardHeader>
                    <p className="text-sm text-muted-foreground">
                      <time dateTime={post.date}>{formatDate(post.date)}</time>
                    </p>
                    <CardTitle as="h2">
                      <Link href={`/blog/${post.slug}`} variant="plain">
                        {post.title}
                      </Link>
                    </CardTitle>
                    <CardDescription>{post.description}</CardDescription>
                  </CardHeader>
                  {post.tags && (
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="outline">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  )}
                </Card>
              </li>
            ))}
          </ul>
        </Stack>
      </Container>
    </Section>
  );
}
