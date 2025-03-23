<!-- MEMO: 初期はformはそんなに多くないのでシンプルな作りにする -->
<script lang="ts">
  type Props = {
    value: string;
    placeholder?: string;
    keydownFunction?: () => void;
    required?: boolean;
  }
  let { value = $bindable(), placeholder, keydownFunction, required }: Props = $props();

  const onkeydown = (e: KeyboardEvent) => {
    if (e.key === 'Enter' &&keydownFunction) {
      keydownFunction();
    }
  }

</script>

<input
  class="w-full h-12 px-4 py-2 border border-gray-300 rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
  type="text"
  bind:value
  {placeholder}
  {required}
  {onkeydown}
/>