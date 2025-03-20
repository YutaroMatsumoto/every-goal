<script lang="ts">
	import { i18n } from "$lib/i18n";
	import { ParaglideJS } from "@inlang/paraglide-sveltekit";
  import Layout from "$lib/components/ui/_layout/Layout.svelte";
  import { setSession } from "$lib/globalState/session.svelte";
  import { setSupabase } from "$lib/globalState/supabase.svelte";
	import '../app.css';

	
	let { data, children } = $props()
  let { session, supabase } = $derived(data)

	$effect(() => {
		console.log({session, supabase})
		setSession(session)
		setSupabase(supabase)
	})
</script>

<ParaglideJS {i18n}>
	<Layout {session}>
		{@render children()}
	</Layout>
</ParaglideJS>

