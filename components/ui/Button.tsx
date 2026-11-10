import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";
import type { Action, ButtonVariant } from "@/data/types";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-primary border-primary text-white px-3 py-1.5",
  secondary: "bg-ink-5 text-ink px-3 py-1.5",
  light: "bg-white/90 text-ink px-3 py-1.5",
  link: "border-0 p-0 text-ink",
};

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: "md" | "sm";
};

export default function Button({ href, children, variant = "primary", size = "md" }: Props) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md border border-transparent font-medium transition-opacity hover:opacity-85",
        variants[variant],
        size === "sm" && variant !== "link" && "px-2.5 py-1",
      )}
    >
      {children}
      {variant === "link" && <Image src="/assets/chevron-right.svg" alt="" width={24} height={24} />}
    </Link>
  );
}

/** A row of buttons built from data. */
export function Actions({ items, className }: { items: Action[]; className?: string }) {
  return (
    <div className={cn("flex flex-wrap items-center gap-4", className)}>
      {items.map((a) => (
        <Button key={a.label} href={a.href} variant={a.variant}>
          {a.label}
        </Button>
      ))}
    </div>
  );
}
