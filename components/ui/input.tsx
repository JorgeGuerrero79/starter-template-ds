"use client";

import { Input as BaseInput } from "@base-ui/react/input";
import type * as React from "react";

import { cn, type WithClassName } from "@/lib/utils";

export const fieldBaseClasses = [
  "w-full min-w-0 rounded-md border border-input bg-background text-foreground",
  "placeholder:text-muted-foreground",
  "transition-colors duration-(--duration-fast)",
  "focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-focus-ring",
  "disabled:cursor-not-allowed disabled:opacity-50",
  "aria-invalid:border-danger",
];

export type InputProps = WithClassName<React.ComponentProps<typeof BaseInput>>;

export function Input({ className, ...props }: InputProps) {
  return (
    <BaseInput
      data-slot="input"
      className={cn(fieldBaseClasses, "h-10 px-3 text-base sm:text-sm", className)}
      {...props}
    />
  );
}
