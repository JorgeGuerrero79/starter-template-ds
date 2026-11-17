/** Textos de la página de inicio (separados del componente para facilitar i18n). */
export const home = {
  eyebrow: "Next.js 16 · Tailwind 4 · Base UI",
  primaryCta: "Ver el design system",
  secondaryCta: "Leer el blog",
  featuresTitle: "Qué trae este template",
  features: [
    {
      title: "Arranca en minutos",
      body: "App Router, TypeScript estricto, MDX, SEO y modo oscuro listos desde el primer commit.",
    },
    {
      title: "Multi-marca",
      body: "Cambia de cliente editando brands/active.css y brands/active.ts. Los componentes no se tocan.",
    },
    {
      title: "Calidad incluida",
      body: "Accesibilidad AA, Storybook, Vitest y Playwright para revisar cada cambio.",
    },
  ],
} as const;
