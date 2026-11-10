import { getImageProps } from "next/image";
import { Actions } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import type { Action, Stat } from "@/data/types";

type HeroImage = { src: string; width: number; height: number };

type Props = {
  title: string;
  subtitle: string;
  actions: Action[];
  alt: string;
  desktop: HeroImage;
  /** Different crop for phones (art direction) */
  mobile?: HeroImage;
  /** Key numbers at the bottom (model pages) */
  stats?: Stat[];
};

/** Full-width photo with the title near the top. Optional stats along the bottom. */
export default function Hero({ title, subtitle, actions, alt, desktop, mobile, stats }: Props) {
  const common = { alt, sizes: "100vw", fetchPriority: "high" as const };
  const { props: desktopProps } = getImageProps({ ...common, ...desktop });
  const mobileSrcSet = mobile ? getImageProps({ ...common, ...mobile }).props.srcSet : undefined;
  const { srcSet: desktopSrcSet, ...imgProps } = desktopProps;

  return (
    <section
      className={cn(
        "relative flex flex-col items-center overflow-hidden px-page text-center text-white",
        stats
          ? "h-[max(640px,calc(100vh-72px))] max-h-[960px] justify-between pt-16 pb-14 sm:pt-24"
          : "h-[640px] pt-16 sm:pt-20 lg:h-[900px] lg:pt-[120px]",
      )}
    >
      <picture>
        {mobileSrcSet && <source media="(max-width: 600px)" srcSet={mobileSrcSet} />}
        <source srcSet={desktopSrcSet} />
        {/* Plain <img> is needed inside <picture> for art direction (see next/image getImageProps docs) */}
        <img {...imgProps} alt={alt} className="absolute inset-0 h-full w-full object-cover" />
      </picture>
      {/* Darken the sky behind the title, and the road behind the stats */}
      <div aria-hidden className="absolute inset-0 bg-linear-to-b from-black/45 to-transparent to-50%" />
      {stats && <div aria-hidden className="absolute inset-0 bg-linear-to-t from-black/55 to-transparent to-35%" />}

      <div className="relative flex w-full max-w-[768px] flex-col items-center gap-4">
        <h1 className="text-h1">{title}</h1>
        <p className="text-md">{subtitle}</p>
        <Actions items={actions} className="mt-4 justify-center" />
      </div>

      {stats && (
        <div className="relative flex flex-wrap justify-center gap-8 lg:gap-16">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-[28px] font-medium leading-tight sm:text-[40px]">
                {s.value}
                {s.unit && <small className="ml-1 text-xl">{s.unit}</small>}
              </p>
              <p>{s.label}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
