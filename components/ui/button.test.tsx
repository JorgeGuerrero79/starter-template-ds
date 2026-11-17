import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Button } from "./button";

describe("Button", () => {
  it("renderiza un botón con la variante por defecto", () => {
    render(<Button>Enviar</Button>);
    const button = screen.getByRole("button", { name: "Enviar" });
    expect(button).toHaveClass("bg-primary");
    expect(button).toHaveAttribute("data-slot", "button");
  });

  it("aplica variante y tamaño", () => {
    render(
      <Button variant="outline" size="lg">
        Contorno
      </Button>,
    );
    const button = screen.getByRole("button", { name: "Contorno" });
    expect(button).toHaveClass("border-input", "h-12");
    expect(button).not.toHaveClass("bg-primary");
  });

  it("deja que className gane sobre las clases base", () => {
    render(<Button className="px-8">Ancho</Button>);
    const button = screen.getByRole("button", { name: "Ancho" });
    expect(button).toHaveClass("px-8");
    expect(button).not.toHaveClass("px-4");
  });

  it("llama a onClick y respeta disabled", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    const { rerender } = render(<Button onClick={onClick}>Clic</Button>);
    await user.click(screen.getByRole("button", { name: "Clic" }));
    expect(onClick).toHaveBeenCalledTimes(1);

    rerender(
      <Button onClick={onClick} disabled>
        Clic
      </Button>,
    );
    await user.click(screen.getByRole("button", { name: "Clic" }));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("se puede mostrar como enlace con render", () => {
    render(
      <Button nativeButton={false} render={<a href="/contacto" />}>
        Contacto
      </Button>,
    );
    expect(screen.getByRole("button", { name: "Contacto" })).toHaveAttribute("href", "/contacto");
  });
});
