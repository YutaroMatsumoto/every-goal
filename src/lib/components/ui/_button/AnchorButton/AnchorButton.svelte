<!-- このコンポーネントは使用頻度少なめにする -->
<script lang="ts">
  import type { PathValues } from '$lib/const/route';
	import { primaryButton } from '$lib/components/ui/_button/PrimaryButton/primaryButton.style'
	import Loading from '$lib/components/ui/Loading/Loading.svelte'

	type AnchorButtonProps = {
		title: string
		href: PathValues
		params?: string | string[] | undefined
		size?: 'sm' | 'lg'
		disabled?: boolean
		disabledReason?: string
		loading?: boolean
	}

	let {
		title,
		href,
		size = 'lg',
		disabledReason = '',
		loading = false,
	}: AnchorButtonProps = $props()

	const disabled = $derived(!!disabledReason)
</script>

<div class="inline-flex items-center gap-1">
	<a 
		class={primaryButton({ size, disabled })} 
		{href}
		aria-disabled={disabled}
	>
		{#if loading}
			<Loading />
		{:else}
			{title}
		{/if}
	</a>
	
	{#if disabled && disabledReason}
		<span class="text-sm text-gray-500 cursor-help" title={disabledReason}>
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
				<circle cx="12" cy="12" r="10"></circle>
				<line x1="12" y1="16" x2="12" y2="12"></line>
				<line x1="12" y1="8" x2="12.01" y2="8"></line>
			</svg>
		</span>
	{/if}
</div>
