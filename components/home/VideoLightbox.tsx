"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { cn } from "@/lib/cn";

/** Video with a dark overlay and a play button. Click the video to pause it again. */
export default function VideoLightbox({ src, poster }: { src: string; poster: string }) {
  const video = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  return (
    <div className="absolute inset-0 overflow-hidden rounded-card">
      <video
        ref={video}
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        preload="metadata"
        onClick={() => video.current?.pause()}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        className="absolute inset-0 h-full w-full cursor-pointer object-cover"
      />
      <div
        aria-hidden
        className={cn("pointer-events-none absolute inset-0 bg-black/40 transition-opacity duration-300", playing && "opacity-0")}
      />
      <button
        type="button"
        aria-label="Бичлэг тоглуулах"
        onClick={() => video.current?.play()}
        className={cn(
          "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-opacity duration-300",
          playing && "pointer-events-none opacity-0",
        )}
      >
        <Image src="/assets/play-button.svg" alt="" width={64} height={64} />
      </button>
    </div>
  );
}
