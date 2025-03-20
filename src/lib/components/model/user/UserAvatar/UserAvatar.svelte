<script lang="ts">
  import type { UserMetadata } from "$lib/models/user";

	let {
		user
		// size = "md" 
	}: {
		user: UserMetadata;
		// size?: "sm" | "md" | "lg";
	} = $props();

	// 名前から頭文字を取得
	const { id, full_name: fullName, avatar_url: src } = $derived(user)
	const initial = $derived(id ? id.charAt(0).toUpperCase() : "U");
	
	// 名前から一貫したハッシュ値を生成
	function hashString(str: string): number {
		let hash = 0;
		for (let i = 0; i < str.length; i++) {
			hash = ((hash << 5) - hash) + str.charCodeAt(i);
			hash |= 0; // 32ビット整数に変換
		}
		return Math.abs(hash);
	}
	
	// 背景色の候補（明るめの色を選択）
	const colors = [
		"bg-blue-500", "bg-green-500", "bg-yellow-500", 
		"bg-red-500", "bg-purple-500", "bg-pink-500",
		"bg-indigo-500", "bg-teal-500", "bg-orange-500"
	];
	
	// 名前から一貫した色を生成
	const colorIndex = $derived(fullName ? hashString(fullName) % colors.length : 0);
	const bgColor = $derived(colors[colorIndex]);
	
</script>

{#if src}
	<img {src} alt="{fullName}のアバター" class="h-10 w-10 rounded-full" referrerpolicy="no-referrer" />
{:else}
	<div class="h-10 w-10 rounded-full {bgColor} flex items-center justify-center text-white font-medium text-l">
		{initial}
	</div>
{/if}
