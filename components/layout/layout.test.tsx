import { render, screen } from "@testing-library/react";

import { Container } from "./container";
import { Footer } from "./footer";
import { Header } from "./header";
import { Section } from "./section";
import { Grid, Stack } from "./stack";

const nav = [
  { href: "/", label: "Inicio" },
  { href: "/blog", label: "Blog" },
];

describe("Layout", () => {
  it("Header marca la página actual en la navegación", () => {
    render(<Header siteName="Sitio" navItems={nav} navLabel="Principal" />);
    const navigation = screen.getByRole("navigation", { name: "Principal" });
    expect(navigation).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Inicio" })).toHaveAttribute("aria-current", "page");
    expect(screen.getByRole("link", { name: "Blog" })).not.toHaveAttribute("aria-current");
  });

  it("Footer muestra el nombre y los enlaces", () => {
    render(<Footer siteName="Sitio" links={[{ href: "/x", label: "X" }]} />);
    expect(screen.getByRole("contentinfo")).toHaveTextContent("© Sitio");
    expect(screen.getByRole("link", { name: "X" })).toBeInTheDocument();
  });

  it("Container, Section, Stack y Grid aplican sus variantes", () => {
    render(
      <Section tone="surface" aria-label="s">
        <Container size="sm" data-testid="c">
          <Stack direction="row" gap="lg" data-testid="st">
            <Grid cols={2} data-testid="g" />
          </Stack>
        </Container>
      </Section>,
    );
    expect(screen.getByRole("region", { name: "s" })).toHaveClass("bg-surface");
    expect(screen.getByTestId("c")).toHaveClass("max-w-2xl");
    expect(screen.getByTestId("st")).toHaveClass("flex-row", "gap-6");
    expect(screen.getByTestId("g")).toHaveClass("sm:grid-cols-2");
  });
});
