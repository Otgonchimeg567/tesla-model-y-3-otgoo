import { cn } from "@/lib/cn";
import type { SpecSheet } from "@/data/types";

/** Specs in groups ("Жолоодлого", "Хэмжээ" ...), two columns each, with a divider above each group. */
export default function SpecTable({ groups }: { groups: SpecSheet["groups"] }) {
  return (
    <div className="flex flex-col gap-6 sm:gap-8">
      {groups.map((group, i) => (
        <div key={group.title} className={cn("flex flex-col gap-6 sm:gap-8", i > 0 && "border-t border-line pt-6")}>
          <p className="text-h6">{group.title}</p>
          <dl className="grid grid-cols-2 gap-6 sm:gap-x-12 sm:gap-y-8">
            {group.specs.map((s) => (
              <div key={s.label}>
                <dt className="text-sm text-ink/60">{s.label}</dt>
                <dd className="mt-1 font-medium">
                  {s.value}
                  {s.note && <sup>{s.note}</sup>}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      ))}
    </div>
  );
}
