"use client";

import { HTMLAttributes } from "react";
import { clsx } from "clsx";

export default function Card({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={clsx(
        "glow-border rounded-2xl border border-white/10 bg-surface/80 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-primary/40",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
