<script lang="ts">
	import { userMenu } from './userMenuPanel'
  import LogoutButton from '$lib/components/ui/_button/LogoutButton/LogoutButton.svelte';
  import MenuPanel from '$lib/components/ui/MenuPanel/MenuPanel.svelte';

  let { onClose } = $props<{ onClose: () => void }>();

</script>

<MenuPanel {onClose}>
	{#each userMenu as userMenuItem}
		<a class="flex w-full p-2 hover:bg-white" href={userMenuItem.href} onclick={onClose}>
			{userMenuItem.title}
		</a>
	{/each}
	<LogoutButton {onClose} />
</MenuPanel>
