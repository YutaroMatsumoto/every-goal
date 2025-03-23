<script lang="ts">
  import Icon from '$lib/components/ui/_icon/Icon.svelte';
  type Props = {
    password: string;
    keydownFunction?: () => void;
  }
  let { password = $bindable(), keydownFunction }: Props = $props();

  const onkeydown = (e: KeyboardEvent) => {
    if (e.key === 'Enter' &&keydownFunction) {
      keydownFunction();
    }
  }
</script>

<!-- absolute等使いたくないが、一旦これで良い -->
<div class="relative">
  <input
    class="w-full px-4 py-2 border border-gray-300 rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
    type="password"
    bind:value={password}
    placeholder="パスワード"
    required
    minlength={8}
    maxlength={16}
    autocomplete="current-password"
    {onkeydown}
  />
  <button class="absolute right-4 top-1/2 -translate-y-1/2">
    <Icon type="eye" color="disabled" />
  </button>
</div>