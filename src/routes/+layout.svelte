<script lang="ts">
	import { i18n } from "$lib/i18n";
	import { ParaglideJS } from "@inlang/paraglide-sveltekit";
  import Layout from "$lib/components/ui/_layout/Layout.svelte";
	import '../app.css';
  import { onMount } from "svelte";
  import { invalidate } from "$app/navigation";
	
	let { data, children } = $props()
  let { session, supabase } = $derived(data)

	onMount(() => {
    const { data } = supabase.auth.onAuthStateChange((_, newSession) => {
      if (newSession?.expires_at !== session?.expires_at) {
        invalidate('supabase:auth')
      }
    })

    return () => data.subscription.unsubscribe()
  })
</script>

<ParaglideJS {i18n}>
	<Layout {session} {supabase}>
		{@render children()}
	</Layout>
</ParaglideJS>

