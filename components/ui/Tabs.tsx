"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

type Tab = { id: string; label: string; content: React.ReactNode };

type Props = {
  title: string;
  tabs: Tab[];
  /** Shown under the panels, e.g. action buttons or footnotes */
  footer?: React.ReactNode;
  className?: string;
};

/** Heading with tab buttons on the right; shows one panel at a time. */
export default function Tabs({ title, tabs, footer, className }: Props) {
  const [active, setActive] = useState(tabs[0]?.id);

  return (
    <div className={cn("flex flex-col", className)}>
      <div className="flex flex-wrap items-end justify-between gap-6">
        <h2 className="text-h2">{title}</h2>
        <div className="flex flex-wrap gap-2" role="tablist">
          {tabs.map((t) => (
            <button
              key={t.id}
              type="button"
              role="tab"
              aria-selected={t.id === active}
              onClick={() => setActive(t.id)}
              className={cn(
                "cursor-pointer rounded-md px-4 py-2 font-medium transition-colors",
                t.id === active ? "bg-ink text-white" : "bg-ink-5 hover:bg-ink/10",
              )}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>
      {/* All panels stay in the HTML; only the active one is visible */}
      {tabs.map((t) => (
        <div key={t.id} role="tabpanel" hidden={t.id !== active}>
          {t.content}
        </div>
      ))}
      {footer}
    </div>
  );
}
