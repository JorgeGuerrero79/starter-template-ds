import type * as React from "react";

import { Link } from "@/components/ui/link";
import { cn } from "@/lib/utils";

import { Container } from "./container";
import { Nav, type NavItem } from "./nav";

export type HeaderProps = React.ComponentProps<"header"> & {
  siteName: string;
  navItems: readonly NavItem[];
  navLabel: string;
  /** Acciones a la derecha (p. ej. el selector de tema). */
  actions?: React.ReactNode;
};

export function Header({
  siteName,
  navItems,
  navLabel,
  actions,
  className,
  ...props
}: HeaderProps) {
  return (
    <header
      data-slot="header"
      className={cn("border-b border-border bg-background/95 backdrop-blur", className)}
      {...props}
    >
      <Container className="flex min-h-16 flex-wrap items-center justify-between gap-x-6 gap-y-2 py-3">
        <Link
          href="/"
          variant="plain"
          className="font-display text-lg font-bold hover:no-underline"
        >
          {siteName}
        </Link>
        <div className="flex flex-wrap items-center gap-4">
          <Nav items={navItems} label={navLabel} />
          {actions}
        </div>
      </Container>
    </header>
  );
}

export { Nav, type NavItem } from "./nav";
