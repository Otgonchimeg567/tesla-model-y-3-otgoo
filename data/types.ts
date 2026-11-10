export type ButtonVariant = "primary" | "secondary" | "light" | "link";

export type Action = {
  label: string;
  href: string;
  variant?: ButtonVariant;
};

export type Img = {
  src: string;
  alt: string;
};

/** A number with an optional unit, e.g. 321 + "миль" */
export type Stat = {
  value: string;
  unit?: string;
  label: string;
  /** Footnote number shown after the label */
  note?: number;
};

export type Feature = {
  title: string;
  text: string;
  note?: number;
};

export type InfoCardData = Feature & { image?: Img };

export type SplitRowData = {
  image: Img;
  title: string;
  lead: string;
  text?: string;
  note?: number;
};

export type Trim = {
  id: string;
  tab: string;
  name: string;
  price: string;
  priceNote?: number;
  image: Img;
  stats: Stat[];
};

export type Spec = { label: string; value: string; note?: number };

export type SpecSheet = {
  id: string;
  tab: string;
  groups: { title: string; specs: Spec[] }[];
};

/** Sections between "Choose your trim" and "Specs" on a model page */
export type ModelBlock =
  | {
      type: "photoBand";
      image: Img;
      title: string;
      text: string;
      cards?: InfoCardData[];
      features?: Feature[];
      stats?: Stat[];
    }
  | { type: "splitRows"; title?: string; description?: string; rows: SplitRowData[] }
  | { type: "cardGrid"; title: string; description: string; cards: Feature[] }
  | { type: "safety"; title: string; lead: string; text: string; image: Img }
  | { type: "features"; title: string; description: string; items: Feature[] };

export type ModelData = {
  slug: "model3" | "modely";
  name: string;
  hero: { image: Img; subtitle: string; stats: Stat[] };
  meet: { eyebrow: string; title: string; description: string; cards: { image: Img; label: string }[] };
  trims: Trim[];
  blocks: ModelBlock[];
  specs: { specsImage: Img; sheets: SpecSheet[] };
  footnotes: string[];
  end: { image: Img; otherModel: Action };
};
