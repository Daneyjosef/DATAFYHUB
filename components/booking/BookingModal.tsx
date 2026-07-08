"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { X, ChevronLeft } from "lucide-react";
import { toast } from "sonner";
import type { DateRange } from "react-day-picker";
import { SPACES } from "@/lib/constants";
import type { BookingFormValues, Duration } from "@/lib/types";
import Button from "../ui/Button";
import StepSelectSpace from "./StepSelectSpace";
import StepSelectDate from "./StepSelectDate";
import StepPersonalDetails from "./StepPersonalDetails";
import StepConfirmation from "./StepConfirmation";

const STEPS = ["Space", "Date", "Details", "Confirm"];

export default function BookingModal({
  open,
  onClose,
  initialSpaceId,
}: {
  open: boolean;
  onClose: () => void;
  initialSpaceId?: string | null;
}) {
  const [step, setStep] = useState(0);
  const [spaceId, setSpaceId] = useState<string | null>(null);
  const [duration, setDuration] = useState<Duration>("daily");
  const [date, setDate] = useState<Date | undefined>();
  const [dateRange, setDateRange] = useState<DateRange | undefined>();
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<BookingFormValues>({
    defaultValues: { fullName: "", email: "", phone: "", company: "", notes: "" },
  });

  useEffect(() => {
    if (open) {
      setSpaceId(initialSpaceId ?? null);
      setStep(initialSpaceId ? 1 : 0);
      setSubmitted(false);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open, initialSpaceId]);

  const space = useMemo(
    () => SPACES.find((s) => s.id === spaceId) ?? SPACES[0],
    [spaceId]
  );

  const total = useMemo(() => {
    const price = space.pricing[duration] ?? 0;
    if (duration === "daily" && date) return price;
    if (duration !== "daily" && dateRange?.from) return price;
    return price;
  }, [space, duration, date, dateRange]);

  const canProceed = (currentStep: number) => {
    if (currentStep === 0) return !!spaceId;
    if (currentStep === 1) {
      return duration === "daily" ? !!date : !!dateRange?.from;
    }
    return true;
  };

  const handleNext = async () => {
    if (step === 2) {
      const valid = await form.trigger();
      if (!valid) return;
    }
    if (step === 3) {
      const booking = {
        spaceId: space.id,
        duration,
        date,
        dateRange,
        details: form.getValues(),
        total,
      };
      console.log("Booking submitted:", booking);
      setSubmitted(true);

      const dateLabel = date
        ? date.toLocaleDateString()
        : dateRange?.from
        ? `${dateRange.from.toLocaleDateString()} – ${
            dateRange.to?.toLocaleDateString() ?? "…"
          }`
        : "Not selected";

      try {
        const res = await fetch("/api/booking", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            spaceName: space.name,
            duration,
            dateLabel,
            total,
            details: booking.details,
          }),
        });
        const data = await res.json();
        if (data.sent) {
          toast.success("Booking request sent to Datafy Hub!");
        } else {
          toast.success("Booking request received!");
        }
      } catch {
        toast.success("Booking request received!");
      }
      return;
    }
    setStep((s) => Math.min(s + 1, STEPS.length - 1));
  };

  const handleBack = () => {
    if (step === 0) return onClose();
    setStep((s) => s - 1);
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm"
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 260 }}
            className="fixed inset-y-0 right-0 z-[70] flex w-full flex-col bg-surface shadow-2xl sm:w-[480px]"
          >
            <div className="flex items-center justify-between border-b border-border px-6 py-5">
              <button
                onClick={handleBack}
                className="flex items-center gap-1 text-sm text-text-secondary hover:text-foreground"
              >
                <ChevronLeft size={18} /> Back
              </button>
              <div className="flex items-center gap-2">
                {STEPS.map((s, i) => (
                  <div
                    key={s}
                    className={`h-1.5 w-6 rounded-full transition-colors ${
                      i <= step ? "bg-gradient-to-r from-primary to-accent" : "bg-black/10 dark:bg-white/10"
                    }`}
                  />
                ))}
              </div>
              <button onClick={onClose} className="text-text-secondary hover:text-foreground">
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.25 }}
                >
                  {step === 0 && (
                    <StepSelectSpace selected={spaceId} onSelect={setSpaceId} />
                  )}
                  {step === 1 && (
                    <StepSelectDate
                      space={space}
                      duration={duration}
                      onDurationChange={setDuration}
                      date={date}
                      onDateChange={setDate}
                      dateRange={dateRange}
                      onDateRangeChange={setDateRange}
                      total={total}
                    />
                  )}
                  {step === 2 && <StepPersonalDetails form={form} />}
                  {step === 3 && (
                    <StepConfirmation
                      space={space}
                      submitted={submitted}
                      booking={{
                        spaceId: space.id,
                        duration,
                        date,
                        dateRange,
                        details: form.getValues(),
                        total,
                      }}
                    />
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {!submitted && (
              <div className="safe-bottom border-t border-border px-6 py-5">
                <Button
                  className="w-full"
                  disabled={!canProceed(step)}
                  onClick={handleNext}
                >
                  {step === 3 ? "Confirm Booking" : "Continue"}
                </Button>
              </div>
            )}
            {submitted && (
              <div className="safe-bottom border-t border-border px-6 py-5">
                <Button className="w-full" onClick={onClose}>
                  Done
                </Button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
