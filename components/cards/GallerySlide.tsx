import Image from "next/image";
import { Actions } from "@/components/ui/Button";
import type { Action, Img } from "@/data/types";

export type GallerySlideProps = { image: Img; title: string; text: string; actions: Action[] };

/** Large photo slide with title and buttons, used for energy products. */
export default function GallerySlide({ image, title, text, actions }: GallerySlideProps) {
  return (
    <article className="relative flex aspect-[3/4] w-[85vw] items-end overflow-hidden rounded-card p-6 text-white sm:aspect-video sm:p-8 lg:aspect-auto lg:h-[720px] lg:w-[1280px] lg:p-12">
      <Image src={image.src} alt={image.alt} fill sizes="(max-width: 1024px) 85vw, 1280px" className="object-cover" />
      <div aria-hidden className="absolute inset-0 bg-linear-to-t from-black/65 to-transparent to-60%" />
      <div className="relative flex flex-col gap-3">
        <h3 className="text-[28px] font-medium leading-tight sm:text-[40px]">{title}</h3>
        <p>{text}</p>
        <Actions items={actions} />
      </div>
    </article>
  );
}
