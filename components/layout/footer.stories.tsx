import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Footer } from "./footer";

const meta = {
  title: "Layout/Footer",
  component: Footer,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
  args: {
    siteName: "Starter DS",
    note: "Todos los derechos reservados.",
    links: [
      { href: "https://github.com", label: "GitHub" },
      { href: "/design-system", label: "Design system" },
    ],
  },
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const WithoutLinks: Story = { args: { links: [] } };
