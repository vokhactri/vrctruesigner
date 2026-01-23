import * as React from "react";
import { cn } from "@/lib/utils/cn";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "default" | "sm" | "lg";
  asChild?: boolean;
}

/**
 * Custom button component styled with Verichains brand
 * Based on shadcn/ui patterns
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center rounded-md font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vrc-border-focus focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

    const variants = {
      primary:
        "bg-gradient-to-r from-[#00D4FF] to-[#0088CC] text-black font-semibold hover:from-[#00B8E6] hover:to-[#0077BB] hover:shadow-glow active:scale-[0.98]",
      secondary:
        "bg-gradient-to-r from-vrc-orange to-vrc-orange-hover text-white font-semibold hover:opacity-90 active:scale-[0.98]",
      outline:
        "border border-vrc-border bg-transparent text-vrc-foreground hover:bg-vrc-bg-elevated hover:border-vrc-border-focus",
    };

    const sizes = {
      default: "h-10 px-6 py-2 text-base",
      sm: "h-9 px-4 text-sm",
      lg: "h-12 px-8 text-lg",
    };

    return (
      <button
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };
