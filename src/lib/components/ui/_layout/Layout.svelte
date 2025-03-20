<script lang="ts">
	import Header from '$lib/components/ui/_layout/Header.svelte';
  import type { Session } from "@supabase/supabase-js";
  import type { Snippet } from "svelte";
  
	const { session, children } : { session: Session | null; children: Snippet; } = $props()
</script>

<div>
  <Header {session} />
  
  <main>
    {@render children()}
  </main>

  <footer></footer>
</div>

