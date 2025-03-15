<script lang="ts">
  import UserAvatar from '$lib/components/model/user/UserAvatar/UserAvatar.svelte';
  import UserMenuPanel from '$lib/components/model/user/UserAvatarButton/UserMenuPanel/UserMenuPanel.svelte';

	let displayMenuPanel: boolean = false
	export let src: string | null | undefined

	function changePanelDiaplayState() {
		displayMenuPanel = !displayMenuPanel
	}

	function onClose() {
		displayMenuPanel = false
	}
</script>

<div class="relative h-10">
	<button class="cursor-pointer" on:click={changePanelDiaplayState}>
		<UserAvatar {src} />
	</button>
	{#if displayMenuPanel}
		<UserMenuPanel {onClose} />
	{/if}
</div>
