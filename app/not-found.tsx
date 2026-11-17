import NextLink from "next/link";
import { Container, Section, Stack } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export default function NotFound() {
  return (
    <Section spacing="lg" aria-labelledby="not-found-title">
      <Container size="sm">
        <Stack gap="md" align="start">
          <p className="font-mono text-sm text-muted-foreground">404</p>
          <h1 id="not-found-title" className="text-3xl font-bold">
            {siteConfig.ui.notFoundTitle}
          </h1>
          <p className="text-muted-foreground">{siteConfig.ui.notFoundBody}</p>
          <Button nativeButton={false} render={<NextLink href="/" />}>
            {siteConfig.ui.backHome}
          </Button>
        </Stack>
      </Container>
    </Section>
  );
}
