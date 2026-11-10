import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" aria-label="Нүүр хуудас" className="flex h-9 items-center">
      <Image src="/assets/tesla/logo-tesla-wordmark-black.png" alt="Tesla" width={137} height={14} className="h-3.5 w-auto" />
    </Link>
  );
}
