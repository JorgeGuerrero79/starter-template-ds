/**
 * Renderiza todas las historias de Storybook en Vitest (jsdom).
 * Así una historia rota hace fallar `pnpm test` sin abrir un navegador.
 */
import { composeStories } from "@storybook/react";
import { render } from "@testing-library/react";
import type * as React from "react";

type StoryModule = Parameters<typeof composeStories>[0];

const modules = import.meta.glob<StoryModule>("./**/*.stories.tsx", { eager: true });

describe.each(Object.entries(modules))("%s", (_file, mod) => {
  const stories = Object.entries(composeStories(mod)) as [string, React.ComponentType][];
  it.each(stories)("%s se renderiza", (_name, Story) => {
    const { container } = render(<Story />);
    expect(container.firstChild).not.toBeNull();
  });
});
