import Image from "next/image";
import type { Img } from "@/data/types";

/** Tall photo card with a label, used in the "Танилц" slider. */
export default function FeatureCard({ image, label }: { image: Img; label: string }) {
  return (
    <article className="relative flex aspect-[860/1000] w-[75vw] items-end overflow-hidden rounded-card p-6 text-white sm:w-[360px]">
      <Image src={image.src} alt={image.alt} fill sizes="(max-width: 640px) 75vw, 360px" className="object-cover" />
      <div aria-hidden className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent to-45%" />
      <p className="relative text-h6">{label}</p>
    </article>
  );
}
