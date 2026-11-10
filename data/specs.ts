import type { SpecSheet } from "./types";

type Row = [label: string, value: string, note?: number];

/** Build a spec sheet from [label, value, footnote?] rows. */
export function specSheet(
  id: string,
  tab: string,
  rows: { drive: Row[]; dimensions: Row[]; charging: Row[]; warranty: Row[] },
): SpecSheet {
  const toSpecs = (r: Row[]) => r.map(([label, value, note]) => ({ label, value, note }));
  return {
    id,
    tab,
    groups: [
      { title: "Жолоодлого", specs: toSpecs(rows.drive) },
      { title: "Хэмжээ", specs: toSpecs(rows.dimensions) },
      { title: "Цэнэглэлт", specs: toSpecs(rows.charging) },
      { title: "Баталгаа", specs: toSpecs(rows.warranty) },
    ],
  };
}

/** Text shared by both model pages */
export const autonomous = {
  title: "Ирээдүй бол автомат жолоодлого",
  description:
    "Яаралтай тоормос, эгнээ хадгалах систем стандартаар. Бүрэн автомат жолоодлогыг нэмж авах боломжтой.",
};

export const safetyText = {
  title: "Аюулгүй байдал",
  lead: "Цохилт шингээх бүс, бат бөх салон, олон аюулгүйн дэр.",
  text: "Мөргөлдөөний сэрэмжлүүлэг, яаралтай тоормос, эгнээ хадгалах систем стандартаар.",
};
