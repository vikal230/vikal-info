"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Sparkles } from "lucide-react";
import { useInView } from "@/hooks/useInView";

interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  color: string;
  border: string;
  accent: string;
  liveUrl: string;
  sourceUrl: string;
  highlights: string[];
}

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const { ref, inView } = useInView(0.08);
  const isEven = index % 2 === 0;

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, x: isEven ? -30 : 30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
      className={`group relative overflow-hidden rounded-2xl border ${project.border} bg-gradient-to-br ${project.color} glass-card p-6 sm:p-8 flex flex-col gap-5`}
    >
      {/* Corner number */}
      <span
        className="absolute top-5 right-6 font-mono text-5xl font-bold opacity-[0.06] select-none"
        style={{ color: project.accent }}
      >
        0{project.id}
      </span>

      {/* Header */}
      <div>
        <div className="flex items-start justify-between gap-3 mb-1">
          <div>
            <p className="text-xs code-badge text-[var(--text-muted)] mb-1">
              {project.subtitle}
            </p>
            <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] leading-tight">
              {project.title}
            </h3>
          </div>
          <Sparkles
            size={20}
            className="shrink-0 mt-1"
            style={{ color: project.accent, opacity: 0.7 }}
          />
        </div>
      </div>

      {/* Description */}
      <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
        {project.description}
      </p>

      {/* Highlights */}
      <div className="grid grid-cols-2 gap-2">
        {project.highlights.map((h) => (
          <div
            key={h}
            className="flex items-center gap-2 text-xs text-[var(--text-secondary)] py-1.5 px-3 rounded-lg"
            style={{
              background: `${project.accent}12`,
              border: `1px solid ${project.accent}25`,
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full shrink-0"
              style={{ background: project.accent }}
            />
            {h}
          </div>
        ))}
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="code-badge px-2 py-0.5 rounded-md text-[10px] border"
            style={{
              color: project.accent,
              background: `${project.accent}10`,
              borderColor: `${project.accent}25`,
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Actions */}
      {/* <div className="flex gap-3 pt-1 mt-auto">
        <motion.a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.04, y: -1 }}
          whileTap={{ scale: 0.97 }}
          className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium text-white shadow-lg transition-all"
          style={{
            background: `linear-gradient(135deg, ${project.accent}, ${project.accent}bb)`,
            boxShadow: `0 4px 20px ${project.accent}35`,
          }}
        >
          <ExternalLink size={14} />
          Live Demo
        </motion.a>
        <motion.a
          href={project.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.04, y: -1 }}
          whileTap={{ scale: 0.97 }}
          className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--text-muted)] transition-colors"
        >
          <Github size={14} />
          Source Code
        </motion.a>
      </div> */}

      {/* Actions */}
      <div className="flex flex-wrap gap-3 pt-1 mt-auto">
        <motion.a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.04, y: -1 }}
          whileTap={{ scale: 0.97 }}
          className="flex-1 min-w-[120px] flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium text-white shadow-lg transition-all"
          style={{
            background: `linear-gradient(135deg, ${project.accent}, ${project.accent}bb)`,
            boxShadow: `0 4px 20px ${project.accent}35`,
          }}
        >
          <ExternalLink size={14} />
          {project.adminUrl ? "Customer Site" : "Live Demo"}
        </motion.a>

        {project.adminUrl && (
          <motion.a
            href={project.adminUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, y: -1 }}
            whileTap={{ scale: 0.97 }}
            className="flex-1 min-w-[120px] flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium border text-white shadow-lg transition-all"
            style={{
              background: `linear-gradient(135deg, #ec4899, #be185d)`,
              borderColor: `#ec4899`,
              boxShadow: `0 4px 20px rgba(236, 72, 153, 0.35)`,
            }}
          >
            <ExternalLink size={14} />
            Admin Panel
          </motion.a>
        )}

        {/* Source Code Button */}
        <motion.a
          href={project.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.04, y: -1 }}
          whileTap={{ scale: 0.97 }}
          className="flex-1 min-w-[120px] flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--text-muted)] transition-colors"
        >
          <Github size={14} />
          Source Code
        </motion.a>
      </div>

      {/* Actions */}
      <div className="flex flex-wrap gap-3 pt-1 mt-auto">
        <motion.a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.04, y: -1 }}
          whileTap={{ scale: 0.97 }}
          className="flex-1 min-w-[120px] flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium text-white shadow-lg transition-all"
          style={{
            background: `linear-gradient(135deg, ${project.accent}, ${project.accent}bb)`,
            boxShadow: `0 4px 20px ${project.accent}35`,
          }}
        >
          <ExternalLink size={14} />
          Live Demo
        </motion.a>

        <motion.a
          href={project.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.04, y: -1 }}
          whileTap={{ scale: 0.97 }}
          className="flex-1 min-w-[120px] flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--text-muted)] transition-colors"
        >
          <Github size={14} />
          Source Code
        </motion.a>
      </div>
    </motion.article>
  );
}
