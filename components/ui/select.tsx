"use client";

import { Select as BaseSelect } from "@base-ui/react/select";
import { Check, ChevronsUpDown } from "lucide-react";
import type * as React from "react";

import { cn, type WithClassName } from "@/lib/utils";

import { fieldBaseClasses } from "./input";

export const Select = BaseSelect.Root;
export const SelectGroup = BaseSelect.Group;

export function SelectValue({
  className,
  ...props
}: WithClassName<React.ComponentProps<typeof BaseSelect.Value>>) {
  return (
    <BaseSelect.Value
      data-slot="select-value"
      className={cn("truncate data-placeholder:text-muted-foreground", className)}
      {...props}
    />
  );
}

export function SelectTrigger({
  className,
  children,
  ...props
}: WithClassName<React.ComponentProps<typeof BaseSelect.Trigger>>) {
  return (
    <BaseSelect.Trigger
      data-slot="select-trigger"
      className={cn(
        fieldBaseClasses,
        "flex h-10 items-center justify-between gap-2 px-3 text-left text-base select-none sm:text-sm",
        "data-popup-open:border-primary",
        className,
      )}
      {...props}
    >
      {children}
      <BaseSelect.Icon className="text-muted-foreground">
        <ChevronsUpDown className="size-4" aria-hidden />
      </BaseSelect.Icon>
    </BaseSelect.Trigger>
  );
}

export function SelectContent({
  className,
  children,
  sideOffset = 4,
  alignItemWithTrigger = false,
  ...props
}: WithClassName<React.ComponentProps<typeof BaseSelect.Popup>> &
  Pick<React.ComponentProps<typeof BaseSelect.Positioner>, "sideOffset" | "alignItemWithTrigger">) {
  return (
    <BaseSelect.Portal>
      <BaseSelect.Positioner
        className="z-50 outline-none select-none"
        sideOffset={sideOffset}
        alignItemWithTrigger={alignItemWithTrigger}
      >
        <BaseSelect.Popup
          data-slot="select-content"
          className={cn(
            "max-h-(--available-height) min-w-(--anchor-width) origin-(--transform-origin) overflow-y-auto rounded-md border border-border bg-background p-1 text-foreground shadow-lg outline-none",
            "transition-[opacity,scale] duration-(--duration-fast) data-ending-style:scale-95 data-ending-style:opacity-0 data-starting-style:scale-95 data-starting-style:opacity-0",
            className,
          )}
          {...props}
        >
          <BaseSelect.List>{children}</BaseSelect.List>
        </BaseSelect.Popup>
      </BaseSelect.Positioner>
    </BaseSelect.Portal>
  );
}

export function SelectItem({
  className,
  children,
  ...props
}: WithClassName<React.ComponentProps<typeof BaseSelect.Item>>) {
  return (
    <BaseSelect.Item
      data-slot="select-item"
      className={cn(
        "grid min-h-8 cursor-default grid-cols-[1rem_1fr] items-center gap-2 rounded-sm py-1.5 pr-3 pl-2 text-sm outline-none select-none",
        "data-disabled:opacity-50 data-highlighted:bg-muted",
        className,
      )}
      {...props}
    >
      <BaseSelect.ItemIndicator className="col-start-1">
        <Check className="size-4" aria-hidden />
      </BaseSelect.ItemIndicator>
      <BaseSelect.ItemText className="col-start-2">{children}</BaseSelect.ItemText>
    </BaseSelect.Item>
  );
}

export function SelectLabel({
  className,
  ...props
}: WithClassName<React.ComponentProps<typeof BaseSelect.Label>>) {
  return (
    <BaseSelect.Label
      data-slot="select-label"
      className={cn("text-sm font-medium", className)}
      {...props}
    />
  );
}
