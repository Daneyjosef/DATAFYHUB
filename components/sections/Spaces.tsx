"use client";

import { motion } from "framer-motion";
import { SPACES } from "@/lib/constants";
import Card from "../ui/Card";
import Button from "../ui/Button";

export default function Spaces({
  onBook,
}: {
  onBook: (spaceId?: string) => void;
}) {
  return (
    <section id="spaces" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center font-heading text-3xl font-bold sm:text-4xl md:text-5xl"
        >
          Choose Your <span className="gradient-text">Workspace</span>
        </motion.h2>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SPACES.map((space, i) => {
            const Icon = space.icon;
            return (
              <motion.div
                key={space.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              >
                <Card className="group flex h-full flex-col">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 transition-transform duration-300 group-hover:rotate-12">
                    <Icon size={22} className="text-accent" />
                  </div>
                  <h3 className="mt-5 font-heading text-xl font-semibold">
                    {space.name}
                  </h3>
                  <p className="mt-2 flex-1 text-sm text-text-secondary">
                    {space.description}
                  </p>
                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-sm font-semibold text-accent">
                      {space.startingPriceLabel}
                    </span>
                    <Button
                      variant="secondary"
                      className="!px-4 !py-2 !text-xs"
                      onClick={() => onBook(space.id)}
                    >
                      Book Now
                    </Button>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
