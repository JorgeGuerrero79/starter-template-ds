import type * as React from "react";

import { Link } from "@/components/ui/link";
import { cn } from "@/lib/utils";

import { Container } from "./container";

export type FooterLink = { href: string; label: string };

export type FooterProps = React.ComponentProps<"footer"> & {
  siteName: string;
  links?: readonly FooterLink[];
  note?: React.ReactNode;
};

export function Footer({ siteName, links = [], note, className, ...props }: FooterProps) {
  return (
    <footer
      data-slot="footer"
      className={cn("border-t border-border bg-surface text-sm text-muted-foreground", className)}
      {...props}
    >
      <Container className="flex flex-col gap-4 py-8 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {siteName}. {note}
        </p>
        {links.length > 0 && (
          <ul className="flex flex-wrap gap-4">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} variant="nav">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </Container>
    </footer>
  );
}
