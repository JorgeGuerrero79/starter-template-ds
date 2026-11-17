import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Input } from "./input";

const meta = {
  title: "UI/Input",
  component: Input,
  tags: ["autodocs"],
  args: { placeholder: "Ana López", "aria-label": "Nombre" },
  decorators: [
    (Story) => (
      <div className="w-72">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Email: Story = {
  args: { type: "email", placeholder: "ana@correo.com", "aria-label": "Correo" },
};
export const Invalid: Story = { args: { "aria-invalid": true, defaultValue: "ana@" } };
export const Disabled: Story = { args: { disabled: true } };
