"use client";

import { motion } from "framer-motion";
import { Camera } from "lucide-react";
import AnimatedCounter from "../ui/AnimatedCounter";

const STATS = [
  { label: "Members", value: 500, suffix: "+" },
  { label: "Floor", value: 9, prefix: "", suffix: "th" },
  { label: "Access", value: 24, suffix: "/7" },
  { label: "Events", value: 50, suffix: "+" },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-heading text-3xl font-bold sm:text-4xl md:text-5xl">
            More Than a Desk. <span className="gradient-text">A Community.</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-text-secondary md:text-lg">
            Datafyhub is a modern coworking space operated by Datafy
            Technologies Limited, a Nigerian technology company committed to
            bringing smart, reliable, and future-ready solutions to homes and
            businesses. Strategically positioned on the 9th Floor of Cocoa
            House, Dugbe, Ibadan — one of Nigeria&apos;s most iconic and
            historically significant buildings — Datafyhub offers
            professionals, entrepreneurs, startups, and remote workers a
            premium workspace experience right in the heart of Ibadan&apos;s
            central business district.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <p className="font-heading text-2xl font-bold text-white md:text-3xl">
                  <AnimatedCounter
                    value={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                  />
                </p>
                <p className="mt-1 text-xs text-text-secondary md:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative"
        >
          {/* TODO: Replace with actual image */}
          <div className="glow-border flex aspect-[4/3] items-center justify-center rounded-3xl border border-white/10 bg-gradient-to-br from-primary/20 via-surface to-accent/10">
            <div className="flex flex-col items-center gap-3 text-text-secondary">
              <Camera size={40} />
              <span className="text-sm">Your workspace photo here</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
