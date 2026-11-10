import { FeatureItem } from "@/components/ui/StatItem";
import type { Feature } from "@/data/types";

/** Three feature columns with left divider lines. */
export default function FeatureList({ items }: { items: Feature[] }) {
  return (
    <div className="grid gap-8 lg:grid-cols-3">
      {items.map((f) => (
        <FeatureItem key={f.title} {...f} />
      ))}
    </div>
  );
}
