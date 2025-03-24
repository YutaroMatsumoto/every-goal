<script lang="ts">
	import { i18n } from "$lib/i18n";
	import { ParaglideJS } from "@inlang/paraglide-sveltekit";
  import Layout from "$lib/components/ui/_layout/Layout.svelte";
	import '../app.css';
  import { onMount } from "svelte";
  import { invalidate } from "$app/navigation";
  import DateSelector from "$lib/components/ui/_form/DateSelector.svelte";
	
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
	  <DateSelector />
		{@render children()}
	</Layout>
</ParaglideJS>

