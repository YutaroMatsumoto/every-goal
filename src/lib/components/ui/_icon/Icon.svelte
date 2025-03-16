<script lang="ts">
  import { Icon as _Icon, icon, IconSize } from "./icon";
  import type { IconColorType, IconSizeType, IconType } from "./icon"

  type Props = {
    type: IconType
    color: IconColorType
    size?: IconSizeType
  }
  let { type, color, size = "md" }: Props = $props()

  const Icon = $derived(_Icon[type])
  const iconSize = $derived(IconSize[size])
  const iconClass = $derived(icon({ color }))
</script>

<Icon size={iconSize} class={iconClass} />
