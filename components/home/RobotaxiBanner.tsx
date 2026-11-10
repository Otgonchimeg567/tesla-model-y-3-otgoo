import Image from "next/image";
import Section from "@/components/ui/Section";

/** Dark card with an autoplaying background video. */
export default function RobotaxiBanner() {
  return (
    <Section>
      <div className="relative flex h-[420px] items-end overflow-hidden rounded-card bg-black p-6 text-white sm:h-[480px] sm:p-8 lg:h-[640px] lg:p-12">
        <video
          src="/assets/tesla/robotaxi-section-desktop-tablet.mp4"
          poster="/assets/tesla/robotaxi-poster-desktop.jpg"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div aria-hidden className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent to-60%" />
        <div className="relative flex flex-col gap-6">
          <Image src="/assets/tesla/logo-robotaxi.png" alt="Robotaxi" width={1316} height={444} className="h-auto w-40 sm:w-60" />
          <div>
            <p className="font-roboto text-[56px] leading-[1.3] font-bold sm:text-[80px]">3,112,541</p>
            <p className="text-h6">Жолоочгүй туулсан миль</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
