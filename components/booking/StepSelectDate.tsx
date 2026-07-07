"use client";

import { DayPicker, DateRange } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { clsx } from "clsx";
import type { Duration, Space } from "@/lib/types";

const DURATIONS: { key: Duration; label: string }[] = [
  { key: "daily", label: "Daily" },
  { key: "weekly", label: "Weekly" },
  { key: "monthly", label: "Monthly" },
  { key: "annually", label: "Annually" },
];

interface Props {
  space: Space;
  duration: Duration;
  onDurationChange: (d: Duration) => void;
  date?: Date;
  onDateChange: (d?: Date) => void;
  dateRange?: DateRange;
  onDateRangeChange: (r?: DateRange) => void;
  total: number;
}

export default function StepSelectDate({
  space,
  duration,
  onDurationChange,
  date,
  onDateChange,
  dateRange,
  onDateRangeChange,
  total,
}: Props) {
  const availableDurations = DURATIONS.filter(
    (d) => space.pricing[d.key] !== undefined
  );

  return (
    <div>
      <h3 className="font-heading text-xl font-semibold">
        Select Duration & Date
      </h3>
      <p className="mt-1 text-sm text-text-secondary">
        Booking a <span className="text-accent">{space.name}</span>
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {availableDurations.map((d) => (
          <button
            key={d.key}
            onClick={() => onDurationChange(d.key)}
            className={clsx(
              "rounded-full px-4 py-2 text-xs font-medium transition-colors",
              duration === d.key
                ? "bg-gradient-to-r from-primary to-accent text-dark"
                : "border border-white/10 text-text-secondary hover:border-primary/40"
            )}
          >
            {d.label}
          </button>
        ))}
      </div>

      <div className="mt-6 flex justify-center rounded-xl border border-white/10 bg-surface p-2">
        {duration === "daily" ? (
          <DayPicker
            mode="single"
            selected={date}
            onSelect={onDateChange}
            disabled={{ before: new Date() }}
            className="dh-daypicker"
          />
        ) : (
          <DayPicker
            mode="range"
            selected={dateRange}
            onSelect={onDateRangeChange}
            disabled={{ before: new Date() }}
            className="dh-daypicker"
          />
        )}
      </div>

      <div className="mt-6 flex items-center justify-between rounded-xl bg-surface-light p-4">
        <span className="text-sm text-text-secondary">Estimated Total</span>
        <span className="font-heading text-2xl font-bold text-accent">
          ₦{total.toLocaleString()}
        </span>
      </div>
    </div>
  );
}
