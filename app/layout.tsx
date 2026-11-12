import type { Metadata, Viewport } from "next";

import { brand } from "@/brands/active";
import { Footer, Header } from "@/components/layout";
import { SkipLink } from "@/components/site/skip-link";
import { ThemeProvider } from "@/components/site/theme-provider";
import { ThemeToggle } from "@/components/site/theme-toggle";
import { siteConfig } from "@/config/site";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: siteConfig.name, template: `%s · ${siteConfig.name}` },
  description: siteConfig.description,
  authors: [{ name: siteConfig.author }],
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#020617" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang={siteConfig.lang} className={brand.fontVariables} suppressHydrationWarning>
      <body className="flex min-h-dvh flex-col">
        <ThemeProvider enableDark={brand.darkMode}>
          <SkipLink label={siteConfig.ui.skipToContent} />
          <Header
            siteName={siteConfig.name}
            navItems={siteConfig.nav}
            navLabel={siteConfig.ui.mainNav}
            actions={brand.darkMode ? <ThemeToggle label={siteConfig.ui.themeToggle} /> : null}
          />
          <main id="contenido" tabIndex={-1} className="flex-1 focus:outline-none">
            {children}
          </main>
          <Footer
            siteName={siteConfig.name}
            links={siteConfig.social}
            note={siteConfig.ui.rights}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
