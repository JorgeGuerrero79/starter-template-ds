import type * as React from "react";

import { cn } from "@/lib/utils";

import { fieldBaseClasses } from "./input";

export type TextareaProps = React.ComponentProps<"textarea">;

export function Textarea({ className, rows = 4, ...props }: TextareaProps) {
  return (
    <textarea
      data-slot="textarea"
      rows={rows}
      className={cn(fieldBaseClasses, "min-h-20 px-3 py-2 text-base sm:text-sm", className)}
      {...props}
    />
  );
}
