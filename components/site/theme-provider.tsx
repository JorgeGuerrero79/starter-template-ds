"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type * as React from "react";

export function ThemeProvider({
  children,
  enableDark = true,
}: {
  children: React.ReactNode;
  enableDark?: boolean;
}) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme={enableDark ? "system" : "light"}
      forcedTheme={enableDark ? undefined : "light"}
      enableSystem={enableDark}
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
}
