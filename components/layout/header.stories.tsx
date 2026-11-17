import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Button } from "@/components/ui/button";

import { Header } from "./header";

const meta = {
  title: "Layout/Header y Nav",
  component: Header,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen", nextjs: { navigation: { pathname: "/blog" } } },
  args: {
    siteName: "Starter DS",
    navLabel: "Navegación principal",
    navItems: [
      { href: "/", label: "Inicio" },
      { href: "/blog", label: "Blog" },
      { href: "/design-system", label: "Design system" },
    ],
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const WithActions: Story = {
  args: { actions: <Button size="sm">Contacto</Button> },
};
