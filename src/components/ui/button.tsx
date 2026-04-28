import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-[var(--pri)] text-white hover:opacity-90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-white text-[var(--txt)] border border-[var(--line-2)] hover:border-[var(--line-3)] hover:bg-[#F8F9FC]",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-[var(--pri)] underline-offset-4 hover:underline",
        /** 主 CTA：indigo 渐变 */
        primary: "bg-gradient-to-br from-[var(--pri)] to-[var(--pri-2)] text-white shadow-[0_8px_18px_-6px_rgba(91,91,255,.5)] hover:-translate-y-0.5 hover:shadow-[0_12px_22px_-6px_rgba(91,91,255,.55)]",
        /** 深色按钮 */
        dark: "bg-[#0E1430] text-white hover:bg-[#1B2148] hover:-translate-y-0.5",
      },
      size: {
        default: "h-11 px-[22px] py-[11px]",
        sm: "h-9 px-4",
        lg: "h-12 px-8 text-[15px]",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
