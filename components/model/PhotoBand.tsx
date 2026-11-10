import Image from "next/image";
import type { Img } from "@/data/types";

/** Wide rounded photo with a title and text in the bottom-left corner. */
export default function PhotoBand({ image, title, text }: { image: Img; title: string; text: string }) {
  return (
    <div className="relative flex min-h-[480px] items-end overflow-hidden rounded-card p-6 text-white sm:p-8 lg:min-h-[640px] lg:p-12">
      <Image src={image.src} alt={image.alt} fill sizes="(max-width: 1280px) 100vw, 1280px" className="object-cover" />
      <div aria-hidden className="absolute inset-0 bg-linear-to-t from-black/65 to-transparent to-55%" />
      <div className="relative flex max-w-[640px] flex-col gap-4">
        <h2 className="text-h2">{title}</h2>
        <p className="text-md">{text}</p>
      </div>
    </div>
  );
}
