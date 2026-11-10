import Link from "next/link";
import { footerLinks, legalLinks } from "@/data/nav";
import { Container } from "@/components/ui/Section";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-surface px-page py-20">
      <Container className="flex flex-col items-center gap-20">
        <div className="flex w-full max-w-[480px] flex-col items-center gap-8">
          <Logo />
          <nav className="flex flex-wrap justify-center gap-8 text-sm font-semibold">
            {footerLinks.map((l) => (
              <Link key={l.label} href={l.href}>
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex w-full flex-col gap-8">
          <hr className="border-line" />
          <div className="flex flex-col-reverse items-center gap-6 text-center text-sm sm:flex-row sm:justify-between sm:text-left">
            <p>© 2025 Tesla. Бүх эрх хуулиар хамгаалагдсан.</p>
            <div className="flex flex-wrap justify-center gap-6">
              {legalLinks.map((l) => (
                <Link key={l.label} href={l.href} className="underline">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
