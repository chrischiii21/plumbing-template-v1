import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-black uppercase tracking-[0.2em] transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none active:scale-95 hover:scale-105 hover:-translate-y-1 group relative overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-[0_15px_30px_rgba(59,130,246,0.4),inset_-4px_-4px_8px_rgba(0,0,0,0.1),inset_4px_4px_8px_rgba(255,255,255,0.3)] hover:shadow-[0_20px_40px_rgba(59,130,246,0.5),inset_-4px_-4px_8px_rgba(0,0,0,0.1),inset_4px_4px_8px_rgba(255,255,255,0.4)]",
        destructive:
          "bg-destructive text-white shadow-[0_15px_30px_rgba(220,38,38,0.4),inset_-4px_-4px_8px_rgba(0,0,0,0.1),inset_4px_4px_8px_rgba(255,255,255,0.3)]",
        outline:
          "border-2 border-primary/10 bg-white text-primary hover:bg-primary/5 shadow-[inset_4px_4px_8px_rgba(28,57,142,0.05),inset_-4px_-4px_8px_rgba(255,255,255,1)]",
        secondary:
          "bg-secondary text-secondary-foreground shadow-[0_15px_30px_rgba(0,0,0,0.1),inset_-4px_-4px_8px_rgba(0,0,0,0.05),inset_4px_4px_8px_rgba(255,255,255,0.4)]",
        ghost:
          "hover:bg-primary/5 hover:text-primary text-foreground/80",
        link: "text-primary underline-offset-4 hover:underline font-bold",
      },
      size: {
        default: "h-14 px-10 py-4 rounded-[24px] text-sm",
        sm: "h-10 px-6 py-2 rounded-[16px] text-[10px]",
        lg: "h-16 px-12 py-5 rounded-[32px] text-base",
        icon: "size-14 rounded-[24px]",
        "icon-sm": "size-10 rounded-[16px]",
        "icon-lg": "size-16 rounded-[32px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
