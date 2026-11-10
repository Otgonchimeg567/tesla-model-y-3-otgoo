import { cn } from "@/lib/cn";

type Props = {
  title: string;
  description?: string;
  eyebrow?: string;
  /** Limit width to 768px, as section intros do in the design */
  narrow?: boolean;
  className?: string;
};

export default function SectionTitle({ title, description, eyebrow, narrow, className }: Props) {
  return (
    <div className={cn("flex flex-col gap-6", narrow && "max-w-[768px]", className)}>
      {eyebrow && <p className="font-semibold">{eyebrow}</p>}
      <h2 className="text-h2">{title}</h2>
      {description && <p className="text-md">{description}</p>}
    </div>
  );
}
