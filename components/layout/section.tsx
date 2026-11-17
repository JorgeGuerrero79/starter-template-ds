import { cva, type VariantProps } from "class-variance-authority";
import type * as React from "react";

import { cn } from "@/lib/utils";

export const sectionVariants = cva("w-full", {
  variants: {
    spacing: {
      none: "py-0",
      sm: "py-8 md:py-12",
      md: "py-12 md:py-20",
      lg: "py-16 md:py-28",
    },
    tone: {
      default: "bg-background text-foreground",
      surface: "bg-surface text-surface-foreground",
      accent: "bg-accent text-accent-foreground",
      primary: "bg-primary text-primary-foreground",
    },
  },
  defaultVariants: { spacing: "md", tone: "default" },
});

export type SectionProps = React.ComponentProps<"section"> & VariantProps<typeof sectionVariants>;

/** Bloque vertical de página. Usa aria-labelledby apuntando a su título. */
export function Section({ className, spacing, tone, ...props }: SectionProps) {
  return (
    <section
      data-slot="section"
      className={cn(sectionVariants({ spacing, tone }), className)}
      {...props}
    />
  );
}
