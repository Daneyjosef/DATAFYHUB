"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import Card from "../ui/Card";

export default function Testimonials() {
  const looped = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center font-heading text-3xl font-bold sm:text-4xl md:text-5xl"
        >
          Join a Thriving <span className="gradient-text">Community</span>
        </motion.h2>
      </div>

      <div className="mt-14 overflow-hidden">
        <motion.div
          className="flex w-max gap-6 px-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {looped.map((t, i) => (
            <Card key={i} className="w-80 flex-shrink-0 hover:-translate-y-0">
              <Quote className="text-accent" size={24} />
              <p className="mt-4 text-sm leading-relaxed text-text-secondary">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-accent" />
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-text-secondary">{t.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
