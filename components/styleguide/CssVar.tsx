"use client";

import { useSyncExternalStore } from "react";

function subscribe(onChange: () => void) {
  // Some tokens change with screen width (e.g. --text-h1), so re-read on resize.
  window.addEventListener("resize", onChange);
  return () => window.removeEventListener("resize", onChange);
}

/** Read a CSS variable from :root in the browser. Uses the fallback on the server. */
export function useCssVar(name: string, fallback: string) {
  return useSyncExternalStore(
    subscribe,
    () => getComputedStyle(document.documentElement).getPropertyValue(name).trim() || fallback,
    () => fallback,
  );
}

/** Shows the live value of a CSS variable, e.g. <CssVar name="--text-h1" fallback="72px" /> */
export default function CssVar({ name, fallback }: { name: string; fallback: string }) {
  return <>{useCssVar(name, fallback)}</>;
}
