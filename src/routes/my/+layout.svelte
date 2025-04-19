
<script lang="ts">
  import DateSelector from "$lib/components/ui/_form/DateSelector.svelte";
	let { children } = $props()
</script>

<DateSelector />
{@render children()}