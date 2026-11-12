import { Fraunces, IBM_Plex_Mono, Source_Serif_4 } from "next/font/google";

/** Perfil "Editorial": Fraunces (títulos) + Source Serif 4 (texto). */
const sans = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-brand-sans",
  display: "swap",
});

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-brand-display",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-brand-mono",
  display: "swap",
});

export const fontVariables = [sans.variable, display.variable, mono.variable].join(" ");
