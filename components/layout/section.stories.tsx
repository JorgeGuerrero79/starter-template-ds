import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Container } from "./container";
import { Section } from "./section";

const meta = {
  title: "Layout/Section",
  component: Section,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
  args: {
    "aria-label": "Sección de ejemplo",
    children: (
      <Container>
        <h2 className="text-2xl font-semibold">Título de sección</h2>
        <p className="mt-2">Las secciones dan ritmo vertical a la página.</p>
      </Container>
    ),
  },
  argTypes: {
    tone: { control: "select", options: ["default", "surface", "accent", "primary"] },
    spacing: { control: "select", options: ["none", "sm", "md", "lg"] },
  },
} satisfies Meta<typeof Section>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Surface: Story = { args: { tone: "surface" } };
export const Accent: Story = { args: { tone: "accent" } };
export const Primary: Story = { args: { tone: "primary" } };
