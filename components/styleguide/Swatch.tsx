"use client";

import { cn } from "@/lib/cn";
import { useCssVar } from "./CssVar";

/** WCAG contrast ratio of a #rrggbb color against white. Returns null for other formats (e.g. rgba). */
function contrastOnWhite(hex: string) {
  const m = /^#([0-9a-f]{6})$/i.exec(hex);
  if (!m) return null;
  const [r, g, b] = [0, 2, 4].map((i) => {
    const c = parseInt(m[1].slice(i, i + 2), 16) / 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
  const lum = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  return 1.05 / (lum + 0.05);
}

type Props = {
  /** CSS variable, e.g. --color-primary */
  token: string;
  /** Tailwind class that paints the swatch, e.g. bg-primary */
  className: string;
  fallback: string;
  usage: string;
};

/** Color chip that shows the token's live value and its contrast on white. */
export default function Swatch({ token, className, fallback, usage }: Props) {
  const value = useCssVar(token, fallback);
  const ratio = contrastOnWhite(value);

  return (
    <div className="flex flex-col gap-2">
      <div className={cn("h-16 rounded-md border border-line", className)} />
      <div className="flex flex-col gap-0.5 text-xs">
        <code className="font-mono font-semibold">{token}</code>
        <span className="font-mono text-ink/60">
          {value}
          {ratio && ` · ${ratio.toFixed(1)}:1`}
        </span>
        <span className="text-sm text-ink/60">{usage}</span>
      </div>
    </div>
  );
}
