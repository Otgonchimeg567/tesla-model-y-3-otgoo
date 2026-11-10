import { cn } from "@/lib/cn";

/** Numbered styleguide section: "03 Өнгө" with a rule under the heading. */
export default function SgSection({
  id,
  number,
  title,
  children,
}: {
  id: string;
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-8 pt-20 first:pt-0">
      <h2 className="flex items-baseline gap-3 border-b border-line pb-6 text-[32px] font-medium leading-tight tracking-[-0.01em]">
        <span className="text-xs font-normal text-ink/50">{number}</span>
        {title}
      </h2>
      <div className="flex flex-col gap-12 pt-8">{children}</div>
    </section>
  );
}

/** Sub-heading inside a section, e.g. "Үндсэн токен · globals.css" */
export function SgHeading({ children }: { children: React.ReactNode }) {
  return <h3 className="mb-4 text-h6">{children}</h3>;
}

/** White rounded panel that holds swatches, specimens or demos. */
export function SgPanel({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("rounded-card border border-line bg-card p-6", className)}>{children}</div>;
}

/** Small monospace label, e.g. a class name */
export function Code({ children }: { children: React.ReactNode }) {
  return <code className="rounded bg-ink-5 px-1.5 py-0.5 font-mono text-[0.85em]">{children}</code>;
}
