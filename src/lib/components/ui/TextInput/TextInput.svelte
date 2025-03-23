<!-- MEMO: 初期はformはそんなに多くないのでシンプルな作りにする -->
<script lang="ts">
  type Props = {
    value: string;
    placeholder?: string;
    keydownFunction?: () => void;
  }
  let { value = $bindable(), placeholder, keydownFunction }: Props = $props();

  const onkeydown = (e: KeyboardEvent) => {
    if (e.key === 'Enter' &&keydownFunction) {
      keydownFunction();
    }
  }

</script>

<input
  type="text"
  bind:value
  {placeholder}
  class="flex-1 px-4 py-2 border border-gray-300 rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
  {onkeydown}
/>