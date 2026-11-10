import Image from "next/image";
import { Actions } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import type { Action, Img } from "@/data/types";

export type VehicleCardProps = {
  image: Img;
  /** Text title, or a logo image when the model has one */
  title?: string;
  logo?: Img & { width: number; height: number; invert?: boolean };
  description: string;
  name?: string;
  price?: string;
  actions: Action[];
};

/** Wide photo card in the "Машинууд" slider. */
export default function VehicleCard({ image, title, logo, description, name, price, actions }: VehicleCardProps) {
  return (
    <article className="relative flex h-[480px] w-[85vw] flex-col justify-end overflow-hidden rounded-card p-6 text-white sm:aspect-[1536/870] sm:h-auto sm:w-[min(820px,80vw)] sm:p-8">
      <Image src={image.src} alt={image.alt} fill sizes="(max-width: 640px) 85vw, 820px" className="object-cover" />
      <div aria-hidden className="absolute inset-0 bg-linear-to-t from-black/65 to-transparent to-60%" />
      <div className="relative flex max-w-[480px] flex-col gap-4">
        {logo && (
          <Image
            src={logo.src}
            alt={logo.alt}
            width={logo.width}
            height={logo.height}
            className={cn("h-8 w-auto self-start", logo.invert && "brightness-0 invert")}
          />
        )}
        {title && <h3 className="text-[28px] font-medium leading-tight tracking-[-0.01em] sm:text-[40px]">{title}</h3>}
        <p className="font-roboto text-lg">{description}</p>
        {name && (
          <div>
            <p className="font-semibold">{name}</p>
            <p>{price}</p>
          </div>
        )}
        <Actions items={actions} />
      </div>
    </article>
  );
}
