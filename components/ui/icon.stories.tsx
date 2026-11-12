import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Heart, Star } from "lucide-react";

import { Icon } from "./icon";

const meta = {
  title: "UI/Icon",
  component: Icon,
  tags: ["autodocs"],
  args: { icon: Star },
  argTypes: { size: { control: "select", options: ["sm", "md", "lg"] }, icon: { control: false } },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Decorative: Story = {};
export const Small: Story = { args: { size: "sm" } };
export const Large: Story = { args: { size: "lg" } };
export const WithLabel: Story = {
  args: { icon: Heart, label: "Favorito", className: "text-primary" },
};
