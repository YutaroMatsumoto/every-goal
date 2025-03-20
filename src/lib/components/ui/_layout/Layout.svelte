<script lang="ts">
  import type { Session } from "@supabase/supabase-js";
  import type { Snippet } from "svelte";
	import Header from '$lib/components/ui/_layout/Header.svelte';
  import { setSession } from "$lib/globalState/session.svelte";
  import { setSupabase, type Supabase } from '$lib/globalState/supabase.svelte';
  
	const { session, supabase, children } : { session: Session | null; supabase: Supabase; children: Snippet; } = $props()
  $effect(() => {
		console.log("Layout.svelte",{session})
		setSession(session)
		setSupabase(supabase)
	})
</script>

<div>
  <Header {session} />
  
  <main>
    {@render children()}
  </main>

  <footer></footer>
</div>

