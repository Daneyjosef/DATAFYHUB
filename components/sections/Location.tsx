"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { SITE } from "@/lib/constants";

export default function Location() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center font-heading text-3xl font-bold sm:text-4xl md:text-5xl"
        >
          Find Us in the Heart of <span className="gradient-text">Ibadan</span>
        </motion.h2>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-2xl border border-white/10 lg:col-span-2"
          >
            <iframe
              title="Cocoa House, Dugbe, Ibadan"
              src="https://www.google.com/maps?q=Cocoa+House,+Dugbe,+Ibadan&output=embed"
              width="100%"
              height="100%"
              style={{ minHeight: 400, border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glow-border flex flex-col gap-6 rounded-2xl border border-white/10 bg-surface p-6"
          >
            <InfoRow icon={<MapPin size={18} />} text={SITE.address} />
            <InfoRow
              icon={<Phone size={18} />}
              text={SITE.phones.join(" | ")}
            />
            <InfoRow icon={<Mail size={18} />} text={SITE.email} />
            <InfoRow icon={<Clock size={18} />} text={SITE.hours} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function InfoRow({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 text-accent">{icon}</span>
      <span className="text-sm text-text-secondary">{text}</span>
    </div>
  );
}
