"use client";

import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/data";
import { motion } from "framer-motion";

export function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="border-t border-[var(--border)] py-10 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <p className="font-bold text-[var(--text-primary)] mb-1">
            Vikal<span className="text-gradient"> Saini</span>
          </p>
          <p className="text-xs text-[var(--text-muted)]">
            Built with Next.js, Tailwind CSS & Framer Motion
          </p>
        </div>

        <div className="flex items-center gap-3">
          {[
            { href: SOCIAL_LINKS.github,   icon: Github,   label: "GitHub"   },
            { href: SOCIAL_LINKS.linkedin, icon: Linkedin, label: "LinkedIn" },
            { href: SOCIAL_LINKS.email,    icon: Mail,     label: "Email"    },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={label}
              className="w-9 h-9 flex items-center justify-center rounded-xl border border-[var(--border)] text-[var(--text-muted)] hover:text-brand-400 hover:border-brand-500/30 transition-colors"
            >
              <Icon size={15} />
            </a>
          ))}

          <motion.button
            onClick={scrollTop}
            whileHover={{ scale: 1.08, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-9 h-9 flex items-center justify-center rounded-xl bg-brand-500/10 border border-brand-500/20 text-brand-400 hover:bg-brand-500/20 transition-colors ml-2"
            aria-label="Scroll to top"
          >
            <ArrowUp size={15} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
