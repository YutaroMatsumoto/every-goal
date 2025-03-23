/**
 * buttonのRecipe
 */
import { tv } from "tailwind-variants";

export const primaryButton = tv({
  base: "inline-flex items-center gap-2 justify-center border rounded-4xl text-white font-bold bg-blue-500",
  variants: {
    size: {
      sm: "h-7 px-2 py-1 text-xs",
      lg: "h-10 px-4 py-2 text-base",
    },
    disabled: {
      true: "opacity-50 cursor-not-allowed",
      false: "cursor-pointer hover:bg-green-600",
    },
  },
  defaultVariants: {
    size: "lg",
    disabled: false,
  },
});
