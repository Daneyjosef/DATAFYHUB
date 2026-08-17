"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Home, LayoutGrid, Tag, CalendarPlus, MessageCircle } from "lucide-react";

const TABS = [
  { id: "home", label: "Home", href: "#", icon: Home },
  { id: "spaces", label: "Spaces", href: "#spaces", icon: LayoutGrid },
  { id: "book", label: "Book", href: null, icon: CalendarPlus, isAction: true },
  { id: "pricing", label: "Pricing", href: "#pricing", icon: Tag },
  { id: "contact", label: "Contact", href: "#contact", icon: MessageCircle },
];

export default function MobileTabBar({ onBook }: { onBook: () => void }) {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sectionIds = ["spaces", "pricing", "contact"];
    const onScroll = () => {
      if (window.scrollY < 200) {
        setActive("home");
        return;
      }
      let current = "home";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < window.innerHeight * 0.5) {
          current = id;
        }
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="mobile-tab-bar glass fixed inset-x-0 bottom-0 z-50 border-t border-border md:hidden"
      aria-label="Primary"
    >
      <div className="flex items-center justify-around px-2 py-2">
        {TABS.map((tab) => {
          const Icon = tab.icon;
          const isActive = active === tab.id;

          if (tab.isAction) {
            return (
              <button
                key={tab.id}
                aria-label={tab.label}
                onClick={onBook}
                className="-mt-6 flex flex-col items-center gap-1"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-primary to-accent text-dark shadow-lg shadow-primary/30">
                  <Icon size={22} />
                </span>
                <span className="text-[10px] font-medium text-text-secondary">
                  {tab.label}
                </span>
              </button>
            );
          }

          return (
            <a
              key={tab.id}
              href={tab.href ?? "#"}
              onClick={() => setActive(tab.id)}
              className="relative flex flex-col items-center gap-1 px-3 py-1"
            >
              {isActive && (
                <motion.span
                  layoutId="tab-indicator"
                  className="absolute -top-2 h-1 w-5 rounded-full bg-accent"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <Icon
                size={22}
                className={isActive ? "text-accent" : "text-text-secondary"}
                strokeWidth={isActive ? 2.4 : 2}
              />
              <span
                className={`text-[10px] font-medium ${
                  isActive ? "text-accent" : "text-text-secondary"
                }`}
              >
                {tab.label}
              </span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}
