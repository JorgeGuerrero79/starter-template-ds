import { cva, type VariantProps } from "class-variance-authority";
import type { LucideIcon, LucideProps } from "lucide-react";

import { cn } from "@/lib/utils";

/**
 * Tamaño y trazo vienen de tokens (--icon-size-*, --icon-stroke).
 * Para cambiar de Lucide a otra librería (p. ej. Phosphor) en una marca,
 * solo se adapta este archivo.
 */
export const iconVariants = cva("inline-block shrink-0 [stroke-width:var(--icon-stroke)]", {
  variants: {
    size: {
      sm: "size-(--icon-size-sm)",
      md: "size-(--icon-size-md)",
      lg: "size-(--icon-size-lg)",
    },
  },
  defaultVariants: { size: "md" },
});

export type IconProps = Omit<LucideProps, "size" | "ref"> &
  VariantProps<typeof iconVariants> & {
    /** Componente de lucide-react, p. ej. `import { Mail } from "lucide-react"`. */
    icon: LucideIcon;
    /** Texto para lectores de pantalla. Sin label, el ícono es decorativo. */
    label?: string;
  };

export function Icon({ icon: Component, size, label, className, ...props }: IconProps) {
  return (
    <Component
      data-slot="icon"
      className={cn(iconVariants({ size }), className)}
      aria-hidden={label ? undefined : true}
      aria-label={label}
      role={label ? "img" : undefined}
      focusable="false"
      {...props}
    />
  );
}
