import { Inter, JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";

/** Perfil "Corporativo": Plus Jakarta Sans (títulos) + Inter (texto). */
const sans = Inter({
  subsets: ["latin"],
  variable: "--font-brand-sans",
  display: "swap",
});

const display = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-brand-display",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-brand-mono",
  display: "swap",
});

export const fontVariables = [sans.variable, display.variable, mono.variable].join(" ");
