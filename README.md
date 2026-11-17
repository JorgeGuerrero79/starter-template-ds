# starter-template-ds

Template base para proyectos con marca: **Next.js 16 + React 19 + Tailwind CSS 4** con un design
system multi-marca (patrón shadcn/ui sobre **Base UI**), documentación en `/design-system` y
Storybook, y pruebas con Vitest y Playwright.

> ¿Prototipo rápido sin marca? Usa `starter-template-basic`. **Regla:** si el proyecto tiene manual de
> marca o va a durar más de un mes, usa este template.

## Cómo crear un proyecto nuevo

1. En GitHub, pulsa **Use this template → Create a new repository**.
2. Clona el repo nuevo y ejecuta:
   ```bash
   pnpm install
   pnpm dev            # http://localhost:3000
   ```
3. Edita `config/site.ts` (nombre, URL, idioma, textos de UI y navegación).
4. Elige o crea la marca (ver abajo) y revisa `/design-system` en claro y oscuro.
5. Borra los posts de ejemplo de `content/blog/` y cambia `content/home.ts`.
6. En Vercel, importa el repo y define `NEXT_PUBLIC_SITE_URL` con el dominio final.

## Comandos

| Comando                | Qué hace                                                             |
| ---------------------- | -------------------------------------------------------------------- |
| `pnpm dev`             | Servidor de desarrollo (Turbopack)                                   |
| `pnpm build`           | Build de producción                                                  |
| `pnpm start`           | Sirve el build de producción                                         |
| `pnpm check`           | Lint + tipos + formato + pruebas unitarias (debe pasar sin warnings) |
| `pnpm lint`            | ESLint (CLI directa; `next lint` ya no existe)                       |
| `pnpm typecheck`       | Genera tipos de rutas y corre `tsc`                                  |
| `pnpm format`          | Prettier con orden de clases de Tailwind                             |
| `pnpm test`            | Vitest + Testing Library (incluye render de todas las historias)     |
| `pnpm test:e2e`        | Playwright de humo sobre el build (corre `pnpm build` antes)         |
| `pnpm storybook`       | Storybook en http://localhost:6006                                   |
| `pnpm build-storybook` | Storybook estático en `storybook-static/`                            |

La primera vez que corras Playwright: `pnpm exec playwright install chromium`.

## Estructura

```text
app/
├─ layout.tsx               # fuentes de la marca, tema, metadatos, <html lang>
├─ page.tsx                 # página de ejemplo
├─ design-system/           # vitrina de tokens y componentes (para clientes)
├─ blog/ · blog/[slug]/     # rutas MDX de ejemplo
├─ sitemap.ts · robots.ts · opengraph-image.tsx
└─ globals.css              # Tailwind + capas de tokens
brands/
├─ default/ · demo/         # tokens.css (primitivos), fonts.ts (next/font), index.ts
├─ active.css               # UNA línea: tokens de la marca activa
└─ active.ts                # UNA línea: fuentes y ajustes de la marca activa
styles/tokens/
├─ semantic.css             # roles (primary, surface, text…) en claro y oscuro
└─ theme.css                # @theme inline: expone los roles a Tailwind
components/
├─ ui/                      # Button, Link, Badge, Icon, Input, Textarea, Select, Checkbox, Card
├─ layout/                  # Container, Section, Stack/Grid, Header/Nav, Footer
└─ site/                    # ThemeProvider, ThemeToggle, SkipLink
config/site.ts              # textos y datos centralizados (listo para i18n)
content/                    # MDX y textos de páginas
tests/e2e/                  # prueba de humo de Playwright
.storybook/                 # Storybook (nextjs-vite) + a11y + temas
components.json             # config de shadcn (estilo base-nova = Base UI)
```

## Tokens en tres capas

1. **Primitivos** (`brands/<marca>/tokens.css`): escalas `--brand-*`, `--neutral-*`, estados,
   `--radius-base`, `--icon-stroke`. Es lo único que cambia entre clientes.
2. **Roles** (`styles/tokens/semantic.css`): `--primary`, `--surface`, `--muted-foreground`,
   `--border`, `--focus-ring`… con valores para claro (`:root`) y oscuro (`.dark`).
