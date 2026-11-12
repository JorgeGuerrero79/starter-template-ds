import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Badge } from "./badge";

const meta = {
  title: "UI/Badge",
  component: Badge,
  tags: ["autodocs"],
  args: { children: "Etiqueta" },
  argTypes: {
    variant: {
      control: "select",
      options: ["neutral", "primary", "accent", "success", "warning", "danger", "outline"],
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Neutral: Story = {};
export const Primary: Story = { args: { variant: "primary" } };
export const Accent: Story = { args: { variant: "accent" } };
export const Success: Story = { args: { variant: "success", children: "Publicado" } };
export const Warning: Story = { args: { variant: "warning", children: "Pendiente" } };
export const Danger: Story = { args: { variant: "danger", children: "Error" } };
export const Outline: Story = { args: { variant: "outline" } };
