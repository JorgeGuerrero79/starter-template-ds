import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Mail, Settings } from "lucide-react";

import { Button } from "./button";
import { Icon } from "./icon";

const meta = {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
  args: { children: "Botón" },
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "outline", "ghost", "danger", "link"],
    },
    size: { control: "select", options: ["sm", "md", "lg", "icon"] },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
export const Secondary: Story = { args: { variant: "secondary" } };
export const Outline: Story = { args: { variant: "outline" } };
export const Ghost: Story = { args: { variant: "ghost" } };
export const Danger: Story = { args: { variant: "danger", children: "Eliminar" } };
export const AsLink: Story = { args: { variant: "link", children: "Ver más" } };
export const Disabled: Story = { args: { disabled: true } };
export const WithIcon: Story = {
  args: {
    children: (
      <>
        <Icon icon={Mail} size="sm" />
        Escribir
      </>
    ),
  },
};
export const IconOnly: Story = {
  args: {
    size: "icon",
    variant: "outline",
    "aria-label": "Ajustes",
    children: <Icon icon={Settings} />,
  },
};
