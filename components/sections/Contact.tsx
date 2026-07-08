"use client";

import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { toast } from "sonner";
import Button from "../ui/Button";

interface ContactValues {
  name: string;
  email: string;
  message: string;
}

export default function Contact({ onBook }: { onBook: () => void }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactValues>();

  const onSubmit = async (data: ContactValues) => {
    console.log("Contact message:", data);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      toast.success(
        result.sent
          ? "Message sent! We'll get back to you soon."
          : "Message received! We'll get back to you soon."
      );
    } catch {
      toast.success("Message received! We'll get back to you soon.");
    }
    reset();
  };

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-heading text-3xl font-bold sm:text-4xl md:text-5xl"
        >
          Ready to Work <span className="gradient-text">Smarter?</span>
        </motion.h2>
        <p className="mx-auto mt-4 max-w-xl text-text-secondary">
          Join our community. Book a space or get in touch today.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button onClick={onBook}>Book a Space</Button>
          <a
            href="#contact-form"
            className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent"
          >
            Send a Message
          </a>
        </div>

        <motion.form
          id="contact-form"
          onSubmit={handleSubmit(onSubmit)}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-16 max-w-lg space-y-4 rounded-2xl border border-border bg-surface p-6 text-left"
        >
          <div>
            <input
              {...register("name", { required: "Name is required" })}
              placeholder="Your Name"
              className="w-full rounded-lg border border-border bg-surface-light px-4 py-2.5 text-sm outline-none focus:border-accent"
            />
            {errors.name && (
              <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>
            )}
          </div>
          <div>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              placeholder="Your Email"
              className="w-full rounded-lg border border-border bg-surface-light px-4 py-2.5 text-sm outline-none focus:border-accent"
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>
            )}
          </div>
          <div>
            <textarea
              {...register("message", { required: "Message is required" })}
              placeholder="Your Message"
              rows={4}
              className="w-full resize-none rounded-lg border border-border bg-surface-light px-4 py-2.5 text-sm outline-none focus:border-accent"
            />
            {errors.message && (
              <p className="mt-1 text-xs text-red-400">{errors.message.message}</p>
            )}
          </div>
          <Button type="submit" className="w-full">
            Send Message
          </Button>
        </motion.form>
      </div>
    </section>
  );
}
