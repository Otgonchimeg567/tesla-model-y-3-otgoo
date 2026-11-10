import Image from "next/image";
import { Actions } from "@/components/ui/Button";
import type { Action, Img } from "@/data/types";

/** Full-width closing photo with the model name and buttons. */
export default function EndCta({ name, image, otherModel }: { name: string; image: Img; otherModel: Action }) {
  return (
    <section className="relative flex min-h-[560px] flex-col items-center gap-6 overflow-hidden px-page py-24 text-center text-white lg:min-h-[720px]">
      <Image src={image.src} alt={image.alt} fill sizes="100vw" className="object-cover" />
      <div aria-hidden className="absolute inset-0 bg-linear-to-b from-black/50 to-transparent to-45%" />
      <h2 className="relative text-h1">{name}</h2>
      <Actions
        className="relative justify-center"
        items={[{ label: "Өөрийнхөөрөө тохируул", href: "#" }, { ...otherModel, variant: "light" }]}
      />
    </section>
  );
}
