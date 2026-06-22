"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, Star, BookOpen } from "lucide-react";
import { SectionWrapper, SectionHeading } from "@/components/ui/SectionWrapper";
import { EDUCATION } from "@/lib/data";
import { useInView } from "@/hooks/useInView";

export function EducationSection() {
  const { ref, inView } = useInView(0.1);

  return (
    <SectionWrapper id="education">
      <SectionHeading
        eyebrow="Education"
        title="Academic Background"
      />

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 32 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-2xl mx-auto"
      >
        <div className="relative overflow-hidden rounded-2xl border border-brand-500/20 bg-gradient-to-br from-brand-500/10 to-transparent glass-card p-8">
          {/* Decorative corner */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-brand-500/20 to-transparent rounded-bl-[80px]" />

          <div className="relative">
            {/* Icon + degree */}
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-brand-500/20 border border-brand-500/30 flex items-center justify-center shrink-0">
                <GraduationCap size={22} className="text-brand-400" />
              </div>
              <div>
                <h3 className="font-bold text-xl text-[var(--text-primary)] leading-tight mb-1">
                  {EDUCATION.degree}
                </h3>
                <p className="text-brand-400 font-medium">{EDUCATION.university}</p>
              </div>
            </div>

            {/* Meta pills */}
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border)] text-sm text-[var(--text-secondary)]">
                <Calendar size={13} />
                {EDUCATION.period}
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/25 text-sm text-amber-500 dark:text-amber-400 font-medium">
                <Star size={13} />
                CGPA: {EDUCATION.cgpa}
              </span>
            </div>

            {/* Relevant subjects */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <BookOpen size={14} className="text-[var(--text-muted)]" />
                <span className="text-xs uppercase tracking-widest text-[var(--text-muted)] font-medium">
                  Relevant Subjects
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {EDUCATION.subjects.map((subject, i) => (
                  <motion.span
                    key={subject}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.3 + i * 0.08 }}
                    className="px-3 py-1.5 rounded-xl text-sm font-medium bg-brand-500/10 border border-brand-500/25 text-brand-400"
                  >
                    {subject}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
