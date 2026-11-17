import { cva, type VariantProps } from "class-variance-authority";
import type * as React from "react";

import { cn } from "@/lib/utils";

export const containerVariants = cva("mx-auto w-full px-4 sm:px-6 lg:px-8", {
  variants: {
    size: {
      sm: "max-w-2xl",
      md: "max-w-4xl",
      lg: "max-w-6xl",
      xl: "max-w-7xl",
      full: "max-w-none",
    },
  },
  defaultVariants: { size: "lg" },
});

export type ContainerProps = React.ComponentProps<"div"> & VariantProps<typeof containerVariants>;

export function Container({ className, size, ...props }: ContainerProps) {
  return (
    <div data-slot="container" className={cn(containerVariants({ size }), className)} {...props} />
  );
}
