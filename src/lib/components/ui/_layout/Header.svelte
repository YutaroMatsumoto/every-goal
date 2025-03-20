<script lang="ts">
	// import ContentWidthController from '$ui/_layout/_variedLayout/ContentWidthController/ContentWidthController.svelte'
	// import Logo from '$ui/_layout/Logo/Logo.svelte'
	// import { getUser } from '$globalStates/user'
  import UserAvatarButton from '$lib/components/model/user/UserAvatarButton/UserAvatarButton.svelte';
  import { createModal } from '$lib/globalState/modal';
  // import { getSession } from '$lib/globalState/session.svelte';
  import type { Session } from '@supabase/supabase-js';

	const { session } : {session: Session | null} = $props()
	
	// const contextSession = $derived(getSession())
	const modal = createModal

	// $inspect({session})
</script>

<header>
	<div class="flex justify-between items-center bg-gradient-to-r from-blue-600 to-blue-400 px-4 py-3 text-center">
		<h1 class="text-lg font-bold text-white">Daily Steps</h1>
  	{#if session}
			<UserAvatarButton src={""} />
		{/if}
	</div>
</header>