3. **Tailwind** (`styles/tokens/theme.css`): `bg-primary`, `text-muted-foreground`, `rounded-md`,
   `font-display`. La paleta por defecto de Tailwind está apagada para que nadie use colores sueltos.

Los componentes **solo** usan clases de roles. Por eso un Button se ve bien en cualquier marca.

## Cómo agregar una marca

1. Copia `brands/default/` a `brands/<cliente>/` y cambia `id` y `name` en `index.ts`.
2. En `tokens.css`, cambia escalas de color, `--radius-base` e `--icon-stroke` con el manual de marca.
3. En `fonts.ts`, declara máximo dos familias con `next/font/google` (o `next/font/local` si son
   licenciadas), siempre con `subsets: ["latin"]` y las variables `--font-brand-sans`,
   `--font-brand-display` y `--font-brand-mono`.
4. Cambia la ruta en `brands/active.css` y `brands/active.ts`.
5. Abre `/design-system` en claro y oscuro y revisa el contraste AA.

Si un rol no llega a AA, sobrescríbelo **en el `tokens.css` de la marca**, no en los componentes.
Ejemplo (así lo hace `brands/demo`): `:root:not(.dark) { --primary: var(--brand-700); }`.

Para que una marca use solo el tema claro, pon `darkMode: false` en su `index.ts`.

## Componentes

Siguen el patrón shadcn/ui: el código vive en el repo y se edita libremente. Las variantes usan
`class-variance-authority` y `cn()` (`clsx` + `tailwind-merge`) para que `className` siempre gane.
Las piezas interactivas (Button, Input, Select, Checkbox) usan primitivas de
[Base UI](https://base-ui.com).

- **Icon** envuelve `lucide-react` y lee `--icon-size-*` e `--icon-stroke`. Para usar Phosphor en una
  marca, solo se adapta `components/ui/icon.tsx`. No mezcles sets en una misma interfaz.
- **Button como enlace:** `<Button nativeButton={false} render={<NextLink href="/x" />}>…</Button>`.
- Componentes interactivos complejos (Dialog, Dropdown, Tabs, Toast, Tooltip) se agregan por
  proyecto con `pnpm dlx shadcn@latest add <componente>` cuando hagan falta.

Cada componente tiene su `*.stories.tsx`; `components/stories.test.tsx` renderiza todas las
historias en Vitest, así que una historia rota rompe `pnpm test`.

## Decisiones

| Tema        | Elección                                                                  |
| ----------- | ------------------------------------------------------------------------- |
| Framework   | Next.js 16 (App Router, Cache Components) + React 19 + TS estricto        |
| Estilos     | Tailwind CSS 4 con `@theme`; tokens en CSS                                |
| Componentes | Patrón shadcn/ui sobre Base UI + cva + tailwind-merge                     |
| Iconos      | Lucide envuelto en `Icon`                                                 |
| Fuentes     | `next/font/google`, variables CSS, un `fonts.ts` por marca                |
| Tema        | Claro + oscuro con `next-themes`; se apaga por marca                      |
| Contenido   | MDX en el repo (`@next/mdx`)                                              |
| i18n        | No incluido; textos en `config/site.ts` y `content/`, `lang` configurable |
| Docs del DS | `/design-system` (clientes) + Storybook 10 con addon a11y (desarrollo)    |
| Pruebas     | Vitest + Testing Library; Playwright de humo en escritorio y móvil        |
| Umbral      | Lighthouse ≥ 95 en las cuatro categorías (build de producción, móvil)     |

## Convenciones

- Componentes en PascalCase, archivos en kebab-case, tokens `--color-<rol>` en Tailwind.
- `"use client"` solo donde hace falta (Base UI interactivo, tema, navegación activa).
- Ningún texto fijo dentro de los componentes: va en `config/site.ts` o en `content/`.
- Commits convencionales (`feat:`, `fix:`, `docs:`, `chore:`…).

## Accesibilidad incluida

HTML semántico, enlace "Saltar al contenido", foco visible con token `--focus-ring`, contraste AA en
los dos temas, objetivos táctiles ≥ 24 px y `prefers-reduced-motion` respetado.
