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
        "glow-border rounded-2xl border border-border bg-surface/80 p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 dark:shadow-none",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
