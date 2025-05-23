/**
 * なくせる方法があればなくす。
 * もしかしたら、event.locals.supabaseを使えば必要なくなるかも
 * もしくは、ログイン/ログアウト機能で使うことのみを許容する。
 */
import { getContext, setContext } from "svelte";
import { readable, type Readable } from "svelte/store";
import type { SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "$lib/database";

export type Supabase = SupabaseClient<Database>;
type ContextSupabase = Readable<Supabase>;

export function setSupabase(supabaseData: Supabase) {
  if (!supabaseData) return;
  const supabase = readable<Supabase>(supabaseData);
  setContext("supabase", supabase);
}

export function getSupabase() {
  return getContext<ContextSupabase>("supabase");
}
