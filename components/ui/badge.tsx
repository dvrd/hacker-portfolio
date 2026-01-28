import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center border font-mono text-xs transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-green-500 text-black",
        outline:
          "border-green-500/30 text-green-500",
        secondary:
          "border-transparent bg-green-950 text-green-400",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
