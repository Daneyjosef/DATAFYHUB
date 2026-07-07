import { Twitter, Linkedin, Instagram, Zap } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-surface">
      <div className="h-px w-full bg-gradient-to-r from-primary via-accent to-primary" />
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 font-heading text-lg font-bold">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent">
                <Zap size={16} className="text-dark" />
              </span>
              Datafy Hub
            </div>
            <p className="mt-3 text-sm text-text-secondary">{SITE.tagline}</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Quick Links</h4>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-text-secondary hover:text-accent"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Contact</h4>
            <ul className="mt-4 space-y-2 text-sm text-text-secondary">
              <li>{SITE.address}</li>
              <li>{SITE.phones.join(" | ")}</li>
              <li>{SITE.email}</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Follow Us</h4>
            <div className="mt-4 flex gap-3">
              <a
                href="#"
                aria-label="Twitter"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-text-secondary hover:border-accent hover:text-accent"
              >
                <Twitter size={16} />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-text-secondary hover:border-accent hover:text-accent"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-text-secondary hover:border-accent hover:text-accent"
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-text-secondary">
          © 2026 Datafy Hub. All rights reserved. Powered by Datafy
          Technologies Limited.
        </div>
      </div>
    </footer>
  );
}
