import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Grid, Stack } from "./stack";

const boxes = Array.from({ length: 6 }, (_, i) => (
  <div
    key={i}
    className="flex h-14 min-w-14 items-center justify-center rounded-md bg-muted font-mono text-sm"
  >
    {i + 1}
  </div>
));

const meta = {
  title: "Layout/Stack y Grid",
  component: Stack,
  tags: ["autodocs"],
  args: { children: boxes },
  argTypes: {
    direction: { control: "select", options: ["column", "row", "responsive"] },
    gap: { control: "select", options: ["none", "xs", "sm", "md", "lg", "xl"] },
  },
} satisfies Meta<typeof Stack>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Column: Story = {};
export const Row: Story = { args: { direction: "row" } };
export const GridThreeColumns: Story = {
  parameters: { layout: "padded" },
  render: () => <Grid cols={3}>{boxes}</Grid>,
};
