import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Container } from "./container";

const meta = {
  title: "Layout/Container",
  component: Container,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
  args: {
    children: (
      <div className="rounded-md bg-muted p-6 text-sm">Contenido centrado con márgenes</div>
    ),
  },
  argTypes: { size: { control: "select", options: ["sm", "md", "lg", "xl", "full"] } },
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Large: Story = {};
export const Small: Story = { args: { size: "sm" } };
