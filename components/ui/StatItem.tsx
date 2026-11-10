import { cn } from "@/lib/cn";
import type { Stat } from "@/data/types";

type Props = Stat & {
  /** large: 80px charging counts, medium: 52px trim stats */
  size?: "large" | "medium";
  className?: string;
};

/** A number with a left divider line, used for charging counts and trim stats. */
export default function StatItem({ value, unit, label, note, size = "large", className }: Props) {
  return (
    <div className={cn("flex flex-col gap-2 border-l border-line pl-8", className)}>
      <p
        className={cn(
          "font-roboto font-bold leading-[1.3]",
          size === "large" ? "text-[56px] sm:text-[80px]" : "text-[40px] sm:text-[52px]",
        )}
      >
        {value}
        {unit && <small className="ml-1 text-[22px] font-medium">{unit}</small>}
      </p>
      <p className={size === "large" ? "text-h6" : ""}>
        {label}
        {note && <sup>{note}</sup>}
      </p>
    </div>
  );
}

/** Feature title + text with the same left divider, e.g. "Front cameras". */
export function FeatureItem({ title, text, note }: { title: string; text: string; note?: number }) {
  return (
    <div className="flex flex-col gap-3 border-l border-line pl-8">
      <p className="text-h6">{title}</p>
      <p>
        {text}
        {note && <sup>{note}</sup>}
      </p>
    </div>
  );
}
