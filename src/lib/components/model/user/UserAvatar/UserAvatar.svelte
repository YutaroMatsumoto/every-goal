<script lang="ts">
	export let src: string | null | undefined
</script>

<!-- TODO: srcない時 -->
<img {src} alt="avator" id="profile-icon" referrerpolicy="no-referrer" />

<style>
	img {
		height: 40px;
		border-radius: 3px;
	}
</style>
