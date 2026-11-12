/** Roles que se muestran en la vitrina. Son los mismos en todas las marcas. */
export const colorRoles = [
  { name: "background", fg: "foreground" },
  { name: "surface", fg: "surface-foreground" },
  { name: "muted", fg: "muted-foreground" },
  { name: "primary", fg: "primary-foreground" },
  { name: "secondary", fg: "secondary-foreground" },
  { name: "accent", fg: "accent-foreground" },
  { name: "danger", fg: "danger-foreground" },
] as const;

export const statusRoles = [
  "success",
  "warning",
  "danger",
  "link",
  "border",
  "input",
  "focus-ring",
] as const;

export const typeScale = [
  { className: "text-5xl font-bold font-display", label: "Display · text-5xl" },
  { className: "text-3xl font-bold font-display", label: "H1 · text-3xl" },
  { className: "text-2xl font-semibold font-display", label: "H2 · text-2xl" },
  { className: "text-xl font-semibold font-display", label: "H3 · text-xl" },
  { className: "text-base", label: "Texto · text-base" },
  { className: "text-sm text-muted-foreground", label: "Secundario · text-sm" },
  { className: "font-mono text-sm", label: "Mono · font-mono" },
] as const;

export const radii = [
  "rounded-sm",
  "rounded-md",
  "rounded-lg",
  "rounded-xl",
  "rounded-full",
] as const;
