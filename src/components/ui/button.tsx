import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import * as React from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-sans text-sm font-medium tracking-wide transition-[color,background-color,box-shadow,transform,opacity] duration-150 ease-out focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-navy disabled:pointer-events-none disabled:opacity-50 active:not-disabled:scale-[0.96] [&_svg]:pointer-events-none [&_svg]:size-4",
  {
    variants: {
      variant: {
        default:
          "bg-navy text-cream shadow-[var(--shadow-border)] hover:bg-navy-2",
        cream:
          "bg-cream text-navy hover:bg-paper",
        outline:
          "bg-transparent text-ink shadow-[var(--shadow-border)] hover:bg-paper-2",
        ghost: "bg-transparent text-ink hover:bg-paper-2",
        link: "bg-transparent text-cream underline-offset-4 hover:underline",
        invert:
          "bg-cream text-navy hover:bg-paper",
      },
      size: {
        default: "h-11 rounded-md px-5",
        sm: "h-9 rounded-sm px-3.5 text-xs",
        lg: "h-12 rounded-md px-6 text-[0.9375rem]",
        wide: "h-12 rounded-md px-7",
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

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { buttonVariants };
