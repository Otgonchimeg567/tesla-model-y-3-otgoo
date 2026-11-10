import Image from "next/image";
import type { InfoCardData } from "@/data/types";

/** White card with an optional photo on top, a title and a short text. */
export default function InfoCard({ image, title, text }: InfoCardData) {
  return (
    <article className="flex flex-col overflow-hidden rounded-card bg-card">
      {image && (
        <div className="relative aspect-[1600/1160]">
          <Image src={image.src} alt={image.alt} fill sizes="(max-width: 1024px) 100vw, 400px" className="object-cover" />
        </div>
      )}
      <div className="flex flex-col gap-3 p-8">
        <h3 className="text-h6">{title}</h3>
        <p>{text}</p>
      </div>
    </article>
  );
}
