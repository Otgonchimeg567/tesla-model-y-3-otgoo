import { cn } from "@/lib/cn";

/** Page section with the standard side and vertical padding, plus a centered 1280px container. */
export default function Section({
  children,
  id,
  className,
}: {
  children: React.ReactNode;
  id?: string;
  className?: string;
}) {
  return (
    <section id={id} className="overflow-hidden px-page py-section">
      <Container className={className}>{children}</Container>
    </section>
  );
}

export function Container({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("mx-auto w-full max-w-site", className)}>{children}</div>;
}
