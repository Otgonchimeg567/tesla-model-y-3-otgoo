import { cacheLife, cacheTag } from "next/cache";
import type { VehicleCardProps } from "@/components/cards/VehicleCard";
import { supabase } from "@/lib/supabase";
import { toCardProps, type VehicleRow } from "@/lib/vehicle-row";

/**
 * Home page vehicle cards from the Supabase `vehicles` table.
 * Cached for about a minute; saving in /admin clears the "vehicles" tag right away.
 */
export async function getVehicles(): Promise<VehicleCardProps[]> {
  "use cache";
  cacheLife("minutes");
  cacheTag("vehicles");

  const { data, error } = await supabase
    .from("vehicles")
    .select("*")
    .eq("published", true)
    .order("sort_order")
    .overrideTypes<VehicleRow[], { merge: false }>();

  if (error) throw new Error(`Машинуудын мэдээлэл татаж чадсангүй: ${error.message}`);

  return data.map(toCardProps);
}
