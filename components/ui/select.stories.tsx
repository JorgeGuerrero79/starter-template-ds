import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./select";

const items = [
  { value: "branding", label: "Branding" },
  { value: "web", label: "Sitio web" },
  { value: "app", label: "App" },
];

function SelectDemo({ disabled, defaultValue }: { disabled?: boolean; defaultValue?: string }) {
  return (
    <div className="w-64">
      <Select items={items} disabled={disabled} defaultValue={defaultValue}>
        <SelectTrigger aria-label="Servicio">
          <SelectValue placeholder="Elige un servicio" />
        </SelectTrigger>
        <SelectContent>
          {items.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

const meta = {
  title: "UI/Select",
  component: SelectDemo,
  tags: ["autodocs"],
} satisfies Meta<typeof SelectDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const WithValue: Story = { args: { defaultValue: "web" } };
export const Disabled: Story = { args: { disabled: true } };
