import Image from "next/image";
import Section from "@/components/ui/Section";
import Tabs from "@/components/ui/Tabs";
import type { Img, SpecSheet } from "@/data/types";
import Footnotes from "./Footnotes";
import SpecTable from "./SpecTable";

type Props = { specsImage: Img; sheets: SpecSheet[]; footnotes: string[] };

/** "Техник үзүүлэлт": dimension drawing plus a spec table, one tab per trim. */
export default function SpecsSection({ specsImage, sheets, footnotes }: Props) {
  return (
    <Section id="specs">
      <Tabs
        title="Техник үзүүлэлт"
        className="gap-20"
        tabs={sheets.map((sheet) => ({
          id: sheet.id,
          label: sheet.tab,
          content: (
            <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
              <Image src={specsImage.src} alt={specsImage.alt} width={1827} height={668} className="h-auto w-full" />
              <SpecTable groups={sheet.groups} />
            </div>
          ),
        }))}
        footer={<Footnotes notes={footnotes} />}
      />
    </Section>
  );
}
