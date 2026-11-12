import { expect, test } from "@playwright/test";

test.describe("humo", () => {
  test("la página de inicio carga con navegación y enlace para saltar al contenido", async ({
    page,
  }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/Starter DS/);
    await expect(page.locator("html")).toHaveAttribute("lang", "es");
    await expect(page.getByRole("navigation", { name: "Navegación principal" })).toBeVisible();
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();

    await page.keyboard.press("Tab");
    await expect(page.getByRole("link", { name: "Saltar al contenido" })).toBeFocused();
  });

  test("/design-system muestra tokens y componentes", async ({ page }) => {
    await page.goto("/design-system");
    await expect(page.getByRole("heading", { name: "Design system", level: 1 })).toBeVisible();
    for (const section of ["Color", "Tipografía", "Button y Link", "Card"]) {
      await expect(page.getByRole("heading", { name: section, level: 2 })).toBeVisible();
    }
    await expect(page.getByRole("button", { name: "Primario" })).toBeVisible();
  });

  test("el Select de Base UI abre y elige una opción", async ({ page }) => {
    await page.goto("/design-system");
    await page.getByRole("combobox", { name: "Servicio" }).click();
    await page.getByRole("option", { name: "Sitio web" }).click();
    await expect(page.getByRole("combobox", { name: "Servicio" })).toContainText("Sitio web");
  });

  test("el selector de tema cambia a oscuro", async ({ page }) => {
    await page.emulateMedia({ colorScheme: "light" });
    await page.goto("/");
    await page.getByRole("button", { name: "Cambiar tema" }).click();
    await expect(page.locator("html")).toHaveClass(/dark/);
  });

  test("el blog lista posts y abre uno", async ({ page }) => {
    await page.goto("/blog");
    await page.getByRole("link", { name: "Cómo cambiar de marca" }).click();
    await expect(
      page.getByRole("heading", { level: 1, name: "Cómo cambiar de marca" }),
    ).toBeVisible();
  });

  test("una ruta inexistente muestra 404", async ({ page }) => {
    const response = await page.goto("/no-existe");
    expect(response?.status()).toBe(404);
    await expect(page.getByRole("heading", { name: "Página no encontrada" })).toBeVisible();
  });

  test("sitemap y robots responden", async ({ request }) => {
    expect((await request.get("/sitemap.xml")).ok()).toBeTruthy();
    expect((await request.get("/robots.txt")).ok()).toBeTruthy();
  });
});
