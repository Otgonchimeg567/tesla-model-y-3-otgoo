"use client";

import Image from "next/image";
import { useRef } from "react";
import { cn } from "@/lib/cn";

const dots = {
  3: { src: "/assets/slider-dots-3.svg", width: 40 },
  6: { src: "/assets/slider-dots-6.svg", width: 88 },
};

type Props = {
  children: React.ReactNode;
  /** Which dots image to show under the track */
  dotCount: 3 | 6;
  /** 48px instead of 32px between the track and the arrows */
  spacious?: boolean;
};

/** Horizontal track that the arrow buttons scroll by one item. */
export default function Slider({ children, dotCount, spacious }: Props) {
  const track = useRef<HTMLDivElement>(null);

  function scroll(direction: 1 | -1) {
    const el = track.current;
    if (!el) return;
    const item = el.firstElementChild;
    const step = item ? item.getBoundingClientRect().width + 32 : el.clientWidth;
    el.scrollBy({ left: direction * step, behavior: "smooth" });
  }

  const dot = dots[dotCount];

  return (
    <div className={cn("flex flex-col", spacious ? "gap-12" : "gap-8")}>
      <div
        ref={track}
        className="no-scrollbar -mr-page flex snap-x snap-mandatory gap-8 overflow-x-auto [&>*]:shrink-0 [&>*]:snap-start"
      >
        {children}
      </div>
      <div className="flex items-center justify-between">
        <Image src={dot.src} alt="" width={dot.width} height={8} />
        <div className="flex gap-4">
          <ArrowButton label="Өмнөх" icon="/assets/arrow-back.svg" onClick={() => scroll(-1)} />
          <ArrowButton label="Дараах" icon="/assets/arrow-forward.svg" onClick={() => scroll(1)} />
        </div>
      </div>
    </div>
  );
}

function ArrowButton({ label, icon, onClick }: { label: string; icon: string; onClick: () => void }) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="flex cursor-pointer rounded border border-surface bg-card p-3"
    >
      <Image src={icon} alt="" width={24} height={24} />
    </button>
  );
}
