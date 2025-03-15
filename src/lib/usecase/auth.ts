import type { Database } from "$lib/database";
import type { SupabaseClient } from "@supabase/supabase-js";

export const handleSignIn = async (supabase: SupabaseClient<Database>) => {
  await supabase.auth.signInWithOAuth({
    provider: "google",
    options: { queryParams: { access_type: "offline", prompt: "consent" } },
  });
};

export const handleSignOut = async (supabase: SupabaseClient<Database>) => {
  await supabase.auth.signOut();
  window.location.reload();
};
