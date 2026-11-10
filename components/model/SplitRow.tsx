import Image from "next/image";
import { cn } from "@/lib/cn";
import type { SplitRowData } from "@/data/types";

/** Photo and text side by side; every second row is mirrored. Stacks on tablet and phone. */
export default function SplitRow({ image, title, lead, text, note, reverse }: SplitRowData & { reverse?: boolean }) {
  return (
    <div className={cn("flex flex-col gap-8 lg:items-center lg:gap-20", reverse ? "lg:flex-row-reverse" : "lg:flex-row")}>
      <div className="relative aspect-[2/1] min-w-0 overflow-hidden rounded-card lg:flex-[1.3]">
        <Image src={image.src} alt={image.alt} fill sizes="(max-width: 1024px) 100vw, 700px" className="object-cover" />
      </div>
      <div className="flex min-w-0 flex-col gap-6 lg:flex-1">
        <h3 className="text-h2">{title}</h3>
        <p className="text-md">
          {lead}
          {note && <sup>{note}</sup>}
        </p>
        {text && <p>{text}</p>}
      </div>
    </div>
  );
}
