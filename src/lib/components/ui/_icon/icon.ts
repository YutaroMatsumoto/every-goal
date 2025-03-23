import { tv } from "tailwind-variants"
import { IconSearch, IconCameraFilled, IconSend2, IconX, IconMenu2, IconArrowLeft, IconEyeFilled, IconChevronLeft, IconChevronRight } from "@tabler/icons-svelte";
import ClockHour_4 from "@tabler/icons-svelte/icons/clock-hour-4";

export type IconSizeType = "sm" | "md" | "lg"
export const IconSize: {[key in IconSizeType]: number} = {
  sm: 16,
  md: 24, // 仮
  lg: 48
}

export type IconColorType = keyof typeof icon.variants.color;

export const icon = tv({
  variants: {
    color: {
      primary: "text-blue-600", // 仮
      // secondary:
      primaryLight: "text-blue-300",
      disabled: "text-gray-400"
    },
  },
})

export const Icon = {
  search: IconSearch,
  clock: ClockHour_4,
  camera: IconCameraFilled,
  send: IconSend2,
  close: IconX,
  menu: IconMenu2,
  arrowLeft: IconArrowLeft,
  chevronLeft: IconChevronLeft,
  chevronRight: IconChevronRight,
  eye: IconEyeFilled
} as const;

export type IconType = keyof typeof Icon
