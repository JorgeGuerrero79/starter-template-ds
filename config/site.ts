/**
 * Textos y datos del sitio en un solo lugar.
 * Ningún componente debe tener textos fijos: léelos de aquí o del contenido MDX.
 * Esto deja el proyecto listo para agregar i18n (por ejemplo next-intl) después.
 */
export const siteConfig = {
  name: "Starter DS",
  description:
    "Template base con Next.js, Tailwind y un design system multi-marca listo para clientes.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  lang: "es",
  locale: "es_MX",
  author: "Tu nombre",
  nav: [
    { href: "/", label: "Inicio" },
    { href: "/blog", label: "Blog" },
    { href: "/design-system", label: "Design system" },
  ],
  social: [{ href: "https://github.com/", label: "GitHub" }],
  ui: {
    skipToContent: "Saltar al contenido",
    mainNav: "Navegación principal",
    themeToggle: "Cambiar tema",
    themeLight: "Claro",
    themeDark: "Oscuro",
    themeSystem: "Sistema",
    notFoundTitle: "Página no encontrada",
    notFoundBody: "La página que buscas no existe o cambió de dirección.",
    backHome: "Volver al inicio",
    readMore: "Leer más",
    rights: "Todos los derechos reservados.",
  },
} as const;

export type SiteConfig = typeof siteConfig;
