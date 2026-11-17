import { cva, type VariantProps } from "class-variance-authority";
import type * as React from "react";

import { cn } from "@/lib/utils";

const gap = {
  none: "gap-0",
  xs: "gap-1",
  sm: "gap-2",
  md: "gap-4",
  lg: "gap-6",
  xl: "gap-10",
} as const;

export const stackVariants = cva("flex", {
  variants: {
    direction: {
      column: "flex-col",
      row: "flex-row flex-wrap",
      responsive: "flex-col md:flex-row",
    },
    gap,
    align: {
      start: "items-start",
      center: "items-center",
      end: "items-end",
      stretch: "items-stretch",
      baseline: "items-baseline",
    },
    justify: {
      start: "justify-start",
      center: "justify-center",
      end: "justify-end",
      between: "justify-between",
    },
  },
  defaultVariants: { direction: "column", gap: "md" },
});

export type StackProps = React.ComponentProps<"div"> & VariantProps<typeof stackVariants>;

/** Apila elementos en columna o fila con un espacio del sistema. */
export function Stack({ className, direction, gap, align, justify, ...props }: StackProps) {
  return (
    <div
      data-slot="stack"
      className={cn(stackVariants({ direction, gap, align, justify }), className)}
      {...props}
    />
  );
}

export const gridVariants = cva("grid", {
  variants: {
    cols: {
      1: "grid-cols-1",
      2: "grid-cols-1 sm:grid-cols-2",
      3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
      4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
    },
    gap,
  },
  defaultVariants: { cols: 3, gap: "lg" },
});

export type GridProps = React.ComponentProps<"div"> & VariantProps<typeof gridVariants>;

/** Retícula responsiva: 1 columna en móvil y hasta `cols` en escritorio. */
export function Grid({ className, cols, gap, ...props }: GridProps) {
  return <div data-slot="grid" className={cn(gridVariants({ cols, gap }), className)} {...props} />;
}
