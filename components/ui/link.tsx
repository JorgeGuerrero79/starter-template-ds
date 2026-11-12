import { cva, type VariantProps } from "class-variance-authority";
import NextLink from "next/link";
import type * as React from "react";

import { cn } from "@/lib/utils";

export const linkVariants = cva(
  "rounded-sm underline-offset-4 transition-colors duration-(--duration-fast) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring",
  {
    variants: {
      variant: {
        inline: "font-medium text-link underline hover:no-underline",
        standalone: "inline-flex items-center gap-1 font-medium text-link hover:underline",
        nav: "inline-flex min-h-6 items-center text-muted-foreground hover:text-foreground aria-[current=page]:font-semibold aria-[current=page]:text-foreground",
        plain: "text-inherit hover:underline",
      },
    },
    defaultVariants: { variant: "inline" },
  },
);

export type LinkProps = React.ComponentProps<typeof NextLink> &
  VariantProps<typeof linkVariants> & {
    /** Abre en otra pestaña y agrega rel seguro. Se activa solo con URLs http(s). */
    external?: boolean;
  };

/** Enlace del DS: next/link para rutas internas, <a> seguro para externas. */
export function Link({ className, variant, external, href, children, ...props }: LinkProps) {
  const isExternal = external ?? (typeof href === "string" && /^https?:\/\//.test(href));
  const classes = cn(linkVariants({ variant }), className);

  if (isExternal && typeof href === "string") {
    const { prefetch: _prefetch, replace: _replace, scroll: _scroll, ...anchorProps } = props;
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...anchorProps}>
        {children}
        <span className="sr-only"> (abre en otra pestaña)</span>
      </a>
    );
  }

  return (
    <NextLink href={href} className={classes} {...props}>
      {children}
    </NextLink>
  );
}
