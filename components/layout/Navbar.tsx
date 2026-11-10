import Image from "next/image";
import Button from "@/components/ui/Button";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

export default function Navbar() {
  return (
    <header className="flex h-[72px] items-center bg-surface px-page">
      <div className="flex w-full items-center gap-8">
        <div className="flex flex-1">
          <Logo />
        </div>
        <nav className="hidden items-center gap-8 lg:flex">
          <NavLinks />
          <button type="button" className="inline-flex cursor-pointer items-center gap-1">
            Дэлгүүр <Image src="/assets/chevron-down.svg" alt="" width={24} height={24} />
          </button>
        </nav>
        <div className="flex flex-1 justify-end">
          <Button href="#" size="sm">
            Туршиж жолоодох
          </Button>
        </div>
      </div>
    </header>
  );
}
