import { fontVariables } from "./fonts";

export const brand = {
  id: "default",
  name: "Default",
  /** Pon false para que la marca use solo el tema claro. */
  darkMode: true,
  fontVariables,
} as const;
