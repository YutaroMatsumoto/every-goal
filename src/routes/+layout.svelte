<script lang="ts">
	import { i18n } from "$lib/i18n";
	import { ParaglideJS } from "@inlang/paraglide-sveltekit";
	import Header from './Header.svelte';
	import '../app.css';
	
	let { children } = $props();
</script>

<ParaglideJS {i18n}>
	<div class="app">
		<Header />
		<main>
			{@render children()}
		</main>

		<footer>
			
		</footer>
	</div>
</ParaglideJS>

