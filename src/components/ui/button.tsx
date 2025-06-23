import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-white/10 text-foreground shadow-lg backdrop-blur-md border border-white/20 hover:bg-white/20 hover:border-white/30 active:bg-white/15 dark:bg-white/5 dark:border-white/10 dark:hover:bg-white/10",
        destructive:
          "bg-red-500/10 text-red-600 shadow-lg backdrop-blur-md border border-red-500/20 hover:bg-red-500/20 hover:border-red-500/30 active:bg-red-500/15 dark:text-red-400 dark:bg-red-500/5 dark:border-red-500/10 dark:hover:bg-red-500/10",
        outline:
          "bg-white/5 shadow-lg backdrop-blur-md border border-white/20 hover:bg-white/10 hover:border-white/30 active:bg-white/8 dark:bg-white/5 dark:border-white/10 dark:hover:bg-white/10",
        secondary:
          "bg-gray-500/10 text-secondary-foreground shadow-lg backdrop-blur-md border border-gray-500/20 hover:bg-gray-500/20 hover:border-gray-500/30 active:bg-gray-500/15 dark:bg-gray-500/5 dark:border-gray-500/10 dark:hover:bg-gray-500/10",
        ghost:
          "hover:bg-white/10 hover:text-accent-foreground dark:hover:bg-white/5 backdrop-blur-sm",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
      <Comp
        data-slot="button"
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
  );
}

export { Button, buttonVariants };
