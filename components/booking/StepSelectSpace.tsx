"use client";

import { SPACES } from "@/lib/constants";
import { clsx } from "clsx";

export default function StepSelectSpace({
  selected,
  onSelect,
}: {
  selected: string | null;
  onSelect: (id: string) => void;
}) {
  return (
    <div>
      <h3 className="font-heading text-xl font-semibold">Select a Space</h3>
      <p className="mt-1 text-sm text-text-secondary">
        Choose the workspace type you&apos;d like to book.
      </p>
      <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {SPACES.map((space) => {
          const Icon = space.icon;
          const isSelected = selected === space.id;
          return (
            <button
              key={space.id}
              onClick={() => onSelect(space.id)}
              className={clsx(
                "flex flex-col items-start gap-2 rounded-xl border p-4 text-left transition-all duration-200",
                isSelected
                  ? "border-accent bg-surface-light shadow-lg shadow-accent/10"
                  : "border-border bg-surface hover:border-primary/40"
              )}
            >
              <div
                className={clsx(
                  "flex h-9 w-9 items-center justify-center rounded-lg",
                  isSelected
                    ? "bg-gradient-to-br from-primary to-accent"
                    : "bg-black/5 dark:bg-white/5"
                )}
              >
                <Icon size={16} className={isSelected ? "text-dark" : "text-accent"} />
              </div>
              <span className="text-sm font-semibold">{space.name}</span>
              <span className="text-xs text-text-secondary">
                {space.startingPriceLabel}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
