import Image from "next/image";
import { Actions } from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import StatItem from "@/components/ui/StatItem";
import Tabs from "@/components/ui/Tabs";
import type { Trim } from "@/data/types";

/** "Загвараа сонго": one card per trim with a photo, price and three stats. */
export default function TrimSwitcher({ trims }: { trims: Trim[] }) {
  return (
    <Section id="explore">
      <Tabs
        title="Загвараа сонго"
        className="gap-8"
        tabs={trims.map((t) => ({ id: t.id, label: t.tab, content: <TrimCard trim={t} /> }))}
        footer={
          <Actions
            items={[
              { label: "Захиалах", href: "#" },
              { label: "Үзүүлэлт харах", href: "#specs", variant: "secondary" },
            ]}
          />
        }
      />
    </Section>
  );
}

function TrimCard({ trim }: { trim: Trim }) {
  return (
    <div className="flex flex-col gap-8 overflow-hidden rounded-card bg-card">
      <div className="relative h-[200px] sm:h-[340px]">
        <Image src={trim.image.src} alt={trim.image.alt} fill sizes="(max-width: 1280px) 100vw, 1280px" className="object-cover" />
      </div>
      <div className="flex flex-col gap-8 px-6 pb-6 sm:px-8 sm:pb-8 lg:px-12 lg:pb-12">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <p className="text-[32px] font-medium leading-tight">{trim.name}</p>
          <p className="text-md">
            {trim.price}
            {trim.priceNote && <sup>{trim.priceNote}</sup>}
          </p>
        </div>
        <StatRow stats={trim.stats} />
      </div>
    </div>
  );
}

export function StatRow({ stats }: { stats: Trim["stats"] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-3 sm:gap-6">
      {stats.map((s) => (
        <StatItem key={s.label} {...s} size="medium" />
      ))}
    </div>
  );
}
