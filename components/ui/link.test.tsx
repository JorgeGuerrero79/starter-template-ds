import { render, screen } from "@testing-library/react";

import { Link } from "./link";

describe("Link", () => {
  it("usa next/link para rutas internas", () => {
    render(<Link href="/blog">Blog</Link>);
    const link = screen.getByRole("link", { name: "Blog" });
    expect(link).toHaveAttribute("href", "/blog");
    expect(link).not.toHaveAttribute("target");
  });

  it("abre URLs externas en otra pestaña con rel seguro y aviso accesible", () => {
    render(<Link href="https://example.com">Ejemplo</Link>);
    const link = screen.getByRole("link", { name: /Ejemplo.*otra pestaña/ });
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });
});
