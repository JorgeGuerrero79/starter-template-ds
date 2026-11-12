import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Link } from "./link";

const meta = {
  title: "UI/Link",
  component: Link,
  tags: ["autodocs"],
  args: { href: "/blog", children: "Ir al blog" },
  argTypes: { variant: { control: "select", options: ["inline", "standalone", "nav", "plain"] } },
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Inline: Story = {};
export const Standalone: Story = { args: { variant: "standalone" } };
export const Nav: Story = { args: { variant: "nav" } };
export const External: Story = { args: { href: "https://nextjs.org", children: "Next.js" } };
