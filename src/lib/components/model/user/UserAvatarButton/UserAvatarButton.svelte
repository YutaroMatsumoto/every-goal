<script lang="ts">
  import UserAvatar from '$lib/components/model/user/UserAvatar/UserAvatar.svelte';
  import UserMenuPanel from '$lib/components/model/user/UserAvatarButton/UserMenuPanel/UserMenuPanel.svelte';
  import type { UserMetadata } from '$lib/models/user';

  let { user }: {
    user: UserMetadata;
  } = $props();

  let displayMenuPanel = $state(false);

  function changePanelDiaplayState() {
    displayMenuPanel = !displayMenuPanel;
  }

  function onClose() {
    displayMenuPanel = false;
  }
</script>

<div class="relative h-10">
	<button class="cursor-pointer" onclick={changePanelDiaplayState}>
		<UserAvatar {user} />
	</button>
	{#if displayMenuPanel}
		<UserMenuPanel {onClose} />
	{/if}
</div>
