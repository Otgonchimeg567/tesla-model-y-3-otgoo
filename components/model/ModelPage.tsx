import FeatureCard from "@/components/cards/FeatureCard";
import InfoCard from "@/components/cards/InfoCard";
import SplitCard from "@/components/cards/SplitCard";
import Hero from "@/components/home/Hero";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import Slider from "@/components/ui/Slider";
import type { ModelBlock, ModelData } from "@/data/types";
import EndCta from "./EndCta";
import FeatureList from "./FeatureList";
import PhotoBand from "./PhotoBand";
import SpecsSection from "./SpecsSection";
import SplitRow from "./SplitRow";
import TrimSwitcher, { StatRow } from "./TrimSwitcher";

/** Shared layout for /model3 and /modely. All content comes from data/model3.ts or data/modely.ts. */
export default function ModelPage({ data }: { data: ModelData }) {
  return (
    <>
      <Hero
        title={data.name}
        subtitle={data.hero.subtitle}
        alt={data.hero.image.alt}
        desktop={{ src: data.hero.image.src, width: 2000, height: 849 }}
        stats={data.hero.stats}
        actions={[
          { label: "Захиалах", href: "#" },
          { label: "Загвар харьцуулах", href: "#explore", variant: "light" },
        ]}
      />

      <Section className="flex flex-col gap-20">
        <SectionTitle narrow eyebrow={data.meet.eyebrow} title={data.meet.title} description={data.meet.description} />
        <Slider dotCount={6}>
          {data.meet.cards.map((c) => (
            <FeatureCard key={c.label} {...c} />
          ))}
        </Slider>
      </Section>

      <TrimSwitcher trims={data.trims} />

      {data.blocks.map((block, i) => (
        <Block key={i} block={block} />
      ))}

      <SpecsSection specsImage={data.specs.specsImage} sheets={data.specs.sheets} footnotes={data.footnotes} />

      <EndCta name={data.name} image={data.end.image} otherModel={data.end.otherModel} />
    </>
  );
}

function Block({ block }: { block: ModelBlock }) {
  switch (block.type) {
    case "photoBand":
      return (
        <Section className={block.features ? "flex flex-col gap-20" : "flex flex-col gap-8"}>
          <PhotoBand image={block.image} title={block.title} text={block.text} />
          {block.cards && (
            <div className="grid gap-8 lg:grid-cols-3">
              {block.cards.map((c) => (
                <InfoCard key={c.title} {...c} />
              ))}
            </div>
          )}
          {block.features && <FeatureList items={block.features} />}
          {block.stats && (
            <div className="rounded-card bg-card p-6 sm:p-8 lg:p-12">
              <StatRow stats={block.stats} />
            </div>
          )}
        </Section>
      );

    case "splitRows":
      return (
        <Section className="flex flex-col gap-20">
          {block.title && <SectionTitle narrow title={block.title} description={block.description} />}
          <div className="flex flex-col gap-20">
            {block.rows.map((row, i) => (
              <SplitRow key={row.title} {...row} reverse={i % 2 === 1} />
            ))}
          </div>
        </Section>
      );

    case "cardGrid":
      return (
        <Section className="flex flex-col gap-20">
          <SectionTitle narrow title={block.title} description={block.description} />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {block.cards.map((c) => (
              <InfoCard key={c.title} {...c} />
            ))}
          </div>
        </Section>
      );

    case "safety":
      return (
        <Section>
          <SplitCard media={block.image}>
            <div className="flex flex-col gap-6">
              <h2 className="text-h2">{block.title}</h2>
              <p className="text-md">{block.lead}</p>
              <p>{block.text}</p>
            </div>
            <div>
              <Button href="#">Дэлгэрэнгүй</Button>
            </div>
          </SplitCard>
        </Section>
      );

    case "features":
      return (
        <Section className="flex flex-col gap-20">
          <SectionTitle narrow title={block.title} description={block.description} />
          <FeatureList items={block.items} />
        </Section>
      );
  }
}
