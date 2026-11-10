import type { Metadata } from "next";
import ModelPage from "@/components/model/ModelPage";
import { model3 } from "@/data/model3";

export const metadata: Metadata = {
  title: "Model 3 – Спорт цахилгаан седан | Tesla",
  description: "Model 3: хурдан, хол явдаг, зардал багатай дунд оврын цахилгаан седан.",
};

export default function Model3Page() {
  return <ModelPage data={model3} />;
}
