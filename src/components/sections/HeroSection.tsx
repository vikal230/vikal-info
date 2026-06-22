"use client";

import { motion } from "framer-motion";
import { ArrowDown, Sparkles, Terminal, Zap } from "lucide-react";
import { Button } from "@/components/ui/Button";

const TAGS = [
  "HTML",
  "CSS",
  "Java Script",
  "React.js",
  "Next.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "MySql",
  "Generative AI",
];

export function HeroSection() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6 pt-20 pb-12"
    >
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="orb w-[500px] h-[500px] opacity-30 dark:opacity-20"
          style={{
            background: "radial-gradient(circle, #6366f1 0%, transparent 70%)",
            top: "-10%",
            left: "-10%",
          }}
        />
        <div
          className="orb w-[400px] h-[400px] opacity-20 dark:opacity-15"
          style={{
            background: "radial-gradient(circle, #06b6d4 0%, transparent 70%)",
            bottom: "5%",
            right: "-5%",
            animationDelay: "2s",
          }}
        />
        <div
          className="orb w-[300px] h-[300px] opacity-15 dark:opacity-10"
          style={{
            background: "radial-gradient(circle, #f43f5e 0%, transparent 70%)",
            top: "60%",
            left: "55%",
            animationDelay: "1s",
          }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(var(--text-primary) 1px, transparent 1px), linear-gradient(90deg, var(--text-primary) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-emerald-500/30 text-emerald-500 dark:text-emerald-400 text-sm font-medium mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          Available for opportunities
          <Sparkles size={13} />
        </motion.div>

        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[var(--text-primary)] leading-[1.05] mb-6">
            <span className="block">MERN Stack</span>
            <span className="block text-gradient">&amp; Generative AI</span>
            <span className="block text-4xl sm:text-5xl md:text-6xl mt-1 font-light text-[var(--text-secondary)]">
              Developer
            </span>
          </h1>
        </motion.div>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg text-[var(--text-secondary)] max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          Shipped{" "}
          <strong className="text-[var(--text-primary)] font-semibold">
            4+ production-ready full-stack applications
          </strong>{" "}
          covering AI integration, real-time systems, and payments. Comfortable
          owning features end-to-end.
        </motion.p>

        {/* Tech tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {TAGS.map((tag, i) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.35 + i * 0.05 }}
              className="code-badge px-3 py-1 rounded-lg border border-[var(--border)] bg-[var(--bg-card)] text-[var(--text-secondary)] hover:border-brand-500/30 hover:text-brand-400 transition-colors cursor-default"
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-16"
        >
          <Button
            variant="primary"
            size="lg"
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              handleScroll("#projects");
            }}
          >
            <Zap size={16} />
            View Work
          </Button>
          <Button
            variant="outline"
            size="lg"
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleScroll("#contact");
            }}
          >
            Contact Me
          </Button>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="grid grid-cols-3 gap-4 max-w-sm mx-auto"
        >
          {[
            { value: "4", label: "Production Apps" },
            { value: "10+", label: "Technologies" },
            { value: "∞", label: "Curiosity" },
          ].map(({ value, label }) => (
            <div key={label} className="glass-card p-4 text-center">
              <p className="text-2xl font-bold text-gradient mb-0.5">{value}</p>
              <p className="text-xs text-[var(--text-muted)]">{label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[var(--text-muted)]"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ArrowDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  );
}
