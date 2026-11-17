"use client";

import { usePathname } from "next/navigation";

import { Link } from "@/components/ui/link";
import { cn } from "@/lib/utils";

export type NavItem = { href: string; label: string };

export type NavProps = {
  items: readonly NavItem[];
  label: string;
  className?: string;
};

/** Navegación principal. Marca la página actual con aria-current. */
export function Nav({ items, label, className }: NavProps) {
  const pathname = usePathname();

  return (
    <nav aria-label={label} className={className}>
      <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
        {items.map((item) => {
          const active = item.href === "/" ? pathname === "/" : pathname?.startsWith(item.href);
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                variant="nav"
                aria-current={active ? "page" : undefined}
                className={cn("py-1")}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
