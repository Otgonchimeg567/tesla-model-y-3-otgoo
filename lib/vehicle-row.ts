import type { VehicleCardProps } from "@/components/cards/VehicleCard";
import type { Action } from "@/data/types";

/** One row of the Supabase `vehicles` table. */
export type VehicleRow = {
  id: number;
  sort_order: number;
  published: boolean;
  image_src: string;
  image_alt: string;
  title: string | null;
  logo: VehicleCardProps["logo"] | null;
  description: string;
  name: string | null;
  price: string | null;
  actions: Action[];
};

/** Turns a table row into the props VehicleCard expects. Empty text counts as "not set". */
export function toCardProps(row: VehicleRow): VehicleCardProps {
  return {
    image: { src: row.image_src, alt: row.image_alt },
    title: row.title || undefined,
    logo: row.logo ?? undefined,
    description: row.description,
    name: row.name || undefined,
    price: row.price || undefined,
    actions: row.actions,
  };
}
