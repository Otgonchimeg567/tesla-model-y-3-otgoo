"use server";

import { createClient } from "@supabase/supabase-js";
import { updateTag } from "next/cache";

/**
 * Clears the cached vehicle list so the home page shows edits immediately.
 * Only runs for a signed-in admin: the access token is checked with Supabase first.
 */
export async function refreshVehicles(accessToken: string) {
  const asUser = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
    { global: { headers: { Authorization: `Bearer ${accessToken}` } }, auth: { persistSession: false } },
  );

  const { data: isAdmin, error } = await asUser.rpc("is_admin");
  if (error || !isAdmin) return { ok: false };

  updateTag("vehicles");
  return { ok: true };
}
