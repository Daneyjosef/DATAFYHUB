"use client";

import { motion } from "framer-motion";
import { AMENITIES } from "@/lib/constants";
import Card from "../ui/Card";

export default function Amenities() {
  const chips = [...AMENITIES, ...AMENITIES];

  return (
    <section id="amenities" className="relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center font-heading text-3xl font-bold sm:text-4xl md:text-5xl"
        >
          Premium <span className="gradient-text">Amenities</span> Included
        </motion.h2>
      </div>

      <div className="mt-14 space-y-4">
        <div className="flex gap-4 overflow-hidden">
          <div className="flex animate-marquee gap-4">
            {chips.map((a, i) => (
              <span
                key={`f-${i}`}
                className="glass whitespace-nowrap rounded-full border border-border px-5 py-2 text-sm text-text-secondary"
              >
                {a.emoji} {a.name}
              </span>
            ))}
          </div>
        </div>
        <div className="flex gap-4 overflow-hidden">
          <div className="flex animate-marquee-reverse gap-4">
            {chips.map((a, i) => (
              <span
                key={`r-${i}`}
                className="glass whitespace-nowrap rounded-full border border-border px-5 py-2 text-sm text-text-secondary"
              >
                {a.emoji} {a.name}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-6 px-6 sm:grid-cols-2 lg:grid-cols-4">
        {AMENITIES.map((a, i) => (
          <motion.div
            key={a.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
          >
            <Card>
              <span className="text-3xl">{a.emoji}</span>
              <h3 className="mt-4 font-heading text-lg font-semibold">
                {a.name}
              </h3>
              <p className="mt-2 text-sm text-text-secondary">
                {a.description}
              </p>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
