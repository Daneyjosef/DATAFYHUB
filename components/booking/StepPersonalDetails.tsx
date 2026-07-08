"use client";

import { UseFormReturn } from "react-hook-form";
import type { BookingFormValues } from "@/lib/types";

export default function StepPersonalDetails({
  form,
}: {
  form: UseFormReturn<BookingFormValues>;
}) {
  const {
    register,
    formState: { errors },
  } = form;

  return (
    <div>
      <h3 className="font-heading text-xl font-semibold">Your Details</h3>
      <p className="mt-1 text-sm text-text-secondary">
        Tell us who&apos;s booking so we can confirm with you.
      </p>

      <div className="mt-6 space-y-4">
        <div>
          <label className="mb-1.5 block text-xs font-medium text-text-secondary">
            Full Name
          </label>
          <input
            {...register("fullName", { required: "Full name is required" })}
            className="w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm outline-none focus:border-accent"
            placeholder="Jane Doe"
          />
          {errors.fullName && (
            <p className="mt-1 text-xs text-red-400">{errors.fullName.message}</p>
          )}
        </div>

        <div>
          <label className="mb-1.5 block text-xs font-medium text-text-secondary">
            Email Address
          </label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: { value: /^\S+@\S+\.\S+$/, message: "Enter a valid email" },
            })}
            className="w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm outline-none focus:border-accent"
            placeholder="jane@example.com"
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="mb-1.5 block text-xs font-medium text-text-secondary">
            Phone Number
          </label>
          <div className="flex items-center gap-2 rounded-lg border border-border bg-surface px-4 py-2.5 focus-within:border-accent">
            <span className="text-sm text-text-secondary">+234</span>
            <input
              {...register("phone", {
                required: "Phone number is required",
                pattern: { value: /^[0-9]{7,10}$/, message: "Enter a valid number" },
              })}
              className="w-full bg-transparent text-sm outline-none"
              placeholder="7071234567"
            />
          </div>
          {errors.phone && (
            <p className="mt-1 text-xs text-red-400">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <label className="mb-1.5 block text-xs font-medium text-text-secondary">
            Company/Organization (optional)
          </label>
          <input
            {...register("company")}
            className="w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm outline-none focus:border-accent"
            placeholder="Acme Inc."
          />
        </div>

        <div>
          <label className="mb-1.5 block text-xs font-medium text-text-secondary">
            Special Requirements (optional)
          </label>
          <textarea
            {...register("notes")}
            rows={3}
            className="w-full resize-none rounded-lg border border-border bg-surface px-4 py-2.5 text-sm outline-none focus:border-accent"
            placeholder="Anything we should know?"
          />
        </div>
      </div>
    </div>
  );
}
