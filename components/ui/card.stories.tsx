import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Badge } from "./badge";
import { Button } from "./button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./card";

const meta = {
  title: "UI/Card",
  component: Card,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-80">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <Badge variant="primary">Recomendado</Badge>
        <CardTitle>Plan con DS</CardTitle>
        <CardDescription>Para clientes y marcas que crecen.</CardDescription>
      </CardHeader>
      <CardContent>Tokens multi-marca, componentes y documentación.</CardContent>
      <CardFooter>
        <Button size="sm">Elegir</Button>
      </CardFooter>
    </Card>
  ),
};
