import type { Metadata } from "next";
import ModelPage from "@/components/model/ModelPage";
import { modely } from "@/data/modely";

export const metadata: Metadata = {
  title: "Model Y – Дунд оврын цахилгаан SUV | Tesla",
  description: "Model Y: 7 хүртэл суудалтай, том ачааны багтаамжтай, хол явдаг цахилгаан SUV.",
};

export default function ModelYPage() {
  return <ModelPage data={modely} />;
}
