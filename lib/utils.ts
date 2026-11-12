import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Une clases condicionales y resuelve choques de Tailwind (p. ej. px-2 vs px-4). */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const dateFormatter = new Intl.DateTimeFormat("es-MX", {
  year: "numeric",
  month: "long",
  day: "numeric",
  timeZone: "UTC",
});

/** Formatea una fecha ISO (YYYY-MM-DD) para mostrarla. */
export function formatDate(iso: string) {
  return dateFormatter.format(new Date(`${iso}T00:00:00Z`));
}

/**
 * Las primitivas de Base UI aceptan className como string o función de estado.
 * En el DS solo aceptamos string para poder combinarlo con cn().
 */
export type WithClassName<P> = Omit<P, "className"> & { className?: string };
