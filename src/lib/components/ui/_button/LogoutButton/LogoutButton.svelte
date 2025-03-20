<!-- このコンポーネントは例外としてstyleについての関心はもたない -->
<script lang="ts">
  import { getSession } from "$lib/globalState/session.svelte";
  import { getSupabase } from "$lib/globalState/supabase.svelte";
  import { handleSignOut } from "$lib/usecase/auth";

  let { onClose = undefined } = $props<{
    onClose?: (() => void) | undefined
  }>();

  const supabase = getSupabase();
  const session = getSession();

  function onClick() {
    onClose && onClose();
    handleSignOut($supabase);
  }

	$effect(() => console.log({ supabase, session }))
	$inspect({ supabase, session })
</script>

<button 
  onclick={onClick} 
  class="flex w-full p-2 hover:bg-white cursor-pointer text-red-700"
>
  ログアウト
</button>
