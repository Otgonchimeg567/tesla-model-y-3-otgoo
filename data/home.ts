import type { GallerySlideProps } from "@/components/cards/GallerySlide";
import type { VehicleCardProps } from "@/components/cards/VehicleCard";
import type { Img } from "./types";

const order = (href: string) => [
  { label: "Захиалах", href, variant: "primary" as const },
  { label: "Дэлгэрэнгүй", href, variant: "light" as const },
];

export const vehicles: VehicleCardProps[] = [
  {
    image: { src: "/assets/tesla/vehicle-01-model-y-l-desktop.jpg", alt: "Model Y L" },
    title: "Model Y L",
    description: "Урт тэнхлэгтэй дунд оврын SUV",
    name: "Model Y L Premium",
    price: "$61,990-аас эхэлнэ",
    actions: order("/modely"),
  },
  {
    image: { src: "/assets/tesla/vehicle-02-model-3-desktop.jpg", alt: "Улаан Model 3" },
    title: "Model 3",
    description: "Спорт седан",
    name: "Model 3",
    price: "Түрээс: сарын $439-өөс",
    actions: order("/model3"),
  },
  {
    image: { src: "/assets/tesla/vehicle-03-model-y-desktop.jpg", alt: "Цасан дунд Model Y" },
    title: "Model Y",
    description: "Дунд оврын SUV",
    name: "Model Y",
    price: "Түрээс: сарын $499-өөс",
    actions: order("/modely"),
  },
  {
    image: { src: "/assets/tesla/vehicle-04-cybertruck-desktop.jpg", alt: "Цөлөөр явж буй Cybertruck" },
    logo: { src: "/assets/tesla/icon-logo-cybertruck.svg", alt: "Cybertruck", width: 114, height: 32, invert: true },
    description: "Ажлын пикап",
    name: "Cybertruck",
    price: "Түрээсийн үнэ удахгүй",
    actions: order("#"),
  },
  {
    image: { src: "/assets/tesla/vehicle-05-roadster-desktop.jpg", alt: "Roadster" },
    logo: { src: "/assets/tesla/logo-roadster-wordmark-white.png", alt: "Roadster", width: 407, height: 32 },
    description: "Спорт машин",
    actions: [
      { label: "Урьдчилан захиалах", href: "#" },
      { label: "Дэлгэрэнгүй", href: "#", variant: "light" },
    ],
  },
  {
    image: { src: "/assets/tesla/vehicle-06-certified-pre-owned-desktop.jpg", alt: "Баталгаат хэрэглэсэн машинууд" },
    title: "Баталгаат хэрэглэсэн",
    description: "Бүрэн шалгаж засварласан, 1 жилийн нэмэлт баталгаатай.",
    actions: [
      { label: "Бэлэн машин үзэх", href: "#" },
      { label: "Дэлгэрэнгүй", href: "#", variant: "light" },
    ],
  },
];

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
