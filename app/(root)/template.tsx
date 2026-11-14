import { ViewTransition } from "react";

/**
 * Re-mounts on every navigation, so React runs the enter/exit view
 * transition classes defined in globals.css (`page-in` / `page-out`).
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <ViewTransition enter="page-in" exit="page-out" default="none">
      <main id="main" className="relative flex-1">
        {children}
      </main>
    </ViewTransition>
  );
}
