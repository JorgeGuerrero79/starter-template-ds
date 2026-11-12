import { withThemeByClassName } from "@storybook/addon-themes";
import type { Preview } from "@storybook/nextjs-vite";

import { brand } from "../brands/active";

import "../app/globals.css";

const preview: Preview = {
  parameters: {
    layout: "centered",
    nextjs: { appDirectory: true },
    controls: { matchers: { color: /(background|color)$/i } },
    a11y: {
      // "error" hace que las violaciones de accesibilidad fallen en las pruebas de Storybook
      test: "error",
    },
  },
  decorators: [
    (Story) => (
      <div className={`${brand.fontVariables} bg-background p-6 font-sans text-foreground`}>
        <Story />
      </div>
    ),
    withThemeByClassName({
      themes: { claro: "", oscuro: "dark" },
      defaultTheme: "claro",
    }),
  ],
};

export default preview;
