<!-- 一般的にはpopoverと呼ばれるUI? -->
<script lang="ts">
	import { onMount } from 'svelte'

	export let top: string = '40px'
	export let left: string = '-200px'
	export let onClose: () => void

	let ref: HTMLDivElement | null = null

	onMount(() => {
		function handleClickOutside(event: MouseEvent) {
			if (
				ref &&
				!ref?.contains(event.target as Node) &&
				(event.target as HTMLElement).id !== 'profile-icon'
			) {
				onClose()
			}
		}

		document.addEventListener('mousedown', handleClickOutside)

		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	})
</script>

<div tabindex="-1" class="absolute rounded-sm shadow-lg min-w-60 top-10 -left-50 my-1 bg-white" bind:this={ref}>
	<slot />
</div>
