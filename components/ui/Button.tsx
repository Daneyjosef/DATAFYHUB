"use client";

import { ButtonHTMLAttributes, forwardRef } from "react";
import { clsx } from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost" | "secondary";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", children, ...props }, ref) => {
    const base =
      "shimmer relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:opacity-50";

    const variants: Record<string, string> = {
      primary:
        "bg-gradient-to-r from-primary to-accent text-dark hover:brightness-110 hover:-translate-y-0.5 shadow-lg shadow-primary/20",
      ghost:
        "border border-border text-foreground hover:border-accent hover:text-accent hover:-translate-y-0.5",
      secondary:
        "bg-surface-light text-foreground hover:bg-surface-light/70 hover:-translate-y-0.5",
    };

    return (
      <button
        ref={ref}
        className={clsx(base, variants[variant], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export default Button;
