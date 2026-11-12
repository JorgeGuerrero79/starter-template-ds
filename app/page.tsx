import NextLink from "next/link";
import { ArrowRight, Palette, Rocket, ShieldCheck } from "lucide-react";

import { Container, Grid, Section, Stack } from "@/components/layout";
import { Badge, Button, Card, CardDescription, CardHeader, CardTitle, Icon } from "@/components/ui";
import { siteConfig } from "@/config/site";
import { home } from "@/content/home";

const featureIcons = [Rocket, Palette, ShieldCheck];

export default function HomePage() {
  return (
    <>
      <Section spacing="lg" aria-labelledby="hero-title">
        <Container size="md">
          <Stack gap="lg" align="start">
            <Badge variant="accent">{home.eyebrow}</Badge>
            <h1 id="hero-title" className="text-4xl font-bold tracking-tight sm:text-5xl">
              {siteConfig.name}
            </h1>
            <p className="max-w-2xl text-lg text-muted-foreground">{siteConfig.description}</p>
            <Stack direction="row" gap="sm">
              <Button size="lg" nativeButton={false} render={<NextLink href="/design-system" />}>
                {home.primaryCta}
                <Icon icon={ArrowRight} size="sm" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                nativeButton={false}
                render={<NextLink href="/blog" />}
              >
                {home.secondaryCta}
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Section>

      <Section tone="surface" aria-labelledby="features-title">
        <Container>
          <Stack gap="lg">
            <h2 id="features-title" className="text-2xl font-semibold">
              {home.featuresTitle}
            </h2>
            <Grid cols={3}>
              {home.features.map((feature, index) => (
                <Card key={feature.title} className="bg-background">
                  <CardHeader>
                    <Icon icon={featureIcons[index] ?? Rocket} size="lg" className="text-primary" />
                    <CardTitle>{feature.title}</CardTitle>
                    <CardDescription>{feature.body}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </Grid>
          </Stack>
        </Container>
      </Section>
    </>
  );
}
