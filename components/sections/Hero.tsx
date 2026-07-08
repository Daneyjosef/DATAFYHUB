"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Button from "../ui/Button";

const HEADLINE = "Your Next Big Idea Starts Here";

const STATS = ["500+ Members", "9th Floor Views", "High-Speed WiFi"];

export default function Hero({ onBook }: { onBook: () => void }) {
  const bgRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
    const handleMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      if (bgRef.current) {
        bgRef.current.style.transform = `translate(${x}px, ${y}px)`;
      }
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  const words = HEADLINE.split(" ");

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-24">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/hero-hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-dark/70" />
      <div className="bg-grid absolute inset-0 opacity-40" />
      <div
        ref={bgRef}
        className="pointer-events-none absolute inset-0 transition-transform duration-300 ease-out"
      >
        <div className="absolute left-[10%] top-[20%] h-72 w-72 rounded-full bg-primary/30 opacity-30 blur-[100px] animate-drift dark:opacity-100" />
        <div className="absolute right-[15%] top-[10%] h-96 w-96 rounded-full bg-accent/20 opacity-30 blur-[120px] animate-drift-slow dark:opacity-100" />
        <div className="absolute bottom-[10%] left-[30%] h-64 w-64 rounded-full bg-primary/20 opacity-30 blur-[100px] animate-drift-slow dark:opacity-100" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center text-white">
        <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight sm:text-6xl md:text-7xl">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
              animate={
                ready
                  ? { opacity: 1, y: 0, filter: "blur(0px)" }
                  : undefined
              }
              transition={{
                duration: 0.7,
                delay: 0.15 * i + 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`mr-3 inline-block ${
                i === words.length - 1 || i === words.length - 2
                  ? "gradient-text"
                  : ""
              }`}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-white/70"
        >
          A premium coworking space built for the data-driven generation — 9th
          Floor, Cocoa House, Ibadan.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Button onClick={onBook}>Book a Space</Button>
          <a
            href="#spaces"
            className="shimmer relative inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
          >
            Explore Spaces
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-3"
        >
          {STATS.map((stat) => (
            <span
              key={stat}
              className="rounded-full border border-white/20 bg-black/30 px-4 py-2 text-xs text-white/80 backdrop-blur-md sm:text-sm"
            >
              {stat}
            </span>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="text-white/60" />
      </motion.div>
    </section>
  );
}
