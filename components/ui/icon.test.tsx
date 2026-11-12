import { render, screen } from "@testing-library/react";
import { Mail } from "lucide-react";

import { Icon } from "./icon";

describe("Icon", () => {
  it("es decorativo por defecto", () => {
    const { container } = render(<Icon icon={Mail} />);
    const svg = container.querySelector("svg");
    expect(svg).toHaveAttribute("aria-hidden", "true");
    expect(svg).toHaveClass("size-(--icon-size-md)");
  });

  it("expone un nombre accesible cuando recibe label", () => {
    render(<Icon icon={Mail} label="Correo" size="lg" />);
    const img = screen.getByRole("img", { name: "Correo" });
    expect(img).toHaveClass("size-(--icon-size-lg)");
  });
});
