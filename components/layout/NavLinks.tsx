"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/data/nav";
import { cn } from "@/lib/cn";

/** Top menu links; the current page's link is bold. */
export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {navLinks.map((link) => {
        const current = link.href === pathname;
        return (
          <Link
            key={link.label}
            href={link.href}
            aria-current={current ? "page" : undefined}
            className={cn(current && "font-semibold")}
          >
            {link.label}
          </Link>
        );
      })}
    </>
  );
}
