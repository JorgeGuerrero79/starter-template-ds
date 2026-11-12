import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Checkbox } from "./checkbox";

describe("Checkbox", () => {
  it("cambia de estado con clic en la etiqueta", async () => {
    const user = userEvent.setup();
    render(
      <label>
        <Checkbox />
        Acepto
      </label>,
    );
    const checkbox = screen.getByRole("checkbox", { name: "Acepto" });
    expect(checkbox).toHaveAttribute("aria-checked", "false");
    await user.click(screen.getByText("Acepto"));
    expect(checkbox).toHaveAttribute("aria-checked", "true");
  });
});
