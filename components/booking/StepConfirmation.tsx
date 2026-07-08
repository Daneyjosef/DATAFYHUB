"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import type { BookingData, Space } from "@/lib/types";

export default function StepConfirmation({
  space,
  booking,
  submitted,
}: {
  space: Space;
  booking: BookingData;
  submitted: boolean;
}) {
  if (submitted) {
    return (
      <div className="flex flex-col items-center py-10 text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.2, 1] }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <CheckCircle2 size={64} className="text-success" />
        </motion.div>
        <h3 className="mt-6 font-heading text-xl font-semibold">
          Booking Received!
        </h3>
        <p className="mt-3 max-w-sm text-sm text-text-secondary">
          Thank you! We&apos;ll reach out to you at{" "}
          <span className="text-accent">{booking.details.email}</span> within
          24 hours to confirm your booking. Questions? Call{" "}
          <span className="text-foreground">+234 707 241 2697</span>
        </p>
      </div>
    );
  }

  const dateLabel = booking.date
    ? booking.date.toLocaleDateString()
    : booking.dateRange?.from
    ? `${booking.dateRange.from.toLocaleDateString()} – ${
        booking.dateRange.to?.toLocaleDateString() ?? "…"
      }`
    : "Not selected";

  return (
    <div>
      <h3 className="font-heading text-xl font-semibold">Confirm Booking</h3>
      <p className="mt-1 text-sm text-text-secondary">
        Please review your booking details before confirming.
      </p>

      <div className="mt-6 space-y-3 rounded-xl border border-border bg-surface p-5">
        <Row label="Space Type" value={space.name} />
        <Row label="Duration" value={booking.duration} />
        <Row label="Date" value={dateLabel} />
        <Row label="Name" value={booking.details.fullName} />
        <Row label="Email" value={booking.details.email} />
        <Row label="Phone" value={`+234${booking.details.phone}`} />
        <div className="mt-3 flex items-center justify-between border-t border-border pt-3">
          <span className="text-sm text-text-secondary">Total</span>
          <span className="font-heading text-2xl font-bold text-accent">
            ₦{booking.total.toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between text-sm">
      <span className="text-text-secondary">{label}</span>
      <span className="font-medium capitalize">{value}</span>
    </div>
  );
}
