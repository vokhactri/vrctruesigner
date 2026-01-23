import * as React from "react";
import { cn } from "@/lib/utils/cn";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

/**
 * Custom input component styled with Verichains brand
 * Based on shadcn/ui patterns
 */
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-12 w-full rounded-md border border-vrc-input-border bg-vrc-input-bg px-4 py-3 text-vrc-foreground placeholder:text-vrc-input-placeholder focus:outline-none focus:ring-2 focus:ring-vrc-border-focus focus:border-vrc-border-focus disabled:cursor-not-allowed disabled:opacity-50 transition-colors",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export { Input };
