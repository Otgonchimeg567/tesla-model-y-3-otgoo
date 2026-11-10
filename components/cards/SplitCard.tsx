import Image from "next/image";
import { cn } from "@/lib/cn";
import type { Img } from "@/data/types";

type Props = {
  children: React.ReactNode;
  /** A photo, or any element such as a video */
  media: Img | React.ReactNode;
  /** Fixed 640px height on desktop (used by the FSD card) */
  tall?: boolean;
};

function isImg(media: Props["media"]): media is Img {
  return typeof media === "object" && media !== null && "src" in media && "alt" in media;
}

/** White card: text on the left, media on the right. Stacks on tablet and phone. */
export default function SplitCard({ children, media, tall }: Props) {
  return (
    <div
      className={cn(
        "flex flex-col overflow-hidden rounded-card bg-card lg:flex-row lg:items-center",
        tall && "lg:h-[640px] lg:items-stretch",
      )}
    >
      <div className="flex min-w-0 flex-1 flex-col justify-center gap-8 p-6 sm:p-12">{children}</div>
      <div className="relative aspect-[16/10] min-w-0 lg:aspect-auto lg:flex-1 lg:self-stretch">
        {isImg(media) ? (
          <Image src={media.src} alt={media.alt} fill sizes="(max-width: 1024px) 100vw, 640px" className="object-cover" />
        ) : (
          media
        )}
      </div>
    </div>
  );
}
