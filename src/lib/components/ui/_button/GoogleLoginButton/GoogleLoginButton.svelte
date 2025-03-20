<script lang="ts">
  import { getSupabase } from "$lib/globalState/supabase.svelte";
  import { handleSignIn } from "$lib/usecase/auth";
  import type { SupabaseClient } from "@supabase/supabase-js";
  import GoogleIcon from "./GoogleIcon.svelte";
  import type { Database } from "$lib/database";

	/**
	 * styleはgoogleのガイドラインに従う
	 * https://developers.google.com/identity/branding-guidelines?hl=ja
	 */

  let { supabase } : { supabase: SupabaseClient<Database> } = $props()

</script>

<button
  type="button"
  class="w-full grid grid-cols-[auto_1fr] items-center px-4 py-3 bg-white border border-gray-300 rounded-full hover:bg-gray-50 active:bg-gray-50 transition-colors" 
  onclick={() => handleSignIn(supabase)}
>
  <GoogleIcon />
  <span class="text-gray-700 text-center">Googleでログイン</span>
</button>
