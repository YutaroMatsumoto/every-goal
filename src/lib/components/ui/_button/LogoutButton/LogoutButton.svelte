<!-- このコンポーネントは例外としてstyleについての関心はもたない -->
<script lang="ts">
  import { getSupabase, type Supabase } from "$lib/globalState/supabase.svelte";


	export let onClose: (() => void) | undefined = undefined

	const supabase = getSupabase()

	const onClick = () => {
		onClose && onClose()
		handleSignOut($supabase)
	}


  function handleSignOut($supabase: Supabase) {
    throw new Error("Function not implemented.");
  }
</script>

<button on:click={onClick} class="flex w-full p-2 hover:bg-white cursor-pointer">ログアウト</button>
