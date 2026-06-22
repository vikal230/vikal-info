"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  delay?: number;
}

export function SectionWrapper({ id, className, children, delay = 0 }: SectionWrapperProps) {
  const { ref, inView } = useInView(0.08);

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay }}
      className={cn("section-pad px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto", className)}
    >
      {children}
    </motion.section>
  );
}

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
}

export function SectionHeading({ eyebrow, title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-14 text-center">
      <span className="code-badge inline-block px-3 py-1 rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-400 mb-4 uppercase tracking-widest text-xs font-medium">
        {eyebrow}
      </span>
      <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-3 tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-[var(--text-secondary)] max-w-xl mx-auto text-base">{subtitle}</p>
      )}
    </div>
  );
}
