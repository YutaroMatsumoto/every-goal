<script lang="ts">
  import AnchorButton from "$lib/components/ui/_button/AnchorButton/AnchorButton.svelte";
  import { pathName } from "$lib/const/route";

	let { data } = $props()
</script>

{#if data.session}
	<h1>ログイン済み</h1>
	<AnchorButton href={pathName.my} title="マイページ" />
{:else}
	<h1>ログインしていません</h1>
{/if}

