import type { MDXComponents } from "mdx/types";
import type * as React from "react";

import { Link } from "@/components/ui/link";

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <aside className="my-6 rounded-md border-l-4 border-primary bg-accent px-4 py-3 text-accent-foreground">
      {children}
    </aside>
  );
}

const components: MDXComponents = {
  h1: (props) => <h1 className="mt-10 mb-4 text-3xl font-bold" {...props} />,
  h2: (props) => <h2 className="mt-10 mb-3 text-2xl font-semibold" {...props} />,
  h3: (props) => <h3 className="mt-8 mb-2 text-xl font-semibold" {...props} />,
  p: (props) => <p className="my-4 leading-7" {...props} />,
  ul: (props) => <ul className="my-4 list-disc space-y-2 pl-6" {...props} />,
  ol: (props) => <ol className="my-4 list-decimal space-y-2 pl-6" {...props} />,
  code: (props) => (
    <code className="rounded-sm bg-muted px-1.5 py-0.5 font-mono text-[0.9em]" {...props} />
  ),
  pre: (props) => (
    <pre className="my-6 overflow-x-auto rounded-md bg-muted p-4 font-mono text-sm" {...props} />
  ),
  a: ({ href = "", ...props }) => <Link href={href} {...props} />,
  Callout,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
