import { render, screen } from "@testing-library/react";

import { Badge } from "./badge";
import { Card, CardDescription, CardHeader, CardTitle } from "./card";

describe("Badge", () => {
  it("aplica la variante", () => {
    render(<Badge variant="success">Listo</Badge>);
    expect(screen.getByText("Listo")).toHaveClass("text-success");
  });
});

describe("Card", () => {
  it("usa h3 por defecto y permite cambiar el nivel", () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>Título</CardTitle>
          <CardTitle as="h2">Otro</CardTitle>
          <CardDescription>Descripción</CardDescription>
        </CardHeader>
      </Card>,
    );
    expect(screen.getByRole("heading", { level: 3, name: "Título" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2, name: "Otro" })).toBeInTheDocument();
  });
});
