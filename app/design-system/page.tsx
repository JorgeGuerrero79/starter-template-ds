import { Bell, Heart, Mail, Search, Settings, Star } from "lucide-react";
import type { Metadata } from "next";
import type * as React from "react";

import { brand } from "@/brands/active";
import { Container, Grid, Section, Stack } from "@/components/layout";
import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Checkbox,
  Icon,
  Input,
  Link,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Textarea,
} from "@/components/ui";

import { colorRoles, radii, statusRoles, typeScale } from "./tokens";

export const metadata: Metadata = {
  title: "Design system",
  description: "Tokens y componentes de la marca activa.",
};

const services = [
  { value: "branding", label: "Branding" },
  { value: "web", label: "Sitio web" },
  { value: "app", label: "App" },
];

function Block({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section aria-labelledby={id} className="flex flex-col gap-6 border-t border-border pt-10">
      <h2 id={id} className="text-2xl font-semibold">
        {title}
      </h2>
      {children}
    </section>
  );
}

export default function DesignSystemPage() {
  return (
    <Section aria-labelledby="ds-title">
      <Container>
        <Stack gap="xl">
          <Stack gap="sm">
            <Badge variant="accent">Marca activa: {brand.name}</Badge>
            <h1 id="ds-title" className="text-4xl font-bold">
              Design system
            </h1>
            <p className="max-w-2xl text-muted-foreground">
              Vitrina de tokens y componentes. Revisa esta página en tema claro y oscuro cada vez
              que cambies de marca: el contraste AA se comprueba aquí.
            </p>
          </Stack>

          <Block id="colores" title="Color">
            <Grid cols={4} gap="md">
              {colorRoles.map((role) => (
                <div
                  key={role.name}
                  className="flex h-24 flex-col justify-end rounded-md border border-border p-3 text-sm"
                  style={{ background: `var(--${role.name})`, color: `var(--${role.fg})` }}
                >
                  <span className="font-semibold">{role.name}</span>
                  <span className="font-mono text-xs">texto: {role.fg}</span>
                </div>
              ))}
            </Grid>
            <ul className="flex flex-wrap gap-4">
              {statusRoles.map((role) => (
                <li key={role} className="flex items-center gap-2 text-sm">
                  <span
                    aria-hidden
                    className="size-6 rounded-full border border-border"
                    style={{ background: `var(--${role})` }}
                  />
                  <code className="font-mono">{role}</code>
                </li>
              ))}
            </ul>
          </Block>

          <Block id="tipografia" title="Tipografía">
            <Stack gap="md">
              {typeScale.map((item) => (
                <div key={item.label} className="flex flex-col gap-1">
                  <span className="font-mono text-xs text-muted-foreground">{item.label}</span>
                  <p className={item.className}>Diseño claro para personas reales</p>
                </div>
              ))}
            </Stack>
          </Block>

          <Block id="forma" title="Radios e íconos">
            <Stack direction="row" gap="lg" align="end">
              {radii.map((radius) => (
                <div key={radius} className="flex flex-col items-center gap-2">
                  <div className={`size-16 border-2 border-primary bg-accent ${radius}`} />
                  <code className="font-mono text-xs">{radius}</code>
                </div>
              ))}
            </Stack>
            <Stack direction="row" gap="lg" align="center">
              {(["sm", "md", "lg"] as const).map((size) => (
                <span key={size} className="flex items-center gap-2 text-sm">
                  <Icon icon={Star} size={size} />
                  <code className="font-mono text-xs">icon-size-{size}</code>
                </span>
              ))}
              <span className="flex items-center gap-3 text-primary">
                {[Mail, Search, Bell, Heart, Settings].map((I, i) => (
                  <Icon key={i} icon={I} />
                ))}
              </span>
            </Stack>
          </Block>

          <Block id="botones" title="Button y Link">
            <Stack direction="row" gap="sm" align="center">
              <Button>Primario</Button>
              <Button variant="secondary">Secundario</Button>
              <Button variant="outline">Contorno</Button>
              <Button variant="ghost">Fantasma</Button>
              <Button variant="danger">Eliminar</Button>
              <Button variant="link">Enlace</Button>
              <Button disabled>Deshabilitado</Button>
            </Stack>
            <Stack direction="row" gap="sm" align="center">
              <Button size="sm">Pequeño</Button>
              <Button size="md">Mediano</Button>
              <Button size="lg">
                <Icon icon={Mail} size="sm" />
                Grande con ícono
              </Button>
              <Button size="icon" variant="outline" aria-label="Ajustes">
                <Icon icon={Settings} />
              </Button>
            </Stack>
            <p className="text-sm">
              Un <Link href="/blog">enlace dentro del texto</Link>, un{" "}
              <Link href="/" variant="standalone">
                enlace independiente
              </Link>{" "}
              y uno <Link href="https://nextjs.org">externo</Link>.
            </p>
          </Block>

          <Block id="badges" title="Badge">
            <Stack direction="row" gap="sm">
              <Badge>Neutral</Badge>
              <Badge variant="primary">Primario</Badge>
              <Badge variant="accent">Acento</Badge>
              <Badge variant="success">Éxito</Badge>
              <Badge variant="warning">Aviso</Badge>
              <Badge variant="danger">Error</Badge>
              <Badge variant="outline">Contorno</Badge>
            </Stack>
          </Block>

          <Block id="formularios" title="Input, Textarea, Select y Checkbox">
            <form className="grid max-w-xl gap-5" aria-label="Formulario de ejemplo">
              <div className="grid gap-2">
                <label htmlFor="ds-name" className="text-sm font-medium">
                  Nombre
                </label>
                <Input id="ds-name" name="name" placeholder="Ana López" autoComplete="name" />
              </div>
              <div className="grid gap-2">
                <label htmlFor="ds-email" className="text-sm font-medium">
                  Correo
                </label>
                <Input
                  id="ds-email"
                  name="email"
                  type="email"
                  aria-invalid
                  aria-describedby="ds-email-error"
                  defaultValue="ana@"
                />
                <p id="ds-email-error" className="text-sm text-danger">
                  Escribe un correo válido.
                </p>
              </div>
              <div className="grid gap-2">
                <span id="ds-service-label" className="text-sm font-medium">
                  Servicio
                </span>
                <Select items={services} name="service">
                  <SelectTrigger aria-labelledby="ds-service-label">
                    <SelectValue placeholder="Elige un servicio" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service.value} value={service.value}>
                        {service.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <label htmlFor="ds-message" className="text-sm font-medium">
                  Mensaje
                </label>
                <Textarea id="ds-message" name="message" placeholder="Cuéntanos de tu proyecto" />
              </div>
              <label className="flex items-center gap-3 text-sm">
                <Checkbox name="terms" defaultChecked />
                Acepto el aviso de privacidad
              </label>
            </form>
          </Block>

          <Block id="cards" title="Card">
            <Grid cols={3}>
              <Card>
                <CardHeader>
                  <CardTitle>Plan básico</CardTitle>
                  <CardDescription>Para prototipos y pruebas.</CardDescription>
                </CardHeader>
                <CardContent>Next.js, Tailwind y MDX listos.</CardContent>
                <CardFooter>
                  <Button size="sm" variant="outline">
                    Elegir
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <Badge variant="primary">Recomendado</Badge>
                  <CardTitle>Plan con DS</CardTitle>
                  <CardDescription>Para clientes y marcas que crecen.</CardDescription>
                </CardHeader>
                <CardContent>Tokens multi-marca, componentes y documentación.</CardContent>
                <CardFooter>
                  <Button size="sm">Elegir</Button>
                </CardFooter>
              </Card>
              <Card className="bg-background">
                <CardHeader>
                  <CardTitle>Card sobre fondo</CardTitle>
                  <CardDescription>Con className se ajusta el fondo.</CardDescription>
                </CardHeader>
              </Card>
            </Grid>
          </Block>

          <Block id="layout" title="Layout: Container, Section, Stack y Grid">
            <p className="text-sm text-muted-foreground">
              Esta página está hecha con ellos. Header y Footer están arriba y abajo.
            </p>
            <Grid cols={4} gap="sm">
              {Array.from({ length: 8 }, (_, i) => (
                <div
                  key={i}
                  className="flex h-14 items-center justify-center rounded-md bg-muted font-mono text-sm"
                >
                  {i + 1}
                </div>
              ))}
            </Grid>
          </Block>
        </Stack>
      </Container>
    </Section>
  );
}
