import type { GallerySlideProps } from "@/components/cards/GallerySlide";
import type { Img } from "./types";

const order = (href: string) => [
  { label: "Захиалах", href, variant: "primary" as const },
  { label: "Дэлгэрэнгүй", href, variant: "light" as const },
];

// Vehicle cards now come from the Supabase `vehicles` table — see lib/vehicles.ts.

export const promos: { title: string; text: string; image: Img }[] = [
  {
    title: "Одоогийн урамшуулал",
    text: "Хугацаатай урамшууллын саналуудтай танилцаарай.",
    image: { src: "/assets/offers.png", alt: "Урамшуулал" },
  },
  {
    title: "2026 оны хувьцаа эзэмшигчдийн хурал",
    text: "Ирээдүй таны гарт. Таны санал яагаад чухал вэ?",
    image: { src: "/assets/shareholder.png", alt: "Хувьцаа эзэмшигчдийн хурал" },
  },
];

export const energy: GallerySlideProps[] = [
  {
    image: { src: "/assets/tesla/energy-01-solar-panels-desktop.jpg", alt: "Дээвэр дээрх нарны хавтан" },
    title: "Нарны хавтан",
    text: "Гэрээ эрчим хүчээр хангаж, төлбөрөө бууруул",
    actions: order("#"),
  },
  {
    image: { src: "/assets/tesla/energy-02-powerwall-tablet.png", alt: "Powerwall" },
    title: "Powerwall",
    text: "Цахилгаан тасарсан ч гэрэл асаалттай",
    actions: order("#"),
  },
  {
    image: { src: "/assets/tesla/energy-03-megapack-desktop.jpg", alt: "Megapack" },
    title: "Megapack",
    text: "Их хэмжээний эрчим хүчинд зориулсан аварга батарей",
    actions: [{ label: "Дэлгэрэнгүй", href: "#", variant: "light" }],
  },
];
