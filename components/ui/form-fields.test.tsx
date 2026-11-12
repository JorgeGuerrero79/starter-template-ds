import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Input } from "./input";
import { Textarea } from "./textarea";

describe("Input y Textarea", () => {
  it("Input acepta texto y se asocia a su etiqueta", async () => {
    const user = userEvent.setup();
    render(
      <>
        <label htmlFor="n">Nombre</label>
        <Input id="n" />
      </>,
    );
    const input = screen.getByRole("textbox", { name: "Nombre" });
    await user.type(input, "Ana");
    expect(input).toHaveValue("Ana");
  });

  it("Textarea tiene 4 filas por defecto", () => {
    render(<Textarea aria-label="Mensaje" />);
    expect(screen.getByRole("textbox", { name: "Mensaje" })).toHaveAttribute("rows", "4");
  });
});
