<script lang="ts">
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import { primaryButton } from './primaryButton.style'
  import Loading from '$lib/components/ui/Loading/Loading.svelte';

	type PrimaryButtonProps = { loading?: boolean; size?: 'sm' | 'lg'; disabled?: boolean; onclick: (() => void) | undefined} & HTMLButtonAttributes

	let {loading = false, size = "lg", disabled = false, onclick, children, ...rest}: PrimaryButtonProps = $props()
</script>

<button class={primaryButton({ size, disabled })} {onclick} {...rest}>
	{#if loading}
		<Loading />
	{:else}
		{#if children}
			{@render children()}
		{/if}
	{/if}
</button>
