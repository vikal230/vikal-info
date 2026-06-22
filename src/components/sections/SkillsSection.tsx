"use client";

import { motion } from "framer-motion";
import { SectionWrapper, SectionHeading } from "@/components/ui/SectionWrapper";
import { SKILLS, SKILL_ICONS } from "@/lib/data";
import { useInView } from "@/hooks/useInView";

const CATEGORY_COLORS: Record<string, { bg: string; border: string; badge: string; dot: string }> = {
  Frontend: {
    bg:     "from-brand-500/10 to-transparent",
    border: "border-brand-500/20",
    badge:  "bg-brand-500/15 text-brand-400 border-brand-500/25",
    dot:    "bg-brand-400",
  },
  Backend: {
    bg:     "from-cyan-500/10 to-transparent",
    border: "border-cyan-500/20",
    badge:  "bg-cyan-500/15 text-cyan-400 border-cyan-500/25",
    dot:    "bg-cyan-400",
  },
  Database: {
    bg:     "from-emerald-500/10 to-transparent",
    border: "border-emerald-500/20",
    badge:  "bg-emerald-500/15 text-emerald-400 border-emerald-500/25",
    dot:    "bg-emerald-400",
  },
  "Gen AI & Tools": {
    bg:     "from-rose-500/10 to-transparent",
    border: "border-rose-500/20",
    badge:  "bg-rose-500/15 text-rose-400 border-rose-500/25",
    dot:    "bg-rose-400",
  },
};

function SkillCard({
  category,
  skills,
  index,
}: {
  category: string;
  skills: string[];
  index: number;
}) {
  const { ref, inView } = useInView(0.1);
  const colors = CATEGORY_COLORS[category];
  const isFeatured = category === "Frontend" || category === "Gen AI & Tools";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
      className={`relative overflow-hidden rounded-2xl border ${colors.border} bg-gradient-to-br ${colors.bg} glass-card p-6 flex flex-col gap-4 ${
        isFeatured ? "sm:col-span-2 lg:col-span-1" : ""
      }`}
    >
      {/* Glow dot */}
      <div
        className={`absolute top-4 right-4 w-2 h-2 rounded-full ${colors.dot} opacity-70 animate-pulse-slow`}
      />

      {/* Header */}
      <div className="flex items-center gap-3">
        <span className="text-2xl">{SKILL_ICONS[category]}</span>
        <div>
          <h3 className="font-bold text-[var(--text-primary)] text-base">{category}</h3>
          <p className="text-xs text-[var(--text-muted)]">{skills.length} skills</p>
        </div>
      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <motion.span
            key={skill}
            whileHover={{ scale: 1.06, y: -1 }}
            className={`code-badge px-2.5 py-1 rounded-lg border text-xs font-medium cursor-default transition-colors ${colors.badge}`}
          >
            {skill}
          </motion.span>
        ))}
      </div>

      {/* Progress bar decoration */}
      <div className="mt-auto pt-2">
        <div className="h-0.5 w-full rounded-full bg-[var(--border)] overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: `${60 + index * 8}%` } : { width: 0 }}
            transition={{ duration: 1.2, delay: index * 0.1 + 0.3, ease: "easeOut" }}
            className={`h-full rounded-full ${colors.dot}`}
          />
        </div>
      </div>
    </motion.div>
  );
}

export function SkillsSection() {
  return (
    <SectionWrapper id="skills">
      <SectionHeading
        eyebrow="Skills"
        title="Tech Stack"
        subtitle="Technologies I use to build end-to-end, production-grade applications."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {Object.entries(SKILLS).map(([category, skills], i) => (
          <SkillCard key={category} category={category} skills={skills} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
}
