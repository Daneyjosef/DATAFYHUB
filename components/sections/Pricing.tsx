"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SPACES } from "@/lib/constants";
import type { Duration } from "@/lib/types";
import AnimatedCounter from "../ui/AnimatedCounter";
import Button from "../ui/Button";

const DURATIONS: { key: Duration; label: string }[] = [
  { key: "daily", label: "Daily" },
  { key: "weekly", label: "Weekly" },
  { key: "monthly", label: "Monthly" },
  { key: "annually", label: "Annually" },
];

export default function Pricing({ onBook }: { onBook: () => void }) {
  const [duration, setDuration] = useState<Duration>("daily");

  return (
    <section id="pricing" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-heading text-3xl font-bold sm:text-4xl md:text-5xl">
            Transparent, Flexible <span className="gradient-text">Pricing</span>
          </h2>
          <p className="mt-4 text-text-secondary">Monday – Friday, 9AM – 5PM</p>
        </motion.div>

        <div className="mt-10 flex justify-center">
          <div className="glass relative flex rounded-full border border-white/10 p-1">
            {DURATIONS.map((d) => (
              <button
                key={d.key}
                onClick={() => setDuration(d.key)}
                className="relative z-10 px-5 py-2 text-sm font-medium transition-colors"
              >
                {duration === d.key && (
                  <motion.span
                    layoutId="pricing-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-primary to-accent"
                    transition={{ type: "spring", duration: 0.5 }}
                  />
                )}
                <span className={duration === d.key ? "text-dark" : "text-text-secondary"}>
                  {d.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SPACES.map((space, i) => {
            const price = space.pricing[duration];
            return (
              <motion.div
                key={space.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                className={`glow-border relative flex flex-col rounded-2xl border p-6 ${
                  space.popular
                    ? "border-primary/60 bg-surface-light"
                    : "border-white/10 bg-surface/80"
                }`}
              >
                {space.popular && (
                  <span className="absolute -top-3 left-6 rounded-full bg-gradient-to-r from-primary to-accent px-3 py-1 text-xs font-semibold text-dark">
                    Most Popular
                  </span>
                )}
                <h3 className="font-heading text-lg font-semibold">
                  {space.name}
                </h3>
                <p className="mt-2 text-sm text-text-secondary">
                  {space.description}
                </p>
                <div className="mt-6">
                  {price ? (
                    <p className="font-heading text-3xl font-bold">
                      <AnimatedCounter value={price} prefix="₦" />
                      <span className="ml-1 text-sm font-normal text-text-secondary">
                        /{duration.slice(0, -2)}
                      </span>
                    </p>
                  ) : (
                    <p className="text-sm text-text-secondary">
                      Not available for this duration
                    </p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-14 flex justify-center">
          <Button onClick={onBook}>Inquire Now</Button>
        </div>
      </div>
    </section>
  );
}
